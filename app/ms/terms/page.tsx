import { TermsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "terms",
  "ms",
  getRouteSeo("ms", "terms"),
);

export default function Page() {
  return <TermsPageView locale="ms" />;
}
