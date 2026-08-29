import { WithdrawGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-how-to-withdraw",
  "zh",
  getRouteSeo("zh", "guides-how-to-withdraw"),
);

export default function Page() {
  return <WithdrawGuidePageView locale="zh" />;
}
