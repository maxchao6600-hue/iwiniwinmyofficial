import { getRelatedLinkLabel } from "./related-labels";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import type { PageId, RichBlock, RichPageContent, RichPageCta } from "./types";
import { resolveHeroImage } from "./hero-images";
import { getBlockLabels } from "./labels";
import { getPageExtras, type ExtraPack } from "./extras";
import { getPageDepth, type DepthPack } from "./depth";
import { EXTRA_RELATED } from "./related";

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

function packToBlocks(pack: ExtraPack | DepthPack): RichBlock[] {
  const blocks: RichBlock[] = pack.sections.map((section) => ({
    type: "prose" as const,
    title: section.title,
    paragraphs: section.paragraphs,
  }));
  if (pack.bullets) {
    blocks.push({ type: "bullets", title: pack.bullets.title, items: pack.bullets.items });
  }
  if (pack.steps) {
    blocks.push({ type: "steps", title: pack.steps.title, steps: pack.steps.steps });
  }
  return blocks;
}

function detailsAsProse(details: PageSpec["details"]): RichBlock[] {
  return details.map(([title, description]) => ({
    type: "prose" as const,
    title,
    paragraphs: [description],
  }));
}

function pagePacks(locale: Locale, pageId: PageId): { extras: ExtraPack; depth: DepthPack } {
  return {
    extras: getPageExtras(locale, pageId),
    depth: getPageDepth(locale, pageId),
  };
}

function callout(spec: PageSpec, locale: Locale, pageId: PageId): RichBlock {
  const L = getBlockLabels(locale);
  return {
    type: "callout",
    title: L.importantBoundary,
    body: spec.notice,
    variant: pageId === "responsible-gaming" || pageId === "disclaimer" ? "warning" : "info",
  };
}

function splitPlatform(locale: Locale, spec: PageSpec): RichBlock {
  const L = getBlockLabels(locale);
  const researchLine =
    locale === "ms"
      ? `Kaji ${spec.eyebrow.toLowerCase()} dalam bahasa mudah.`
      : locale === "zh"
        ? `以清晰语言了解${spec.eyebrow}。`
        : `Research ${spec.eyebrow.toLowerCase()} in plain language.`;
  return {
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
        ? "Sahkan peraturan semasa, ketersediaan dan status khusus akaun di platform luar."
        : locale === "zh"
          ? "确认外部平台上的当前规则、可用性与账户专属状态。"
          : "Confirm current rules, availability and account-specific status on the external platform.",
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
  };
}

function gamesHubBlocks(locale: Locale, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  const guideCards: { title: string; description: string; href: RouteKey }[] =
    locale === "ms"
      ? [
          { title: "Cara mendaftar", description: "Sediakan butiran tepat sebelum borang luar.", href: "guides-how-to-register" },
          { title: "Cara log masuk", description: "Sahkan destinasi dan lindungi kelayakan.", href: "guides-how-to-login" },
          { title: "Cara deposit", description: "Ikuti juruwang semasa, bukan tangkapan skrin lama.", href: "guides-how-to-deposit" },
          { title: "Cara pengeluaran", description: "Semak pengesahan dan pusing ganti sebelum permohonan.", href: "guides-how-to-withdraw" },
          { title: "Kaedah bayaran", description: "Bandingkan had, pemilikan dan rekod.", href: "guides-payment-methods" },
          { title: "Mudah alih", description: "Akses pelayar dan sumber pemasangan yang disahkan.", href: "guides-mobile" },
          { title: "Keselamatan akaun", description: "Kata laluan unik, OTP dan semakan URL.", href: "guides-account-security" },
          { title: "Permainan bertanggungjawab", description: "Had peribadi dan jangan kejar kerugian.", href: "responsible-gaming" },
        ]
      : locale === "zh"
        ? [
            { title: "如何注册", description: "打开外部表格前准备准确资料。", href: "guides-how-to-register" },
            { title: "如何登录", description: "核实网址并保护凭据。", href: "guides-how-to-login" },
            { title: "如何存款", description: "遵循实时收银台，而非旧截图。", href: "guides-how-to-deposit" },
            { title: "如何提款", description: "申请前检查验证与流水。", href: "guides-how-to-withdraw" },
            { title: "支付方式", description: "比较限额、所有权与记录。", href: "guides-payment-methods" },
            { title: "移动端", description: "浏览器访问与已核实的安装来源。", href: "guides-mobile" },
            { title: "账户安全", description: "唯一密码、OTP 与网址检查。", href: "guides-account-security" },
            { title: "负责任游戏", description: "个人限额，勿追回损失。", href: "responsible-gaming" },
          ]
        : [
            { title: "How to register", description: "Prepare accurate details before the external form.", href: "guides-how-to-register" },
            { title: "How to log in", description: "Verify the destination and keep credentials private.", href: "guides-how-to-login" },
            { title: "How to deposit", description: "Follow the live cashier, not old screenshots.", href: "guides-how-to-deposit" },
            { title: "How to withdraw", description: "Check verification and turnover before requesting.", href: "guides-how-to-withdraw" },
            { title: "Payment methods", description: "Compare limits, ownership and records.", href: "guides-payment-methods" },
            { title: "Mobile access", description: "Browser access and verified installation sources only.", href: "guides-mobile" },
            { title: "Account security", description: "Unique passwords, OTP privacy and URL checks.", href: "guides-account-security" },
            { title: "Responsible gaming", description: "Personal limits and no chasing losses.", href: "responsible-gaming" },
          ];

  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    {
      type: "prose",
      title: L.gamesProvidersTitle,
      paragraphs: [`${d[7][1]} ${L.gamesProvidersP1}`, L.gamesProvidersP2],
    },
    {
      type: "steps",
      title: L.gamesBeforeTitle,
      steps:
        locale === "ms"
          ? [
              d[4][1],
              `${d[5][0]}: ${d[5][1]}`,
              "Baca terma promosi jika bonus terpakai — pusing ganti, pengecualian dan tamat tempoh boleh menjejaskan pengeluaran.",
              "Sahkan syarat bayaran dan akaun sebelum deposit atau pengeluaran.",
              "Tetapkan had perbelanjaan peribadi dan titik berhenti; jangan tingkatkan pertaruhan untuk pulihkan kerugian.",
            ]
          : locale === "zh"
            ? [
                d[4][1],
                `${d[5][0]}：${d[5][1]}`,
                "若适用奖金，请阅读优惠条款——流水、排除项与到期日可能影响提款。",
                "存款或提款前确认支付与账户条件。",
                "设定个人消费上限与停止点；勿为追回损失而提高赌注。",
              ]
            : [
                d[4][1],
                `${d[5][0]}: ${d[5][1]}`,
                "Read promotion terms if a bonus applies — turnover, exclusions and expiry can affect withdrawals.",
                "Confirm payment and account conditions that must be met before deposits or withdrawals.",
                "Set a personal spending limit and stop point; do not increase stakes to recover prior losses.",
              ],
    },
    {
      type: "cards",
      title: locale === "ms" ? "Panduan IWIN yang berguna" : locale === "zh" ? "实用 IWIN 指南" : "Useful IWIN guides",
      intro:
        locale === "ms"
          ? "Gunakan panduan operasi selepas anda faham format permainan."
          : locale === "zh"
            ? "在理解游戏形式后，再使用这些操作指南。"
            : "Use these operational guides after you understand the game formats.",
      items: guideCards,
    },
    callout(spec, locale, "games"),
  ];
}

