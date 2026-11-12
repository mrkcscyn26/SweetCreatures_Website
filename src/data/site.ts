import heroFog from "@/assets/raw/hero-fog.png";

export const images = {
  heroFog,
  ourShop: "/static-site/assets/images/index/our_shop.jpg",
};

export type NavLink = {
  label: string;
  href: string;
  current?: boolean;
};

/** Center pill navigation (the original site's pages). */
export const mainNav: NavLink[] = [
  { label: "Home", href: "#top", current: true },
  { label: "Menu", href: "/static-site/menu.html" },
  { label: "Custom Cakes", href: "/static-site/custom-cakes.html" },
  { label: "Gallery", href: "/static-site/gallery.html" },
  { label: "About Us", href: "/static-site/about.html" },
];

/** Outlined call to action on the right of the header. */
export const contactLink: NavLink = { label: "Contact us", href: "/static-site/contact.html" };

/** Search submits to the menu page, exactly like the original form. */
export const searchAction = "/static-site/menu.html";

export const hero = {
  highlights: ["Cafe", "Bakery", "Bakeshop"],
  titleLines: ["Sweet Creatures,", "baked for every fan."],
  taglineLines: ["Sweet treats, iced coffee, cookies & custom cakes,", "made for every celebration."],
  primary: { label: "Order a Cake", href: "/static-site/custom-cakes.html" },
  secondary: { label: "See the Menu", href: "/static-site/menu.html" },
};

export type FeaturedItem = {
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  position?: string;
};

export const featured: FeaturedItem[] = [
  {
    category: "Cake",
    name: "Strawberry Cream Cake",
    description: "Vanilla sponge, fresh strawberries, and hand-whipped cream.",
    price: "₱400",
    image: "/static-site/assets/images/menu/strawberry-cake-ring.png",
    alt: "Strawberry Cream Cake topped with fresh strawberries and whipped cream",
    position: "50% 40%",
  },
  {
    category: "Signature Drink",
    name: "Matcha Tiramisu Drink",
    description: "Creamy matcha layers, whipped topping, and a crisp biscuit finish.",
    price: "₱155",
    image: "/static-site/assets/images/menu/matcha-tiramisu-drink-new.png",
    alt: "Layered Matcha Tiramisu Drink topped with cream and a biscuit",
    position: "50% 30%",
  },
  {
    category: "Sweet Crêpe",
    name: "Banana Caramel Crunch Crêpe",
    description: "Banana, cornflake crunch, vanilla ice cream, and salted caramel drizzle.",
    price: "₱120",
    image: "/static-site/assets/images/menu/banana-caramel-crunch-crepe-new.png",
    alt: "Banana Caramel Crunch Crêpe served with ice cream and caramel drizzle",
    position: "50% 45%",
  },
];

export type MakeItem = {
  title: string;
  description: string;
  href: string;
  icon: "menu" | "cake" | "gallery";
  image: string;
  imageAlt: string;
};

export const makes: MakeItem[] = [
  {
    title: "Full Menu",
    description: "Frappes, iced coffee, nacho fries, & cakes",
    href: "/static-site/menu.html",
    icon: "menu",
    image: "/static-site/assets/images/index/loaded-nachos.png",
    imageAlt: "Loaded nachos from the Sweet Creatures menu",
  },
  {
    title: "Custom Cakes",
    description: "Made to order for birthdays & special occasions",
    href: "/static-site/custom-cakes.html",
    icon: "cake",
    image: "/static-site/assets/images/custom-cakes/Anniversary hearts cake.jpg",
    imageAlt: "Custom anniversary cake decorated with hearts",
  },
  {
    title: "Gallery",
    description: "Photos of our cakes & our cozy shop",
    href: "/static-site/gallery.html",
    icon: "gallery",
    image: "/static-site/assets/images/gallery/Shop Atmosphere The display case.jpg",
    imageAlt: "The display case inside Sweet Creatures",
  },
];

export const story = {
  lead: "Sweet Creatures began as a home-based shop in 2020, during the pandemic. We named it after Harry Styles’ song",
  song: "Sweet Creature",
  body: "Today, our café and bakeshop in Malabon is a cozy place to gather over frappes, iced coffee, and nacho fries. We also make custom cakes for your celebrations.",
  facts: [
    { label: "Since", value: "2020" },
    { label: "Based in", value: "Malabon" },
    { label: "Open daily", value: "12–11pm" },
  ],
  cta: { label: "Read Our Story", href: "/static-site/about.html" },
};

export const contact = {
  address: "Puregas Pampano St, Longos, Malabon, Philippines, 1472",
  hours: "Open daily, 12pm–11pm",
  email: "sweetcreatures2020@gmail.com",
};

export const footerLinks: NavLink[] = [
  { label: "Our Menu", href: "/static-site/menu.html" },
  { label: "Custom Cakes", href: "/static-site/custom-cakes.html" },
  { label: "Gallery", href: "/static-site/gallery.html" },
  { label: "About Us", href: "/static-site/about.html" },
];

export const socials = [
  {
    label: "Sweet Creatures on Instagram",
    href: "https://www.instagram.com/_sweetcreaturesss/",
    icon: "instagram",
  },
  {
    label: "Sweet Creatures on Facebook",
    href: "https://www.facebook.com/sweetcreaturesph",
    icon: "facebook",
  },
  {
    label: "Sweet Creatures on TikTok",
    href: "https://www.tiktok.com/@sweet.creatures7",
    icon: "tiktok",
  },
] as const;
