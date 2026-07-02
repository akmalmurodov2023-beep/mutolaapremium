import { dictionaries } from "@/i18n/dictionaries";
import { SEO_KEYWORDS } from "@/i18n/seoKeywords";
import { LOCALE_META, LOCALES, type Locale } from "@/i18n/types";

const SITE_URL = "https://mutolaxona.uz";

export function buildHeadMeta(
  locale: Locale,
  path: string,
  override?: { title?: string; description?: string },
  alternates?: Partial<Record<Locale, string>>,
) {
  const t = dictionaries[locale];
  const title = override?.title ?? t.meta.title;
  const description = override?.description ?? t.meta.description;
  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}/og-image.png`;

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: localeToOg(locale) },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  // hreflang faqat haqiqatan mavjud ekvivalent sahifalarga ishora qilishi kerak.
  const altPaths = alternates ?? homeAlternatePaths();
  const links = [
    { rel: "canonical", href: url },
    ...Object.entries(altPaths).map(([l, p]) => ({
      rel: "alternate",
      hrefLang: LOCALE_META[l as Locale].htmlLang,
      href: `${SITE_URL}${p}`,
    })),
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: `${SITE_URL}${altPaths.uz ?? path}`,
    },
  ];

  return { meta, links };
}

export function homeAlternatePaths(): Partial<Record<Locale, string>> {
  return Object.fromEntries(
    LOCALES.map((l) => [l, LOCALE_META[l].pathPrefix || "/"]),
  );
}

// Landing sahifa uchun: shu slug mavjud bo'lgan tillargagina hreflang beriladi.
export function landingAlternatePaths(slug: string): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of LOCALES) {
    if (SEO_KEYWORDS[l].some((k) => k.slug === slug)) {
      out[l] = `${LOCALE_META[l].pathPrefix}/p/${slug}`;
    }
  }
  return out;
}

function localeToOg(l: Locale) {
  switch (l) {
    case "uz": return "uz_UZ";
    case "qr": return "kaa_UZ";
    case "ru": return "ru_RU";
    case "en": return "en_US";
  }
}
