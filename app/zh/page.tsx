import { HomePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "home",
  "zh",
  getRouteSeo("zh", "home"),
);

export default function Page() {
  return <HomePageView locale="zh" />;
}
