export const menuCategories = [
  {
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    slug: "milkshakes",
    href: "/milkshakes",
    image: "/images/categories/milkshake.jpg",
  },
  {
    title: "Frozens",
    subtitle: "Frozen Çeşitleri",
    slug: "frozens",
    href: "/frozens",
    image: "/images/categories/frozens.webp",
  },
  {
    title: "Cold Coffees",
    subtitle: "Soğuk Kahveler",
    slug: "soguk-kahveler",
    href: "/soguk-kahveler",
    image: "/images/categories/cold-coffees.webp",
  },
  {
    title: "Cold Alternatives",
    subtitle: "Soğuk Alternatifler",
    slug: "soguk-alternatifler",
    href: "/soguk-alternatifler",
    image: "/images/categories/cold-alternatives.webp",
  },
  {
    title: "Matcha",
    subtitle: "Matcha",
    slug: "matcha",
    href: "/matcha",
    image: "/images/categories/matcha.webp",
  },
  {
    title: "Hot Coffees",
    subtitle: "Sıcak Kahveler",
    slug: "sicak-kahveler",
    href: "/sicak-kahveler",
    image: "/images/categories/hot-coffees.webp",
  },
  {
    title: "Herbal Tea",
    subtitle: "Bitki Çayları",
    slug: "bitki-caylari",
    href: "/bitki-caylari",
    image: "/images/categories/herbal-tea.webp",
  },
  {
    title: "Ice Creams",
    subtitle: "Dondurmalar",
    slug: "dondurmalar",
    href: "/dondurmalar",
    image: "/images/categories/ice-creams.webp",
  },

  {
    title: "Ice Cream Desserts",
    subtitle: "Dondurmalı Tatlılar",
    slug: "dondurmali-tatlilar",
    href: "/dondurmali-tatlilar",
    image: "/images/categories/ice-cream-desserts.webp",
  },

  {
    title: "Waffle",
    subtitle: "Waffle",
    slug: "waffle",
    href: "/waffle",
    image: "/images/categories/waffle.webp",
  },
] as const;

export type MenuCategorySlug = (typeof menuCategories)[number]["slug"];
