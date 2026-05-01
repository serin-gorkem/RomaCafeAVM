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
  kahvalti: {
    slug: "kahvalti",
    title: "Breakfast",
    subtitle: "Kahvaltı",
    blocks: [
      {
        id: "kahvalti-main",
        title: "Breakfast",
        subtitle: "Kahvaltı",
        image: "/images/menu-blocks/kahvalti-1.png",
        imageAlt:
          "Kahvaltı tabağı, menemen ve sahanda sucuklu yumurta temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Roma Breakfast Plate / Roma Kahvaltı Tabağı - 685 kcal",
            description:
              "Ezine cheese, Bergama tulum cheese, olives, jam, honey, butter, fresh sliced vegetables, fried cheese rolls, eggs / Ezine peyniri, Bergama tulum, zeytin, reçel, bal, tereyağı, söğüş, sigara böreği, yumurta",
            price: "₺620",
          },
          {
            name: "Menemen - 177 kcal",
            description:
              "Traditional Turkish scrambled eggs with tomatoes and green peppers / Domates ve yeşil biberli geleneksel Türk usulü yumurta",
            price: "₺490",
          },
          {
            name: "Fried Eggs with Sucuk / Sahanda Sucuklu Yumurta - 430 kcal",
            description:
              "Turkish sausage with fried eggs / Sucuklu sahanda yumurta",
            price: "₺520",
          },
        ],
      },
      {
        id: "kahvalti-omelettes",
        title: "Omelettes",
        subtitle: "Omlet Çeşitleri",
        image: "/images/menu-blocks/kahvalti-2.png",
        imageAlt: "Omlet çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Omelette / Omlet - 180 kcal",
            price: "₺400",
          },
          {
            name: "Omelette with Kashar Cheese / Kaşarlı Omlet - 260 kcal",
            price: "₺430",
          },
          {
            name: "Mushroom Omelette / Mantarlı Omlet - 155 kcal",
            price: "₺430",
          },
          {
            name: "Mixed Omelette / Karışık Omlet - 350 kcal",
            price: "₺480",
          },
        ],
      },
    ],
  },

  aperatifler: {
    slug: "aperatifler",
    title: "Snacks",
    subtitle: "Aperatifler",
    blocks: [
      {
        id: "aperatifler-main",
        title: "Snacks",
        subtitle: "Aperatifler",
        image: "/images/menu-blocks/aperatifler-1.png",
        imageAlt:
          "Bira tabağı, nugget, sosis tava ve patates çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Beer Plate / Bira Tabağı - 670 kcal",
            description:
              "Chips, sausages, onion rings, mozzarella sticks, chicken nuggets / Cips, sosis, soğan halkaları, mozzarella stick, piliç nugget",
            price: "₺720",
          },
          {
            name: "Chicken Nuggets / Piliç Nugget - 480 kcal",
            description: "Served with chips / Cips ile",
            price: "₺480",
          },
          {
            name: "Pan-Fried Sausages / Sosis Tava - 320 kcal",
            description: "Served with chips / Cips ile",
            price: "₺280",
          },
          {
            name: "Potato Chips / Patates Cips - 400 kcal",
            price: "₺390",
          },
          {
            name: "Potato Wedges / Elma Dilimi Patates - 480 kcal",
            price: "₺410",
          },
        ],
      },
      {
        id: "aperatifler-specials",
        title: "Special Snacks",
        subtitle: "Özel Aperatifler",
        image: "/images/menu-blocks/aperatifler-2.png",
        imageAlt: "Quesadilla, çıtır tavuk ve sarımsaklı ekmek temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Chicken Quesadilla / Quesadilla Tavuklu - 670 kcal",
            description:
              "Tortilla filled with chicken, jalapeños, cheddar sauce; served with salsa and guacamole / Salsa sosu, guacamole sos, tavuk, jalapeno, cheddar sos, tortilla lavaşı",
            price: "₺650",
          },
          {
            name: "Beef Tenderloin Quesadilla / Quesadilla Bonfileli - 800 kcal",
            description:
              "Tortilla filled with beef tenderloin, jalapeños, cheddar sauce; served with salsa and guacamole / Salsa sosu, guacamole sos, bonfile, jalapeno, cheddar sos, tortilla lavaşı",
            price: "₺820",
          },
          {
            name: "Chicken Tenders / Çıtır Tavuk - 685 kcal",
            description: "Served with chips / Cips ile",
            price: "₺720",
          },
          {
            name: "Garlic Bread / Sarımsaklı Ekmek - 270 kcal",
            price: "₺300",
          },
        ],
      },
    ],
  },

  tostlar: {
    slug: "tostlar",
    title: "Toasts",
    subtitle: "Tostlar",
    blocks: [
      {
        id: "tostlar-main",
        title: "Classic Toasts",
        subtitle: "Klasik Tostlar",
        image: "/images/menu-blocks/tostlar-1.png",
        imageAlt: "Klasik tost çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Grilled Cheese Toast / Kaşar Peynirli Tost - 430 kcal",
            description: "Served with chips / Cips ile",
            price: "₺390",
          },
          {
            name: "White Cheese Toast / Beyaz Peynirli Tost - 350 kcal",
            description: "Served with chips / Cips ile",
            price: "₺390",
          },
          {
            name: "Sucuk & Kashar Cheese Toast / Sucuklu Kaşar Peynirli Tost - 480 kcal",
            description: "Served with chips / Cips ile",
            price: "₺460",
          },
          {
            name: "Salami & Kashar Cheese Toast / Salamlı Kaşar Peynirli Tost - 550 kcal",
            description: "Served with chips / Cips ile",
            price: "₺420",
          },
          {
            name: "Mixed Toast / Karışık Tost - 660 kcal",
            description:
              "Sucuk, salami, kashar cheese, tomato, pickles; served with chips / Sucuk, salam, kaşar peyniri, domates, turşu, cips ile",
            price: "₺510",
          },
        ],
      },
      {
        id: "tostlar-specials",
        title: "Special Toasts",
        subtitle: "Özel Tostlar",
        image: "/images/menu-blocks/tostlar-2.png",
        imageAlt: "Hawaii tost temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Hawaiian Toast / Hawaii Tost - 530 kcal",
            description:
              "Pineapple slices, beef ham, kashar cheese; served with chips / Ananas dilimleri, dana jambon, kaşar peyniri, cips ile",
            price: "₺580",
          },
        ],
      },
    ],
  },

  "club-sandvicler": {
    slug: "club-sandvicler",
    title: "Club Sandwiches",
    subtitle: "Club Sandviçler",
    blocks: [
      {
        id: "club-sandvicler-main",
        title: "Club Sandwiches",
        subtitle: "Club Sandviçler",
        image: "/images/menu-blocks/club-sandvicler.png",
        imageAlt: "Club sandviç çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Quattro Formaggi Venosa - 630 kcal",
            description:
              "Four-cheese Venosa; served with chips / Dört peynir venosa, cips ile",
            price: "₺540",
          },
          {
            name: "Chicken Sandwich / Tavuklu Sandviç - 550 kcal",
            description:
              "Grilled chicken fillet, cheddar sauce, lettuce, tomato, pickles; served with chips / Cheddar sosu, marul, domates, tavuk fileto ızgara, turşu, cips ile",
            price: "₺620",
          },
          {
            name: "Beef Ham Sandwich / Dana Jambonlu Sandviç - 435 kcal",
            description:
              "Beef ham, cheddar sauce, lettuce, tomato, pickles; served with chips / Cheddar sosu, marul, domates, dana jambon, turşu, cips ile",
            price: "₺670",
          },
          {
            name: "Tuna Sandwich / Ton Balıklı Sandviç - 630 kcal",
            description:
              "Tuna, honey mustard sauce, red onion, lettuce, pickles, tomato, caper berries; served with chips / Honey mustard sos, mor soğan, ton balığı, marul, turşu, domates, kapari çiçeği, cips ile",
            price: "₺670",
          },
        ],
      },
    ],
  },

  burgerler: {
    slug: "burgerler",
    title: "Burgers",
    subtitle: "Hamburger Menü",
    blocks: [
      {
        id: "burgerler-main",
        title: "Burgers",
        subtitle: "Hamburger Menü",
        image: "/images/menu-blocks/burgerler-1.png",
        imageAlt: "Klasik burger çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Hamburger - 630 kcal",
            description:
              "120g cooked beef patty, lettuce, pickles, tomato, onion; served with chips / 120 gr pişmiş hamburger köftesi, marul, turşu, domates, soğan, cips ile",
            price: "₺670",
          },
          {
            name: "Cheese Burger - 712 kcal",
            description:
              "120g cooked beef patty, cheddar cheese, lettuce, pickles, tomato, onion; served with chips / 120 gr pişmiş hamburger köftesi, cheddar, marul, turşu, domates, soğan, cips ile",
            price: "₺710",
          },
          {
            name: "Protein Burger - 810 kcal",
            description:
              "120g cooked beef patty double, beef ham, cheddar sauce, lettuce, pickles, onion, tomato; served with chips / 120 gr pişmiş hamburger köftesi, duble köfte, dana jambon, cheddar sosu, marul, turşu, soğan, domates, cips ile",
            price: "₺920",
          },
          {
            name: "Hot Chili Burger - 685 kcal",
            description:
              "120g cooked beef patty, Mexican sauce, onion, lettuce, cheddar sauce, guacamole, tomato, pickles; served with chips / 120 gr pişmiş hamburger köftesi, Meksika sosu, soğan, marul, cheddar sosu, guacamole sosu, domates, turşu, cips ile",
            price: "₺750",
          },
          {
            name: "BBQ Burger - 830 kcal",
            description:
              "120g cooked beef patty, BBQ sauce, sautéed mushrooms, lettuce, tomato, pickles, onion; served with chips / 120 gr pişmiş hamburger köftesi, BBQ sosu, sote mantar, marul, domates, turşu, soğan, cips ile",
            price: "₺730",
          },
        ],
      },
      {
        id: "burgerler-specials",
        title: "Special Burgers",
        subtitle: "Özel Burgerler",
        image: "/images/menu-blocks/burgerler-2.png",
        imageAlt: "Roma özel burgerleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Roma Deluxe Burger - 750 kcal",
            description:
              "120g cooked beef patty double, cheddar cheese, tomato, lettuce, pickles, onion; served with chips / 120 gr pişmiş hamburger köftesi, duble köfte, cheddar, domates, marul, turşu, soğan, cips ile",
            price: "₺890",
          },
          {
            name: "Roma Chicken Burger / Roma Tavuk Burger - 750 kcal",
            description:
              "140g crispy chicken fillet, cheddar sauce, lettuce, pickles, tomato, onion; served with chips / 140 gr pişmiş çıtır tavuk fileto, cheddar sosu, marul, turşu, domates, soğan, cips ile",
            price: "₺650",
          },
        ],
      },
    ],
  },

