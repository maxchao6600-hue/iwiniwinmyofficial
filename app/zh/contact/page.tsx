import { ContactPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "contact",
  "zh",
  getRouteSeo("zh", "contact"),
);

export default function Page() {
  return <ContactPageView locale="zh" />;
}
