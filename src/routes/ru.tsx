import { createFileRoute } from "@tanstack/react-router";
import { LocalizedHome } from "@/components/LocalizedHome";
import { buildHeadMeta } from "@/i18n/seo";

export const Route = createFileRoute("/ru")({
  head: () => buildHeadMeta("ru", "/ru"),
  component: () => <LocalizedHome locale="ru" />,
});
