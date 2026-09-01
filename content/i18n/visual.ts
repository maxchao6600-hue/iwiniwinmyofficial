import type { Locale } from "@/lib/i18n/config";
import type { FaqGroup } from "./faq";

export type MarqueeVariant = "brand" | "games" | "guides" | "partner" | "security";

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
  agentTimeline: readonly { label: string; hint: string }[];
  partnerFlow: readonly string[];
  journey: {
    title: string;
    steps: readonly { label: string; hint: string }[];
  };
  marquees: Record<MarqueeVariant, readonly string[]>;
  faqCategoryLabels: Record<FaqGroup["id"], string>;
  faqCategoryDescriptions: Record<FaqGroup["id"], string>;
  faqQuestionCount: string;
  contactSupport: {
    heading: string;
    subheading: string;
    topics: readonly {
      id: string;
      title: string;
      description: string;
      prepare: readonly string[];
    }[];
  };
  securityCenter: {
    heading: string;
    panels: readonly { title: string; description: string }[];
  };
  guideFeatured: string;
  finalCtaEyebrow: string;
  playResponsibly: string;
  featuredCategory: string;
  legalOnThisPage: string;
  helpQuickAnswers: string;
  helpBrowseTopics: string;
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
    agentProcess: ["Discover", "Refer", "Track", "Review", "Manage"],
    agentTimeline: [
      { label: "Discover", hint: "Learn how the partner programme works" },
      { label: "Refer", hint: "Share your referral link responsibly" },
      { label: "Track", hint: "Monitor activity in the partner dashboard" },
      { label: "Review", hint: "Check eligibility and reporting periods" },
      { label: "Manage", hint: "Maintain compliance and accurate records" },
    ],
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
    marquees: {
      brand: [
        "IWIN Malaysia",
        "Games",
        "Guides",
        "Promotions",
        "Security",
        "Partner Information",
        "Responsible Use",
        "FAQ",
      ],
      games: ["Slots", "Live Casino", "Sports", "4D", "Providers", "Categories"],
      guides: ["Register", "Login", "Deposit", "Withdraw", "Security", "Payment Methods"],
      partner: ["Partner", "Referral", "Tracking", "Responsibility", "Disclosure", "Compliance"],
      security: [
        "Account Security",
        "Link Verification",
        "Password Safety",
        "Device Security",
        "OTP Protection",
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
    faqCategoryDescriptions: {
      general: "What IWIN refers to and how this website works.",
      account: "Account access, recovery and general account questions.",
      registration: "Creating a new account and registration requirements.",
      login: "Signing in, OTP verification and login troubleshooting.",
      deposit: "Funding your account and deposit-related checks.",
      withdrawal: "Withdrawal requests, turnover and processing.",
      games: "Game categories, providers and how to explore options.",
      promotions: "Offers, eligibility and bonus conditions.",
      "partner-agent": "Agent programme, referrals and partner support.",
      security: "Password safety, link verification and account protection.",
      mobile: "Mobile access, browser use and device considerations.",
    },
    faqQuestionCount: "questions",
    contactSupport: {
      heading: "How can we help?",
      subheading: "Choose the topic closest to your question and prepare the listed information before contacting support.",
      topics: [
        {
          id: "account",
          title: "Account",
          description: "Login issues, registration problems or account recovery on the external platform.",
          prepare: ["Registered mobile number", "Approximate registration date", "Screenshot of the error (if any)"],
        },
        {
          id: "payment",
          title: "Payment",
          description: "Deposits, withdrawals or payment method questions requiring platform records.",
          prepare: ["Transaction reference", "Amount and date", "Payment method used"],
        },
        {
          id: "promotion",
          title: "Promotion",
          description: "Offer eligibility, turnover or bonus conditions on the external platform.",
          prepare: ["Promotion name", "Registration date", "Screenshots of live terms"],
        },
        {
          id: "games",
          title: "Games",
          description: "Category navigation, provider references or game access questions.",
          prepare: ["Game category", "Provider name (if known)", "Device and browser used"],
        },
        {
          id: "partner",
          title: "Partner",
          description: "Agent programme, referral tracking or partner dashboard queries.",
          prepare: ["Partner ID or referral link", "Reporting period", "Specific dashboard screen"],
        },
        {
          id: "website",
          title: "Website",
          description: "Corrections to information published on this partner website.",
          prepare: ["Page URL", "Incorrect text or link", "Suggested correction"],
        },
      ],
    },
    securityCenter: {
      heading: "Security essentials",
      panels: [
        {
          title: "Verify links before clicking",
          description: "Confirm the destination URL matches the official platform before entering credentials.",
        },
        {
          title: "Protect OTP codes",
          description: "Never share one-time passwords with anyone, including people claiming to be support staff.",
        },
        {
          title: "Use unique passwords",
          description: "Create a strong password used only for your gaming account — not reused elsewhere.",
        },
        {
          title: "Check device security",
          description: "Keep your phone and browser updated; avoid public Wi-Fi for account access.",
        },
      ],
    },
    guideFeatured: "Featured",
    finalCtaEyebrow: "Next step",
    playResponsibly: "Play responsibly",
    featuredCategory: "Featured",
    legalOnThisPage: "On this page",
    helpQuickAnswers: "Quick answers",
    helpBrowseTopics: "Browse by topic",
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
    agentProcess: ["Terokai", "Rujuk", "Jejak", "Semak", "Urus"],
    agentTimeline: [
      { label: "Terokai", hint: "Fahami cara program rakan berfungsi" },
      { label: "Rujuk", hint: "Kongsi pautan rujukan secara bertanggungjawab" },
      { label: "Jejak", hint: "Pantau aktiviti dalam papan pemuka rakan" },
      { label: "Semak", hint: "Semak kelayakan dan tempoh laporan" },
      { label: "Urus", hint: "Kekalkan pematuhan dan rekod yang tepat" },
    ],
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
    marquees: {
      brand: [
        "IWIN Malaysia",
        "Permainan",
        "Panduan",
        "Promosi",
        "Keselamatan",
        "Maklumat Rakan",
        "Penggunaan Bertanggungjawab",
        "Soalan Lazim",
      ],
      games: ["Slot", "Kasino Langsung", "Sukan", "4D", "Penyedia", "Kategori"],
      guides: ["Daftar", "Log Masuk", "Deposit", "Pengeluaran", "Keselamatan", "Kaedah Bayaran"],
      partner: ["Rakan", "Rujukan", "Penjejakan", "Tanggungjawab", "Pendedahan", "Pematuhan"],
      security: [
        "Keselamatan Akaun",
        "Pengesahan Pautan",
        "Keselamatan Kata Laluan",
        "Keselamatan Peranti",
        "Perlindungan OTP",
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
    faqCategoryDescriptions: {
      general: "Apa maksud IWIN dan cara laman web ini berfungsi.",
      account: "Akses akaun, pemulihan dan soalan umum akaun.",
      registration: "Membuat akaun baharu dan keperluan pendaftaran.",
      login: "Log masuk, pengesahan OTP dan penyelesaian masalah.",
      deposit: "Membiayai akaun dan semakan deposit.",
      withdrawal: "Permintaan pengeluaran, pusing ganti dan pemprosesan.",
      games: "Kategori permainan, penyedia dan cara meneroka pilihan.",
      promotions: "Tawaran, kelayakan dan syarat bonus.",
      "partner-agent": "Program ejen, rujukan dan sokongan rakan.",
      security: "Keselamatan kata laluan, pengesahan pautan dan perlindungan akaun.",
      mobile: "Akses mudah alih, pelayar dan pertimbangan peranti.",
    },
    faqQuestionCount: "soalan",
    contactSupport: {
      heading: "Bagaimana kami boleh membantu?",
      subheading: "Pilih topik yang paling hampir dengan soalan anda dan sediakan maklumat yang disenaraikan sebelum menghubungi sokongan.",
      topics: [
        {
          id: "account",
          title: "Akaun",
          description: "Masalah log masuk, pendaftaran atau pemulihan akaun di platform luar.",
          prepare: ["Nombor mudah alih berdaftar", "Anggaran tarikh pendaftaran", "Tangkapan skrin ralat (jika ada)"],
        },
        {
          id: "payment",
          title: "Bayaran",
          description: "Deposit, pengeluaran atau soalan kaedah bayaran yang memerlukan rekod platform.",
          prepare: ["Rujukan transaksi", "Jumlah dan tarikh", "Kaedah bayaran digunakan"],
        },
        {
          id: "promotion",
          title: "Promosi",
          description: "Kelayakan tawaran, pusing ganti atau syarat bonus di platform luar.",
          prepare: ["Nama promosi", "Tarikh pendaftaran", "Tangkapan skrin terma langsung"],
        },
        {
          id: "games",
          title: "Permainan",
          description: "Navigasi kategori, rujukan penyedia atau soalan akses permainan.",
          prepare: ["Kategori permainan", "Nama penyedia (jika diketahui)", "Peranti dan pelayar digunakan"],
        },
        {
          id: "partner",
          title: "Rakan",
          description: "Program ejen, penjejakan rujukan atau pertanyaan papan pemuka rakan.",
          prepare: ["ID rakan atau pautan rujukan", "Tempoh laporan", "Skrin papan pemuka tertentu"],
        },
        {
          id: "website",
          title: "Laman Web",
          description: "Pembetulan maklumat yang diterbitkan di laman rakan ini.",
          prepare: ["URL halaman", "Teks atau pautan yang salah", "Pembetulan dicadangkan"],
        },
      ],
    },
    securityCenter: {
      heading: "Asas keselamatan",
      panels: [
        {
          title: "Sahkan pautan sebelum klik",
          description: "Pastikan URL destinasi sepadan dengan platform rasmi sebelum memasukkan kelayakan.",
        },
        {
          title: "Lindungi kod OTP",
          description: "Jangan kongsi kata laluan sekali dengan sesiapa, termasuk yang mendakwa staf sokongan.",
        },
        {
          title: "Guna kata laluan unik",
          description: "Cipta kata laluan kukuh khusus untuk akaun permainan anda — jangan guna semula di tempat lain.",
        },
        {
          title: "Semak keselamatan peranti",
          description: "Kemas kini telefon dan pelayar; elak Wi-Fi awam untuk akses akaun.",
        },
      ],
    },
    guideFeatured: "Pilihan utama",
    finalCtaEyebrow: "Langkah seterusnya",
    playResponsibly: "Main secara bertanggungjawab",
    featuredCategory: "Pilihan",
    legalOnThisPage: "Dalam halaman ini",
    helpQuickAnswers: "Jawapan pantas",
    helpBrowseTopics: "Layari mengikut topik",
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
    agentProcess: ["了解", "推荐", "追踪", "审核", "管理"],
    agentTimeline: [
      { label: "了解", hint: "学习合作伙伴计划如何运作" },
      { label: "推荐", hint: "负责任地分享推荐链接" },
      { label: "追踪", hint: "在合作伙伴面板监控活动" },
      { label: "审核", hint: "核对资格与报告周期" },
      { label: "管理", hint: "保持合规与准确记录" },
    ],
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
    marquees: {
      brand: [
        "IWIN Malaysia",
        "游戏",
        "指南",
        "优惠",
        "安全",
        "合作伙伴信息",
        "负责任使用",
        "常见问题",
      ],
      games: ["老虎机", "真人娱乐场", "体育", "4D", "提供商", "类别"],
      guides: ["注册", "登录", "存款", "提款", "安全", "支付方式"],
      partner: ["合作伙伴", "推荐", "追踪", "责任", "披露", "合规"],
      security: ["账户安全", "链接核实", "密码安全", "设备安全", "OTP 保护"],
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
    faqCategoryDescriptions: {
      general: "IWIN 的含义及本网站如何运作。",
      account: "账户访问、恢复及一般账户问题。",
      registration: "创建新账户及注册要求。",
      login: "登录、OTP 验证及登录故障排除。",
      deposit: "为账户充值及存款相关检查。",
      withdrawal: "提款申请、流水及处理。",
      games: "游戏类别、提供商及如何浏览选项。",
      promotions: "优惠、资格及奖金条件。",
      "partner-agent": "代理计划、推荐及合作伙伴支持。",
      security: "密码安全、链接核实及账户保护。",
      mobile: "移动访问、浏览器及设备注意事项。",
    },
    faqQuestionCount: "个问题",
    contactSupport: {
      heading: "我们能如何帮助？",
      subheading: "选择最接近您问题的主题，并在联系支持前准备好所列信息。",
      topics: [
        {
          id: "account",
          title: "账户",
          description: "外部平台的登录问题、注册问题或账户恢复。",
          prepare: ["注册手机号", "大致注册日期", "错误截图（如有）"],
        },
        {
          id: "payment",
          title: "支付",
          description: "存款、提款或需要平台记录的支付方式问题。",
          prepare: ["交易参考号", "金额与日期", "使用的支付方式"],
        },
        {
          id: "promotion",
          title: "优惠",
          description: "外部平台的优惠资格、流水或奖金条件。",
          prepare: ["优惠名称", "注册日期", "实时条款截图"],
        },
        {
          id: "games",
          title: "游戏",
          description: "类别导航、提供商参考或游戏访问问题。",
          prepare: ["游戏类别", "提供商名称（如已知）", "使用的设备与浏览器"],
        },
        {
          id: "partner",
          title: "合作伙伴",
          description: "代理计划、推荐追踪或合作伙伴面板查询。",
          prepare: ["合作伙伴 ID 或推荐链接", "报告周期", "具体面板页面"],
        },
        {
          id: "website",
          title: "网站",
          description: "对本合作伙伴网站发布信息的勘误。",
          prepare: ["页面 URL", "错误文字或链接", "建议修正"],
        },
      ],
    },
    securityCenter: {
      heading: "安全要点",
      panels: [
        {
          title: "点击前核实链接",
          description: "输入凭据前确认目标 URL 与官方平台一致。",
        },
        {
          title: "保护 OTP 验证码",
          description: "切勿与任何人分享一次性密码，包括自称支持人员的人。",
        },
        {
          title: "使用独立密码",
          description: "为游戏账户创建强密码，不要在其他地方重复使用。",
        },
        {
          title: "检查设备安全",
          description: "保持手机与浏览器更新；避免在公共 Wi-Fi 上访问账户。",
        },
      ],
    },
    guideFeatured: "重点推荐",
    finalCtaEyebrow: "下一步",
    playResponsibly: "负责任地游戏",
    featuredCategory: "精选",
    legalOnThisPage: "本页目录",
    helpQuickAnswers: "快速解答",
    helpBrowseTopics: "按主题浏览",
  },
};

export function getVisual(locale: Locale): VisualContent {
  return copy[locale];
}

export function getMarqueeItems(locale: Locale, variant: MarqueeVariant): readonly string[] {
  const items = copy[locale].marquees[variant];
  return items.flatMap((item) => [item, "•"]).slice(0, -1);
}
