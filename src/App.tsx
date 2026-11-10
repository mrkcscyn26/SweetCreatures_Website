import { Featured } from "@/components/Featured";
import { Hero } from "@/components/Hero";
import { OurShop } from "@/components/OurShop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatWeMake } from "@/components/WhatWeMake";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cream-100 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-forest-900"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <Featured />
        <WhatWeMake />
        <OurShop />
      </main>

      <SiteFooter />
    </>
  );
}
