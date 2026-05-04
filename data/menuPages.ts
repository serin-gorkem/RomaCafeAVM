import type { LocalizedText } from "./i18n";
import type { MenuCategorySlug } from "./menuCategories";

export type MenuItem = {
  name: LocalizedText;
  description?: LocalizedText;
  price?: string;
};

export type MenuContentBlock = {
  id: string;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
  imageSide?: "left" | "right";
  items: MenuItem[];
};

export type MenuPage = {
  slug: MenuCategorySlug;
  title: LocalizedText;
  subtitle: LocalizedText;
  blocks: MenuContentBlock[];
};

export const menuPages: Record<MenuCategorySlug, MenuPage> = {
kahvalti: {
  slug: "kahvalti",
  title: {
    en: "Breakfast",
    tr: "Kahvaltı",
  },
  subtitle: {
    en: "Breakfast",
    tr: "Kahvaltı",
  },
  blocks: [
    {
      id: "kahvalti-main",
      title: {
        en: "Breakfast",
        tr: "Kahvaltı",
      },
      subtitle: {
        en: "Breakfast",
        tr: "Kahvaltı",
      },
      image: "/images/menu-blocks/kahvalti-1.png",
      imageAlt: {
        en: "Representative image of breakfast plate, menemen and fried eggs with sucuk",
        tr: "Kahvaltı tabağı, menemen ve sahanda sucuklu yumurta temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Roma Breakfast Plate - 685 kcal",
            tr: "Roma Kahvaltı Tabağı - 685 kcal",
          },
          description: {
            en: "Ezine cheese, Bergama tulum cheese, olives, jam, honey, butter, fresh sliced vegetables, fried cheese rolls, eggs",
            tr: "Ezine peyniri, Bergama tulum, zeytin, reçel, bal, tereyağı, söğüş, sigara böreği, yumurta",
          },
          price: "₺620",
        },
        {
          name: {
            en: "Menemen - 177 kcal",
            tr: "Menemen - 177 kcal",
          },
          description: {
            en: "Traditional Turkish scrambled eggs with tomatoes and green peppers",
            tr: "Domates ve yeşil biberli geleneksel Türk usulü yumurta",
          },
          price: "₺490",
        },
        {
          name: {
            en: "Fried Eggs with Sucuk - 430 kcal",
            tr: "Sahanda Sucuklu Yumurta - 430 kcal",
          },
          description: {
            en: "Turkish sausage with fried eggs",
            tr: "Sucuklu sahanda yumurta",
          },
          price: "₺520",
        },
      ],
    },
    {
      id: "kahvalti-omelettes",
      title: {
        en: "Omelettes",
        tr: "Omlet Çeşitleri",
      },
      subtitle: {
        en: "Omelettes",
        tr: "Omlet Çeşitleri",
      },
      image: "/images/menu-blocks/kahvalti-2.png",
      imageAlt: {
        en: "Representative image of omelette varieties",
        tr: "Omlet çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Omelette - 180 kcal",
            tr: "Omlet - 180 kcal",
          },
          price: "₺400",
        },
        {
          name: {
            en: "Omelette with Kashar Cheese - 260 kcal",
            tr: "Kaşarlı Omlet - 260 kcal",
          },
          price: "₺430",
        },
        {
          name: {
            en: "Mushroom Omelette - 155 kcal",
            tr: "Mantarlı Omlet - 155 kcal",
          },
          price: "₺430",
        },
        {
          name: {
            en: "Mixed Omelette - 350 kcal",
            tr: "Karışık Omlet - 350 kcal",
          },
          price: "₺480",
        },
      ],
    },
  ],
},

aperatifler: {
  slug: "aperatifler",
  title: {
    en: "Snacks",
    tr: "Aperatifler",
  },
  subtitle: {
    en: "Snacks",
    tr: "Aperatifler",
  },
  blocks: [
    {
      id: "aperatifler-main",
      title: {
        en: "Snacks",
        tr: "Aperatifler",
      },
      subtitle: {
        en: "Snacks",
        tr: "Aperatifler",
      },
      image: "/images/menu-blocks/aperatifler-1.png",
      imageAlt: {
        en: "Representative image of beer plate, nuggets, pan-fried sausages and potato snacks",
        tr: "Bira tabağı, nugget, sosis tava ve patates çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Beer Plate - 670 kcal",
            tr: "Bira Tabağı - 670 kcal",
          },
          description: {
            en: "Chips, sausages, onion rings, mozzarella sticks, chicken nuggets",
            tr: "Cips, sosis, soğan halkaları, mozzarella stick, piliç nugget",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Chicken Nuggets - 480 kcal",
            tr: "Piliç Nugget - 480 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺480",
        },
        {
          name: {
            en: "Pan-Fried Sausages - 320 kcal",
            tr: "Sosis Tava - 320 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺280",
        },
        {
          name: {
            en: "Potato Chips - 400 kcal",
            tr: "Patates Cips - 400 kcal",
          },
          price: "₺390",
        },
        {
          name: {
            en: "Potato Wedges - 480 kcal",
            tr: "Elma Dilimi Patates - 480 kcal",
          },
          price: "₺410",
        },
      ],
    },
    {
      id: "aperatifler-specials",
      title: {
        en: "Special Snacks",
        tr: "Özel Aperatifler",
      },
      subtitle: {
        en: "Special Snacks",
        tr: "Özel Aperatifler",
      },
      image: "/images/menu-blocks/aperatifler-2.png",
      imageAlt: {
        en: "Representative image of quesadilla, chicken tenders and garlic bread",
        tr: "Quesadilla, çıtır tavuk ve sarımsaklı ekmek temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Chicken Quesadilla - 670 kcal",
            tr: "Quesadilla Tavuklu - 670 kcal",
          },
          description: {
            en: "Tortilla filled with chicken, jalapeños and cheddar sauce; served with salsa and guacamole",
            tr: "Salsa sosu, guacamole sos, tavuk, jalapeno, cheddar sos, tortilla lavaşı",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Beef Tenderloin Quesadilla - 800 kcal",
            tr: "Quesadilla Bonfileli - 800 kcal",
          },
          description: {
            en: "Tortilla filled with beef tenderloin, jalapeños and cheddar sauce; served with salsa and guacamole",
            tr: "Salsa sosu, guacamole sos, bonfile, jalapeno, cheddar sos, tortilla lavaşı",
          },
          price: "₺820",
        },
        {
          name: {
            en: "Chicken Tenders - 685 kcal",
            tr: "Çıtır Tavuk - 685 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Garlic Bread - 270 kcal",
            tr: "Sarımsaklı Ekmek - 270 kcal",
          },
          price: "₺300",
        },
      ],
    },
  ],
},

tostlar: {
  slug: "tostlar",
  title: {
    en: "Toasts",
    tr: "Tostlar",
  },
  subtitle: {
    en: "Toasts",
    tr: "Tostlar",
  },
  blocks: [
    {
      id: "tostlar-main",
      title: {
        en: "Classic Toasts",
        tr: "Klasik Tostlar",
      },
      subtitle: {
        en: "Classic Toasts",
        tr: "Klasik Tostlar",
      },
      image: "/images/menu-blocks/tostlar-1.png",
      imageAlt: {
        en: "Representative image of classic toast varieties",
        tr: "Klasik tost çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Grilled Cheese Toast - 430 kcal",
            tr: "Kaşar Peynirli Tost - 430 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺390",
        },
        {
          name: {
            en: "White Cheese Toast - 350 kcal",
            tr: "Beyaz Peynirli Tost - 350 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺390",
        },
        {
          name: {
            en: "Sucuk & Kashar Cheese Toast - 480 kcal",
            tr: "Sucuklu Kaşar Peynirli Tost - 480 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺460",
        },
        {
          name: {
            en: "Salami & Kashar Cheese Toast - 550 kcal",
            tr: "Salamlı Kaşar Peynirli Tost - 550 kcal",
          },
          description: {
            en: "Served with chips",
            tr: "Cips ile",
          },
          price: "₺420",
        },
        {
          name: {
            en: "Mixed Toast - 660 kcal",
            tr: "Karışık Tost - 660 kcal",
          },
          description: {
            en: "Sucuk, salami, kashar cheese, tomato and pickles; served with chips",
            tr: "Sucuk, salam, kaşar peyniri, domates, turşu, cips ile",
          },
          price: "₺510",
        },
      ],
    },
    {
      id: "tostlar-specials",
      title: {
        en: "Special Toasts",
        tr: "Özel Tostlar",
      },
      subtitle: {
        en: "Special Toasts",
        tr: "Özel Tostlar",
      },
      image: "/images/menu-blocks/tostlar-2.png",
      imageAlt: {
        en: "Representative image of Hawaiian toast",
        tr: "Hawaii tost temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Hawaiian Toast - 530 kcal",
            tr: "Hawaii Tost - 530 kcal",
          },
          description: {
            en: "Pineapple slices, beef ham and kashar cheese; served with chips",
            tr: "Ananas dilimleri, dana jambon, kaşar peyniri, cips ile",
          },
          price: "₺580",
        },
      ],
    },
  ],
},
"club-sandvicler": {
  slug: "club-sandvicler",
  title: {
    en: "Club Sandwiches",
    tr: "Club Sandviçler",
  },
  subtitle: {
    en: "Club Sandwiches",
    tr: "Club Sandviçler",
  },
  blocks: [
    {
      id: "club-sandvicler-main",
      title: {
        en: "Club Sandwiches",
        tr: "Club Sandviçler",
      },
      subtitle: {
        en: "Club Sandwiches",
        tr: "Club Sandviçler",
      },
      image: "/images/menu-blocks/club-sandvicler.png",
      imageAlt: {
        en: "Representative image of club sandwich varieties",
        tr: "Club sandviç çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Quattro Formaggi Venosa - 630 kcal",
            tr: "Quattro Formaggi Venosa - 630 kcal",
          },
          description: {
            en: "Four-cheese Venosa; served with chips",
            tr: "Dört peynir venosa, cips ile",
          },
          price: "₺540",
        },
        {
          name: {
            en: "Chicken Sandwich - 550 kcal",
            tr: "Tavuklu Sandviç - 550 kcal",
          },
          description: {
            en: "Grilled chicken fillet, cheddar sauce, lettuce, tomato and pickles; served with chips",
            tr: "Cheddar sosu, marul, domates, tavuk fileto ızgara, turşu, cips ile",
          },
          price: "₺620",
        },
        {
          name: {
            en: "Beef Ham Sandwich - 435 kcal",
            tr: "Dana Jambonlu Sandviç - 435 kcal",
          },
          description: {
            en: "Beef ham, cheddar sauce, lettuce, tomato and pickles; served with chips",
            tr: "Cheddar sosu, marul, domates, dana jambon, turşu, cips ile",
          },
          price: "₺670",
        },
        {
          name: {
            en: "Tuna Sandwich - 630 kcal",
            tr: "Ton Balıklı Sandviç - 630 kcal",
          },
          description: {
            en: "Tuna, honey mustard sauce, red onion, lettuce, pickles, tomato and caper berries; served with chips",
            tr: "Honey mustard sos, mor soğan, ton balığı, marul, turşu, domates, kapari çiçeği, cips ile",
          },
          price: "₺670",
        },
      ],
    },
  ],
},

