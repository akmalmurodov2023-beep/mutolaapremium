import { createFileRoute } from "@tanstack/react-router";
import { LOCALE_META, LOCALES, type Locale } from "@/i18n/types";
import { SEO_KEYWORDS } from "@/i18n/seoKeywords";

const SITE = "https://mutolaxona.uz";

function landingPath(locale: Locale, slug: string) {
  return `${LOCALE_META[locale].pathPrefix}/p/${slug}`;
}

function altLinks(buildHref: (l: Locale) => string) {
  const alts = LOCALES.map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[alt].htmlLang}" href="${SITE}${buildHref(alt)}" />`,
  ).join("\n");
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${buildHref("uz")}" />`;
  return `${alts}\n${xDefault}`;
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);

  // 1) Home pages for each locale
  const home = LOCALES.map((l) => {
    const loc = `${SITE}${LOCALE_META[l].pathPrefix || "/"}`;
    const alternates = altLinks((alt) => LOCALE_META[alt].pathPrefix || "/");
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "uz" ? "1.0" : "0.8"}</priority>
${alternates}
  </url>`;
  }).join("\n");

  // 2) SEO landing pages — every keyword in every locale
  const landings: string[] = [];
  for (const l of LOCALES) {
    for (const kw of SEO_KEYWORDS[l]) {
      const loc = `${SITE}${landingPath(l, kw.slug)}`;
      // Build hreflang alternates: only if same slug exists in target locale, else fall back to that locale's home
      const alts = altLinks((alt) => {
        const sameSlug = SEO_KEYWORDS[alt].find((k) => k.slug === kw.slug);
        return sameSlug ? landingPath(alt, sameSlug.slug) : LOCALE_META[alt].pathPrefix || "/";
      });
      landings.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "uz" ? "0.9" : "0.7"}</priority>
${alts}
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${home}
${landings.join("\n")}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
