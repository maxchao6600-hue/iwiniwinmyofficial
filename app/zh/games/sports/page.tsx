import { SportsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games-sports",
  "zh",
  getRouteSeo("zh", "games-sports"),
);

export default function Page() {
  return <SportsPageView locale="zh" />;
}