burgerler: {
  slug: "burgerler",
  title: {
    en: "Burgers",
    tr: "Hamburger Menü",
  },
  subtitle: {
    en: "Burgers",
    tr: "Hamburger Menü",
  },
  blocks: [
    {
      id: "burgerler-main",
      title: {
        en: "Burgers",
        tr: "Hamburger Menü",
      },
      subtitle: {
        en: "Burgers",
        tr: "Hamburger Menü",
      },
      image: "/images/menu-blocks/burgerler-1.png",
      imageAlt: {
        en: "Representative image of classic burger varieties",
        tr: "Klasik burger çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Hamburger - 630 kcal",
            tr: "Hamburger - 630 kcal",
          },
          description: {
            en: "120g cooked beef patty, lettuce, pickles, tomato and onion; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, marul, turşu, domates, soğan, cips ile",
          },
          price: "₺670",
        },
        {
          name: {
            en: "Cheese Burger - 712 kcal",
            tr: "Cheese Burger - 712 kcal",
          },
          description: {
            en: "120g cooked beef patty, cheddar cheese, lettuce, pickles, tomato and onion; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, cheddar, marul, turşu, domates, soğan, cips ile",
          },
          price: "₺710",
        },
        {
          name: {
            en: "Protein Burger - 810 kcal",
            tr: "Protein Burger - 810 kcal",
          },
          description: {
            en: "Double 120g cooked beef patty, beef ham, cheddar sauce, lettuce, pickles, onion and tomato; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, duble köfte, dana jambon, cheddar sosu, marul, turşu, soğan, domates, cips ile",
          },
          price: "₺920",
        },
        {
          name: {
            en: "Hot Chili Burger - 685 kcal",
            tr: "Hot Chili Burger - 685 kcal",
          },
          description: {
            en: "120g cooked beef patty, Mexican sauce, onion, lettuce, cheddar sauce, guacamole, tomato and pickles; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, Meksika sosu, soğan, marul, cheddar sosu, guacamole sosu, domates, turşu, cips ile",
          },
          price: "₺750",
        },
        {
          name: {
            en: "BBQ Burger - 830 kcal",
            tr: "BBQ Burger - 830 kcal",
          },
          description: {
            en: "120g cooked beef patty, BBQ sauce, sautéed mushrooms, lettuce, tomato, pickles and onion; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, BBQ sosu, sote mantar, marul, domates, turşu, soğan, cips ile",
          },
          price: "₺730",
        },
      ],
    },
    {
      id: "burgerler-specials",
      title: {
        en: "Special Burgers",
        tr: "Özel Burgerler",
      },
      subtitle: {
        en: "Special Burgers",
        tr: "Özel Burgerler",
      },
      image: "/images/menu-blocks/burgerler-2.png",
      imageAlt: {
        en: "Representative image of Roma special burgers",
        tr: "Roma özel burgerleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Roma Deluxe Burger - 750 kcal",
            tr: "Roma Deluxe Burger - 750 kcal",
          },
          description: {
            en: "Double 120g cooked beef patty, cheddar cheese, tomato, lettuce, pickles and onion; served with chips",
            tr: "120 gr pişmiş hamburger köftesi, duble köfte, cheddar, domates, marul, turşu, soğan, cips ile",
          },
          price: "₺890",
        },
        {
          name: {
            en: "Roma Chicken Burger - 750 kcal",
            tr: "Roma Tavuk Burger - 750 kcal",
          },
          description: {
            en: "140g crispy chicken fillet, cheddar sauce, lettuce, pickles, tomato and onion; served with chips",
            tr: "140 gr pişmiş çıtır tavuk fileto, cheddar sosu, marul, turşu, domates, soğan, cips ile",
          },
          price: "₺650",
        },
      ],
    },
  ],
},

salatalar: {
  slug: "salatalar",
  title: {
    en: "Salads",
    tr: "Salatalar",
  },
  subtitle: {
    en: "Salads",
    tr: "Salatalar",
  },
  blocks: [
    {
      id: "salatalar-main",
      title: {
        en: "Salads",
        tr: "Salatalar",
      },
      subtitle: {
        en: "Salads",
        tr: "Salatalar",
      },
      image: "/images/menu-blocks/salatalar-1.png",
      imageAlt: {
        en: "Representative image of Mediterranean, tuna, halloumi, Caesar and tenderloin salads",
        tr: "Akdeniz, ton balıklı, hellim, Sezar ve bonfileli salata temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Mediterranean Salad - 300 kcal",
            tr: "Akdeniz Salatası - 300 kcal",
          },
          description: {
            en: "Mesclun Mediterranean greens, cherry tomatoes, olive oil and lemon dressing",
            tr: "Mascolin Akdeniz yeşillikleri, cherry domates, zeytinyağı, limon sos",
          },
          price: "₺460",
        },
        {
          name: {
            en: "Tuna Salad - 415 kcal",
            tr: "Ton Balığı Salatası - 415 kcal",
          },
          description: {
            en: "Seasonal greens, caper flowers, red onion, corn and cocktail sauce",
            tr: "Mevsim yeşillikleri, kapari çiçeği, mor soğan, mısır, kokteyl sos",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Halloumi Salad - 565 kcal",
            tr: "Hellim Salatası - 565 kcal",
          },
          description: {
            en: "Seasonal greens, cucumber, cherry tomatoes, grilled halloumi and olive oil lemon dressing",
            tr: "Mevsim yeşillikleri, salatalık, cherry domates, ızgara hellim, zeytinyağı limon sos",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Caesar Salad - 450 kcal",
            tr: "Sezar Salatası - 450 kcal",
          },
          description: {
            en: "Iceberg lettuce, Caesar dressing, grilled chicken fillet, parmesan and croutons",
            tr: "Iceberg marul, Sezar sosu, ızgara tavuk bonfile, parmesan, kruton",
          },
          price: "₺630",
        },
        {
          name: {
            en: "Roma Salad with Tenderloin - 600 kcal",
            tr: "Bonfileli Roma Salatası - 600 kcal",
          },
          description: {
            en: "Mesclun Mediterranean greens, cherry tomatoes, grilled beef tenderloin, parmesan and balsamic dressing",
            tr: "Mascolin Akdeniz yeşillikleri, cherry domates, ızgara bonfile, parmesan, balzamik sos",
          },
          price: "₺720",
        },
      ],
    },
    {
      id: "salatalar-specials",
      title: {
        en: "Special Salads",
        tr: "Özel Salatalar",
      },
      subtitle: {
        en: "Special Salads",
        tr: "Özel Salatalar",
      },
      image: "/images/menu-blocks/salatalar-2.png",
      imageAlt: {
        en: "Representative image of arugula salad with mini mozzarella and Aegean salad",
        tr: "Misket mozzarellalı roka salatası ve Ege salatası temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Arugula Salad with Mini Mozzarella - 380 kcal",
            tr: "Misket Mozzarellalı Roka Salatası - 380 kcal",
          },
          description: {
            en: "Baby arugula leaves, parmesan, cherry tomatoes, mini mozzarella balls and balsamic dressing",
            tr: "Baby roka yaprakları, parmesan, cherry domates, misket mozzarella topları, balzamik sos",
          },
          price: "₺690",
        },
        {
          name: {
            en: "Aegean Salad - 390 kcal",
            tr: "Ege Salatası - 390 kcal",
          },
          description: {
            en: "Seasonal greens, Ezine cheese, cucumber, carrot chips, cherry tomatoes and olive oil lemon dressing",
            tr: "Mevsim yeşillikleri, Ezine peyniri, salatalık, havuç cipsi, cherry domates, zeytinyağı limon sos",
          },
          price: "₺570",
        },
      ],
    },
  ],
},

