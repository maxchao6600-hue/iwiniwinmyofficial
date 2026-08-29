import { AffiliateGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "affiliate-guide",
  "zh",
  getRouteSeo("zh", "affiliate-guide"),
);

export default function Page() {
  return <AffiliateGuidePageView locale="zh" />;
}
