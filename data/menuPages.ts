import type { MenuCategorySlug } from "./menuCategories";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuContentBlock = {
  id: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  items: MenuItem[];
};

export type MenuPage = {
  slug: MenuCategorySlug;
  title: string;
  subtitle: string;
  blocks: MenuContentBlock[];
};

export const menuPages: Record<MenuCategorySlug, MenuPage> = {
  milkshakes: {
    slug: "milkshakes",
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    blocks: [
      {
        id: "milkshakes-main",
        title: "Milkshakes",
        subtitle: "Milkshake Çeşitleri",
        image: "/images/menu-blocks/milkshakes.png",
        imageAlt: "Milkshake çeşitleri temsili görsel",
        imageSide: "right",
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
    ],
  },

  frozens: {
    slug: "frozens",
    title: "Frozens",
    subtitle: "Frozen Çeşitleri",
    blocks: [
      {
        id: "frozens-main",
        title: "Frozens",
        subtitle: "Frozen Çeşitleri",
        image: "/images/menu-blocks/frozens.png",
        imageAlt: "Frozen çeşitleri temsili görsel",
        imageSide: "left",
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
    ],
  },

  "soguk-kahveler": {
    slug: "soguk-kahveler",
    title: "Cold Coffees",
    subtitle: "Soğuk Kahveler",
    blocks: [
      {
        id: "cold-coffees-classics",
        title: "Cold Coffees",
        subtitle: "Soğuk Kahveler",
        image: "/images/menu-blocks/soguk-kahveler-1.webp",
        imageAlt: "Soğuk kahveler temsili görsel",
        imageSide: "right",
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
        ],
      },
      {
        id: "cold-coffees-specials",
        title: "Frappe & Specials",
        subtitle: "Frappe ve Özel Kahveler",
        image: "/images/menu-blocks/soguk-kahveler-2.png",
        imageAlt: "Frappe, affogato ve özel soğuk kahveler temsili görsel",
        imageSide: "left",
        items: [
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
            name: "Frappe with Milk",
            description: "Frappe Sütlü",
            price: "₺220",
          },
          {
            name: "Ice Cappuccino",
            description: "Soğuk Cappuccino",
            price: "₺250",
          },
          {
            name: "Affogato",
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
    ],
  },

  "soguk-alternatifler": {
    slug: "soguk-alternatifler",
    title: "Cold Alternatives",
    subtitle: "Soğuk Alternatifler",
    blocks: [
      {
        id: "cold-alternatives-main",
        title: "Cold Alternatives",
        subtitle: "Soğuk Alternatifler",
        image: "/images/menu-blocks/soguk-alternatifler-1.webp",
        imageAlt: "Soğuk alternatif içecekler temsili görsel",
        imageSide: "right",
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
        ],
      },
      {
        id: "cold-alternatives-fresh",
        title: "Fresh & Premium",
        subtitle: "Taze ve Premium İçecekler",
        image: "/images/menu-blocks/soguk-alternatifler-2.webp",
        imageAlt: "Taze sıkım ve premium içecekler temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Fresh Orange Juice",
            description: "Sıkma Portakal Suyu",
            price: "₺220",
          },
          {
            name: "Pomegranate Juice",
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
    ],
  },

  matcha: {
    slug: "matcha",
    title: "Matcha",
    subtitle: "Matcha",
    blocks: [
      {
        id: "matcha-main",
        title: "Matcha",
        subtitle: "Matcha",
        image: "/images/menu-blocks/matcha.webp",
        imageAlt: "Matcha çeşitleri temsili görsel",
        imageSide: "right",
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
    ],
  },

  "sicak-kahveler": {
    slug: "sicak-kahveler",
    title: "Hot Coffees",
    subtitle: "Sıcak Kahveler",
    blocks: [
      {
        id: "hot-coffees-espresso",
        title: "Espresso Based Coffees",
        subtitle: "Espresso Bazlı Kahveler",
        image: "/images/menu-blocks/sicak-kahveler-1.png",
        imageAlt: "Espresso bazlı sıcak kahveler temsili görsel",
        imageSide: "right",
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
        ],
      },
      {
        id: "hot-coffees-specials",
        title: "Special Hot Drinks",
        subtitle: "Özel Sıcak İçecekler",
        image: "/images/menu-blocks/sicak-kahveler-2.png",
        imageAlt: "Özel sıcak kahve ve içecekler temsili görsel",
        imageSide: "left",
        items: [
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
            name: "Hot Chocolate & Whipped Cream",
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
    ],
  },

  "bitki-caylari": {
    slug: "bitki-caylari",
    title: "Herbal Tea",
    subtitle: "Bitki Çayları",
    blocks: [
      {
        id: "herbal-tea-main",
        title: "Herbal Tea",
        subtitle: "Bitki Çayları",
        image: "/images/menu-blocks/bitki-caylari.webp",
        imageAlt: "Bitki çayları temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Linden + Honey",
            description: "Çiçek Ihlamur + Bal",
            price: "₺240",
          },
          {
            name: "Ginger, Turmeric, Cinnamon, Clove, Hibiscus + Honey",
            description:
              "(Zencefil, Zerdeçal, Tarçın, Karanfil, Hibiskus) Kış Çayı + Bal",
            price: "₺240",
          },
          {
            name: "Sage Tea + Honey",
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
    ],
  },
  dondurmalar: {
    slug: "dondurmalar",
    title: "Ice Creams",
    subtitle: "Dondurmalar",
    blocks: [
      {
        id: "ice-creams-main",
        title: "Ice Creams",
        subtitle: "Dondurmalar",
        image: "/images/menu-blocks/dondurmalar.webp",
        imageAlt: "Dondurma çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Melon with Ice Cream",
            description:
              "Ice Cream in Melon / Taze meyveler eşliğinde kavun içinde Roma Dondurma",
            price: "₺600",
          },
          {
            name: "Roma Chef's Special",
            description: "Roma Ustam Özel Karışık Dondurması",
            price: "₺650",
          },
          {
            name: "Venice Venedik",
            description:
              "Pistachio, Honey, Almond Chestnut, Chocolate Chips / Antep Fıstığı, Bal, Badem, Kestane, Parça Çikolata",
            price: "₺350",
          },
          {
            name: "Tropical",
            description:
              "Pineapple, Mango, Kiwi, Black Mulberry/ Ananas, Mango, Kivi, Karadut",
            price: "₺350",
          },
          {
            name: "Iceman",
            description:
              "Raisin, Welnut, Chesnut, Chocalate Chips / Sakız, Ceviz, Kestane, Parça Çikolata",
            price: "₺350",
          },
          {
            name: "Banana Split",
            description: "Mixed Ice Cream, Banana / Karışık Dondurma, Muz",
            price: "₺500",
          },
          {
            name: "Ice Cream with Wafer Helva",
            description:
              "Vanilin, Chocalte, Coffee, Caramel /Vanilya, Çikolata, Kahve, Karamel",
            price: "₺400",
          },
          {
            name: "Denmark",
            description: "Chocalate and Caramel /Çikolata ve Karamel",
            price: "₺350",
          },
          {
            name: "Hawaii",
            description:
              "Tutti Frutti, Pineapple, Strawberry, Banana/Karışık Meyve, Ananas, Çilek, Muz",
            price: "₺350",
          },
        ],
      },
    ],
  },

  "dondurmali-tatlilar": {
    slug: "dondurmali-tatlilar",
    title: "Ice Cream Desserts",
    subtitle: "Dondurmalı Tatlılar",
    blocks: [
      {
        id: "ice-cream-desserts-main",
        title: "Ice Cream Desserts",
        subtitle: "Dondurmalı Tatlılar",
        image: "/images/menu-blocks/dondurmali-tatlilar.webp",
        imageAlt: "Dondurmalı tatlı çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Pineapple Cup / Ananaslı Kup",
            description:
              "Pineapple Ice Cream & Whipped Cream with Fresh Pineapple Cubes / Taze Ananas Küpleri Eşliğinde Ananaslı Dondurma ve Krem Şanti",
            price: "₺500",
          },
          {
            name: "Vegan Cup",
            description:
              "Vegan for scups of Ice Cream, Fresh Fruits  / Vegan 4 Top Dondurma, Taze Meyveler",
            price: "₺500",
          },
          {
            name: "Oreo Cup / Oreolu Kup",
            description:
              "Oreo biscuit, Chocolate Chips, Chocolate Ice Cream and Whipped Cream / Oreo bisküvi, Çikolata parçaları, Çikolatalı Dondurma ve Krem Şanti",
            price: "₺500",
          },
          {
            name: "Forest Fruit Cup / Orman Meyveli Kup",
            description:
              "Forest Fruit Ice Cream & Whipped Cream with Fresh Blueberry, Black Mulberry, Cherry, Strawberry / Taze yaban mersini, karadut, vişne, çilek eşliğinde orman meyveli dondurma ve krem şanti",
            price: "₺500",
          },
          {
            name: "Croquant Cup / Krokanlı Kup",
            description:
              "Crocan pieces, Pistachio Ice Cream, Walnut Ice Cream, Almond Ice Cream, Caramel Ice Cream & Whipped Cream / Krokan parçaları, Antep fıstıklı dondurma, cevizli dondurma, bademli dondurma, karamelli dondurma ve krem şanti",
            price: "₺500",
          },
        ],
      },
    ],
  },

  waffle: {
    slug: "waffle",
    title: "Waffle",
    subtitle: "Waffle",
    blocks: [
      {
        id: "waffle-main",
        title: "Waffle",
        subtitle: "Waffle'larımız tereyağlıdır / Our Waffles are buttered",
        image: "/images/menu-blocks/waffle.webp",
        imageAlt: "Waffle çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Oreolu Waffle / Oreo Waffles",
            description: "Oreo Biscuit and Nutella/ Oreo bisküvi ve Nutella",
            price: "₺400",
          },
          {
            name: "Meyveli Waffle / Fruits Waffle",
            description: "Strawberry, Kiwi, Banana, Nutella / Çilek, Kivi, Muz, Nutella",
            price: "₺400",
          },
          {
            name: "Meyveli Dondurmalı Waffle / Fruit Ice Cream Waffles",
            description: "Strawberry, Kiwi, Banana and Nutella / Çilek, Kivi, Muz ve Nutella",
            price: "₺480",
          },
          {
            name: "Orman Meyveli Waffle / Forest Fruit Waffles",
            description: "Blueberry, Raspberry, Blackberry, Strawberry and Nutella /Yaban mersini, Ahududu, Karadut, Çilek ve Nutella",
            price: "₺500",
          },
        ],
      },
    ],
  },
};
