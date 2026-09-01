import type { Locale } from "@/lib/i18n/config";
import type { GameCategoryId } from "@/content/games/catalog";

export type GamesHubSection = {
  id: GameCategoryId;
  title: string;
  intro: string;
  bullets: string[];
  guideLabel: string;
  faqLabel: string;
};

export type GamesHubExtra = {
  categoryNavTitle: string;
  exploreLabel: string;
  chooseTitle: string;
  chooseIntro: string;
  chooseHeaders: [string, string, string, string];
  chooseRows: [string, string, string, string][];
  providersTitle: string;
  providersIntro: string;
  relatedGuidesTitle: string;
  sections: GamesHubSection[];
};

const en: GamesHubExtra = {
  categoryNavTitle: "Jump to a category",
  exploreLabel: "Explore IWIN game categories",
  chooseTitle: "How to choose a game category",
  chooseIntro:
    "Each IWIN game category has different rules, pace and checks. Use this comparison before opening the live lobby — individual titles still depend on what is available after login.",
  chooseHeaders: ["Format", "Style", "What to check", "Beginner note"],
  chooseRows: [
    ["Slots", "Digital reels and features", "Paytable, volatility, stake limits", "Start with low stakes and read rules"],
    ["Live casino", "Streamed timed tables", "Limits, connection, betting windows", "Join only when you can follow the pace"],
    ["Sports", "Pre-match and in-play markets", "Odds, settlement, market rules", "Confirm market type before submitting"],
    ["4D", "Scheduled number draws", "Draw schedule, entry types, results", "Treat selections as entertainment"],
  ],
  providersTitle: "Game provider references",
  providersIntro:
    "Provider names help you understand who supplies a title in the lobby. Listing a name here is for orientation only — not a partnership or availability guarantee.",
  relatedGuidesTitle: "Related IWIN guides",
  sections: [
    {
      id: "slots",
      title: "IWIN Slots",
      intro:
        "Digital reel games with paylines or ways-to-win, bonus features and stake controls. Each title has its own paytable, volatility and feature rules.",
      bullets: [
        "Read the in-game paytable and feature summary before increasing stakes.",
        "Volatility affects how often wins may appear — not whether outcomes are guaranteed.",
        "Promotions may restrict which slot titles count toward turnover.",
      ],
      guideLabel: "Full IWIN Slots guide",
      faqLabel: "Games FAQ",
    },
    {
      id: "live-casino",
      title: "IWIN Live Casino",
      intro:
        "Streamed table games with real dealers and timed betting windows. Formats may include baccarat, roulette or blackjack-style tables depending on the live lobby.",
      bullets: [
        "Check minimum and maximum table limits before joining a stream.",
        "A stable connection matters — missed betting windows cannot always be recovered.",
        "Side bets and rule variants differ by table; read the on-screen summary.",
      ],
      guideLabel: "Full live casino guide",
      faqLabel: "Games FAQ",
    },
    {
      id: "sports",
      title: "IWIN Sports",
      intro:
        "Pre-match and in-play markets on sporting events. Odds, handicaps and settlement rules vary by sport and market type.",
      bullets: [
        "Confirm whether your bet is pre-match or in-play before submitting.",
        "Understand how void, postponed or suspended events are settled.",
        "Cash-out or partial settlement features, if offered, follow live platform rules.",
      ],
      guideLabel: "Full sports guide",
      faqLabel: "Games FAQ",
    },
    {
      id: "4d",
      title: "IWIN 4D",
      intro:
        "Number-selection formats tied to scheduled draws. Entry types, prize tables and draw times are platform-specific.",
      bullets: [
        "Verify draw schedules and cut-off times on the live platform.",
        "Keep your entry reference until results are confirmed.",
        "Do not rely on third-party draw screenshots — check authenticated results.",
      ],
      guideLabel: "Full 4D guide",
      faqLabel: "Games FAQ",
    },
  ],
};

