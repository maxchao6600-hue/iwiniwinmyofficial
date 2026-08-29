import { AboutPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "about-iwin",
  "zh",
  getRouteSeo("zh", "about-iwin"),
);

export default function Page() {
  return <AboutPageView locale="zh" />;
}
