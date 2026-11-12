import { contact, images, story } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, ClockIcon, MapPinIcon } from "./icons";

export function OurShop() {
  return (
    <section id="our-shop" aria-labelledby="shop-title" className="pb-6">
      <div className="page-container">
        <Reveal>
          <SectionHeading id="shop-title" eyebrow="Since 2020" title="Our Shop" />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-white/60 bg-white/25 p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.68)] backdrop-blur-xl sm:p-10">
              <p className="font-display text-[clamp(1.3rem,2.1vw,1.7rem)] leading-[1.4] tracking-[-0.02em] text-ink">
                {story.lead}{" "}
                <span className="text-forest-700 underline decoration-sage/70 decoration-2 underline-offset-[6px]">
                  {story.song}
                </span>
                .
              </p>
              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted">{story.body}</p>

              <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-forest-900/10 pt-6">
                {story.facts.map((fact) => (
                  <div key={fact.label} className="min-w-0">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-xs">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-[clamp(1.15rem,2.2vw,1.6rem)] font-medium tracking-[-0.03em] text-forest-900">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex justify-end pt-9">
                <a href={story.cta.href} className="btn btn-outline group">
                  {story.cta.label}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <figure className="group relative h-full min-h-[320px] overflow-hidden rounded-[28px] bg-cream-300 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[440px]">
              <img
                src={images.ourShop}
                alt="Sweet Creatures cafe storefront in Malabon"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 rounded-2xl border border-white/10 bg-forest-950/70 px-4 py-3 text-[13px] text-cream-100 backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                <span className="inline-flex items-center gap-2">
                  <MapPinIcon className="size-4 text-cream-300" />
                  Longos, Malabon
                </span>
                <span className="inline-flex items-center gap-2">
                  <ClockIcon className="size-4 text-cream-300" />
                  {contact.hours}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
