import { BonusGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "promotions-bonus-guide",
  "zh",
  getRouteSeo("zh", "promotions-bonus-guide"),
);

export default function Page() {
  return <BonusGuidePageView locale="zh" />;
}
