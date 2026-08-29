import { FaqsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "faqs",
  "ms",
  getRouteSeo("ms", "faqs"),
);

export default function Page() {
  return <FaqsPageView locale="ms" />;
}