salatalar: {
  slug: "salatalar",
  title: "Salads",
  subtitle: "Salatalar",
  blocks: [
    {
      id: "salatalar-main",
      title: "Salads",
      subtitle: "Salatalar",
      image: "/images/menu-blocks/salatalar-1.png",
      imageAlt: "Akdeniz, ton balıklı, hellim, Sezar ve bonfileli salata temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Mediterranean Salad / Akdeniz Salatası - 300 kcal",
          description:
            "Mesclun Mediterranean greens, cherry tomatoes, olive oil, lemon dressing / Mascolin Akdeniz yeşillikleri, cherry domates, zeytinyağı, limon sos",
          price: "₺460",
        },
        {
          name: "Tuna Salad / Ton Balığı Salatası - 415 kcal",
          description:
            "Seasonal greens, caper flowers, red onion, corn, cocktail sauce / Mevsim yeşillikleri, kapari çiçeği, mor soğan, mısır, kokteyl sos",
          price: "₺650",
        },
        {
          name: "Halloumi Salad / Hellim Salatası - 565 kcal",
          description:
            "Seasonal greens, cucumber, cherry tomatoes, grilled halloumi, olive oil lemon dressing / Mevsim yeşillikleri, salatalık, cherry domates, ızgara hellim, zeytinyağı limon sos",
          price: "₺650",
        },
        {
          name: "Caesar Salad / Sezar Salatası - 450 kcal",
          description:
            "Iceberg lettuce, Caesar dressing, grilled chicken fillet, parmesan, croutons / Iceberg marul, Sezar sosu, ızgara tavuk bonfile, parmesan, kruton",
          price: "₺630",
        },
        {
          name: "Roma Salad with Tenderloin / Bonfileli Roma Salatası - 600 kcal",
          description:
            "Mesclun Mediterranean greens, cherry tomatoes, grilled beef tenderloin, parmesan, balsamic dressing / Mascolin Akdeniz yeşillikleri, cherry domates, ızgara bonfile, parmesan, balzamik sos",
          price: "₺720",
        },
      ],
    },
    {
      id: "salatalar-specials",
      title: "Special Salads",
      subtitle: "Özel Salatalar",
      image: "/images/menu-blocks/salatalar-2.png",
      imageAlt: "Misket mozzarellalı roka salatası ve Ege salatası temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Arugula Salad with Mini Mozzarella / Misket Mozzarellalı Roka Salatası - 380 kcal",
          description:
            "Baby arugula leaves, parmesan, cherry tomatoes, mini mozzarella balls, balsamic dressing / Baby roka yaprakları, parmesan, cherry domates, misket mozzarella topları, balzamik sos",
          price: "₺690",
        },
        {
          name: "Aegean Salad / Ege Salatası - 390 kcal",
          description:
            "Seasonal greens, Ezine cheese, cucumber, carrot chips, cherry tomatoes, olive oil lemon dressing / Mevsim yeşillikleri, Ezine peyniri, salatalık, havuç cipsi, cherry domates, zeytinyağı limon sos",
          price: "₺570",
        },
      ],
    },
  ],
},

