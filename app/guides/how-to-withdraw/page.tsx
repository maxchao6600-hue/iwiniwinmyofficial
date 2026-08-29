import { WithdrawGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-how-to-withdraw",
  "en",
  getRouteSeo("en", "guides-how-to-withdraw"),
);

export default function Page() {
  return <WithdrawGuidePageView locale="en" />;
}
