import { AboutPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "about-iwin",
  "en",
  getRouteSeo("en", "about-iwin"),
);

export default function Page() {
  return <AboutPageView locale="en" />;
}
