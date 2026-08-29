import type { Locale, RouteKey } from "@/lib/i18n/config";
import { getRouteSeo } from "./seo";

export type PageId = Exclude<RouteKey, "home" | "faqs">;
export type PageSection = {
  title: string;
  body?: string[];
  steps?: string[];
  bullets?: string[];
  table?: { label: string; value: string }[];
};
export type PageContent = {
  eyebrow?: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  related?: { key: RouteKey; label: string }[];
};

type Seed = { h1: string; intro: string };

const seeds: Record<Locale, Record<PageId, Seed>> = {
  en: {
    "about-iwin": { h1: "About IWIN Malaysia", intro: "IWIN Malaysia is an official partner information website that helps adults understand the IWIN ecosystem before following an external link." },
    "official-partner": { h1: "What “Official Partner” Means Here", intro: "Our role is to publish practical information and provide clearly disclosed links; we are not the gambling operator." },
    games: { h1: "IWIN Game Categories", intro: "Compare the main game formats referenced in the IWIN ecosystem, then review rules and limits before playing." },
    "games-slots": { h1: "Slots Information", intro: "Slots use digital reels, paytables and feature rules that differ by game; outcomes are uncertain and losses are possible." },
    "games-live-casino": { h1: "Live Casino Information", intro: "Live casino games stream table action with a dealer and require attention to table rules, timing and connection quality." },
    "games-sports": { h1: "Sports Information", intro: "Sports markets use changing odds and settlement rules; familiarity with a sport does not remove financial risk." },
    "games-4d": { h1: "4D Information", intro: "4D formats involve number selections and scheduled draws, with entry and prize rules shown by the external platform." },
    "game-providers": { h1: "Provider and Game References", intro: "These names are referenced in the IWIN gaming ecosystem and are presented for orientation, not as claims of direct partnership." },
    guides: { h1: "IWIN Guides", intro: "Use these step-by-step guides to prepare accurate details, understand external-platform actions and protect your account." },
    "guides-how-to-register": { h1: "How to Register", intro: "Prepare your own mobile number and accurate details before opening the external registration form." },
    "guides-how-to-login": { h1: "How to Log In", intro: "Verify the destination, enter the exact account ID and keep passwords and one-time codes private." },
    "guides-how-to-deposit": { h1: "How to Make a Deposit", intro: "Deposits occur on the external platform, not this information website; follow the payment instructions shown there." },
    "guides-how-to-withdraw": { h1: "How to Request a Withdrawal", intro: "Check account verification, bound-bank details and applicable turnover before submitting an external request." },
    "guides-payment-methods": { h1: "Payment Methods Guide", intro: "Payment options can change. Use only an account you control and rely on the current instructions displayed by the platform." },
    "guides-mobile": { h1: "Mobile Access Guide", intro: "Access information safely on mobile and inspect any destination or installation instruction before proceeding." },
    "guides-account-security": { h1: "Account Security Guide", intro: "Simple habits can reduce credential theft, impersonation and payment mistakes." },
    promotions: { h1: "IWIN Promotions Information", intro: "Promotions are conditional offers, not guaranteed value. Always check eligibility, turnover, quota and expiry." },
    "promotions-free-credit": { h1: "RM10 Free Credit Information", intro: "Source information describes a limited RM10 credit for eligible new registrations through the official partner site." },
    "promotions-welcome": { h1: "Welcome Promotion Guide", intro: "A welcome label does not establish eligibility; the current external-platform terms determine whether an offer applies." },
    "promotions-bonus-guide": { h1: "How to Read Bonus Terms", intro: "Read the complete conditions before accepting a bonus so that turnover, exclusions and expiry are understood." },
    agent: { h1: "IWIN Agent Information", intro: "Platform information describes free agent registration and possible referral commissions based on referred-player turnover." },
    "partner-program": { h1: "Partner Programme", intro: "Understand the partner journey, dashboard checks and responsible communication before sharing a referral link." },
    "affiliate-guide": { h1: "Affiliate Content Guide", intro: "Publish accurate, age-appropriate information and disclose the commercial nature of referral links." },
    "referral-guide": { h1: "Referral Guide", intro: "Referral attribution and commission treatment are controlled by current platform rules and dashboard records." },
    "partner-faq": { h1: "Partner and Agent Questions", intro: "Straight answers about joining, referrals, commissions and the limits of this information website." },
    contact: { h1: "Contact and Support", intro: "Choose the right channel: this site can clarify published information, while account and transaction matters belong to the external platform." },
    "responsible-gaming": { h1: "Responsible Gaming", intro: "Gaming should remain optional entertainment within limits you can afford; it is never a way to solve financial problems." },
    terms: { h1: "Website Terms of Use", intro: "These terms govern use of this IWIN Malaysia official partner information website, not any external gaming account." },
    "privacy-policy": { h1: "Privacy Policy", intro: "This notice explains privacy considerations for this information website without describing external platforms as if we controlled them." },
    disclaimer: { h1: "Disclaimer", intro: "Content is general information. Promotions, games and external-platform procedures can change without this website controlling them." },
  },
  ms: {
    "about-iwin": { h1: "Tentang IWIN Malaysia", intro: "IWIN Malaysia ialah laman maklumat rakan rasmi yang membantu orang dewasa memahami ekosistem IWIN sebelum mengikuti pautan luar." },
    "official-partner": { h1: "Maksud “Rakan Rasmi” di Sini", intro: "Peranan kami ialah menerbitkan maklumat praktikal dan pautan dengan pendedahan jelas; kami bukan pengendali perjudian." },
    games: { h1: "Kategori Permainan IWIN", intro: "Bandingkan format permainan utama dalam ekosistem IWIN, kemudian semak peraturan dan had sebelum bermain." },
    "games-slots": { h1: "Maklumat Slot", intro: "Slot menggunakan gelendong digital, jadual bayaran dan peraturan ciri yang berbeza; keputusan tidak menentu dan kerugian boleh berlaku." },
    "games-live-casino": { h1: "Maklumat Kasino Langsung", intro: "Permainan ini menstrim meja bersama pengurus langsung dan memerlukan perhatian pada peraturan, masa serta sambungan." },
    "games-sports": { h1: "Maklumat Sukan", intro: "Pasaran sukan menggunakan odds berubah dan peraturan penyelesaian; pengetahuan sukan tidak menghapuskan risiko kewangan." },
    "games-4d": { h1: "Maklumat 4D", intro: "Format 4D melibatkan pilihan nombor dan cabutan berjadual dengan peraturan penyertaan serta hadiah platform luar." },
    "game-providers": { h1: "Rujukan Penyedia dan Permainan", intro: "Nama ini dirujuk dalam ekosistem IWIN untuk orientasi, bukan sebagai dakwaan perkongsian langsung." },
    guides: { h1: "Panduan IWIN", intro: "Gunakan panduan langkah demi langkah untuk menyediakan maklumat tepat, memahami tindakan luar dan melindungi akaun." },
    "guides-how-to-register": { h1: "Cara Mendaftar", intro: "Sediakan nombor mudah alih sendiri dan butiran tepat sebelum membuka borang pendaftaran luar." },
    "guides-how-to-login": { h1: "Cara Log Masuk", intro: "Sahkan destinasi, masukkan ID akaun tepat dan rahsiakan kata laluan serta kod sekali guna." },
    "guides-how-to-deposit": { h1: "Cara Membuat Deposit", intro: "Deposit berlaku di platform luar, bukan laman maklumat ini; ikut arahan bayaran yang dipaparkan di sana." },
    "guides-how-to-withdraw": { h1: "Cara Memohon Pengeluaran", intro: "Semak pengesahan, bank terikat dan pusing ganti terpakai sebelum menghantar permohonan luar." },
    "guides-payment-methods": { h1: "Panduan Kaedah Bayaran", intro: "Pilihan bayaran boleh berubah. Gunakan akaun milik anda dan ikuti arahan semasa platform." },
    "guides-mobile": { h1: "Panduan Akses Mudah Alih", intro: "Akses maklumat dengan selamat dan semak destinasi atau arahan pemasangan sebelum meneruskan." },
    "guides-account-security": { h1: "Panduan Keselamatan Akaun", intro: "Amalan mudah boleh mengurangkan kecurian kelayakan, penyamaran dan kesilapan bayaran." },
    promotions: { h1: "Maklumat Promosi IWIN", intro: "Promosi ialah tawaran bersyarat, bukan nilai terjamin. Semak kelayakan, pusing ganti, kuota dan tamat tempoh." },
    "promotions-free-credit": { h1: "Maklumat Kredit Percuma RM10", intro: "Maklumat sumber menerangkan kredit RM10 terhad untuk pendaftaran baharu yang layak melalui laman rakan rasmi." },
    "promotions-welcome": { h1: "Panduan Promosi Alu-aluan", intro: "Label alu-aluan tidak membuktikan kelayakan; terma semasa platform luar menentukan tawaran." },
    "promotions-bonus-guide": { h1: "Cara Membaca Terma Bonus", intro: "Baca syarat lengkap sebelum menerima bonus untuk memahami pusing ganti, pengecualian dan tamat tempoh." },
    agent: { h1: "Maklumat Ejen IWIN", intro: "Maklumat platform menerangkan pendaftaran ejen percuma dan kemungkinan komisen berdasarkan pusing ganti pemain dirujuk." },
    "partner-program": { h1: "Program Rakan", intro: "Fahami proses rakan, semakan papan pemuka dan komunikasi bertanggungjawab sebelum berkongsi pautan." },
    "affiliate-guide": { h1: "Panduan Kandungan Afiliasi", intro: "Terbitkan maklumat tepat dan sesuai umur serta dedahkan sifat komersial pautan rujukan." },
    "referral-guide": { h1: "Panduan Rujukan", intro: "Atribusi rujukan dan komisen dikawal oleh peraturan semasa serta rekod papan pemuka." },
    "partner-faq": { h1: "Soalan Rakan dan Ejen", intro: "Jawapan terus tentang penyertaan, rujukan, komisen dan batas laman maklumat ini." },
    contact: { h1: "Hubungan dan Sokongan", intro: "Pilih saluran betul: laman ini menjelaskan maklumat, manakala akaun dan transaksi diurus platform luar." },
    "responsible-gaming": { h1: "Permainan Bertanggungjawab", intro: "Permainan mestilah hiburan pilihan dalam had kemampuan, bukan cara menyelesaikan masalah kewangan." },
    terms: { h1: "Terma Penggunaan Laman", intro: "Terma ini mengawal penggunaan laman maklumat rakan rasmi IWIN Malaysia, bukan akaun permainan luar." },
    "privacy-policy": { h1: "Dasar Privasi", intro: "Notis ini menerangkan privasi laman maklumat ini tanpa menggambarkan platform luar seolah-olah kami mengawalnya." },
    disclaimer: { h1: "Penafian", intro: "Kandungan ialah maklumat umum. Promosi, permainan dan prosedur platform luar boleh berubah di luar kawalan kami." },
  },
  zh: {
    "about-iwin": { h1: "关于 IWIN Malaysia", intro: "IWIN Malaysia 是官方合作伙伴信息网站，帮助成年人了解 IWIN 生态后再决定是否前往外部链接。" },
    "official-partner": { h1: "本站“官方合作伙伴”的含义", intro: "本站发布实用信息及清楚披露的链接；我们并非博彩运营商。" },
    games: { h1: "IWIN 游戏类别", intro: "比较 IWIN 生态中的主要游戏形式，游戏前请查看规则并设定限额。" },
    "games-slots": { h1: "老虎机信息", intro: "老虎机采用数字转轴、赔付表及不同功能规则；结果不确定，也可能亏损。" },
    "games-live-casino": { h1: "真人娱乐场信息", intro: "真人游戏直播荷官桌面过程，须留意桌面规则、时限及网络质量。" },
    "games-sports": { h1: "体育信息", intro: "体育盘口采用变化赔率及结算规则；熟悉赛事并不能消除财务风险。" },
    "games-4d": { h1: "4D 信息", intro: "4D 涉及选号及定期开奖，参与与奖金规则由外部平台显示。" },
    "game-providers": { h1: "提供商与游戏参考", intro: "这些名称在 IWIN 游戏生态中被提及，仅供了解，并非直接合作声明。" },
    guides: { h1: "IWIN 指南", intro: "使用分步指南准备准确资料、了解外部平台操作并保护账户。" },
    "guides-how-to-register": { h1: "如何注册", intro: "打开外部注册表格前，请准备本人手机号及准确资料。" },
    "guides-how-to-login": { h1: "如何登录", intro: "核实目标网址、输入准确账户 ID，并保密密码及一次性验证码。" },
    "guides-how-to-deposit": { h1: "如何存款", intro: "存款在外部平台进行，并非本信息网站；请遵循该处显示的支付说明。" },
    "guides-how-to-withdraw": { h1: "如何申请提款", intro: "提交外部申请前，检查账户验证、绑定银行资料及适用流水。" },
    "guides-payment-methods": { h1: "支付方式指南", intro: "支付选项可能改变。仅使用本人控制的账户，并以平台当前说明为准。" },
    "guides-mobile": { h1: "移动访问指南", intro: "安全地使用移动设备，并在继续前检查目标网址或安装说明。" },
    "guides-account-security": { h1: "账户安全指南", intro: "简单习惯有助减少凭证盗窃、冒充及支付错误。" },
    promotions: { h1: "IWIN 优惠信息", intro: "优惠是附带条件的活动，并非保证价值。务必检查资格、流水、名额及有效期。" },
    "promotions-free-credit": { h1: "RM10 免费彩金信息", intro: "来源资料说明，通过官方合作伙伴网站新注册且符合资格者可申请有限 RM10 彩金。" },
    "promotions-welcome": { h1: "欢迎优惠指南", intro: "“欢迎”标签不代表必定符合资格；是否适用由外部平台当前条款决定。" },
    "promotions-bonus-guide": { h1: "如何阅读奖励条款", intro: "接受奖励前阅读完整条件，了解流水、排除项目及有效期。" },
    agent: { h1: "IWIN 代理信息", intro: "平台资料称代理注册免费，推荐佣金可能按被推荐玩家流水计算。" },
    "partner-program": { h1: "合作伙伴计划", intro: "分享推荐链接前，了解加入流程、后台检查及负责任沟通。" },
    "affiliate-guide": { h1: "推广内容指南", intro: "发布准确、适合成年人的信息，并披露推荐链接的商业性质。" },
    "referral-guide": { h1: "推荐指南", intro: "推荐归因及佣金处理由当前平台规则和后台记录控制。" },
    "partner-faq": { h1: "合作伙伴与代理问题", intro: "直接解答加入、推荐、佣金及本信息网站角色边界。" },
    contact: { h1: "联系与支持", intro: "选择正确渠道：本站可解释所发布信息；账户及交易问题须由外部平台处理。" },
    "responsible-gaming": { h1: "负责任游戏", intro: "游戏只应是能力范围内的自愿娱乐，绝不是解决财务问题的方法。" },
    terms: { h1: "网站使用条款", intro: "本条款适用于 IWIN Malaysia 官方合作伙伴信息网站，并不管辖外部游戏账户。" },
    "privacy-policy": { h1: "隐私政策", intro: "本说明介绍信息网站的隐私事项，不把外部平台描述为由我们控制。" },
    disclaimer: { h1: "免责声明", intro: "内容仅供一般参考。优惠、游戏及外部平台程序可能变化，并非由本站控制。" },
  },
};