const ms: GamesHubExtra = {
  categoryNavTitle: "Lompat ke kategori",
  exploreLabel: "Terokai kategori permainan IWIN",
  chooseTitle: "Cara memilih kategori permainan",
  chooseIntro:
    "Setiap kategori permainan IWIN mempunyai peraturan, tempo dan semakan berbeza. Gunakan perbandingan ini sebelum membuka lobi langsung — tajuk individu masih bergantung pada ketersediaan selepas log masuk.",
  chooseHeaders: ["Format", "Gaya", "Semak dahulu", "Nota pemula"],
  chooseRows: [
    ["Slot", "Gulung digital & ciri", "Jadual bayaran, volatiliti, had", "Mulakan dengan pertaruhan rendah"],
    ["Kasino langsung", "Meja langsung bertempoh", "Had, sambungan, tetingkap", "Sertai jika boleh ikut tempo"],
    ["Sukan", "Pra-perlawanan & langsung", "Odds, penyelesaian, peraturan", "Sahkan jenis pasaran dahulu"],
    ["4D", "Cabutan berjadual", "Jadual, jenis entri, keputusan", "Anggap sebagai hiburan"],
  ],
  providersTitle: "Rujukan penyedia permainan",
  providersIntro:
    "Nama penyedia membantu anda memahami siapa membekalkan tajuk dalam lobi. Penyenaraian di sini untuk orientasi sahaja — bukan jaminan perkongsian atau ketersediaan.",
  relatedGuidesTitle: "Panduan IWIN berkaitan",
  sections: [
    {
      id: "slots",
      title: "Slot IWIN",
      intro:
        "Permainan gelendong digital dengan garisan bayaran atau ways-to-win, ciri bonus dan kawalan pertaruhan. Setiap tajuk mempunyai jadual bayaran, volatiliti dan peraturan ciri sendiri.",
      bullets: [
        "Baca jadual bayaran dan ringkasan ciri dalam permainan sebelum menaikkan pertaruhan.",
        "Volatiliti mempengaruhi kekerapan kemenangan mungkin muncul — bukan jaminan keputusan.",
        "Promosi mungkin mengehadkan tajuk slot yang layak untuk pusing ganti.",
      ],
      guideLabel: "Panduan slot IWIN penuh",
      faqLabel: "Soalan lazim permainan",
    },
    {
      id: "live-casino",
      title: "Kasino Langsung IWIN",
      intro:
        "Permainan meja distrim dengan peniaga sebenar dan tetingkap pertaruhan terhad. Format mungkin termasuk baccarat, rolet atau meja gaya blackjack bergantung pada lobi langsung.",
      bullets: [
        "Semak had minimum dan maksimum meja sebelum menyertai strim.",
        "Sambungan stabil penting — tetingkap pertaruhan terlepas tidak sentiasa boleh dipulihkan.",
        "Pertaruhan sampingan dan varian peraturan berbeza mengikut meja; baca ringkasan skrin.",
      ],
      guideLabel: "Panduan kasino langsung penuh",
      faqLabel: "Soalan lazim permainan",
    },
    {
      id: "sports",
      title: "Sukan IWIN",
      intro:
        "Pasaran pra-perlawanan dan langsung untuk acara sukan. Odds, handicap dan peraturan penyelesaian berbeza mengikut sukan dan jenis pasaran.",
      bullets: [
        "Sahkan sama ada pertaruhan anda pra-perlawanan atau langsung sebelum menghantar.",
        "Fahami bagaimana acara batal, ditangguh atau digantung diselesaikan.",
        "Ciri cash-out atau penyelesaian separa, jika ditawarkan, mengikut peraturan platform langsung.",
      ],
      guideLabel: "Panduan sukan penuh",
      faqLabel: "Soalan lazim permainan",
    },
    {
      id: "4d",
      title: "4D IWIN",
      intro:
        "Format pilihan nombor yang terikat pada cabutan berjadual. Jenis kemasukan, jadual hadiah dan masa cabutan khusus platform.",
      bullets: [
        "Sahkan jadual cabutan dan masa tutup pada platform langsung.",
        "Simpan rujukan kemasukan sehingga keputusan disahkan.",
        "Jangan bergantung pada tangkapan skrin cabutan pihak ketiga — semak keputusan yang disahkan.",
      ],
      guideLabel: "Panduan 4D penuh",
      faqLabel: "Soalan lazim permainan",
    },
  ],
};

