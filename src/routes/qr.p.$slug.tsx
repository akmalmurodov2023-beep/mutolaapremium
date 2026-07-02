import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { buildHeadMeta, landingAlternatePaths } from "@/i18n/seo";
import { findKeyword } from "@/i18n/seoKeywords";

export const Route = createFileRoute("/qr/p/$slug")({
  loader: ({ params }) => {
    const kw = findKeyword("qr", params.slug);
    if (!kw) throw notFound();
    return { kw };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return buildHeadMeta(
      "qr",
      `/qr/p/${loaderData.kw.slug}`,
      { title: loaderData.kw.title, description: loaderData.kw.description },
      landingAlternatePaths(loaderData.kw.slug),
    );
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">Sahifa tabılmadı</div>
  ),
  component: () => {
    const { kw } = Route.useLoaderData();
    return <SeoLanding locale="qr" keyword={kw} />;
  },
});
