import { featured } from "@/data/site";
import { trackPointer } from "@/utils/spotlight";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Featured() {
  return (
    <section id="featured" aria-labelledby="featured-title" className="pb-24 pt-6 sm:pb-28 sm:pt-6">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            id="featured-title"
            eyebrow="On the counter"
            title="Featured This Week"
            description="A few colorful favorites from our menu, made to brighten your cafe break."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.name} delay={index * 110} className="h-full">
              <article
                onPointerMove={trackPointer}
                className="spotlight group flex h-full flex-col rounded-[28px] border border-white/60 bg-white/25 p-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.68),0_24px_48px_-34px_rgb(40_65_44/0.4)] backdrop-blur-xl transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.75),0_34px_60px_-34px_rgb(40_65_44/0.5)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-cream-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: item.position }}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-cream-50/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-900 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5">
                  <h3 className="font-display text-[22px] font-medium leading-tight tracking-[-0.025em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.description}</p>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-forest-900">
                      {item.price}
                    </p>
                    <a
                      href="/static-site/menu.html"
                      aria-label={`Find ${item.name} on the menu`}
                      className="grid size-10 place-items-center rounded-full border border-forest-900/15 text-forest-900 transition-all duration-300 hover:rotate-45 hover:border-forest-900 hover:bg-forest-900 hover:text-cream-100"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="/static-site/menu.html" className="btn btn-dark group">
            Explore the Full Menu
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