const zh: GamesHubExtra = {
  categoryNavTitle: "跳转到类别",
  exploreLabel: "浏览 IWIN 游戏类别",
  chooseTitle: "如何选择游戏类别",
  chooseIntro:
    "每个 IWIN 游戏类别的规则、节奏与核对要点不同。打开实时大厅前可参考下表——具体游戏仍以登录后可用内容为准。",
  chooseHeaders: ["形式", "风格", "先核对", "新手提示"],
  chooseRows: [
    ["老虎机", "数字转轮与特色", "赔付表、波动、投注限额", "先用低注并阅读规则"],
    ["真人娱乐场", "限时直播牌桌", "限额、网络、下注窗口", "跟得上节奏再加入"],
    ["体育", "赛前与滚球市场", "赔率、结算、市场规则", "提交前确认市场类型"],
    ["4D", "定时开奖", "开奖时间、投注类型、结果", "将选号视为娱乐"],
  ],
  providersTitle: "游戏提供商参考",
  providersIntro:
    "提供商名称帮助您了解大厅中的游戏来源。此处列出仅供定位——不代表合作或永久可用。",
  relatedGuidesTitle: "相关 IWIN 指南",
  sections: [
    {
      id: "slots",
      title: "IWIN 老虎机",
      intro:
        "数字转轴游戏，含赔付线或 ways-to-win、奖励功能与投注控制。每个游戏都有独立赔付表、波动性与功能规则。",
      bullets: [
        "提高投注前请阅读游戏内赔付表与功能说明。",
        "波动性影响中奖频率的可能表现——不代表结果有保证。",
        "优惠可能限制哪些老虎机计入流水。",
      ],
      guideLabel: "完整老虎机指南",
      faqLabel: "游戏常见问题",
    },
    {
      id: "live-casino",
      title: "IWIN 真人娱乐场",
      intro:
        "荷官直播桌台，投注窗口有时限。形式可能包括百家乐、轮盘或二十一点类桌台，取决于实时大厅。",
      bullets: [
        "加入直播前请核对桌台最低与最高限额。",
        "稳定网络很重要——错过的投注窗口未必能补回。",
        "边注与规则变体因桌台而异；请阅读屏幕摘要。",
      ],
      guideLabel: "完整真人娱乐场指南",
      faqLabel: "游戏常见问题",
    },
    {
      id: "sports",
      title: "IWIN 体育",
      intro:
        "体育赛事的赛前与滚球盘口。赔率、让分与结算规则因运动与盘口类型而异。",
      bullets: [
        "提交前确认投注属于赛前还是滚球。",
        "了解作废、延期或暂停赛事如何结算。",
        "若提供提前结算或部分结算，须遵循实时平台规则。",
      ],
      guideLabel: "完整体育指南",
      faqLabel: "游戏常见问题",
    },
    {
      id: "4d",
      title: "IWIN 4D",
      intro:
        "与定期开奖绑定的选号形式。投注类型、奖金表与开奖时间因平台而异。",
      bullets: [
        "在实时平台核对开奖时间表与截止时间。",
        "保留投注编号直至结果确认。",
        "勿依赖第三方开奖截图——请在已认证页面核对。",
      ],
      guideLabel: "完整 4D 指南",
      faqLabel: "游戏常见问题",
    },
  ],
};

export function getGamesHubExtra(locale: Locale): GamesHubExtra {
  return locale === "ms" ? ms : locale === "zh" ? zh : en;
}
