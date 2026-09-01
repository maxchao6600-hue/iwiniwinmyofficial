import type { Locale } from "@/lib/i18n/config";
import { VISUAL_IMAGES } from "@/lib/visual/images";

export type FlowStep = { label: string; hint: string };

export type GuideFlow = {
  eyebrow: string;
  title: string;
  intro: string;
  chapter: string;
  chapterLabel: string;
  image: string;
  objectPosition?: string;
  steps: readonly FlowStep[];
  warningTitle?: string;
  warning?: string;
};

export type PromoFlow = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: readonly FlowStep[];
};

export type VisualFlows = {
  categoryCheckpointLabel: string;
  categoryCheckpoints: Record<"slots" | "live-casino" | "sports" | "4d", readonly string[]>;
  guideFlows: Record<
    "register" | "login" | "deposit" | "withdraw" | "payment" | "mobile" | "security",
    GuideFlow
  >;
  promoFlows: Record<"free-credit" | "welcome" | "bonus-guide", PromoFlow>;
};

const flows: Record<Locale, VisualFlows> = {
  en: {
    categoryCheckpointLabel: "Before you play",
    categoryCheckpoints: {
      slots: [
        "Read the paytable and understand how wins are calculated.",
        "Note bet size limits and any feature-buy rules on the live game.",
        "Confirm bonus eligibility does not conflict with the title you choose.",
        "Set a session and spend limit before spinning.",
      ],
      "live-casino": [
        "Check table limits and connection quality before joining.",
        "Review the game rules shown at the table.",
        "Verify you are on the intended platform destination.",
        "Play only with amounts you can afford to lose.",
      ],
      sports: [
        "Confirm market type (pre-match or live) and settlement rules.",
        "Check odds and stake limits before submitting.",
        "Avoid chasing losses after a settled event.",
        "Use responsible time and spend limits.",
      ],
      "4d": [
        "Understand the number format and draw schedule on the live platform.",
        "Confirm ticket or selection rules before submitting.",
        "Verify result sources after the draw.",
        "Treat number selection as entertainment, not a financial plan.",
      ],
    },
    guideFlows: {
      register: {
        eyebrow: "Account journey",
        title: "Register carefully",
        intro: "Prepare accurate details, verify the destination, and complete only the fields required by the live registration form.",
        chapter: "01",
        chapterLabel: "Registration",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 30%",
        steps: [
          { label: "Verify URL", hint: "Confirm the official destination" },
          { label: "Prepare details", hint: "Use accurate personal information" },
          { label: "Complete form", hint: "Follow live field requirements" },
          { label: "OTP check", hint: "Keep codes private" },
          { label: "Confirm account", hint: "Save secure credentials" },
        ],
        warningTitle: "Important",
        warning: "Never share OTP codes or passwords with anyone claiming to offer support.",
      },
      login: {
        eyebrow: "Access checkpoint",
        title: "Log in securely",
        intro: "Verify the destination address first, then sign in with your own credentials and protect one-time codes.",
        chapter: "02",
        chapterLabel: "Login",
        image: VISUAL_IMAGES.hero.banner2,
        objectPosition: "center 25%",
        steps: [
          { label: "Check link", hint: "Avoid redirected lookalikes" },
          { label: "Enter credentials", hint: "Use your own password" },
          { label: "OTP", hint: "Do not forward codes" },
          { label: "Review session", hint: "Confirm account identity" },
          { label: "Secure exit", hint: "Log out on shared devices" },
        ],
        warningTitle: "Suspicious link",
        warning: "If the address, branding or login form looks unfamiliar, stop and use a known bookmark.",
      },
      deposit: {
        eyebrow: "Payment journey",
        title: "Deposit with checks",
        intro: "Match cashier rules, confirm method limits, and keep transaction references for your records.",
        chapter: "03",
        chapterLabel: "Deposit",
        image: VISUAL_IMAGES.hero.banner3,
        objectPosition: "center 40%",
        steps: [
          { label: "Choose method", hint: "Follow live cashier options" },
          { label: "Confirm details", hint: "Match name and account rules" },
          { label: "Complete payment", hint: "Submit only once" },
          { label: "Verify status", hint: "Wait for confirmation" },
          { label: "Check balance", hint: "Retain the reference" },
        ],
      },
      withdraw: {
        eyebrow: "Withdrawal journey",
        title: "Withdraw after eligibility",
        intro: "Check turnover and account details first, then submit a clear request and track status on the platform.",
        chapter: "04",
        chapterLabel: "Withdrawal",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 35%",
        steps: [
          { label: "Check eligibility", hint: "Confirm turnover and rules" },
          { label: "Verify account", hint: "Bank details must match" },
          { label: "Submit request", hint: "Use the live cashier" },
          { label: "Review status", hint: "Keep the reference ID" },
          { label: "Confirm completion", hint: "Check destination account" },
        ],
        warningTitle: "Before withdrawing",
        warning: "Incomplete turnover or mismatched bank details are common reasons for delay — confirm live conditions first.",
      },
      payment: {
        eyebrow: "Payment methods",
        title: "Compare and verify",
        intro: "Use payment options shown in the live cashier. Availability can change; this site does not invent provider lists.",
        chapter: "05",
        chapterLabel: "Methods",
        image: VISUAL_IMAGES.hero.banner2,
        steps: [
          { label: "Open cashier", hint: "Use authenticated access" },
          { label: "Review options", hint: "Note limits and fees if shown" },
          { label: "Match identity", hint: "Follow naming rules" },
          { label: "Complete transfer", hint: "Keep proof" },
          { label: "Confirm update", hint: "Check wallet balance" },
        ],
      },
      mobile: {
        eyebrow: "Mobile access",
        title: "Play on your device",
        intro: "Prefer a current browser, stable connection, and the same security habits you use on desktop.",
        chapter: "06",
        chapterLabel: "Mobile",
        image: VISUAL_IMAGES.hero.banner3,
        steps: [
          { label: "Update browser", hint: "Avoid outdated apps" },
          { label: "Verify site", hint: "Bookmark the known URL" },
          { label: "Secure network", hint: "Avoid public Wi‑Fi for login" },
          { label: "Manage sessions", hint: "Log out when finished" },
          { label: "Protect device", hint: "Use screen lock" },
        ],
      },
      security: {
        eyebrow: "Security centre",
        title: "Protect your account",
        intro: "Link verification, unique passwords, OTP privacy and device hygiene are the core controls you control.",
        chapter: "07",
        chapterLabel: "Security",
        image: VISUAL_IMAGES.hero.home,
        steps: [
          { label: "Verify links", hint: "Check the destination URL" },
          { label: "Unique password", hint: "Never reuse credentials" },
          { label: "Protect OTP", hint: "Codes stay private" },
          { label: "Device safety", hint: "Update OS and browser" },
          { label: "Act early", hint: "Report unfamiliar activity" },
        ],
        warningTitle: "If something looks wrong",
        warning: "Stop interacting, change your password on a verified destination, and use official recovery channels only.",
      },
    },
    promoFlows: {
      "free-credit": {
        eyebrow: "Offer breakdown",
        title: "Free credit checkpoints",
        intro: "Confirm live eligibility and turnover on the external platform before registering.",
        steps: [
          { label: "Eligibility", hint: "New registrations where offered" },
          { label: "Claim", hint: "Follow live claim rules" },
          { label: "Conditions", hint: "Read turnover and limits" },
          { label: "Completion", hint: "Finish required play" },
          { label: "Verification", hint: "Confirm on the platform" },
        ],
      },
      welcome: {
        eyebrow: "Welcome path",
        title: "Welcome offer structure",
        intro: "Welcome promotions vary by live campaign. Use this page to understand typical checks — not as a guarantee of availability.",
        steps: [
          { label: "Eligibility", hint: "New or returning rules" },
          { label: "Claim", hint: "Opt in where required" },
          { label: "Conditions", hint: "Game and stake limits" },
          { label: "Completion", hint: "Meet turnover if any" },
          { label: "Verification", hint: "Confirm cashier status" },
        ],
      },
      "bonus-guide": {
        eyebrow: "Bonus literacy",
        title: "How bonus terms work",
        intro: "Turnover, eligibility and excluded games determine whether a bonus can be completed. Always verify live terms.",
        steps: [
          { label: "Eligibility", hint: "Who can join" },
          { label: "Claim", hint: "How to activate" },
          { label: "Conditions", hint: "Turnover and limits" },
          { label: "Completion", hint: "What counts as wagering" },
          { label: "Verification", hint: "Check remaining requirement" },
        ],
      },
    },
  },
  ms: {
    categoryCheckpointLabel: "Sebelum bermain",
    categoryCheckpoints: {
      slots: [
        "Baca jadual bayaran dan fahami cara kemenangan dikira.",
        "Perhatikan had pertaruhan dan peraturan ciri di permainan langsung.",
        "Sahkan kelayakan bonus tidak bercanggah dengan tajuk yang dipilih.",
        "Tetapkan had sesi dan perbelanjaan sebelum berputar.",
      ],
      "live-casino": [
        "Semak had meja dan kualiti sambungan sebelum menyertai.",
        "Ulas peraturan permainan yang dipaparkan di meja.",
        "Pastikan anda di destinasi platform yang dimaksudkan.",
        "Main hanya dengan jumlah yang mampu ditanggung.",
      ],
      sports: [
        "Sahkan jenis pasaran (pra-perlawanan atau langsung) dan peraturan penyelesaian.",
        "Semak odds dan had pertaruhan sebelum menghantar.",
        "Elak mengejar kerugian selepas acara diselesaikan.",
        "Guna had masa dan perbelanjaan yang bertanggungjawab.",
      ],
      "4d": [
        "Fahami format nombor dan jadual cabutan di platform langsung.",
        "Sahkan peraturan tiket atau pilihan sebelum menghantar.",
        "Sahkan sumber keputusan selepas cabutan.",
        "Anggap pemilihan nombor sebagai hiburan, bukan rancangan kewangan.",
      ],
    },
    guideFlows: {
      register: {
        eyebrow: "Perjalanan akaun",
        title: "Daftar dengan teliti",
        intro: "Sediakan butiran tepat, sahkan destinasi, dan lengkapkan hanya medan yang diperlukan oleh borang langsung.",
        chapter: "01",
        chapterLabel: "Pendaftaran",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 30%",
        steps: [
          { label: "Sahkan URL", hint: "Pastikan destinasi rasmi" },
          { label: "Sedia butiran", hint: "Guna maklumat tepat" },
          { label: "Lengkap borang", hint: "Ikuti medan langsung" },
          { label: "Semak OTP", hint: "Jaga kod peribadi" },
          { label: "Sahkan akaun", hint: "Simpan kelayakan selamat" },
        ],
        warningTitle: "Penting",
        warning: "Jangan kongsi OTP atau kata laluan dengan sesiapa yang mendakwa menawarkan sokongan.",
      },
      login: {
        eyebrow: "Pemeriksaan akses",
        title: "Log masuk dengan selamat",
        intro: "Sahkan alamat destinasi dahulu, kemudian log masuk dengan kelayakan sendiri dan lindungi kod sekali.",
        chapter: "02",
        chapterLabel: "Log masuk",
        image: VISUAL_IMAGES.hero.banner2,
        objectPosition: "center 25%",
        steps: [
          { label: "Semak pautan", hint: "Elak tapak tiruan" },
          { label: "Masuk kelayakan", hint: "Guna kata laluan sendiri" },
          { label: "OTP", hint: "Jangan kongsi kod" },
          { label: "Semak sesi", hint: "Sahkan identiti akaun" },
          { label: "Keluar selamat", hint: "Log keluar di peranti kongsi" },
        ],
        warningTitle: "Pautan mencurigakan",
        warning: "Jika alamat, jenama atau borang log masuk kelihatan asing, berhenti dan guna penanda buku yang diketahui.",
      },
      deposit: {
        eyebrow: "Perjalanan bayaran",
        title: "Deposit dengan semakan",
        intro: "Ikuti peraturan juruwang, sahkan had kaedah, dan simpan rujukan transaksi.",
        chapter: "03",
        chapterLabel: "Deposit",
        image: VISUAL_IMAGES.hero.banner3,
        objectPosition: "center 40%",
        steps: [
          { label: "Pilih kaedah", hint: "Ikuti pilihan juruwang" },
          { label: "Sahkan butiran", hint: "Padankan nama dan akaun" },
          { label: "Siap bayaran", hint: "Hantar sekali sahaja" },
          { label: "Semak status", hint: "Tunggu pengesahan" },
          { label: "Semak baki", hint: "Simpan rujukan" },
        ],
      },
      withdraw: {
        eyebrow: "Perjalanan pengeluaran",
        title: "Keluarkan selepas kelayakan",
        intro: "Semak pusing ganti dan butiran akaun dahulu, kemudian hantar permintaan yang jelas.",
        chapter: "04",
        chapterLabel: "Pengeluaran",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 35%",
        steps: [
          { label: "Semak kelayakan", hint: "Sahkan pusing ganti" },
          { label: "Sahkan akaun", hint: "Butiran bank mesti sepadan" },
          { label: "Hantar permintaan", hint: "Guna juruwang langsung" },
          { label: "Semak status", hint: "Simpan ID rujukan" },
          { label: "Sahkan siap", hint: "Semak akaun destinasi" },
        ],
        warningTitle: "Sebelum mengeluarkan",
        warning: "Pusing ganti belum lengkap atau butiran bank tidak sepadan sering menyebabkan kelewatan.",
      },
      payment: {
        eyebrow: "Kaedah bayaran",
        title: "Banding dan sahkan",
        intro: "Guna pilihan bayaran dalam juruwang langsung. Ketersediaan boleh berubah.",
        chapter: "05",
        chapterLabel: "Kaedah",
        image: VISUAL_IMAGES.hero.banner2,
        steps: [
          { label: "Buka juruwang", hint: "Akses yang disahkan" },
          { label: "Ulas pilihan", hint: "Perhatikan had jika dipaparkan" },
          { label: "Padan identiti", hint: "Ikuti peraturan nama" },
          { label: "Siap pindahan", hint: "Simpan bukti" },
          { label: "Sahkan kemas kini", hint: "Semak baki" },
        ],
      },
      mobile: {
        eyebrow: "Akses mudah alih",
        title: "Main di peranti anda",
        intro: "Guna pelayar terkini, sambungan stabil, dan amalan keselamatan yang sama seperti desktop.",
        chapter: "06",
        chapterLabel: "Mudah alih",
        image: VISUAL_IMAGES.hero.banner3,
        steps: [
          { label: "Kemas kini pelayar", hint: "Elak aplikasi lapuk" },
          { label: "Sahkan tapak", hint: "Penanda buku URL diketahui" },
          { label: "Rangkaian selamat", hint: "Elak Wi‑Fi awam untuk log masuk" },
          { label: "Urus sesi", hint: "Log keluar selepas siap" },
          { label: "Lindungi peranti", hint: "Guna kunci skrin" },
        ],
      },
      security: {
        eyebrow: "Pusat keselamatan",
        title: "Lindungi akaun anda",
        intro: "Pengesahan pautan, kata laluan unik, privasi OTP dan kebersihan peranti adalah kawalan utama.",
        chapter: "07",
        chapterLabel: "Keselamatan",
        image: VISUAL_IMAGES.hero.home,
        steps: [
          { label: "Sahkan pautan", hint: "Semak URL destinasi" },
          { label: "Kata laluan unik", hint: "Jangan guna semula" },
          { label: "Lindungi OTP", hint: "Kod kekal peribadi" },
          { label: "Keselamatan peranti", hint: "Kemas kini OS dan pelayar" },
          { label: "Bertindak awal", hint: "Laporkan aktiviti asing" },
        ],
        warningTitle: "Jika sesuatu kelihatan salah",
        warning: "Berhenti berinteraksi, tukar kata laluan di destinasi yang disahkan, dan guna saluran pemulihan rasmi sahaja.",
      },
    },
    promoFlows: {
      "free-credit": {
        eyebrow: "Pecahan tawaran",
        title: "Pemeriksaan kredit percuma",
        intro: "Sahkan kelayakan dan pusing ganti langsung di platform luar sebelum mendaftar.",
        steps: [
          { label: "Kelayakan", hint: "Pendaftaran baharu jika ditawarkan" },
          { label: "Tuntutan", hint: "Ikuti peraturan tuntutan" },
          { label: "Syarat", hint: "Baca pusing ganti dan had" },
          { label: "Penyelesaian", hint: "Siapkan permainan diperlukan" },
          { label: "Pengesahan", hint: "Sahkan di platform" },
        ],
      },
      welcome: {
        eyebrow: "Laluan alu-aluan",
        title: "Struktur tawaran alu-aluan",
        intro: "Promosi alu-aluan berbeza mengikut kempen langsung. Guna halaman ini untuk memahami semakan tipikal.",
        steps: [
          { label: "Kelayakan", hint: "Peraturan baharu atau kembali" },
          { label: "Tuntutan", hint: "Pilih masuk jika diperlukan" },
          { label: "Syarat", hint: "Had permainan dan pertaruhan" },
          { label: "Penyelesaian", hint: "Penuhkan pusing ganti jika ada" },
          { label: "Pengesahan", hint: "Semak status juruwang" },
        ],
      },
      "bonus-guide": {
        eyebrow: "Celik bonus",
        title: "Cara terma bonus berfungsi",
        intro: "Pusing ganti, kelayakan dan permainan dikecualikan menentukan sama ada bonus boleh diselesaikan.",
        steps: [
          { label: "Kelayakan", hint: "Siapa boleh menyertai" },
          { label: "Tuntutan", hint: "Cara mengaktifkan" },
          { label: "Syarat", hint: "Pusing ganti dan had" },
          { label: "Penyelesaian", hint: "Apa yang dikira sebagai pertaruhan" },
          { label: "Pengesahan", hint: "Semak baki keperluan" },
        ],
      },
    },
  },
  zh: {
    categoryCheckpointLabel: "开始游戏前",
    categoryCheckpoints: {
      slots: [
        "阅读赔付表，了解中奖如何计算。",
        "注意投注限额及实时游戏中的特色规则。",
        "确认优惠资格与所选游戏不冲突。",
        "旋转前设定会话与支出上限。",
      ],
      "live-casino": [
        "加入前检查桌台限额与网络质量。",
        "查看桌面显示的游戏规则。",
        "确认您在正确的平台目标网址。",
        "只用可承受损失的金额游戏。",
      ],
      sports: [
        "确认市场类型（赛前或滚球）与结算规则。",
        "提交前核对赔率与投注限额。",
        "赛事结算后不要追损。",
        "使用负责任的时间与支出限制。",
      ],
      "4d": [
        "了解实时平台上的号码格式与开奖安排。",
        "提交前确认票据或选号规则。",
        "开奖后核实结果来源。",
        "将选号视为娱乐，而非理财计划。",
      ],
    },
    guideFlows: {
      register: {
        eyebrow: "账户旅程",
        title: "谨慎注册",
        intro: "准备准确资料，核实目标网址，并仅填写实时注册表单要求的字段。",
        chapter: "01",
        chapterLabel: "注册",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 30%",
        steps: [
          { label: "核实网址", hint: "确认官方目标" },
          { label: "准备资料", hint: "使用准确个人信息" },
          { label: "填写表单", hint: "遵循实时字段要求" },
          { label: "OTP 验证", hint: "验证码保密" },
          { label: "确认账户", hint: "妥善保存凭据" },
        ],
        warningTitle: "重要",
        warning: "切勿与任何自称支持人员分享 OTP 或密码。",
      },
      login: {
        eyebrow: "访问检查点",
        title: "安全登录",
        intro: "先核实目标地址，再用本人凭据登录，并保护一次性验证码。",
        chapter: "02",
        chapterLabel: "登录",
        image: VISUAL_IMAGES.hero.banner2,
        objectPosition: "center 25%",
        steps: [
          { label: "检查链接", hint: "避开仿冒站点" },
          { label: "输入凭据", hint: "使用本人密码" },
          { label: "OTP", hint: "不要转发验证码" },
          { label: "核对会话", hint: "确认账户身份" },
          { label: "安全退出", hint: "共用设备请登出" },
        ],
        warningTitle: "可疑链接",
        warning: "若地址、品牌或登录表单看起来异常，请停止并使用已知书签。",
      },
      deposit: {
        eyebrow: "支付旅程",
        title: "带核对的存款",
        intro: "遵循收银台规则，确认方式限额，并保留交易参考号。",
        chapter: "03",
        chapterLabel: "存款",
        image: VISUAL_IMAGES.hero.banner3,
        objectPosition: "center 40%",
        steps: [
          { label: "选择方式", hint: "遵循实时收银台" },
          { label: "确认详情", hint: "姓名与账户规则一致" },
          { label: "完成付款", hint: "仅提交一次" },
          { label: "核实状态", hint: "等待确认" },
          { label: "核对余额", hint: "保留参考号" },
        ],
      },
      withdraw: {
        eyebrow: "提款旅程",
        title: "资格确认后再提款",
        intro: "先核对流水与账户信息，再提交清晰请求并在平台跟踪状态。",
        chapter: "04",
        chapterLabel: "提款",
        image: VISUAL_IMAGES.hero.home,
        objectPosition: "center 35%",
        steps: [
          { label: "检查资格", hint: "确认流水与规则" },
          { label: "核实账户", hint: "银行信息须匹配" },
          { label: "提交申请", hint: "使用实时收银台" },
          { label: "查看状态", hint: "保留参考 ID" },
          { label: "确认完成", hint: "检查收款账户" },
        ],
        warningTitle: "提款前",
        warning: "流水未完成或银行信息不匹配是常见延误原因——请先确认实时条件。",
      },
      payment: {
        eyebrow: "支付方式",
        title: "比较并核实",
        intro: "使用实时收银台显示的支付选项。可用性可能变化；本站不编造提供商列表。",
        chapter: "05",
        chapterLabel: "方式",
        image: VISUAL_IMAGES.hero.banner2,
        steps: [
          { label: "打开收银台", hint: "使用已验证访问" },
          { label: "查看选项", hint: "注意限额与费用（如显示）" },
          { label: "身份匹配", hint: "遵循姓名规则" },
          { label: "完成转账", hint: "保留凭证" },
          { label: "确认更新", hint: "核对钱包余额" },
        ],
      },
      mobile: {
        eyebrow: "移动访问",
        title: "在设备上使用",
        intro: "优先使用最新浏览器、稳定网络，并保持与桌面相同的安全习惯。",
        chapter: "06",
        chapterLabel: "移动端",
        image: VISUAL_IMAGES.hero.banner3,
        steps: [
          { label: "更新浏览器", hint: "避免过时应用" },
          { label: "核实网站", hint: "收藏已知网址" },
          { label: "安全网络", hint: "避免公共 Wi‑Fi 登录" },
          { label: "管理会话", hint: "结束后登出" },
          { label: "保护设备", hint: "使用屏幕锁定" },
        ],
      },
      security: {
        eyebrow: "安全中心",
        title: "保护您的账户",
        intro: "链接核实、独立密码、OTP 隐私与设备卫生是您可控的核心措施。",
        chapter: "07",
        chapterLabel: "安全",
        image: VISUAL_IMAGES.hero.home,
        steps: [
          { label: "核实链接", hint: "检查目标 URL" },
          { label: "独立密码", hint: "切勿重复使用" },
          { label: "保护 OTP", hint: "验证码保持私密" },
          { label: "设备安全", hint: "更新系统与浏览器" },
          { label: "尽早行动", hint: "报告异常活动" },
        ],
        warningTitle: "若情况异常",
        warning: "停止操作，在已核实的目标更改密码，并仅使用官方恢复渠道。",
      },
    },
    promoFlows: {
      "free-credit": {
        eyebrow: "优惠拆解",
        title: "免费彩金检查点",
        intro: "注册前请在外部平台确认实时资格与流水。",
        steps: [
          { label: "资格", hint: "如提供则面向新注册" },
          { label: "领取", hint: "遵循实时领取规则" },
          { label: "条件", hint: "阅读流水与限额" },
          { label: "完成", hint: "完成所需游戏" },
          { label: "核实", hint: "在平台确认" },
        ],
      },
      welcome: {
        eyebrow: "欢迎路径",
        title: "欢迎优惠结构",
        intro: "欢迎优惠因实时活动而异。本页用于理解常见核对项，并非保证可用性。",
        steps: [
          { label: "资格", hint: "新用户或回流规则" },
          { label: "领取", hint: "必要时选择加入" },
          { label: "条件", hint: "游戏与投注限额" },
          { label: "完成", hint: "如有则完成流水" },
          { label: "核实", hint: "确认收银台状态" },
        ],
      },
      "bonus-guide": {
        eyebrow: "优惠知识",
        title: "奖金条款如何运作",
        intro: "流水、资格与排除游戏决定优惠能否完成。务必核实实时条款。",
        steps: [
          { label: "资格", hint: "谁可参与" },
          { label: "领取", hint: "如何激活" },
          { label: "条件", hint: "流水与限额" },
          { label: "完成", hint: "哪些算有效投注" },
          { label: "核实", hint: "查看剩余要求" },
        ],
      },
    },
  },
};

export function getVisualFlows(locale: Locale): VisualFlows {
  return flows[locale];
}
