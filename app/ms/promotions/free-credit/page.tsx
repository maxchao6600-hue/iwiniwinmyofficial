import { FreeCreditPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "promotions-free-credit",
  "ms",
  getRouteSeo("ms", "promotions-free-credit"),
);

export default function Page() {
  return <FreeCreditPageView locale="ms" />;
}
