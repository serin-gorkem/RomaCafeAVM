"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  SUPPORTED_LANGUAGES,
  UI_TEXT,
  getLocalizedText,
  isLanguage,
} from "../../data/i18n";
import { menuCategories } from "../../data/menuCategories";
import { useLanguage } from "../i18n/LanguageProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  function closeMenu() {
    setIsOpen(false);
    setIsLanguageOpen(false);
  }
  const activeLanguage = SUPPORTED_LANGUAGES.find(
    (item) => item.code === language,
  );

  const t = (text: keyof typeof UI_TEXT) =>
    getLocalizedText(UI_TEXT[text], language);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!languageDropdownRef.current) {
        return;
      }

      if (!languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/cafe-roma-logo.webp"
            alt="Cafe Roma"
            width={150}
            height={48}
            priority
            className="h-auto w-33 object-contain md:w-37.5"
          />
        </Link>
        <div className="flex items-center gap-3">
          <div ref={languageDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((current) => !current)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 text-sm font-bold tracking-[0.14em] text-neutral-950 shadow-sm transition hover:border-neutral-950 hover:bg-neutral-50"
              aria-label={t("selectLanguage")}
              aria-expanded={isLanguageOpen}
            >
              <span>{activeLanguage?.shortLabel ?? "EN"}</span>

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-3 w-40 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
                {SUPPORTED_LANGUAGES.map((item) => {
                  const isActive = item.code === language;

                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        if (isLanguage(item.code)) {
                          setLanguage(item.code);
                        }

                        setIsLanguageOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                        isActive
                          ? "bg-neutral-950 font-bold text-white"
                          : "bg-white font-semibold text-neutral-800 hover:bg-neutral-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs tracking-[0.18em]">
                        {item.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen((current) => !current);
              setIsLanguageOpen(false);
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-950"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white">
          <div className="max-h-[calc(100svh-80px)] overflow-y-auto px-5 py-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              {t("menuCategories")}
            </p>

            <div className="space-y-1">
              {menuCategories.map((category) => {
                const isActive = pathname === category.href;

                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition ${
                      isActive
                        ? "bg-neutral-950 text-white"
                        : "text-neutral-950 hover:bg-neutral-100"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                        isActive
                          ? "border-white/20 bg-white text-neutral-950"
                          : "border-neutral-200 bg-neutral-50 text-neutral-950 group-hover:border-neutral-300 group-hover:bg-white"
                      }`}
                    >
                      <Image
                        src={category.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="block text-base font-semibold uppercase tracking-[0.12em]">
                      {category.title[language]}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
