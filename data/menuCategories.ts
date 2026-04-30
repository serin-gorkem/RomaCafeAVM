export const menuCategories = [
  {
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    slug: "milkshakes",
    href: "/milkshakes",
    image: "/images/categories/milkshakes.webp",
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
] as const;

export type MenuCategorySlug = (typeof menuCategories)[number]["slug"];