const text = {
  en: {
    eyebrow: "IWIN Malaysia information",
    overview: "What to know",
    detail: "Before you continue",
    overviewBody: "This page is educational and should be read together with the current information displayed by the external platform.",
    checks: ["Confirm that you are using the intended destination.", "Read current eligibility, rules, limits and fees.", "Keep records of important account or transaction references.", "Only proceed if you are 18 or older and the activity is lawful where you are."],
    guideTitle: "Numbered steps",
    guideEnd: "After completing the steps",
    guideEndBody: "Review every entry before submission. Save any reference shown and contact the external platform for account-specific help.",
    gameTitle: "How to assess this category",
    gameBody: "Rules, return characteristics and availability vary by title and provider. A previous result cannot predict the next outcome.",
    gameBullets: ["Open the rules or paytable before starting.", "Choose a spending and time limit first.", "Do not chase losses or increase stakes to recover money.", "Stop when the preset limit is reached."],
    partnerTitle: "How the programme is described",
    partnerBody: "Platform information indicates that joining as an agent is free and referral commissions may apply based on referred-player turnover. Confirm rates, eligibility and adjustments in the agent dashboard; income is not promised.",
    legalTitle: "Scope",
    externalTitle: "External platforms",
  },
  ms: {
    eyebrow: "Maklumat IWIN Malaysia",
    overview: "Perkara untuk diketahui",
    detail: "Sebelum anda meneruskan",
    overviewBody: "Halaman ini bersifat pendidikan dan perlu dibaca bersama maklumat semasa yang dipaparkan oleh platform luar.",
    checks: ["Sahkan anda menggunakan destinasi yang dimaksudkan.", "Baca kelayakan, peraturan, had dan fi semasa.", "Simpan rujukan akaun atau transaksi penting.", "Teruskan hanya jika berumur 18 tahun ke atas dan aktiviti sah di lokasi anda."],
    guideTitle: "Langkah bernombor",
    guideEnd: "Selepas melengkapkan langkah",
    guideEndBody: "Semak setiap butiran sebelum dihantar. Simpan rujukan dan hubungi platform luar untuk bantuan khusus akaun.",
    gameTitle: "Cara menilai kategori ini",
    gameBody: "Peraturan, ciri pulangan dan ketersediaan berbeza mengikut permainan serta penyedia. Keputusan lalu tidak meramal hasil seterusnya.",
    gameBullets: ["Buka peraturan atau jadual bayaran sebelum bermula.", "Tetapkan had belanja dan masa terlebih dahulu.", "Jangan kejar kerugian atau naikkan taruhan untuk mendapatkan semula wang.", "Berhenti apabila had dicapai."],
    partnerTitle: "Cara program diterangkan",
    partnerBody: "Maklumat platform menunjukkan penyertaan ejen adalah percuma dan komisen rujukan mungkin terpakai berdasarkan pusing ganti pemain dirujuk. Sahkan kadar, kelayakan dan pelarasan dalam papan pemuka; pendapatan tidak dijanjikan.",
    legalTitle: "Skop",
    externalTitle: "Platform luar",
  },
  zh: {
    eyebrow: "IWIN Malaysia 信息",
    overview: "须知事项",
    detail: "继续之前",
    overviewBody: "本页用于教育说明，应与外部平台当前显示的信息一并阅读。",
    checks: ["确认您前往的是预期目标网址。", "阅读当前资格、规则、限额及费用。", "保存重要账户或交易编号。", "仅限18岁以上且活动在您所在地合法时继续。"],
    guideTitle: "分步操作",
    guideEnd: "完成步骤后",
    guideEndBody: "提交前核对所有内容，保存页面提供的编号，并就账户问题联系外部平台。",
    gameTitle: "如何评估此类别",
    gameBody: "规则、回报特点及可用性因游戏和提供商而异。过往结果不能预测下一次结果。",
    gameBullets: ["开始前打开规则或赔付表。", "预先设定支出与时间限额。", "切勿追损或加注试图追回金钱。", "达到预设限额即停止。"],
    partnerTitle: "计划说明",
    partnerBody: "平台资料显示加入代理免费，推荐佣金可能按被推荐玩家流水计算。请在代理后台确认费率、资格及调整；本站不承诺收入。",
    legalTitle: "适用范围",
    externalTitle: "外部平台",
  },
} as const;

