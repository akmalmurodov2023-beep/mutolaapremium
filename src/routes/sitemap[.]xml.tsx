import { createFileRoute } from "@tanstack/react-router";
import { LOCALE_META, LOCALES } from "@/i18n/types";

const SITE = "https://mutolaxona.uz";

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = LOCALES.map((l) => {
    const loc = `${SITE}${LOCALE_META[l].pathPrefix || "/"}`;
    const alternates = LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[alt].htmlLang}" href="${SITE}${LOCALE_META[alt].pathPrefix || "/"}" />`,
    ).join("\n");
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "uz" ? "1.0" : "0.8"}</priority>
${alternates}
${xDefault}
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
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
