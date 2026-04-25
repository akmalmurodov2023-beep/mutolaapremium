import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { LOCALES, LOCALE_META, type Locale } from "@/i18n/types";

export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { locale, t, pathFor } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isDark = variant === "dark";
  const btnStyle = isDark
    ? "bg-white/15 text-white border-white/30 hover:bg-white/25"
    : "bg-card text-ink border-border hover:border-primary/50";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-2 text-sm font-semibold transition-all sm:gap-2 sm:px-3 ${btnStyle}`}
        aria-label={t.nav.languageLabel}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe size={16} className="shrink-0" />
        <span className="hidden sm:inline">{LOCALE_META[locale].name}</span>
        <span className="sm:hidden uppercase">{locale}</span>
        <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-soft"
        >
          {LOCALES.map((l: Locale) => {
            const active = l === locale;
            return (
              <li key={l}>
                <a
                  href={pathFor(l)}
                  hrefLang={LOCALE_META[l].htmlLang}
                  className={[
                    "flex items-center gap-2 px-3 py-2 text-sm transition-colors",
                    active ? "bg-primary-soft text-primary font-semibold" : "text-ink hover:bg-muted",
                  ].join(" ")}
                  role="menuitem"
                >
                  <span>{LOCALE_META[l].name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
