import { cn } from "@/utils/cn";

/** A little "sweet creature" — a cherry-topped dome with two eyes. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 24C4.5 16.3 9.6 10 16 10s11.5 6.3 11.5 14v1a3 3 0 0 1-3 3h-17a3 3 0 0 1-3-3v-1ZM10.3 19.5a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0ZM18.3 19.5a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0Z"
      />
      <circle cx="16" cy="7" r="2.6" fill="currentColor" />
      <path
        d="M16.5 4.6c.4-1.5 1.5-2.5 3.1-2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, href = "#top" }: { className?: string; href?: string }) {
  return (
    <a href={href} className={cn("group inline-flex items-center gap-2.5 text-white", className)}>
      <img
        src="/static-site/assets/images/logo/logo.png"
        alt=""
        className="size-10 rounded-full object-cover opacity-80 transition-transform duration-500 group-hover:-rotate-8"
      />
      <span className="font-display text-[17px] font-semibold tracking-[-0.025em]">Sweet Creatures</span>
    </a>
  );
}
