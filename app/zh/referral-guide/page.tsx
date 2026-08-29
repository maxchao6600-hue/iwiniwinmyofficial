import { ReferralGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "referral-guide",
  "zh",
  getRouteSeo("zh", "referral-guide"),
);

export default function Page() {
  return <ReferralGuidePageView locale="zh" />;
}
