import type { Locale } from "@/lib/i18n/config";
import type { FaqGroup } from "./faq";

export type VisualContent = {
  exploreCategory: string;
  ecosystem: {
    hub: string;
    subtitle: string;
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
    verifyNote: string;
  };
  responsible: {
    headline: string;
    items: readonly { title: string; description: string }[];
  };
  agentProcess: readonly string[];
  partnerFlow: readonly string[];
  journey: {
    title: string;
    steps: readonly { label: string; hint: string }[];
  };
  faqCategoryLabels: Record<FaqGroup["id"], string>;
  guideFeatured: string;
  finalCtaEyebrow: string;
  playResponsibly: string;
  featuredCategory: string;
};

const copy: Record<Locale, VisualContent> = {
  en: {
    exploreCategory: "Explore category",
    ecosystem: {
      hub: "IWIN",
      subtitle: "Malaysia information ecosystem",
      nodes: ["Games", "Promotions", "Guides", "Agent", "FAQ"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "Free credit",
      turnoverLabel: "Turnover",
      turnoverValue: "5×",
      claimLabel: "Claim",
      claimValue: "1× / mobile",
      eligibilityLabel: "Eligibility",
      eligibilityValue: "New registrations",
      verifyNote: "Confirm live terms on the external platform before registering.",
    },
    responsible: {
      headline: "Play responsibly",
      items: [
        { title: "Time", description: "Set time limits before you play." },
        { title: "Spending", description: "Set spending limits you can afford." },
        { title: "Breaks", description: "Take breaks when play stops feeling enjoyable." },
        { title: "Security", description: "Protect passwords, OTPs and account access." },
      ],
    },
    agentProcess: ["Refer", "Activity", "Eligibility", "Commission"],
    partnerFlow: [
      "IWIN Malaysia Official Partner",
      "Information website",
      "Games · Guides · Promotions · FAQ",
      "External platform",
    ],
    journey: {
      title: "IWIN user journey",
      steps: [
        { label: "Register", hint: "Prepare accurate details" },
        { label: "Login", hint: "Verify the destination" },
        { label: "Deposit", hint: "Match cashier rules" },
        { label: "Play", hint: "Choose a category" },
        { label: "Withdraw", hint: "Check turnover first" },
        { label: "Security", hint: "Protect your account" },
      ],
    },
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
    playResponsibly: "Play responsibly",
    featuredCategory: "Featured",
  },
  ms: {
    exploreCategory: "Terokai kategori",
    ecosystem: {
      hub: "IWIN",
      subtitle: "Ekosistem maklumat Malaysia",
      nodes: ["Permainan", "Promosi", "Panduan", "Ejen", "Soalan Lazim"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "Kredit percuma",
      turnoverLabel: "Pusing ganti",
      turnoverValue: "5×",
      claimLabel: "Tuntutan",
      claimValue: "1× / mudah alih",
      eligibilityLabel: "Kelayakan",
      eligibilityValue: "Pendaftaran baharu",
      verifyNote: "Sahkan terma langsung di platform luar sebelum mendaftar.",
    },
    responsible: {
      headline: "Main secara bertanggungjawab",
      items: [
        { title: "Masa", description: "Tetapkan had masa sebelum bermain." },
        { title: "Perbelanjaan", description: "Tetapkan had perbelanjaan yang mampu." },
        { title: "Rehat", description: "Ambil rehat apabila permainan tidak lagi menyeronokkan." },
        { title: "Keselamatan", description: "Lindungi kata laluan, OTP dan akses akaun." },
      ],
    },
    agentProcess: ["Rujuk", "Aktiviti", "Kelayakan", "Komisen"],
    partnerFlow: [
      "Rakan Rasmi IWIN Malaysia",
      "Laman maklumat",
      "Permainan · Panduan · Promosi · Soalan Lazim",
      "Platform luar",
    ],
    journey: {
      title: "Perjalanan pengguna IWIN",
      steps: [
        { label: "Daftar", hint: "Sediakan butiran tepat" },
        { label: "Log masuk", hint: "Sahkan destinasi" },
        { label: "Deposit", hint: "Ikuti peraturan juruwang" },
        { label: "Main", hint: "Pilih kategori" },
        { label: "Pengeluaran", hint: "Semak pusing ganti dahulu" },
        { label: "Keselamatan", hint: "Lindungi akaun anda" },
      ],
    },
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
    playResponsibly: "Main secara bertanggungjawab",
    featuredCategory: "Pilihan",
  },
  zh: {
    exploreCategory: "浏览类别",
    ecosystem: {
      hub: "IWIN",
      subtitle: "马来西亚信息生态",
      nodes: ["游戏", "优惠", "指南", "代理", "常见问题"],
    },
    promo: {
      amount: "RM10",
      freeCredit: "免费彩金",
      turnoverLabel: "流水",
      turnoverValue: "5×",
      claimLabel: "领取",
      claimValue: "每手机号 1×",
      eligibilityLabel: "资格",
      eligibilityValue: "新注册",
      verifyNote: "注册前请在外部平台确认实时条款。",
    },
    responsible: {
      headline: "负责任地游戏",
      items: [
        { title: "时间", description: "游戏前设定时间上限。" },
        { title: "支出", description: "设定可承受的支出限额。" },
        { title: "休息", description: "当游戏不再带来乐趣时暂停。" },
        { title: "安全", description: "保护密码、OTP 与账户访问。" },
      ],
    },
    agentProcess: ["推荐", "有效活动", "资格", "佣金"],
    partnerFlow: [
      "IWIN Malaysia 官方合作伙伴",
      "信息网站",
      "游戏 · 指南 · 优惠 · 常见问题",
      "外部平台",
    ],
    journey: {
      title: "IWIN 用户旅程",
      steps: [
        { label: "注册", hint: "准备准确资料" },
        { label: "登录", hint: "核实目标网址" },
        { label: "存款", hint: "遵循收银台规则" },
        { label: "游戏", hint: "选择类别" },
        { label: "提款", hint: "先核对流水" },
        { label: "安全", hint: "保护账户" },
      ],
    },
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
    playResponsibly: "负责任地游戏",
    featuredCategory: "精选",
  },
};

export function getVisual(locale: Locale): VisualContent {
  return copy[locale];
}