pizzalar: {
  slug: "pizzalar",
  title: "Pizza",
  subtitle: "Pizzalar",
  blocks: [
    {
      id: "pizzalar-main",
      title: "Classic Pizzas",
      subtitle: "Klasik Pizzalar",
      image: "/images/menu-blocks/pizzalar-1.png",
      imageAlt: "Margarita, Bolonez, Hawaii, ton balıklı ve mantarlı pizza temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Margherita Pizza / Margarita Pizza - 650 kcal",
          description:
            "Pizza sauce, mozzarella cheese, cherry tomatoes, basil leaves / Pizza sosu, mozzarella peyniri, cherry domates, fesleğen yaprakları",
          price: "₺520",
        },
        {
          name: "Bolognese Pizza / Bolonez Pizza - 950 kcal",
          description:
            "Pizza sauce, bolognese sauce, mozzarella cheese / Pizza sosu, bolonez sos, mozzarella peyniri",
          price: "₺650",
        },
        {
          name: "Hawaii Pizza - 985 kcal",
          description:
            "Pizza sauce, pineapple slices, mozzarella cheese, beef ham, basil leaves / Pizza sosu, ananas dilimleri, mozzarella peyniri, dana jambon, fesleğen yaprakları",
          price: "₺720",
        },
        {
          name: "Tuna Pizza / Ton Balıklı Pizza - 730 kcal",
          description:
            "Pizza sauce, mozzarella cheese, corn, red onion, caper flower / Pizza sosu, mozzarella peyniri, mısır, mor soğan, kapari çiçeği",
          price: "₺690",
        },
        {
          name: "Funghi Pizza / Mantarlı Pizza - 550 kcal",
          description:
            "Pizza sauce, mushroom, mozzarella cheese, thyme / Pizza sosu, mantar, mozzarella peyniri, kekik",
          price: "₺530",
        },
      ],
    },
    {
      id: "pizzalar-specials",
      title: "Special Pizzas",
      subtitle: "Özel Pizzalar",
      image: "/images/menu-blocks/pizzalar-2.png",
      imageAlt: "Pepperoni, Quattro Formaggi, Hot Chili, Alaturka, Indian ve Tikka Masala pizza temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Pepperoni Pizza - 750 kcal",
          description:
            "Sucuk, pizza sauce, mozzarella cheese, basil / Sucuk, pizza sosu, mozzarella peyniri, fesleğen",
          price: "₺660",
        },
        {
          name: "Quattro Formaggi Pizza / Quatro Formaggi - 830 kcal",
          description:
            "Pizza sauce, dried tomato, four cheese sauce / Pizza sosu, kurutulmuş domates, dört peynir sosu",
          price: "₺630",
        },
        {
          name: "Hot Chili Pizza - 480 kcal",
          description:
            "Mexican sauce, corn, beef ham, jalapeño, red onion / Meksikan sos, mısır, dana jambon, jalapeno, mor soğan",
          price: "₺720",
        },
        {
          name: "Alaturka Pizza - 650 kcal",
          description:
            "Pastrami, sucuk, mozzarella cheese, pizza sauce, charleston pepper / Pastırma, sucuk, mozzarella peyniri, pizza sosu, çarliston biberi",
          price: "₺790",
        },
        {
          name: "Indian Pizza - 530 kcal",
          description:
            "Curry spiced chicken, charleston pepper, corn, mozzarella cheese, pizza sauce / Köri baharatlı tavuk, çarliston biberi, mısır, mozzarella peyniri, pizza sosu",
          price: "₺680",
        },
        {
          name: "Tikka Masala Pizza - 560 kcal",
          description:
            "Creamy curry spiced chicken pieces, mozzarella cheese, red onion, pizza sauce / Kremalı köri baharatlı tavuk parçaları, mozzarella peyniri, mor soğan, pizza sosu",
          price: "₺650",
        },
      ],
    },
  ],
},

makarnalar: {
  slug: "makarnalar",
  title: "Pastas",
  subtitle: "Makarnalar",
  blocks: [
    {
      id: "makarnalar-main",
      title: "Pastas",
      subtitle: "Makarnalar",
      image: "/images/menu-blocks/makarnalar-1.png",
      imageAlt: "Pesto, tavuklu, bonfileli, bolonez ve napoliten makarna temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Pesto Pasta / Pesto - 630 kcal",
          description:
            "180g fettuccine pasta, parmesan / 180g fettuccine makarna, parmesan ile",
          price: "₺630",
        },
        {
          name: "Chicken Pasta / Tavuklu Makarna - 680 kcal",
          description:
            "180g penne pasta, mushroom, chicken, parmesan, cream / 180g penne makarna, mantar, tavuk, parmesan, krema",
          price: "₺650",
        },
        {
          name: "Beef Pasta / Bonfileli Makarna - 710 kcal",
          description:
            "180g penne pasta, mushroom, beef tenderloin, parmesan, cream / 180g penne makarna, mantar, bonfile, parmesan, krema",
          price: "₺770",
        },
        {
          name: "Bolognese Pasta / Bolognese - 550 kcal",
          description:
            "180g spaghetti pasta, bolognese sauce, parmesan / 180g spaghetti makarna, bolognese sosu, parmesan ile",
          price: "₺720",
        },
        {
          name: "Neapolitan Pasta / Napoliten - 260 kcal",
          description:
            "180g spaghetti pasta, tomato sauce, parmesan / 180g spaghetti makarna, domates sos, parmesan ile",
          price: "₺530",
        },
      ],
    },
    {
      id: "makarnalar-specials",
      title: "Special Pastas",
      subtitle: "Özel Makarnalar",
      image: "/images/menu-blocks/makarnalar-2.png",
      imageAlt: "Vejetaryen, sade, arrabbiata ve carbonara makarna temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Vegetarian Pasta / Vejetaryen - 350 kcal",
          description:
            "180g penne pasta, red onion, mushroom, carrot, cherry tomato sauce / 180g penne makarna, mor soğan, mantar, havuç, domates sos ile",
          price: "₺630",
        },
        {
          name: "Plain Pasta / Sade Makarna - 215 kcal",
          description:
            "180g spaghetti pasta / 180g spaghetti makarna",
          price: "₺400",
        },
        {
          name: "Arrabbiata Pasta / Arrabbiata - 340 kcal",
          description:
            "180g penne pasta, arrabbiata sauce, roasted red pepper, eggplant / 180g penne makarna, arrabbiata sosu, köz biber, patlıcan ile",
          price: "₺560",
        },
        {
          name: "Carbonara Pasta / Carbonara - 700 kcal",
          description:
            "180g fettuccine pasta, beef ham, mushroom, cream, parmesan / 180g fettuccine makarna, dana jambon, mantar, krema, parmesan ile",
          price: "₺680",
        },
      ],
    },
  ],
},

