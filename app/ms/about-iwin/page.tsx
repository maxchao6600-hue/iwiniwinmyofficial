import { AboutPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "about-iwin",
  "ms",
  getRouteSeo("ms", "about-iwin"),
);

export default function Page() {
  return <AboutPageView locale="ms" />;
}
