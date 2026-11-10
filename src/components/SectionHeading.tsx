import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
      <div>
        <p className="eyebrow">
          <ArrowRight className="size-3.5" />
          {eyebrow}
        </p>
        <h2
          id={id}
          className="mt-4 font-display text-[clamp(2.2rem,4.8vw,3.9rem)] font-medium leading-none tracking-[-0.045em] text-ink"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-[15px] leading-relaxed text-muted md:pb-1.5">{description}</p>
      ) : null}
    </div>
  );
}
