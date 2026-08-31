import type { Locale, RouteKey } from "@/lib/i18n/config";

export type RouteSeo = { title: string; description: string };

const en: Record<RouteKey, RouteSeo> = {
  home: {
    title: "IWIN Malaysia Official Partner | IWIN Games, Promotions & Guides",
    description:
      "Authoritative IWIN Malaysia information on games, promotions, registration, payments, agent resources and responsible gaming — with clear external-platform boundaries.",
  },
  "about-iwin": {
    title: "About IWIN Malaysia | Official Partner Information Website",
    description:
      "Understand what IWIN is, what this official partner information website provides, and how it differs from the external gaming platform.",
  },
  "official-partner": { title: "IWIN Malaysia Official Partner | Platform & Partner Information", description: "Learn what an IWIN official partner information website does, what it does not do and how external links are handled." },
  games: {
    title: "IWIN Malaysia Games & Game Categories | IWIN Official Partner",
    description:
      "Compare IWIN slots, live casino, sports and 4D formats with practical guidance, provider references and links to account guides.",
  },
  "games-slots": {
    title: "IWIN Slots Guide | Features, Volatility & Safer Play",
    description:
      "Learn how IWIN slot games work, what to check in the paytable, and responsible-play considerations before visiting the external platform.",
  },
  "games-live-casino": { title: "IWIN Malaysia Live Casino | Games & Guide", description: "Understand live dealer formats, connection needs, table rules and responsible limits." },
  "games-sports": { title: "IWIN Malaysia Sports | Markets & Betting Guide", description: "A plain-language introduction to odds, sports markets, settlement and the risks of in-play decisions." },
  "games-4d": { title: "IWIN Malaysia 4D | Guide & Information", description: "Read how 4D number selections, draw schedules and prize rules generally work on the destination platform." },
  "game-providers": { title: "Games and Providers Referenced by IWIN", description: "Browse provider and game names referenced in the IWIN ecosystem without implying direct partnership or permanent availability." },
  guides: {
    title: "IWIN Guides | Registration, Login, Deposit & Withdrawal",
    description:
      "IWIN account and payment knowledge hub covering registration, login, deposits, withdrawals, mobile access and security.",
  },
  "guides-how-to-register": {
    title: "IWIN Registration Guide | How to Register",
    description:
      "Prepare your details, understand verification checks and avoid common registration mistakes before using the external IWIN platform.",
  },
  "guides-how-to-login": {
    title: "IWIN Login Guide | Access, Recovery & Security",
    description:
      "Verify the destination, protect credentials and follow safe recovery steps when logging in to the external IWIN platform.",
  },
  "guides-how-to-deposit": {
    title: "IWIN Deposit Guide | Payment & Account Checks",
    description:
      "Understand bank binding, name matching and transaction references before making a deposit on the external platform.",
  },
  "guides-how-to-withdraw": {
    title: "IWIN Withdrawal Guide | Requirements & Security",
    description:
      "Review verification, turnover conditions and transaction checks before requesting a withdrawal externally.",
  },
  "guides-payment-methods": { title: "IWIN Payment Methods Guide", description: "Compare key payment considerations and learn why account ownership and displayed instructions matter." },
  "guides-mobile": { title: "Using IWIN on Mobile", description: "Learn safer ways to access IWIN information and verify external mobile destinations or installation guidance." },
  "guides-account-security": { title: "IWIN Account Security Guide", description: "Protect passwords and OTPs, recognise suspicious requests and check external URLs carefully." },
  promotions: {
    title: "IWIN Promotions & Bonus Conditions | IWIN Malaysia",
    description:
      "Understand IWIN promotion eligibility, turnover, quotas and how to verify current bonus terms without assuming any reward is guaranteed.",
  },
  "promotions-free-credit": { title: "IWIN RM10 Free Credit Conditions", description: "Review the daily quota, new-registration, one-mobile-number, non-transferable and 5x turnover conditions." },
  "promotions-welcome": { title: "IWIN Welcome Promotion Guide", description: "A careful guide to checking current welcome-offer eligibility and terms on the external platform." },
  "promotions-bonus-guide": { title: "How to Read IWIN Bonus Terms", description: "Understand turnover, qualifying activity, caps and expiry before accepting a platform promotion." },
  agent: {
    title: "IWIN Agent Program | Referral & Commission Guide",
    description:
      "Learn about the IWIN agent programme, referral concepts and turnover-based commission information without income promises.",
  },
  "partner-program": { title: "IWIN Partner Programme Guide", description: "Understand partner registration, dashboard checks, referrals and compliance expectations." },
  "affiliate-guide": { title: "IWIN Affiliate Information Guide", description: "Practical guidance for transparent IWIN content, responsible referrals and accurate promotion wording." },
  "referral-guide": { title: "IWIN Referral Guide", description: "Learn how referral attribution and turnover-based commission information may work and what to verify." },
  "partner-faq": { title: "IWIN Partner and Agent FAQ", description: "Answers about agent joining, dashboard rates, referral activity and responsible promotion." },
  faqs: {
    title: "IWIN FAQ | Common Questions About IWIN Malaysia",
    description:
      "Answers about IWIN registration, login, deposits, withdrawals, promotions, games, agents, security and external-platform boundaries.",
  },
  contact: { title: "Contact IWIN Malaysia Partner Information", description: "Find the right support route and understand which matters must be handled by the external platform." },
  "responsible-gaming": { title: "Responsible Gaming Information", description: "Set time and spending limits, recognise warning signs and find practical steps for taking a break." },
  terms: { title: "Website Terms of Use", description: "Read the terms for using this IWIN Malaysia official partner information website." },
  "privacy-policy": { title: "Privacy Policy", description: "Learn what information this website may receive and how external-platform privacy practices remain separate." },
  disclaimer: { title: "Information Website Disclaimer", description: "Understand content limits, external links, promotion variability and the absence of payout or income guarantees." },
};