function guidesHubBlocks(locale: Locale, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
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
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    {
      type: "grid",
      title: L.guidesCategoriesTitle,
      intro: L.guidesCategoriesIntro,
      items: categoryItems,
    },
    {
      type: "table",
      title: locale === "ms" ? "Panduan mengikut tugas" : locale === "zh" ? "按任务查找指南" : "Guides by task",
      rows: d.map(([label, value]) => ({ label, value })),
    },
    splitPlatform(locale, spec),
    callout(spec, locale, "guides"),
  ];
}

function promotionsHubBlocks(locale: Locale, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    ...detailsAsProse(d),
    {
      type: "callout",
      title: L.promoResponsibleTitle,
      body: L.promoResponsibleBody,
      variant: "warning",
    },
    callout(spec, locale, "promotions"),
  ];
}

function providersPageBlocks(locale: Locale, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  const d = spec.details;
  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    ...detailsAsProse(d),
    callout(spec, locale, "game-providers"),
  ];
}

function categoryGameBlocks(locale: Locale, pageId: PageId, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    ...detailsAsProse(spec.details),
    splitPlatform(locale, spec),
    callout(spec, locale, pageId),
  ];
}

function howToBlocks(locale: Locale, pageId: PageId, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  const d = spec.details;
  const L = getBlockLabels(locale);
  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    {
      type: "steps",
      title: L.reviewSequence,
      steps: d.map(([title, description]) => `${title} — ${description}`),
    },
    splitPlatform(locale, spec),
    callout(spec, locale, pageId),
  ];
}

function editorialBlocks(locale: Locale, pageId: PageId, spec: PageSpec, extras: ExtraPack, depth: DepthPack): RichBlock[] {
  return [
    ...packToBlocks(extras),
    ...packToBlocks(depth),
    ...detailsAsProse(spec.details),
    splitPlatform(locale, spec),
    callout(spec, locale, pageId),
  ];
}

export function buildBlocks(locale: Locale, pageId: PageId, spec: PageSpec): RichBlock[] {
  const { extras, depth } = pagePacks(locale, pageId);
  switch (pageId) {
    case "games":
      return gamesHubBlocks(locale, spec, extras, depth);
    case "guides":
      return guidesHubBlocks(locale, spec, extras, depth);
    case "promotions":
      return promotionsHubBlocks(locale, spec, extras, depth);
    case "game-providers":
      return providersPageBlocks(locale, spec, extras, depth);
    case "games-slots":
    case "games-live-casino":
    case "games-sports":
    case "games-4d":
      return categoryGameBlocks(locale, pageId, spec, extras, depth);
    case "guides-how-to-register":
    case "guides-how-to-login":
    case "guides-how-to-deposit":
    case "guides-how-to-withdraw":
    case "guides-payment-methods":
    case "guides-mobile":
    case "guides-account-security":
      return howToBlocks(locale, pageId, spec, extras, depth);
    default:
      return editorialBlocks(locale, pageId, spec, extras, depth);
  }
}

function buildFaqs(locale: Locale, pageId: PageId, spec: PageSpec): RichPageContent["faqs"] {
  const { extras, depth } = pagePacks(locale, pageId);
  const merged = [...extras.faqs, ...(depth.faqs ?? [])];
  if (merged.length) return merged;
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

function uniqueRelated(locale: Locale, pageId: PageId, spec: PageSpec): RichPageContent["related"] {
  const seen = new Set<string>();
  const keys = [...spec.related, ...EXTRA_RELATED[pageId]];
  const items: RichPageContent["related"] = [];
  for (const key of keys) {
    if (seen.has(key) || key === pageId) continue;
    seen.add(key);
    items.push({
      key: key as RouteKey,
      label: getRelatedLinkLabel(locale, key as RouteKey),
    });
  }
  return items;
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
    faqs: buildFaqs(locale, pageId, spec),
    related: uniqueRelated(locale, pageId, spec),
    cta: buildCta(spec),
  };
}
