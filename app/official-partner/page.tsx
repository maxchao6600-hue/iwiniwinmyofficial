import { OfficialPartnerPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "official-partner",
  "en",
  getRouteSeo("en", "official-partner"),
);

export default function Page() {
  return <OfficialPartnerPageView locale="en" />;
}