pizzalar: {
  slug: "pizzalar",
  title: {
    en: "Pizza",
    tr: "Pizzalar",
  },
  subtitle: {
    en: "Pizza",
    tr: "Pizzalar",
  },
  blocks: [
    {
      id: "pizzalar-main",
      title: {
        en: "Classic Pizzas",
        tr: "Klasik Pizzalar",
      },
      subtitle: {
        en: "Classic Pizzas",
        tr: "Klasik Pizzalar",
      },
      image: "/images/menu-blocks/pizzalar-1.png",
      imageAlt: {
        en: "Representative image of Margherita, Bolognese, Hawaii, tuna and mushroom pizzas",
        tr: "Margarita, Bolonez, Hawaii, ton balıklı ve mantarlı pizza temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Margherita Pizza - 650 kcal",
            tr: "Margarita Pizza - 650 kcal",
          },
          description: {
            en: "Pizza sauce, mozzarella cheese, cherry tomatoes and basil leaves",
            tr: "Pizza sosu, mozzarella peyniri, cherry domates, fesleğen yaprakları",
          },
          price: "₺520",
        },
        {
          name: {
            en: "Bolognese Pizza - 950 kcal",
            tr: "Bolonez Pizza - 950 kcal",
          },
          description: {
            en: "Pizza sauce, bolognese sauce and mozzarella cheese",
            tr: "Pizza sosu, bolonez sos, mozzarella peyniri",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Hawaii Pizza - 985 kcal",
            tr: "Hawaii Pizza - 985 kcal",
          },
          description: {
            en: "Pizza sauce, pineapple slices, mozzarella cheese, beef ham and basil leaves",
            tr: "Pizza sosu, ananas dilimleri, mozzarella peyniri, dana jambon, fesleğen yaprakları",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Tuna Pizza - 730 kcal",
            tr: "Ton Balıklı Pizza - 730 kcal",
          },
          description: {
            en: "Pizza sauce, mozzarella cheese, corn, red onion and caper flower",
            tr: "Pizza sosu, mozzarella peyniri, mısır, mor soğan, kapari çiçeği",
          },
          price: "₺690",
        },
        {
          name: {
            en: "Funghi Pizza - 550 kcal",
            tr: "Mantarlı Pizza - 550 kcal",
          },
          description: {
            en: "Pizza sauce, mushroom, mozzarella cheese and thyme",
            tr: "Pizza sosu, mantar, mozzarella peyniri, kekik",
          },
          price: "₺590",
        },
      ],
    },
    {
      id: "pizzalar-specials",
      title: {
        en: "Special Pizzas",
        tr: "Özel Pizzalar",
      },
      subtitle: {
        en: "Special Pizzas",
        tr: "Özel Pizzalar",
      },
      image: "/images/menu-blocks/pizzalar-2.png",
      imageAlt: {
        en: "Representative image of Pepperoni, Quattro Formaggi, Hot Chili, Alaturka, Indian and Tikka Masala pizzas",
        tr: "Pepperoni, Quattro Formaggi, Hot Chili, Alaturka, Indian ve Tikka Masala pizza temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Pepperoni Pizza - 750 kcal",
            tr: "Pepperoni Pizza - 750 kcal",
          },
          description: {
            en: "Sucuk, pizza sauce, mozzarella cheese and basil",
            tr: "Sucuk, pizza sosu, mozzarella peyniri, fesleğen",
          },
          price: "₺660",
        },
        {
          name: {
            en: "Quattro Formaggi Pizza - 830 kcal",
            tr: "Quatro Formaggi - 830 kcal",
          },
          description: {
            en: "Pizza sauce, dried tomato and four cheese sauce",
            tr: "Pizza sosu, kurutulmuş domates, dört peynir sosu",
          },
          price: "₺630",
        },
        {
          name: {
            en: "Hot Chili Pizza - 480 kcal",
            tr: "Hot Chili Pizza - 480 kcal",
          },
          description: {
            en: "Mexican sauce, corn, beef ham, jalapeño and red onion",
            tr: "Meksikan sos, mısır, dana jambon, jalapeno, mor soğan",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Alaturka Pizza - 650 kcal",
            tr: "Alaturka Pizza - 650 kcal",
          },
          description: {
            en: "Pastrami, sucuk, mozzarella cheese, pizza sauce and charleston pepper",
            tr: "Pastırma, sucuk, mozzarella peyniri, pizza sosu, çarliston biberi",
          },
          price: "₺790",
        },
        {
          name: {
            en: "Indian Pizza - 530 kcal",
            tr: "Indian Pizza - 530 kcal",
          },
          description: {
            en: "Curry spiced chicken, charleston pepper, corn, mozzarella cheese and pizza sauce",
            tr: "Köri baharatlı tavuk, çarliston biberi, mısır, mozzarella peyniri, pizza sosu",
          },
          price: "₺680",
        },
        {
          name: {
            en: "Tikka Masala Pizza - 560 kcal",
            tr: "Tikka Masala Pizza - 560 kcal",
          },
          description: {
            en: "Creamy curry spiced chicken pieces, mozzarella cheese, red onion and pizza sauce",
            tr: "Kremalı köri baharatlı tavuk parçaları, mozzarella peyniri, mor soğan, pizza sosu",
          },
          price: "₺690",
        },
      ],
    },
  ],
},

makarnalar: {
  slug: "makarnalar",
  title: {
    en: "Pastas",
    tr: "Makarnalar",
  },
  subtitle: {
    en: "Pastas",
    tr: "Makarnalar",
  },
  blocks: [
    {
      id: "makarnalar-main",
      title: {
        en: "Pastas",
        tr: "Makarnalar",
      },
      subtitle: {
        en: "Pastas",
        tr: "Makarnalar",
      },
      image: "/images/menu-blocks/makarnalar-1.png",
      imageAlt: {
        en: "Representative image of pesto, chicken, beef, bolognese and Neapolitan pastas",
        tr: "Pesto, tavuklu, bonfileli, bolonez ve napoliten makarna temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Pesto Pasta - 630 kcal",
            tr: "Pesto - 630 kcal",
          },
          description: {
            en: "180g fettuccine pasta with parmesan",
            tr: "180g fettuccine makarna, parmesan ile",
          },
          price: "₺630",
        },
        {
          name: {
            en: "Chicken Pasta - 680 kcal",
            tr: "Tavuklu Makarna - 680 kcal",
          },
          description: {
            en: "180g penne pasta, mushroom, chicken, parmesan and cream",
            tr: "180g penne makarna, mantar, tavuk, parmesan, krema",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Beef Pasta - 710 kcal",
            tr: "Bonfileli Makarna - 710 kcal",
          },
          description: {
            en: "180g penne pasta, mushroom, beef tenderloin, parmesan and cream",
            tr: "180g penne makarna, mantar, bonfile, parmesan, krema",
          },
          price: "₺770",
        },
        {
          name: {
            en: "Bolognese Pasta - 550 kcal",
            tr: "Bolognese - 550 kcal",
          },
          description: {
            en: "180g spaghetti pasta with bolognese sauce and parmesan",
            tr: "180g spaghetti makarna, bolognese sosu, parmesan ile",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Neapolitan Pasta - 260 kcal",
            tr: "Napoliten - 260 kcal",
          },
          description: {
            en: "180g spaghetti pasta with tomato sauce and parmesan",
            tr: "180g spaghetti makarna, domates sos, parmesan ile",
          },
          price: "₺530",
        },
      ],
    },
    {
      id: "makarnalar-specials",
      title: {
        en: "Special Pastas",
        tr: "Özel Makarnalar",
      },
      subtitle: {
        en: "Special Pastas",
        tr: "Özel Makarnalar",
      },
      image: "/images/menu-blocks/makarnalar-2.png",
      imageAlt: {
        en: "Representative image of vegetarian, plain, arrabbiata and carbonara pastas",
        tr: "Vejetaryen, sade, arrabbiata ve carbonara makarna temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Vegetarian Pasta - 350 kcal",
            tr: "Vejetaryen - 350 kcal",
          },
          description: {
            en: "180g penne pasta, red onion, mushroom, carrot and cherry tomato sauce",
            tr: "180g penne makarna, mor soğan, mantar, havuç, domates sos ile",
          },
          price: "₺630",
        },
        {
          name: {
            en: "Plain Pasta - 215 kcal",
            tr: "Sade Makarna - 215 kcal",
          },
          description: {
            en: "180g spaghetti pasta",
            tr: "180g spaghetti makarna",
          },
          price: "₺400",
        },
        {
          name: {
            en: "Arrabbiata Pasta - 340 kcal",
            tr: "Arrabbiata - 340 kcal",
          },
          description: {
            en: "180g penne pasta, arrabbiata sauce, roasted red pepper and eggplant",
            tr: "180g penne makarna, arrabbiata sosu, köz biber, patlıcan ile",
          },
          price: "₺560",
        },
        {
          name: {
            en: "Carbonara Pasta - 700 kcal",
            tr: "Carbonara - 700 kcal",
          },
          description: {
            en: "180g fettuccine pasta, beef ham, mushroom, cream and parmesan",
            tr: "180g fettuccine makarna, dana jambon, mantar, krema, parmesan ile",
          },
          price: "₺680",
        },
      ],
    },
  ],
},

