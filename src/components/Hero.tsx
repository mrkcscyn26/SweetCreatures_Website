import { useEffect, useState } from "react";
import type { CSSProperties, TransitionEvent } from "react";
import { hero } from "@/data/site";
import { ArrowRight } from "./icons";

const riseDelay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;
const backgroundImages = [
  "/static-site/assets/images/index/main_image_3.jpg",
  "/static-site/assets/images/index/main_image_1.jpg",
  "/static-site/assets/images/index/main_image_2.jpg",
  "/static-site/assets/images/index/main_image_4.jpg",
];

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [animateSlides, setAnimateSlides] = useState(true);
  const slides = [backgroundImages.at(-1)!, ...backgroundImages, backgroundImages[0]];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setSlideIndex((current) => current + 1);
      }
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const handleSlideTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (slideIndex !== backgroundImages.length + 1) return;

    setAnimateSlides(false);
    setSlideIndex(1);
    window.requestAnimationFrame(() => setAnimateSlides(true));
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="group relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-900 lg:min-h-[120svh]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 flex"
          onTransitionEnd={handleSlideTransitionEnd}
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(slideIndex * 100) / slides.length}%)`,
            transition: animateSlides ? "transform 650ms ease-in-out" : "none",
          }}
        >
          {slides.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt=""
              fetchPriority={index === 1 ? "high" : "auto"}
              className="h-full w-full flex-none object-cover brightness-[0.72] saturate-[0.8]"
              style={{ flexBasis: `${100 / slides.length}%` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-forest-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-b from-transparent via-cream-200/65 to-cream-200 lg:h-[10%]" />
      </div>

      <div className="page-container flex flex-1 flex-col items-center pb-[18svh] pt-[clamp(120px,18svh,170px)] text-center md:pt-[clamp(100px,13svh,140px)]">
        <p
          className="rise flex flex-wrap items-center justify-center gap-x-9 gap-y-2 text-[13px] text-white/70"
          style={riseDelay(60)}
        >
          <span className="sr-only">Cafe, Bakery &amp; Bakeshop</span>
          {hero.highlights.map((item) => (
            <span key={item} aria-hidden="true" className="inline-flex items-center gap-1.5">
              <ArrowRight className="size-3.5" />
              {item}
            </span>
          ))}
        </p>

        <h1
          id="hero-title"
          className="rise mt-7 text-balance font-display text-[clamp(2.4rem,7vw,6.6rem)] font-medium leading-[1.02] tracking-[-0.045em] text-cream-300"
          style={riseDelay(150)}
        >
          {hero.titleLines[0]} <br className="hidden sm:inline" />
          {hero.titleLines[1]}
        </h1>

        <p
          className="rise mt-6 max-w-[36rem] text-[15px] leading-[1.65] text-white/85 sm:text-base"
          style={riseDelay(250)}
        >
          {hero.taglineLines[0]} <br className="hidden sm:inline" />
          {hero.taglineLines[1]}
        </p>

        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3" style={riseDelay(350)}>
          <a href={hero.primary.href} className="btn btn-cream">
            {hero.primary.label}
          </a>
          <a href={hero.secondary.href} className="btn btn-forest">
            {hero.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
