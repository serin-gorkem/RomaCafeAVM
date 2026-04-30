import Image from "next/image";

const categories = [
  {
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    image: "/images/categories/milkshakes.webp",
    href: "#milkshakes",
  },
  {
    title: "Frozens",
    subtitle: "Frozen Çeşitleri",
    image: "/images/categories/frozens.webp",
    href: "#frozens",
  },
  {
    title: "Cold Coffees",
    subtitle: "Soğuk Kahveler",
    image: "/images/categories/cold-coffees.webp",
    href: "#cold-coffees",
  },
  {
    title: "Cold Alternatives",
    subtitle: "Soğuk Alternatifler",
    image: "/images/categories/cold-alternatives.webp",
    href: "#cold-alternatives",
  },
  {
    title: "Matcha",
    subtitle: "Matcha",
    image: "/images/categories/matcha.webp",
    href: "#matcha",
  },
  {
    title: "Hot Coffees",
    subtitle: "Sıcak Kahveler",
    image: "/images/categories/hot-coffees.webp",
    href: "#hot-coffees",
  },
  {
    title: "Herbal Tea",
    subtitle: "Bitki Çayları",
    image: "/images/categories/herbal-tea.webp",
    href: "#herbal-tea",
  },
];

function MenuIcon() {
  return (
    <div className="group mx-auto mb-6 flex h-[118px] w-[118px] items-center justify-center rounded-full bg-neutral-50 transition duration-300 hover:bg-black">
      <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full border border-neutral-200 bg-[repeating-linear-gradient(45deg,#f5f5f5_0,#f5f5f5_2px,transparent_2px,transparent_10px)] transition duration-300 group-hover:border-black group-hover:bg-none">
        <svg
          viewBox="0 0 100 100"
          className="h-12 w-12 text-black transition duration-300 group-hover:text-white"
          aria-hidden="true"
        >
          <path
            d="M22 25L50 38L78 25V75L50 88L22 75V25Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M50 38V88"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M33 44L43 49M33 58L43 63M67 44L57 49M67 58L57 63"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function MenuCategories() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="absolute inset-0 grid grid-cols-3">
        <div className="bg-[#4b8f3a]" />
        <div className="bg-white" />
        <div className="bg-[#d60024]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <MenuIcon />

        <p className="font-serif text-base uppercase tracking-normal text-black">
          MENU CATEGORIES
        </p>

        <h2 className="mt-6 font-serif text-base uppercase tracking-normal text-black">
          (MENÜ KATEGORİLERİ)
        </h2>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {categories.map((category) => (
            <a
              key={category.href}
              href={category.href}
              className="group relative block h-[260px] overflow-hidden bg-black md:h-[320px]"
            >
              <Image
                src={category.image}
                alt={`${category.title} - ${category.subtitle}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-white/25" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center transition-transform duration-300 group-hover:-translate-y-6">
                <span className="text-4xl font-black uppercase leading-none tracking-tight text-white [filter:drop-shadow(0_5px_5px_rgba(0,0,0,0.75))] md:text-6xl">
                  {category.title}
                </span>

                <span className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-white drop-shadow-lg md:text-5xl">
                  ({category.subtitle})
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex h-[72px] translate-y-full items-center justify-center bg-black/75 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93" />
                  <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
