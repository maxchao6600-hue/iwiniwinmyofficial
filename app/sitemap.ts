import type { MetadataRoute } from "next";
import { LOCALES, ROUTE_KEYS, type Locale } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const key of ROUTE_KEYS) {
      const path = routePath(key, locale as Locale);
      entries.push({
        url: `${base}${path}`,
        lastModified: new Date(),
        changeFrequency: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? (locale === "en" ? 1 : 0.9) : 0.7,
      });
    }
  }

  return entries;
}
