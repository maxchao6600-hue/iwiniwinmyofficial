import type { Locale } from "@/lib/i18n/config";

type BlockLabels = {
  checksFirst: string;
  reviewSequence: string;
  detailsAttention: string;
  quickReference: string;
  importantBoundary: string;
  infoSiteTitle: string;
  useSiteTo: string;
  usePlatformTo: string;
  faqConfirmSuffix: string;
  gamesFormatsTitle: string;
  gamesFormatsIntro1: string;
  gamesFormatsIntro2: string;
  gamesGlanceTitle: string;
  gamesGlanceIntro: string;
  gamesProvidersTitle: string;
  gamesProvidersP1: string;
  gamesProvidersP2: string;
  gamesChoosingTitle: string;
  gamesBeforeTitle: string;
  guidesHubTitle: string;
  guidesCategoriesTitle: string;
  guidesCategoriesIntro: string;
  guidesUsefulTitle: string;
  guidesPrepareTitle: string;
  guidesCompleteTitle: string;
  promoCategoriesTitle: string;
  promoCategoriesP1: string;
  promoCategoriesP2: string;
  promoEligibilityTitle: string;
  promoReadTermsTitle: string;
  promoCommonTitle: string;
  promoResponsibleTitle: string;
  promoResponsibleBody: string;
  providersWhatTitle: string;
  providersWhatP1: string;
  providersWhatP2: string;
  providersHelpTitle: string;
  providersBeforeTitle: string;
  understandingPrefix: string;
  faqFirst: (topic: string) => string;
  faqWhy: (topic: string) => string;
  faqKnow: (topic: string) => string;
  faqWhere: (topic: string) => string;
};

const en: BlockLabels = {
  checksFirst: "Checks to make first",
  reviewSequence: "A practical review sequence",
  detailsAttention: "Details that deserve attention",
  quickReference: "Quick reference",
  importantBoundary: "Important boundary",
  infoSiteTitle: "Information site and external platform",
  useSiteTo: "Use this website to",
  usePlatformTo: "Use the external platform to",
  faqConfirmSuffix:
    "When account-specific evidence is involved, use the authenticated external-platform channel.",
  gamesFormatsTitle: "Understanding the different game formats",
  gamesFormatsIntro1:
    "Each category in the IWIN ecosystem uses different rules, pacing and information panels. Comparing them before opening the external lobby helps you choose a format that matches how you want to play — not how you hope outcomes will behave.",
  gamesFormatsIntro2:
    "Nothing in this hub predicts results, guarantees access to every title or replaces the live catalogue shown after login.",
  gamesGlanceTitle: "Slots, live casino, sports and 4D at a glance",
  gamesGlanceIntro:
    "Use these summaries to understand mechanics before you review stake limits and promotion terms on the external platform.",
  gamesProvidersTitle: "Game providers in the ecosystem",
  gamesProvidersP1:
    "Provider names help you orient yourself in a catalogue, but the live lobby remains the source for what is currently available to your account and device.",
  gamesProvidersP2: "See the provider directory for short descriptions of commonly referenced studios and game families.",
  gamesChoosingTitle: "Choosing a game category",
  gamesBeforeTitle: "Before you play",
  guidesHubTitle: "How to use this knowledge hub",
  guidesCategoriesTitle: "Guide categories",
  guidesCategoriesIntro: "Each category focuses on a different part of the account journey.",
  guidesUsefulTitle: "Most useful starting points",
  guidesPrepareTitle: "Prepare here",
  guidesCompleteTitle: "Complete there",
  promoCategoriesTitle: "Promotion categories and what to verify",
  promoCategoriesP1:
    "Promotions are conditional offers. A headline amount or label does not, by itself, prove that you qualify, that quota remains or that withdrawal will be unrestricted.",
  promoCategoriesP2:
    "Use this hub to understand common structures — welcome labels, free-credit descriptions and bonus guides — then confirm live terms on the external platform.",
  promoEligibilityTitle: "How promotion eligibility usually works",
  promoReadTermsTitle: "How to read promotion terms",
  promoCommonTitle: "Common conditions to expect",
  promoResponsibleTitle: "Responsible promotion use",
  promoResponsibleBody:
    "Accept an offer only after you understand its conditions and how it affects your budget. Promotions are not a substitute for affordable entertainment limits.",
  providersWhatTitle: "What a game provider is",
  providersWhatP1:
    "A game provider develops the software, art and rule sets behind individual titles. On the external platform, those titles appear inside category lobbies such as slots or live casino.",
  providersWhatP2:
    "Listing a provider here describes an ecosystem reference only. It is not a claim of direct partnership, permanent availability or identical game selection across accounts.",
  providersHelpTitle: "What provider names help you understand",
  providersBeforeTitle: "Before opening a provider lobby",
  understandingPrefix: "Understanding",
  faqFirst: (topic) => `What is the first thing to check about ${topic}?`,
  faqWhy: (topic) => `Why does ${topic} matter?`,
  faqKnow: (topic) => `What should I know about ${topic}?`,
  faqWhere: (topic) => `Where should I confirm ${topic}?`,
};

