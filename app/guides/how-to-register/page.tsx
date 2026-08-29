import { RegisterGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-how-to-register",
  "en",
  getRouteSeo("en", "guides-how-to-register"),
);

export default function Page() {
  return <RegisterGuidePageView locale="en" />;
}
