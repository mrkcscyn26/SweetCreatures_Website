// Catch setup errors so one broken feature does not stop the others.
function setup(feature) {
    try { feature(); } catch (error) { console.error(error); }
}
// Read the visitor's motion preference to avoid unwanted animation.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mark the current page so visitors know where they are.
setup(() => {
    const filename = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.bottom-nav a').forEach(link => {
        const current = link.getAttribute('href') === filename;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
});

// Add a soft highlight or touch press to make tiles feel interactive.
setup(() => {
    if (reducedMotion) return;
    const hover = window.matchMedia('(hover: hover)').matches;
    document.querySelectorAll('.box').forEach(box => {
        if (hover) box.addEventListener('pointermove', event => {
            // Use the pointer's position inside this tile to place the light.
            const bounds = box.getBoundingClientRect();
            box.style.setProperty('--mx', (event.clientX - bounds.left) + 'px');
            box.style.setProperty('--my', (event.clientY - bounds.top) + 'px');
        });
        box.addEventListener('pointerdown', event => {
            // Keep touch feedback brief so links inside the tile still work normally.
            if (event.pointerType !== 'touch') return;
            box.classList.add('pressed');
            window.setTimeout(() => box.classList.remove('pressed'), 160);
        });
    });
});

// Reuse one slider so both photo collections work the same way.
function slider(element) {
    const track = element.querySelector('.hero-slides');
    const originals = [...track.children];
    const count = originals.length;
    const controls = element.closest('.cake-deck') || element;
    const counter = controls.querySelector('.slide-counter');
    if (count < 2) return;
    let index = 1, moving = false, paused = false, start = null;
    const pending = [];
    // Copy the end photos so the slider can loop without a visible gap.
    const last = originals[count - 1].cloneNode(true);
    const first = originals[0].cloneNode(true);
    last.setAttribute('aria-hidden', 'true');
    first.setAttribute('aria-hidden', 'true');
    track.prepend(last);
    track.append(first);
    // Move the photo strip and remember which real photo is showing.
    function position() {
        track.style.transform = 'translateX(-' + index * element.clientWidth + 'px)';
        const current = (index - 1 + count) % count;
        element.dataset.slide = String(current);
        // Keep the deck counter in sync, including the copied end slides.
        if (counter) counter.textContent = (current + 1) + ' / ' + count;
    }
    // Move instantly when switching from a copied photo to the real one.
    function jump(next) {
        track.style.transition = 'none';
        index = next;
        position();
        void track.offsetHeight; // Apply the instant move before restoring animation.
        track.style.transition = '';
    }
    // After a slide ends, fix the loop and handle any waiting button clicks.
    function finish() {
        if (index === 0) jump(count);
        if (index === count + 1) jump(1);
        moving = false;
        if (pending.length) move(pending.shift(), true);
    }
    // Change one photo at a time so quick clicks do not interrupt a slide.
    function move(direction, manual = false) {
        if (moving) {
            if (manual) pending.push(direction);
            return;
        }
        index += direction;
        moving = !reducedMotion;
        position();
        if (reducedMotion) finish();
    }
    // Wait for the photo strip to stop before starting another move.
    track.addEventListener('transitionend', event => {
        if (event.target === track && event.propertyName === 'transform') finish();
    });
    // Connect arrow buttons only on sliders that have them.
    controls.querySelector('.hero-previous, .slider-previous')?.addEventListener('click', () => move(-1, true));
    controls.querySelector('.hero-next, .slider-next')?.addEventListener('click', () => move(1, true));
    // Pause while the visitor points at or touches the photos.
    element.addEventListener('mouseenter', () => { paused = true; });
    element.addEventListener('mouseleave', () => { paused = false; });
    element.addEventListener('pointerdown', event => {
        paused = true;
        if (!event.target.closest('a,button,input')) start = {x: event.clientX, y: event.clientY};
    });
    // Treat a clear sideways drag as a swipe, not a vertical page scroll.
    window.addEventListener('pointerup', event => {
        if (start) {
            const dx = event.clientX - start.x, dy = event.clientY - start.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1, true);
        }
        start = null;
        paused = false;
    });
    // Clear an unfinished swipe if the browser takes over the touch gesture.
    element.addEventListener('pointercancel', () => { start = null; paused = false; });
    // Refit the current photo when the screen changes size.
    window.addEventListener('resize', () => {
        jump(index === 0 ? count : index === count + 1 ? 1 : index);
        moving = false;
    });
    // Advance every three seconds, but not while the visitor is busy or the tab is hidden.
    window.setInterval(() => {
        if (!reducedMotion && !paused && !document.hidden && !controls.contains(document.activeElement)) move(1);
    }, 3000);
    // Start on the first real photo, not the extra copy before it.
    jump(1);
}
// Set up sliders separately so a problem in one does not stop the other.
document.querySelectorAll('.slider').forEach(element => setup(() => slider(element)));