const ms: BlockLabels = {
  checksFirst: "Semakan awal",
  reviewSequence: "Urutan semakan praktikal",
  detailsAttention: "Butiran yang perlu diperhatikan",
  quickReference: "Rujukan pantas",
  importantBoundary: "Sempadan penting",
  infoSiteTitle: "Laman maklumat dan platform luar",
  useSiteTo: "Gunakan laman ini untuk",
  usePlatformTo: "Gunakan platform luar untuk",
  faqConfirmSuffix:
    "Apabila bukti khusus akaun diperlukan, gunakan saluran platform luar yang disahkan.",
  gamesFormatsTitle: "Memahami format permainan berbeza",
  gamesFormatsIntro1:
    "Setiap kategori dalam ekosistem IWIN menggunakan peraturan, tempo dan panel maklumat berbeza. Membandingkannya sebelum membuka lobi luar membantu anda memilih format yang sepadan dengan cara bermain — bukan harapan keputusan.",
  gamesFormatsIntro2:
    "Tiada apa di hab ini meramalkan keputusan, menjamin akses setiap tajuk atau menggantikan katalog langsung selepas log masuk.",
  gamesGlanceTitle: "Slot, kasino langsung, sukan dan 4D sepintas lalu",
  gamesGlanceIntro:
    "Gunakan ringkasan ini untuk memahami mekanik sebelum semak had pertaruhan dan terma promosi di platform luar.",
  gamesProvidersTitle: "Penyedia permainan dalam ekosistem",
  gamesProvidersP1:
    "Nama penyedia membantu orientasi katalog, tetapi lobi langsung kekal sumber ketersediaan semasa untuk akaun dan peranti anda.",
  gamesProvidersP2:
    "Lihat direktori penyedia untuk penerangan ringkas studio dan keluarga permainan yang kerap dirujuk.",
  gamesChoosingTitle: "Memilih kategori permainan",
  gamesBeforeTitle: "Sebelum bermain",
  guidesHubTitle: "Cara menggunakan hab pengetahuan ini",
  guidesCategoriesTitle: "Kategori panduan",
  guidesCategoriesIntro: "Setiap kategori fokus pada bahagian berbeza perjalanan akaun.",
  guidesUsefulTitle: "Permulaan paling berguna",
  guidesPrepareTitle: "Sediakan di sini",
  guidesCompleteTitle: "Lengkapkan di sana",
  promoCategoriesTitle: "Kategori promosi dan apa perlu disahkan",
  promoCategoriesP1:
    "Promosi ialah tawaran bersyarat. Jumlah atau label headline tidak, sendiri, membuktikan kelayakan, baki kuota atau kebebasan pengeluaran.",
  promoCategoriesP2:
    "Gunakan hab ini untuk memahami struktur biasa — label alu-aluan, kredit percuma dan panduan bonus — kemudian sahkan terma langsung di platform luar.",
  promoEligibilityTitle: "Bagaimana kelayakan promosi biasanya berfungsi",
  promoReadTermsTitle: "Cara membaca terma promosi",
  promoCommonTitle: "Syarat biasa yang dijangka",
  promoResponsibleTitle: "Penggunaan promosi bertanggungjawab",
  promoResponsibleBody:
    "Terima tawaran hanya selepas faham syarat dan kesan pada bajet. Promosi bukan pengganti had hiburan mampu milik.",
  providersWhatTitle: "Apa itu penyedia permainan",
  providersWhatP1:
    "Penyedia permainan membangunkan perisian, grafik dan peraturan tajuk individu. Di platform luar, tajuk muncul dalam lobi kategori seperti slot atau kasino langsung.",
  providersWhatP2:
    "Penyenaraian di sini hanya rujukan ekosistem, bukan dakwaan perkongsian langsung, ketersediaan kekal atau pilihan sama merentas akaun.",
  providersHelpTitle: "Apa nama penyedia bantu anda fahami",
  providersBeforeTitle: "Sebelum membuka lobi penyedia",
  understandingPrefix: "Memahami",
  faqFirst: (topic) => `Apa perkara pertama perlu disemak tentang ${topic}?`,
  faqWhy: (topic) => `Mengapa ${topic} penting?`,
  faqKnow: (topic) => `Apa perlu diketahui tentang ${topic}?`,
  faqWhere: (topic) => `Di mana perlu sahkan ${topic}?`,
};

