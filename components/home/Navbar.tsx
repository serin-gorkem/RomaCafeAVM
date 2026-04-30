"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuCategories = [
  {
    title: "Milkshakes",
    subtitle: "Milkshake Çeşitleri",
    href: "#milkshakes",
  },
  {
    title: "Frozens",
    subtitle: "Frozen Çeşitleri",
    href: "#frozens",
  },
  {
    title: "Cold Coffees",
    subtitle: "Soğuk Kahveler",
    href: "#cold-coffees",
  },
  {
    title: "Cold Alternatives",
    subtitle: "Soğuk Alternatifler",
    href: "#cold-alternatives",
  },
  {
    title: "Matcha",
    subtitle: "Matcha",
    href: "#matcha",
  },
  {
    title: "Hot Coffees",
    subtitle: "Sıcak Kahveler",
    href: "#hot-coffees",
  },
  {
    title: "Herbal Tea",
    subtitle: "Bitki Çayları",
    href: "#herbal-tea",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cafe-roma-logo.webp"
            alt="Cafe Roma"
            width={150}
            height={48}
            priority
            className="h-auto w-33 object-contain md:w-37.5"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuCategories.slice(0, 5).map((category) => (
            <a
              key={category.href}
              href={category.href}
              className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-900 transition hover:text-neutral-500"
            >
              {category.title}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-950 md:hidden"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="max-h-[calc(100svh-80px)] overflow-y-auto px-5 py-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Menu Categories
            </p>

            <div className="divide-y divide-neutral-100">
              {menuCategories.map((category) => (
                <a
                  key={category.href}
                  href={category.href}
                  onClick={closeMenu}
                  className="block py-4"
                >
                  <span className="block text-base font-semibold uppercase tracking-[0.12em] text-neutral-950">
                    {category.title}
                  </span>

                  <span className="mt-1 block text-sm text-neutral-500">
                    {category.subtitle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}