const guideSteps: Record<Locale, Partial<Record<PageId, string[]>>> = {
  en: {
    "guides-how-to-register": ["Open the disclosed registration link and verify the external destination.", "Enter your own mobile number and create an account ID in the exact format shown.", "Provide accurate personal details and a unique password.", "Read the platform terms and any promotion conditions before submitting.", "Save the account ID and confirmation securely."],
    "guides-how-to-login": ["Open a verified destination rather than an unsolicited message link.", "Enter the exact account ID and password.", "Complete only the verification requested on the official page.", "If access fails, use password recovery or official platform support.", "Sign out when using a shared device."],
    "guides-how-to-deposit": ["Log in to the external platform and open its current payment area.", "Review available methods, limits, timing and any displayed fee.", "Bind only a bank account you control and check the account-name match.", "Enter the amount once and verify every detail.", "Keep the platform transaction reference; do not send funds to an unverified contact."],
    "guides-how-to-withdraw": ["Check that profile and bound-bank details are accurate.", "Review balance status and any applicable promotion turnover.", "Open the external withdrawal area and read current limits.", "Enter the amount and confirm the destination account.", "Save the reference and use platform support for status questions."],
    "guides-payment-methods": ["Review the methods currently shown after login.", "Compare limits, processing information and any fees.", "Confirm the payment account belongs to you and the name matches.", "Test details carefully before authorising a transaction.", "Retain the receipt or reference."],
    "guides-mobile": ["Use an updated browser and a private connection.", "Start from a verified website and inspect the external URL.", "Do not install files from unsolicited chats or pop-ups.", "Use device locking and keep OTP notifications private.", "Log out and remove saved credentials on shared devices."],
    "guides-account-security": ["Create a unique password not used on email or banking services.", "Keep OTPs, recovery codes and passwords private.", "Verify URLs and support identities before responding.", "Review account and payment details for unexpected changes.", "Contact external-platform support promptly if compromise is suspected."],
  },
  ms: {
    "guides-how-to-register": ["Buka pautan pendaftaran yang didedahkan dan sahkan destinasi luar.", "Masukkan nombor mudah alih sendiri dan cipta ID mengikut format dipaparkan.", "Berikan butiran tepat dan kata laluan unik.", "Baca terma platform serta syarat promosi sebelum menghantar.", "Simpan ID dan pengesahan dengan selamat."],
    "guides-how-to-login": ["Buka destinasi disahkan, bukan pautan mesej tanpa diminta.", "Masukkan ID dan kata laluan tepat.", "Lengkapkan pengesahan hanya pada halaman rasmi.", "Jika gagal, gunakan pemulihan kata laluan atau sokongan platform.", "Log keluar daripada peranti kongsi."],
    "guides-how-to-deposit": ["Log masuk platform luar dan buka bahagian bayaran semasa.", "Semak kaedah, had, tempoh dan fi yang dipaparkan.", "Ikat hanya akaun bank milik anda dan semak padanan nama.", "Masukkan amaun sekali dan sahkan semua butiran.", "Simpan rujukan; jangan hantar wang kepada kenalan tidak disahkan."],
    "guides-how-to-withdraw": ["Semak profil dan bank terikat adalah tepat.", "Semak baki dan pusing ganti promosi yang terpakai.", "Buka bahagian pengeluaran luar dan baca had semasa.", "Masukkan amaun dan sahkan akaun destinasi.", "Simpan rujukan dan tanya sokongan platform tentang status."],
    "guides-payment-methods": ["Semak kaedah yang dipaparkan selepas log masuk.", "Bandingkan had, pemprosesan dan fi.", "Sahkan akaun bayaran milik anda dan nama sepadan.", "Semak butiran sebelum meluluskan transaksi.", "Simpan resit atau rujukan."],
    "guides-mobile": ["Gunakan pelayar terkini dan sambungan peribadi.", "Mulakan di laman disahkan dan periksa URL luar.", "Jangan pasang fail daripada sembang atau tetingkap timbul.", "Gunakan kunci peranti dan rahsiakan notifikasi OTP.", "Log keluar daripada peranti kongsi."],
    "guides-account-security": ["Cipta kata laluan unik yang tidak digunakan untuk e-mel atau bank.", "Rahsiakan OTP, kod pemulihan dan kata laluan.", "Sahkan URL dan identiti sokongan.", "Semak perubahan luar jangka pada akaun dan bayaran.", "Hubungi sokongan platform jika mengesyaki pencerobohan."],
  },
  zh: {
    "guides-how-to-register": ["打开已披露注册链接并核实外部目标。", "输入本人手机号，并按表格格式建立账户 ID。", "填写准确资料并设置独立密码。", "提交前阅读平台条款及优惠条件。", "安全保存账户 ID 与确认信息。"],
    "guides-how-to-login": ["从已核实网址开始，不使用陌生消息链接。", "输入准确账户 ID 与密码。", "仅在官方页面完成所要求的验证。", "若失败，使用密码找回或平台官方支持。", "使用共用设备后退出。"],
    "guides-how-to-deposit": ["登录外部平台并打开当前支付页面。", "查看方式、限额、时效及显示费用。", "仅绑定本人银行账户并核对姓名。", "输入一次金额并检查所有详情。", "保存交易编号；勿向未核实联系人汇款。"],
    "guides-how-to-withdraw": ["核对个人资料与绑定银行信息。", "检查余额及适用优惠流水。", "打开外部提款页并阅读当前限额。", "输入金额并确认收款账户。", "保存编号并向平台支持查询状态。"],
    "guides-payment-methods": ["查看登录后当前显示的支付方式。", "比较限额、处理信息及费用。", "确认支付账户属于本人且姓名一致。", "授权交易前仔细复核。", "保留收据或编号。"],
    "guides-mobile": ["使用最新浏览器及私人网络。", "从已核实网站开始并检查外部网址。", "勿安装陌生聊天或弹窗提供的文件。", "启用设备锁并保护 OTP 通知。", "在共用设备退出并删除保存凭证。"],
    "guides-account-security": ["设置不与邮箱或银行服务共用的独立密码。", "保密 OTP、恢复码及密码。", "回复前核实网址及支持人员身份。", "检查账户与支付资料有无异常变化。", "怀疑被盗时立即联系外部平台支持。"],
  },
};

