import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { getHomeFaqs, type FaqItem } from "./faq";

type Cta = { label: string; routeKey?: RouteKey; href?: string };
type Feature = { title: string; description: string };
type Card = Feature & { routeKey: RouteKey; href: string; image?: string };

export type HomeContent = {
  hero: { eyebrow: string; h1: string; description: string; primaryCta: Cta; secondaryCta: Cta; note: string };
  partnerBand: { title: string; body: string };
  categories: { eyebrow: string; title: string; intro: string; items: Card[] };
  whyIwin: { eyebrow: string; title: string; features: Feature[] };
  providers: { eyebrow: string; title: string; intro: string; cta: Cta };
  promotions: { eyebrow: string; title: string; description: string; conditions: string[]; cta: Cta };
  guides: { eyebrow: string; title: string; description: string; items: Card[]; cta: Cta };
  agent: { eyebrow: string; title: string; description: string; points: string[]; cta: Cta };
  faq: { eyebrow: string; title: string; items: FaqItem[]; cta: Cta };
  responsibleBand: { title: string; description: string; cta: Cta };
  finalCta: { title: string; description: string; primaryCta: Cta; secondaryCta: Cta; disclosure: string };
};

const localized = {
  en: {
    hero: ["IWIN Malaysia Official Partner", "Clear information before you visit IWIN", "Explore games, account guides, promotion conditions and partner-program information in one independent, practical resource.", "Read the registration guide", "Browse games", "This is an official partner information website, not the gambling operator. External-platform terms apply."],
    partner: ["Know where you are going", "IWIN Malaysia explains the IWIN ecosystem and directs eligible adults to relevant external pages. We do not run games, hold balances, approve withdrawals or make licensing claims."],
    categories: ["Game overview", "Explore by category", "Understand the format and common considerations before choosing any game.", ["Slots", "Game-led reels with varying rules, features and volatility."], ["Live Casino", "Dealer-streamed table formats that depend on live schedules and connections."], ["Sports", "Pre-match and in-play markets where odds and settlement rules matter."], ["4D", "Number-selection formats with draw times and prize rules set by the platform."]],
    why: ["Why use this guide", "Information designed for better decisions", ["Partner role explained", "Clear boundaries between this information website and the external operator."], ["Conditions in plain language", "Turnover, eligibility and account concepts explained without guaranteed outcomes."], ["Three useful languages", "Natural English, Bahasa Malaysia and Simplified Chinese content."], ["Safer-play reminders", "Practical prompts for limits, account security and responsible play."]],
    providers: ["Game references", "Providers and game names", "See names referenced in the IWIN gaming ecosystem, including 918Kiss, JILI, JDB and Pragmatic Play. Listings do not assert direct partnerships or permanent availability.", "View provider references"],
    promo: ["Promotion information", "Understand the RM10 free-credit conditions", "Source information describes a possible RM10 credit for eligible new registrations through the official partner site.", ["Daily quota applies", "5x turnover applies (RM10 means RM50 qualifying turnover)", "One claim per mobile number", "Non-transferable and not guaranteed"], "Read all conditions"],
    guides: ["Step-by-step help", "Start with the essentials", "Prepare accurate details, protect your credentials and understand each external-platform action.", ["How to register", "What to prepare and what to check on the external form."], ["How to deposit", "Bank binding, name matching and payment checks."], ["How to withdraw", "Turnover, verification and transaction-reference checks."], "See all guides"],
    agent: ["Partner information", "Considering the agent programme?", "Platform information describes free agent registration and turnover-based referral commissions. Confirm current rates and rules in the agent dashboard; no income is promised.", ["Joining is described as free", "Commissions may depend on valid referred-player turnover", "Rates, eligibility and adjustments can change"], "Explore agent information"],
    faq: ["Quick answers", "Common questions, answered carefully", "View all FAQs"],
    responsible: ["Keep play within your limits", "Gaming is entertainment with a real risk of loss. Set time and spending limits, never borrow to play, and take a break when needed.", "Responsible gaming guidance"],
    final: ["Ready to continue?", "Read the guides first, then decide whether an external IWIN platform is appropriate for you.", "Visit external platform", "Explore guides", "You may leave this information website. Check destination terms, eligibility and privacy practices."],
  },
  ms: {
    hero: ["Rakan Rasmi IWIN Malaysia", "Maklumat jelas sebelum anda melawati IWIN", "Terokai permainan, panduan akaun, syarat promosi dan maklumat program rakan dalam satu sumber praktikal.", "Baca panduan pendaftaran", "Lihat permainan", "Ini laman maklumat rakan rasmi, bukan pengendali perjudian. Terma platform luar terpakai."],
    partner: ["Ketahui destinasi anda", "IWIN Malaysia menerangkan ekosistem IWIN dan mengarahkan orang dewasa yang layak ke halaman luar berkaitan. Kami tidak mengendalikan permainan, menyimpan baki, meluluskan pengeluaran atau mendakwa lesen."],
    categories: ["Gambaran permainan", "Terokai mengikut kategori", "Fahami format dan pertimbangan umum sebelum memilih permainan.", ["Slot", "Gelendong berasaskan permainan dengan peraturan, ciri dan turun naik berbeza."], ["Kasino Langsung", "Permainan meja distrim dengan jadual langsung dan keperluan sambungan."], ["Sukan", "Pasaran pra-perlawanan dan langsung yang memerlukan perhatian pada odds dan penyelesaian."], ["4D", "Format pilihan nombor dengan masa cabutan dan peraturan hadiah platform."]],
    why: ["Mengapa guna panduan ini", "Maklumat untuk keputusan lebih baik", ["Peranan rakan diterangkan", "Sempadan jelas antara laman maklumat dan pengendali luar."], ["Syarat dalam bahasa mudah", "Pusing ganti, kelayakan dan akaun diterangkan tanpa hasil terjamin."], ["Tiga bahasa berguna", "Kandungan semula jadi dalam English, Bahasa Malaysia dan 中文."], ["Peringatan permainan selamat", "Cadangan praktikal tentang had, keselamatan akaun dan permainan bertanggungjawab."]],
    providers: ["Rujukan permainan", "Penyedia dan nama permainan", "Lihat nama yang dirujuk dalam ekosistem IWIN termasuk 918Kiss, JILI, JDB dan Pragmatic Play. Senarai tidak mendakwa perkongsian langsung atau ketersediaan kekal.", "Lihat rujukan penyedia"],
    promo: ["Maklumat promosi", "Fahami syarat kredit percuma RM10", "Maklumat sumber menerangkan kemungkinan kredit RM10 bagi pendaftaran baharu yang layak melalui laman rakan rasmi.", ["Tertakluk pada kuota harian", "Pusing ganti 5x (RM10 bermaksud pusing ganti layak RM50)", "Satu tuntutan setiap nombor mudah alih", "Tidak boleh dipindah dan tidak dijamin"], "Baca semua syarat"],
    guides: ["Bantuan langkah demi langkah", "Mulakan dengan perkara asas", "Sediakan maklumat tepat, lindungi kelayakan log masuk dan fahami setiap tindakan di platform luar.", ["Cara mendaftar", "Persediaan dan semakan pada borang luar."], ["Cara membuat deposit", "Pengikatan bank, padanan nama dan semakan pembayaran."], ["Cara membuat pengeluaran", "Pusing ganti, pengesahan dan rujukan transaksi."], "Lihat semua panduan"],
    agent: ["Maklumat rakan", "Mempertimbangkan program ejen?", "Maklumat platform menerangkan pendaftaran ejen percuma dan komisen rujukan berasaskan pusing ganti. Sahkan kadar serta peraturan dalam papan pemuka; pendapatan tidak dijanjikan.", ["Penyertaan diterangkan sebagai percuma", "Komisen mungkin bergantung pada pusing ganti sah pemain dirujuk", "Kadar, kelayakan dan pelarasan boleh berubah"], "Terokai maklumat ejen"],
    faq: ["Jawapan pantas", "Soalan lazim, dijawab dengan teliti", "Lihat semua soalan"],
    responsible: ["Pastikan permainan dalam had", "Permainan ialah hiburan dengan risiko kerugian sebenar. Tetapkan had masa dan belanja, jangan meminjam untuk bermain dan berehat apabila perlu.", "Panduan permainan bertanggungjawab"],
    final: ["Bersedia untuk meneruskan?", "Baca panduan dahulu, kemudian tentukan sama ada platform luar IWIN sesuai untuk anda.", "Lawati platform luar", "Terokai panduan", "Anda mungkin meninggalkan laman maklumat ini. Semak terma, kelayakan dan privasi destinasi."],
  },
  zh: {
    hero: ["IWIN Malaysia 官方合作伙伴", "前往 IWIN 前，先了解清楚", "在一个实用信息站内了解游戏、账户指南、优惠条件及合作伙伴计划。", "阅读注册指南", "浏览游戏", "本站是官方合作伙伴信息网站，并非博彩运营商。外部平台条款适用。"],
    partner: ["清楚了解您的去向", "IWIN Malaysia 介绍 IWIN 生态，并引导符合资格的成年人前往相关外部页面。本站不经营游戏、不持有余额、不批准提款，也不作牌照声明。"],
    categories: ["游戏概览", "按类别探索", "选择游戏前，先了解玩法形式与常见注意事项。", ["老虎机", "不同规则、功能及波动特点的转轴游戏。"], ["真人娱乐场", "由荷官直播的桌面游戏，受直播时段及网络影响。"], ["体育", "赛前与滚球盘口，须留意赔率及结算规则。"], ["4D", "数字选择形式，开奖时间及奖金规则由平台制定。"]],
    why: ["为何使用本指南", "帮助您作出更明智决定", ["合作伙伴角色清晰", "明确区分本信息网站与外部运营平台。"], ["条件浅白说明", "解释流水、资格及账户概念，不保证任何结果。"], ["三种实用语言", "提供自然的 English、Bahasa Malaysia 与简体中文。"], ["健康游戏提醒", "提供限额、账户安全及负责任游戏建议。"]],
    providers: ["游戏参考", "提供商与游戏名称", "查看 IWIN 游戏生态中提及的 918Kiss、JILI、JDB、Pragmatic Play 等名称。列出不代表直接合作或永久提供。", "查看提供商参考"],
    promo: ["优惠信息", "了解 RM10 免费彩金条件", "来源资料说明，符合资格并通过官方合作伙伴网站新注册者可能获得 RM10 彩金。", ["受每日名额限制", "须完成5倍流水（RM10 即 RM50 合资格流水）", "每个手机号限一次", "不可转让且不保证获得"], "查看完整条件"],
    guides: ["分步帮助", "从基本操作开始", "准备准确资料、保护登录信息，并了解每项外部平台操作。", ["如何注册", "外部表格所需准备与检查。"], ["如何存款", "银行绑定、姓名匹配及支付检查。"], ["如何提款", "流水、验证与交易编号检查。"], "查看所有指南"],
    agent: ["合作伙伴信息", "考虑加入代理计划？", "平台资料称代理注册免费，推荐佣金可能按流水计算。请在代理后台确认当前费率与规则；本站不承诺收入。", ["加入被描述为免费", "佣金可能取决于被推荐玩家的有效流水", "费率、资格及调整规则可能改变"], "了解代理信息"],
    faq: ["快速解答", "谨慎回答常见问题", "查看所有常见问题"],
    responsible: ["让游戏保持在限度内", "游戏是有真实亏损风险的娱乐。设定时间和支出限额，切勿借钱游戏，并在需要时休息。", "负责任游戏指南"],
    final: ["准备继续？", "先阅读指南，再判断外部 IWIN 平台是否适合您。", "前往外部平台", "浏览指南", "您可能会离开本信息网站。请核对目标平台的条款、资格及隐私惯例。"],
  },
} as const;