izgaralar: {
  slug: "izgaralar",
  title: {
    en: "Grills",
    tr: "Izgaralar",
  },
  subtitle: {
    en: "Grills",
    tr: "Izgaralar",
  },
  blocks: [
    {
      id: "izgaralar-main",
      title: {
        en: "Grills",
        tr: "Izgaralar",
      },
      subtitle: {
        en: "Grills",
        tr: "Izgaralar",
      },
      image: "/images/menu-blocks/izgaralar-1.png",
      imageAlt: {
        en: "Representative image of butcher’s meatballs, grilled chicken, sauced chicken and lamb chops",
        tr: "Kasap köfte, ızgara tavuk, soslu tavuk ve kuzu pirzola temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Butcher’s Meatballs - 850 kcal",
            tr: "Kasap Köfte - 850 kcal",
          },
          description: {
            en: "200g butcher-style meatballs, rice, fries, grilled tomato and pepper",
            tr: "200 gr kasap köfte, pilav, cips, ızgara domates biber ile",
          },
          price: "₺870",
        },
        {
          name: {
            en: "Grilled Chicken Fillet - 800 kcal",
            tr: "Izgara Tavuk Fileto - 800 kcal",
          },
          description: {
            en: "220g chicken fillet, rice, fries, grilled tomato and pepper",
            tr: "220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          },
          price: "₺820",
        },
        {
          name: {
            en: "Chicken with Mushroom Sauce - 850 kcal",
            tr: "Mantar Soslu Tavuk - 850 kcal",
          },
          description: {
            en: "220g chicken fillet, rice, fries, grilled tomato and pepper",
            tr: "220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          },
          price: "₺910",
        },
        {
          name: {
            en: "Chicken with Cheddar Sauce - 870 kcal",
            tr: "Cheddar Soslu Tavuk - 870 kcal",
          },
          description: {
            en: "220g chicken fillet, rice, fries, grilled tomato and pepper",
            tr: "220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          },
          price: "₺920",
        },
        {
          name: {
            en: "Lamb Chops - 850 kcal",
            tr: "Kuzu Pirzola - 850 kcal",
          },
          description: {
            en: "260g lamb chops, Dijon mustard, fries and grilled garnish",
            tr: "260 gr kuzu pirzola, dijon hardal, cips, ızgara garnitür ile",
          },
          price: "₺1.540",
        },
      ],
    },
    {
      id: "izgaralar-steaks",
      title: {
        en: "Steaks",
        tr: "Steak Çeşitleri",
      },
      subtitle: {
        en: "Steaks",
        tr: "Steak Çeşitleri",
      },
      image: "/images/menu-blocks/izgaralar-2.png",
      imageAlt: {
        en: "Representative image of natural steak, pepper steak, mushroom sauce steak, Hawaii steak and mixed steak plate",
        tr: "Naturel steak, pepper steak, mantar soslu steak, Hawaii steak ve karışık steak tabağı temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Natural Steak - 730 kcal",
            tr: "Naturel Steak - 730 kcal",
          },
          description: {
            en: "180g cooked beef tenderloin, mustard, fries and sautéed seasonal vegetables",
            tr: "180 gr pişmiş dana bonfile, hardal, cips, sote mevsim sebzeleri",
          },
          price: "₺1.580",
        },
        {
          name: {
            en: "Pepper Steak - 812 kcal",
            tr: "Pepper Steak - 812 kcal",
          },
          description: {
            en: "180g cooked beef tenderloin, fries, Dijon mustard and sautéed seasonal vegetables",
            tr: "180 gr pişmiş dana bonfile, cips, dijon hardal, sote mevsim sebzeleri",
          },
          price: "₺1.650",
        },
        {
          name: {
            en: "Steak with Mushroom Sauce - 830 kcal",
            tr: "Mantar Soslu Steak - 830 kcal",
          },
          description: {
            en: "180g cooked beef tenderloin, fries and sautéed seasonal vegetables",
            tr: "180 gr pişmiş dana bonfile, cips, sote mevsim sebzeleri",
          },
          price: "₺1.630",
        },
        {
          name: {
            en: "Hawaii Steak - 715 kcal",
            tr: "Hawaii Steak - 715 kcal",
          },
          description: {
            en: "180g cooked beef tenderloin, medallion style, pineapple confit, teriyaki sauce and garnish",
            tr: "180 gr pişmiş dana bonfile, madalyon tarzı, ananas konfi, teriyaki sos, garnitür",
          },
          price: "₺1.800",
        },
        {
          name: {
            en: "Roma Combo Steak House - 1180 kcal",
            tr: "Karışık Steak Tabağı - 1180 kcal",
          },
          description: {
            en: "120g beef tenderloin, 150g chicken fillet, 90g butcher-style meatballs, 110g lamb chops, grilled garnish, rice and fries",
            tr: "120 gr dana bonfile, 150 gr tavuk fileto, 90 gr kasap köfte, 110 gr kuzu pirzola, ızgara garnitür, pilav, cips ile",
          },
          price: "₺2.150",
        },
      ],
    },
  ],
},

"tava-yemekleri": {
  slug: "tava-yemekleri",
  title: {
    en: "Pan-Fried Dishes",
    tr: "Tava Yemekleri",
  },
  subtitle: {
    en: "Pan-Fried Dishes",
    tr: "Tava Yemekleri",
  },
  blocks: [
    {
      id: "tava-yemekleri-main",
      title: {
        en: "Pan-Fried Dishes",
        tr: "Tava Yemekleri",
      },
      subtitle: {
        en: "Pan-Fried Dishes",
        tr: "Tava Yemekleri",
      },
      image: "/images/menu-blocks/tava-yemekleri-1.png",
      imageAlt: {
        en: "Representative image of fajita, schnitzel, Mexican chicken and Mexican steak",
        tr: "Fajita, şinitzel, Meksikan tavuk ve Meksikan steak temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Steak Fajita - 360 kcal",
            tr: "Dana Fajita - 360 kcal",
          },
          description: {
            en: "150g beef tenderloin, salsa, guacamole, cheddar sauce and tortilla wrap",
            tr: "150 gr dana bonfile, salsa, guacamole, cheddar sos, tortilla lavaşı",
          },
          price: "₺1.290",
        },
        {
          name: {
            en: "Chicken Fajita - 315 kcal",
            tr: "Tavuklu Fajita - 315 kcal",
          },
          description: {
            en: "180g chicken fillet, salsa, guacamole, cheddar sauce and tortilla wrap",
            tr: "180 gr tavuk fileto, salsa, guacamole, cheddar sos, tortilla lavaşı",
          },
          price: "₺1.120",
        },
        {
          name: {
            en: "Schnitzel - 480 kcal",
            tr: "Şinitzel - 480 kcal",
          },
          description: {
            en: "180g chicken fillet, fries, salad and butter",
            tr: "180 gr tavuk fileto, cips, salata, tereyağı ile",
          },
          price: "₺860",
        },
        {
          name: {
            en: "Mexican Chicken - 350 kcal",
            tr: "Meksikan Tavuk - 350 kcal",
          },
          description: {
            en: "160g chicken fillet, Mexican beans, onion, jalapeño, corn, Mexican sauce, fries and salad",
            tr: "160 gr tavuk fileto, meksikan fasulyesi, soğan, jalapeno, mısır, meksikan sosu, cips, salata ile",
          },
          price: "₺950",
        },
        {
          name: {
            en: "Mexican Steak - 300 kcal",
            tr: "Meksikan Steak - 300 kcal",
          },
          description: {
            en: "140g beef tenderloin, Mexican beans, onion, jalapeño, corn, Mexican sauce, fries and salad",
            tr: "140 gr dana bonfile, meksikan fasulyesi, soğan, jalapeno, mısır, meksikan sosu, cips, salata ile",
          },
          price: "₺1.100",
        },
      ],
    },
    {
      id: "tava-yemekleri-specials",
      title: {
        en: "Special Chicken Dishes",
        tr: "Özel Tavuk Yemekleri",
      },
      subtitle: {
        en: "Special Chicken Dishes",
        tr: "Özel Tavuk Yemekleri",
      },
      image: "/images/menu-blocks/tava-yemekleri-2.png",
      imageAlt: {
        en: "Representative image of chicken with curry sauce, sweet chili chicken and sweet and sour chicken",
        tr: "Köri soslu tavuk, sweet chili tavuk ve sweet and sour tavuk temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Chicken with Curry Sauce - 450 kcal",
            tr: "Köri Soslu Tavuk - 450 kcal",
          },
          description: {
            en: "160g chicken fillet, cream, soy sauce, rice, fries and curry spices",
            tr: "160 gr tavuk fileto, krema, soya sosu, pilav, cips, köri baharatı ile",
          },
          price: "₺970",
        },
        {
          name: {
            en: "Sweet Chili Chicken - 380 kcal",
            tr: "Sweet Chili Tavuk - 380 kcal",
          },
          description: {
            en: "160g chicken fillet, tempura-battered fried chicken cubes, fries and salad",
            tr: "160 gr tavuk fileto, tempura unu ile kızartılmış tavuk küpleri, cips, salata ile",
          },
          price: "₺970",
        },
        {
          name: {
            en: "Sweet and Sour Chicken - 400 kcal",
            tr: "Sweet And Sour Tavuk - 400 kcal",
          },
          description: {
            en: "160g chicken fillet, tempura-battered fried chicken cubes, fries and salad",
            tr: "160 gr tavuk fileto, tempura unu ile kızartılmış tavuk küpleri, cips, salata ile",
          },
          price: "₺970",
        },
      ],
    },
  ],
},

waffle: {
  slug: "waffle",
  title: {
    en: "Waffle",
    tr: "Waffle",
  },
  subtitle: {
    en: "Waffle",
    tr: "Waffle",
  },
  blocks: [
    {
      id: "waffle-main",
      title: {
        en: "Classic Waffles",
        tr: "Klasik Waffle Çeşitleri",
      },
      subtitle: {
        en: "Classic Waffles",
        tr: "Klasik Waffle Çeşitleri",
      },
      image: "/images/menu-blocks/waffle-1.png",
      imageAlt: {
        en: "Representative image of fruit, ice cream, Nutella and plain waffles",
        tr: "Meyveli, dondurmalı, Nutellalı ve sade waffle temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Fruit Waffle - 450 kcal",
            tr: "Meyveli Waffle - 450 kcal",
          },
          price: "₺570",
        },
        {
          name: {
            en: "Fruit Waffle with Ice Cream - 650 kcal",
            tr: "Meyveli Dondurmalı Waffle - 650 kcal",
          },
          price: "₺660",
        },
        {
          name: {
            en: "Nutella Waffle - 400 kcal",
            tr: "Nutellalı Waffle - 400 kcal",
          },
          price: "₺430",
        },
        {
          name: {
            en: "Plain Waffle - 300 kcal",
            tr: "Sade Waffle - 300 kcal",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Waffle with Ice Cream - 550 kcal",
            tr: "Dondurmalı Waffle - 550 kcal",
          },
          price: "₺480",
        },
      ],
    },
    {
      id: "waffle-specials",
      title: {
        en: "Special Waffles",
        tr: "Özel Waffle Çeşitleri",
      },
      subtitle: {
        en: "Special Waffles",
        tr: "Özel Waffle Çeşitleri",
      },
      image: "/images/menu-blocks/waffle-2.png",
      imageAlt: {
        en: "Representative image of Dubai waffle, white chocolate waffle and fruit plate",
        tr: "Dubai waffle, beyaz çikolatalı waffle ve meyve tabağı temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Dubai Waffle - 800 kcal",
            tr: "Dubai Waffle - 800 kcal",
          },
          price: "₺530",
        },
        {
          name: {
            en: "Dubai Waffle with Ice Cream - 890 kcal",
            tr: "Dubai Waffle Dondurmalı - 890 kcal",
          },
          price: "₺610",
        },
        {
          name: {
            en: "White Chocolate Waffle - 780 kcal",
            tr: "Beyaz Çikolatalı Waffle - 780 kcal",
          },
          price: "₺460",
        },
        {
          name: {
            en: "White Chocolate Fruit Waffle - 920 kcal",
            tr: "Beyaz Çikolatalı Meyveli Waffle - 920 kcal",
          },
          price: "₺600",
        },
        {
          name: {
            en: "Fruit Plate - 250 kcal",
            tr: "Meyve Tabağı - 250 kcal",
          },
          price: "₺520",
        },
      ],
    },
  ],
},

