import { FreeCreditPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "promotions-free-credit",
  "en",
  getRouteSeo("en", "promotions-free-credit"),
);

export default function Page() {
  return <FreeCreditPageView locale="en" />;
}
