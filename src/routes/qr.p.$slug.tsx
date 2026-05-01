import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { buildHeadMeta } from "@/i18n/seo";
import { findKeyword } from "@/i18n/seoKeywords";

export const Route = createFileRoute("/qr/p/$slug")({
  loader: ({ params }) => {
    const kw = findKeyword("qr", params.slug);
    if (!kw) throw notFound();
    return { kw };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return buildHeadMeta("qr", `/qr/p/${loaderData.kw.slug}`, {
      title: loaderData.kw.title,
      description: loaderData.kw.description,
    });
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">Sahifa tabılmadı</div>
  ),
  component: () => {
    const { kw } = Route.useLoaderData();
    return <SeoLanding locale="qr" keyword={kw} />;
  },
});