krepler: {
  slug: "krepler",
  title: {
    en: "Crepes",
    tr: "Krepler",
  },
  subtitle: {
    en: "Crepes",
    tr: "Krepler",
  },
  blocks: [
    {
      id: "krepler-main",
      title: {
        en: "Crepes",
        tr: "Krep Çeşitleri",
      },
      subtitle: {
        en: "Crepes",
        tr: "Krep Çeşitleri",
      },
      image: "/images/menu-blocks/krepler-1.png",
      imageAlt: {
        en: "Representative image of honey, ice cream, banana, Nutella and plain crepes",
        tr: "Ballı, dondurmalı, muzlu, Nutellalı ve sade krep temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Honey Crepe - 214 kcal",
            tr: "Ballı Krep - 214 kcal",
          },
          price: "₺450",
        },
        {
          name: {
            en: "Ice Cream Crepe - 300 kcal",
            tr: "Dondurmalı Krep - 300 kcal",
          },
          price: "₺520",
        },
        {
          name: {
            en: "Banana Crepe - 350 kcal",
            tr: "Muzlu Krep - 350 kcal",
          },
          price: "₺470",
        },
        {
          name: {
            en: "Nutella Crepe - 300 kcal",
            tr: "Nutellalı Krep - 300 kcal",
          },
          price: "₺420",
        },
        {
          name: {
            en: "Plain Crepe - 150 kcal",
            tr: "Sade Krep - 150 kcal",
          },
          price: "₺330",
        },
      ],
    },
    {
      id: "krepler-specials",
      title: {
        en: "Special Crepes & Pancakes",
        tr: "Özel Krepler ve Pancake",
      },
      subtitle: {
        en: "Special Crepes & Pancakes",
        tr: "Özel Krepler ve Pancake",
      },
      image: "/images/menu-blocks/krepler-2.png",
      imageAlt: {
        en: "Representative image of banana chocolate crepe, Nutella pancake and pancake plate",
        tr: "Muzlu çikolatalı krep, Nutellalı pancake ve pancake tabağı temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Banana Chocolate Crepe - 450 kcal",
            tr: "Muzlu Çikolatalı Krep - 450 kcal",
          },
          price: "₺490",
        },
        {
          name: {
            en: "Pancake with Nutella - 390 kcal",
            tr: "Pancake Nutellalı - 390 kcal",
          },
          price: "₺590",
        },
        {
          name: {
            en: "Pancake Plate - 550 kcal",
            tr: "Pancake Tabağı - 550 kcal",
          },
          description: {
            en: "With banana, strawberry and kiwi",
            tr: "Muz, çilek, kivi",
          },
          price: "₺640",
        },
      ],
    },
  ],
},

dondurmalar: {
  slug: "dondurmalar",
  title: {
    en: "Ice Creams",
    tr: "Dondurmalar",
  },
  subtitle: {
    en: "Ice Creams",
    tr: "Dondurmalar",
  },
  blocks: [
    {
      id: "dondurmalar-main",
      title: {
        en: "Ice Creams",
        tr: "Dondurmalar",
      },
      subtitle: {
        en: "Ice Creams",
        tr: "Dondurmalar",
      },
      image: "/images/menu-blocks/dondurmalar-1.png",
      imageAlt: {
        en: "Representative image of ice cream in melon, fried ice cream, Roma chef special, Venice and tropical ice cream",
        tr: "Kavun içi dondurma, kızarmış dondurma, Roma şef spesiyal, Venedik ve tropikal dondurma temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Ice Cream in Melon - 750 kcal",
            tr: "Kavun İçi Dondurma - 750 kcal",
          },
          price: "₺600",
        },
        {
          name: {
            en: "Fried Ice Cream - 410 kcal",
            tr: "Kızarmış Dondurma - 410 kcal",
          },
          price: "₺520",
        },
        {
          name: {
            en: "Roma Chef Special - 780 kcal",
            tr: "Roma Şef Spesiyal - 780 kcal",
          },
          description: {
            en: "Italian chef’s special",
            tr: "İtalyan şefin spesiyali",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Venice - 720 kcal",
            tr: "Venedik - 720 kcal",
          },
          description: {
            en: "Pistachio, honey almonds, chestnut and chocolate pieces",
            tr: "Antep fıstığı, bal badem, kestane, parça çikolata",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Tropical - 390 kcal",
            tr: "Tropikal - 390 kcal",
          },
          description: {
            en: "Mango, pineapple, kiwi and mulberry",
            tr: "Mango, ananas, kivi, karadut",
          },
          price: "₺450",
        },
      ],
    },
    {
      id: "dondurmalar-specials",
      title: {
        en: "Special Ice Creams",
        tr: "Özel Dondurmalar",
      },
      subtitle: {
        en: "Special Ice Creams",
        tr: "Özel Dondurmalar",
      },
      image: "/images/menu-blocks/dondurmalar-2.png",
      imageAlt: {
        en: "Representative image of Iceman, banana split, wafer halva ice cream, Denmark, Hawaii and extra scoop ice cream",
        tr: "Iceman, banana split, gofret helvalı dondurma, Danimarka, Hawaii ve ekstra top dondurma temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Iceman - 680 kcal",
            tr: "Dondurma Karışımı Özel - 680 kcal",
          },
          description: {
            en: "Mastic, walnut, chestnut and chocolate pieces",
            tr: "Sakız, ceviz, kestane, parça çikolata",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Banana Split - 570 kcal",
            tr: "Muzlu Dondurma - 570 kcal",
          },
          description: {
            en: "Mixed ice cream and banana",
            tr: "Karışık dondurma, muz",
          },
          price: "₺600",
        },
        {
          name: {
            en: "Ice Cream with Wafer Halva - 480 kcal",
            tr: "Gofret Helvalı Dondurma - 480 kcal",
          },
          description: {
            en: "Vanilla, chocolate, coffee and caramel",
            tr: "Vanilya, çikolata, kahve, karamel",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Denmark - 385 kcal",
            tr: "Danimarka - 385 kcal",
          },
          description: {
            en: "Chocolate and caramel",
            tr: "Çikolata, karamel",
          },
          price: "₺450",
        },
        {
          name: {
            en: "Hawaii - 725 kcal",
            tr: "Hawai - 725 kcal",
          },
          description: {
            en: "Mixed fruits, pineapple, banana and strawberry",
            tr: "Karışık meyve, ananas, muz, çilek",
          },
          price: "₺450",
        },
        {
          name: {
            en: "Extra Scoop - 70 kcal",
            tr: "Ekstra Top - 70 kcal",
          },
          description: {
            en: "Extra single scoop",
            tr: "Extra tek top",
          },
          price: "₺80",
        },
      ],
    },
  ],
},

