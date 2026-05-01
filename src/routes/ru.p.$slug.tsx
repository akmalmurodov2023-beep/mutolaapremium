import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { buildHeadMeta } from "@/i18n/seo";
import { findKeyword } from "@/i18n/seoKeywords";

export const Route = createFileRoute("/ru/p/$slug")({
  loader: ({ params }) => {
    const kw = findKeyword("ru", params.slug);
    if (!kw) throw notFound();
    return { kw };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return buildHeadMeta("ru", `/ru/p/${loaderData.kw.slug}`, {
      title: loaderData.kw.title,
      description: loaderData.kw.description,
    });
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">Страница не найдена</div>
  ),
  component: () => {
    const { kw } = Route.useLoaderData();
    return <SeoLanding locale="ru" keyword={kw} />;
  },
});
