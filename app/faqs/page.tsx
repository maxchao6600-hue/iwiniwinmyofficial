import { FaqsPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "faqs",
  "en",
  getRouteSeo("en", "faqs"),
);

export default function Page() {
  return <FaqsPageView locale="en" />;
}