const ms: Record<RouteKey, RouteSeo> = {
  home: {
    title: "Rakan Rasmi IWIN Malaysia | Permainan, Promosi & Panduan IWIN",
    description:
      "Maklumat IWIN Malaysia tentang permainan, promosi, pendaftaran, bayaran, ejen dan permainan bertanggungjawab dengan sempadan platform luar yang jelas.",
  },
  "about-iwin": { title: "Tentang IWIN Malaysia", description: "Fahami ekosistem IWIN dan peranan terhad laman maklumat rakan rasmi Malaysia ini." },
  "official-partner": { title: "Laman Rakan Rasmi IWIN Diterangkan", description: "Ketahui fungsi laman maklumat rakan rasmi IWIN, batasnya dan cara pautan luar dikendalikan." },
  games: {
    title: "Permainan IWIN Malaysia & Kategori | Rakan Rasmi IWIN",
    description:
      "Bandingkan slot, kasino langsung, sukan dan 4D IWIN dengan panduan praktikal, rujukan penyedia dan pautan ke panduan akaun.",
  },
  "games-slots": { title: "Maklumat Slot IWIN", description: "Pelajari ciri slot, konsep turun naik dan semakan permainan selamat sebelum ke platform luar." },
  "games-live-casino": { title: "Panduan Kasino Langsung IWIN", description: "Fahami format pengurus langsung, keperluan sambungan, peraturan meja dan had bertanggungjawab." },
  "games-sports": { title: "Maklumat Sukan IWIN", description: "Pengenalan mudah kepada odds, pasaran sukan, penyelesaian dan risiko keputusan langsung." },
  "games-4d": { title: "Panduan Permainan 4D IWIN", description: "Baca cara pilihan nombor, jadual cabutan dan peraturan hadiah 4D biasanya berfungsi." },
  "game-providers": { title: "Permainan dan Penyedia Rujukan IWIN", description: "Lihat nama dalam ekosistem IWIN tanpa membayangkan perkongsian langsung atau ketersediaan kekal." },
  guides: {
    title: "Panduan IWIN | Pendaftaran, Log Masuk, Deposit & Pengeluaran",
    description:
      "Hab pengetahuan akaun dan bayaran IWIN merangkumi pendaftaran, log masuk, deposit, pengeluaran, mudah alih dan keselamatan.",
  },
  "guides-how-to-register": { title: "Cara Mendaftar IWIN", description: "Sediakan nombor mudah alih, ID akaun dan maklumat tepat sebelum mendaftar di platform luar." },
  "guides-how-to-login": { title: "Cara Log Masuk IWIN", description: "Ikuti langkah log masuk, pemulihan kata laluan dan pengesahan destinasi." },
  "guides-how-to-deposit": { title: "Cara Deposit IWIN Berfungsi", description: "Fahami pengikatan bank, padanan nama dan semakan bayaran di platform luar." },
  "guides-how-to-withdraw": { title: "Cara Pengeluaran IWIN Berfungsi", description: "Semak pengesahan, pusing ganti dan rujukan transaksi sebelum memohon pengeluaran." },
  "guides-payment-methods": { title: "Panduan Kaedah Bayaran IWIN", description: "Bandingkan pertimbangan bayaran dan kepentingan pemilikan akaun serta arahan semasa." },
  "guides-mobile": { title: "Menggunakan IWIN pada Mudah Alih", description: "Akses maklumat dengan lebih selamat dan sahkan destinasi atau panduan pemasangan luar." },
  "guides-account-security": { title: "Panduan Keselamatan Akaun IWIN", description: "Lindungi kata laluan dan OTP, kenali permintaan mencurigakan serta semak URL luar." },
  promotions: {
    title: "Promosi IWIN & Syarat Bonus | IWIN Malaysia",
    description:
      "Fahami kelayakan promosi IWIN, pusing ganti, kuota dan cara mengesahkan terma bonus semasa tanpa menganggap ganjaran terjamin.",
  },
  "promotions-free-credit": { title: "Syarat Kredit Percuma RM10 IWIN", description: "Semak kuota harian, pendaftaran baharu, satu nombor mudah alih, tidak boleh pindah dan pusing ganti 5x." },
  "promotions-welcome": { title: "Panduan Promosi Alu-aluan IWIN", description: "Panduan teliti untuk menyemak kelayakan dan terma tawaran alu-aluan semasa." },
  "promotions-bonus-guide": { title: "Cara Membaca Terma Bonus IWIN", description: "Fahami pusing ganti, aktiviti layak, had dan tamat tempoh sebelum menerima promosi." },
  agent: {
    title: "Program Ejen IWIN | Panduan Rujukan & Komisen",
    description:
      "Ketahui program ejen IWIN, konsep rujukan dan maklumat komisen berasaskan pusing ganti tanpa janji pendapatan.",
  },
  "partner-program": { title: "Panduan Program Rakan IWIN", description: "Fahami pendaftaran rakan, semakan papan pemuka, rujukan dan jangkaan pematuhan." },
  "affiliate-guide": { title: "Panduan Maklumat Afiliasi IWIN", description: "Panduan kandungan telus, rujukan bertanggungjawab dan kata-kata promosi tepat." },
  "referral-guide": { title: "Panduan Rujukan IWIN", description: "Ketahui kemungkinan cara atribusi dan komisen berdasarkan pusing ganti serta perkara untuk disahkan." },
  "partner-faq": { title: "Soalan Lazim Rakan dan Ejen IWIN", description: "Jawapan tentang penyertaan, kadar papan pemuka, aktiviti rujukan dan promosi bertanggungjawab." },
  faqs: {
    title: "Soalan Lazim IWIN | Soalan Umum IWIN Malaysia",
    description:
      "Jawapan tentang pendaftaran, log masuk, deposit, pengeluaran, promosi, permainan, ejen, keselamatan dan sempadan platform luar IWIN.",
  },
  contact: { title: "Hubungi Maklumat Rakan IWIN Malaysia", description: "Cari saluran sokongan yang betul dan perkara yang mesti dikendalikan oleh platform luar." },
  "responsible-gaming": { title: "Maklumat Permainan Bertanggungjawab", description: "Tetapkan had masa dan belanja, kenali tanda amaran dan ambil langkah praktikal untuk berehat." },
  terms: { title: "Terma Penggunaan Laman", description: "Baca terma penggunaan laman maklumat rakan rasmi IWIN Malaysia ini." },
  "privacy-policy": { title: "Dasar Privasi", description: "Ketahui maklumat yang mungkin diterima laman ini dan pemisahan amalan privasi platform luar." },
  disclaimer: { title: "Penafian Laman Maklumat", description: "Fahami batas kandungan, pautan luar, perubahan promosi dan ketiadaan jaminan bayaran atau pendapatan." },
};

