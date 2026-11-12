import { contact, contactLink, footerLinks, images, socials } from "@/data/site";
import {
  ArrowRight,
  ArrowUp,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  TikTokIcon,
} from "./icons";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
};

export function SiteFooter() {
  return (
    <footer className="relative bg-forest-900 pb-20 text-cream-100">
      {/* Mirror of the hero: cream mist dissolving into forest green */}
      <div aria-hidden="true" className="footer-fog pointer-events-none relative h-[clamp(200px,30vw,440px)] overflow-hidden">
        <img
          src={images.heroFog}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 h-[38%] bg-linear-to-b from-cream-200 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-b from-transparent to-forest-900" />
      </div>

      <div className="page-container grid gap-12 pb-14 pt-2 md:grid-cols-[1.4fr_0.7fr_1fr] md:gap-10 lg:gap-20">
        <section aria-label="About Sweet Creatures" className="max-w-md">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full border border-white/20 bg-white/[0.04]">
              <img
                src="/static-site/assets/images/logo/logo.png"
                alt=""
                className="size-11 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="font-display text-3xl font-semibold text-cream-100">Sweet Creatures</span>
          </a>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">
            Sweet treats, iced coffee, cookies, and custom cakes for every fan and every celebration.
          </p>
          <nav aria-label="Social media" className="mt-6 flex gap-2.5">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-cream-100 transition-colors duration-300 hover:border-cream-300 hover:bg-cream-300 hover:text-forest-950"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </nav>
        </section>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="text-xs font-medium uppercase tracking-[0.16em] text-cream-300/80">
            Explore
          </h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-visit">
          <h2 id="footer-visit" className="text-xs font-medium uppercase tracking-[0.16em] text-cream-300/80">
            Visit Us
          </h2>
          <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-white/75">
            <li className="flex gap-3">
              <MapPinIcon className="mt-[3px] size-[18px] shrink-0 text-cream-300/80" />
              {contact.address}
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-[3px] size-[18px] shrink-0 text-cream-300/80" />
              {contact.hours}
            </li>
            <li className="flex min-w-0 gap-3">
              <MailIcon className="mt-[3px] size-[18px] shrink-0 text-cream-300/80" />
              <a
                href={`mailto:${contact.email}`}
                className="min-w-0 break-all underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {contact.email}
              </a>
            </li>
          </ul>
          <a
            href={contactLink.href}
            className="group mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-cream-200 transition-colors hover:text-white"
          >
            {contactLink.label}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col gap-3 py-6 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sweet Creatures · All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
