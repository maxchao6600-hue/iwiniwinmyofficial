import { PromotionsHubPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "promotions",
  "ms",
  getRouteSeo("ms", "promotions"),
);

export default function Page() {
  return <PromotionsHubPageView locale="ms" />;
}
