import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { contactLink, mainNav, searchAction } from "@/data/site";
import { Logo } from "./Logo";
import { ArrowRight, CloseIcon, MenuIcon, SearchIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Transparent over the hero, frosted green once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape or a click outside closes any open panel.
  useEffect(() => {
    if (!menuOpen && !searchOpen) return;

    const closeAll = () => {
      setMenuOpen(false);
      setSearchOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) closeAll();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen, searchOpen]);

  // The mobile menu is not needed once the full pill nav is visible.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Put the cursor in the search field as soon as it opens.
  useEffect(() => {
    if (!searchOpen) return;
    const id = window.setTimeout(() => searchInputRef.current?.focus(), 80);
    return () => window.clearTimeout(id);
  }, [searchOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500",
        solid
          ? "bg-forest-900/90 shadow-[0_1px_0_rgb(255_255_255/0.06),0_18px_40px_-28px_rgb(0_0_0/0.55)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="relative flex h-[68px] items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Center pill navigation */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-md">
            {mainNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-200",
                    link.current
                      ? "bg-white/[0.14] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
                      : "text-white/70 hover:bg-white/[0.07] hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((open) => !open);
              setMenuOpen(false);
            }}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            aria-label={searchOpen ? "Close menu search" : "Open menu search"}
            className={cn(
              "grid size-9 place-items-center rounded-full border text-white transition-colors duration-200",
              searchOpen ? "border-white/30 bg-white/15" : "border-white/15 hover:bg-white/10",
            )}
          >
            {searchOpen ? <CloseIcon className="size-4" /> : <SearchIcon className="size-4" />}
          </button>

          <a
            href={contactLink.href}
            className="hidden h-9 items-center rounded-full border border-white/25 px-4 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-white/10 sm:inline-flex"
          >
            {contactLink.label}
          </a>

          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setSearchOpen(false);
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="grid size-9 place-items-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </div>

      {/* Search dropdown — submits to the menu page like the original form */}
      <div
        id="site-search"
        inert={!searchOpen}
        className={cn(
          "absolute right-4 top-full w-[min(380px,calc(100vw-32px))] transition-[opacity,translate,visibility] duration-300 sm:right-6",
          searchOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <form
          action={searchAction}
          method="get"
          role="search"
          className="flex items-center gap-1 rounded-full border border-white/15 bg-forest-900 p-1.5 shadow-[0_24px_50px_-24px_rgb(0_0_0/0.6)]"
        >
          <SearchIcon className="ml-3 size-4 shrink-0 text-white/55" />
          <label htmlFor="site-search-input" className="sr-only">
            Search the menu
          </label>
          <input
            ref={searchInputRef}
            id="site-search-input"
            type="search"
            name="q"
            placeholder="Search cakes, frappes, cookies…"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none"
          />
          <button
            type="submit"
            className="h-9 shrink-0 rounded-full bg-cream-300 px-4 text-[13px] font-medium text-forest-950 transition-colors duration-200 hover:bg-cream-50"
          >
            Search
          </button>
        </form>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          "absolute inset-x-3 top-full transition-[opacity,translate,visibility] duration-300 lg:hidden",
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="mt-1 rounded-[28px] border border-white/10 bg-forest-900 p-2 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.65)]"
        >
          <ul className="flex flex-col">
            {mainNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg tracking-[-0.02em] transition-colors duration-200",
                    link.current ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {link.label}
                  <ArrowRight className="size-4 opacity-60" />
                </a>
              </li>
            ))}
          </ul>
          <a href={contactLink.href} className="btn btn-cream mt-2 w-full">
            {contactLink.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