"sicak-icecekler": {
  slug: "sicak-icecekler",
  title: {
    en: "Hot Drinks",
    tr: "Sıcak İçecekler",
  },
  subtitle: {
    en: "Hot Drinks",
    tr: "Sıcak İçecekler",
  },
  blocks: [
    {
      id: "sicak-icecekler-espresso-classics",
      title: {
        en: "Espresso Classics",
        tr: "Espresso Klasikleri",
      },
      subtitle: {
        en: "Espresso Classics",
        tr: "Espresso Klasikleri",
      },
      image: "/images/menu-blocks/sicak-icecekler-1.png",
      imageAlt: {
        en: "Representative image of espresso, double espresso, ristretto, macchiato, con panna and americano",
        tr: "Espresso, double espresso, ristretto, macchiato, con panna ve americano temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Espresso",
            tr: "Espresso",
          },
          price: "₺180",
        },
        {
          name: {
            en: "Double Espresso",
            tr: "Double Espresso",
          },
          price: "₺230",
        },
        {
          name: {
            en: "Espresso Ristretto",
            tr: "Espresso Ristretto",
          },
          price: "₺220",
        },
        {
          name: {
            en: "Espresso Macchiato",
            tr: "Espresso Macchiato",
          },
          price: "₺220",
        },
        {
          name: {
            en: "Con Panna",
            tr: "Con Panna",
          },
          price: "₺270",
        },
        {
          name: {
            en: "Americano",
            tr: "Americano",
          },
          price: "₺220",
        },
        {
          name: {
            en: "Extra Shot",
            tr: "Extra Shot",
          },
          price: "₺100",
        },
      ],
    },
    {
      id: "sicak-icecekler-milk-coffees",
      title: {
        en: "Milk Coffees",
        tr: "Sütlü Kahveler",
      },
      subtitle: {
        en: "Milk Coffees",
        tr: "Sütlü Kahveler",
      },
      image: "/images/menu-blocks/sicak-icecekler-2.png",
      imageAlt: {
        en: "Representative image of cappuccino, latte macchiato, flat white, cortado and caramel macchiato",
        tr: "Cappuccino, latte macchiato, flat white, cortado ve caramel macchiato temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Cappuccino",
            tr: "Cappuccino",
          },
          price: "₺260",
        },
        {
          name: {
            en: "Latte Macchiato",
            tr: "Latte Macchiato",
          },
          price: "₺260",
        },
        {
          name: {
            en: "Flat White",
            tr: "Flat White",
          },
          price: "₺250",
        },
        {
          name: {
            en: "Cortado",
            tr: "Cortado",
          },
          price: "₺230",
        },
        {
          name: {
            en: "Caramel Macchiato",
            tr: "Caramel Macchiato",
          },
          price: "₺270",
        },
      ],
    },
    {
      id: "sicak-icecekler-chocolate-specials",
      title: {
        en: "Chocolate & Specials",
        tr: "Çikolatalı ve Özel İçecekler",
      },
      subtitle: {
        en: "Chocolate & Specials",
        tr: "Çikolatalı ve Özel İçecekler",
      },
      image: "/images/menu-blocks/sicak-icecekler-3.png",
      imageAlt: {
        en: "Representative image of mocha, white chocolate mocha, hot chocolate and affogato",
        tr: "Mocha, white chocolate mocha, sıcak çikolata ve affogato temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Mocha",
            tr: "Mocha",
          },
          price: "₺280",
        },
        {
          name: {
            en: "White Chocolate Mocha",
            tr: "White Chocolate Mocha",
          },
          price: "₺280",
        },
        {
          name: {
            en: "Hot Chocolate",
            tr: "Sıcak Çikolata",
          },
          price: "₺240",
        },
        {
          name: {
            en: "Affogato",
            tr: "Affogato",
          },
          price: "₺250",
        },
      ],
    },
    {
      id: "sicak-icecekler-traditional",
      title: {
        en: "Traditional Hot Drinks",
        tr: "Geleneksel Sıcak İçecekler",
      },
      subtitle: {
        en: "Traditional Hot Drinks",
        tr: "Geleneksel Sıcak İçecekler",
      },
      image: "/images/menu-blocks/sicak-icecekler-4.png",
      imageAlt: {
        en: "Representative image of Turkish coffee, double Turkish coffee, tea, herbal tea and sahlep",
        tr: "Türk kahvesi, duble Türk kahvesi, çay, bitki çayı ve sahlep temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Turkish Coffee",
            tr: "Türk Kahvesi",
          },
          price: "₺160",
        },
        {
          name: {
            en: "Double Turkish Coffee",
            tr: "Duble Türk Kahvesi",
          },
          price: "₺210",
        },
        {
          name: {
            en: "Tea",
            tr: "Çay",
          },
          price: "₺80",
        },
        {
          name: {
            en: "Herbal Tea",
            tr: "Bitki Çayı",
          },
          price: "₺220",
        },
        {
          name: {
            en: "Sahlep",
            tr: "Sahlep",
          },
          price: "₺240",
        },
      ],
    },
    {
      id: "sicak-icecekler-filter-instant",
      title: {
        en: "Filter & Instant Coffees",
        tr: "Filtre ve Hazır Kahveler",
      },
      subtitle: {
        en: "Filter & Instant Coffees",
        tr: "Filtre ve Hazır Kahveler",
      },
      image: "/images/menu-blocks/sicak-icecekler-5.png",
      imageAlt: {
        en: "Representative image of filter coffee, plain Nescafe and Nescafe with milk",
        tr: "Filtre kahve, sade Nescafe ve sütlü Nescafe temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Drip Coffee",
            tr: "Filtre Kahve",
          },
          price: "₺220",
        },
        {
          name: {
            en: "Nescafe",
            tr: "Sade Kahve",
          },
          price: "₺180",
        },
        {
          name: {
            en: "Nescafe With Milk",
            tr: "Sütlü Kahve",
          },
          price: "₺210",
        },
      ],
    },
  ],
},

"soguk-kahveler": {
  slug: "soguk-kahveler",
  title: {
    en: "Cold Coffees",
    tr: "Soğuk Kahveler",
  },
  subtitle: {
    en: "Cold Coffees",
    tr: "Soğuk Kahveler",
  },
  blocks: [
    {
      id: "soguk-kahveler-main",
      title: {
        en: "Iced Coffees",
        tr: "Soğuk Kahveler",
      },
      subtitle: {
        en: "Iced Coffees",
        tr: "Soğuk Kahveler",
      },
      image: "/images/menu-blocks/soguk-kahveler-1.png",
      imageAlt: {
        en: "Representative image of cold coffee varieties",
        tr: "Soğuk kahve çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Freddoccino",
            tr: "Freddoccino",
          },
          price: "₺380",
        },
        {
          name: {
            en: "Iced Coffee",
            tr: "Soğuk Kahve",
          },
          price: "₺360",
        },
        {
          name: {
            en: "Iced Latte",
            tr: "Buzlu Latte",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Cold Mocha",
            tr: "Soğuk Mocha",
          },
          price: "₺340",
        },
        {
          name: {
            en: "Cold Cappuccino",
            tr: "Soğuk Cappuccino",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Iced Caramel Latte",
            tr: "Buzlu Karamel Latte",
          },
          price: "₺350",
        },
      ],
    },
    {
      id: "soguk-kahveler-frappe",
      title: {
        en: "Frappe & Chocolate",
        tr: "Frappe ve Soğuk Çikolata",
      },
      subtitle: {
        en: "Frappe & Chocolate",
        tr: "Frappe ve Soğuk Çikolata",
      },
      image: "/images/menu-blocks/soguk-kahveler-2.png",
      imageAlt: {
        en: "Representative image of frappe and cold chocolate",
        tr: "Frappe ve soğuk çikolata temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Cold Chocolate",
            tr: "Soğuk Çikolata",
          },
          price: "₺310",
        },
        {
          name: {
            en: "Milky Frappe",
            tr: "Sütlü Frappe",
          },
          price: "₺280",
        },
        {
          name: {
            en: "Plain Frappe",
            tr: "Sade Frappe",
          },
          price: "₺250",
        },
      ],
    },
  ],
},

"soguk-icecekler": {
  slug: "soguk-icecekler",
  title: {
    en: "Cold Drinks",
    tr: "Soğuk İçecekler",
  },
  subtitle: {
    en: "Cold Drinks",
    tr: "Soğuk İçecekler",
  },
  blocks: [
    {
      id: "soguk-icecekler-specials",
      title: {
        en: "Special Cold Drinks",
        tr: "Özel Soğuk İçecekler",
      },
      subtitle: {
        en: "Special Cold Drinks",
        tr: "Özel Soğuk İçecekler",
      },
      image: "/images/menu-blocks/soguk-icecekler-1.png",
      imageAlt: {
        en: "Representative image of special cold drinks",
        tr: "Özel soğuk içecekler temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Homemade Lemonade",
            tr: "Ev Yapımı Limonata",
          },
          price: "₺190",
        },
        {
          name: {
            en: "Strawberry Lemonade",
            tr: "Çilekli Limonata",
          },
          price: "₺200",
        },
        {
          name: {
            en: "Mojito",
            tr: "Alkolsüz Mojito",
          },
          price: "₺330",
        },
        {
          name: {
            en: "Churchill",
            tr: "Limonlu Tuzlu Soda",
          },
          price: "₺230",
        },
        {
          name: {
            en: "Red Bull",
            tr: "Enerji İçeceği",
          },
          price: "₺270",
        },
      ],
    },
    {
      id: "soguk-icecekler-soft-drinks",
      title: {
        en: "Soft Drinks",
        tr: "Gazlı ve Hazır İçecekler",
      },
      subtitle: {
        en: "Soft Drinks",
        tr: "Gazlı ve Hazır İçecekler",
      },
      image: "/images/menu-blocks/soguk-icecekler-2.png",
      imageAlt: {
        en: "Representative image of soft and ready-made drinks",
        tr: "Gazlı ve hazır içecekler temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Cola",
            tr: "Kola",
          },
          price: "₺210",
        },
        {
          name: {
            en: "Cola Light",
            tr: "Diyet Kola",
          },
          price: "₺210",
        },
        {
          name: {
            en: "Soda",
            tr: "Gazoz",
          },
          price: "₺210",
        },
        {
          name: {
            en: "Fruit Juice",
            tr: "Meyve Suyu",
          },
          price: "₺210",
        },
        {
          name: {
            en: "Ice Tea",
            tr: "Ice Tea",
          },
          price: "₺210",
        },
      ],
    },
    {
      id: "soguk-icecekler-basics",
      title: {
        en: "Basic Drinks",
        tr: "Temel İçecekler",
      },
      subtitle: {
        en: "Basic Drinks",
        tr: "Temel İçecekler",
      },
      image: "/images/menu-blocks/soguk-icecekler-3.png",
      imageAlt: {
        en: "Representative image of basic cold drinks",
        tr: "Temel soğuk içecekler temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Mineral Water",
            tr: "Soda",
          },
          price: "₺100",
        },
        {
          name: {
            en: "Ayran",
            tr: "Ayran",
          },
          price: "₺90",
        },
        {
          name: {
            en: "Water",
            tr: "Su",
          },
          price: "₺40",
        },
        {
          name: {
            en: "Milk",
            tr: "Süt",
          },
          price: "₺160",
        },
      ],
    },
  ],
},

milkshakes: {
  slug: "milkshakes",
  title: {
    en: "Milkshakes",
    tr: "Milkshake Çeşitleri",
  },
  subtitle: {
    en: "Milkshakes",
    tr: "Milkshake Çeşitleri",
  },
  blocks: [
    {
      id: "milkshakes-classics",
      title: {
        en: "Classic Milkshakes",
        tr: "Klasik Milkshake Çeşitleri",
      },
      subtitle: {
        en: "Classic Milkshakes",
        tr: "Klasik Milkshake Çeşitleri",
      },
      image: "/images/menu-blocks/milkshakes-1.png",
      imageAlt: {
        en: "Representative image of classic milkshake varieties",
        tr: "Klasik milkshake çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Chocolate Milkshake",
            tr: "Çikolatalı Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Caramel Milkshake",
            tr: "Karamelli Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Banana Milkshake",
            tr: "Muzlu Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Blue Milkshake",
            tr: "Mavi Milkshake",
          },
          price: "₺370",
        },
      ],
    },
    {
      id: "milkshakes-fruit",
      title: {
        en: "Fruit Milkshakes",
        tr: "Meyveli Milkshake Çeşitleri",
      },
      subtitle: {
        en: "Fruit Milkshakes",
        tr: "Meyveli Milkshake Çeşitleri",
      },
      image: "/images/menu-blocks/milkshakes-2.png",
      imageAlt: {
        en: "Representative image of fruit milkshake varieties",
        tr: "Meyveli milkshake çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Kiwi Milkshake",
            tr: "Kivili Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Pineapple Milkshake",
            tr: "Ananaslı Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Strawberry Milkshake",
            tr: "Çilekli Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Cherry Milkshake",
            tr: "Vişneli Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Melon Milkshake",
            tr: "Kavunlu Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Mango Milkshake",
            tr: "Mangolu Milkshake",
          },
          price: "₺370",
        },
        {
          name: {
            en: "Black Mulberry Milkshake",
            tr: "Karadutlu Milkshake",
          },
          price: "₺370",
        },
      ],
    },
  ],
},

