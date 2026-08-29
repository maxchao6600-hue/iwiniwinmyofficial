import { DisclaimerPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "disclaimer",
  "en",
  getRouteSeo("en", "disclaimer"),
);

export default function Page() {
  return <DisclaimerPageView locale="en" />;
}
