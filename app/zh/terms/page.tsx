import { TermsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "terms",
  "zh",
  getRouteSeo("zh", "terms"),
);

export default function Page() {
  return <TermsPageView locale="zh" />;
}
