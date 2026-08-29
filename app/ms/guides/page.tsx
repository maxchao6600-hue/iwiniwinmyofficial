import { GuidesHubPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides",
  "ms",
  getRouteSeo("ms", "guides"),
);

export default function Page() {
  return <GuidesHubPageView locale="ms" />;
}