const zh: BlockLabels = {
  checksFirst: "优先检查项",
  reviewSequence: "实用核对顺序",
  detailsAttention: "值得关注的细节",
  quickReference: "快速参考",
  importantBoundary: "重要边界",
  infoSiteTitle: "信息网站与外部平台",
  useSiteTo: "在本站可以",
  usePlatformTo: "在外部平台需要",
  faqConfirmSuffix: "若涉及账户专属证据，请使用已认证的外部平台渠道。",
  gamesFormatsTitle: "理解不同游戏形式",
  gamesFormatsIntro1:
    "IWIN 生态中各类别规则、节奏与信息面板不同。打开外部大厅前先比较，有助于选择符合游玩方式的形式，而非基于结果期望。",
  gamesFormatsIntro2: "本页不预测结果、不保证可访问每个游戏，也不能替代登录后显示的实时目录。",
  gamesGlanceTitle: "老虎机、真人、体育与 4D 概览",
  gamesGlanceIntro: "在前往外部平台查看限额与优惠条款前，先用这些摘要理解机制。",
  gamesProvidersTitle: "生态中的游戏提供商",
  gamesProvidersP1: "提供商名称有助于理解目录，但实时大厅才是您账户与设备当前可用内容的来源。",
  gamesProvidersP2: "请参阅提供商目录，了解常见工作室与游戏系列的简要说明。",
  gamesChoosingTitle: "如何选择游戏类别",
  gamesBeforeTitle: "游戏前须知",
  guidesHubTitle: "如何使用本知识中心",
  guidesCategoriesTitle: "指南分类",
  guidesCategoriesIntro: "每个分类对应账户流程的不同环节。",
  guidesUsefulTitle: "最有用的起点",
  guidesPrepareTitle: "在此准备",
  guidesCompleteTitle: "在彼完成",
  promoCategoriesTitle: "优惠类别与核实要点",
  promoCategoriesP1: "优惠是有条件的。标题金额或名称本身不能证明您符合资格、仍有名额或可无限制提款。",
  promoCategoriesP2: "通过本页了解常见结构——欢迎优惠、免费额度说明与奖金指南——再到外部平台确认实时条款。",
  promoEligibilityTitle: "优惠资格通常如何判定",
  promoReadTermsTitle: "如何阅读优惠条款",
  promoCommonTitle: "常见条件",
  promoResponsibleTitle: "理性使用优惠",
  promoResponsibleBody: "仅在理解条件及其对预算的影响后再接受优惠。优惠不能替代可负担的娱乐限额。",
  providersWhatTitle: "什么是游戏提供商",
  providersWhatP1: "游戏提供商开发各游戏的软件、美术与规则。在外部平台上，这些游戏出现在老虎机或真人等分类大厅中。",
  providersWhatP2: "此处列出仅为生态参考，不代表直接合作、永久可用或各账户游戏完全一致。",
  providersHelpTitle: "提供商名称可帮助理解",
  providersBeforeTitle: "打开提供商大厅前",
  understandingPrefix: "理解",
  faqFirst: (topic) => `关于${topic}首先应检查什么？`,
  faqWhy: (topic) => `为什么${topic}很重要？`,
  faqKnow: (topic) => `关于${topic}应了解什么？`,
  faqWhere: (topic) => `应在哪里确认${topic}？`,
};

export function getBlockLabels(locale: Locale): BlockLabels {
  return { en, ms, zh }[locale];
}

export type { BlockLabels };