const zh: Record<RouteKey, RouteSeo> = {
  home: {
    title: "IWIN Malaysia 官方合作伙伴 | IWIN 游戏、优惠与指南",
    description:
      "IWIN Malaysia 游戏、优惠、注册、支付、代理与负责任游戏信息，并清楚说明外部平台边界。",
  },
  "about-iwin": { title: "关于 IWIN Malaysia", description: "了解 IWIN 生态以及本马来西亚官方合作伙伴信息网站的有限角色。" },
  "official-partner": { title: "IWIN 官方合作伙伴网站说明", description: "了解官方合作伙伴信息网站的功能、边界及外部链接处理方式。" },
  games: {
    title: "IWIN Malaysia 游戏与类别 | IWIN 官方合作伙伴",
    description:
      "比较 IWIN 老虎机、真人、体育与 4D，并提供实用说明、提供商参考及账户指南链接。",
  },
  "games-slots": { title: "IWIN 老虎机信息", description: "前往外部平台前，了解常见功能、波动概念及健康游戏检查。" },
  "games-live-casino": { title: "IWIN 真人娱乐场指南", description: "了解真人荷官形式、网络要求、桌面规则及负责任限额。" },
  "games-sports": { title: "IWIN 体育信息", description: "浅白介绍赔率、体育盘口、结算及滚球决定的风险。" },
  "games-4d": { title: "IWIN 4D 游戏指南", description: "了解外部平台通常如何设置 4D 选号、开奖时段及奖金规则。" },
  "game-providers": { title: "IWIN 提及的游戏与提供商", description: "浏览 IWIN 生态中的名称，不暗示直接合作或永久提供。" },
  guides: {
    title: "IWIN 指南 | 注册、登录、存款与提款",
    description:
      "IWIN 账户与支付知识中心，涵盖注册、登录、存款、提款、移动访问与安全。",
  },
  "guides-how-to-register": { title: "如何注册 IWIN", description: "在外部平台注册前，准备手机号、账户 ID 及准确资料。" },
  "guides-how-to-login": { title: "如何登录 IWIN", description: "按照实用步骤登录、找回密码并核实目标网址。" },
  "guides-how-to-deposit": { title: "IWIN 存款操作说明", description: "在外部平台操作前了解银行绑定、姓名匹配及支付检查。" },
  "guides-how-to-withdraw": { title: "IWIN 提款操作说明", description: "申请提款前检查验证、流水要求及交易编号。" },
  "guides-payment-methods": { title: "IWIN 支付方式指南", description: "比较主要支付注意事项，了解账户所有权及页面指示的重要性。" },
  "guides-mobile": { title: "在移动设备使用 IWIN", description: "了解较安全的访问方式，并核实外部移动网址或安装指引。" },
  "guides-account-security": { title: "IWIN 账户安全指南", description: "保护密码及 OTP、识别可疑请求并仔细检查外部网址。" },
  promotions: {
    title: "IWIN 优惠与奖励条件 | IWIN Malaysia",
    description:
      "了解 IWIN 优惠资格、流水、名额及如何核实当前奖励条款，不假定任何奖励必定获得。",
  },
  "promotions-free-credit": { title: "IWIN RM10 免费彩金条件", description: "查看每日名额、新注册、每个手机号一次、不可转让及5倍流水条件。" },
  "promotions-welcome": { title: "IWIN 欢迎优惠指南", description: "谨慎核对外部平台当前欢迎优惠的资格与条款。" },
  "promotions-bonus-guide": { title: "如何阅读 IWIN 奖励条款", description: "接受平台优惠前，了解流水、合资格活动、上限及有效期。" },
  agent: {
    title: "IWIN 代理计划 | 推荐与佣金指南",
    description:
      "了解 IWIN 代理计划、推荐概念及按流水计算的佣金信息，不承诺收入。",
  },
  "partner-program": { title: "IWIN 合作伙伴计划指南", description: "了解合作伙伴注册、后台检查、推荐及合规要求。" },
  "affiliate-guide": { title: "IWIN 推广信息指南", description: "透明内容、负责任推荐及准确优惠措辞的实用指南。" },
  "referral-guide": { title: "IWIN 推荐指南", description: "了解推荐归因及流水佣金信息可能如何运作，以及须核实的事项。" },
  "partner-faq": { title: "IWIN 合作伙伴与代理常见问题", description: "解答加入代理、后台费率、推荐活动及负责任推广问题。" },
  faqs: {
    title: "IWIN 常见问题 | IWIN Malaysia 问答",
    description:
      "解答 IWIN 注册、登录、存款、提款、优惠、游戏、代理、安全及外部平台边界相关问题。",
  },
  contact: { title: "联系 IWIN Malaysia 合作伙伴信息站", description: "找到正确支持渠道，并了解哪些事项必须由外部平台处理。" },
  "responsible-gaming": { title: "负责任游戏信息", description: "设定时间与支出限额、识别警示信号，并采取实际步骤暂停游戏。" },
  terms: { title: "网站使用条款", description: "阅读本 IWIN Malaysia 官方合作伙伴信息网站的使用条款。" },
  "privacy-policy": { title: "隐私政策", description: "了解本网站可能收到的信息，以及外部平台独立的隐私惯例。" },
  disclaimer: { title: "信息网站免责声明", description: "了解内容限制、外部链接、优惠变动，以及本站不保证提款或收入。" },
};

const seoByLocale: Record<Locale, Record<RouteKey, RouteSeo>> = { en, ms, zh };

export function getRouteSeo(locale: Locale, key: RouteKey): RouteSeo {
  return seoByLocale[locale][key];
}
