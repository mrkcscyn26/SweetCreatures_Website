import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { contactLink, mainNav, searchAction } from "@/data/site";
import { Logo } from "./Logo";
import {
  CakeIcon,
  CupIcon,
  GalleryIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
} from "./icons";

const navigationIcons = {
  Home: HomeIcon,
  "About Us": InfoIcon,
  Menu: CupIcon,
  "Custom Cakes": CakeIcon,
  Gallery: GalleryIcon,
  "Contact us": MailIcon,
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
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
    if (!searchOpen) return;

    const closeAll = () => setSearchOpen(false);
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
  }, [searchOpen]);

  // Put the cursor in the search field as soon as it opens.
  useEffect(() => {
    if (!searchOpen) return;
    const id = window.setTimeout(() => searchInputRef.current?.focus(), 80);
    return () => window.clearTimeout(id);
  }, [searchOpen]);

  const solid = scrolled;

  return (
    <>
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              aria-expanded={searchOpen}
              aria-controls="site-search"
              aria-label={searchOpen ? "Close menu search" : "Open menu search"}
              className={cn(
                "grid size-9 place-items-center rounded-full border text-white transition-colors duration-200",
                searchOpen ? "border-white/30 bg-white/15" : "border-white/15 hover:bg-white/10",
              )}
            >
              <SearchIcon className="size-4" />
            </button>
          </div>
        </div>

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
      </header>

      <nav
        aria-label="Main navigation"
        className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 rounded-full border border-white/30 bg-forest-900/45 px-2 pb-2 pt-2 text-white shadow-[0_-12px_35px_-24px_rgb(0_0_0/0.7)] backdrop-blur-2xl sm:inset-x-auto sm:left-1/2 sm:bottom-4 sm:-translate-x-1/2 sm:px-2"
      >
        <ul className="mx-auto flex max-w-3xl items-center justify-around gap-1 sm:gap-1">
          {[...mainNav.slice(0, -1), contactLink, mainNav[mainNav.length - 1]].map((link) => {
            const Icon = navigationIcons[link.label as keyof typeof navigationIcons];
            return (
              <li key={link.label} className="min-w-0 flex-1 sm:flex-none">
                <a
                  href={link.href}
                  aria-label={link.label}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 flex-col items-center justify-center gap-1 rounded-full px-2 py-1.5 text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:min-h-11 sm:min-w-[66px] sm:px-2",
                    link.current && "bg-white/15 text-white",
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="hidden text-[11px] font-medium leading-none sm:block">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
