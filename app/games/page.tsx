import { GamesHubPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games",
  "en",
  getRouteSeo("en", "games"),
);

export default function Page() {
  return <GamesHubPageView locale="en" />;
}
