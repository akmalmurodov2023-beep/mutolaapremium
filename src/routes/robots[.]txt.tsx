import { createFileRoute } from "@tanstack/react-router";

const body = `User-agent: *
Allow: /

Sitemap: https://mutolaxona.uz/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        }),
    },
  },
});
