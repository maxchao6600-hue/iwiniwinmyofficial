import type { Locale } from "@/lib/i18n/config";
import type { ExtraFaq, ExtraPack, ExtraSection } from "./extras";
import type { PageId } from "./types";

export type DepthPack = {
  sections: ExtraSection[];
  bullets?: ExtraPack["bullets"];
  steps?: ExtraPack["steps"];
  faqs?: ExtraFaq[];
};

type T = { en: string; ms: string; zh: string };

type DepthSpec = {
  sections: { title: T; paragraphs: T[] }[];
  bullets?: { title: T; items: T[] };
  steps?: { title: T; steps: T[] };
  faqs?: { question: T; answer: T }[];
};

function pick(locale: Locale, value: T): string {
  return value[locale];
}

const DATA: Record<PageId, DepthSpec> = {
  games: {
    sections: [
      {
        title: { en: "Slots as a game format", ms: "Slot sebagai format permainan", zh: "老虎机形式" },
        paragraphs: [
          {
            en: "Slots are digital reel games. A round usually starts after you confirm a stake and ends when the result is shown according to that title’s paytable.",
            ms: "Slot ialah permainan gelendong digital. Pusingan biasanya bermula selepas pertaruhan disahkan dan berakhir apabila keputusan dipaparkan mengikut jadual pembayaran tajuk itu.",
            zh: "老虎机是数字转轴游戏。确认投注后开始一局，结果按该游戏赔付表显示后结束。",
          },
          {
            en: "What you can learn here is how to read symbols, lines or ways, bonus rules and stake cost — not which title is “best” or likely to pay.",
            ms: "Apa yang boleh dipelajari di sini ialah cara membaca simbol, garis atau cara kalah menang, peraturan bonus dan kos pertaruhan — bukan tajuk mana yang “terbaik” atau berkemungkinan membayar.",
            zh: "这里帮助您阅读符号、线数或中奖方式、奖励规则与投注成本——而不是哪款“最好”或更可能派彩。",
          },
        ],
      },
      {
        title: { en: "Live casino as a game format", ms: "Kasino langsung sebagai format", zh: "真人娱乐场形式" },
        paragraphs: [
          {
            en: "Live casino pairs a streamed dealer or presenter with a digital betting interface. Bets normally count only when the table confirms acceptance inside the betting window.",
            ms: "Kasino langsung menggabungkan pengurus atau presenter yang distrim dengan antara muka pertaruhan digital. Pertaruhan biasanya dikira hanya apabila meja mengesahkan penerimaan dalam tetingkap pertaruhan.",
            zh: "真人娱乐场将荷官或主持直播与数字投注界面结合。通常只有在投注窗口内被桌台确认接受的注才会生效。",
          },
          {
            en: "Useful checks include table limits, game rules, side-bet tables, connection quality and what “accepted” looks like on screen.",
            ms: "Semakan berguna termasuk had meja, peraturan permainan, jadual pertaruhan sampingan, kualiti sambungan dan rupa “diterima” pada skrin.",
            zh: "有用的检查包括桌台限额、游戏规则、边注赔付、网络质量，以及屏幕上“已接受”的显示方式。",
          },
        ],
      },
      {
        title: { en: "Sports as a game format", ms: "Sukan sebagai format", zh: "体育形式" },
        paragraphs: [
          {
            en: "Sports interfaces list markets on events. A selection becomes a wager only after the platform confirms it on the bet slip or receipt.",
            ms: "Antara muka sukan menyenaraikan pasaran acara. Pilihan menjadi pertaruhan hanya selepas platform mengesahkannya pada slip atau resit.",
            zh: "体育界面列出赛事盘口。只有在平台于注单或回执上确认后，选择才成为有效投注。",
          },
          {
            en: "Learn how pre-match and in-play markets differ, how to read odds, and why settlement notes matter more than commentary or statistics.",
            ms: "Pelajari perbezaan pasaran pra-perlawanan dan langsung, cara membaca odds, dan mengapa nota penyelesaian lebih penting daripada ulasan atau statistik.",
            zh: "了解赛前与滚球盘口的差异、如何阅读赔率，以及为何结算说明比评论或统计更重要。",
          },
        ],
      },
      {
        title: { en: "4D as a game format", ms: "4D sebagai format", zh: "4D 形式" },
        paragraphs: [
          {
            en: "4D generally means number-selection products tied to a named draw. Entry types and prize tables can differ, so one 4D label does not describe every product.",
            ms: "4D secara amnya bermaksud produk pilihan nombor yang terikat pada cabutan bernama. Jenis kemasukan dan jadual hadiah boleh berbeza, jadi satu label 4D tidak menerangkan setiap produk.",
            zh: "4D 通常指与具名开奖绑定的选号产品。投注类型与奖金表可能不同，因此一个 4D 名称不能代表所有产品。",
          },
          {
            en: "This hub does not publish official results, draw times or odds. Use the destination’s current draw page for those facts.",
            ms: "Hab ini tidak menerbitkan keputusan rasmi, masa cabutan atau odds. Gunakan halaman cabutan semasa destinasi untuk fakta tersebut.",
            zh: "本页不发布官方开奖结果、开奖时间或赔率。请以目标平台当前开奖页为准。",
          },
        ],
      },
      {
        title: { en: "How game categories differ", ms: "Bagaimana kategori permainan berbeza", zh: "游戏类别如何不同" },
        paragraphs: [
          {
            en: "Gameplay format: slots are discrete digital rounds; live casino uses a timed betting window around a streamed table; sports uses event markets; 4D uses scheduled draws.",
            ms: "Format permainan: slot ialah pusingan digital diskret; kasino langsung menggunakan tetingkap pertaruhan sekitar meja distrim; sukan menggunakan pasaran acara; 4D menggunakan cabutan berjadual.",
            zh: "玩法形式：老虎机是独立数字局；真人是围绕直播桌台的限时投注窗口；体育是赛事盘口；4D 是按计划开奖。",
          },
          {
            en: "Pace and interaction also differ: autoplay can speed slots; live tables need attention during the window; in-play sports can change quickly; 4D has a cut-off rather than continuous rounds. Rules, limits and the information you should check all live on the product screen — not in a category name.",
            ms: "Tempo dan interaksi juga berbeza: autoplay boleh mempercepat slot; meja langsung memerlukan perhatian semasa tetingkap; sukan langsung boleh berubah pantas; 4D mempunyai masa tutup, bukan pusingan berterusan. Peraturan, had dan maklumat yang perlu disemak berada pada skrin produk — bukan pada nama kategori.",
            zh: "节奏与互动也不同：自动旋转会加快老虎机；真人需在投注窗口内操作；滚球可能迅速变化；4D 有截止时间而非连续局。规则、限额与应核对的信息都在产品屏幕上，而不是类别名称里。",
          },
        ],
      },
      {
        title: { en: "Choosing a game category", ms: "Memilih kategori permainan", zh: "如何选择游戏类别" },
        paragraphs: [
          {
            en: "Match preferred format, pace, game style, available limits, readable rules and a personal budget that does not depend on recovering a previous result.",
            ms: "Padankan format pilihan, tempo, gaya permainan, had tersedia, peraturan yang boleh dibaca dan bajet peribadi yang tidak bergantung pada pemulihan keputusan terdahulu.",
            zh: "按偏好的形式、节奏、风格、可用限额、可读规则，以及不依赖追回上次结果的个人预算来选择。",
          },
          {
            en: "A category with a lower minimum stake is not automatically safer. Set a stop point before you open the lobby.",
            ms: "Kategori dengan pertaruhan minimum lebih rendah tidak semestinya lebih selamat. Tetapkan titik berhenti sebelum membuka lobi.",
            zh: "最低投注更低的类别并不自动更安全。打开大厅前先设定停止点。",
          },
        ],
      },
    ],
    faqs: [
      {
        question: { en: "Where do I compare providers?", ms: "Di mana membandingkan penyedia?", zh: "在哪里比较提供商？" },
        answer: {
          en: "Use the provider directory for ecosystem names, then confirm availability in the live lobby.",
          ms: "Gunakan direktori penyedia untuk nama ekosistem, kemudian sahkan ketersediaan di lobi langsung.",
          zh: "使用提供商目录了解生态名称，再到实时大厅确认是否可用。",
        },
      },
    ],
  },
  "games-slots": {
    sections: [
      {
        title: { en: "Common slot formats", ms: "Format slot biasa", zh: "常见老虎机形式" },
        paragraphs: [
          {
            en: "Titles may use different reel counts, line structures, ways-to-win, cluster pays or feature-buy options. A similar theme does not mean the same math or the same cost per spin.",
            ms: "Tajuk mungkin menggunakan bilangan gelendong, struktur garis, cara kalah menang, bayaran kluster atau pilihan beli ciri yang berbeza. Tema serupa tidak bermaksud matematik atau kos setiap putaran yang sama.",
            zh: "不同游戏可能使用不同轴数、线结构、中奖方式、消除赔付或购买功能。主题相似并不代表数学模型或每转成本相同。",
          },
          {
            en: "Confirm the format in the information panel for that title. This page does not rank formats or claim one is more likely to pay.",
            ms: "Sahkan format dalam panel maklumat tajuk itu. Laman ini tidak menilai format atau mendakwa satu lebih berkemungkinan membayar.",
            zh: "请在该游戏信息面板确认形式。本页不对形式排名，也不声称某一种更可能派彩。",
          },
        ],
      },
      {
        title: { en: "Reels and symbols", ms: "Gelendong dan simbol", zh: "转轴与符号" },
        paragraphs: [
          {
            en: "Reels display symbols that the game evaluates after a spin according to its paytable. Regular, wild, scatter and feature symbols, where present, have different roles.",
            ms: "Gelendong memaparkan simbol yang dinilai selepas putaran mengikut jadual pembayaran. Simbol biasa, wild, scatter dan ciri, jika ada, mempunyai peranan berbeza.",
            zh: "转轴显示符号，旋转后由赔付表判定。普通、百搭、分散与功能符号（如有）作用不同。",
          },
          {
            en: "Artwork is not a payout forecast. Read the symbol values and any substitution rules in the game help, not from promotional images.",
            ms: "Grafik bukan ramalan bayaran. Baca nilai simbol dan peraturan penggantian dalam bantuan permainan, bukan dari imej promosi.",
            zh: "美术不是派彩预测。请在游戏帮助中阅读符号分值与替换规则，而不是看宣传图。",
          },
        ],
      },
      {
        title: { en: "Paylines and ways to win", ms: "Garis pembayaran dan cara menang", zh: "支付线与中奖方式" },
        paragraphs: [
          {
            en: "Some games pay on fixed or selectable lines. Others use “ways” that count matching symbols on adjacent reels without a traditional line map.",
            ms: "Sesetengah permainan membayar pada garis tetap atau boleh dipilih. Yang lain menggunakan “cara” yang mengira simbol sepadan pada gelendong bersebelahan tanpa peta garis tradisional.",
            zh: "有的游戏按固定或可选线赔付，有的用“路数”统计相邻轴上的相同符号，而没有传统线地图。",
          },
          {
            en: "Changing the number of lines, if the game allows it, can change total stake. Check the resulting cost, not only the coin or bet-level number.",
            ms: "Menukar bilangan garis, jika dibenarkan, boleh menukar jumlah pertaruhan. Semak kos terhasil, bukan hanya nombor syiling atau tahap pertaruhan.",
            zh: "若游戏允许调整线数，总投注可能变化。请核对最终成本，而不是只看金币或投注等级数字。",
          },
        ],
      },
      {
        title: { en: "Bonus features", ms: "Ciri bonus", zh: "奖励功能" },
        paragraphs: [
          {
            en: "Bonus rounds, if a title has them, follow their own trigger and settlement rules. They can change session pace and the amount at risk.",
            ms: "Pusingan bonus, jika ada, mengikut peraturan pencetus dan penyelesaian sendiri. Ia boleh menukar tempo sesi dan amaun berisiko.",
            zh: "若游戏有奖励局，将遵循其自身触发与结算规则，并可能改变节奏与风险金额。",
          },
          {
            en: "A bonus feature is not a guaranteed profit. Read whether a feature buy, if shown, has a different cost and whether it is available on your account.",
            ms: "Ciri bonus bukan keuntungan terjamin. Baca sama ada pembelian ciri, jika dipaparkan, mempunyai kos berbeza dan sama ada tersedia pada akaun anda.",
            zh: "奖励功能不保证盈利。请阅读购买功能（如有）是否成本不同，以及您的账户是否可用。",
          },
        ],
      },
      {
        title: { en: "Free spins", ms: "Putaran percuma", zh: "免费旋转" },
        paragraphs: [
          {
            en: "Free-spin features, where offered, usually have a stated trigger, a number of spins and sometimes extra conditions such as a multiplier or locked symbols.",
            ms: "Ciri putaran percuma, jika ditawarkan, biasanya mempunyai pencetus, bilangan putaran dan kadangkala syarat tambahan seperti pengganda atau simbol terkunci.",
            zh: "免费旋转（如提供）通常有明确触发条件、次数，有时还有倍数或锁定符号等附加条件。",
          },
          {
            en: "They do not make outcomes certain. Check whether unused spins expire if you leave the game, according to the in-game rules.",
            ms: "Ia tidak menjadikan keputusan pasti. Semak sama ada putaran tidak digunakan luput jika anda meninggalkan permainan, mengikut peraturan dalam permainan.",
            zh: "免费旋转不能让结果变得确定。请按游戏内规则确认离开游戏后未使用次数是否作废。",
          },
        ],
      },
      {
        title: { en: "Multipliers", ms: "Pengganda", zh: "倍数" },
        paragraphs: [
          {
            en: "A multiplier, if present, applies only as the game describes — to certain symbols, features or a limited window. It is not a promise of a larger final balance.",
            ms: "Pengganda, jika ada, terpakai hanya seperti yang diterangkan permainan — pada simbol, ciri atau tetingkap terhad tertentu. Ia bukan janji baki akhir lebih besar.",
            zh: "倍数（如有）仅按游戏说明适用于特定符号、功能或有限窗口，并不承诺最终余额更高。",
          },
          {
            en: "Stacked or increasing multipliers still operate inside the title’s rules. They do not remove the possibility of a losing session.",
            ms: "Pengganda bertindan atau meningkat masih beroperasi dalam peraturan tajuk. Ia tidak menyingkirkan kemungkinan sesi rugi.",
            zh: "叠加或递增倍数仍受该游戏规则约束，不能消除整段游戏亏损的可能。",
          },
        ],
      },
      {
        title: { en: "Understanding game information", ms: "Memahami maklumat permainan", zh: "理解游戏信息" },
        paragraphs: [
          {
            en: "The information or help panel is the source for paytable, features, stake options and any displayed theoretical-return note. Treat promotional banners as advertising, not as rules.",
            ms: "Panel maklumat atau bantuan ialah sumber jadual pembayaran, ciri, pilihan pertaruhan dan sebarang nota pulangan teori. Anggap sepanduk promosi sebagai iklan, bukan peraturan.",
            zh: "信息或帮助面板才是赔付表、功能、投注选项及任何理论回报说明的来源。宣传横幅是广告，不是规则。",
          },
          {
            en: "Any theoretical return, if shown, is long-run mathematical information. It is not a forecast for your next spin or session.",
            ms: "Sebarang pulangan teori, jika dipaparkan, ialah maklumat matematik jangka panjang, bukan ramalan putaran atau sesi anda.",
            zh: "任何理论回报（如显示）是长期数学信息，不是对下一次旋转或本局的预测。",
          },
        ],
      },
      {
        title: { en: "Mobile slot experience", ms: "Pengalaman slot mudah alih", zh: "移动端老虎机" },
        paragraphs: [
          {
            en: "Many titles adapt to smaller screens. Still confirm that stake controls, the information button and the spin control remain readable before you play.",
            ms: "Banyak tajuk menyesuaikan diri pada skrin kecil. Tetap sahkan kawalan pertaruhan, butang maklumat dan kawalan putaran kekal boleh dibaca sebelum bermain.",
            zh: "许多游戏会适配小屏。开始前仍须确认投注控制、信息按钮与旋转按钮清晰可读。",
          },
          {
            en: "Use a trusted destination and a stable connection. See the mobile guide for URL checks and installation-source warnings. This site does not provide an APK.",
            ms: "Gunakan destinasi dipercayai dan sambungan stabil. Lihat panduan mudah alih untuk semakan URL dan amaran sumber pemasangan. Laman ini tidak menyediakan APK.",
            zh: "请使用可信网址与稳定网络。URL 检查与安装来源警示见移动指南。本站不提供 APK。",
          },
        ],
      },
      {
        title: { en: "Things to check before playing", ms: "Perkara perlu disemak sebelum bermain", zh: "游戏前检查" },
        paragraphs: [
          {
            en: "Read rules and limits, review promotion conditions if a bonus applies, review payment conditions before depositing, protect account information, and set a personal spending limit.",
            ms: "Baca peraturan dan had, semak syarat promosi jika bonus terpakai, semak syarat bayaran sebelum deposit, lindungi maklumat akaun, dan tetapkan had belanja peribadi.",
            zh: "阅读规则与限额；若适用奖金请看优惠条件；存款前核对支付条件；保护账户信息；并设定个人消费限额。",
          },
          {
            en: "Do not increase stakes to recover a previous result. See responsible gaming for time limits, breaks and not borrowing to play.",
            ms: "Jangan tingkatkan pertaruhan untuk pulihkan keputusan terdahulu. Lihat permainan bertanggungjawab untuk had masa, rehat dan jangan meminjam untuk bermain.",
            zh: "不要为追回上次结果而提高投注。时间限额、休息以及切勿借钱游戏，见负责任游戏页。",
          },
        ],
      },
    ],
  },
  "games-live-casino": {
    sections: [
      {
        title: { en: "Dealer-based gameplay", ms: "Permainan berasaskan pengurus", zh: "荷官制玩法" },
        paragraphs: [
          {
            en: "The dealer or presenter runs the physical or studio procedure. Your stake is entered through the digital interface. The two layers can be out of sync if video lags.",
            ms: "Pengurus atau presenter menjalankan prosedur fizikal atau studio. Pertaruhan anda dimasukkan melalui antara muka digital. Kedua-dua lapisan boleh tidak segerak jika video tertinggal.",
            zh: "荷官或主持执行现场或演播流程，投注通过数字界面完成。若画面延迟，两层可能不同步。",
          },
          {
            en: "Use the accepted-bet confirmation and official history, not the apparent timing of a card or wheel on a delayed stream.",
            ms: "Gunakan pengesahan pertaruhan diterima dan sejarah rasmi, bukan masa nampak kad atau roda pada strim tertunda.",
            zh: "请以已接受投注的确认与官方历史为准，而不是延迟画面上牌或轮盘的表面时机。",
          },
        ],
      },
      {
        title: { en: "Common live casino formats", ms: "Format kasino langsung biasa", zh: "常见真人形式" },
        paragraphs: [
          {
            en: "Where the ecosystem references them, common formats include baccarat, blackjack, roulette and game-show style tables. Confirm which tables your account can actually open.",
            ms: "Jika ekosistem merujuknya, format biasa termasuk bakarat, blackjack, rolet dan meja gaya rancangan permainan. Sahkan meja mana yang akaun anda benar-benar boleh buka.",
            zh: "在生态有提及的范围内，常见形式包括百家乐、二十一点、轮盘与游戏秀式桌台。请确认您的账户实际能打开哪些桌。",
          },
          {
            en: "This guide does not claim every format is always available. Availability, limits and side bets are table-specific.",
            ms: "Panduan ini tidak mendakwa setiap format sentiasa tersedia. Ketersediaan, had dan pertaruhan sampingan adalah khusus meja.",
            zh: "本指南不声称每种形式始终可用。可用性、限额与边注因桌而异。",
          },
        ],
      },
      {
        title: { en: "Baccarat", ms: "Bakarat", zh: "百家乐" },
        paragraphs: [
          {
            en: "Baccarat typically compares player and banker hands under published drawing rules. Side bets, if offered, use separate payout tables.",
            ms: "Bakarat biasanya membandingkan tangan pemain dan bankir mengikut peraturan cabutan yang diterbitkan. Pertaruhan sampingan, jika ditawarkan, menggunakan jadual bayaran berasingan.",
            zh: "百家乐通常按公布的补牌规则比较闲家与庄家。边注（如有）使用单独赔付表。",
          },
          {
            en: "Commission on banker, pair bets and displayed road maps are table rules, not forecasts. A map of previous results does not make the next hand certain.",
            ms: "Komisen pada bankir, pertaruhan pasangan dan peta jalan yang dipaparkan ialah peraturan meja, bukan ramalan. Peta keputusan terdahulu tidak menjadikan tangan seterusnya pasti.",
            zh: "庄家抽水、对子与路纸是桌台规则，不是预测。过往结果图不能让下一手确定。",
          },
        ],
      },
      {
        title: { en: "Blackjack", ms: "Blackjack", zh: "二十一点" },
        paragraphs: [
          {
            en: "Blackjack tables define hitting, standing, doubling, splitting and dealer behaviour. Those rules can differ between tables even when the name is the same.",
            ms: "Meja blackjack mentakrifkan hit, stand, double, split dan gelagat pengurus. Peraturan boleh berbeza antara meja walaupun namanya sama.",
            zh: "二十一点桌规定要牌、停牌、加倍、分牌与荷官行为。即使名称相同，各桌规则也可能不同。",
          },
          {
            en: "Read the table help before the first hand. Side bets and insurance, if shown, are separate decisions with their own tables.",
            ms: "Baca bantuan meja sebelum tangan pertama. Pertaruhan sampingan dan insurans, jika dipaparkan, ialah keputusan berasingan dengan jadual sendiri.",
            zh: "第一手牌前请阅读桌台说明。边注与保险（如有）是独立决定，有各自赔付表。",
          },
        ],
      },
      {
        title: { en: "Roulette", ms: "Rolet", zh: "轮盘" },
        paragraphs: [
          {
            en: "Roulette settles inside, outside and announced bets according to the wheel type shown for that table. European, American or other layouts are not interchangeable.",
            ms: "Rolet menyelesaikan pertaruhan dalam, luar dan diumumkan mengikut jenis roda meja itu. Susun atur Eropah, Amerika atau lain-lain tidak boleh ditukar ganti.",
            zh: "轮盘按该桌显示的轮型结算内、外及宣布注。欧式、美式或其他布局不能混用。",
          },
          {
            en: "Neighbour and call bets, if offered, have specific placement rules. Previous numbers on a display do not make a pocket “due”.",
            ms: "Pertaruhan jiran dan panggilan, jika ditawarkan, mempunyai peraturan penempatan khusus. Nombor terdahulu pada paparan tidak menjadikan poket “wajar keluar”.",
            zh: "邻注与喊注（如有）有特定摆放规则。显示屏上的过往号码不能让某个袋“该出”。",
          },
        ],
      },
      {
        title: { en: "Game shows", ms: "Rancangan permainan", zh: "游戏秀" },
        paragraphs: [
          {
            en: "Game-show style tables, where offered, combine a presenter, a multiplier or bonus wheel, and a betting interface. Each title has its own prize ladder and betting window.",
            ms: "Meja gaya rancangan permainan, jika ditawarkan, menggabungkan presenter, pengganda atau roda bonus, dan antara muka pertaruhan. Setiap tajuk mempunyai tangga hadiah dan tetingkap pertaruhan sendiri.",
            zh: "游戏秀式桌台（如提供）结合主持、倍数或奖励轮与投注界面。每个游戏有自己的奖金阶梯与投注窗口。",
          },
          {
            en: "Confirm stake limits and feature rules for that show. Entertainment presentation does not change the need for a personal spending limit.",
            ms: "Sahkan had pertaruhan dan peraturan ciri rancangan itu. Pembentangan hiburan tidak menyingkirkan keperluan had belanja peribadi.",
            zh: "请确认该节目的投注限额与功能规则。娱乐呈现不能替代个人消费限额。",
          },
        ],
      },
      {
        title: { en: "Table limits, pace and mobile", ms: "Had meja, tempo dan mudah alih", zh: "桌台限额、节奏与移动端" },
        paragraphs: [
          {
            en: "Minimums and maximums can vary by table and may change. Pace is set by the betting window, not by how fast you want results.",
            ms: "Minimum dan maksimum boleh berbeza mengikut meja dan boleh berubah. Tempo ditetapkan oleh tetingkap pertaruhan, bukan oleh seberapa pantas anda mahu keputusan.",
            zh: "最低与最高限额因桌而异且可能变化。节奏由投注窗口决定，而不是您希望结果有多快。",
          },
          {
            en: "On mobile, keep controls readable and the connection stable. Beginners should watch one full round without betting to see how acceptance is displayed. Then set a clock-based stop point.",
            ms: "Pada mudah alih, pastikan kawalan boleh dibaca dan sambungan stabil. Pemula patut menonton satu pusingan penuh tanpa bertaruh untuk melihat cara penerimaan dipaparkan. Kemudian tetapkan titik berhenti berasaskan jam.",
            zh: "移动端请保持控件可读、网络稳定。初学者可先完整观看一局不下注，看清“已接受”如何显示，再设定按时停止点。",
          },
        ],
      },
    ],
  },
  "games-sports": {
    sections: [
      {
        title: { en: "Common sports markets", ms: "Pasaran sukan biasa", zh: "常见体育盘口" },
        paragraphs: [
          {
            en: "Markets may include match results, handicaps, totals, player or period selections, and other event-specific lines. Names can differ between sports.",
            ms: "Pasaran mungkin termasuk keputusan perlawanan, handicap, jumlah, pilihan pemain atau tempoh, dan line khusus acara lain. Nama boleh berbeza antara sukan.",
            zh: "盘口可能包括赛果、让球、大小、球员或时段选择及其他赛事专属玩法。不同运动的名称可能不同。",
          },
          {
            en: "Open the market text for the exact definition. A familiar label can still settle on overtime, method or listing rules you did not expect.",
            ms: "Buka teks pasaran untuk definisi tepat. Label biasa masih boleh diselesaikan pada extra time, kaedah atau peraturan penyenaraian yang tidak dijangka.",
            zh: "请打开盘口说明核对准确定义。熟悉的名称仍可能按加时、方式或名单规则结算，与预期不同。",
          },
        ],
      },
      {
        title: { en: "Understanding odds", ms: "Memahami odds", zh: "理解赔率" },
        paragraphs: [
          {
            en: "Odds describe the price of a selection at the moment it is offered. Decimal prices often include stake in the displayed return, but the accepted slip is the source for your terms.",
            ms: "Odds menerangkan harga pilihan pada masa ia ditawarkan. Harga perpuluhan sering merangkumi pertaruhan dalam pulangan dipaparkan, tetapi slip diterima ialah sumber terma anda.",
            zh: "赔率描述当时该选项的价格。小数赔率通常把本金计入显示返还，但以被接受的注单为准。",
          },
          {
            en: "A shorter price is not a guaranteed outcome. Prices can move, and a live submission may be accepted at a changed price or rejected under platform settings.",
            ms: "Harga lebih pendek bukan keputusan terjamin. Harga boleh bergerak, dan penyerahan langsung mungkin diterima pada harga berubah atau ditolak mengikut tetapan platform.",
            zh: "更短的赔率不是保证结果。价格会变动，滚球提交可能按变更后的价格接受，或按平台设置被拒绝。",
          },
        ],
      },
      {
        title: { en: "Understanding limits", ms: "Memahami had", zh: "理解限额" },
        paragraphs: [
          {
            en: "Stake minimums, maximums and possible delay settings are account- and market-specific. This information site does not display your personal limits.",
            ms: "Minimum pertaruhan, maksimum dan tetapan kelewatan ialah khusus akaun dan pasaran. Laman maklumat ini tidak memaparkan had peribadi anda.",
            zh: "最低/最高投注及可能的延迟设置因账户与盘口而异。本信息站不显示您的个人限额。",
          },
          {
            en: "Check the live interface before relying on a remembered number from a previous event.",
            ms: "Semak antara muka langsung sebelum bergantung pada nombor yang diingat dari acara terdahulu.",
            zh: "不要沿用上次赛事记住的数字，请在实时界面核对。",
          },
        ],
      },
      {
        title: { en: "Common terms", ms: "Istilah biasa", zh: "常见术语" },
        paragraphs: [
          {
            en: "Pre-match means before the event starts. In-play or live means during the event. Settlement is how the platform grades the selection using its stated source and rules.",
            ms: "Pra-perlawanan bermaksud sebelum acara bermula. Langsung bermaksud semasa acara. Penyelesaian ialah cara platform menilai pilihan menggunakan sumber dan peraturan yang dinyatakan.",
            zh: "赛前指开赛前；滚球指比赛进行中。结算是平台按既定来源与规则判定该选项的方式。",
          },
          {
            en: "Cash-out, where shown, is a variable feature — not a guaranteed right. Dead heat, void and abandoned-event rules can change the returned amount.",
            ms: "Cash-out, jika dipaparkan, ialah ciri berubah — bukan hak terjamin. Peraturan dead heat, batal dan acara ditinggalkan boleh menukar amaun dipulangkan.",
            zh: "提前结算（如显示）是可变功能，不是保证权利。并列、作废与赛事取消规则可能改变返还金额。",
          },
        ],
      },
      {
        title: { en: "Responsible betting", ms: "Pertaruhan bertanggungjawab", zh: "负责任投注" },
        paragraphs: [
          {
            en: "Sports betting is entertainment with a real risk of loss. Do not treat knowledge of a sport as a profit method. Set time and spending limits before in-play decisions accelerate.",
            ms: "Pertaruhan sukan ialah hiburan dengan risiko kerugian sebenar. Jangan anggap pengetahuan sukan sebagai kaedah keuntungan. Tetapkan had masa dan belanja sebelum keputusan langsung memecut.",
            zh: "体育博彩是有真实亏损风险的娱乐。不要把对某项运动的了解当成盈利方法。滚球决策加快前，先设定时间与支出限额。",
          },
          {
            en: "Do not chase a lost selection by increasing the next stake. See the responsible gaming page for borrowing, essential expenses and taking breaks.",
            ms: "Jangan kejar pilihan kalah dengan meningkatkan pertaruhan seterusnya. Lihat halaman permainan bertanggungjawab untuk pinjaman, perbelanjaan penting dan rehat.",
            zh: "不要用加大下一注来追回输掉的选项。借款、保障必要开支与休息，见负责任游戏页。",
          },
        ],
      },
    ],
  },
  "games-4d": {
    sections: [
      {
        title: { en: "Common number formats", ms: "Format nombor biasa", zh: "常见号码形式" },
        paragraphs: [
          {
            en: "Products may offer straight, permutation or system-style entries that cover combinations differently and can change total cost. Digit length and prize categories are product-specific.",
            ms: "Produk mungkin menawarkan kemasukan terus, permutasi atau gaya sistem yang merangkumi kombinasi secara berbeza dan boleh menukar jumlah kos. Panjang digit dan kategori hadiah adalah khusus produk.",
            zh: "产品可能提供直选、复式或系统式投注，覆盖组合的方式不同，总费用也可能不同。位数与奖级因产品而异。",
          },
          {
            en: "Do not assume a format you used elsewhere applies to the IWIN destination product. Read the live entry screen.",
            ms: "Jangan anggap format yang digunakan di tempat lain terpakai pada produk destinasi IWIN. Baca skrin kemasukan langsung.",
            zh: "不要假定其他地方用过的形式适用于 IWIN 目标产品。请阅读实时投注屏幕。",
          },
        ],
      },
      {
        title: { en: "Understanding draw information", ms: "Memahami maklumat cabutan", zh: "理解开奖信息" },
        paragraphs: [
          {
            en: "Match the draw name, date, session and closing time on screen. Preparing a number is not the same as a confirmed ticket.",
            ms: "Padankan nama cabutan, tarikh, sesi dan masa tutup pada skrin. Menyediakan nombor tidak sama dengan tiket disahkan.",
            zh: "请核对屏幕上的开奖名称、日期、场次与截止时间。准备号码不等于已确认彩票。",
          },
          {
            en: "This website does not fabricate official schedules. If a time is not shown on the destination, do not guess it from a third-party page.",
            ms: "Laman ini tidak mereka jadual rasmi. Jika masa tidak dipaparkan di destinasi, jangan teka dari halaman pihak ketiga.",
            zh: "本站不编造官方时间表。若目标平台未显示时间，不要从第三方页面猜测。",
          },
        ],
      },
      {
        title: { en: "Checking results", ms: "Menyemak keputusan", zh: "核对开奖结果" },
        paragraphs: [
          {
            en: "Check results only on the official platform record after settlement. Save the ticket reference, digits and entry type immediately after acceptance.",
            ms: "Semak keputusan hanya pada rekod rasmi platform selepas penyelesaian. Simpan rujukan tiket, digit dan jenis kemasukan sejurus selepas diterima.",
            zh: "结算后仅在平台官方记录核对结果。接受后立即保存票据编号、数字与投注类型。",
          },
          {
            en: "Dreams, calendar dates or previous draws do not make a number more likely. This page does not publish prize odds.",
            ms: "Mimpi, tarikh kalendar atau cabutan terdahulu tidak menjadikan nombor lebih berkemungkinan. Laman ini tidak menerbitkan odds hadiah.",
            zh: "梦、日期或往期开奖不能让某号码更可能中奖。本页不发布奖金赔率。",
          },
        ],
      },
      {
        title: { en: "Important terms", ms: "Istilah penting", zh: "重要术语" },
        paragraphs: [
          {
            en: "Cut-off is the last time an entry can be accepted for a draw. Prize categories describe how matching digits are graded. A reference is the identifier of an accepted ticket.",
            ms: "Masa tutup ialah masa terakhir kemasukan boleh diterima untuk sesuatu cabutan. Kategori hadiah menerangkan cara digit sepadan dinilai. Rujukan ialah pengecam tiket diterima.",
            zh: "截止时间是该期最后可被接受的时刻。奖级说明如何判定相符数字。编号是已接受彩票的标识。",
          },
          {
            en: "If status is unclear after cut-off, use authenticated support with the reference. Do not store passwords with ticket notes.",
            ms: "Jika status tidak jelas selepas masa tutup, gunakan sokongan disahkan dengan rujukan. Jangan simpan kata laluan bersama nota tiket.",
            zh: "截止后若状态不明，请持编号联系已认证支持。不要把密码和彩票备注放在一起。",
          },
        ],
      },
    ],
  },
  "game-providers": {
    sections: [
      {
        title: { en: "Provider directory, not a partnership list", ms: "Direktori penyedia, bukan senarai perkongsian", zh: "提供商目录，不是合作名单" },
        paragraphs: [
          {
            en: "The cards below identify names referenced in the IWIN ecosystem. They are for orientation in a catalogue, not proof of a commercial contract with this partner website.",
            ms: "Kad di bawah mengenal pasti nama yang dirujuk dalam ekosistem IWIN. Ia untuk orientasi katalog, bukan bukti kontrak komersial dengan laman rakan ini.",
            zh: "下方卡片用于识别 IWIN 生态中出现的名称，便于浏览目录，并不证明与本合作网站存在商业合同。",
          },
          {
            en: "Company names belong to their owners. Listing is not endorsement, permanent supply or identical game selection across accounts.",
            ms: "Nama syarikat milik pemiliknya. Penyenaraian bukan sokongan, bekalan kekal atau pilihan permainan sama merentas akaun.",
            zh: "列出名称不等于背书、永久供应，或各账户游戏完全一致。公司名称归其权利人所有。",
          },
        ],
      },
      {
        title: { en: "Category information", ms: "Maklumat kategori", zh: "类别信息" },
        paragraphs: [
          {
            en: "Providers often sit inside slots, live or other lobbies. A studio known for slots may still appear next to other families on a platform. Check the live lobby rather than assuming a category from a logo.",
            ms: "Penyedia sering berada dalam lobi slot, langsung atau lain. Studio dikenali untuk slot masih mungkin muncul di sebelah keluarga lain. Semak lobi langsung, jangan anggap kategori dari logo.",
            zh: "提供商通常出现在老虎机、真人或其它大厅。以老虎机闻名的工作室仍可能出现在其他分类旁。请以实时大厅为准，不要只凭标志猜测类别。",
          },
        ],
      },
      {
        title: { en: "Useful game and category links", ms: "Pautan permainan dan kategori berguna", zh: "有用的游戏与类别链接" },
        paragraphs: [
          {
            en: "After you recognise a provider name, use the slots, live casino, sports and 4D guides to understand format differences. Then use registration, mobile and responsible-gaming pages before playing.",
            ms: "Selepas mengenali nama penyedia, gunakan panduan slot, kasino langsung, sukan dan 4D untuk memahami perbezaan format. Kemudian gunakan halaman pendaftaran, mudah alih dan permainan bertanggungjawab sebelum bermain.",
            zh: "识别提供商名称后，再用老虎机、真人、体育与 4D 指南理解形式差异。游戏前还可阅读注册、移动端与负责任游戏页。",
          },
        ],
      },
    ],
  },
  promotions: {
    sections: [
      {
        title: { en: "Promotion overview", ms: "Gambaran keseluruhan promosi", zh: "优惠概览" },
        paragraphs: [
          {
            en: "Promotions on an external platform may include welcome labels, registration credits, reload offers or other conditional rewards. Headlines are not the full terms.",
            ms: "Promosi di platform luar mungkin termasuk label alu-aluan, kredit pendaftaran, tawaran tambah nilai atau ganjaran bersyarat lain. Tajuk bukan terma penuh.",
            zh: "外部平台优惠可能包括欢迎标签、注册赠金、再存优惠或其他有条件奖励。标题不是完整条款。",
          },
          {
            en: "This hub explains how to evaluate those structures. Whether any offer is currently active must be checked on the destination. Expired wording is not presented here as live.",
            ms: "Hab ini menerangkan cara menilai struktur itu. Sama ada tawaran semasa aktif mesti disemak di destinasi. Kata-kata luput tidak dipaparkan di sini sebagai langsung.",
            zh: "本页说明如何评估这些结构。任何优惠当前是否有效，须在目标平台核对。过期表述不会在此当作正在进行。",
          },
        ],
      },
      {
        title: { en: "Current promotion information", ms: "Maklumat promosi semasa", zh: "当前优惠信息" },
        paragraphs: [
          {
            en: "Source material used for this website describes an RM10 free-credit example for eligible new registrations through the official partner route, with quota, 5x turnover and one-mobile conditions.",
            ms: "Bahan sumber laman ini menerangkan contoh kredit percuma RM10 untuk pendaftaran baharu yang layak melalui laluan rakan rasmi, dengan kuota, pusing ganti 5x dan syarat satu nombor mudah alih.",
            zh: "本站依据的来源资料说明，经官方合作伙伴路径符合资格的新注册可能涉及 RM10 免费额度示例，并含名额、5 倍流水与单一手机号等条件。",
          },
          {
            en: "That description is not a guarantee that the credit is available today. Open the live promotion page for current status.",
            ms: "Penerangan itu bukan jaminan kredit tersedia hari ini. Buka halaman promosi langsung untuk status semasa.",
            zh: "该说明不保证今日仍可领取。请打开实时优惠页查看当前状态。",
          },
        ],
      },
      {
        title: { en: "Eligibility, turnover and withdrawal", ms: "Kelayakan, pusing ganti dan pengeluaran", zh: "资格、流水与提款" },
        paragraphs: [
          {
            en: "Eligibility can depend on registration date, prior claims, account status or payment method. Turnover is a multiple of a defined base in qualifying activity. Withdrawal or transferring balance may cancel progress.",
            ms: "Kelayakan boleh bergantung pada tarikh pendaftaran, tuntutan terdahulu, status akaun atau kaedah bayaran. Pusing ganti ialah gandaan tapak yang ditakrif dalam aktiviti layak. Pengeluaran atau pindahan baki mungkin membatalkan kemajuan.",
            zh: "资格可能取决于注册日期、既往领取、账户状态或支付方式。流水是按定义基数计算的合资格活动倍数。提款或转出余额可能取消进度。",
          },
          {
            en: "Account restrictions such as one claim per mobile number, non-transferability and excluded games are common. Read the accepted terms, not a screenshot from chat.",
            ms: "Sekatan akaun seperti satu tuntutan setiap nombor mudah alih, tidak boleh dipindah dan permainan dikecualikan adalah biasa. Baca terma diterima, bukan tangkapan skrin sembang.",
            zh: "每个手机号一次、不可转让、排除游戏等账户限制很常见。请阅读已接受的条款，而不是聊天截图。",
          },
        ],
      },
      {
        title: { en: "Common mistakes", ms: "Kesilapan biasa", zh: "常见错误" },
        paragraphs: [
          {
            en: "Assuming a headline amount is cash ready to withdraw; depositing before reading excluded games; ignoring expiry; treating quota as unlimited; and combining offers when terms forbid it.",
            ms: "Menganggap jumlah tajuk ialah tunai sedia dikeluarkan; deposit sebelum membaca permainan dikecualikan; mengabaikan luput; menganggap kuota tanpa had; dan menggabungkan tawaran apabila terma melarang.",
            zh: "把标题金额当成可立即提现的现金；未看排除游戏就存款；忽略到期；把名额当成无限；以及在条款禁止时叠加优惠。",
          },
        ],
      },
    ],
  },
  "promotions-free-credit": {
    sections: [
      {
        title: { en: "What the RM10 free credit is", ms: "Apa itu kredit percuma RM10", zh: "RM10 免费额度是什么" },
        paragraphs: [
          {
            en: "Source information describes RM10 promotional credit for eligible new registrations through the official partner site. It is promotional value, not a cash payout by itself.",
            ms: "Maklumat sumber menerangkan kredit promosi RM10 untuk pendaftaran baharu yang layak melalui laman rakan rasmi. Ia nilai promosi, bukan pengeluaran tunai dengan sendirinya.",
            zh: "来源资料说明，经官方合作伙伴网站符合资格的新注册可能获得 RM10 优惠额度。它是优惠价值，本身不是现金出款。",
          },
          {
            en: "This page does not invent a larger amount. If the live page shows a different figure, the live page prevails.",
            ms: "Laman ini tidak mereka jumlah lebih besar. Jika halaman langsung menunjukkan angka berbeza, halaman langsung diutamakan.",
            zh: "本页不编造更大金额。若实时页面数字不同，以实时页面为准。",
          },
        ],
      },
      {
        title: { en: "Eligibility and registration requirements", ms: "Kelayakan dan keperluan pendaftaran", zh: "资格与注册要求" },
        paragraphs: [
          {
            en: "Typical published conditions include new registration through the partner route and checks that limit duplicate claims. One claim per mobile number is described in the source material.",
            ms: "Syarat diterbitkan biasa termasuk pendaftaran baharu melalui laluan rakan dan semakan yang mengehadkan tuntutan pendua. Satu tuntutan setiap nombor mudah alih diterangkan dalam bahan sumber.",
            zh: "已公布的典型条件包括经合作伙伴路径新注册，以及限制重复领取的检查。来源资料写明每个手机号限一次。",
          },
          {
            en: "Meeting those descriptions still does not guarantee allocation if a daily quota has been used. Confirm eligibility on the live claim screen.",
            ms: "Memenuhi perihalan itu masih tidak menjamin peruntukan jika kuota harian telah digunakan. Sahkan kelayakan pada skrin tuntutan langsung.",
            zh: "即使符合上述描述，若每日名额已用完仍不保证发放。请在实时领取屏幕确认资格。",
          },
        ],
      },
      {
        title: { en: "How to claim", ms: "Cara menuntut", zh: "如何领取" },
        paragraphs: [
          {
            en: "Follow the live sequence: verified registration destination, form completion, any verification step, then the claim or credit status shown in the account.",
            ms: "Ikuti urutan langsung: destinasi pendaftaran disahkan, lengkapkan borang, sebarang langkah pengesahan, kemudian status tuntutan atau kredit dalam akaun.",
            zh: "请遵循实时顺序：已核实的注册入口、填表、任何验证步骤，然后查看账户中的领取或额度状态。",
          },
          {
            en: "This information website cannot apply the credit. Exact buttons and field names are those on the external platform, not invented screenshots.",
            ms: "Laman maklumat ini tidak boleh menggunakan kredit. Butang dan nama medan tepat ialah pada platform luar, bukan tangkapan skrin direka.",
            zh: "本信息网站无法发放该额度。确切按钮与字段名称以外部平台为准，本站不编造截图。",
          },
        ],
      },
      {
        title: { en: "Daily and claim limits", ms: "Had harian dan tuntutan", zh: "每日与领取限制" },
        paragraphs: [
          {
            en: "A daily quota applies according to the source description. Remaining allocation is not published as a live counter on this website.",
            ms: "Kuota harian terpakai mengikut perihalan sumber. Baki peruntukan tidak diterbitkan sebagai kaunter langsung di laman ini.",
            zh: "按来源说明存在每日名额。本站不发布实时剩余名额计数。",
          },
          {
            en: "One mobile-number limits and other anti-duplicate checks may apply together. Do not open extra accounts to retry a claim.",
            ms: "Had satu nombor mudah alih dan semakan anti-pendua lain mungkin terpakai bersama. Jangan buka akaun tambahan untuk cuba semula tuntutan.",
            zh: "单一手机号限制可能与其它防重复检查同时适用。不要另开账户重试领取。",
          },
        ],
      },
      {
        title: { en: "Turnover, withdrawal and account restrictions", ms: "Pusing ganti, pengeluaran dan sekatan akaun", zh: "流水、提款与账户限制" },
        paragraphs: [
          {
            en: "Published 5x turnover on RM10 means RM50 of qualifying activity under that example — not a promise of winnings or an unlocked withdrawal.",
            ms: "Pusing ganti 5x yang diterbitkan pada RM10 bermaksud RM50 aktiviti layak dalam contoh itu — bukan janji kemenangan atau pengeluaran tidak terkunci.",
            zh: "已公布的 RM10 的 5 倍流水，在该示例下即 RM50 合资格活动——不是赢利承诺，也不等于可无条件提款。",
          },
          {
            en: "Credit is described as non-transferable. Early withdrawal, excluded games or max-bet rules can affect remaining value. Confirm contribution tables on the live terms.",
            ms: "Kredit diterangkan sebagai tidak boleh dipindah. Pengeluaran awal, permainan dikecualikan atau peraturan pertaruhan maksimum boleh menjejaskan baki nilai. Sahkan jadual sumbangan pada terma langsung.",
            zh: "额度被描述为不可转让。提前提款、排除游戏或最高投注规则可能影响剩余价值。请在实时条款中确认贡献比例。",
          },
        ],
      },
    ],
    steps: {
      title: { en: "Practical claim sequence", ms: "Urutan tuntutan praktikal", zh: "实用领取顺序" },
      steps: [
        {
          en: "Read this page and the bonus-terms guide so you understand quota, 5x turnover and non-transferability.",
          ms: "Baca halaman ini dan panduan terma bonus supaya faham kuota, pusing ganti 5x dan tidak boleh pindah.",
          zh: "先阅读本页与奖金条款指南，理解名额、5 倍流水与不可转让。",
        },
        {
          en: "Open the disclosed external registration destination and verify the URL.",
          ms: "Buka destinasi pendaftaran luar yang didedahkan dan sahkan URL.",
          zh: "打开已披露的外部注册入口并核对网址。",
        },
        {
          en: "Complete registration with your own accurate details on the live form.",
          ms: "Lengkapkan pendaftaran dengan butiran sendiri yang tepat pada borang langsung.",
          zh: "在实时表格用本人准确资料完成注册。",
        },
        {
          en: "Follow the live claim or credit-status instructions. Do not rely on a chat screenshot.",
          ms: "Ikuti arahan tuntutan atau status kredit langsung. Jangan bergantung pada tangkapan skrin sembang.",
          zh: "遵循实时领取或额度状态说明。不要依赖聊天截图。",
        },
        {
          en: "Keep the accepted terms. Set a personal spending limit before using any credit.",
          ms: "Simpan terma diterima. Tetapkan had belanja peribadi sebelum menggunakan sebarang kredit.",
          zh: "保存已接受的条款。使用任何额度前设定个人消费限额。",
        },
      ],
    },
  },
  "promotions-welcome": {
    sections: [
      {
        title: { en: "Welcome offers are still conditional", ms: "Tawaran alu-aluan masih bersyarat", zh: "欢迎优惠仍有条件" },
        paragraphs: [
          {
            en: "A welcome label can mean a first-deposit match, a registration credit, or another structure. Confirm which type is actually shown for your account.",
            ms: "Label alu-aluan boleh bermaksud padanan deposit pertama, kredit pendaftaran, atau struktur lain. Sahkan jenis yang benar-benar dipaparkan untuk akaun anda.",
            zh: "欢迎标签可能指首存匹配、注册赠金或其它结构。请确认您的账户实际显示的是哪一种。",
          },
          {
            en: "Do not assume RM10 free-credit conditions automatically apply to a differently named welcome offer.",
            ms: "Jangan anggap syarat kredit percuma RM10 automatik terpakai pada tawaran alu-aluan bernama lain.",
            zh: "不要假定 RM10 免费额度的条件自动适用于名称不同的欢迎优惠。",
          },
        ],
      },
      {
        title: { en: "What to verify before opting in", ms: "Apa perlu disahkan sebelum menyertai", zh: "选择参加前须核实" },
        paragraphs: [
          {
            en: "Minimum deposit if required, time limits, game contribution, max bet, withdrawal interaction and whether the offer can be declined.",
            ms: "Deposit minimum jika diperlukan, had masa, sumbangan permainan, pertaruhan maksimum, interaksi pengeluaran dan sama ada tawaran boleh ditolak.",
            zh: "如需最低存款、时限、游戏贡献、最高投注、与提款的关系，以及是否可以拒绝该优惠。",
          },
        ],
      },
    ],
  },
  "promotions-bonus-guide": {
    sections: [
      {
        title: { en: "Turnover as a condition, not a forecast", ms: "Pusing ganti sebagai syarat, bukan ramalan", zh: "流水是条件，不是预测" },
        paragraphs: [
          {
            en: "Wagering or turnover requirements describe qualifying activity before some withdrawal conditions are met. Completing them does not mean you will profit.",
            ms: "Keperluan pertaruhan atau pusing ganti menerangkan aktiviti layak sebelum sesetengah syarat pengeluaran dipenuhi. Melengkapkannya tidak bermaksud anda akan untung.",
            zh: "流水或投注要求描述在部分提款条件满足前的合资格活动。完成流水并不意味着你会盈利。",
          },
        ],
      },
      {
        title: { en: "Contribution, caps and sequence", ms: "Sumbangan, had dan urutan", zh: "贡献、上限与顺序" },
        paragraphs: [
          {
            en: "Some games contribute fully, partly or not at all. Caps can limit convertible value. Opt-in, deposit, claim and play may need a stated order.",
            ms: "Sesetengah permainan menyumbang sepenuhnya, sebahagian atau langsung tidak. Had boleh mengehadkan nilai boleh ditukar. Opt-in, deposit, tuntutan dan main mungkin memerlukan urutan dinyatakan.",
            zh: "有的游戏全额、部分或不计入流水。上限会限制可兑换价值。选择参加、存款、领取与游戏可能需要规定顺序。",
          },
        ],
      },
    ],
  },
  guides: {
    sections: [
      {
        title: { en: "Browse by topic", ms: "Semak imbas mengikut topik", zh: "按主题浏览" },
        paragraphs: [
          {
            en: "Account guides cover registration, login and security. Payment guides cover deposit, withdrawal and methods. Game, promotion, mobile and partner topics have their own hubs linked from this page.",
            ms: "Panduan akaun merangkumi pendaftaran, log masuk dan keselamatan. Panduan bayaran merangkumi deposit, pengeluaran dan kaedah. Permainan, promosi, mudah alih dan rakan mempunyai hab sendiri yang dipaut dari halaman ini.",
            zh: "账户指南涵盖注册、登录与安全。支付指南涵盖存款、提款与支付方式。游戏、优惠、移动端与合作伙伴各有本页链接的专题。",
          },
        ],
      },
      {
        title: { en: "Common questions this hub answers", ms: "Soalan biasa yang dijawab hab ini", zh: "本中心常答问题" },
        paragraphs: [
          {
            en: "Where to start if you have no account; how to prepare for a cashier action; how to verify a mobile destination; and which issues belong on the external platform versus this contact page.",
            ms: "Di mana bermula jika tiada akaun; cara bersedia untuk tindakan juruwang; cara mengesahkan destinasi mudah alih; dan isu mana yang milik platform luar berbanding halaman hubungan ini.",
            zh: "没有账户从何处开始；如何为收银台操作做准备；如何核实移动端目标；以及哪些问题属于外部平台，哪些属于本站联系页。",
          },
        ],
      },
    ],
  },
  "guides-how-to-register": {
    sections: [
      {
        title: { en: "What information to prepare", ms: "Maklumat yang perlu disediakan", zh: "需要准备的资料" },
        paragraphs: [
          {
            en: "Prepare an active mobile number you control, a unique password you can store safely, and personal details that match records you may later use for verification or payments.",
            ms: "Sediakan nombor mudah alih aktif yang anda kawal, kata laluan unik yang boleh disimpan dengan selamat, dan butiran peribadi yang sepadan dengan rekod yang mungkin digunakan kemudian untuk pengesahan atau bayaran.",
            zh: "准备本人控制的有效手机号、可安全保存的独立密码，以及可能用于后续验证或支付的、与记录一致的个人资料。",
          },
          {
            en: "This guide does not invent exact form-field labels. Bring what the live form requests. Do not register using someone else’s identity.",
            ms: "Panduan ini tidak mereka label medan borang tepat. Bawa apa yang diminta borang langsung. Jangan daftar menggunakan identiti orang lain.",
            zh: "本指南不编造具体表单字段名。请按实时表格要求准备。不要用他人身份注册。",
          },
        ],
      },
      {
        title: { en: "Checking registration details", ms: "Menyemak butiran pendaftaran", zh: "核对注册资料" },
        paragraphs: [
          {
            en: "Before submit, review spelling, mobile number, any referral field and the terms you are accepting. After submit, store the account ID exactly as shown.",
            ms: "Sebelum hantar, semak ejaan, nombor mudah alih, sebarang medan rujukan dan terma yang anda terima. Selepas hantar, simpan ID akaun tepat seperti dipaparkan.",
            zh: "提交前核对拼写、手机号、任何推荐字段及您接受的条款。提交后按显示原样保存账户 ID。",
          },
        ],
      },
      {
        title: { en: "Account security after registration", ms: "Keselamatan akaun selepas pendaftaran", zh: "注册后的账户安全" },
        paragraphs: [
          {
            en: "Do not save the password in a shared browser profile. Learn the official recovery path. Review the account-security guide before the first login from a new device.",
            ms: "Jangan simpan kata laluan dalam profil pelayar kongsi. Pelajari laluan pemulihan rasmi. Semak panduan keselamatan akaun sebelum log masuk pertama dari peranti baharu.",
            zh: "不要在共用浏览器配置中保存密码。了解官方找回途径。在新设备首次登录前阅读账户安全指南。",
          },
        ],
      },
    ],
    steps: {
      title: { en: "Registration steps", ms: "Langkah pendaftaran", zh: "注册步骤" },
      steps: [
        {
          en: "Step 1 — Confirm that participating is lawful and appropriate where you are, and that you can afford entertainment risk.",
          ms: "Langkah 1 — Sahkan penyertaan sah dan sesuai di lokasi anda, dan anda mampu menanggung risiko hiburan.",
          zh: "步骤 1 — 确认在您所在地参与合法且合适，并能承担娱乐风险。",
        },
        {
          en: "Step 2 — Open the disclosed registration destination from this site and inspect the domain and secure connection.",
          ms: "Langkah 2 — Buka destinasi pendaftaran yang didedahkan dari laman ini dan periksa domain serta sambungan selamat.",
          zh: "步骤 2 — 从本站打开已披露的注册入口，检查域名与安全连接。",
        },
        {
          en: "Step 3 — Complete the live form with your own details. Follow on-screen rules for account ID, mobile number and password. Exact fields are those shown — not listed as a fake screenshot here.",
          ms: "Langkah 3 — Lengkapkan borang langsung dengan butiran sendiri. Ikuti peraturan pada skrin untuk ID akaun, nombor mudah alih dan kata laluan. Medan tepat ialah yang dipaparkan — bukan tangkapan skrin palsu di sini.",
          zh: "步骤 3 — 用本人资料填写实时表格。账户 ID、手机号与密码遵循屏幕规则。确切字段以屏幕为准，本站不提供伪造截图。",
        },
        {
          en: "Step 4 — Complete any verification the platform requests using channels you control.",
          ms: "Langkah 4 — Lengkapkan sebarang pengesahan yang diminta platform menggunakan saluran yang anda kawal.",
          zh: "步骤 4 — 用本人控制的渠道完成平台要求的任何验证。",
        },
        {
          en: "Step 5 — Review the confirmation, store credentials safely, and only then consider login, promotions or deposits.",
          ms: "Langkah 5 — Semak pengesahan, simpan kelayakan dengan selamat, dan hanya kemudian pertimbangkan log masuk, promosi atau deposit.",
          zh: "步骤 5 — 核对确认信息，安全保存凭据，然后再考虑登录、优惠或存款。",
        },
      ],
    },
  },
  "guides-how-to-login": {
    sections: [
      {
        title: { en: "Login steps", ms: "Langkah log masuk", zh: "登录步骤" },
        paragraphs: [
          {
            en: "Verify the URL, enter the exact account ID, enter the password on a device you control, complete any extra check the platform shows, then confirm you are in the intended account.",
            ms: "Sahkan URL, masukkan ID akaun tepat, masukkan kata laluan pada peranti sendiri, lengkapkan sebarang semakan tambahan platform, kemudian sahkan anda berada dalam akaun yang dimaksudkan.",
            zh: "核实网址，输入准确账户 ID，在本人设备输入密码，完成平台显示的额外验证，然后确认进入的是目标账户。",
          },
        ],
      },
      {
        title: { en: "Checking account details after login", ms: "Menyemak butiran akaun selepas log masuk", zh: "登录后核对账户" },
        paragraphs: [
          {
            en: "Check displayed ID, last activity if shown, and that you did not land on a wallet or nickname you do not recognise. Sign out on shared devices.",
            ms: "Semak ID dipaparkan, aktiviti terakhir jika ada, dan anda tidak mendarat pada dompet atau nama samaran yang tidak dikenali. Log keluar pada peranti kongsi.",
            zh: "核对接显示的 ID、最近活动（如有），并确认没有进入无法识别的钱包或昵称。共用设备请退出。",
          },
        ],
      },
      {
        title: { en: "When to contact support", ms: "Bila menghubungi sokongan", zh: "何时联系支持" },
        paragraphs: [
          {
            en: "After you have checked ID, password, URL and connection, if official recovery still fails. Use authenticated platform channels. Never send a password or OTP to an unsolicited contact.",
            ms: "Selepas semak ID, kata laluan, URL dan sambungan, jika pemulihan rasmi masih gagal. Gunakan saluran platform disahkan. Jangan hantar kata laluan atau OTP kepada hubungan tidak diminta.",
            zh: "在核对 ID、密码、网址与网络后，若官方找回仍失败，再使用已认证平台渠道。切勿向主动联系的陌生人发送密码或 OTP。",
          },
        ],
      },
    ],
  },
  "guides-how-to-deposit": {
    sections: [
      {
        title: { en: "Available payment methods", ms: "Kaedah bayaran tersedia", zh: "可用支付方式" },
        paragraphs: [
          {
            en: "Only methods shown in your authenticated cashier should be used. This page does not invent bank names, wallet IDs or QR payloads.",
            ms: "Hanya kaedah yang dipaparkan dalam juruwang disahkan anda patut digunakan. Laman ini tidak mereka nama bank, ID dompet atau muatan QR.",
            zh: "仅使用您已登录收银台显示的方式。本页不编造银行名、钱包 ID 或二维码内容。",
          },
          {
            en: "See the payment-methods guide for how deposit and withdrawal lists can differ.",
            ms: "Lihat panduan kaedah bayaran untuk perbezaan senarai deposit dan pengeluaran.",
            zh: "存款与提款列表可能不同，详见支付方式指南。",
          },
        ],
      },
      {
        title: { en: "Deposit steps", ms: "Langkah deposit", zh: "存款步骤" },
        paragraphs: [
          {
            en: "Sign in on the verified destination, open the live cashier, choose a method you own, copy only on-screen details, complete the payment with your provider, then wait for platform status before repeating.",
            ms: "Log masuk di destinasi disahkan, buka juruwang langsung, pilih kaedah milik anda, salin hanya butiran pada skrin, lengkapkan bayaran dengan penyedia anda, kemudian tunggu status platform sebelum ulangi.",
            zh: "在已核实入口登录，打开实时收银台，选择本人所有的方式，只复制屏幕上的详情，向支付机构完成付款，然后等待平台状态，不要立即重复提交。",
          },
        ],
      },
      {
        title: { en: "Pending, failed and incorrect details", ms: "Tertunda, gagal dan butiran salah", zh: "处理中、失败与资料错误" },
        paragraphs: [
          {
            en: "Pending means wait for the stated window. Failed means do not assume the funds left your bank until both receipts agree. Incorrect details should be corrected only through official cashier or support — not a chat rewrite.",
            ms: "Tertunda bermaksud tunggu tetingkap dinyatakan. Gagal bermaksud jangan anggap dana meninggalkan bank sehingga kedua-dua resit sepadan. Butiran salah patut dibetulkan hanya melalui juruwang atau sokongan rasmi — bukan semakan semula sembang.",
            zh: "处理中表示等待所示时限。失败则在两份回执一致前不要假定资金已离开银行。错误资料只能通过官方收银台或支持更正，而不是聊天改写。",
          },
        ],
      },
      {
        title: { en: "Transaction records and payment safety", ms: "Rekod transaksi dan keselamatan bayaran", zh: "交易记录与支付安全" },
        paragraphs: [
          {
            en: "Keep date, amount, method, platform reference and provider reference. Redact full account secrets. This website never accepts player funds.",
            ms: "Simpan tarikh, amaun, kaedah, rujukan platform dan rujukan penyedia. Semak rahsia akaun penuh. Laman ini tidak pernah menerima dana pemain.",
            zh: "保存日期、金额、方式、平台编号与支付机构编号。隐去完整账户机密。本站从不接收玩家资金。",
          },
        ],
      },
    ],
  },
  "guides-how-to-withdraw": {
    sections: [
      {
        title: { en: "Before requesting a withdrawal", ms: "Sebelum memohon pengeluaran", zh: "申请提款前" },
        paragraphs: [
          {
            en: "Confirm identity or name matching, any promotion turnover still open, displayed min/max, and that payout details belong to you.",
            ms: "Sahkan padanan identiti atau nama, sebarang pusing ganti promosi masih terbuka, min/maks dipaparkan, dan butiran bayaran milik anda.",
            zh: "确认身份或姓名匹配、是否仍有优惠流水、显示的最低/最高额，以及收款资料属于本人。",
          },
        ],
      },
      {
        title: { en: "Withdrawal process", ms: "Proses pengeluaran", zh: "提款流程" },
        paragraphs: [
          {
            en: "Open the authenticated cashier, enter an amount within displayed limits, confirm destination details on screen, submit, then save the request ID and status.",
            ms: "Buka juruwang disahkan, masukkan amaun dalam had dipaparkan, sahkan butiran destinasi pada skrin, hantar, kemudian simpan ID permohonan dan status.",
            zh: "打开已登录收银台，在显示限额内输入金额，核对屏幕上的收款详情，提交，然后保存申请编号与状态。",
          },
        ],
      },
      {
        title: { en: "Account verification and bank details", ms: "Pengesahan akaun dan butiran bank", zh: "账户验证与银行资料" },
        paragraphs: [
          {
            en: "Platforms may require matching names or extra documents. This site does not invent those document lists. Follow the live request.",
            ms: "Platform mungkin memerlukan padanan nama atau dokumen tambahan. Laman ini tidak mereka senarai dokumen itu. Ikuti permintaan langsung.",
            zh: "平台可能要求姓名一致或补充文件。本站不编造文件清单。请遵循实时要求。",
          },
        ],
      },
      {
        title: { en: "Pending withdrawals and delays", ms: "Pengeluaran tertunda dan kelewatan", zh: "处理中的提款与延迟" },
        paragraphs: [
          {
            en: "Common delay reasons include verification, name matching, turnover, limits, payment-provider timing or missing references. This site does not promise a payout clock.",
            ms: "Sebab kelewatan biasa termasuk pengesahan, padanan nama, pusing ganti, had, masa penyedia bayaran atau rujukan hilang. Laman ini tidak menjanjikan jam bayaran.",
            zh: "常见延迟原因包括验证、姓名匹配、流水、限额、支付机构时效或缺少编号。本站不承诺到账时间。",
          },
        ],
      },
    ],
  },
  "guides-payment-methods": {
    sections: [
      {
        title: { en: "Deposit vs withdrawal", ms: "Deposit berbanding pengeluaran", zh: "存款与提款" },
        paragraphs: [
          {
            en: "A method available to fund an account may be unavailable for payout, or may require extra matching. Compare both directions in the live cashier.",
            ms: "Kaedah tersedia untuk membiayai akaun mungkin tidak tersedia untuk bayaran, atau memerlukan padanan tambahan. Bandingkan kedua-dua arah dalam juruwang langsung.",
            zh: "可用于存款的方式未必可用于出款，或需要额外匹配。请在实时收银台比较两个方向。",
          },
        ],
      },
      {
        title: { en: "Account matching and confirmation", ms: "Padanan akaun dan pengesahan", zh: "账户匹配与确认" },
        paragraphs: [
          {
            en: "Use accounts you own. Transaction confirmation means both your payment provider receipt and the platform status. Keep both references.",
            ms: "Gunakan akaun milik anda. Pengesahan transaksi bermaksud resit penyedia bayaran dan status platform. Simpan kedua-dua rujukan.",
            zh: "使用本人账户。交易确认指支付机构回执与平台状态都要有。两份编号都请保存。",
          },
        ],
      },
      {
        title: { en: "How to check payment information", ms: "Cara menyemak maklumat bayaran", zh: "如何核对支付信息" },
        paragraphs: [
          {
            en: "Open the cashier from an authenticated session. Do not reuse old images from chats. This website does not publish bank account numbers.",
            ms: "Buka juruwang dari sesi disahkan. Jangan guna semula imej lama dari sembang. Laman ini tidak menerbitkan nombor akaun bank.",
            zh: "从已登录会话打开收银台。不要复用聊天里的旧图。本站不公布银行账号。",
          },
        ],
      },
    ],
  },
  "guides-mobile": {
    sections: [
      {
        title: { en: "Mobile browser experience", ms: "Pengalaman pelayar mudah alih", zh: "移动浏览器体验" },
        paragraphs: [
          {
            en: "These information pages are built for phones. External games and cashiers still depend on the destination, device and connection.",
            ms: "Laman maklumat ini dibina untuk telefon. Permainan dan juruwang luar masih bergantung pada destinasi, peranti dan sambungan.",
            zh: "本信息页面向手机设计。外部游戏与收银台仍取决于目标平台、设备与网络。",
          },
        ],
      },
      {
        title: { en: "Mobile navigation, login, games and payments", ms: "Navigasi, log masuk, permainan dan bayaran mudah alih", zh: "移动端导航、登录、游戏与支付" },
        paragraphs: [
          {
            en: "Use header language and menu controls, verify login URLs, keep game stake controls readable, and open the cashier only from an authenticated session.",
            ms: "Gunakan kawalan bahasa dan menu pengepala, sahkan URL log masuk, pastikan kawalan pertaruhan boleh dibaca, dan buka juruwang hanya dari sesi disahkan.",
            zh: "使用页眉语言与菜单、核实登录网址、保证投注控件可读，并仅在已登录会话打开收银台。",
          },
        ],
      },
      {
        title: { en: "No APK on this website", ms: "Tiada APK di laman ini", zh: "本站无 APK" },
        paragraphs: [
          {
            en: "This site does not host an official app package and does not claim an official IWIN mobile app unless the destination itself currently states one. Follow only that platform’s official installation guidance.",
            ms: "Laman ini tidak mengehos pakej aplikasi rasmi dan tidak mendakwa aplikasi mudah alih rasmi IWIN melainkan destinasi sendiri menyatakannya semasa. Ikuti hanya panduan pemasangan rasmi platform itu.",
            zh: "本站不托管官方安装包，也不在目标平台未自行说明时声称存在官方 IWIN 应用。仅遵循该平台当前官方安装指引。",
          },
        ],
      },
    ],
  },
  "guides-account-security": {
    sections: [
      {
        title: { en: "Trusted devices", ms: "Peranti dipercayai", zh: "可信设备" },
        paragraphs: [
          {
            en: "Prefer a device you control, with a screen lock and current updates. Remove unknown remote-access tools. Sign out after using a shared computer.",
            ms: "Utamakan peranti yang anda kawal, dengan kunci skrin dan kemas kini semasa. Buang alat akses jauh yang tidak dikenali. Log keluar selepas menggunakan komputer kongsi.",
            zh: "优先使用本人控制、有锁屏且已更新的设备。移除不明远程工具。使用共用电脑后退出。",
          },
        ],
      },
      {
        title: { en: "Protecting payment information", ms: "Melindungi maklumat bayaran", zh: "保护支付信息" },
        paragraphs: [
          {
            en: "Never send card security codes, banking passwords or full OTPs in chat. Compare cashier details on screen, not from a forwarded image.",
            ms: "Jangan hantar kod keselamatan kad, kata laluan perbankan atau OTP penuh dalam sembang. Bandingkan butiran juruwang pada skrin, bukan imej yang dimajukan.",
            zh: "切勿在聊天中发送卡安全码、银行密码或完整 OTP。收银台详情以屏幕为准，不要用转发图片。",
          },
        ],
      },
      {
        title: { en: "What to do if an account is compromised", ms: "Jika akaun terjejas", zh: "账户被盗时怎么办" },
        paragraphs: [
          {
            en: "Change the password on a trusted device, contact authenticated platform support, review recent activity, and inform your payment provider if financial access may be exposed.",
            ms: "Tukar kata laluan pada peranti dipercayai, hubungi sokongan platform disahkan, semak aktiviti terkini, dan maklumkan penyedia bayaran jika akses kewangan mungkin terdedah.",
            zh: "在可信设备更改密码，联系已认证平台支持，核对近期活动；若财务访问可能暴露，通知支付机构。",
          },
        ],
      },
    ],
  },
  agent: {
    sections: [
      {
        title: { en: "Who may be interested", ms: "Siapa mungkin berminat", zh: "可能适合谁" },
        paragraphs: [
          {
            en: "People who can describe products accurately, disclose a referral relationship, keep records, and accept that approval and commissions are not guaranteed.",
            ms: "Orang yang boleh menerangkan produk dengan tepat, mendedahkan hubungan rujukan, menyimpan rekod, dan menerima bahawa kelulusan serta komisen tidak dijamin.",
            zh: "能够准确描述产品、披露推荐关系、保存记录，并接受审批与佣金均不保证的人。",
          },
          {
            en: "It is not a fit for anyone seeking easy money, guaranteed income or passive income. Those phrases are not used as promises on this website.",
            ms: "Ia tidak sesuai untuk sesiapa yang mencari wang mudah, pendapatan terjamin atau pendapatan pasif. Frasa itu tidak digunakan sebagai janji di laman ini.",
            zh: "不适合寻求轻松赚钱、保证收入或被动收入的人。本站不用这些措辞作为承诺。",
          },
        ],
      },
      {
        title: { en: "How agent registration works", ms: "Cara pendaftaran ejen berfungsi", zh: "代理注册如何进行" },
        paragraphs: [
          {
            en: "Use the disclosed external partner destination, complete the live application, and wait for the platform’s review. Joining may be described as free of a registration fee while verification still applies.",
            ms: "Gunakan destinasi rakan luar yang didedahkan, lengkapkan permohonan langsung, dan tunggu semakan platform. Penyertaan mungkin diterangkan sebagai percuma yuran pendaftaran sementara pengesahan masih terpakai.",
            zh: "使用已披露的外部合作入口，完成实时申请，并等待平台审核。加入可能被描述为免注册费，但仍须验证。",
          },
        ],
      },
      {
        title: { en: "Referral tracking and commission concept", ms: "Penjejakan rujukan dan konsep komisen", zh: "推荐追踪与佣金概念" },
        paragraphs: [
          {
            en: "Tracking usually uses assigned links or codes, subject to timing and anti-abuse rules. Commission, if offered, may relate to referred-player turnover as defined in the dashboard — this page does not fabricate a rate.",
            ms: "Penjejakan biasanya menggunakan pautan atau kod yang ditetapkan, tertakluk pada masa dan peraturan anti-penyalahgunaan. Komisen, jika ditawarkan, mungkin berkaitan pusing ganti pemain dirujuk seperti ditakrif dalam papan pemuka — laman ini tidak mereka kadar.",
            zh: "追踪通常使用指定链接或代码，并受时效与防滥用规则约束。若提供佣金，可能与后台定义的被推荐玩家流水有关——本页不编造费率。",
          },
          {
            en: "A partner dashboard, if provided after approval, is the source for statuses, rates and statements. This website cannot pay commissions.",
            ms: "Papan pemuka rakan, jika disediakan selepas kelulusan, ialah sumber status, kadar dan penyata. Laman ini tidak boleh membayar komisen.",
            zh: "获批后如提供合作后台，即状态、费率与报表的来源。本站不能支付佣金。",
          },
        ],
      },
      {
        title: { en: "Promotion guidelines and important conditions", ms: "Garis panduan promosi dan syarat penting", zh: "推广准则与重要条件" },
        paragraphs: [
          {
            en: "No guaranteed winnings or income claims; disclose partner status; do not spam or target minors; keep dashboard records; confirm current terms after login.",
            ms: "Tiada dakwaan kemenangan atau pendapatan terjamin; dedahkan status rakan; jangan spam atau sasar kanak-kanak; simpan rekod papan pemuka; sahkan terma semasa selepas log masuk.",
            zh: "不得承诺保证赢利或收入；披露合作身份；禁止垃圾信息或面向未成年人；保存后台记录；登录后确认当前条款。",
          },
        ],
      },
    ],
  },
  "partner-program": {
    sections: [
      {
        title: { en: "How it works", ms: "Bagaimana ia berfungsi", zh: "如何运作" },
        paragraphs: [
          {
            en: "Application, review, tracking setup, referred activity, reporting statuses and possible adjustments under external-platform terms.",
            ms: "Permohonan, semakan, persediaan penjejakan, aktiviti pengguna dirujuk, status pelaporan dan pelarasan mungkin di bawah terma platform luar.",
            zh: "申请、审核、追踪设置、被推荐活动、报表状态，以及外部平台条款下可能的调整。",
          },
        ],
      },
      {
        title: { en: "Registration, referral and tracking", ms: "Pendaftaran, rujukan dan penjejakan", zh: "注册、推荐与追踪" },
        paragraphs: [
          {
            en: "Register on the verified partner route. Keep one consistent tracking method. Pending, approved, adjusted and paid figures are different statuses.",
            ms: "Daftar pada laluan rakan disahkan. Kekalkan satu kaedah penjejakan konsisten. Angka tertunda, diluluskan, dilaras dan dibayar ialah status berbeza.",
            zh: "在已核实的合作路径注册。保持一致的追踪方式。处理中、已批准、已调整与已支付是不同状态。",
          },
        ],
      },
      {
        title: { en: "Partner responsibilities", ms: "Tanggungjawab rakan", zh: "合作伙伴责任" },
        paragraphs: [
          {
            en: "Accurate claims, visible disclosure, age-appropriate audiences, no bots or impersonation, and reconciliation of period dates before raising a discrepancy.",
            ms: "Dakwaan tepat, pendedahan kelihatan, khalayak sesuai umur, tiada bot atau penyamaran, dan penyelarasan tarikh tempoh sebelum menimbulkan percanggahan.",
            zh: "表述准确、披露可见、面向适龄受众、禁止机器人或冒充，并提出异议前先核对周期日期。",
          },
        ],
      },
    ],
  },
  "affiliate-guide": {
    sections: [
      {
        title: { en: "How referrals and tracking links work", ms: "Cara rujukan dan pautan penjejakan berfungsi", zh: "推荐与追踪链接如何工作" },
        paragraphs: [
          {
            en: "A tracking link or code may associate a later qualifying action with a partner, subject to windows and anti-abuse rules. It must not disguise the destination.",
            ms: "Pautan atau kod penjejakan mungkin mengaitkan tindakan layak kemudian dengan rakan, tertakluk pada tetingkap dan peraturan anti-penyalahgunaan. Ia tidak boleh menyembunyikan destinasi.",
            zh: "追踪链接或代码可能在时效与防滥用规则下，把后续合资格行为关联到合作伙伴。不得掩饰目标网址。",
          },
        ],
      },
      {
        title: { en: "Conversion basics", ms: "Asas penukaran", zh: "转化基础" },
        paragraphs: [
          {
            en: "Conversion is a platform-defined qualifying event, not merely a click. Definitions live in the dashboard terms.",
            ms: "Penukaran ialah peristiwa layak yang ditakrif platform, bukan sekadar klik. Definisi berada dalam terma papan pemuka.",
            zh: "转化是平台定义的合资格事件，而不仅仅是点击。定义见后台条款。",
          },
        ],
      },
      {
        title: { en: "Responsible promotion", ms: "Promosi bertanggungjawab", zh: "负责任推广" },
        paragraphs: [
          {
            en: "Qualify offers with quota, eligibility, turnover and changeability. Do not collect passwords. Do not target minors. Mark when an action happens on another website.",
            ms: "Kelayakan tawaran dengan kuota, kelayakan, pusing ganti dan kebolehubahan. Jangan kumpul kata laluan. Jangan sasar kanak-kanak. Tandakan apabila tindakan berlaku di laman lain.",
            zh: "用名额、资格、流水与可变性来限定优惠表述。不得收集密码。不得面向未成年人。在操作发生在其他网站时予以标明。",
          },
        ],
      },
    ],
  },
  "referral-guide": {
    sections: [
      {
        title: { en: "How referral links work", ms: "Cara pautan rujukan berfungsi", zh: "推荐链接如何工作" },
        paragraphs: [
          {
            en: "A valid link or code, timing, and anti-abuse checks may create attribution. Sharing a link or registering an account does not by itself guarantee credit.",
            ms: "Pautan atau kod sah, masa, dan semakan anti-penyalahgunaan mungkin mewujudkan atribusi. Berkongsi pautan atau mendaftar akaun tidak dengan sendirinya menjamin kredit.",
            zh: "有效链接或代码、时效与防滥用检查可能产生归属。分享链接或注册账户本身不保证记入。",
          },
        ],
      },
      {
        title: { en: "Registration, eligibility and tracking", ms: "Pendaftaran, kelayakan dan penjejakan", zh: "注册、资格与追踪" },
        paragraphs: [
          {
            en: "Existing users may already be attributed. Qualifying turnover can exclude voids, reversals or selected products. Confirm statuses in the dashboard.",
            ms: "Pengguna sedia ada mungkin sudah diatribusikan. Pusing ganti layak boleh mengecualikan batal, songsang atau produk terpilih. Sahkan status dalam papan pemuka.",
            zh: "既有用户可能已被归属。合资格流水可能排除作废、撤销或特定产品。请在后台确认状态。",
          },
        ],
      },
      {
        title: { en: "Reward conditions", ms: "Syarat ganjaran", zh: "奖励条件" },
        paragraphs: [
          {
            en: "This page does not invent a reward amount. Only dashboard-displayed figures, if any, describe partner rewards. Rates can change by period.",
            ms: "Laman ini tidak mereka jumlah ganjaran. Hanya angka papan pemuka, jika ada, menerangkan ganjaran rakan. Kadar boleh berubah mengikut tempoh.",
            zh: "本页不编造奖励金额。仅后台显示的数字（如有）描述合作奖励。费率可能随周期变化。",
          },
        ],
      },
    ],
  },
  "partner-faq": {
    sections: [
      {
        title: { en: "Registration questions", ms: "Soalan pendaftaran", zh: "注册" },
        paragraphs: [
          {
            en: "Joining may be described as free of a fee while approval still depends on eligibility and conduct checks. This site cannot approve an application.",
            ms: "Penyertaan mungkin diterangkan sebagai percuma yuran sementara kelulusan masih bergantung pada kelayakan dan semakan tingkah laku. Laman ini tidak boleh meluluskan permohonan.",
            zh: "加入可能被描述为免手续费，但批准仍取决于资格与行为审核。本站不能批准申请。",
          },
        ],
      },
      {
        title: { en: "Tracking and commission questions", ms: "Soalan penjejakan dan komisen", zh: "追踪与佣金" },
        paragraphs: [
          {
            en: "A click is not automatically a credited conversion. Commission rates are only those in the current dashboard — not a percentage invented here.",
            ms: "Klik tidak automatik menjadi penukaran dikreditkan. Kadar komisen hanya yang dalam papan pemuka semasa — bukan peratusan direka di sini.",
            zh: "点击不会自动成为已入账转化。佣金费率仅以后台当前显示为准——本页不编造百分比。",
          },
        ],
      },
      {
        title: { en: "Referral, account, promotion and support", ms: "Rujukan, akaun, promosi dan sokongan", zh: "推荐、账户、推广与支持" },
        paragraphs: [
          {
            en: "Missing referrals can be prior attribution, timing or compliance. Duplicate player accounts are typically prohibited. Player login issues go to player support; partner statements go to the partner channel with dates and references.",
            ms: "Rujukan hilang boleh jadi atribusi terdahulu, masa atau pematuhan. Akaun pemain pendua biasanya dilarang. Isu log masuk pemain ke sokongan pemain; penyata rakan ke saluran rakan dengan tarikh dan rujukan.",
            zh: "推荐缺失可能是既有归属、时效或合规。重复玩家账户通常被禁止。玩家登录问题走玩家支持；合作报表走合作渠道并附日期与编号。",
          },
        ],
      },
    ],
  },
  "about-iwin": {
    sections: [
      {
        title: { en: "What the platform provides", ms: "Apa yang platform sediakan", zh: "平台提供什么" },
        paragraphs: [
          {
            en: "IWIN is discussed as an ecosystem that may include slots, live tables, sports markets and number games, plus account, payment and partner tools on an external platform.",
            ms: "IWIN dibincangkan sebagai ekosistem yang mungkin merangkumi slot digital, meja langsung, pasaran sukan dan permainan nombor, bersama alat akaun, bayaran dan rakan di platform luar.",
            zh: "这里将 IWIN 作为可能包含老虎机、真人桌、体育盘口与数字游戏，以及外部平台上账户、支付与合作工具的生态来介绍。",
          },
        ],
      },
      {
        title: { en: "Gaming categories and mobile experience", ms: "Kategori permainan dan pengalaman mudah alih", zh: "游戏类别与移动体验" },
        paragraphs: [
          {
            en: "Category guides explain format differences. Information pages are designed for mobile browsers; external performance still depends on the destination.",
            ms: "Panduan kategori menerangkan perbezaan format. Laman maklumat direka untuk pelayar mudah alih; prestasi luar masih bergantung pada destinasi.",
            zh: "类别指南说明形式差异。信息页面向移动浏览器；外部表现仍取决于目标平台。",
          },
        ],
      },
      {
        title: { en: "Partner ecosystem and this website’s role", ms: "Ekosistem rakan dan peranan laman ini", zh: "合作生态与本站角色" },
        paragraphs: [
          {
            en: "Agent and referral topics are explained without income promises. This website provides information and disclosed links. It does not operate IWIN, hold funds or decide withdrawals.",
            ms: "Topik ejen dan rujukan diterangkan tanpa janji pendapatan. Laman ini menyediakan maklumat dan pautan didedahkan. Ia tidak mengendalikan IWIN, memegang dana atau memutuskan pengeluaran.",
            zh: "代理与推荐话题在不承诺收入的前提下说明。本站提供信息与已披露链接。不运营 IWIN、不持有资金、不决定提款。",
          },
        ],
      },
      {
        title: { en: "Relationship with IWIN and external disclosure", ms: "Hubungan dengan IWIN dan pendedahan luar", zh: "与 IWIN 的关系及外部披露" },
        paragraphs: [
          {
            en: "Official Partner describes an information and referral role. External buttons leave this site. Verify destination terms yourself. Avoid unsupported claims such as number one, most trusted, world’s best, millions of players or guaranteed payout.",
            ms: "Rakan Rasmi menerangkan peranan maklumat dan rujukan. Ia bukan dakwaan tapak ini mengendalikan IWIN. Butang luar meninggalkan laman ini. Sahkan terma destinasi sendiri. Elakkan dakwaan tanpa sokongan seperti nombor satu, paling dipercayai, terbaik di dunia, berjuta-juta pemain atau bayaran terjamin.",
            zh: "官方合作伙伴描述的是信息与推荐角色。外部按钮会离开本站。请自行核实目标条款。避免“第一”、“最受信赖”、“世界最佳”、数百万玩家或保证出款等无依据表述。",
          },
        ],
      },
    ],
  },
  "official-partner": {
    sections: [
      {
        title: { en: "What this website is", ms: "Apa laman ini", zh: "本网站是什么" },
        paragraphs: [
          {
            en: "IWIN Malaysia Official Partner describes this site’s information and referral role. It is not a claim that the site owns or operates IWIN, and it is not a fabricated legal certificate.",
            ms: "Rakan Rasmi IWIN Malaysia menerangkan peranan maklumat dan rujukan. Ia bukan dakwaan laman ini memiliki atau mengendalikan IWIN, dan bukan sijil undang-undang direka.",
            zh: "IWIN Malaysia 官方合作伙伴描述本站的信息与推荐角色。这不是本站拥有或运营 IWIN 的声明，也不是伪造的法律证书。",
          },
        ],
      },
      {
        title: { en: "What this website provides", ms: "Apa laman ini sediakan", zh: "本站提供什么" },
        paragraphs: [
          {
            en: "Gaming category information, promotion-term reading notes, player guides for account and payment tasks, partner resources, FAQs and legal notices for this information website.",
            ms: "Maklumat kategori permainan, nota membaca terma promosi, panduan pemain untuk akaun dan bayaran, sumber rakan, soalan lazim dan notis undang-undang untuk laman maklumat ini.",
            zh: "游戏类别信息、优惠条款阅读说明、账户与支付玩家指南、合作资源、常见问题，以及本信息网站的法律声明。",
          },
        ],
      },
      {
        title: { en: "How it relates to IWIN", ms: "Bagaimana ia berkaitan dengan IWIN", zh: "与 IWIN 的关系" },
        paragraphs: [
          {
            en: "The destination platform controls registration, products, payments and authenticated support. This site publishes explainers and may attribute an external visit. It does not claim operator status.",
            ms: "Platform destinasi mengawal pendaftaran, produk, bayaran dan sokongan disahkan. Laman ini menerbitkan penerangan dan mungkin mengatribusikan lawatan luar. Ia tidak mendakwa status pengendali.",
            zh: "目标平台控制注册、产品、支付与已认证支持。本站发布说明并可能归因一次外部访问。不声称运营商身份。",
          },
        ],
      },
      {
        title: { en: "IWIN gaming, promotions, guides and partner resources", ms: "Permainan, promosi, panduan dan sumber rakan IWIN", zh: "IWIN 游戏、优惠、指南与合作资源" },
        paragraphs: [
          {
            en: "Use Games for categories, Promotions for how to read conditions including the RM10 example, Guides for account tasks, and Agent pages for partner concepts without income promises.",
            ms: "Gunakan Permainan untuk kategori, Promosi untuk cara membaca syarat termasuk contoh RM10, Panduan untuk tugas akaun, dan halaman Ejen untuk konsep rakan tanpa janji pendapatan.",
            zh: "用游戏了解类别，用优惠了解如何阅读条件（含 RM10 示例），用指南完成账户任务，用代理页了解合作概念且不承诺收入。",
          },
        ],
      },
      {
        title: { en: "External platform disclosure and contact", ms: "Pendedahan platform luar dan hubungan", zh: "外部平台披露与联系" },
        paragraphs: [
          {
            en: "When a button is marked external, you leave this website. Verify the URL and current terms. Account-specific help belongs on the destination. Use this site’s contact route for corrections to published information.",
            ms: "Apabila butang ditanda luar, anda meninggalkan laman ini. Sahkan URL dan terma semasa. Bantuan khusus akaun milik destinasi. Gunakan laluan hubungan laman ini untuk pembetulan maklumat diterbitkan.",
            zh: "按钮标为外部时，您将离开本站。请核实网址与当前条款。账户专属帮助属于目标平台。本站联系入口用于勘误已发布信息。",
          },
        ],
      },
    ],
  },
  contact: {
    sections: [
      {
        title: { en: "How to get assistance", ms: "Cara mendapat bantuan", zh: "如何获得帮助" },
        paragraphs: [
          {
            en: "Choose the channel that matches the problem. This website can correct published pages. It cannot see balances, reset passwords or approve withdrawals.",
            ms: "Pilih saluran yang sepadan dengan masalah. Laman ini boleh membetulkan halaman diterbitkan. Ia tidak dapat melihat baki, set semula kata laluan atau meluluskan pengeluaran.",
            zh: "按问题类型选择渠道。本站可更正已发布页面，但不能查看余额、重置密码或批准提款。",
          },
        ],
      },
      {
        title: { en: "Account, payment, game and partner questions", ms: "Soalan akaun, bayaran, permainan dan rakan", zh: "账户、支付、游戏与合作问题" },
        paragraphs: [
          {
            en: "Login, deposits, withdrawals and game rounds require authenticated platform support with references. Partner dashboard questions go through the partner channel. Website wording issues can be raised here.",
            ms: "Log masuk, deposit, pengeluaran dan pusingan permainan memerlukan sokongan platform disahkan dengan rujukan. Soalan papan pemuka rakan melalui saluran rakan. Isu kata-kata laman boleh ditimbulkan di sini.",
            zh: "登录、存款、提款与游戏局需要带编号的已认证平台支持。合作后台问题走合作渠道。网站措辞问题可在此提出。",
          },
        ],
      },
      {
        title: { en: "External platform notice", ms: "Notis platform luar", zh: "外部平台说明" },
        paragraphs: [
          {
            en: "No WhatsApp number, Telegram handle, email inbox or social profile is invented on this page. Only verified channels configured for this project are listed below, if any.",
            ms: "Tiada nombor WhatsApp, akaun Telegram, e-mel atau profil sosial direka di halaman ini. Hanya saluran disahkan yang dikonfigurasi untuk projek ini disenaraikan di bawah, jika ada.",
            zh: "本页不编造 WhatsApp、Telegram、电子邮箱或社交账号。下方仅列出本项目已配置的已核实渠道（如有）。",
          },
        ],
      },
    ],
  },
  "responsible-gaming": {
    sections: [
      {
        title: { en: "Entertainment and financial risk", ms: "Hiburan dan risiko kewangan", zh: "娱乐与财务风险" },
        paragraphs: [
          {
            en: "Gaming involves a real possibility of losing money. It is not a way to solve debt, earn a living or recover a previous loss.",
            ms: "Permainan melibatkan kemungkinan sebenar kehilangan wang. Ia bukan cara menyelesaikan hutang, mencari nafkah atau memulihkan kerugian terdahulu.",
            zh: "游戏存在真实亏钱可能。它不是还债、谋生或追回上次亏损的方法。",
          },
        ],
      },
      {
        title: { en: "Setting spending and time limits", ms: "Menetapkan had belanja dan masa", zh: "设定支出与时间限额" },
        paragraphs: [
          {
            en: "Decide an entertainment amount and a session length before you start. Protect rent, food, loan payments and emergency savings. Do not borrow to play.",
            ms: "Tentukan amaun hiburan dan tempoh sesi sebelum bermula. Lindungi sewa, makanan, bayaran pinjaman dan simpanan kecemasan. Jangan meminjam untuk bermain.",
            zh: "开始前决定娱乐金额与时长。保障房租、食物、贷款与应急储蓄。切勿借钱游戏。",
          },
        ],
      },
      {
        title: { en: "Not chasing losses, and taking breaks", ms: "Jangan kejar kerugian, dan berehat", zh: "不要追损，并要休息" },
        paragraphs: [
          {
            en: "Increasing stakes after a loss often deepens harm. Stop when your limit is reached. If control is difficult, pause and seek local health or gambling-support services available where you are.",
            ms: "Meningkatkan pertaruhan selepas kerugian sering memperdalam mudarat. Berhenti apabila had tercapai. Jika kawalan sukar, berhenti dan cari perkhidmatan kesihatan atau sokongan perjudian tempatan.",
            zh: "亏损后加注往往加重伤害。达到限额即停。若难以自控，请暂停并寻求当地健康或赌博支持服务。",
          },
        ],
      },
    ],
    bullets: {
      title: { en: "Practical checklist", ms: "Senarai semak praktikal", zh: "实用清单" },
      items: [
        {
          en: "Do not chase losses.",
          ms: "Jangan kejar kerugian.",
          zh: "不要追回损失。",
        },
        {
          en: "Do not borrow to play.",
          ms: "Jangan meminjam untuk bermain.",
          zh: "不要借钱游戏。",
        },
        {
          en: "Take breaks and keep essential expenses protected.",
          ms: "Berehat dan lindungi perbelanjaan penting.",
          zh: "需要时休息，并保障必要开支。",
        },
        {
          en: "Promotions are not a reason to raise your limit.",
          ms: "Promosi bukan alasan untuk menaikkan had.",
          zh: "优惠不是提高限额的理由。",
        },
      ],
    },
  },
  terms: {
    sections: [
      {
        title: { en: "Using this website", ms: "Menggunakan laman ini", zh: "使用本网站" },
        paragraphs: [
          {
            en: "These terms cover browsing this information website, following internal links, and using disclosed external calls to action. They do not replace the destination platform’s terms.",
            ms: "Terma ini merangkumi pelayaran laman maklumat ini, mengikuti pautan dalaman, dan menggunakan seruan tindakan luar yang didedahkan. Ia tidak menggantikan terma platform destinasi.",
            zh: "这些条款涵盖浏览本信息网站、跟随内部链接，以及使用已披露的外部行动按钮。它们不能替代目标平台条款。",
          },
        ],
      },
      {
        title: { en: "Acceptable use", ms: "Penggunaan yang diterima", zh: "可接受的使用" },
        paragraphs: [
          {
            en: "Do not misuse pages to impersonate the operator, scrape in a way that harms the service, or present this site as able to move player funds.",
            ms: "Jangan salah guna halaman untuk menyamar sebagai pengendali, mengikis dengan cara yang memudaratkan perkhidmatan, atau mempersembahkan laman ini sebagai mampu menggerakkan dana pemain.",
            zh: "不得利用页面冒充运营商、以损害服务的方式抓取，或把本站说成能够划转玩家资金。",
          },
        ],
      },
      {
        title: { en: "Changes", ms: "Perubahan", zh: "变更" },
        paragraphs: [
          {
            en: "Content can be updated for clarity. Live platform rules can change before this website is updated. The authenticated destination prevails for account actions.",
            ms: "Kandungan boleh dikemas kini untuk kejelasan. Peraturan platform langsung boleh berubah sebelum laman ini dikemas kini. Destinasi disahkan diutamakan untuk tindakan akaun.",
            zh: "内容可能为清晰而更新。实时平台规则可能在本站更新前就已变化。账户操作以已认证目标平台为准。",
          },
        ],
      },
    ],
  },
  "privacy-policy": {
    sections: [
      {
        title: { en: "What this policy covers", ms: "Apa yang dasar ini liputi", zh: "本政策涵盖范围" },
        paragraphs: [
          {
            en: "This policy describes this information website. It does not describe how the external gaming platform processes player accounts. Review that platform’s own privacy notice after you leave.",
            ms: "Dasar ini menerangkan laman maklumat ini. Ia tidak menerangkan cara platform permainan luar memproses akaun pemain. Semak notis privasi platform itu selepas anda pergi.",
            zh: "本政策说明本信息网站，不说明外部游戏平台如何处理玩家账户。离开后请查阅该平台自己的隐私声明。",
          },
        ],
      },
      {
        title: { en: "Information this website may receive", ms: "Maklumat yang mungkin diterima laman ini", zh: "本站可能收到的信息" },
        paragraphs: [
          {
            en: "Technical logs such as pages requested, approximate location derived from IP, and device or browser type may be processed to operate and secure the site. This site is not a cashier and does not ask for bank passwords.",
            ms: "Log teknikal seperti halaman diminta, lokasi anggaran dari IP, dan jenis peranti atau pelayar mungkin diproses untuk mengendalikan dan mengamankan laman. Laman ini bukan juruwang dan tidak meminta kata laluan bank.",
            zh: "为运营与安全，可能处理所请求页面、由 IP 得出的大致位置、设备或浏览器类型等技术日志。本站不是收银台，不索取银行密码。",
          },
        ],
      },
      {
        title: { en: "Cookies, third parties and your choices", ms: "Kuki, pihak ketiga dan pilihan anda", zh: "Cookie、第三方与您的选择" },
        paragraphs: [
          {
            en: "Hosting, analytics or security providers, if used, process data under their terms. Use browser controls for cookies. Contact the destination platform for requests about a gaming account.",
            ms: "Pembekal pengehosan, analitik atau keselamatan, jika digunakan, memproses data di bawah terma mereka. Gunakan kawalan pelayar untuk kuki. Hubungi platform destinasi untuk permintaan tentang akaun permainan.",
            zh: "托管、分析或安全服务（如使用）按其条款处理数据。Cookie 请用浏览器控制。游戏账户相关请求请联系目标平台。",
          },
        ],
      },
    ],
  },
  disclaimer: {
    sections: [
      {
        title: { en: "Information only", ms: "Maklumat sahaja", zh: "仅供参考" },
        paragraphs: [
          {
            en: "Pages are educational. They are not legal, tax, financial or medical advice. They do not guarantee availability, payout, profit, commission or suitability.",
            ms: "Halaman bersifat pendidikan. Ia bukan nasihat undang-undang, cukai, kewangan atau perubatan. Ia tidak menjamin ketersediaan, bayaran, keuntungan, komisen atau kesesuaian.",
            zh: "页面为说明性质，不是法律、税务、财务或医疗建议。不保证可用性、出款、盈利、佣金或适合性。",
          },
        ],
      },
      {
        title: { en: "External links and promotions", ms: "Pautan luar dan promosi", zh: "外部链接与优惠" },
        paragraphs: [
          {
            en: "External destinations have their own terms, which can change. Promotion figures on this site are explained from verified source descriptions and must be re-checked live. Expired offers are not presented as active.",
            ms: "Destinasi luar mempunyai terma sendiri, yang boleh berubah. Angka promosi di laman ini diterangkan dari perihalan sumber disahkan dan mesti disemak semula secara langsung. Tawaran luput tidak dipaparkan sebagai aktif.",
            zh: "外部目标有其自身条款，且可能变化。本站优惠数字来自已核实来源说明，必须在实时页面再核。过期优惠不会被写成正在进行。",
          },
        ],
      },
      {
        title: { en: "No fabricated credentials", ms: "Tiada kelayakan direka", zh: "不编造资质" },
        paragraphs: [
          {
            en: "This website does not display fake licences, awards, testimonials, user counts or government approvals. Brand and provider names are ecosystem references.",
            ms: "Laman ini tidak memaparkan lesen, anugerah, testimoni, kiraan pengguna atau kelulusan kerajaan palsu. Nama jenama dan penyedia ialah rujukan ekosistem.",
            zh: "本站不展示伪造牌照、奖项、推荐语、用户数或政府批准。品牌与提供商名称仅为生态参考。",
          },
        ],
      },
    ],
  },
};

export function getPageDepth(locale: Locale, pageId: PageId): DepthPack {
  const spec = DATA[pageId];
  return {
    sections: spec.sections.map((section) => ({
      title: pick(locale, section.title),
      paragraphs: section.paragraphs.map((paragraph) => pick(locale, paragraph)),
    })),
    bullets: spec.bullets
      ? {
          title: pick(locale, spec.bullets.title),
          items: spec.bullets.items.map((item) => pick(locale, item)),
        }
      : undefined,
    steps: spec.steps
      ? {
          title: pick(locale, spec.steps.title),
          steps: spec.steps.steps.map((step) => pick(locale, step)),
        }
      : undefined,
    faqs: spec.faqs?.map((faq) => ({
      question: pick(locale, faq.question),
      answer: pick(locale, faq.answer),
    })),
  };
}
