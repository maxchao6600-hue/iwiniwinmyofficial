import { AgentPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "agent",
  "zh",
  getRouteSeo("zh", "agent"),
);

export default function Page() {
  return <AgentPageView locale="zh" />;
}
