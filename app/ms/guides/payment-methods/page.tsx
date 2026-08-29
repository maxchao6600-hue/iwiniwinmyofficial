import { PaymentMethodsGuidePageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "guides-payment-methods",
  "ms",
  getRouteSeo("ms", "guides-payment-methods"),
);

export default function Page() {
  return <PaymentMethodsGuidePageView locale="ms" />;
}
