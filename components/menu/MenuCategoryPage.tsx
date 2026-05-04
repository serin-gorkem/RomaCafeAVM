"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import {
  UI_TEXT,
  getLocalizedText,
  type Language,
} from "../../data/i18n";
import type {
  MenuContentBlock,
  MenuItem,
  MenuPage,
} from "../../data/menuPages";
import { useLanguage } from "../i18n/LanguageProvider";

type MenuCategoryPageProps = {
  page: MenuPage;
};

function MenuItemRow({
  item,
  language,
}: {
  item: MenuItem;
  language: Language;
}) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white/85 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="font-serif text-2xl text-neutral-950">
            {getLocalizedText(item.name, language)}
          </h3>

          {item.description && (
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {getLocalizedText(item.description, language)}
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

function MenuBlock({
  block,
  language,
}: {
  block: MenuContentBlock;
  language: Language;
}) {
  const imageFirst = block.imageSide === "left";

  const imageAlt =
    block.imageAlt ??
    block.title ?? {
      en: "Cafe Roma menu image",
      tr: "Cafe Roma menü görseli",
    };

  const imageElement = block.image ? (
    <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/20 md:min-h-[520px]">
      <Image
        src={block.image}
        alt={getLocalizedText(imageAlt, language)}
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
              {getLocalizedText(block.title, language)}
            </h2>
          )}

        </div>
      )}

      <div className="space-y-4">
        {block.items.map((item) => (
          <MenuItemRow
            key={item.name.en}
            item={item}
            language={language}
          />
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
  const { language } = useLanguage();

  const t = (text: keyof typeof UI_TEXT) =>
    getLocalizedText(UI_TEXT[text], language);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f5efe3] pt-20">
        <section className="relative overflow-hidden px-5 py-10 md:py-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/caferoma-bg.webp')] bg-size-[100%_auto] bg-top bg-repeat-y lg:bg-[url('/images/caferoma-bg-yatay.webp')]" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-8">
              <Link
                href="/"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:text-white"
              >
                ← {t("backToMenu")}
              </Link>
            </div>

            <div className="space-y-14 md:space-y-20">
              {page.blocks.map((block) => (
                <MenuBlock
                  key={block.id}
                  block={block}
                  language={language}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}