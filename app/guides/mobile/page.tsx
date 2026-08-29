import { MobileGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-mobile",
  "en",
  getRouteSeo("en", "guides-mobile"),
);

export default function Page() {
  return <MobileGuidePageView locale="en" />;
}
