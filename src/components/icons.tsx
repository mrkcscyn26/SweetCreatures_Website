import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.6 15.6 4.4 4.4" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="m3 10 9-7 9 7v10H3z" />
      <path d="M9 20v-7h6v7" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6m0-10v1" />
    </svg>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M4 8.5h16M4 15.5h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </svg>
  );
}

/** Iced drink — used for the Full Menu card. */
export function CupIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M6.5 9h11l-1.25 10.4a1.8 1.8 0 0 1-1.8 1.6h-4.9a1.8 1.8 0 0 1-1.8-1.6L6.5 9Z" />
      <path d="M5.5 9h13" />
      <path d="M7.5 9a4.5 3 0 0 1 9 0" />
      <path d="m12.5 6 1.4-3.5h2.6" />
      <path d="M9.3 14h5.4" />
    </svg>
  );
}

export function CakeIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M3.5 20.5h17" />
      <path d="M5 20.5v-6.2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.2" />
      <path d="M5 16.2c1.3 0 1.9-1 3.5-1s2.2 1 3.5 1 1.9-1 3.5-1 2.2 1 3.5 1" />
      <path d="M12 12.3V9.2" />
      <path d="M12 6.8c.75 0 1.3-.55 1.3-1.25C13.3 4.6 12 3.2 12 3.2s-1.3 1.4-1.3 2.35c0 .7.55 1.25 1.3 1.25Z" />
    </svg>
  );
}

export function GalleryIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3.5" />
      <circle cx="8.8" cy="9.6" r="1.6" />
      <path d="m21 15.5-4.6-4.6L7.5 20" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0 1 13 0c0 5.5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.6V12l2.9 1.9" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M14.5 8.5h-1.8c-.9 0-1.5.7-1.5 1.6v1.9H9.7v2.1h1.5V19h2.1v-4.9h1.7l.3-2.1h-2v-1.6c0-.3.2-.5.5-.5h1.7z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M14 4v9.2a3.2 3.2 0 1 1-2.3-3.1" />
      <path d="M14 4c.4 2.1 1.9 3.6 4 3.9" />
    </svg>
  );
}
