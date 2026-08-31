import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { GAME_CATEGORIES } from "@/content/games/catalog";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import { getHomeFaqs, type FaqItem } from "./faq";

type Cta = { label: string; routeKey?: RouteKey; href?: string };
type Feature = { title: string; description: string };
type Card = Feature & { routeKey: RouteKey; href: string; image?: string };
type ClusterLink = { label: string; description: string; routeKey: RouteKey; href: string };

export type HomeContent = {
  hero: { eyebrow: string; h1: string; description: string; primaryCta: Cta; secondaryCta: Cta; note: string };
  aboutIwin: { eyebrow: string; title: string; paragraphs: string[]; points: string[] };
  partnerBand: { title: string; body: string };
  clusterLinks: { eyebrow: string; title: string; items: ClusterLink[] };
  categories: { eyebrow: string; title: string; intro: string; items: Card[] };
  whyIwin: { eyebrow: string; title: string; features: Feature[] };
  providers: { eyebrow: string; title: string; intro: string; cta: Cta };
  promotions: { eyebrow: string; title: string; description: string; conditions: string[]; cta: Cta };
  guides: { eyebrow: string; title: string; description: string; items: Card[]; cta: Cta };
  agent: { eyebrow: string; title: string; description: string; points: string[]; cta: Cta };
  faq: { eyebrow: string; title: string; items: FaqItem[]; cta: Cta };
  responsibleBand: { title: string; description: string; cta: Cta };
  getStarted: { eyebrow: string; title: string; description: string; steps: Feature[] };
  finalCta: { title: string; description: string; primaryCta: Cta; secondaryCta: Cta; disclosure: string };
};

