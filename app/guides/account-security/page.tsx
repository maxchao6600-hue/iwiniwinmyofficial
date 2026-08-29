import { AccountSecurityGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-account-security",
  "en",
  getRouteSeo("en", "guides-account-security"),
);

export default function Page() {
  return <AccountSecurityGuidePageView locale="en" />;
}
