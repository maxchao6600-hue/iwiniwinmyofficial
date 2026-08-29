import { GuidesHubPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides",
  "zh",
  getRouteSeo("zh", "guides"),
);

export default function Page() {
  return <GuidesHubPageView locale="zh" />;
}