izgaralar: {
  slug: "izgaralar",
  title: "Grills",
  subtitle: "Izgaralar",
  blocks: [
    {
      id: "izgaralar-main",
      title: "Grills",
      subtitle: "Izgaralar",
      image: "/images/menu-blocks/izgaralar-1.png",
      imageAlt: "Kasap köfte, ızgara tavuk, soslu tavuk ve kuzu pirzola temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Butcher’s Meatballs / Kasap Köfte - 850 kcal",
          description:
            "200g butcher-style meatballs, rice, fries, grilled tomato and pepper / 200 gr kasap köfte, pilav, cips, ızgara domates biber ile",
          price: "₺870",
        },
        {
          name: "Grilled Chicken Fillet / Izgara Tavuk Fileto - 800 kcal",
          description:
            "220g chicken fillet, rice, fries, grilled tomato and pepper / 220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          price: "₺820",
        },
        {
          name: "Chicken with Mushroom Sauce / Mantar Soslu Tavuk - 850 kcal",
          description:
            "220g chicken fillet, rice, fries, grilled tomato and pepper / 220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          price: "₺910",
        },
        {
          name: "Chicken with Cheddar Sauce / Cheddar Soslu Tavuk - 870 kcal",
          description:
            "220g chicken fillet, rice, fries, grilled tomato and pepper / 220 gr tavuk fileto, pilav, cips, ızgara domates biber ile",
          price: "₺920",
        },
        {
          name: "Lamb Chops / Kuzu Pirzola - 850 kcal",
          description:
            "260g lamb chops, Dijon mustard, fries, grilled garnish / 260 gr kuzu pirzola, dijon hardal, cips, ızgara garnitür ile",
          price: "₺1.540",
        },
      ],
    },
    {
      id: "izgaralar-steaks",
      title: "Steaks",
      subtitle: "Steak Çeşitleri",
      image: "/images/menu-blocks/izgaralar-2.png",
      imageAlt: "Naturel steak, pepper steak, mantar soslu steak, Hawaii steak ve karışık steak tabağı temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Natural Steak / Naturel Steak - 730 kcal",
          description:
            "180g cooked beef tenderloin, mustard, fries, sautéed seasonal vegetables / 180 gr pişmiş dana bonfile, hardal, cips, sote mevsim sebzeleri",
          price: "₺1.580",
        },
        {
          name: "Pepper Steak - 812 kcal",
          description:
            "180g cooked beef tenderloin, fries, Dijon mustard, sautéed seasonal vegetables / 180 gr pişmiş dana bonfile, cips, dijon hardal, sote mevsim sebzeleri",
          price: "₺1.650",
        },
        {
          name: "Steak with Mushroom Sauce / Mantar Soslu Steak - 830 kcal",
          description:
            "180g cooked beef tenderloin, fries, sautéed seasonal vegetables / 180 gr pişmiş dana bonfile, cips, sote mevsim sebzeleri",
          price: "₺1.630",
        },
        {
          name: "Hawaii Steak - 715 kcal",
          description:
            "180g cooked beef tenderloin, medallion style, pineapple confit, teriyaki sauce, garnish / 180 gr pişmiş dana bonfile, madalyon tarzı, ananas konfi, teriyaki sos, garnitür",
          price: "₺1.800",
        },
        {
          name: "Roma Combo Steak House / Karışık Steak Tabağı - 1180 kcal",
          description:
            "120g beef tenderloin, 150g chicken fillet, 90g butcher-style meatballs, 110g lamb chops, grilled garnish, rice, fries / 120 gr dana bonfile, 150 gr tavuk fileto, 90 gr kasap köfte, 110 gr kuzu pirzola, ızgara garnitür, pilav, cips ile",
          price: "₺2.150",
        },
      ],
    },
  ],
},

"tava-yemekleri": {
  slug: "tava-yemekleri",
  title: "Pan-Fried Dishes",
  subtitle: "Tava Yemekleri",
  blocks: [
    {
      id: "tava-yemekleri-main",
      title: "Pan-Fried Dishes",
      subtitle: "Tava Yemekleri",
      image: "/images/menu-blocks/tava-yemekleri-1.png",
      imageAlt: "Fajita, şinitzel, Meksikan tavuk ve Meksikan steak temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Steak Fajita / Dana Fajita - 360 kcal",
          description:
            "150g beef tenderloin, salsa, guacamole, cheddar sauce, tortilla wrap / 150 gr dana bonfile, salsa, guacamole, cheddar sos, tortilla lavaşı",
          price: "₺1.250",
        },
        {
          name: "Chicken Fajita / Tavuklu Fajita - 315 kcal",
          description:
            "180g chicken fillet, salsa, guacamole, cheddar sauce, tortilla wrap / 180 gr tavuk fileto, salsa, guacamole, cheddar sos, tortilla lavaşı",
          price: "₺1.120",
        },
        {
          name: "Schnitzel / Şinitzel - 480 kcal",
          description:
            "180g chicken fillet, fries, salad, butter / 180 gr tavuk fileto, cips, salata, tereyağı ile",
          price: "₺860",
        },
        {
          name: "Mexican Chicken / Meksikan Tavuk - 350 kcal",
          description:
            "160g chicken fillet, Mexican beans, onion, jalapeno, corn, Mexican sauce, fries, salad / 160 gr tavuk fileto, meksikan fasulyesi, soğan, jalapeno, mısır, meksikan sosu, cips, salata ile",
          price: "₺950",
        },
        {
          name: "Mexican Steak / Meksikan Steak - 300 kcal",
          description:
            "140g beef tenderloin, Mexican beans, onion, jalapeno, corn, Mexican sauce, fries, salad / 140 gr dana bonfile, meksikan fasulyesi, soğan, jalapeno, mısır, meksikan sosu, cips, salata ile",
          price: "₺1.100",
        },
      ],
    },
    {
      id: "tava-yemekleri-specials",
      title: "Special Chicken Dishes",
      subtitle: "Özel Tavuk Yemekleri",
      image: "/images/menu-blocks/tava-yemekleri-2.png",
      imageAlt: "Köri soslu tavuk, sweet chili tavuk ve sweet and sour tavuk temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Chicken with Curry Sauce / Köri Soslu Tavuk - 450 kcal",
          description:
            "160g chicken fillet, cream, soy sauce, rice, fries, curry spices / 160 gr tavuk fileto, krema, soya sosu, pilav, cips, köri baharatı ile",
          price: "₺970",
        },
        {
          name: "Sweet Chili Chicken / Sweet Chili Tavuk - 380 kcal",
          description:
            "160g chicken fillet, tempura-battered fried chicken cubes, fries, salad / 160 gr tavuk fileto, tempura unu ile kızartılmış tavuk küpleri, cips, salata ile",
          price: "₺970",
        },
        {
          name: "Sweet and Sour Chicken / Sweet And Sour Tavuk - 400 kcal",
          description:
            "160g chicken fillet, tempura-battered fried chicken cubes, fries, salad / 160 gr tavuk fileto, tempura unu ile kızartılmış tavuk küpleri, cips, salata ile",
          price: "₺970",
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
      title: "Classic Waffles",
      subtitle: "Klasik Waffle Çeşitleri",
      image: "/images/menu-blocks/waffle-1.png",
      imageAlt: "Meyveli, dondurmalı, Nutellalı ve sade waffle temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Fruit Waffle / Meyveli Waffle - 450 kcal",
          price: "₺570",
        },
        {
          name: "Fruit Waffle with Ice Cream / Meyveli Dondurmalı Waffle - 650 kcal",
          price: "₺660",
        },
        {
          name: "Nutella Waffle / Nutellalı Waffle - 400 kcal",
          price: "₺430",
        },
        {
          name: "Plain Waffle / Sade Waffle - 300 kcal",
          price: "₺300",
        },
        {
          name: "Waffle with Ice Cream / Dondurmalı Waffle - 550 kcal",
          price: "₺480",
        },
      ],
    },
    {
      id: "waffle-specials",
      title: "Special Waffles",
      subtitle: "Özel Waffle Çeşitleri",
      image: "/images/menu-blocks/waffle-2.png",
      imageAlt: "Dubai waffle, beyaz çikolatalı waffle ve meyve tabağı temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Dubai Waffle / Dubai Waffle - 800 kcal",
          price: "₺530",
        },
        {
          name: "Dubai Waffle with Ice Cream / Dubai Waffle Dondurmalı - 890 kcal",
          price: "₺610",
        },
        {
          name: "White Chocolate Waffle / Beyaz Çikolatalı Waffle - 780 kcal",
          price: "₺460",
        },
        {
          name: "White Chocolate Fruit Waffle / Beyaz Çikolatalı Meyveli Waffle - 920 kcal",
          price: "₺600",
        },
        {
          name: "Fruit Plate / Meyve Tabağı - 250 kcal",
          price: "₺520",
        },
      ],
    },
  ],
},

