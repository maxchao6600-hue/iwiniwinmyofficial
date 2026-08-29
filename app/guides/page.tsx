import { GuidesHubPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides",
  "en",
  getRouteSeo("en", "guides"),
);

export default function Page() {
  return <GuidesHubPageView locale="en" />;
}
