import { PartnerFaqPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "partner-faq",
  "ms",
  getRouteSeo("ms", "partner-faq"),
);

export default function Page() {
  return <PartnerFaqPageView locale="ms" />;
}
