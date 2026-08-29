import { ProvidersPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "game-providers",
  "ms",
  getRouteSeo("ms", "game-providers"),
);

export default function Page() {
  return <ProvidersPageView locale="ms" />;
}
