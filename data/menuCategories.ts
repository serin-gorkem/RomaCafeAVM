import type { LocalizedText } from "./i18n";

export type MenuCategory = {
  title: LocalizedText;
  slug: string;
  href: string;
  image: string;
  icon: string;
};

export const menuCategories = [
  {
    title: {
      en: "Breakfast",
      tr: "Kahvaltı",
    },
    slug: "kahvalti",
    href: "/kahvalti",
    image: "/images/categories/kahvalti.png",
    icon: "/icons/menu/kahvalti.svg",
  },
  {
    title: {
      en: "Snacks",
      tr: "Aperatifler",
    },
    slug: "aperatifler",
    href: "/aperatifler",
    image: "/images/categories/aperatifler.png",
    icon: "/icons/menu/aperatifler.svg",
  },
  {
    title: {
      en: "Toasts",
      tr: "Tostlar",
    },
    slug: "tostlar",
    href: "/tostlar",
    image: "/images/categories/tostlar.png",
    icon: "/icons/menu/tostlar.svg",
  },
  {
    title: {
      en: "Club Sandwiches",
      tr: "Club Sandviçler",
    },
    slug: "club-sandvicler",
    href: "/club-sandvicler",
    image: "/images/categories/club-sandvicler.png",
    icon: "/icons/menu/club-sandvicler.svg",
  },
  {
    title: {
      en: "Burgers",
      tr: "Hamburger Menü",
    },
    slug: "burgerler",
    href: "/burgerler",
    image: "/images/categories/burgerler.png",
    icon: "/icons/menu/burgerler.svg",
  },
  {
    title: {
      en: "Salads",
      tr: "Salatalar",
    },
    slug: "salatalar",
    href: "/salatalar",
    image: "/images/categories/salatalar.png",
    icon: "/icons/menu/salatalar.svg",
  },
  {
    title: {
      en: "Pizza",
      tr: "Pizzalar",
    },
    slug: "pizzalar",
    href: "/pizzalar",
    image: "/images/categories/pizzalar.png",
    icon: "/icons/menu/pizzalar.svg",
  },
  {
    title: {
      en: "Pastas",
      tr: "Makarnalar",
    },
    slug: "makarnalar",
    href: "/makarnalar",
    image: "/images/categories/makarnalar.png",
    icon: "/icons/menu/makarnalar.svg",
  },
  {
    title: {
      en: "Grills",
      tr: "Izgaralar",
    },
    slug: "izgaralar",
    href: "/izgaralar",
    image: "/images/categories/izgaralar.png",
    icon: "/icons/menu/izgaralar.svg",
  },
  {
    title: {
      en: "Pan-Fried Dishes",
      tr: "Tava Yemekleri",
    },
    slug: "tava-yemekleri",
    href: "/tava-yemekleri",
    image: "/images/categories/tava-yemekleri.png",
    icon: "/icons/menu/tava-yemekleri.svg",
  },
  {
    title: {
      en: "Waffle",
      tr: "Waffle",
    },
    slug: "waffle",
    href: "/waffle",
    image: "/images/categories/waffle.png",
    icon: "/icons/menu/waffle.svg",
  },
  {
    title: {
      en: "Crepes",
      tr: "Krepler",
    },
    slug: "krepler",
    href: "/krepler",
    image: "/images/categories/krepler.png",
    icon: "/icons/menu/krepler.svg",
  },
  {
    title: {
      en: "Ice Creams",
      tr: "Dondurmalar",
    },
    slug: "dondurmalar",
    href: "/dondurmalar",
    image: "/images/categories/dondurmalar.png",
    icon: "/icons/menu/dondurmalar.svg",
  },
  {
    title: {
      en: "Hot Drinks",
      tr: "Sıcak İçecekler",
    },
    slug: "sicak-icecekler",
    href: "/sicak-icecekler",
    image: "/images/categories/sicak-icecekler.png",
    icon: "/icons/menu/sicak-icecekler.svg",
  },
  {
    title: {
      en: "Cold Coffees",
      tr: "Soğuk Kahveler",
    },
    slug: "soguk-kahveler",
    href: "/soguk-kahveler",
    image: "/images/categories/soguk-kahveler.png",
    icon: "/icons/menu/soguk-kahveler.svg",
  },
  {
    title: {
      en: "Cold Drinks",
      tr: "Soğuk İçecekler",
    },
    slug: "soguk-icecekler",
    href: "/soguk-icecekler",
    image: "/images/categories/soguk-icecekler.png",
    icon: "/icons/menu/soguk-icecekler.svg",
  },
  {
    title: {
      en: "Milkshakes",
      tr: "Milkshake Çeşitleri",
    },
    slug: "milkshakes",
    href: "/milkshakes",
    image: "/images/categories/milkshakes.png",
    icon: "/icons/menu/milkshakes.svg",
  },
  {
    title: {
      en: "Smoothies",
      tr: "Smoothie Çeşitleri",
    },
    slug: "smoothies",
    href: "/smoothies",
    image: "/images/categories/smoothies.png",
    icon: "/icons/menu/smoothies.svg",
  },
  {
    title: {
      en: "Frozens",
      tr: "Frozen Çeşitleri",
    },
    slug: "frozens",
    href: "/frozens",
    image: "/images/categories/frozens.png",
    icon: "/icons/menu/frozens.svg",
  },
  {
    title: {
      en: "Fresh Juices",
      tr: "Taze Meyve Suları",
    },
    slug: "meyve-sulari",
    href: "/meyve-sulari",
    image: "/images/categories/meyve-sulari.png",
    icon: "/icons/menu/meyve-sulari.svg",
  },
  {
    title: {
      en: "Local Drinks",
      tr: "Yerli İçkiler",
    },
    slug: "yerli-alkollu-icecekler",
    href: "/yerli-alkollu-icecekler",
    image: "/images/categories/yerli-alkollu-icecekler.png",
    icon: "/icons/menu/yerli-alkollu-icecekler.svg",
  },
  {
    title: {
      en: "Imported Drinks",
      tr: "Yabancı İçkiler",
    },
    slug: "yabanci-alkollu-icecekler",
    href: "/yabanci-alkollu-icecekler",
    image: "/images/categories/yabanci-alkollu-icecekler.png",
    icon: "/icons/menu/yabanci-alkollu-icecekler.svg",
  },
  {
    title: {
      en: "Cocktails",
      tr: "Kokteyller",
    },
    slug: "kokteyller",
    href: "/kokteyller",
    image: "/images/categories/kokteyller.png",
    icon: "/icons/menu/kokteyller.svg",
  },
  {
    title: {
      en: "Beers",
      tr: "Biralar",
    },
    slug: "biralar",
    href: "/biralar",
    image: "/images/categories/biralar.png",
    icon: "/icons/menu/biralar.svg",
  },
] as const;

export type MenuCategorySlug = (typeof menuCategories)[number]["slug"];