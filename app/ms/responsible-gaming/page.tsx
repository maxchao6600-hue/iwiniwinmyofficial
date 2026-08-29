import { ResponsibleGamingPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "responsible-gaming",
  "ms",
  getRouteSeo("ms", "responsible-gaming"),
);

export default function Page() {
  return <ResponsibleGamingPageView locale="ms" />;
}
