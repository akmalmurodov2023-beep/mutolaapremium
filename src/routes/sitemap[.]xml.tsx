import { createFileRoute } from "@tanstack/react-router";
import { LOCALE_META, LOCALES, type Locale } from "@/i18n/types";
import { SEO_KEYWORDS } from "@/i18n/seoKeywords";

const SITE = "https://mutolaxona.uz";
// Kontent o'zgarganda qo'lda yangilanadi — har so'rovda "bugun" deb yolg'on signal bermaslik uchun.
const LASTMOD = "2026-07-02";

function landingPath(locale: Locale, slug: string) {
  return `${LOCALE_META[locale].pathPrefix}/p/${slug}`;
}

function altLink(hreflang: string, href: string) {
  return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE}${href}" />`;
}

function buildSitemap() {
  // 1) Home pages for each locale
  const home = LOCALES.map((l) => {
    const loc = `${SITE}${LOCALE_META[l].pathPrefix || "/"}`;
    const alternates = [
      ...LOCALES.map((alt) => altLink(LOCALE_META[alt].htmlLang, LOCALE_META[alt].pathPrefix || "/")),
      altLink("x-default", "/"),
    ].join("\n");
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "uz" ? "1.0" : "0.8"}</priority>
${alternates}
  </url>`;
  }).join("\n");

  // 2) SEO landing pages — hreflang faqat shu slug mavjud bo'lgan tillarga
  const landings: string[] = [];
  for (const l of LOCALES) {
    for (const kw of SEO_KEYWORDS[l]) {
      const loc = `${SITE}${landingPath(l, kw.slug)}`;
      const withSlug = LOCALES.filter((alt) =>
        SEO_KEYWORDS[alt].some((k) => k.slug === kw.slug),
      );
      const altRows = withSlug.map((alt) =>
        altLink(LOCALE_META[alt].htmlLang, landingPath(alt, kw.slug)),
      );
      const xDefaultPath = withSlug.includes("uz")
        ? landingPath("uz", kw.slug)
        : landingPath(l, kw.slug);
      altRows.push(altLink("x-default", xDefaultPath));
      landings.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "uz" ? "0.9" : "0.7"}</priority>
${altRows.join("\n")}
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
