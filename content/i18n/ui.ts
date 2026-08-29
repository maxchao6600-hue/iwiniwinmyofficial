import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";

type Link = { label: string; href: string };
type FooterGroup = { title: string; links: Link[] };

export type UiContent = {
  primaryNav: string;
  openMenu: string;
  closeMenu: string;
  login: string;
  register: string;
  contactSupport: string;
  partnerDisclosure: string;
  ageNotice: string;
  responsibleNotice: string;
  rightsReserved: string;
  footer: { language: string };
  navLinks: Link[];
  footerGroups: Record<"explore" | "play" | "support" | "legal", FooterGroup>;
};

const copy = {
  en: {
    primaryNav: "Primary navigation", openMenu: "Open menu", closeMenu: "Close menu",
    login: "Log in", register: "Register", contactSupport: "Contact support",
    partnerDisclosure: "IWIN Malaysia is an official partner information website. We explain platform features and may link to an external platform; we do not operate the games or process player funds.",
    ageNotice: "18+ only", responsibleNotice: "Gaming involves financial risk. Set limits, never chase losses, and stop if play is no longer enjoyable.",
    rightsReserved: "All rights reserved.", language: "Language",
    nav: ["Home", "Games", "Promotions", "Guides", "Agent", "About", "FAQ"],
    groups: ["Explore", "Play", "Support", "Legal"],
    labels: ["About IWIN", "Official Partner", "Game Providers", "Slots", "Live Casino", "Sports", "4D", "Guides", "FAQ", "Contact", "Responsible Gaming", "Terms", "Privacy Policy", "Disclaimer"],
  },
  ms: {
    primaryNav: "Navigasi utama", openMenu: "Buka menu", closeMenu: "Tutup menu",
    login: "Log masuk", register: "Daftar", contactSupport: "Hubungi sokongan",
    partnerDisclosure: "IWIN Malaysia ialah laman maklumat rakan rasmi. Kami menerangkan ciri platform dan mungkin memaut ke platform luar; kami tidak mengendalikan permainan atau memproses dana pemain.",
    ageNotice: "Untuk 18+ sahaja", responsibleNotice: "Permainan melibatkan risiko kewangan. Tetapkan had, jangan kejar kerugian dan berhenti jika permainan tidak lagi menyeronokkan.",
    rightsReserved: "Hak cipta terpelihara.", language: "Bahasa",
    nav: ["Utama", "Permainan", "Promosi", "Panduan", "Ejen", "Tentang", "Soalan Lazim"],
    groups: ["Terokai", "Permainan", "Sokongan", "Undang-undang"],
    labels: ["Tentang IWIN", "Rakan Rasmi", "Penyedia Permainan", "Slot", "Kasino Langsung", "Sukan", "4D", "Panduan", "Soalan Lazim", "Hubungi", "Permainan Bertanggungjawab", "Terma", "Dasar Privasi", "Penafian"],
  },
  zh: {
    primaryNav: "主导航", openMenu: "打开菜单", closeMenu: "关闭菜单",
    login: "登录", register: "注册", contactSupport: "联系支持",
    partnerDisclosure: "IWIN Malaysia 是官方合作伙伴信息网站。我们介绍平台功能，并可能链接至外部平台；本站不经营游戏，也不处理玩家资金。",
    ageNotice: "仅限18岁以上", responsibleNotice: "游戏涉及财务风险。请设定限额、切勿追损，并在游戏不再带来乐趣时停止。",
    rightsReserved: "保留所有权利。", language: "语言",
    nav: ["首页", "游戏", "优惠", "指南", "代理", "关于", "常见问题"],
    groups: ["探索", "游戏", "支持", "法律"],
    labels: ["关于 IWIN", "官方合作伙伴", "游戏提供商", "老虎机", "真人娱乐场", "体育", "4D", "指南", "常见问题", "联系我们", "负责任游戏", "条款", "隐私政策", "免责声明"],
  },
} as const;

export function getUi(locale: Locale): UiContent {
  const c = copy[locale];
  const links = (items: [RouteKey, string][]): Link[] =>
    items.map(([key, label]) => ({ label, href: routePath(key, locale) }));
  const [home, games, promotions, guides, agent, about, faq] = c.nav;
  const [aboutIwin, official, providers, slots, live, sports, fourD, guideLabel, faqLabel, contact, responsible, terms, privacy, disclaimer] = c.labels;
  return {
    primaryNav: c.primaryNav, openMenu: c.openMenu, closeMenu: c.closeMenu,
    login: c.login, register: c.register, contactSupport: c.contactSupport,
    partnerDisclosure: c.partnerDisclosure, ageNotice: c.ageNotice,
    responsibleNotice: c.responsibleNotice, rightsReserved: c.rightsReserved,
    footer: { language: c.language },
    navLinks: links([["home", home], ["games", games], ["promotions", promotions], ["guides", guides], ["agent", agent], ["about-iwin", about], ["faqs", faq]]),
    footerGroups: {
      explore: { title: c.groups[0], links: links([["about-iwin", aboutIwin], ["official-partner", official], ["game-providers", providers]]) },
      play: { title: c.groups[1], links: links([["games-slots", slots], ["games-live-casino", live], ["games-sports", sports], ["games-4d", fourD]]) },
      support: { title: c.groups[2], links: links([["guides", guideLabel], ["faqs", faqLabel], ["contact", contact]]) },
      legal: { title: c.groups[3], links: links([["responsible-gaming", responsible], ["terms", terms], ["privacy-policy", privacy], ["disclaimer", disclaimer]]) },
    },
  };
}
