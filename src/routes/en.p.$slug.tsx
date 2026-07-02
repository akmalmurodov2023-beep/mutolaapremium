import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { buildHeadMeta, landingAlternatePaths } from "@/i18n/seo";
import { findKeyword } from "@/i18n/seoKeywords";

export const Route = createFileRoute("/en/p/$slug")({
  loader: ({ params }) => {
    const kw = findKeyword("en", params.slug);
    if (!kw) throw notFound();
    return { kw };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return buildHeadMeta(
      "en",
      `/en/p/${loaderData.kw.slug}`,
      { title: loaderData.kw.title, description: loaderData.kw.description },
      landingAlternatePaths(loaderData.kw.slug),
    );
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">Page not found</div>
  ),
  component: () => {
    const { kw } = Route.useLoaderData();
    return <SeoLanding locale="en" keyword={kw} />;
  },
});
