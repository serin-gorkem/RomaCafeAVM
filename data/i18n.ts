export const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
  },
  {
    code: "tr",
    label: "Türkçe",
    shortLabel: "TR",
  },
] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number]["code"];

export type LocalizedText = Record<Language, string>;

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_STORAGE_KEY = "cafe-roma-language";

export function isLanguage(value: unknown): value is Language {
  return SUPPORTED_LANGUAGES.some((language) => language.code === value);
}

export function getLocalizedText(text: LocalizedText, language: Language) {
  return text[language] || text[DEFAULT_LANGUAGE];
}

export const UI_TEXT = {
  menuCategories: {
    en: "Menu Categories",
    tr: "Menü Kategorileri",
  },
  selectLanguage: {
    en: "Select language",
    tr: "Dil seç",
  },
  openMenu: {
    en: "Open menu",
    tr: "Menüyü aç",
  },
  closeMenu: {
    en: "Close menu",
    tr: "Menüyü kapat",
  },
  backToMenu: {
    en: "Back to Menu",
    tr: "Menüye Dön",
  },
} satisfies Record<string, LocalizedText>;