smoothies: {
  slug: "smoothies",
  title: {
    en: "Smoothies",
    tr: "Smoothie Çeşitleri",
  },
  subtitle: {
    en: "Smoothies",
    tr: "Smoothie Çeşitleri",
  },
  blocks: [
    {
      id: "smoothies-main",
      title: {
        en: "Smoothies",
        tr: "Smoothie Çeşitleri",
      },
      subtitle: {
        en: "Smoothies",
        tr: "Smoothie Çeşitleri",
      },
      image: "/images/menu-blocks/smoothies-1.png",
      imageAlt: {
        en: "Representative image of smoothie varieties",
        tr: "Smoothie çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Banana Smoothie",
            tr: "Muzlu Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Kiwi Smoothie",
            tr: "Kivili Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Pineapple Smoothie",
            tr: "Ananaslı Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Strawberry Smoothie",
            tr: "Çilekli Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Mango Smoothie",
            tr: "Mangolu Smoothie",
          },
          price: "₺350",
        },
      ],
    },
    {
      id: "smoothies-fruit",
      title: {
        en: "Fruit Smoothies",
        tr: "Meyveli Smoothie Çeşitleri",
      },
      subtitle: {
        en: "Fruit Smoothies",
        tr: "Meyveli Smoothie Çeşitleri",
      },
      image: "/images/menu-blocks/smoothies-2.png",
      imageAlt: {
        en: "Representative image of fruit smoothie varieties",
        tr: "Meyveli smoothie çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Cherry Smoothie",
            tr: "Vişneli Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Black Mulberry Smoothie",
            tr: "Karadutlu Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Melon Smoothie",
            tr: "Kavunlu Smoothie",
          },
          price: "₺350",
        },
        {
          name: {
            en: "Peach Smoothie",
            tr: "Şeftalili Smoothie",
          },
          price: "₺350",
        },
      ],
    },
  ],
},

frozens: {
  slug: "frozens",
  title: {
    en: "Frozens",
    tr: "Frozen Çeşitleri",
  },
  subtitle: {
    en: "Frozens",
    tr: "Frozen Çeşitleri",
  },
  blocks: [
    {
      id: "frozens-main",
      title: {
        en: "Frozens",
        tr: "Frozen Çeşitleri",
      },
      subtitle: {
        en: "Frozens",
        tr: "Frozen Çeşitleri",
      },
      image: "/images/menu-blocks/frozens-1.png",
      imageAlt: {
        en: "Representative image of frozen drink varieties",
        tr: "Frozen çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Watermelon Frozen",
            tr: "Karpuzlu Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Mint Frozen",
            tr: "Naneli Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Strawberry Frozen",
            tr: "Çilekli Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Melon Frozen",
            tr: "Kavunlu Frozen",
          },
          price: "₺320",
        },
      ],
    },
    {
      id: "frozens-fruit",
      title: {
        en: "Fruit Frozens",
        tr: "Meyveli Frozen Çeşitleri",
      },
      subtitle: {
        en: "Fruit Frozens",
        tr: "Meyveli Frozen Çeşitleri",
      },
      image: "/images/menu-blocks/frozens-2.png",
      imageAlt: {
        en: "Representative image of fruit frozen drink varieties",
        tr: "Meyveli frozen çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Kiwi Frozen",
            tr: "Kivili Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Green Apple Frozen",
            tr: "Yeşil Elmalı Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Banana Frozen",
            tr: "Muzlu Frozen",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Peach Frozen",
            tr: "Şeftalili Frozen",
          },
          price: "₺320",
        },
      ],
    },
  ],
},

"meyve-sulari": {
  slug: "meyve-sulari",
  title: {
    en: "Fresh Juices",
    tr: "Taze Meyve Suları",
  },
  subtitle: {
    en: "Fresh Juices",
    tr: "Taze Meyve Suları",
  },
  blocks: [
    {
      id: "meyve-sulari-main",
      title: {
        en: "Fresh Juices",
        tr: "Taze Meyve Suları",
      },
      subtitle: {
        en: "Fresh Juices",
        tr: "Taze Meyve Suları",
      },
      image: "/images/menu-blocks/meyve-sulari.png",
      imageAlt: {
        en: "Representative image of fresh juice varieties",
        tr: "Taze meyve suyu çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Milk with Banana",
            tr: "Muzlu Süt",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Pomegranate Juice",
            tr: "Nar Suyu",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Fresh Orange Juice",
            tr: "Sıkma Portakal Suyu",
          },
          price: "₺320",
        },
        {
          name: {
            en: "Roma Special",
            tr: "Roma Special",
          },
          price: "₺410",
        },
      ],
    },
  ],
},

"yerli-alkollu-icecekler": {
  slug: "yerli-alkollu-icecekler",
  title: {
    en: "Local Drinks",
    tr: "Yerli İçkiler",
  },
  subtitle: {
    en: "Local Drinks",
    tr: "Yerli İçkiler",
  },
  blocks: [
    {
      id: "yerli-alkollu-icecekler-main",
      title: {
        en: "Local Drinks",
        tr: "Yerli İçkiler",
      },
      subtitle: {
        en: "Local Drinks",
        tr: "Yerli İçkiler",
      },
      image: "/images/menu-blocks/yerli-alkollu-icecekler.png",
      imageAlt: {
        en: "Representative image of local alcoholic drinks",
        tr: "Yerli içkiler temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Red Wine",
            tr: "Kırmızı Şarap",
          },
          price: "₺380",
        },
        {
          name: {
            en: "White Wine",
            tr: "Beyaz Şarap",
          },
          price: "₺380",
        },
        {
          name: {
            en: "Rosé Wine",
            tr: "Rose Şarap",
          },
          price: "₺380",
        },
        {
          name: {
            en: "Vodka",
            tr: "Vodka",
          },
          price: "₺440",
        },
        {
          name: {
            en: "Gin",
            tr: "Cin",
          },
          price: "₺440",
        },
      ],
    },
  ],
},
"yabanci-alkollu-icecekler": {
  slug: "yabanci-alkollu-icecekler",
  title: {
    en: "Imported Drinks",
    tr: "Yabancı İçkiler",
  },
  subtitle: {
    en: "Imported Drinks",
    tr: "Yabancı İçkiler",
  },
  blocks: [
    {
      id: "yabanci-alkollu-icecekler-whiskey-liqueur",
      title: {
        en: "Whiskey & Liqueur",
        tr: "Viski ve Likör",
      },
      subtitle: {
        en: "Whiskey & Liqueur",
        tr: "Viski ve Likör",
      },
      image: "/images/menu-blocks/yabanci-alkollu-icecekler-1.png",
      imageAlt: {
        en: "Representative image of imported whiskey and liqueur varieties",
        tr: "Yabancı viski ve likör çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Jägermeister",
            tr: "Jägermeister",
          },
          description: {
            en: "2 cl",
            tr: "2 cl",
          },
          price: "₺620",
        },
        {
          name: {
            en: "Jack Daniel’s",
            tr: "Jack Daniel’s",
          },
          description: {
            en: "4 cl",
            tr: "4 cl",
          },
          price: "₺580",
        },
        {
          name: {
            en: "Chivas Regal",
            tr: "Chivas Regal",
          },
          description: {
            en: "4 cl",
            tr: "4 cl",
          },
          price: "₺620",
        },
        {
          name: {
            en: "J&B",
            tr: "J&B",
          },
          description: {
            en: "4 cl",
            tr: "4 cl",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Baileys",
            tr: "Baileys",
          },
          description: {
            en: "6 cl",
            tr: "6 cl",
          },
          price: "₺550",
        },
      ],
    },
    {
      id: "yabanci-alkollu-icecekler-vodka-rum",
      title: {
        en: "Vodka & Rum",
        tr: "Votka ve Rom",
      },
      subtitle: {
        en: "Vodka & Rum",
        tr: "Votka ve Rom",
      },
      image: "/images/menu-blocks/yabanci-alkollu-icecekler-2.png",
      imageAlt: {
        en: "Representative image of vodka and rum varieties",
        tr: "Votka ve rom çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Smirnoff Vodka",
            tr: "Smirnoff Vodka",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Absolut Vodka",
            tr: "Absolut Vodka",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺500",
        },
        {
          name: {
            en: "Captain Morgan",
            tr: "Captain Morgan",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺620",
        },
        {
          name: {
            en: "Malibu",
            tr: "Malibu",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺620",
        },
        {
          name: {
            en: "Bacardi",
            tr: "Bacardi",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺620",
        },
      ],
    },
    {
      id: "yabanci-alkollu-icecekler-gin-vermouth-tequila",
      title: {
        en: "Gin, Vermouth & Tequila",
        tr: "Cin, Vermut ve Tekila",
      },
      subtitle: {
        en: "Gin, Vermouth & Tequila",
        tr: "Cin, Vermut ve Tekila",
      },
      image: "/images/menu-blocks/yabanci-alkollu-icecekler-3.png",
      imageAlt: {
        en: "Representative image of gin, vermouth and tequila varieties",
        tr: "Cin, vermut ve tekila çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Martini",
            tr: "Martini",
          },
          description: {
            en: "12 cl",
            tr: "12 cl",
          },
          price: "₺550",
        },
        {
          name: {
            en: "Gordon’s Gin",
            tr: "Gordon’s Gin",
          },
          description: {
            en: "5 cl",
            tr: "5 cl",
          },
          price: "₺600",
        },
        {
          name: {
            en: "Tequila",
            tr: "Tequila",
          },
          description: {
            en: "2 cl",
            tr: "2 cl",
          },
          price: "₺500",
        },
      ],
    },
  ],
},

