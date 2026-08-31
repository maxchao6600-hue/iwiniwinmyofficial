import type { Locale } from "@/lib/i18n/config";
import type { FaqGroup } from "./faq";

export type VisualContent = {
  exploreCategory: string;
  ecosystem: {
    hub: string;
    nodes: readonly [string, string, string, string, string];
  };
  promo: {
    amount: string;
    freeCredit: string;
    turnoverLabel: string;
    turnoverValue: string;
    claimLabel: string;
    claimValue: string;
    eligibilityLabel: string;
    eligibilityValue: string;
  };
  responsible: readonly { icon: string; title: string; description: string }[];
  agentProcess: readonly string[];
  partnerFlow: readonly string[];
  faqCategoryLabels: Record<FaqGroup["id"], string>;
  guideFeatured: string;
  finalCtaEyebrow: string;
};

const copy = {
  en: {
    exploreCategory: "Explore category",
    ecosystem: {
      hub: "IWIN",
      nodes: ["Games", "Promotions", "Guides", "Agent", "FAQ"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "Free credit",
      turnoverLabel: "Turnover",
      turnoverValue: "5×",
      claimLabel: "Claim",
      claimValue: "1×",
      eligibilityLabel: "Eligibility",
      eligibilityValue: "Applies",
    },
    responsible: [
      { icon: "⏱", title: "Time", description: "Set time limits before you play." },
      { icon: "◈", title: "Spending", description: "Set spending limits you can afford." },
      { icon: "↺", title: "Breaks", description: "Take breaks when play stops feeling enjoyable." },
      { icon: "◉", title: "Security", description: "Protect passwords, OTPs and account access." },
    ],
    agentProcess: ["You", "Refer", "Valid activity", "Check eligibility", "Commission"],
    partnerFlow: [
      "IWIN Malaysia Official Partner",
      "Information website",
      "Games / Guides / Promotions / FAQ",
      "External platform",
    ],
    faqCategoryLabels: {
      general: "General",
      account: "Account",
      registration: "Registration",
      login: "Login",
      deposit: "Deposit",
      withdrawal: "Withdrawal",
      games: "Games",
      promotions: "Promotions",
      "partner-agent": "Agent",
      security: "Security",
      mobile: "Mobile",
    },
    guideFeatured: "Featured",
    finalCtaEyebrow: "Next step",
  },
  ms: {
    exploreCategory: "Terokai kategori",
    ecosystem: {
      hub: "IWIN",
      nodes: ["Permainan", "Promosi", "Panduan", "Ejen", "Soalan Lazim"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "Kredit percuma",
      turnoverLabel: "Pusing ganti",
      turnoverValue: "5×",
      claimLabel: "Tuntutan",
      claimValue: "1×",
      eligibilityLabel: "Kelayakan",
      eligibilityValue: "Terap",
    },
    responsible: [
      { icon: "⏱", title: "Masa", description: "Tetapkan had masa sebelum bermain." },
      { icon: "◈", title: "Perbelanjaan", description: "Tetapkan had perbelanjaan yang mampu." },
      { icon: "↺", title: "Rehat", description: "Ambil rehat apabila permainan tidak lagi menyeronokkan." },
      { icon: "◉", title: "Keselamatan", description: "Lindungi kata laluan, OTP dan akses akaun." },
    ],
    agentProcess: ["Anda", "Rujuk", "Aktiviti sah", "Semak kelayakan", "Komisen"],
    partnerFlow: [
      "Rakan Rasmi IWIN Malaysia",
      "Laman maklumat",
      "Permainan / Panduan / Promosi / Soalan Lazim",
      "Platform luar",
    ],
    faqCategoryLabels: {
      general: "Umum",
      account: "Akaun",
      registration: "Pendaftaran",
      login: "Log masuk",
      deposit: "Deposit",
      withdrawal: "Pengeluaran",
      games: "Permainan",
      promotions: "Promosi",
      "partner-agent": "Ejen",
      security: "Keselamatan",
      mobile: "Mudah alih",
    },
    guideFeatured: "Pilihan utama",
    finalCtaEyebrow: "Langkah seterusnya",
  },
  zh: {
    exploreCategory: "浏览类别",
    ecosystem: {
      hub: "IWIN",
      nodes: ["游戏", "优惠", "指南", "代理", "常见问题"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "免费彩金",
      turnoverLabel: "流水",
      turnoverValue: "5×",
      claimLabel: "领取",
      claimValue: "1×",
      eligibilityLabel: "资格",
      eligibilityValue: "适用",
    },
    responsible: [
      { icon: "⏱", title: "时间", description: "游戏前设定时间上限。" },
      { icon: "◈", title: "支出", description: "设定可承受的支出限额。" },
      { icon: "↺", title: "休息", description: "当游戏不再带来乐趣时暂停。" },
      { icon: "◉", title: "安全", description: "保护密码、OTP 与账户访问。" },
    ],
    agentProcess: ["您", "推荐", "有效活动", "核对资格", "佣金"],
    partnerFlow: [
      "IWIN Malaysia 官方合作伙伴",
      "信息网站",
      "游戏 / 指南 / 优惠 / 常见问题",
      "外部平台",
    ],
    faqCategoryLabels: {
      general: "综合",
      account: "账户",
      registration: "注册",
      login: "登录",
      deposit: "存款",
      withdrawal: "提款",
      games: "游戏",
      promotions: "优惠",
      "partner-agent": "代理",
      security: "安全",
      mobile: "移动设备",
    },
    guideFeatured: "重点推荐",
    finalCtaEyebrow: "下一步",
  },
} as const;

export function getVisual(locale: Locale): VisualContent {
  return copy[locale];
}
