import { PrivacyPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "privacy-policy",
  "ms",
  getRouteSeo("ms", "privacy-policy"),
);

export default function Page() {
  return <PrivacyPageView locale="ms" />;
}