const localized = {
  en: {
    hero: [
      "IWIN Malaysia Official Partner",
      "IWIN Malaysia Official Partner — IWIN Games, Promotions & Guides",
      "Your practical IWIN Malaysia information resource: compare game categories, read account and payment guides, understand promotion conditions, and learn about the agent programme — with clear boundaries between this site and the external platform.",
      "Register on IWIN platform",
      "Browse IWIN games",
      "This is an official partner information website, not the gambling operator. External-platform terms apply.",
    ],
    about: [
      "What is IWIN?",
      "IWIN in the Malaysia context",
      [
        "IWIN is a gaming ecosystem that Malaysian users may encounter when researching slots, live casino, sports, 4D, account access, promotions and partner opportunities. This website explains those topics in plain language.",
        "IWIN Malaysia Official Partner describes this site’s information and referral role. We publish guides and may link to an external platform, but we do not operate game accounts, hold player funds, approve withdrawals or make licensing claims.",
        "Use this resource to compare formats, prepare for registration or payments, read promotion conditions carefully, and understand agent concepts — then verify every live term on the external destination before acting.",
      ],
      [
        "Independent information in English, Bahasa Malaysia and Simplified Chinese",
        "Games, promotions, guides, agent resources and responsible-gaming orientation",
        "Clear external-platform disclosure on registration, login and partner links",
        "No guaranteed winnings, withdrawals, bonuses or partner income",
      ],
    ],
    cluster: [
      "Explore IWIN",
      "Navigate the IWIN topical resource",
      [
        ["IWIN Games", "Slots, live casino, sports, 4D and provider references", "games"],
        ["IWIN Promotions", "Welcome offers, free-credit conditions and turnover guides", "promotions"],
        ["IWIN Guides", "Register, login, deposit, withdrawal, payments and security", "guides"],
        ["IWIN Agent", "Partner programme, referral and commission information", "agent"],
        ["IWIN FAQ", "Common questions about accounts, payments and partner topics", "faqs"],
        ["About IWIN", "Entity clarity, partner boundaries and verification guidance", "about-iwin"],
      ],
    ],
    partner: [
      "Partner information boundaries",
      "This website explains the IWIN ecosystem and directs eligible adults to relevant external pages when appropriate. Registration, balances, game rounds, deposits and withdrawals remain functions of the external platform — not this information site.",
    ],
    categories: [
      "IWIN Games",
      "Explore IWIN game categories",
      "Understand how slots, live casino, sports and 4D differ in rules, pace and what you should check before play. Individual titles depend on the live lobby after login.",
      ["IWIN Slots", "Digital reels with paytables, features and volatility that vary by title."],
      ["IWIN Live Casino", "Streamed table formats with timed betting windows and connection needs."],
      ["IWIN Sports", "Pre-match and in-play markets where odds, lines and settlement rules matter."],
      ["IWIN 4D", "Scheduled number draws with platform-specific entry types and prize tables."],
    ],
    why: [
      "Why use this resource",
      "Built for clearer IWIN decisions",
      [
        "Entity clarity",
        "Consistent IWIN → IWIN Malaysia → games, guides, promotions and agent information with partner boundaries explained.",
      ],
      [
        "Conditions in plain language",
        "Turnover, eligibility, payment checks and account security without guaranteed outcomes or fake offers.",
      ],
      [
        "Three useful languages",
        "Natural English, Bahasa Malaysia and Simplified Chinese with matching URLs for hreflang.",
      ],
      [
        "Safer-play reminders",
        "Responsible gaming, security guidance and external-platform verification prompts throughout.",
      ],
    ],
    providers: [
      "Game providers",
      "IWIN game provider references",
      "See ecosystem names such as 918Kiss, JILI, JDB and Pragmatic Play as navigation references. Listings do not assert direct partnerships or permanent availability — confirm in the live lobby.",
      "View game providers",
    ],
    promo: [
      "IWIN Promotions",
      "IWIN promotion information and conditions",
      "Source information describes a possible RM10 free credit for eligible new registrations through the official partner site. Promotions change; verify live terms before registering.",
      [
        "Daily quota may apply",
        "5x turnover applies (RM10 means RM50 qualifying turnover)",
        "One claim per mobile number",
        "Non-transferable and not guaranteed",
      ],
      "Read promotion conditions",
    ],
    guides: [
      "IWIN Guides",
      "IWIN account, payment and security guides",
      "Step-by-step information for registration, login, deposits, withdrawals, payment methods and account protection on the external platform.",
      ["IWIN Register", "What to prepare and verify on the external registration form."],
      ["IWIN Login", "Destination checks, credential safety and recovery steps."],
      ["IWIN Deposit", "Bank binding, name matching and transaction references."],
      ["IWIN Withdrawal", "Verification, turnover and transaction-reference checks."],
      ["IWIN Payment Methods", "Compare method considerations and ownership rules."],
      ["IWIN Account Security", "Passwords, OTPs, URLs and suspicious-request awareness."],
      "See all IWIN guides",
    ],
    agent: [
      "IWIN Agent",
      "IWIN agent and partner information",
      "Platform information describes free agent registration and turnover-based referral commissions. Confirm current rates and rules in the agent dashboard; commissions are not guaranteed income.",
      [
        "Joining is described as free on the external platform",
        "Commissions may depend on valid referred-player turnover",
        "Rates, eligibility and adjustments can change without this site updating",
      ],
      "Explore IWIN agent information",
    ],
    faq: ["IWIN FAQ preview", "Common IWIN Malaysia questions", "View all FAQs"],
    responsible: [
      "Responsible gaming",
      "Gaming is entertainment with a real risk of loss. Set time and spending limits, never borrow to play, and take a break when control feels difficult.",
      "Responsible gaming guidance",
    ],
    start: [
      "How to get started",
      "A practical sequence before any external action",
      "Read the matching guide first. Confirm live terms on the destination only after you understand the task, the conditions and your personal limits.",
      [
        "Read the IWIN registration guide",
        "Prepare a mobile number you control, a unique password and accurate details before opening the external form.",
      ],
      [
        "Review IWIN payment guides",
        "Compare deposit, withdrawal and method checks so you are not relying on old screenshots or chat instructions.",
      ],
      [
        "Compare IWIN game formats",
        "Understand how slots, live casino, sports and 4D differ before choosing a category in the live lobby.",
      ],
      [
        "Set personal limits",
        "Decide time and spending limits in advance. Do not treat promotions or previous results as a reason to spend more.",
      ],
    ],
    final: [
      "Continue with clearer information",
      "Read the guides that match your next step, then decide whether an external IWIN platform is appropriate for you.",
      "Read registration guide",
      "Explore IWIN guides",
      "External links leave this information website. Check destination terms, eligibility and privacy practices.",
    ],
  },
  ms: {
    hero: [
      "Rakan Rasmi IWIN Malaysia",
      "Rakan Rasmi IWIN Malaysia — Permainan, Promosi & Panduan IWIN",
      "Sumber maklumat praktikal IWIN Malaysia: bandingkan kategori permainan, baca panduan akaun dan bayaran, fahami syarat promosi, dan ketahui program ejen — dengan sempadan jelas antara laman ini dan platform luar.",
      "Daftar di platform IWIN",
      "Lihat permainan IWIN",
      "Ini laman maklumat rakan rasmi, bukan pengendali perjudian. Terma platform luar terpakai.",
    ],
    about: [
      "Apakah IWIN?",
      "IWIN dalam konteks Malaysia",
      [
        "IWIN ialah ekosistem permainan yang mungkin dicari pengguna Malaysia apabila meneliti slot, kasino langsung, sukan, 4D, akses akaun, promosi dan peluang rakan. Laman ini menerangkan topik tersebut dalam bahasa mudah.",
        "Rakan Rasmi IWIN Malaysia menerangkan peranan maklumat dan rujukan laman ini. Kami menerbitkan panduan dan mungkin memaut ke platform luar, tetapi tidak mengendalikan akaun permainan, menyimpan dana pemain, meluluskan pengeluaran atau mendakwa lesen.",
        "Gunakan sumber ini untuk membandingkan format, bersedia untuk pendaftaran atau bayaran, membaca syarat promosi dengan teliti, dan memahami konsep ejen — kemudian sahkan setiap terma langsung di destinasi luar sebelum bertindak.",
      ],
      [
        "Maklumat bebas dalam English, Bahasa Malaysia dan 中文 Ringkas",
        "Permainan, promosi, panduan, sumber ejen dan orientasi permainan bertanggungjawab",
        "Pendedahan platform luar yang jelas pada pautan pendaftaran, log masuk dan rakan",
        "Tiada jaminan kemenangan, pengeluaran, bonus atau pendapatan rakan",
      ],
    ],
    cluster: [
      "Terokai IWIN",
      "Navigasi sumber topikal IWIN",
      [
        ["Permainan IWIN", "Slot, kasino langsung, sukan, 4D dan rujukan penyedia", "games"],
        ["Promosi IWIN", "Tawaran alu-aluan, syarat kredit percuma dan panduan pusing ganti", "promotions"],
        ["Panduan IWIN", "Daftar, log masuk, deposit, pengeluaran, bayaran dan keselamatan", "guides"],
        ["Ejen IWIN", "Program rakan, rujukan dan maklumat komisen", "agent"],
        ["Soalan Lazim IWIN", "Soalan lazim tentang akaun, bayaran dan topik rakan", "faqs"],
        ["Tentang IWIN", "Kejelasan entiti, sempadan rakan dan panduan pengesahan", "about-iwin"],
      ],
    ],
    partner: [
      "Sempadan maklumat rakan",
      "Laman ini menerangkan ekosistem IWIN dan, jika sesuai, mengarahkan orang dewasa yang layak ke halaman luar berkaitan. Pendaftaran, baki, pusingan permainan, deposit dan pengeluaran kekal fungsi platform luar — bukan laman maklumat ini.",
    ],
    categories: [
      "Permainan IWIN",
      "Terokai kategori permainan IWIN",
      "Fahami perbezaan slot, kasino langsung, sukan dan 4D dari segi peraturan, tempo dan perkara yang perlu disemak sebelum bermain. Tajuk individu bergantung pada lobi langsung selepas log masuk.",
      ["Slot IWIN", "Gelendong digital dengan jadual bayaran, ciri dan turun naik yang berbeza mengikut tajuk."],
      ["Kasino Langsung IWIN", "Format meja distrim dengan tetingkap pertaruhan dan keperluan sambungan."],
      ["Sukan IWIN", "Pasaran pra-perlawanan dan langsung di mana odds, garisan dan penyelesaian penting."],
      ["4D IWIN", "Cabutan nombor berjadual dengan jenis kemasukan dan jadual hadiah khusus platform."],
    ],
    why: [
      "Mengapa guna sumber ini",
      "Dibina untuk keputusan IWIN yang lebih jelas",
      [
        "Kejelasan entiti",
        "Maklumat IWIN → IWIN Malaysia → permainan, panduan, promosi dan ejen dengan sempadan rakan yang jelas.",
      ],
      [
        "Syarat dalam bahasa mudah",
        "Pusing ganti, kelayakan, semakan bayaran dan keselamatan akaun tanpa hasil terjamin atau tawaran palsu.",
      ],
      [
        "Tiga bahasa berguna",
        "English, Bahasa Malaysia dan 中文 Ringkas semula jadi dengan URL sepadan untuk hreflang.",
      ],
      [
        "Peringatan permainan selamat",
        "Permainan bertanggungjawab, panduan keselamatan dan pengesahan platform luar di seluruh laman.",
      ],
    ],
    providers: [
      "Penyedia permainan",
      "Rujukan penyedia permainan IWIN",
      "Lihat nama ekosistem seperti 918Kiss, JILI, JDB dan Pragmatic Play sebagai rujukan navigasi. Senarai tidak mendakwa perkongsian langsung atau ketersediaan kekal — sahkan dalam lobi langsung.",
      "Lihat penyedia permainan",
    ],
    promo: [
      "Promosi IWIN",
      "Maklumat dan syarat promosi IWIN",
      "Maklumat sumber menerangkan kemungkinan kredit percuma RM10 bagi pendaftaran baharu yang layak melalui laman rakan rasmi. Promosi boleh berubah; sahkan terma langsung sebelum mendaftar.",
      [
        "Tertakluk pada kuota harian",
        "Pusing ganti 5x (RM10 bermaksud pusing ganti layak RM50)",
        "Satu tuntutan setiap nombor mudah alih",
        "Tidak boleh dipindah dan tidak dijamin",
      ],
      "Baca syarat promosi",
    ],
    guides: [
      "Panduan IWIN",
      "Panduan akaun, bayaran dan keselamatan IWIN",
      "Maklumat langkah demi langkah untuk pendaftaran, log masuk, deposit, pengeluaran, kaedah bayaran dan perlindungan akaun di platform luar.",
      ["Daftar IWIN", "Persediaan dan semakan pada borang pendaftaran luar."],
      ["Log Masuk IWIN", "Semakan destinasi, keselamatan kelayakan dan langkah pemulihan."],
      ["Deposit IWIN", "Pengikatan bank, padanan nama dan rujukan transaksi."],
      ["Pengeluaran IWIN", "Pengesahan, pusing ganti dan semakan rujukan transaksi."],
      ["Kaedah Bayaran IWIN", "Bandingkan pertimbangan kaedah dan peraturan pemilikan."],
      ["Keselamatan Akaun IWIN", "Kata laluan, OTP, URL dan kesedaran permintaan mencurigakan."],
      "Lihat semua panduan IWIN",
    ],
    agent: [
      "Ejen IWIN",
      "Maklumat ejen dan rakan IWIN",
      "Maklumat platform menerangkan pendaftaran ejen percuma dan komisen rujukan berasaskan pusing ganti. Sahkan kadar serta peraturan dalam papan pemuka ejen; komisen bukan pendapatan terjamin.",
      [
        "Penyertaan diterangkan sebagai percuma di platform luar",
        "Komisen mungkin bergantung pada pusing ganti sah pemain dirujuk",
        "Kadar, kelayakan dan pelarasan boleh berubah tanpa laman ini dikemas kini",
      ],
      "Terokai maklumat ejen IWIN",
    ],
    faq: ["Pratonton Soalan Lazim IWIN", "Soalan lazim IWIN Malaysia", "Lihat semua soalan"],
    responsible: [
      "Permainan bertanggungjawab",
      "Permainan ialah hiburan dengan risiko kerugian sebenar. Tetapkan had masa dan belanja, jangan meminjam untuk bermain, dan berehat apabila kawalan terasa sukar.",
      "Panduan permainan bertanggungjawab",
    ],
    start: [
      "Cara bermula",
      "Urutan praktikal sebelum sebarang tindakan luar",
      "Baca panduan yang sepadan dahulu. Sahkan terma langsung di destinasi hanya selepas anda faham tugas, syarat dan had peribadi.",
      [
        "Baca panduan pendaftaran IWIN",
        "Sediakan nombor mudah alih sendiri, kata laluan unik dan butiran tepat sebelum membuka borang luar.",
      ],
      [
        "Semak panduan bayaran IWIN",
        "Bandingkan deposit, pengeluaran dan semakan kaedah supaya tidak bergantung pada tangkapan skrin lama.",
      ],
      [
        "Bandingkan format permainan IWIN",
        "Fahami perbezaan slot, kasino langsung, sukan dan 4D sebelum memilih kategori di lobi langsung.",
      ],
      [
        "Tetapkan had peribadi",
        "Tentukan had masa dan belanja awal. Jangan gunakan promosi atau keputusan terdahulu sebagai alasan untuk belanja lebih.",
      ],
    ],
    final: [
      "Teruskan dengan maklumat yang lebih jelas",
      "Baca panduan yang sepadan dengan langkah seterusnya, kemudian tentukan sama ada platform luar IWIN sesuai untuk anda.",
      "Baca panduan pendaftaran",
      "Terokai panduan IWIN",
      "Pautan luar meninggalkan laman maklumat ini. Semak terma, kelayakan dan privasi destinasi.",
    ],
  },
  zh: {
    hero: [
      "IWIN Malaysia 官方合作伙伴",
      "IWIN Malaysia 官方合作伙伴 — IWIN 游戏、优惠与指南",
      "实用的 IWIN Malaysia 信息资源：比较游戏类别、阅读账户与支付指南、了解优惠条件，并学习代理计划 — 同时清楚区分本站与外部平台。",
      "在 IWIN 平台注册",
      "浏览 IWIN 游戏",
      "本站是官方合作伙伴信息网站，并非博彩运营商。外部平台条款适用。",
    ],
    about: [
      "什么是 IWIN？",
      "马来西亚语境下的 IWIN",
      [
        "IWIN 是马来西亚用户在研究老虎机、真人娱乐场、体育、4D、账户访问、优惠及合作机会时可能接触的游戏生态。本网站以清晰语言解释这些主题。",
        "IWIN Malaysia 官方合作伙伴说明本站的信息与引荐角色。我们发布指南并可能链接外部平台，但不运营游戏账户、不持有玩家资金、不批准提款，也不作牌照声明。",
        "请用本站比较玩法形式、准备注册或支付、仔细阅读优惠条件并理解代理概念 — 采取任何行动前，务必在外部平台核实实时条款。",
      ],
      [
        "提供 English、Bahasa Malaysia 与简体中文独立内容",
        "涵盖游戏、优惠、指南、代理资源与负责任游戏指引",
        "注册、登录与合作链接均有明确的外部平台披露",
        "不保证赢利、提款、彩金或合作收入",
      ],
    ],
    cluster: [
      "探索 IWIN",
      "浏览 IWIN 主题信息架构",
      [
        ["IWIN 游戏", "老虎机、真人、体育、4D 与提供商参考", "games"],
        ["IWIN 优惠", "欢迎礼、免费彩金条件与流水指南", "promotions"],
        ["IWIN 指南", "注册、登录、存款、提款、支付与安全", "guides"],
        ["IWIN 代理", "合作计划、推荐与佣金信息", "agent"],
        ["IWIN 常见问题", "账户、支付与合作相关常见问题", "faqs"],
        ["关于 IWIN", "实体说明、合作边界与核实指引", "about-iwin"],
      ],
    ],
    partner: [
      "合作伙伴信息边界",
      "本网站介绍 IWIN 生态，并在适当情况下引导符合资格的成年人前往相关外部页面。注册、余额、游戏局、存款与提款仍由外部平台处理 — 而非本信息网站。",
    ],
    categories: [
      "IWIN 游戏",
      "探索 IWIN 游戏类别",
      "了解老虎机、真人、体育与 4D 在规则、节奏及游戏前应核对事项上的差异。具体游戏以登录后实时大厅为准。",
      ["IWIN 老虎机", "数字转轴游戏，赔付表、功能与波动因游戏而异。"],
      ["IWIN 真人娱乐场", "直播桌台形式，含限时投注窗口与网络要求。"],
      ["IWIN 体育", "赛前与滚球盘口，须留意赔率、盘口与结算规则。"],
      ["IWIN 4D", "按计划开奖的选号形式，投注类型与奖金表因平台而异。"],
    ],
    why: [
      "为何使用本站",
      "帮助您更清楚地了解 IWIN",
      [
        "实体关系清晰",
        "IWIN → IWIN Malaysia → 游戏、指南、优惠与代理信息，并说明合作边界。",
      ],
      [
        "条件说明浅显",
        "解释流水、资格、支付检查与账户安全，不保证结果，也不虚构优惠。",
      ],
      [
        "三种实用语言",
        "自然的 English、Bahasa Malaysia 与简体中文，并提供对应 hreflang URL。",
      ],
      [
        "健康游戏提醒",
        "全站提供负责任游戏、安全指引与外部平台核实提示。",
      ],
    ],
    providers: [
      "游戏提供商",
      "IWIN 游戏提供商参考",
      "查看 918Kiss、JILI、JDB、Pragmatic Play 等生态名称作为导航参考。列出不代表直接合作或永久提供 — 请在实时大厅确认。",
      "查看游戏提供商",
    ],
    promo: [
      "IWIN 优惠",
      "IWIN 优惠信息与条件",
      "来源资料说明，符合资格并通过官方合作伙伴网站新注册者可能获得 RM10 免费彩金。优惠可能变动；注册前请核实实时条款。",
      [
        "可能受每日名额限制",
        "须完成 5 倍流水（RM10 即 RM50 合资格流水）",
        "每个手机号限一次",
        "不可转让且不保证获得",
      ],
      "阅读优惠条件",
    ],
    guides: [
      "IWIN 指南",
      "IWIN 账户、支付与安全指南",
      "外部平台注册、登录、存款、提款、支付方式与账户保护的分步说明。",
      ["IWIN 注册", "外部注册表格的准备事项与核对要点。"],
      ["IWIN 登录", "目标网址检查、凭据安全与找回步骤。"],
      ["IWIN 存款", "银行绑定、姓名匹配与交易编号。"],
      ["IWIN 提款", "验证、流水与交易编号检查。"],
      ["IWIN 支付方式", "比较方式注意事项与账户所有权规则。"],
      ["IWIN 账户安全", "密码、OTP、网址与可疑请求识别。"],
      "查看全部 IWIN 指南",
    ],
    agent: [
      "IWIN 代理",
      "IWIN 代理与合作信息",
      "平台资料称代理注册免费，推荐佣金可能按流水计算。请在代理后台确认当前费率与规则；佣金并非保证收入。",
      [
        "外部平台称加入代理免费",
        "佣金可能取决于被推荐玩家的有效流水",
        "费率、资格及调整规则可能改变，本站未必同步更新",
      ],
      "了解 IWIN 代理信息",
    ],
    faq: ["IWIN 常见问题预览", "IWIN Malaysia 常见问题", "查看全部常见问题"],
    responsible: [
      "负责任游戏",
      "游戏是有真实亏损风险的娱乐。设定时间与支出限额，切勿借钱游戏，并在难以自控时暂停。",
      "负责任游戏指南",
    ],
    start: [
      "如何开始",
      "采取任何外部操作前的实用顺序",
      "先阅读对应指南。只有在理解任务、条件与个人限额后，再到目标平台确认实时条款。",
      [
        "阅读 IWIN 注册指南",
        "打开外部表格前，准备本人控制的手机号、独立密码与准确资料。",
      ],
      [
        "核对 IWIN 支付指南",
        "比较存款、提款与支付方式检查，避免依赖旧截图或聊天指示。",
      ],
      [
        "比较 IWIN 游戏形式",
        "先了解老虎机、真人、体育与 4D 的差异，再在实时大厅选择类别。",
      ],
      [
        "设定个人限额",
        "事先决定时间与支出上限。不要把优惠或过往结果当成增加支出的理由。",
      ],
    ],
    final: [
      "带着更清晰的信息继续",
      "阅读与下一步匹配的指南，再判断外部 IWIN 平台是否适合您。",
      "阅读注册指南",
      "浏览 IWIN 指南",
      "外部链接会离开本信息网站。请核对目标平台的条款、资格及隐私惯例。",
    ],
  },
} as const;

