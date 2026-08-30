import { getRouteSeo } from "../seo";
import type { Locale } from "@/lib/i18n/config";
import type { PageId, RichBlock, RichPageContent, RichPageCta } from "./types";
import { resolveHeroImage } from "./hero-images";
import { getBlockLabels } from "./labels";

export type Detail = readonly [title: string, description: string];

export type PageSpec = {
  eyebrow: string;
  h1: string;
  intro: readonly [string, string];
  details: readonly [Detail, Detail, Detail, Detail, Detail, Detail, Detail, Detail];
  related: readonly [string, string, string];
  cta: {
    primaryLabel: string;
    secondaryLabel: string;
    secondaryRoute: string;
    footerTitle: string;
    footerDescription: string;
    external?: boolean;
    externalUrl?: "register" | "agent" | "support";
  };
  notice: string;
};

function gamesHubBlocks(locale: Locale, spec: PageSpec): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  return [
    {
      type: "prose",
      title: L.gamesFormatsTitle,
      paragraphs: [L.gamesFormatsIntro1, L.gamesFormatsIntro2],
    },
    {
      type: "grid",
      title: L.gamesGlanceTitle,
      intro: L.gamesGlanceIntro,
      items: d.slice(0, 4).map(([title, description]) => ({ title, description })),
    },
    {
      type: "prose",
      title: L.gamesProvidersTitle,
      paragraphs: [`${d[7][1]} ${L.gamesProvidersP1}`, L.gamesProvidersP2],
    },
    {
      type: "bullets",
      title: L.gamesChoosingTitle,
      items: d.slice(4, 7).map(([title, description]) => `${title}: ${description}`),
    },
    {
      type: "steps",
      title: L.gamesBeforeTitle,
      steps: [
        d[4][1],
        `${d[5][0]}: ${d[5][1]}`,
        "Read promotion terms if a bonus applies — turnover, exclusions and expiry can affect withdrawals.",
        "Confirm payment and account conditions that must be met before deposits or withdrawals.",
        "Set a personal spending limit and stop point; do not increase stakes to recover prior losses.",
      ],
    },
    {
      type: "callout",
      title: L.importantBoundary,
      body: spec.notice,
      variant: "info",
    },
  ];
}

function guidesHubBlocks(locale: Locale, spec: PageSpec): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  const categoryItems =
    locale === "ms"
      ? [
          { title: "Akaun", description: "Pendaftaran, log masuk dan tabiat keselamatan sebelum dan selepas akses." },
          { title: "Bayaran", description: "Deposit, pengeluaran dan semakan kaedah bayaran di platform luar." },
          { title: "Permainan", description: "Gambaran kategori yang menerangkan perbezaan format tanpa menjanjikan keputusan." },
          { title: "Promosi", description: "Cara membaca kelayakan, pusing ganti dan sekatan pengeluaran." },
          { title: "Mudah Alih", description: "Akses pelayar, reka bentuk responsif dan tabiat mudah alih lebih selamat." },
          { title: "Keselamatan", description: "Kata laluan, kesedaran phishing dan melindungi maklumat bayaran." },
          { title: "Rakan", description: "Maklumat ejen, rujukan dan afiliasi dengan jangkaan realistik." },
        ]
      : locale === "zh"
        ? [
            { title: "账户", description: "注册、登录及访问前后的安全习惯。" },
            { title: "支付", description: "外部平台的存款、提款与支付方式核对。" },
            { title: "游戏", description: "各类别概览，说明形式差异，不承诺结果。" },
            { title: "优惠", description: "如何阅读资格、流水与提款限制。" },
            { title: "移动端", description: "浏览器访问、响应式界面与更安全的移动习惯。" },
            { title: "安全", description: "密码、防钓鱼与支付信息保护。" },
            { title: "合作伙伴", description: "代理、推荐与联盟信息，预期务实。" },
          ]
        : [
            { title: "Account", description: "Registration, login and security habits before and after access." },
            { title: "Payments", description: "Deposits, withdrawals and payment-method checks on the external platform." },
            { title: "Games", description: "Category overviews that explain format differences without promising outcomes." },
            { title: "Promotions", description: "How to read eligibility, turnover and withdrawal restrictions." },
            { title: "Mobile", description: "Browser access, responsive layout and safer mobile habits." },
            { title: "Security", description: "Passwords, phishing awareness and protecting payment information." },
            { title: "Partner", description: "Agent, referral and affiliate information with realistic expectations." },
          ];

  return [
    {
      type: "prose",
      title: L.guidesHubTitle,
      paragraphs: [spec.intro[0], spec.intro[1]],
    },
    {
      type: "grid",
      title: L.guidesCategoriesTitle,
      intro: L.guidesCategoriesIntro,
      items: categoryItems,
    },
    {
      type: "bullets",
      title: L.guidesUsefulTitle,
      items: d.slice(0, 4).map(([title, description]) => `${title}: ${description}`),
    },
    {
      type: "split",
      title: L.infoSiteTitle,
      leftTitle: L.guidesPrepareTitle,
      left: d.slice(4, 7).map(([title, description]) => `${title}: ${description}`),
      rightTitle: L.guidesCompleteTitle,
      right: [d[7][1], spec.notice],
    },
    {
      type: "table",
      title: L.quickReference,
      rows: d.map(([label, value]) => ({ label, value })),
    },
    {
      type: "callout",
      title: L.importantBoundary,
      body: spec.notice,
      variant: "info",
    },
  ];
}

