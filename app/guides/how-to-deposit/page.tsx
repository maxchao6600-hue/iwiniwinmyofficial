import { DepositGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-how-to-deposit",
  "en",
  getRouteSeo("en", "guides-how-to-deposit"),
);

export default function Page() {
  return <DepositGuidePageView locale="en" />;
}
