import type { Locale } from "@/lib/i18n/config";

export type FaqItem = { question: string; answer: string };
export type FaqGroup = {
  id: "account" | "registration" | "login" | "deposit" | "withdrawal" | "games" | "promotions" | "partner-agent" | "security" | "mobile";
  title: string;
  items: FaqItem[];
};

const groups: Record<Locale, FaqGroup[]> = {
  en: [
    { id: "account", title: "Account", items: [
      { question: "What information should match my account?", answer: "Use your own current mobile number and accurate personal and bank details. Where the platform requires name matching, the registered account and payment-account name should be consistent." },
      { question: "What format should I use for an IWIN account ID?", answer: "Follow the letters, numbers, length and character rules displayed on the registration form. Avoid spaces or symbols unless the form accepts them, and save the exact ID because it is used at login." },
    ] },
    { id: "registration", title: "Registration", items: [
      { question: "How do I register through the official partner site?", answer: "Use the registration link, confirm that you are leaving this information website, then complete the external platform form with accurate details. Registration remains subject to that platform's eligibility checks and terms." },
      { question: "Can one mobile number open several accounts?", answer: "The RM10 free-credit information limits the offer to one claim per mobile number. Duplicate or inaccurate registrations may be ineligible under platform rules." },
    ] },
    { id: "login", title: "Login", items: [
      { question: "What should I do if I cannot log in?", answer: "Check the exact account ID, password, connection and official destination URL. Use the platform's password-recovery flow or support channel; never send a password or one-time code to an unknown contact." },
      { question: "Why might a login be temporarily restricted?", answer: "Repeated incorrect attempts or account checks may trigger a restriction. Only the external platform can confirm the reason and restore access after verification." },
    ] },
    { id: "deposit", title: "Deposit", items: [
      { question: "How does bank-account binding work?", answer: "A bound bank account links a payment account to the player profile for verification and withdrawals. Enter only an account you control, check the displayed name carefully and ask platform support before changing a bound account." },
      { question: "Does this website accept deposits?", answer: "No. IWIN Malaysia is a partner information website and does not receive, hold or process player funds. Any payment action takes place on the external platform under its rules." },
    ] },
    { id: "withdrawal", title: "Withdrawal", items: [
      { question: "What should I check before requesting a withdrawal?", answer: "Review identity or bank-name matching, any applicable promotion turnover, minimum or maximum amounts and the platform's current processing instructions." },
      { question: "Can this partner website approve a withdrawal?", answer: "No. Withdrawal review and processing belong to the external platform. Contact its support with the transaction reference, but never disclose your password or OTP." },
    ] },
    { id: "games", title: "Games", items: [
      { question: "Which game categories are referenced?", answer: "The information pages cover slots, live casino, sports and 4D. Game and provider availability can change by account, device or platform maintenance." },
      { question: "Does listing a provider mean a direct partnership?", answer: "No. Names such as 918Kiss, JILI, JDB and Pragmatic Play are references within the IWIN gaming ecosystem, not claims of a direct commercial relationship or endorsement." },
    ] },
    { id: "promotions", title: "Promotions", items: [
      { question: "How does the RM10 free-credit offer work?", answer: "Source information describes RM10 for eligible new registrations through the official partner site, subject to a daily quota, 5x turnover, one claim per mobile number and non-transferability. It is not guaranteed; confirm availability and full terms before registering." },
      { question: "What does 5x turnover mean for RM10?", answer: "A 5x requirement means RM50 of qualifying turnover (RM10 × 5), not a promise of winnings or withdrawal. Eligible games, timing and settlement rules must be checked on the platform." },
    ] },
    { id: "partner-agent", title: "Partner / Agent", items: [
      { question: "Is joining as an agent free?", answer: "Platform information describes agent registration as free. Confirm current eligibility, verification and operating terms in the agent dashboard before proceeding." },
      { question: "How are referral commissions calculated?", answer: "Platform information indicates referral commissions may apply based on referred-player turnover; confirm rates in the agent dashboard. Income is not promised, and results depend on valid activity and current rules." },
    ] },
    { id: "security", title: "Security", items: [
      { question: "How can I protect my account?", answer: "Use a unique password, keep OTPs private, verify external URLs, sign out on shared devices and reject requests to install unknown remote-access software." },
      { question: "Does this site claim a licence or guaranteed payout?", answer: "No. This information website does not make claims of government approval, licensing, guaranteed payouts or bank-grade security. Review the external platform's own disclosures and your local legal position." },
    ] },
    { id: "mobile", title: "Mobile", items: [
      { question: "Can I access the information on a phone?", answer: "Yes. These pages are designed for mobile browsers. External game performance and compatibility depend on the destination platform, device and connection." },
      { question: "Should I install an app from a message link?", answer: "Do not install files from unsolicited messages. Start from a verified website, inspect the destination and follow the platform's current official installation guidance." },
    ] },
  ],
  ms: [
    { id: "account", title: "Akaun", items: [
      { question: "Maklumat apa yang perlu sepadan dengan akaun saya?", answer: "Gunakan nombor mudah alih sendiri yang aktif serta butiran peribadi dan bank yang tepat. Jika padanan nama diperlukan, nama akaun berdaftar dan akaun pembayaran hendaklah konsisten." },
      { question: "Apakah format ID akaun IWIN?", answer: "Ikuti peraturan huruf, nombor, panjang dan aksara pada borang pendaftaran. Elakkan ruang atau simbol melainkan diterima, dan simpan ID tepat untuk log masuk." },
    ] },
    { id: "registration", title: "Pendaftaran", items: [
      { question: "Bagaimanakah saya mendaftar melalui laman rakan rasmi?", answer: "Gunakan pautan pendaftaran, fahami bahawa anda akan meninggalkan laman maklumat ini, kemudian lengkapkan borang platform luar dengan maklumat tepat. Kelayakan dan terma platform berkenaan terpakai." },
      { question: "Bolehkah satu nombor mudah alih membuka beberapa akaun?", answer: "Maklumat kredit percuma RM10 mengehadkan tawaran kepada satu tuntutan bagi setiap nombor mudah alih. Pendaftaran pendua atau tidak tepat mungkin tidak layak." },
    ] },
    { id: "login", title: "Log Masuk", items: [
      { question: "Apakah yang perlu dilakukan jika gagal log masuk?", answer: "Semak ID akaun, kata laluan, sambungan dan URL destinasi rasmi. Gunakan pemulihan kata laluan atau sokongan platform; jangan beri kata laluan atau OTP kepada pihak tidak dikenali." },
      { question: "Mengapa log masuk mungkin disekat sementara?", answer: "Percubaan salah berulang atau semakan akaun boleh menyebabkan sekatan. Hanya platform luar boleh mengesahkan sebab dan memulihkan akses selepas pengesahan." },
    ] },
    { id: "deposit", title: "Deposit", items: [
      { question: "Bagaimanakah pengikatan akaun bank berfungsi?", answer: "Akaun bank terikat menghubungkan akaun pembayaran kepada profil untuk pengesahan dan pengeluaran. Gunakan akaun milik anda, semak nama dan hubungi sokongan platform sebelum menukarnya." },
      { question: "Adakah laman ini menerima deposit?", answer: "Tidak. IWIN Malaysia ialah laman maklumat rakan dan tidak menerima, menyimpan atau memproses dana pemain. Pembayaran berlaku di platform luar mengikut peraturannya." },
    ] },
    { id: "withdrawal", title: "Pengeluaran", items: [
      { question: "Apa perlu disemak sebelum pengeluaran?", answer: "Semak padanan identiti atau nama bank, pusing ganti promosi, had amaun dan arahan pemprosesan semasa platform." },
      { question: "Bolehkah laman rakan ini meluluskan pengeluaran?", answer: "Tidak. Semakan dan pemprosesan ialah tanggungjawab platform luar. Hubungi sokongannya dengan rujukan transaksi tanpa mendedahkan kata laluan atau OTP." },
    ] },
    { id: "games", title: "Permainan", items: [
      { question: "Apakah kategori permainan yang dirujuk?", answer: "Laman ini merangkumi slot, kasino langsung, sukan dan 4D. Ketersediaan permainan dan penyedia boleh berubah mengikut akaun, peranti atau penyelenggaraan." },
      { question: "Adakah senarai penyedia membuktikan perkongsian langsung?", answer: "Tidak. Nama seperti 918Kiss, JILI, JDB dan Pragmatic Play ialah rujukan dalam ekosistem permainan IWIN, bukan dakwaan hubungan komersial atau sokongan langsung." },
    ] },
    { id: "promotions", title: "Promosi", items: [
      { question: "Bagaimanakah tawaran kredit percuma RM10 berfungsi?", answer: "Maklumat sumber menyatakan RM10 untuk pendaftaran baharu yang layak melalui laman rakan rasmi, tertakluk pada kuota harian, pusing ganti 5x, satu tuntutan setiap nombor mudah alih dan tidak boleh dipindah. Ia tidak dijamin; sahkan terma semasa." },
      { question: "Apakah maksud pusing ganti 5x bagi RM10?", answer: "Keperluan 5x bermaksud pusing ganti layak RM50 (RM10 × 5), bukan janji kemenangan atau pengeluaran. Semak permainan layak, tempoh dan peraturan penyelesaian." },
    ] },
    { id: "partner-agent", title: "Rakan / Ejen", items: [
      { question: "Adakah penyertaan ejen percuma?", answer: "Maklumat platform menerangkan pendaftaran ejen sebagai percuma. Sahkan kelayakan, pengesahan dan terma operasi semasa dalam papan pemuka ejen." },
      { question: "Bagaimanakah komisen rujukan dikira?", answer: "Maklumat platform menunjukkan komisen rujukan mungkin terpakai berdasarkan pusing ganti pemain dirujuk; sahkan kadar dalam papan pemuka ejen. Pendapatan tidak dijanjikan." },
    ] },
    { id: "security", title: "Keselamatan", items: [
      { question: "Bagaimanakah saya melindungi akaun?", answer: "Gunakan kata laluan unik, rahsiakan OTP, semak URL luar, log keluar daripada peranti kongsi dan tolak pemasangan perisian akses jauh yang tidak dikenali." },
      { question: "Adakah laman ini mendakwa lesen atau bayaran terjamin?", answer: "Tidak. Laman maklumat ini tidak mendakwa kelulusan kerajaan, lesen, bayaran terjamin atau keselamatan bertaraf bank. Semak pendedahan platform luar dan kedudukan undang-undang tempatan anda." },
    ] },
    { id: "mobile", title: "Mudah Alih", items: [
      { question: "Bolehkah maklumat diakses melalui telefon?", answer: "Ya. Laman ini direka untuk pelayar mudah alih. Prestasi permainan luar bergantung pada platform destinasi, peranti dan sambungan." },
      { question: "Patutkah saya memasang aplikasi daripada pautan mesej?", answer: "Jangan pasang fail daripada mesej tanpa diminta. Mulakan di laman yang disahkan, semak destinasi dan ikuti panduan pemasangan rasmi semasa platform." },
    ] },
  ],
  zh: [
    { id: "account", title: "账户", items: [
      { question: "哪些资料应与账户一致？", answer: "请使用本人当前手机号，并填写准确的个人及银行资料。若平台要求姓名一致，注册账户与支付账户姓名应保持相同。" },
      { question: "IWIN 账户 ID 应使用什么格式？", answer: "请遵循注册表格显示的字母、数字、长度及字符规则。除非表格允许，否则不要使用空格或符号，并妥善保存准确 ID 供登录使用。" },
    ] },
    { id: "registration", title: "注册", items: [
      { question: "如何通过官方合作伙伴网站注册？", answer: "点击注册链接，确认您将离开本信息网站，再于外部平台填写准确资料。注册须遵守该平台的资格审核与条款。" },
      { question: "一个手机号可以开设多个账户吗？", answer: "RM10 免费彩金资料说明每个手机号仅限一次。重复或不准确的注册可能不符合平台规则。" },
    ] },
    { id: "login", title: "登录", items: [
      { question: "无法登录时该怎么办？", answer: "核对账户 ID、密码、网络及官方目标网址。使用平台密码找回或支持渠道；切勿向陌生人提供密码或 OTP。" },
      { question: "为什么登录可能暂时受限？", answer: "多次输入错误或账户检查可能触发限制。只有外部平台能确认原因，并在验证后恢复访问。" },
    ] },
    { id: "deposit", title: "存款", items: [
      { question: "绑定银行账户是什么意思？", answer: "绑定会把本人支付账户与玩家资料关联，用于验证及提款。仅填写您控制的账户，仔细核对姓名，更改前先咨询平台支持。" },
      { question: "本网站接受存款吗？", answer: "不接受。IWIN Malaysia 是合作伙伴信息网站，不接收、保管或处理玩家资金。任何支付均在外部平台按其规则进行。" },
    ] },
    { id: "withdrawal", title: "提款", items: [
      { question: "申请提款前应检查什么？", answer: "检查身份或银行姓名匹配、适用优惠流水、金额上下限及平台最新处理说明。" },
      { question: "合作伙伴网站可以批准提款吗？", answer: "不可以。提款审核与处理由外部平台负责。联系其支持时可提供交易编号，但切勿透露密码或 OTP。" },
    ] },
    { id: "games", title: "游戏", items: [
      { question: "网站介绍哪些游戏类别？", answer: "信息页涵盖老虎机、真人娱乐场、体育及 4D。游戏和提供商可用性可能因账户、设备或维护而变化。" },
      { question: "列出提供商是否代表直接合作？", answer: "不是。918Kiss、JILI、JDB、Pragmatic Play 等名称是 IWIN 游戏生态中的参考，并非直接商业关系或背书声明。" },
    ] },
    { id: "promotions", title: "优惠", items: [
      { question: "RM10 免费彩金如何运作？", answer: "来源资料说明，符合资格并通过官方合作伙伴网站新注册者可申请 RM10，但受每日名额、5倍流水、每个手机号一次及不可转让等条件限制。并非保证获得；注册前请确认最新条款。" },
      { question: "RM10 的5倍流水是什么意思？", answer: "5倍要求即 RM50 合资格流水（RM10 × 5），并非保证赢利或提款。请在平台核对合资格游戏、时限及结算规则。" },
    ] },
    { id: "partner-agent", title: "合作伙伴／代理", items: [
      { question: "加入代理是否免费？", answer: "平台资料称代理注册免费。开始前，请在代理后台确认当前资格、验证及运营条款。" },
      { question: "推荐佣金如何计算？", answer: "平台资料显示，推荐佣金可能按被推荐玩家流水计算；实际费率请在代理后台确认。本站不承诺收入。" },
    ] },
    { id: "security", title: "安全", items: [
      { question: "如何保护账户？", answer: "使用独立密码、保密 OTP、核实外部网址、在共用设备退出，并拒绝安装不明远程访问软件。" },
      { question: "本站是否声称持有牌照或保证提款？", answer: "否。本信息网站不声称获得政府批准、持有牌照、保证提款或具备银行级安全。请查看外部平台披露，并了解您所在地法律。" },
    ] },
    { id: "mobile", title: "移动设备", items: [
      { question: "可以用手机浏览吗？", answer: "可以。本网站适配移动浏览器。外部游戏表现与兼容性取决于目标平台、设备及网络。" },
      { question: "可以安装消息链接中的应用吗？", answer: "不要安装陌生消息提供的文件。请从已核实网站开始，检查目标地址，并遵循平台最新官方安装说明。" },
    ] },
  ],
};

export function getFaqGroups(locale: Locale): FaqGroup[] {
  return groups[locale];
}

export function flattenFaqs(input: FaqGroup[] | Locale): FaqItem[] {
  const selected = typeof input === "string" ? groups[input] : input;
  return selected.flatMap((group) => group.items);
}

export function getHomeFaqs(locale: Locale): FaqItem[] {
  const wanted = ["registration", "promotions", "deposit", "partner-agent", "security"];
  return groups[locale]
    .filter((group) => wanted.includes(group.id))
    .map((group) => group.items[0]);
}
