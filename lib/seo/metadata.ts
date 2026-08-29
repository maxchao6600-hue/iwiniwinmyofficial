import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants/site";
import {
  DEFAULT_LOCALE,
  LOCALE_HREFLANG,
  LOCALE_OG,
  LOCALES,
  type Locale,
  type RouteKey,
} from "@/lib/i18n/config";
import { localizePath, routePath, stripLocalePrefix } from "@/lib/i18n/paths";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  alternatePath?: string;
  ogImage?: string;
  noIndex?: boolean;
};

function absoluteUrl(path: string): string {
  const base = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

function buildLanguageAlternates(basePath: string): Record<string, string> {
  const stripped = stripLocalePrefix(basePath);
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[LOCALE_HREFLANG[loc]] = absoluteUrl(localizePath(stripped, loc));
  }
  languages["x-default"] = absoluteUrl(localizePath(stripped, DEFAULT_LOCALE));
  return languages;
}

export function createPageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  alternatePath,
  ogImage = SITE_CONFIG.ogImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const baseForAlternates = alternatePath || path;
  const imageUrl = absoluteUrl(ogImage);

  const fullTitle = title.includes("|")
    ? title
    : `${title} | ${SITE_CONFIG.partnerLabel}`;

  const alternateLocales = LOCALES.filter((loc) => loc !== locale).map(
    (loc) => LOCALE_OG[loc],
  );

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(baseForAlternates),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.siteName,
      type: "website",
      locale: LOCALE_OG[locale],
      alternateLocale: alternateLocales,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function createRouteMetadata(
  key: RouteKey,
  locale: Locale,
  seo: { title: string; description: string; ogImage?: string },
): Metadata {
  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: routePath(key, locale),
    locale,
    alternatePath: routePath(key, DEFAULT_LOCALE),
    ogImage: seo.ogImage,
  });
}

export { absoluteUrl };
