import { Lottery4dPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games-4d",
  "ms",
  getRouteSeo("ms", "games-4d"),
);

export default function Page() {
  return <Lottery4dPageView locale="ms" />;
}
