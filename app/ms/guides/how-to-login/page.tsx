import { LoginGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-how-to-login",
  "ms",
  getRouteSeo("ms", "guides-how-to-login"),
);

export default function Page() {
  return <LoginGuidePageView locale="ms" />;
}
