import { WelcomePromoPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "promotions-welcome",
  "zh",
  getRouteSeo("zh", "promotions-welcome"),
);

export default function Page() {
  return <WelcomePromoPageView locale="zh" />;
}
