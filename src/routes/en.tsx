import { createFileRoute } from "@tanstack/react-router";
import { LocalizedHome } from "@/components/LocalizedHome";
import { buildHeadMeta } from "@/i18n/seo";

export const Route = createFileRoute("/en")({
  head: () => buildHeadMeta("en", "/en"),
  component: () => <LocalizedHome locale="en" />,
});