function promotionsHubBlocks(locale: Locale, spec: PageSpec): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  const commonConditions =
    locale === "ms"
      ? [
          "Keperluan pusing ganti sebelum nilai promosi boleh dikeluarkan.",
          "Tarikh luput selepas tawaran tidak digunakan atau syarat tidak lengkap.",
          "Had kuota apabila tawaran hanya untuk bilangan pengguna tertentu.",
          "Semakan pengesahan sebelum bonus dikredit atau pengeluaran diluluskan.",
          "Konflik antara promosi serentak melainkan platform benarkan gabungan.",
        ]
      : locale === "zh"
        ? [
            "提款前需满足的流水要求。",
            "未使用或未完成条件的优惠到期日。",
            "名额有限的广告优惠配额。",
            "奖金入账或批准提款前的验证检查。",
            "除非平台明确允许，否则不可叠加的优惠冲突。",
          ]
        : [
            "Turnover requirements before promotional value can be withdrawn.",
            "Expiry dates after which unused or uncompleted offers lapse.",
            "Quota limits when an advertised offer is available only to a set number of users.",
            "Verification checks before a bonus is credited or a withdrawal is approved.",
            "Conflicts between simultaneous promotions unless the platform explicitly allows stacking.",
          ];

  const readSteps = d.slice(4, 8).map(([title, description]) => `${title}: ${description}`);

  return [
    {
      type: "prose",
      title: L.promoCategoriesTitle,
      paragraphs: [L.promoCategoriesP1, L.promoCategoriesP2],
    },
    {
      type: "grid",
      title: L.promoEligibilityTitle,
      items: d.slice(0, 4).map(([title, description]) => ({ title, description })),
    },
    {
      type: "steps",
      title: L.promoReadTermsTitle,
      steps: readSteps,
    },
    {
      type: "bullets",
      title: L.promoCommonTitle,
      items: commonConditions,
    },
    {
      type: "callout",
      title: L.promoResponsibleTitle,
      body: L.promoResponsibleBody,
      variant: "warning",
    },
    {
      type: "callout",
      title: L.importantBoundary,
      body: spec.notice,
      variant: "info",
    },
  ];
}

function providersPageBlocks(locale: Locale, spec: PageSpec): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  return [
    {
      type: "prose",
      title: L.providersWhatTitle,
      paragraphs: [L.providersWhatP1, L.providersWhatP2],
    },
    {
      type: "grid",
      title: L.providersHelpTitle,
      items: d.slice(0, 4).map(([title, description]) => ({ title, description })),
    },
    {
      type: "bullets",
      title: L.providersBeforeTitle,
      items: d.slice(4).map(([title, description]) => `${title}: ${description}`),
    },
    {
      type: "callout",
      title: L.importantBoundary,
      body: spec.notice,
      variant: "info",
    },
  ];
}

