import type { Locale } from "@/lib/i18n/config";

export type CommonContent = {
  home: string;
  learnMore: string;
  exploreGuides: string;
  visitPlatform: string;
  externalCtaNote: string;
  breadcrumbHome: string;
  relatedLinks: string;
  lastUpdated: string;
};

const common: Record<Locale, CommonContent> = {
  en: {
    home: "Home",
    learnMore: "Learn more",
    exploreGuides: "Explore guides",
    visitPlatform: "Visit external platform",
    externalCtaNote: "External link notice: this action may take you to a third-party platform. Its terms, eligibility checks and privacy practices apply.",
    breadcrumbHome: "Home",
    relatedLinks: "Related information",
    lastUpdated: "Information is reviewed periodically; confirm current details on the destination platform before acting.",
  },
  ms: {
    home: "Utama",
    learnMore: "Ketahui lebih lanjut",
    exploreGuides: "Terokai panduan",
    visitPlatform: "Lawati platform luar",
    externalCtaNote: "Notis pautan luar: tindakan ini mungkin membawa anda ke platform pihak ketiga. Terma, semakan kelayakan dan amalan privasinya terpakai.",
    breadcrumbHome: "Utama",
    relatedLinks: "Maklumat berkaitan",
    lastUpdated: "Maklumat disemak secara berkala; sahkan butiran semasa di platform destinasi sebelum bertindak.",
  },
  zh: {
    home: "首页",
    learnMore: "了解更多",
    exploreGuides: "浏览指南",
    visitPlatform: "前往外部平台",
    externalCtaNote: "外部链接提示：此操作可能带您前往第三方平台，其条款、资格审核及隐私惯例将适用。",
    breadcrumbHome: "首页",
    relatedLinks: "相关信息",
    lastUpdated: "信息会定期复核；采取行动前，请在目标平台确认最新详情。",
  },
};

export function getCommon(locale: Locale): CommonContent {
  return common[locale];
}
