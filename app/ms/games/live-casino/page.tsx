import { LiveCasinoPageView } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "games-live-casino",
  "ms",
  getRouteSeo("ms", "games-live-casino"),
);

export default function Page() {
  return <LiveCasinoPageView locale="ms" />;
}