const guideIds = new Set<PageId>(["guides-how-to-register", "guides-how-to-login", "guides-how-to-deposit", "guides-how-to-withdraw", "guides-payment-methods", "guides-mobile", "guides-account-security"]);
const gameIds = new Set<PageId>(["games", "games-slots", "games-live-casino", "games-sports", "games-4d", "game-providers"]);
const partnerIds = new Set<PageId>(["agent", "partner-program", "affiliate-guide", "referral-guide", "partner-faq"]);
const legalIds = new Set<PageId>(["responsible-gaming", "terms", "privacy-policy", "disclaimer"]);

function related(locale: Locale, keys: RouteKey[]) {
  return keys.map((key) => ({ key, label: getRouteSeo(locale, key).title }));
}

function specialSections(locale: Locale, id: PageId): PageSection[] | null {
  if (id === "promotions-free-credit") {
    const localized = {
      en: {
        eligibility: "Eligibility and conditions", rows: [["Who", "Eligible new registrations made through the official partner site"], ["Availability", "Subject to a daily quota; receipt is not guaranteed"], ["Value", "RM10 promotional credit"], ["Turnover", "5x qualifying turnover"], ["Account limit", "One claim per mobile number"], ["Transfer", "Non-transferable"]],
        example: "Turnover example", exampleBody: "RM10 × 5 = RM50 qualifying turnover. This is an activity requirement, not a promise that RM50 can be won or withdrawn.",
        check: "Before relying on the offer", bullets: ["Confirm that the daily quota remains available.", "Read eligible-game and expiry rules on the external platform.", "Use accurate registration details and your own mobile number.", "Keep a copy of the terms shown when you claim."],
      },
      ms: {
        eligibility: "Kelayakan dan syarat", rows: [["Siapa", "Pendaftaran baharu yang layak melalui laman rakan rasmi"], ["Ketersediaan", "Tertakluk pada kuota harian; penerimaan tidak dijamin"], ["Nilai", "Kredit promosi RM10"], ["Pusing ganti", "Pusing ganti layak 5x"], ["Had akaun", "Satu tuntutan setiap nombor mudah alih"], ["Pemindahan", "Tidak boleh dipindah"]],
        example: "Contoh pusing ganti", exampleBody: "RM10 × 5 = pusing ganti layak RM50. Ini keperluan aktiviti, bukan janji bahawa RM50 boleh dimenangi atau dikeluarkan.",
        check: "Sebelum bergantung pada tawaran", bullets: ["Sahkan kuota harian masih ada.", "Baca permainan layak dan tamat tempoh di platform luar.", "Gunakan butiran tepat dan nombor sendiri.", "Simpan salinan terma semasa tuntutan."],
      },
      zh: {
        eligibility: "资格与条件", rows: [["对象", "通过官方合作伙伴网站完成且符合资格的新注册"], ["供应情况", "受每日名额限制；不保证获得"], ["金额", "RM10 优惠彩金"], ["流水", "5倍合资格流水"], ["账户限制", "每个手机号限一次"], ["转让", "不可转让"]],
        example: "流水示例", exampleBody: "RM10 × 5 = RM50 合资格流水。这是活动要求，并非保证赢得或提取 RM50。",
        check: "依赖优惠前", bullets: ["确认每日名额仍有供应。", "在外部平台阅读合资格游戏及有效期。", "使用准确资料及本人手机号。", "领取时保存条款副本。"],
      },
    }[locale];
    return [{ title: localized.eligibility, table: localized.rows.map(([label, value]) => ({ label, value })) }, { title: localized.example, body: [localized.exampleBody] }, { title: localized.check, bullets: localized.bullets }];
  }
  if (id === "official-partner") {
    const c = {
      en: [["Our role", "We research and organise public-facing IWIN information, explain common processes and provide disclosed external links."], ["Our limits", "We do not operate games, hold funds, create platform accounts, approve withdrawals or guarantee promotions. “Official Partner” does not mean that this website is the operator."], ["External-link disclosure", "When a call to action opens another platform, that platform's identity checks, terms, privacy practices and support processes apply."]],
      ms: [["Peranan kami", "Kami menyusun maklumat IWIN, menerangkan proses umum dan menyediakan pautan luar yang didedahkan."], ["Batas kami", "Kami tidak mengendalikan permainan, menyimpan dana, mencipta akaun, meluluskan pengeluaran atau menjamin promosi. “Rakan Rasmi” tidak bermaksud laman ini pengendali."], ["Pendedahan pautan luar", "Apabila tindakan membuka platform lain, semakan identiti, terma, privasi dan proses sokongan platform itu terpakai."]],
      zh: [["本站角色", "我们整理 IWIN 公开信息、解释常见流程，并提供已披露的外部链接。"], ["角色边界", "本站不经营游戏、不持有资金、不建立平台账户、不批准提款，也不保证优惠。“官方合作伙伴”不代表本站是运营商。"], ["外部链接披露", "按钮打开另一平台后，该平台的身份检查、条款、隐私及支持流程适用。"]],
    }[locale];
    return c.map(([title, body]) => ({ title, body: [body] }));
  }
  if (id === "responsible-gaming") {
    const c = {
      en: [["Set limits first", ["Decide a fixed entertainment budget.", "Set a time limit and use alarms.", "Never borrow or use essential-expense money.", "Do not chase losses."]], ["Warning signs", ["Hiding play, breaking limits, borrowing, disrupted sleep or work, and feeling unable to stop are reasons to pause and seek help."]], ["Take action", ["Stop deposits, log out, remove saved payment details, ask the platform about available limits or exclusion tools, and speak to a trusted person or qualified local support service."]]],
      ms: [["Tetapkan had dahulu", ["Tentukan bajet hiburan tetap.", "Tetapkan had masa dan penggera.", "Jangan pinjam atau guna wang keperluan.", "Jangan kejar kerugian."]], ["Tanda amaran", ["Menyembunyikan permainan, melanggar had, meminjam, gangguan tidur atau kerja dan sukar berhenti ialah sebab untuk berehat serta mendapatkan bantuan."]], ["Ambil tindakan", ["Hentikan deposit, log keluar, buang butiran bayaran, tanya platform tentang had atau pengecualian dan bercakap dengan orang dipercayai atau perkhidmatan sokongan tempatan."]]],
      zh: [["先设定限额", ["制定固定娱乐预算。", "设定时间限额及提醒。", "切勿借钱或动用生活必需资金。", "切勿追损。"]], ["警示信号", ["隐瞒游戏、突破限额、借钱、影响睡眠或工作，以及无法停止，均表示应暂停并寻求帮助。"]], ["采取行动", ["停止存款、退出账户、删除支付资料，向平台询问限额或自我排除工具，并与可信人士或当地专业支持服务沟通。"]]],
    }[locale];
    return c.map(([title, content], index) => index === 0 ? { title: title as string, bullets: content as string[] } : { title: title as string, body: content as string[] });
  }
  if (id === "terms" || id === "privacy-policy" || id === "disclaimer") {
    const legal: Record<Locale, Record<"terms" | "privacy-policy" | "disclaimer", PageSection[]>> = {
      en: {
        terms: [
          { title: "Using this website", body: ["Use the content lawfully and only if you are at least 18. Do not misuse the site, interfere with its operation, attempt unauthorised access or present its content as your own official statement."] },
          { title: "Information and availability", body: ["We aim for useful, accurate information but do not promise that every external game, promotion, rate or process is continuously available. Verify material details before relying on them."] },
          { title: "Separate external relationship", body: ["Following an external link may create a separate relationship between you and that platform. Its account, transaction, dispute, privacy and responsible-gaming terms apply; this website does not process those services."] },
        ],
        "privacy-policy": [
          { title: "Information you provide", body: ["Do not send passwords, OTPs, full banking credentials or identity documents through a general information enquiry. If a contact form is available, provide only what is reasonably needed for a response."] },
          { title: "Technical information", body: ["Normal website operation may involve basic request, device, browser and security logs. Hosting or analytics services, if enabled, may process such data under their own applicable terms."] },
          { title: "External websites and choices", body: ["External platforms have separate privacy notices and may request registration or payment information directly. Review their notice before submitting data. You may limit browser storage through your device settings."] },
        ],
        disclaimer: [
          { title: "Information, not operation", body: ["IWIN Malaysia is an official partner information website. It does not operate games, hold player money, determine game outcomes or approve deposits and withdrawals."] },
          { title: "No guarantees or official-status claims", body: ["We do not guarantee winnings, payouts, promotion receipt, agent income or uninterrupted access, and do not claim government approval, a licence, certification or bank-grade security for this website or an external platform."] },
          { title: "Your checks", body: ["Confirm current terms, legal eligibility and destination details yourself. Provider names are ecosystem references and do not by themselves establish a direct partnership or endorsement."] },
        ],
      },
      ms: {
        terms: [
          { title: "Menggunakan laman ini", body: ["Gunakan kandungan secara sah dan hanya jika berumur sekurang-kurangnya 18 tahun. Jangan menyalahgunakan laman, mengganggu operasinya, cuba akses tanpa izin atau mempersembahkan kandungannya sebagai kenyataan rasmi anda."] },
          { title: "Maklumat dan ketersediaan", body: ["Kami berusaha menyediakan maklumat berguna dan tepat tetapi tidak menjanjikan setiap permainan, promosi, kadar atau proses luar sentiasa tersedia. Sahkan perkara penting sebelum bergantung padanya."] },
          { title: "Hubungan luar yang berasingan", body: ["Pautan luar mungkin mewujudkan hubungan berasingan antara anda dan platform itu. Terma akaun, transaksi, pertikaian, privasi dan permainan bertanggungjawabnya terpakai; laman ini tidak memproses perkhidmatan tersebut."] },
        ],
        "privacy-policy": [
          { title: "Maklumat yang anda beri", body: ["Jangan hantar kata laluan, OTP, kelayakan bank penuh atau dokumen identiti melalui pertanyaan umum. Jika borang hubungan tersedia, beri hanya maklumat yang munasabah untuk jawapan."] },
          { title: "Maklumat teknikal", body: ["Operasi laman biasa mungkin melibatkan log permintaan, peranti, pelayar dan keselamatan asas. Perkhidmatan pengehosan atau analitik, jika digunakan, boleh memproses data di bawah termanya."] },
          { title: "Laman luar dan pilihan", body: ["Platform luar mempunyai notis privasi berasingan dan mungkin meminta maklumat pendaftaran atau bayaran secara langsung. Semak notis mereka sebelum menghantar data."] },
        ],
        disclaimer: [
          { title: "Maklumat, bukan operasi", body: ["IWIN Malaysia ialah laman maklumat rakan rasmi. Ia tidak mengendalikan permainan, memegang wang pemain, menentukan keputusan atau meluluskan deposit dan pengeluaran."] },
          { title: "Tiada jaminan atau dakwaan status rasmi", body: ["Kami tidak menjamin kemenangan, bayaran, penerimaan promosi, pendapatan ejen atau akses tanpa gangguan, dan tidak mendakwa kelulusan kerajaan, lesen, pensijilan atau keselamatan bertaraf bank."] },
          { title: "Semakan anda", body: ["Sahkan terma semasa, kelayakan undang-undang dan destinasi sendiri. Nama penyedia ialah rujukan ekosistem dan tidak membuktikan perkongsian atau sokongan langsung."] },
        ],
      },
      zh: {
        terms: [
          { title: "使用本网站", body: ["仅限年满18岁并以合法方式使用内容。不得滥用、干扰网站运作、尝试未经授权的访问，或把本站内容冒充为您自己的官方声明。"] },
          { title: "信息与可用性", body: ["我们力求提供实用、准确信息，但不承诺每项外部游戏、优惠、费率或流程持续可用。依赖重要信息前请自行核实。"] },
          { title: "独立的外部关系", body: ["点击外部链接后，您可能与该平台建立独立关系。其账户、交易、争议、隐私及负责任游戏条款适用；本站不处理这些服务。"] },
        ],
        "privacy-policy": [
          { title: "您提供的信息", body: ["请勿通过一般信息查询发送密码、OTP、完整银行凭证或身份证明。若提供联系表格，只提交回复所合理需要的信息。"] },
          { title: "技术信息", body: ["网站正常运作可能涉及基本请求、设备、浏览器及安全日志。托管或分析服务如有启用，可能按其适用条款处理这些数据。"] },
          { title: "外部网站与您的选择", body: ["外部平台有独立隐私声明，并可能直接要求注册或支付资料。提交前请阅读其声明；您可通过设备设置限制浏览器存储。"] },
        ],
        disclaimer: [
          { title: "提供信息，并非运营", body: ["IWIN Malaysia 是官方合作伙伴信息网站，不经营游戏、不持有玩家资金、不决定游戏结果，也不批准存提款。"] },
          { title: "不作保证或官方地位声明", body: ["本站不保证赢利、提款、获得优惠、代理收入或持续访问，也不声称本站或外部平台获得政府批准、持有牌照、认证或银行级安全。"] },
          { title: "您的核查责任", body: ["请自行核实当前条款、法律资格及目标网址。提供商名称仅为生态参考，本身不构成直接合作或背书。"] },
        ],
      },
    };
    return legal[locale][id];
  }
  if (id === "contact") {
    const c = {
      en: [["Information enquiries", "Use this website's contact route to ask about published guides, wording or broken links. Never include a password, OTP or full banking details."], ["Account and transaction support", "Login restrictions, identity checks, deposits, withdrawals and game records must be handled by the external platform. Use its verified support channel and keep the case reference."], ["Report suspicious contact", "Do not pay an individual claiming to unlock an account or release a withdrawal. Preserve the message, stop engaging and report it through a verified channel."]],
      ms: [["Pertanyaan maklumat", "Gunakan saluran laman ini untuk bertanya tentang panduan, kata-kata atau pautan rosak. Jangan sertakan kata laluan, OTP atau butiran bank penuh."], ["Sokongan akaun dan transaksi", "Sekatan log masuk, semakan identiti, deposit, pengeluaran dan rekod permainan mesti diurus platform luar. Gunakan sokongan disahkan dan simpan rujukan kes."], ["Laporkan hubungan mencurigakan", "Jangan bayar individu yang mendakwa boleh membuka akaun atau melepaskan pengeluaran. Simpan mesej, hentikan hubungan dan laporkan melalui saluran disahkan."]],
      zh: [["信息查询", "可通过本站联系渠道询问指南、内容措辞或失效链接。切勿附上密码、OTP 或完整银行资料。"], ["账户及交易支持", "登录限制、身份检查、存款、提款及游戏记录须由外部平台处理。请使用已核实支持渠道并保存案件编号。"], ["举报可疑联系", "不要付款给声称可解锁账户或释放提款的个人。保存消息、停止互动并通过已核实渠道举报。"]],
    }[locale];
    return c.map(([title, body]) => ({ title, body: [body] }));
  }
  if (id === "game-providers") {
    const c = {
      en: ["Names referenced", "The referenced ecosystem includes 918Kiss, LionKing, Lucky365, JILI, JDB, Pragmatic Play and ASKME.", "What the list does not mean", "A name or image does not prove a direct commercial partnership, endorsement, licence or current availability. Check the external catalogue."],
      ms: ["Nama yang dirujuk", "Ekosistem rujukan termasuk 918Kiss, LionKing, Lucky365, JILI, JDB, Pragmatic Play dan ASKME.", "Maksud yang tidak dibawa senarai", "Nama atau imej tidak membuktikan perkongsian komersial, sokongan, lesen atau ketersediaan semasa. Semak katalog luar."],
      zh: ["提及的名称", "参考生态包括 918Kiss、LionKing、Lucky365、JILI、JDB、Pragmatic Play 及 ASKME。", "列表不代表什么", "名称或图片不能证明直接商业合作、背书、牌照或当前可用性。请检查外部平台目录。"],
    }[locale];
    return [{ title: c[0], body: [c[1]] }, { title: c[2], body: [c[3]] }, { title: text[locale].detail, bullets: [...text[locale].checks] }];
  }
  if (id === "promotions" || id === "promotions-welcome" || id === "promotions-bonus-guide") {
    const c = {
      en: [
        ["Five checks for any offer", ["Who qualifies, including new- or existing-account status.", "Whether a daily quota, claim action or code applies.", "The turnover multiplier and which activity qualifies.", "Maximum conversion, withdrawal or reward limits.", "Expiry, cancellation and duplicate-account rules."]],
        ["Turnover is not a return", ["A multiplier describes required qualifying activity. It does not predict winnings, remove the risk of loss or guarantee that a balance can be withdrawn."]],
        ["Use the current terms", ["Take a dated copy of the conditions displayed when claiming. If a summary conflicts with the external platform's current terms, ask that platform for clarification before accepting."]],
      ],
      ms: [
        ["Lima semakan bagi setiap tawaran", ["Siapa yang layak termasuk status akaun baharu atau sedia ada.", "Sama ada kuota harian, tindakan tuntutan atau kod terpakai.", "Pengganda pusing ganti dan aktiviti yang layak.", "Had penukaran, pengeluaran atau ganjaran.", "Peraturan tamat tempoh, pembatalan dan akaun pendua."]],
        ["Pusing ganti bukan pulangan", ["Pengganda menerangkan aktiviti layak yang diperlukan. Ia tidak meramal kemenangan, menghapuskan risiko kerugian atau menjamin baki boleh dikeluarkan."]],
        ["Gunakan terma semasa", ["Simpan salinan bertarikh syarat semasa tuntutan. Jika ringkasan bercanggah dengan terma platform luar, minta penjelasan sebelum menerima."]],
      ],
      zh: [
        ["任何优惠的五项检查", ["谁符合资格，包括新旧账户条件。", "是否有每日名额、领取操作或代码。", "流水倍数及哪些活动合资格。", "转换、提款或奖励上限。", "有效期、取消及重复账户规则。"]],
        ["流水不等于回报", ["倍数仅说明所需合资格活动，不预测赢利、不消除亏损风险，也不保证余额可提款。"]],
        ["以当前条款为准", ["领取时保存注明日期的条件。如摘要与外部平台当前条款冲突，请在接受前向该平台查询。"]],
      ],
    }[locale];
    return c.map(([title, content], index) => index === 0 ? { title: title as string, bullets: content as string[] } : { title: title as string, body: content as string[] });
  }
  if (id === "partner-faq") {
    const c = {
      en: [["Is agent registration free?", "Platform information describes joining as free, but current verification and programme terms still apply."], ["Is a commission rate guaranteed?", "No. Platform information indicates referral commissions may apply based on referred-player turnover; confirm rates and adjustments in the agent dashboard."], ["Is income promised?", "No. Valid attribution, player activity and current rules affect any commission, and there is no promised income."], ["What should partners disclose?", "State that links may lead to an external platform, target adults only, avoid false status or security claims, and never describe a conditional promotion as guaranteed."]],
      ms: [["Adakah pendaftaran ejen percuma?", "Maklumat platform menerangkan penyertaan sebagai percuma, tetapi pengesahan dan terma program semasa masih terpakai."], ["Adakah kadar komisen dijamin?", "Tidak. Maklumat platform menunjukkan komisen mungkin terpakai berdasarkan pusing ganti pemain dirujuk; sahkan kadar dan pelarasan dalam papan pemuka."], ["Adakah pendapatan dijanjikan?", "Tidak. Atribusi sah, aktiviti pemain dan peraturan semasa mempengaruhi komisen; tiada pendapatan dijanjikan."], ["Apa yang perlu didedahkan rakan?", "Nyatakan pautan mungkin menuju platform luar, sasarkan orang dewasa sahaja, elakkan dakwaan palsu dan jangan gambarkan promosi bersyarat sebagai terjamin."]],
      zh: [["代理注册免费吗？", "平台资料称加入免费，但仍须遵守当前验证及计划条款。"], ["佣金费率有保证吗？", "没有。平台资料显示推荐佣金可能按被推荐玩家流水计算；请在代理后台确认费率及调整。"], ["是否承诺收入？", "不承诺。有效归因、玩家活动及当前规则都会影响佣金，本站不保证收入。"], ["合作伙伴应披露什么？", "说明链接可能前往外部平台，仅面向成年人，避免虚假地位或安全声明，切勿把附带条件的优惠说成保证获得。"]],
    }[locale];
    return c.map(([title, body]) => ({ title, body: [body] }));
  }
  return null;
}