kokteyller: {
  slug: "kokteyller",
  title: {
    en: "Cocktails",
    tr: "Kokteyller",
  },
  subtitle: {
    en: "Cocktails",
    tr: "Kokteyller",
  },
  blocks: [
    {
      id: "kokteyller-classics",
      title: {
        en: "Classic Cocktails",
        tr: "Klasik Kokteyller",
      },
      subtitle: {
        en: "Classic Cocktails",
        tr: "Klasik Kokteyller",
      },
      image: "/images/menu-blocks/kokteyller-1.png",
      imageAlt: {
        en: "Representative image of classic cocktails",
        tr: "Klasik kokteyller temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "B-52",
            tr: "B-52",
          },
          description: {
            en: "2 cl Kahlua, 2 cl Baileys, 2 cl Cointreau",
            tr: "2 cl Kahlua, 2 cl Baileys, 2 cl Cointreau",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Margarita",
            tr: "Margarita",
          },
          description: {
            en: "4 cl tequila, 3 cl Cointreau, lemon juice",
            tr: "4 cl tequila, 3 cl Cointreau, limon suyu",
          },
          price: "₺700",
        },
        {
          name: {
            en: "Tequila Sunrise",
            tr: "Tequila Sunrise",
          },
          description: {
            en: "5 cl tequila, 2 cl Cointreau, orange juice, grenadine",
            tr: "5 cl tequila, 2 cl Cointreau, portakal suyu, grenadine",
          },
          price: "₺700",
        },
        {
          name: {
            en: "Long Island",
            tr: "Long Island",
          },
          description: {
            en: "2 cl vodka, 2 cl Bacardi, 2 cl tequila, 2 cl gin, 2 cl Cointreau, cola",
            tr: "2 cl vodka, 2 cl Bacardi, 2 cl tequila, 2 cl gin, 2 cl Cointreau, kola",
          },
          price: "₺950",
        },
        {
          name: {
            en: "Bloody Mary",
            tr: "Bloody Mary",
          },
          description: {
            en: "5 cl vodka, tomato juice, lemon juice, hot sauce, black pepper",
            tr: "5 cl vodka, domates suyu, limon suyu, acı sos, karabiber",
          },
          price: "₺700",
        },
      ],
    },
    {
      id: "kokteyller-tropical-fresh",
      title: {
        en: "Tropical & Fresh Cocktails",
        tr: "Tropikal ve Ferah Kokteyller",
      },
      subtitle: {
        en: "Tropical & Fresh Cocktails",
        tr: "Tropikal ve Ferah Kokteyller",
      },
      image: "/images/menu-blocks/kokteyller-2.png",
      imageAlt: {
        en: "Representative image of tropical cocktails",
        tr: "Tropikal kokteyller temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Sex on the Beach",
            tr: "Sex on the Beach",
          },
          description: {
            en: "4 cl vodka, 2 cl Archers, 2 cl tequila, orange juice, grenadine",
            tr: "4 cl vodka, 2 cl Archers, 2 cl tequila, portakal suyu, grenadine",
          },
          price: "₺700",
        },
        {
          name: {
            en: "Piña Colada",
            tr: "Piña Colada",
          },
          description: {
            en: "5 cl Bacardi, 2 cl Malibu, coconut milk, pineapple juice",
            tr: "5 cl Bacardi, 2 cl Malibu, hindistan cevizi sütü, ananas suyu",
          },
          price: "₺700",
        },
        {
          name: {
            en: "Mojito",
            tr: "Mojito",
          },
          description: {
            en: "5 cl Bacardi, lime, brown sugar, fresh mint, mineral water",
            tr: "5 cl Bacardi, lime, esmer şeker, taze nane, soda",
          },
          price: "₺730",
        },
        {
          name: {
            en: "Alcoholic Frozen",
            tr: "Alkollü Frozen",
          },
          price: "₺700",
        },
        {
          name: {
            en: "Pink Lady",
            tr: "Pink Lady",
          },
          description: {
            en: "4 cl gin, grenadine, cream, lemon juice, mineral water",
            tr: "4 cl gin, grenadine, krema, limon suyu, soda",
          },
          price: "₺650",
        },
      ],
    },
    {
      id: "kokteyller-signature-coffee",
      title: {
        en: "Signature & Coffee Cocktails",
        tr: "İmza ve Kahveli Kokteyller",
      },
      subtitle: {
        en: "Signature & Coffee Cocktails",
        tr: "İmza ve Kahveli Kokteyller",
      },
      image: "/images/menu-blocks/kokteyller-3.png",
      imageAlt: {
        en: "Representative image of signature and coffee cocktails",
        tr: "İmza ve kahveli kokteyller temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Lynchburg Lemonade",
            tr: "Lynchburg Lemonade",
          },
          description: {
            en: "4 cl Jack Daniel’s, 2 cl Cointreau, lemon juice, Sprite",
            tr: "4 cl Jack Daniel’s, 2 cl Cointreau, limon suyu, Sprite",
          },
          price: "₺950",
        },
        {
          name: {
            en: "Espresso Martini",
            tr: "Espresso Martini",
          },
          description: {
            en: "5 cl vodka, 3 cl Kahlua, espresso",
            tr: "5 cl vodka, 3 cl Kahlua, espresso",
          },
          price: "₺720",
        },
        {
          name: {
            en: "White Russian",
            tr: "White Russian",
          },
          description: {
            en: "4 cl vodka, 2 cl Kahlua, cream",
            tr: "4 cl vodka, 2 cl Kahlua, krema",
          },
          price: "₺730",
        },
        {
          name: {
            en: "Irish Coffee",
            tr: "Irish Coffee",
          },
          description: {
            en: "4 cl whiskey, filter coffee, brown sugar, cream",
            tr: "4 cl whiskey, filtre kahve, esmer şeker, krema",
          },
          price: "₺700",
        },
      ],
    },
    {
      id: "kokteyller-wine-beer-rum",
      title: {
        en: "Wine, Beer & Rum Based",
        tr: "Şarap, Bira ve Rom Bazlı Kokteyller",
      },
      subtitle: {
        en: "Wine, Beer & Rum Based",
        tr: "Şarap, Bira ve Rom Bazlı Kokteyller",
      },
      image: "/images/menu-blocks/kokteyller-4.png",
      imageAlt: {
        en: "Representative image of wine, beer and rum based cocktails",
        tr: "Şarap, bira ve rom bazlı kokteyller temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Margarita Diablo",
            tr: "Margarita Diablo",
          },
          description: {
            en: "5 cl tequila, 2 cl red wine, lemon juice",
            tr: "5 cl tequila, 2 cl kırmızı şarap, limon suyu",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Tinto de Verano",
            tr: "Tinto de Verano",
          },
          description: {
            en: "Red wine, Sprite",
            tr: "Kırmızı şarap, Sprite",
          },
          price: "₺650",
        },
        {
          name: {
            en: "Michelada",
            tr: "Michelada",
          },
          description: {
            en: "Lime juice, Worcestershire sauce, hot sauce, tomato juice, beer",
            tr: "Lime suyu, Worcestershire sosu, acı sos, domates suyu, bira",
          },
          price: "₺720",
        },
        {
          name: {
            en: "Jäger Mojito",
            tr: "Jäger Mojito",
          },
          description: {
            en: "5 cl Jägermeister, lime, brown sugar, fresh mint, mineral water",
            tr: "5 cl Jägermeister, lime, esmer şeker, taze nane, soda",
          },
          price: "₺750",
        },
        {
          name: {
            en: "Cuba Libre",
            tr: "Cuba Libre",
          },
          description: {
            en: "5 cl Havana rum, cola, lemon juice",
            tr: "5 cl Havana rum, kola, limon suyu",
          },
          price: "₺700",
        },
      ],
    },
  ],
},

biralar: {
  slug: "biralar",
  title: {
    en: "Beers",
    tr: "Biralar",
  },
  subtitle: {
    en: "Beers",
    tr: "Biralar",
  },
  blocks: [
    {
      id: "biralar-local",
      title: {
        en: "Efes & Local Beers",
        tr: "Efes ve Yerli Biralar",
      },
      subtitle: {
        en: "Efes & Local Beers",
        tr: "Efes ve Yerli Biralar",
      },
      image: "/images/menu-blocks/biralar-1.png",
      imageAlt: {
        en: "Representative image of Efes and local beer varieties",
        tr: "Efes ve yerli bira çeşitleri temsili görsel",
      },
      imageSide: "right",
      items: [
        {
          name: {
            en: "Efes",
            tr: "Efes",
          },
          price: "₺250",
        },
        {
          name: {
            en: "Efes Gluten Free",
            tr: "Efes Glutensiz",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Efes Malt",
            tr: "Efes Malt",
          },
          price: "₺250",
        },
        {
          name: {
            en: "Efes Special Series",
            tr: "Efes Özel Seri",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Bomonti",
            tr: "Bomonti",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Belfast",
            tr: "Belfast",
          },
          price: "₺250",
        },
      ],
    },
    {
      id: "biralar-premium",
      title: {
        en: "Imported & Premium Beers",
        tr: "İthal ve Premium Biralar",
      },
      subtitle: {
        en: "Imported & Premium Beers",
        tr: "İthal ve Premium Biralar",
      },
      image: "/images/menu-blocks/biralar-2.png",
      imageAlt: {
        en: "Representative image of imported and premium beer varieties",
        tr: "İthal ve premium bira çeşitleri temsili görsel",
      },
      imageSide: "left",
      items: [
        {
          name: {
            en: "Corona",
            tr: "Corona",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Miller",
            tr: "Miller",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Beck’s",
            tr: "Beck’s",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Bud",
            tr: "Bud",
          },
          price: "₺300",
        },
        {
          name: {
            en: "Stella",
            tr: "Stella",
          },
          price: "₺320",
        },
      ],
    },
  ],
},
};