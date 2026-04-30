import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import type { MenuContentBlock, MenuItem, MenuPage } from "@/data/menuPages";

type MenuCategoryPageProps = {
  page: MenuPage;
};

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white/85 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="font-serif text-2xl text-neutral-950">{item.name}</h3>

          {item.description && (
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {item.description}
            </p>
          )}
        </div>

        {item.price && (
          <p className="shrink-0 text-lg font-semibold text-neutral-950">
            {item.price}
          </p>
        )}
      </div>
    </article>
  );
}

function MenuBlock({ block }: { block: MenuContentBlock }) {
  const imageFirst = block.imageSide === "left";

  const imageElement = block.image ? (
    <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/20 md:min-h-[520px]">
      <Image
        src={block.image}
        alt={block.imageAlt ?? block.title ?? "Cafe Roma menu görseli"}
        fill
        sizes="(min-width: 1024px) 448px, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />
    </div>
  ) : null;

  const listElement = (
    <div>
      {(block.title || block.subtitle) && (
        <div className="mb-6 text-center md:text-left">
          {block.title && (
            <h2 className="font-serif text-4xl text-white drop-shadow md:text-5xl">
              {block.title}
            </h2>
          )}

          {block.subtitle && (
            <p className="mt-2 text-lg font-semibold text-white/85">
              ({block.subtitle})
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {block.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="grid gap-7 lg:grid-cols-2 lg:items-start">
      <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
        {imageElement}
      </div>

      <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
        {listElement}
      </div>
    </section>
  );
}

export default function MenuCategoryPage({ page }: MenuCategoryPageProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f5efe3] pt-20">
        <section className="relative h-90 overflow-hidden bg-black md:h-115">
          <Image
            src={page.heroImage}
            alt={`${page.title} - ${page.subtitle}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {page.title}
            </h1>

            <p className="mt-4 text-2xl font-bold md:text-4xl">
              ({page.subtitle})
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-10 md:py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/caferoma-bg.webp')] bg-[length:100%_auto] bg-top bg-repeat-y lg:bg-[url('/images/caferoma-bg-yatay.webp')] lg:bg-cover lg:bg-center" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-8">
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:text-white"
              >
                ← Menüye Dön
              </Link>
            </div>

            <div className="space-y-14 md:space-y-20">
              {page.blocks.map((block) => (
                <MenuBlock key={block.id} block={block} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
