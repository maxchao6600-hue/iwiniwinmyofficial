import type { Locale } from "@/lib/i18n/config";

export type CommonContent = {
  home: string;
  learnMore: string;
  exploreGuides: string;
  visitPlatform: string;
  skipToContent: string;
  partnerBoundaries: string;
  externalCtaNote: string;
  breadcrumbHome: string;
  relatedLinks: string;
  lastUpdated: string;
  faqHeading: string;
};

const common: Record<Locale, CommonContent> = {
  en: {
    home: "Home",
    learnMore: "Learn more",
    exploreGuides: "Explore guides",
    visitPlatform: "Visit external platform",
    skipToContent: "Skip to content",
    partnerBoundaries: "Partner boundaries explained",
    externalCtaNote:
      "External link notice: this action may open an external platform. Review the current platform terms and requirements before proceeding.",
    breadcrumbHome: "Home",
    relatedLinks: "Related information",
    lastUpdated: "Information is reviewed periodically; confirm current details on the destination platform before acting.",
    faqHeading: "FAQ",
  },
  ms: {
    home: "Utama",
    learnMore: "Ketahui lebih lanjut",
    exploreGuides: "Terokai panduan",
    visitPlatform: "Lawati platform luar",
    skipToContent: "Langkau ke kandungan",
    partnerBoundaries: "Sempadan rakan dijelaskan",
    externalCtaNote:
      "Notis pautan luar: tindakan ini mungkin membuka platform luar. Semak terma dan keperluan semasa platform sebelum meneruskan.",
    breadcrumbHome: "Utama",
    relatedLinks: "Maklumat berkaitan",
    lastUpdated: "Maklumat disemak secara berkala; sahkan butiran semasa di platform destinasi sebelum bertindak.",
    faqHeading: "Soalan lazim",
  },
  zh: {
    home: "首页",
    learnMore: "了解更多",
    exploreGuides: "浏览指南",
    visitPlatform: "前往外部平台",
    skipToContent: "跳至主要内容",
    partnerBoundaries: "合作伙伴边界说明",
    externalCtaNote:
      "外部链接提示：此操作可能打开外部平台。继续前请查看该平台当前条款与要求。",
    breadcrumbHome: "首页",
    relatedLinks: "相关信息",
    lastUpdated: "信息会定期复核；采取行动前，请在目标平台确认最新详情。",
    faqHeading: "常见问题",
  },
};

export function getCommon(locale: Locale): CommonContent {
  return common[locale];
}
