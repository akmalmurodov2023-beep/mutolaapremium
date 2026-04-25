import { createFileRoute } from "@tanstack/react-router";
import { LocalizedHome } from "@/components/LocalizedHome";
import { buildHeadMeta } from "@/i18n/seo";

export const Route = createFileRoute("/qr")({
  head: () => buildHeadMeta("qr", "/qr"),
  component: () => <LocalizedHome locale="qr" />,
});
