import { makes, type MakeItem } from "@/data/site";
import { trackPointer } from "@/utils/spotlight";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight, CakeIcon, CupIcon, GalleryIcon } from "./icons";

const icons: Record<MakeItem["icon"], typeof CupIcon> = {
  menu: CupIcon,
  cake: CakeIcon,
  gallery: GalleryIcon,
};

export function WhatWeMake() {
  return (
    <section id="what-we-make" aria-labelledby="make-title" className="pb-24 sm:pb-28">
      <div className="page-container">
        <Reveal>
          <SectionHeading id="make-title" eyebrow="From our kitchen" title="What We Make" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {makes.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 110} className="h-full">
                <a
                  href={item.href}
                  onPointerMove={trackPointer}
                  className="spotlight group relative isolate flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-[28px] bg-forest-900 p-7 text-cream-100 shadow-[0_30px_60px_-36px_rgb(27_45_31/0.75)] transition-[translate,background-color] duration-500 [--spot-color:rgb(229_217_194/0.12)] hover:-translate-y-1 hover:bg-forest-800"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/95 via-forest-950/45 to-forest-950/25"
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cream-300">
                      <Icon className="size-6" />
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:border-cream-300 group-hover:bg-cream-300 group-hover:text-forest-950">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <div className="relative z-10 mt-12 text-center">
                    <h3 className="font-display text-[26px] font-medium tracking-[-0.03em] text-cream-100">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-2 min-h-[3.25em] max-w-[30ch] text-[15px] leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>

                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