export function getHomeContent(locale: Locale): HomeContent {
  const c = localized[locale];
  const cta = (label: string, routeKey?: RouteKey): Cta => ({ label, routeKey, href: routeKey ? routePath(routeKey, locale) : undefined });
  const categoryKeys = ["games-slots", "games-live-casino", "games-sports", "games-4d"] as const;
  const categoryImages = ["/images/games/slots.webp", "/images/games/live-casino.webp", "/images/games/sports.webp", "/images/games/4d.webp"];
  const guideKeys = ["guides-how-to-register", "guides-how-to-deposit", "guides-how-to-withdraw"] as const;
  return {
    hero: { eyebrow: c.hero[0], h1: c.hero[1], description: c.hero[2], primaryCta: cta(c.hero[3], "guides-how-to-register"), secondaryCta: cta(c.hero[4], "games"), note: c.hero[5] },
    partnerBand: { title: c.partner[0], body: c.partner[1] },
    categories: { eyebrow: c.categories[0], title: c.categories[1], intro: c.categories[2], items: categoryKeys.map((key, i) => ({ title: c.categories[i + 3][0], description: c.categories[i + 3][1], routeKey: key, href: routePath(key, locale), image: categoryImages[i] })) },
    whyIwin: { eyebrow: c.why[0], title: c.why[1], features: [2, 3, 4, 5].map((i) => ({ title: c.why[i][0], description: c.why[i][1] })) },
    providers: { eyebrow: c.providers[0], title: c.providers[1], intro: c.providers[2], cta: cta(c.providers[3], "game-providers") },
    promotions: { eyebrow: c.promo[0], title: c.promo[1], description: c.promo[2], conditions: [...c.promo[3]], cta: cta(c.promo[4], "promotions-free-credit") },
    guides: { eyebrow: c.guides[0], title: c.guides[1], description: c.guides[2], items: guideKeys.map((key, i) => ({ title: c.guides[i + 3][0], description: c.guides[i + 3][1], routeKey: key, href: routePath(key, locale) })), cta: cta(c.guides[6], "guides") },
    agent: { eyebrow: c.agent[0], title: c.agent[1], description: c.agent[2], points: [...c.agent[3]], cta: cta(c.agent[4], "agent") },
    faq: { eyebrow: c.faq[0], title: c.faq[1], items: getHomeFaqs(locale), cta: cta(c.faq[2], "faqs") },
    responsibleBand: { title: c.responsible[0], description: c.responsible[1], cta: cta(c.responsible[2], "responsible-gaming") },
    finalCta: { title: c.final[0], description: c.final[1], primaryCta: cta(c.final[2]), secondaryCta: cta(c.final[3], "guides"), disclosure: c.final[4] },
  };
}