// Combine category buttons and search so visitors can find menu items.
setup(() => {
    let activeFilter = 'all';
    const chips = document.querySelectorAll('.chip');
    const search = document.getElementById('search');
    const sections = document.querySelectorAll('.menu-section');
    const empty = document.getElementById('empty');
    // Hide non-matching items and show a message if none match.
    function applyMenu() {
        const q = search ? search.value.trim().toLowerCase() : '';
        let totalVisible = 0;
        sections.forEach(section => {
            const categoryMatches = activeFilter === 'all' || section.dataset.cat === activeFilter;
            let visible = 0;
            section.querySelectorAll('.menu-row').forEach(row => {
                const matches = !q || row.textContent.toLowerCase().includes(q);
                row.classList.toggle('hide', !matches);
                if (matches) visible++;
            });
            section.classList.toggle('hide', !(categoryMatches && visible > 0));
            if (categoryMatches) totalVisible += visible;
        });
        if (empty) empty.style.display = totalVisible === 0 ? 'block' : 'none';
    }
    // Select one category at a time and refresh the matching items.
    chips.forEach(chip => chip.addEventListener('click', () => {
        chips.forEach(other => other.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.filter;
        applyMenu();
    }));
    // Refresh results as the visitor types, without needing a search button.
    if (search) search.addEventListener('input', applyMenu);
});

// Start pickup dates at today so the date picker does not offer past dates.
setup(() => {
    const date = document.getElementById('cDate');
    if (!date) return;
    const today = new Date();
    date.min = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
});

// Share form checks so both forms show errors and success messages consistently.
function formValidation(formId, messageId, rules, clearErrors) {
    const form = document.getElementById(formId);
    if (!form) return;
    const message = document.getElementById(messageId);
    const button = form.querySelector('button[type="submit"]');
    let sending = false;
    // On the cake form, clear an error as soon as the visitor fixes the field.
    if (clearErrors) rules.forEach(([id, valid]) => {
        const field = document.getElementById(id);
        field.addEventListener('input', () => {
            if (valid(field.value.trim())) field.closest('.field').classList.remove('error');
        });
    });
    // Check required values before showing success and clearing the form.
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (sending) return;
        message.classList.remove('show');
        let ok = true;
        rules.forEach(([id, valid]) => {
            const field = document.getElementById(id);
            const good = valid(field.value.trim());
            field.closest('.field').classList.toggle('error', !good);
            if (!good) ok = false;
        });
        if (!ok) return;
        // Simulate a short send without contacting a server.
        sending = true;
        const label = button.textContent;
        button.textContent = 'Sending…';
        button.disabled = true;
        form.setAttribute('aria-busy', 'true');
        window.setTimeout(() => {
            form.reset();
            message.textContent = formId === 'contactForm' ?
                "Message sent successfully! We'll get back to you soon." :
                "Cake request sent successfully! We'll contact you within 24 hours with your quote.";
            message.classList.add('show');
            form.removeAttribute('aria-busy');
            button.textContent = label;
            button.disabled = false;
            sending = false;
        }, 1000);
    });
}
// Use simple shared checks for required text and email addresses.
const notEmpty = value => value.length > 0;
const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
// Give each form its own required fields and message.
setup(() => formValidation('contactForm', 'contactMsg', [['mName', notEmpty], ['mEmail', isEmail], ['mMsg', notEmpty]], false));
setup(() => formValidation('cakeForm', 'cakeMsg', [['cName', notEmpty], ['cEmail', isEmail], ['cPhone', notEmpty], ['cDate', notEmpty]], true));

// Reveal tiles on scroll, but leave everything visible if animation is unavailable.
setup(() => {
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    // Stop watching each tile once it is visible so the animation runs only once.
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {rootMargin: '30px'});
    // Enable hidden starting styles only after the reveal feature is ready.
    document.documentElement.classList.add('js');
    // Stagger nearby tiles slightly so they do not all appear at the same instant.
    document.querySelectorAll('[data-reveal]').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.setProperty('--reveal-d', (index % 4) * 40 + 'ms');
        observer.observe(item);
    });
});