krepler: {
  slug: "krepler",
  title: "Crepes",
  subtitle: "Krepler",
  blocks: [
    {
      id: "krepler-main",
      title: "Crepes",
      subtitle: "Krep Çeşitleri",
      image: "/images/menu-blocks/krepler-1.png",
      imageAlt: "Ballı, dondurmalı, muzlu, Nutellalı ve sade krep temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Honey Crepe / Ballı Krep - 214 kcal",
          price: "₺450",
        },
        {
          name: "Ice Cream Crepe / Dondurmalı Krep - 300 kcal",
          price: "₺520",
        },
        {
          name: "Banana Crepe / Muzlu Krep - 350 kcal",
          price: "₺470",
        },
        {
          name: "Nutella Crepe / Nutellalı Krep - 300 kcal",
          price: "₺420",
        },
        {
          name: "Plain Crepe / Sade Krep - 150 kcal",
          price: "₺330",
        },
      ],
    },
    {
      id: "krepler-specials",
      title: "Special Crepes & Pancakes",
      subtitle: "Özel Krepler ve Pancake",
      image: "/images/menu-blocks/krepler-2.png",
      imageAlt: "Muzlu çikolatalı krep, Nutellalı pancake ve pancake tabağı temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Banana Chocolate Crepe / Muzlu Çikolatalı Krep - 450 kcal",
          price: "₺490",
        },
        {
          name: "Pancake with Nutella / Pancake Nutellalı - 390 kcal",
          price: "₺590",
        },
        {
          name: "Pancake Plate / Pancake Tabağı - 550 kcal",
          description:
            "With banana, strawberry and kiwi / Muz, çilek, kivi",
          price: "₺640",
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
      id: "dondurmalar-main",
      title: "Ice Creams",
      subtitle: "Dondurmalar",
      image: "/images/menu-blocks/dondurmalar-1.png",
      imageAlt:
        "Kavun içi dondurma, kızarmış dondurma, Roma şef spesiyal, Venedik ve tropikal dondurma temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Ice Cream in Melon / Kavun İçi Dondurma - 750 kcal",
          price: "₺600",
        },
        {
          name: "Fried Ice Cream / Kızarmış Dondurma - 410 kcal",
          price: "₺520",
        },
        {
          name: "Roma Chef Special / Roma Şef Spesiyal - 780 kcal",
          description:
            "Italian chef’s special / İtalyan şefin spesiyali",
          price: "₺650",
        },
        {
          name: "Venice / Venedik - 720 kcal",
          description:
            "Pistachio, honey almonds, chestnut, chocolate pieces / Antep fıstığı, bal badem, kestane, parça çikolata",
          price: "₺500",
        },
        {
          name: "Tropical / Tropikal - 390 kcal",
          description:
            "Mango, pineapple, kiwi, mulberry / Mango, ananas, kivi, karadut",
          price: "₺450",
        },
      ],
    },
    {
      id: "dondurmalar-specials",
      title: "Special Ice Creams",
      subtitle: "Özel Dondurmalar",
      image: "/images/menu-blocks/dondurmalar-2.png",
      imageAlt:
        "Iceman, banana split, gofret helvalı dondurma, Danimarka, Hawaii ve ekstra top dondurma temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Iceman / Dondurma Karışımı Özel - 680 kcal",
          description:
            "Mastic, walnut, chestnut, chocolate pieces / Sakız, ceviz, kestane, parça çikolata",
          price: "₺500",
        },
        {
          name: "Banana Split / Muzlu Dondurma - 570 kcal",
          description:
            "Mixed ice cream, banana / Karışık dondurma, muz",
          price: "₺600",
        },
        {
          name: "Ice Cream with Wafer Halva / Gofret Helvalı Dondurma - 480 kcal",
          description:
            "Vanilla, chocolate, coffee, caramel / Vanilya, çikolata, kahve, karamel",
          price: "₺500",
        },
        {
          name: "Denmark / Danimarka - 385 kcal",
          description: "Chocolate, caramel / Çikolata, karamel",
          price: "₺450",
        },
        {
          name: "Hawaii / Hawai - 725 kcal",
          description:
            "Mixed fruits, pineapple, banana, strawberry / Karışık meyve, ananas, muz, çilek",
          price: "₺450",
        },
        {
          name: "Extra Scoop / Ekstra Top - 70 kcal",
          description: "Extra single scoop / Extra tek top",
          price: "₺80",
        },
      ],
    },
  ],
},