function makePage(locale: Locale, id: PageId): PageContent {
  const seed = seeds[locale][id];
  const t = text[locale];
  const special = specialSections(locale, id);
  let sections: PageSection[];
  if (special) sections = special;
  else if (guideIds.has(id)) sections = [
    { title: t.guideTitle, steps: guideSteps[locale][id]! },
    { title: t.guideEnd, body: [t.guideEndBody] },
    { title: t.detail, bullets: [...t.checks] },
  ];
  else if (gameIds.has(id)) sections = [
    { title: t.gameTitle, body: [t.gameBody], bullets: [...t.gameBullets] },
    { title: t.detail, bullets: [...t.checks] },
  ];
  else if (partnerIds.has(id)) sections = [
    { title: t.partnerTitle, body: [t.partnerBody] },
    { title: t.detail, bullets: [...t.checks] },
  ];
  else if (legalIds.has(id)) sections = [
    { title: t.legalTitle, body: [seed.intro, t.overviewBody] },
    { title: t.externalTitle, body: [locale === "en" ? "External websites are independently responsible for their services, transactions, terms and privacy practices." : locale === "ms" ? "Laman luar bertanggungjawab secara berasingan atas perkhidmatan, transaksi, terma dan amalan privasinya." : "外部网站独立负责其服务、交易、条款及隐私惯例。"] },
    { title: t.detail, bullets: [...t.checks] },
  ];
  else sections = [
    { title: t.overview, body: [t.overviewBody, seed.intro] },
    { title: t.detail, bullets: [...t.checks] },
  ];

  const relatedKeys: RouteKey[] =
    guideIds.has(id) || id === "guides" ? ["guides", "guides-account-security", "faqs"] :
    gameIds.has(id) ? ["games", "game-providers", "responsible-gaming"] :
    partnerIds.has(id) ? ["agent", "partner-faq", "disclaimer"] :
    id.startsWith("promotions") ? ["promotions", "promotions-bonus-guide", "responsible-gaming"] :
    ["about-iwin", "official-partner", "contact"];

  return { eyebrow: t.eyebrow, h1: seed.h1, intro: seed.intro, sections, related: related(locale, relatedKeys.filter((key) => key !== id)) };
}

export function getPageContent(locale: Locale, pageId: PageId): PageContent {
  return makePage(locale, pageId);
}

export function getAllPageContent(locale: Locale): Record<PageId, PageContent> {
  return Object.fromEntries(
    (Object.keys(seeds[locale]) as PageId[]).map((id) => [id, makePage(locale, id)]),
  ) as Record<PageId, PageContent>;
}
