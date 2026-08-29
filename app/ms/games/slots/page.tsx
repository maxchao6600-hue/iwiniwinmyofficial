import { SlotsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games-slots",
  "ms",
  getRouteSeo("ms", "games-slots"),
);

export default function Page() {
  return <SlotsPageView locale="ms" />;
}