"sicak-icecekler": {
  slug: "sicak-icecekler",
  title: "Hot Drinks",
  subtitle: "Sıcak İçecekler",
  blocks: [
    {
      id: "sicak-icecekler-espresso-classics",
      title: "Espresso Classics",
      subtitle: "Espresso Klasikleri",
      image: "/images/menu-blocks/sicak-icecekler-1.png",
      imageAlt: "Espresso, double espresso, ristretto, macchiato, con panna ve americano temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Espresso",
          price: "₺190",
        },
        {
          name: "Double Espresso",
          price: "₺230",
        },
        {
          name: "Espresso Ristretto",
          price: "₺220",
        },
        {
          name: "Espresso Macchiato",
          price: "₺220",
        },
        {
          name: "Con Panna",
          price: "₺270",
        },
        {
          name: "Americano",
          price: "₺220",
        },
        {
          name: "Extra Shot",
          price: "₺100",
        },
      ],
    },
    {
      id: "sicak-icecekler-milk-coffees",
      title: "Milk Coffees",
      subtitle: "Sütlü Kahveler",
      image: "/images/menu-blocks/sicak-icecekler-2.png",
      imageAlt: "Cappuccino, latte macchiato, flat white, cortado ve caramel macchiato temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Cappuccino",
          price: "₺260",
        },
        {
          name: "Latte Macchiato",
          price: "₺260",
        },
        {
          name: "Flat White",
          price: "₺250",
        },
        {
          name: "Cortado",
          price: "₺230",
        },
        {
          name: "Caramel Macchiato",
          price: "₺270",
        },
      ],
    },
    {
      id: "sicak-icecekler-chocolate-specials",
      title: "Chocolate & Specials",
      subtitle: "Çikolatalı ve Özel İçecekler",
      image: "/images/menu-blocks/sicak-icecekler-3.png",
      imageAlt: "Mocha, white chocolate mocha, sıcak çikolata ve affogato temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Mocha",
          price: "₺280",
        },
        {
          name: "White Chocolate Mocha",
          price: "₺280",
        },
        {
          name: "Hot Chocolate / Sıcak Çikolata",
          price: "₺240",
        },
        {
          name: "Affogato",
          price: "₺250",
        },
      ],
    },
    {
      id: "sicak-icecekler-traditional",
      title: "Traditional Hot Drinks",
      subtitle: "Geleneksel Sıcak İçecekler",
      image: "/images/menu-blocks/sicak-icecekler-4.png",
      imageAlt: "Türk kahvesi, duble Türk kahvesi, çay, bitki çayı ve sahlep temsili görsel",
      imageSide: "right",
      items: [
        {
          name: "Turkish Coffee / Türk Kahvesi",
          price: "₺160",
        },
        {
          name: "Double Turkish Coffee / Duble Türk Kahvesi",
          price: "₺240",
        },
        {
          name: "Tea / Çay",
          price: "₺80",
        },
        {
          name: "Herbal Tea / Bitki Çayı",
          price: "₺220",
        },
        {
          name: "Sahlep",
          price: "₺240",
        },
      ],
    },
    {
      id: "sicak-icecekler-filter-instant",
      title: "Filter & Instant Coffees",
      subtitle: "Filtre ve Hazır Kahveler",
      image: "/images/menu-blocks/sicak-icecekler-5.png",
      imageAlt: "Filtre kahve, sade Nescafe ve sütlü Nescafe temsili görsel",
      imageSide: "left",
      items: [
        {
          name: "Drip Coffee / Filtre Kahve",
          price: "₺220",
        },
        {
          name: "Nescafe / Sade Kahve",
          price: "₺180",
        },
        {
          name: "Nescafe With Milk / Sütlü Kahve",
          price: "₺210",
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
        id: "soguk-kahveler-main",
        title: "Iced Coffees",
        subtitle: "Soğuk Kahveler",
        image: "/images/menu-blocks/soguk-kahveler-1.png",
        imageAlt: "Soğuk kahve çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Freddoccino",
            price: "₺380",
          },
          {
            name: "Iced Coffee / Soğuk Kahve",
            price: "₺360",
          },
          {
            name: "Iced Latte / Buzlu Latte",
            price: "₺320",
          },
          {
            name: "Cold Mocha / Soğuk Mocha",
            price: "₺340",
          },
          {
            name: "Cold Cappuccino / Soğuk Cappuccino",
            price: "₺320",
          },
          {
            name: "Iced Caramel Latte / Buzlu Karamel Latte",
            price: "₺350",
          },
        ],
      },
      {
        id: "soguk-kahveler-frappe",
        title: "Frappe & Chocolate",
        subtitle: "Frappe ve Soğuk Çikolata",
        image: "/images/menu-blocks/soguk-kahveler-2.png",
        imageAlt: "Frappe ve soğuk çikolata temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Cold Chocolate / Soğuk Çikolata",
            price: "₺310",
          },
          {
            name: "Milky Frappe / Sütlü Frappe",
            price: "₺280",
          },
          {
            name: "Plain Frappe / Sade Frappe",
            price: "₺250",
          },
        ],
      },
    ],
  },

  "soguk-icecekler": {
    slug: "soguk-icecekler",
    title: "Cold Drinks",
    subtitle: "Soğuk İçecekler",
    blocks: [
      {
        id: "soguk-icecekler-specials",
        title: "Special Cold Drinks",
        subtitle: "Özel Soğuk İçecekler",
        image: "/images/menu-blocks/soguk-icecekler-1.png",
        imageAlt: "Özel soğuk içecekler temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Homemade Lemonade / Ev Yapımı Limonata",
            price: "₺150",
          },
          {
            name: "Strawberry Lemonade / Çilekli Limonata",
            price: "₺200",
          },
          {
            name: "Mojito / Alkolsüz Mojito",
            price: "₺330",
          },
          {
            name: "Churchill / Limonlu Tuzlu Soda",
            price: "₺230",
          },
          {
            name: "Red Bull / Enerji İçeceği",
            price: "₺270",
          },
        ],
      },
      {
        id: "soguk-icecekler-soft-drinks",
        title: "Soft Drinks",
        subtitle: "Gazlı ve Hazır İçecekler",
        image: "/images/menu-blocks/soguk-icecekler-2.png",
        imageAlt: "Gazlı ve hazır içecekler temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Cola / Kola",
            price: "₺210",
          },
          {
            name: "Cola Light / Diyet Kola",
            price: "₺210",
          },
          {
            name: "Soda / Gazoz",
            price: "₺210",
          },
          {
            name: "Fruit Juice / Meyve Suyu",
            price: "₺210",
          },
          {
            name: "Ice Tea",
            price: "₺210",
          },
        ],
      },
      {
        id: "soguk-icecekler-basics",
        title: "Basic Drinks",
        subtitle: "Temel İçecekler",
        image: "/images/menu-blocks/soguk-icecekler-3.png",
        imageAlt: "Temel soğuk içecekler temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Mineral Water / Soda",
            price: "₺100",
          },
          {
            name: "Ayran",
            price: "₺90",
          },
          {
            name: "Water / Su",
            price: "₺40",
          },
          {
            name: "Milk / Süt",
            price: "₺160",
          },
        ],
      },
    ],
  },

  milkshakes: {
    slug: "milkshakes",
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    blocks: [
      {
        id: "milkshakes-classics",
        title: "Classic Milkshakes",
        subtitle: "Klasik Milkshake Çeşitleri",
        image: "/images/menu-blocks/milkshakes-1.png",
        imageAlt: "Klasik milkshake çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Chocolate Milkshake / Çikolatalı Milkshake",
            price: "₺370",
          },
          {
            name: "Caramel Milkshake / Karamelli Milkshake",
            price: "₺370",
          },
          {
            name: "Banana Milkshake / Muzlu Milkshake",
            price: "₺370",
          },
          {
            name: "Blue Milkshake / Mavi Milkshake",
            price: "₺370",
          },
        ],
      },
      {
        id: "milkshakes-fruit",
        title: "Fruit Milkshakes",
        subtitle: "Meyveli Milkshake Çeşitleri",
        image: "/images/menu-blocks/milkshakes-2.png",
        imageAlt: "Meyveli milkshake çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Kiwi Milkshake / Kivili Milkshake",
            price: "₺370",
          },
          {
            name: "Pineapple Milkshake / Ananaslı Milkshake",
            price: "₺370",
          },
          {
            name: "Strawberry Milkshake / Çilekli Milkshake",
            price: "₺370",
          },
          {
            name: "Cherry Milkshake / Vişneli Milkshake",
            price: "₺370",
          },
          {
            name: "Melon Milkshake / Kavunlu Milkshake",
            price: "₺370",
          },
          {
            name: "Mango Milkshake / Mangolu Milkshake",
            price: "₺370",
          },
          {
            name: "Black Mulberry Milkshake / Karadutlu Milkshake",
            price: "₺370",
          },
        ],
      },
    ],
  },
  smoothies: {
    slug: "smoothies",
    title: "Smoothies",
    subtitle: "Smoothie Çeşitleri",
    blocks: [
      {
        id: "smoothies-main",
        title: "Smoothies",
        subtitle: "Smoothie Çeşitleri",
        image: "/images/menu-blocks/smoothies-1.png",
        imageAlt: "Smoothie çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Banana Smoothie / Muzlu Smoothie",
            price: "₺350",
          },
          {
            name: "Kiwi Smoothie / Kivili Smoothie",
            price: "₺350",
          },
          {
            name: "Pineapple Smoothie / Ananaslı Smoothie",
            price: "₺350",
          },
          {
            name: "Strawberry Smoothie / Çilekli Smoothie",
            price: "₺350",
          },
          {
            name: "Mango Smoothie / Mangolu Smoothie",
            price: "₺350",
          },
        ],
      },
      {
        id: "smoothies-fruit",
        title: "Fruit Smoothies",
        subtitle: "Meyveli Smoothie Çeşitleri",
        image: "/images/menu-blocks/smoothies-2.png",
        imageAlt: "Meyveli smoothie çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Cherry Smoothie / Vişneli Smoothie",
            price: "₺350",
          },
          {
            name: "Black Mulberry Smoothie / Karadutlu Smoothie",
            price: "₺350",
          },
          {
            name: "Melon Smoothie / Kavunlu Smoothie",
            price: "₺350",
          },
          {
            name: "Peach Smoothie / Şeftalili Smoothie",
            price: "₺350",
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
        image: "/images/menu-blocks/frozens-1.png",
        imageAlt: "Frozen çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Watermelon Frozen / Karpuzlu Frozen",
            price: "₺320",
          },
          {
            name: "Mint Frozen / Naneli Frozen",
            price: "₺320",
          },
          {
            name: "Strawberry Frozen / Çilekli Frozen",
            price: "₺320",
          },
          {
            name: "Melon Frozen / Kavunlu Frozen",
            price: "₺320",
          },
        ],
      },
      {
        id: "frozens-fruit",
        title: "Fruit Frozens",
        subtitle: "Meyveli Frozen Çeşitleri",
        image: "/images/menu-blocks/frozens-2.png",
        imageAlt: "Meyveli frozen çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Kiwi Frozen / Kivili Frozen",
            price: "₺320",
          },
          {
            name: "Green Apple Frozen / Yeşil Elmalı Frozen",
            price: "₺320",
          },
          {
            name: "Banana Frozen / Muzlu Frozen",
            price: "₺320",
          },
          {
            name: "Peach Frozen / Şeftalili Frozen",
            price: "₺320",
          },
        ],
      },
    ],
  },

  "meyve-sulari": {
    slug: "meyve-sulari",
    title: "Fresh Juices",
    subtitle: "Taze Meyve Suları",
    blocks: [
      {
        id: "meyve-sulari-main",
        title: "Fresh Juices",
        subtitle: "Taze Meyve Suları",
        image: "/images/menu-blocks/meyve-sulari.png",
        imageAlt: "Taze meyve suyu çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Milk with Banana / Muzlu Süt",
            price: "₺320",
          },
          {
            name: "Pomegranate Juice / Nar Suyu",
            price: "₺320",
          },
          {
            name: "Fresh Orange Juice / Sıkma Portakal Suyu",
            price: "₺320",
          },
          {
            name: "Roma Special",
            price: "₺410",
          },
        ],
      },
    ],
  },

  "yerli-alkollu-icecekler": {
    slug: "yerli-alkollu-icecekler",
    title: "Local Drinks",
    subtitle: "Yerli İçkiler",
    blocks: [
      {
        id: "yerli-alkollu-icecekler-main",
        title: "Local Drinks",
        subtitle: "Yerli İçkiler",
        image: "/images/menu-blocks/yerli-alkollu-icecekler.png",
        imageAlt: "Yerli içkiler temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Red Wine / Kırmızı Şarap",
            price: "₺380",
          },
          {
            name: "White Wine / Beyaz Şarap",
            price: "₺380",
          },
          {
            name: "Rosé Wine / Rose Şarap",
            price: "₺380",
          },
          {
            name: "Vodka / Vodka",
            price: "₺440",
          },
          {
            name: "Gin / Cin",
            price: "₺440",
          },
        ],
      },
    ],
  },
  "yabanci-alkollu-icecekler": {
    slug: "yabanci-alkollu-icecekler",
    title: "Imported Drinks",
    subtitle: "Yabancı İçkiler",
    blocks: [
      {
        id: "yabanci-alkollu-icecekler-whiskey-liqueur",
        title: "Whiskey & Liqueur",
        subtitle: "Viski ve Likör",
        image: "/images/menu-blocks/yabanci-alkollu-icecekler-1.png",
        imageAlt: "Yabancı viski ve likör çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Jägermeister",
            description: "2 cl",
            price: "₺620",
          },
          {
            name: "Jack Daniel’s",
            description: "4 cl",
            price: "₺580",
          },
          {
            name: "Chivas Regal",
            description: "4 cl",
            price: "₺620",
          },
          {
            name: "J&B",
            description: "4 cl",
            price: "₺500",
          },
          {
            name: "Baileys",
            description: "6 cl",
            price: "₺550",
          },
        ],
      },
      {
        id: "yabanci-alkollu-icecekler-vodka-rum",
        title: "Vodka & Rum",
        subtitle: "Votka ve Rom",
        image: "/images/menu-blocks/yabanci-alkollu-icecekler-2.png",
        imageAlt: "Votka ve rom çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Smirnoff Vodka",
            description: "5 cl",
            price: "₺500",
          },
          {
            name: "Absolut Vodka",
            description: "5 cl",
            price: "₺500",
          },
          {
            name: "Captain Morgan",
            description: "5 cl",
            price: "₺620",
          },
          {
            name: "Malibu",
            description: "5 cl",
            price: "₺620",
          },
          {
            name: "Bacardi",
            description: "5 cl",
            price: "₺620",
          },
        ],
      },
      {
        id: "yabanci-alkollu-icecekler-gin-vermouth-tequila",
        title: "Gin, Vermouth & Tequila",
        subtitle: "Cin, Vermut ve Tekila",
        image: "/images/menu-blocks/yabanci-alkollu-icecekler-3.png",
        imageAlt: "Cin, vermut ve tekila çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Martini",
            description: "12 cl",
            price: "₺550",
          },
          {
            name: "Gordon’s Gin",
            description: "5 cl",
            price: "₺600",
          },
          {
            name: "Tequila",
            description: "2 cl",
            price: "₺500",
          },
        ],
      },
    ],
  },
  kokteyller: {
    slug: "kokteyller",
    title: "Cocktails",
    subtitle: "Kokteyller",
    blocks: [
      {
        id: "kokteyller-classics",
        title: "Classic Cocktails",
        subtitle: "Klasik Kokteyller",
        image: "/images/menu-blocks/kokteyller-1.png",
        imageAlt: "Klasik kokteyller temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "B-52",
            description: "2 cl Kahlua, 2 cl Baileys, 2 cl Cointreau",
            price: "₺650",
          },
          {
            name: "Margarita",
            description: "4 cl tequila, 3 cl Cointreau, lemon juice",
            price: "₺700",
          },
          {
            name: "Tequila Sunrise",
            description:
              "5 cl tequila, 2 cl Cointreau, orange juice, grenadine",
            price: "₺700",
          },
          {
            name: "Long Island",
            description:
              "2 cl vodka, 2 cl Bacardi, 2 cl tequila, 2 cl gin, 2 cl Cointreau, cola",
            price: "₺950",
          },
          {
            name: "Bloody Mary",
            description:
              "5 cl vodka, tomato juice, lemon juice, hot sauce, black pepper",
            price: "₺700",
          },
        ],
      },
      {
        id: "kokteyller-tropical-fresh",
        title: "Tropical & Fresh Cocktails",
        subtitle: "Tropikal ve Ferah Kokteyller",
        image: "/images/menu-blocks/kokteyller-2.png",
        imageAlt: "Tropikal kokteyller temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Sex on the Beach",
            description:
              "4 cl vodka, 2 cl Archers, 2 cl tequila, orange juice, grenadine",
            price: "₺700",
          },
          {
            name: "Piña Colada",
            description:
              "5 cl Bacardi, 2 cl Malibu, coconut milk, pineapple juice",
            price: "₺700",
          },
          {
            name: "Mojito",
            description:
              "5 cl Bacardi, lime, brown sugar, fresh mint, mineral water",
            price: "₺730",
          },
          {
            name: "Alcoholic Frozen",
            price: "₺700",
          },
          {
            name: "Pink Lady",
            description:
              "4 cl gin, grenadine, cream, lemon juice, mineral water",
            price: "₺650",
          },
        ],
      },
      {
        id: "kokteyller-signature-coffee",
        title: "Signature & Coffee Cocktails",
        subtitle: "İmza ve Kahveli Kokteyller",
        image: "/images/menu-blocks/kokteyller-3.png",
        imageAlt: "İmza ve kahveli kokteyller temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Lynchburg Lemonade",
            description:
              "4 cl Jack Daniel’s, 2 cl Cointreau, lemon juice, Sprite",
            price: "₺950",
          },
          {
            name: "Espresso Martini",
            description: "5 cl vodka, 3 cl Kahlua, espresso",
            price: "₺720",
          },
          {
            name: "White Russian",
            description: "4 cl vodka, 2 cl Kahlua, cream",
            price: "₺730",
          },
          {
            name: "Irish Coffee",
            description: "4 cl whiskey, filter coffee, brown sugar, cream",
            price: "₺700",
          },
        ],
      },
      {
        id: "kokteyller-wine-beer-rum",
        title: "Wine, Beer & Rum Based",
        subtitle: "Şarap, Bira ve Rom Bazlı Kokteyller",
        image: "/images/menu-blocks/kokteyller-4.png",
        imageAlt: "Şarap, bira ve rom bazlı kokteyller temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Margarita Diablo",
            description: "5 cl tequila, 2 cl red wine, lemon juice",
            price: "₺720",
          },
          {
            name: "Tinto de Verano",
            description: "Red wine, Sprite",
            price: "₺650",
          },
          {
            name: "Michelada",
            description:
              "Lime juice, Worcestershire sauce, hot sauce, tomato juice, beer",
            price: "₺720",
          },
          {
            name: "Jäger Mojito",
            description:
              "5 cl Jägermeister, lime, brown sugar, fresh mint, mineral water",
            price: "₺750",
          },
          {
            name: "Cuba Libre",
            description: "5 cl Havana rum, cola, lemon juice",
            price: "₺700",
          },
        ],
      },
    ],
  },

  biralar: {
    slug: "biralar",
    title: "Beers",
    subtitle: "Biralar",
    blocks: [
      {
        id: "biralar-local",
        title: "Efes & Local Beers",
        subtitle: "Efes ve Yerli Biralar",
        image: "/images/menu-blocks/biralar-1.png",
        imageAlt: "Efes ve yerli bira çeşitleri temsili görsel",
        imageSide: "right",
        items: [
          {
            name: "Efes",
            price: "₺250",
          },
          {
            name: "Efes Glutensiz",
            price: "₺300",
          },
          {
            name: "Efes Malt",
            price: "₺250",
          },
          {
            name: "Efes Özel Seri",
            price: "₺300",
          },
          {
            name: "Bomonti",
            price: "₺300",
          },
          {
            name: "Belfast",
            price: "₺250",
          },
        ],
      },
      {
        id: "biralar-premium",
        title: "Imported & Premium Beers",
        subtitle: "İthal ve Premium Biralar",
        image: "/images/menu-blocks/biralar-2.png",
        imageAlt: "İthal ve premium bira çeşitleri temsili görsel",
        imageSide: "left",
        items: [
          {
            name: "Corona",
            price: "₺300",
          },
          {
            name: "Miller",
            price: "₺300",
          },
          {
            name: "Beck’s",
            price: "₺300",
          },
          {
            name: "Bud",
            price: "₺300",
          },
          {
            name: "Stella",
            price: "₺320",
          },
        ],
      },
    ],
  },
};