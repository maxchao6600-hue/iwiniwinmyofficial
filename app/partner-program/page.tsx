import { PartnerProgramPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "partner-program",
  "en",
  getRouteSeo("en", "partner-program"),
);

export default function Page() {
  return <PartnerProgramPageView locale="en" />;
}
