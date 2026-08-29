import { SportsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games-sports",
  "en",
  getRouteSeo("en", "games-sports"),
);

export default function Page() {
  return <SportsPageView locale="en" />;
}
