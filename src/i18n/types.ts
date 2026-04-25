export const LOCALES = ["uz", "qr", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";

export const LOCALE_META: Record<Locale, { name: string; flag: string; htmlLang: string; pathPrefix: string }> = {
  uz: { name: "O'zbekcha", flag: "🇺🇿", htmlLang: "uz", pathPrefix: "" },
  qr: { name: "Qaraqalpaqsha", flag: "🇺🇿", htmlLang: "kaa", pathPrefix: "/qr" },
  ru: { name: "Русский", flag: "🇷🇺", htmlLang: "ru", pathPrefix: "/ru" },
  en: { name: "English", flag: "🇬🇧", htmlLang: "en", pathPrefix: "/en" },
};
