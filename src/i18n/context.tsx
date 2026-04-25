import { createContext, useContext, type ReactNode } from "react";
import { dictionaries, type Dict } from "./dictionaries";
import { DEFAULT_LOCALE, LOCALE_META, type Locale } from "./types";

interface I18nValue {
  locale: Locale;
  t: Dict;
  pathFor: (locale: Locale) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  const pathFor = (l: Locale) => LOCALE_META[l].pathPrefix || "/";
  return <I18nContext.Provider value={{ locale, t, pathFor }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