function defaultBlocks(locale: Locale, pageId: PageId, spec: PageSpec): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  const researchLine =
    locale === "ms"
      ? `Kaji ${spec.eyebrow.toLowerCase()} dalam bahasa mudah.`
      : locale === "zh"
        ? `以清晰语言了解${spec.eyebrow}。`
        : `Research ${spec.eyebrow.toLowerCase()} in plain language.`;

  return [
    {
      type: "prose",
      title: `${L.understandingPrefix} ${spec.h1.toLowerCase()}`,
      paragraphs: [`${d[0][1]} ${d[1][1]}`, `${d[2][1]} ${d[3][1]}`],
    },
    {
      type: "bullets",
      title: L.checksFirst,
      items: d.slice(0, 4).map(([title, description]) => `${title}: ${description}`),
    },
    {
      type: "steps",
      title: L.reviewSequence,
      steps: d.slice(4).map(([title, description]) => `${title} — ${description}`),
    },
    {
      type: "grid",
      title: L.detailsAttention,
      items: d.slice(4).map(([title, description]) => ({ title, description })),
    },
    {
      type: "table",
      title: L.quickReference,
      rows: d.map(([label, value]) => ({ label, value })),
    },
    {
      type: "split",
      title: L.infoSiteTitle,
      leftTitle: L.useSiteTo,
      left: [
        researchLine,
        locale === "ms"
          ? "Bandingkan panduan berkaitan sebelum tindakan luar."
          : locale === "zh"
            ? "采取外部操作前先比较相关指南。"
            : "Compare related guidance before following an external action.",
        locale === "ms"
          ? "Kenal pasti soalan dan rekod untuk disediakan awal."
          : locale === "zh"
            ? "提前整理问题与记录。"
            : "Identify questions and records to prepare in advance.",
      ],
      rightTitle: L.usePlatformTo,
      right: [
        locale === "ms"
          ? `Sahkan peraturan semasa, ketersediaan dan status khusus akaun untuk ${pageId}.`
          : locale === "zh"
            ? `确认${pageId}的当前规则、可用性与账户专属状态。`
            : `Confirm current rules, availability and account-specific status for ${pageId}.`,
        locale === "ms"
          ? "Lengkapkan tindakan disahkan dan semak terma langsung."
          : locale === "zh"
            ? "完成需认证的操作并查看实时条款。"
            : "Complete authenticated actions and review live terms.",
        locale === "ms"
          ? "Selesaikan perkara yang memerlukan rekod akaun atau transaksi peribadi."
          : locale === "zh"
            ? "处理需要私人账户或交易记录的事项。"
            : "Resolve matters that require private account or transaction records.",
      ],
    },
    {
      type: "callout",
      title: L.importantBoundary,
      body: spec.notice,
      variant: pageId === "responsible-gaming" || pageId === "disclaimer" ? "warning" : "info",
    },
  ];
}

export function buildBlocks(locale: Locale, pageId: PageId, spec: PageSpec): RichBlock[] {
  switch (pageId) {
    case "games":
      return gamesHubBlocks(locale, spec);
    case "guides":
      return guidesHubBlocks(locale, spec);
    case "promotions":
      return promotionsHubBlocks(locale, spec);
    case "game-providers":
      return providersPageBlocks(locale, spec);
    default:
      return defaultBlocks(locale, pageId, spec);
  }
}

function buildFaqs(locale: Locale, spec: PageSpec): RichPageContent["faqs"] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  return [
    { question: L.faqFirst(d[0][0].toLowerCase()), answer: d[0][1] },
    { question: L.faqWhy(d[2][0].toLowerCase()), answer: d[2][1] },
    { question: L.faqKnow(d[5][0].toLowerCase()), answer: d[5][1] },
    {
      question: L.faqWhere(d[7][0].toLowerCase()),
      answer: `${d[7][1]} ${L.faqConfirmSuffix}`,
    },
  ];
}

function buildCta(spec: PageSpec): RichPageCta {
  return {
    primaryLabel: spec.cta.primaryLabel,
    primaryExternal: spec.cta.external,
    primaryExternalUrl: spec.cta.externalUrl,
    primaryRoute: spec.cta.external ? undefined : (spec.related[0] as RichPageCta["primaryRoute"]),
    secondaryLabel: spec.cta.secondaryLabel,
    secondaryRoute: spec.cta.secondaryRoute as RichPageCta["secondaryRoute"],
    footerTitle: spec.cta.footerTitle,
    footerDescription: spec.cta.footerDescription,
    showExternalNotice: spec.cta.external ? true : undefined,
  };
}

export function buildRichPageContent(
  locale: Locale,
  pageId: PageId,
  spec: PageSpec,
): RichPageContent {
  return {
    eyebrow: spec.eyebrow,
    h1: spec.h1,
    intro: [...spec.intro],
    heroImage: resolveHeroImage(pageId),
    blocks: buildBlocks(locale, pageId, spec),
    faqs: buildFaqs(locale, spec),
    related: spec.related.map((key) => ({
      key: key as RichPageContent["related"][number]["key"],
      label: getRouteSeo(locale, key as RichPageContent["related"][number]["key"]).title,
    })),
    cta: buildCta(spec),
  };
}