export function getHomeContent(locale: Locale): HomeContent {
  const c = localized[locale];
  const cta = (label: string, routeKey?: RouteKey): Cta => ({
    label,
    routeKey,
    href: routeKey ? routePath(routeKey, locale) : undefined,
  });
  const categoryKeys = ["games-slots", "games-live-casino", "games-sports", "games-4d"] as const;
  const guideKeys = [
    "guides-how-to-register",
    "guides-how-to-login",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "guides-payment-methods",
    "guides-account-security",
  ] as const;
  const clusterKeys = c.cluster[2].map((item) => item[2] as RouteKey);

  return {
    hero: {
      eyebrow: c.hero[0],
      h1: c.hero[1],
      description: c.hero[2],
      primaryCta: {
        label: c.hero[3],
        href: hasExternalUrl(SITE_CONFIG.registerUrl)
          ? SITE_CONFIG.registerUrl
          : routePath("guides-how-to-register", locale),
      },
      secondaryCta: cta(c.hero[4], "games"),
      note: c.hero[5],
    },
    aboutIwin: {
      eyebrow: c.about[0],
      title: c.about[1],
      paragraphs: [...c.about[2]],
      points: [...c.about[3]],
    },
    partnerBand: { title: c.partner[0], body: c.partner[1] },
    clusterLinks: {
      eyebrow: c.cluster[0],
      title: c.cluster[1],
      items: c.cluster[2].map((item, index) => ({
        label: item[0],
        description: item[1],
        routeKey: clusterKeys[index],
        href: routePath(clusterKeys[index], locale),
      })),
    },
    categories: {
      eyebrow: c.categories[0],
      title: c.categories[1],
      intro: c.categories[2],
      items: categoryKeys.map((key, i) => ({
        title: c.categories[i + 3][0],
        description: c.categories[i + 3][1],
        routeKey: key,
        href: routePath(key, locale),
        image: GAME_CATEGORIES[i]?.image,
      })),
    },
    whyIwin: {
      eyebrow: c.why[0],
      title: c.why[1],
      features: [2, 3, 4, 5].map((i) => ({
        title: c.why[i][0],
        description: c.why[i][1],
      })),
    },
    providers: {
      eyebrow: c.providers[0],
      title: c.providers[1],
      intro: c.providers[2],
      cta: cta(c.providers[3], "game-providers"),
    },
    promotions: {
      eyebrow: c.promo[0],
      title: c.promo[1],
      description: c.promo[2],
      conditions: [...c.promo[3]],
      cta: cta(c.promo[4], "promotions-free-credit"),
    },
    guides: {
      eyebrow: c.guides[0],
      title: c.guides[1],
      description: c.guides[2],
      items: guideKeys.map((key, i) => ({
        title: c.guides[i + 3][0],
        description: c.guides[i + 3][1],
        routeKey: key,
        href: routePath(key, locale),
      })),
      cta: cta(c.guides[9], "guides"),
    },
    agent: {
      eyebrow: c.agent[0],
      title: c.agent[1],
      description: c.agent[2],
      points: [...c.agent[3]],
      cta: cta(c.agent[4], "agent"),
    },
    faq: {
      eyebrow: c.faq[0],
      title: c.faq[1],
      items: getHomeFaqs(locale),
      cta: cta(c.faq[2], "faqs"),
    },
    responsibleBand: {
      title: c.responsible[0],
      description: c.responsible[1],
      cta: cta(c.responsible[2], "responsible-gaming"),
    },
    getStarted: {
      eyebrow: c.start[0],
      title: c.start[1],
      description: c.start[2],
      steps: [3, 4, 5, 6].map((i) => ({
        title: c.start[i][0],
        description: c.start[i][1],
      })),
    },
    finalCta: {
      title: c.final[0],
      description: c.final[1],
      primaryCta: cta(c.final[2], "guides-how-to-register"),
      secondaryCta: cta(c.final[3], "guides"),
      disclosure: c.final[4],
    },
  };
}
