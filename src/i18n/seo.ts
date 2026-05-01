import { dictionaries } from "@/i18n/dictionaries";
import { LOCALE_META, type Locale } from "@/i18n/types";

const SITE_URL = "https://mutolaxona.uz";

export function buildHeadMeta(
  locale: Locale,
  path: string,
  override?: { title?: string; description?: string },
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
    { name: "twitter:title", content: t.meta.title },
    { name: "twitter:description", content: t.meta.description },
    { name: "twitter:image", content: ogImage },
  ];

  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ...Object.entries(LOCALE_META).map(([l, m]) => ({
      rel: "alternate",
      hrefLang: m.htmlLang,
      href: `${SITE_URL}${m.pathPrefix || "/"}`,
    })),
  ];

  return { meta, links };
}

function localeToOg(l: Locale) {
  switch (l) {
    case "uz": return "uz_UZ";
    case "qr": return "kaa_UZ";
    case "ru": return "ru_RU";
    case "en": return "en_US";
  }
}
