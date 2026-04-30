import type { MenuCategorySlug } from "./menuCategories";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
};

export type MenuPage = {
  slug: MenuCategorySlug;
  title: string;
  subtitle: string;
  heroImage: string;
  items: MenuItem[];
};

export const menuPages: Record<MenuCategorySlug, MenuPage> = {
  milkshakes: {
    slug: "milkshakes",
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    heroImage: "/images/categories/milkshake.jpg",
    items: [
      {
        name: "Chocolate Milkshake",
        description: "Çikolatalı Milkshake",
        price: "₺320",
      },
      {
        name: "Caramel Milkshake",
        description: "Karamelli Milkshake",
        price: "₺320",
      },
      {
        name: "Oreo Milkshake",
        description: "Oreo parçacıklı Milkshake",
        price: "₺320",
      },
      {
        name: "Banana Milkshake",
        description: "Muzlu Milkshake",
        price: "₺320",
      },
      {
        name: "Strawberry Milkshake",
        description: "Çilekli Milkshake",
        price: "₺320",
      },
      {
        name: "Pineapple Milkshake",
        description: "Ananaslı Milkshake",
        price: "₺320",
      },
      {
        name: "Mango Milkshake",
        description: "Mangolu Milkshake",
        price: "₺320",
      },
      {
        name: "Bluesky Milkshake",
        description: "Mavi Milkshake",
        price: "₺320",
      },
      {
        name: "Melon Milkshake",
        description: "Kavunlu Milkshake",
        price: "₺320",
      },
    ],
  },

  frozens: {
    slug: "frozens",
    title: "Frozens",
    subtitle: "Frozen Çeşitleri",
    heroImage: "/images/categories/frozens.webp",
    items: [
      {
        name: "Strawberry Frozen",
        description: "Çilekli Frozen",
        price: "₺300",
      },
      {
        name: "Watermelon Frozen",
        description: "Karpuzlu Frozen",
        price: "₺300",
      },
      {
        name: "Lemon Frozen",
        description: "Limonlu Frozen",
        price: "₺300",
      },
      {
        name: "Blackberry Frozen",
        description: "Karadutlu Frozen",
        price: "₺300",
      },
      {
        name: "Melon Frozen",
        description: "Kavunlu Frozen",
        price: "₺300",
      },
      {
        name: "Peach Frozen",
        description: "Şeftalili Frozen",
        price: "₺300",
      },
      {
        name: "Kiwi Frozen",
        description: "Kivili Frozen",
        price: "₺300",
      },
      {
        name: "Cherry Frozen",
        description: "Vişneli Frozen",
        price: "₺300",
      },
    ],
  },

  "soguk-kahveler": {
    slug: "soguk-kahveler",
    title: "Cold Coffees",
    subtitle: "Soğuk Kahveler",
    heroImage: "/images/categories/cold-coffees.webp",
    items: [
      {
        name: "Espressofredo",
        description: "",
        price: "₺230",
      },
      {
        name: "Ice Coffee",
        description: "Soğuk Kahve",
        price: "₺290",
      },
      {
        name: "Ice Latte",
        description: "Soğuk Latte",
        price: "₺220",
      },
      {
        name: "Ice Mocha",
        description: "Soğuk Mocha",
        price: "₺250",
      },
      {
        name: "Ice Chocolate",
        description: "Soğuk Çikolata",
        price: "₺250",
      },
      {
        name: "Ice Americano",
        description: "",
        price: "₺220",
      },
      {
        name: "Frappe",
        description: "Frappe Sade",
        price: "₺200",
      },
      {
        name: "Frappe with Milk ",
        description: "Frappe Sütlü",
        price: "₺220",
      },
      {
        name: "Ice Cappuccino ",
        description: "Soğuk Cappuccino",
        price: "₺250",
      },
      {
        name: "Affogato ",
        description: "",
        price: "₺300",
      },
      {
        name: "Freddoccino",
        description: "",
        price: "₺300",
      },
    ],
  },

  "soguk-alternatifler": {
    slug: "soguk-alternatifler",
    title: "Cold Alternatives",
    subtitle: "Soğuk Alternatifler",
    heroImage: "/images/categories/cold-alternatives.webp",
    items: [
      {
        name: "Mojito",
        description: "",
        price: "₺350",
      },
      {
        name: "Cool Lime",
        description: "",
        price: "₺250",
      },
      {
        name: "Exotic",
        description: "Egzotik",
        price: "₺400",
      },
      {
        name: "Lemonade",
        description: "Limonata",
        price: "₺180",
      },
      {
        name: "Strawberry Lemonade",
        description: "Çilekli Limonata",
        price: "₺220",
      },
      {
        name: "Smoothy",
        description: "",
        price: "₺330",
      },
      {
        name: "Churcill",
        description: "",
        price: "₺180",
      },
      {
        name: "Fresh Orange Juice",
        description: "Sıkma Portakal Suyu",
        price: "₺220",
      },
      {
        name: "Pomegranete Juice",
        description: "Sıkma Nar Suyu",
        price: "₺250",
      },
      {
        name: "Uludağ Premium Mineral Water",
        description: "Uludağ Premium Soda",
        price: "₺140",
      },
      {
        name: "Uludağ Premium Bottle Water",
        description: "Uludağ Premium Cam Şişe Su",
        price: "₺60",
      },
    ],
  },

  matcha: {
    slug: "matcha",
    title: "Matcha",
    subtitle: "Matcha",
    heroImage: "/images/categories/matcha.webp",
    items: [
      {
        name: "Matcha Tea",
        description: "Matcha Çayı",
        price: "₺220",
      },
      {
        name: "Matcha Latte",
        description: "",
        price: "₺270",
      },
      {
        name: "Strawberry Matcha Latte",
        description: "Çilekli Matcha Latte",
        price: "₺320",
      },
      {
        name: "Vanilla Cream Matcha",
        description: "Vanilya Kremalı Matcha",
        price: "₺320",
      },
      {
        name: "Coconut Matcha",
        description: "Hindistan Cevizli Matcha",
        price: "₺330",
      },
      {
        name: "Mango Matcha Latte",
        description: "",
        price: "₺330",
      },
    ],
  },

  "sicak-kahveler": {
    slug: "sicak-kahveler",
    title: "Hot Coffees",
    subtitle: "Sıcak Kahveler",
    heroImage: "/images/categories/hot-coffees.webp",
    items: [
      {
        name: "Espresso",
        description: "",
        price: "₺150",
      },
      {
        name: "Double Espresso",
        description: "",
        price: "₺200",
      },
      {
        name: "Espresso Macchiato",
        description: "",
        price: "₺200",
      },
      {
        name: "Americano",
        description: "Americano Sade",
        price: "₺200",
      },
      {
        name: "Americano with Milk",
        description: "Americano Sütlü",
        price: "₺220",
      },
      {
        name: "Cappuccino",
        description: "",
        price: "₺220",
      },
      {
        name: "Latte Macchiato (Glass)",
        description: "Latte Macchiato (Cam Bardak)",
        price: "₺230",
      },
      {
        name: "Cafe Latte (Cup)",
        description: "Cafe Latte (Kupa)",
        price: "₺220",
      },
      {
        name: "Cortado",
        description: "",
        price: "₺200",
      },
      {
        name: "Conpanna (Espresso & Whipped Cream)",
        description: "Conpanna (Espresso & Krem Şanti)",
        price: "₺240",
      },
      {
        name: "Mocha",
        description: "",
        price: "₺240",
      },
      {
        name: "White Mocha",
        description: "Beyaz Mocha",
        price: "₺240",
      },
      {
        name: "Turkish Coffee",
        description: "Türk Kahvesi",
        price: "₺150",
      },
      {
        name: "Double Turkish Coffee",
        description: "Duble Türk Kahvesi",
        price: "₺220",
      },
      {
        name: "Nescafe",
        description: "",
        price: "₺180",
      },
      {
        name: "Nescafe with Milk",
        description: "Sütlü Nescafe",
        price: "₺200",
      },
      {
        name: "Hot Chocalate & Whipped Cream",
        description: "Sıcak Çikolata & Krem Şanti",
        price: "₺250",
      },
      {
        name: "Sahlep",
        description: "Salep (Taş Değirmen)",
        price: "₺250",
      },
      {
        name: "Extra Milk",
        description: "Pot Süt",
        price: "₺50",
      },
      {
        name: "Whipped Cream",
        description: "Krem Şanti",
        price: "₺50",
      },
      {
        name: "Extra Shot",
        description: "Ekstra Shot",
        price: "₺50",
      },
    ],
  },

  "bitki-caylari": {
    slug: "bitki-caylari",
    title: "Herbal Tea",
    subtitle: "Bitki Çayları",
    heroImage: "/images/categories/herbal-tea.webp",
    items: [
      {
        name: "Linden + Honey",
        description: "Çiçek Ihlamur + Bal",
        price: "₺240",
      },
      {
        name: "Ginger, Turmeric, Cinnamon, Clove, Hibiscus + Honey",
        description: "(Zencefil, Zerdeçal, Tarçın, Karanfil, Hibikus) Kış Çayı + Bal",
        price: "₺240",
      },
      {
        name: "Sagetea + Honey",
        description: "Adaçayı + Bal",
        price: "₺240",
      },
      {
        name: "Green Tea + Honey",
        description: "Yeşil Çay + Bal",
        price: "₺240",
      },
      {
        name: "Apple Tea + Honey",
        description: "Elma Çayı + Bal",
        price: "₺240",
      },
    ],
  },
};