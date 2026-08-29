import type { Locale } from "@/lib/i18n/config";
import { SITE_CONFIG } from "@/lib/constants/site";
import { absoluteUrl } from "@/lib/seo/metadata";

const ORG_DESCRIPTION: Record<Locale, string> = {
  en: "IWIN Malaysia Official Partner website providing platform information, player guides, promotions overview, and partner resources.",
  ms: "Laman web IWIN Malaysia Official Partner yang menyediakan maklumat platform, panduan pemain, gambaran promosi, dan sumber rakan kongsi.",
  zh: "IWIN Malaysia 官方合作伙伴网站，提供平台信息、玩家指南、优惠概览与合作资源。",
};

const WEBSITE_DESCRIPTION: Record<Locale, string> = {
  en: "IWIN Malaysia partner information site for games, guides, promotions, agent resources, and responsible gaming guidance.",
  ms: "Laman maklumat rakan IWIN Malaysia untuk permainan, panduan, promosi, sumber ejen, dan permainan bertanggungjawab.",
  zh: "IWIN Malaysia 合作伙伴信息站，涵盖游戏、指南、优惠、代理资源与负责任游戏指引。",
};

export function organizationJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    logo: absoluteUrl(SITE_CONFIG.brandLogo),
    description: ORG_DESCRIPTION[locale],
  };
}

export function websiteJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    description: WEBSITE_DESCRIPTION[locale],
    inLanguage: ["en-MY", "ms-MY", "zh-CN"],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.siteUrl,
    },
  };
}
