import type { Locale } from "@/lib/i18n/config";
import type { PageId } from "./types";

export type ExtraSection = { title: string; paragraphs: string[] };
export type ExtraFaq = { question: string; answer: string };
export type ExtraPack = {
  sections: ExtraSection[];
  bullets?: { title: string; items: string[] };
  steps?: { title: string; steps: string[] };
  faqs: ExtraFaq[];
};

const packs: Record<Locale, Record<PageId, ExtraPack>> = {
  en: {
    "about-iwin": {
      sections: [
        {
          title: "What IWIN is in this context",
          paragraphs: [
            "IWIN is discussed here as a gaming ecosystem that may include digital slots, live tables, sports markets and number games, together with account, payment and partner tools on an external platform.",
            "This partner website does not operate those products. It explains common topics so visitors can decide, with clearer information, whether to continue to an external destination.",
          ],
        },
        {
          title: "What this website provides",
          paragraphs: [
            "You will find category explainers, step-by-step account and payment guides, promotion-term reading notes, partner-programme orientation and responsible-gaming reminders.",
            "Live balances, game rounds, cashier instructions and authenticated support remain on the external platform. If a page here differs from what you see after login, treat the authenticated screen as current.",
          ],
        },
      ],
      bullets: {
        title: "How this site relates to IWIN",
        items: [
          "It is an IWIN Malaysia Official Partner information website, not the gambling operator.",
          "External calls to action may lead to a registration, login, game or partner destination.",
          "No page here can create an account, hold funds or decide a withdrawal.",
          "Provider and product names are ecosystem references, not ownership or endorsement claims.",
        ],
      },
      faqs: [
        { question: "Is this website the IWIN operator?", answer: "No. This is a partner information website. Game accounts, wallets, game rounds and transaction decisions belong to the external platform." },
        { question: "Why does this site exist?", answer: "It organises practical IWIN Malaysia information — games, guides, promotions and partner context — so visitors can research before following an external link." },
        { question: "Can I complete registration here?", answer: "No. Registration, if you choose to proceed, is completed on the external destination after you leave this site." },
        { question: "Are provider names official partnerships?", answer: "No. Names such as 918Kiss, JILI or Pragmatic Play are catalogue references used for orientation. Availability should be checked in the live lobby." },
        { question: "Where do I get account-specific help?", answer: "Use authenticated platform support for balances, deposits, withdrawals and login recovery. Use this site’s contact route for corrections to published information." },
      ],
    },
    "official-partner": {
      sections: [
        {
          title: "What this website is",
          paragraphs: [
            "“IWIN Malaysia Official Partner” describes this site’s information and referral role. It is a label for how the site helps visitors find guides and disclosed external destinations — not a claim that the site owns or operates IWIN.",
            "The site publishes explainers for games, promotions, account tasks and partner resources. It does not issue licences, certificates or government approvals.",
          ],
        },
        {
          title: "What visitors can do here",
          paragraphs: [
            "Read category and provider orientation, follow step-by-step guides, review how promotion conditions are usually structured, and understand agent or referral concepts without income promises.",
            "When a button is marked as external, you leave this website. Verify the URL, current terms and whether the destination is appropriate for you before entering personal or payment details.",
          ],
        },
      ],
      bullets: {
        title: "Important information",
        items: [
          "This site does not hold player funds or approve payouts.",
          "Promotion figures and game catalogues can change on the external platform.",
          "Partner joining and commissions, if offered, are governed by the live dashboard.",
          "Responsible-gaming guidance applies whether or not you continue to the platform.",
        ],
      },
      faqs: [
        { question: "Does Official Partner mean this site runs IWIN?", answer: "No. It describes an information and referral role. The destination platform controls accounts, products and support." },
        { question: "Is there a partnership certificate on this site?", answer: "This website does not display a fabricated legal certificate. Partner positioning is explained in plain language with external-link disclosure." },
        { question: "What information can I find here?", answer: "Gaming category guides, account and payment walkthroughs, promotion-term explainers, partner resources, FAQs and legal notices for this information website." },
        { question: "How should I treat external buttons?", answer: "They may open a third-party platform. Review that platform’s terms, eligibility and privacy practices before proceeding." },
        { question: "Who do I contact for a failed withdrawal?", answer: "The external platform’s authenticated support, with the transaction reference. This site cannot approve or accelerate payouts." },
      ],
    },
    games: {
      sections: [
        {
          title: "Understanding IWIN game categories",
          paragraphs: [
            "Slots, live casino, sports and 4D are different entertainment formats. They use different rule panels, session pace and information you should read before committing funds.",
            "A category name is not a promise that every title is available to every account. The live lobby after login is the current catalogue.",
          ],
        },
        {
          title: "How to choose a game category",
          paragraphs: [
            "Match the format to how you want to spend time: short digital rounds, streamed tables, event-based markets or scheduled draws. Also consider how quickly decisions are expected and how comfortable you are reading paytables, market definitions or draw pages.",
            "Minimum stakes are not recommendations. Set a separate entertainment budget that does not depend on recovering a previous result, and stop if you are chasing losses.",
          ],
        },
      ],
      bullets: {
        title: "Things to understand before playing",
        items: [
          "Open the rules, paytable, market text or draw information for the specific product.",
          "Check table or stake limits on the live interface, not from memory.",
          "Read promotion terms if a bonus is attached — turnover can affect withdrawals.",
          "Confirm payment and account conditions before depositing.",
          "Treat outcomes as uncertain; no category removes the risk of loss.",
        ],
      },
      faqs: [
        { question: "Which game categories does this site explain?", answer: "Slots, live casino, sports and 4D. Each has a dedicated guide. Availability of individual titles depends on the external platform." },
        { question: "Does this page list every IWIN game?", answer: "No. It explains formats so you can compare them. The authenticated lobby is the source for current titles." },
        { question: "Can any category guarantee a win?", answer: "No. Educational category information does not predict results or payout." },
        { question: "What are game providers?", answer: "Studios that develop game software. See the provider directory for ecosystem names used as navigation references, not as partnership claims." },
        { question: "Where should I go after reading this hub?", answer: "Open a category guide, the provider directory, or account guides such as registration, deposit and responsible gaming." },
      ],
    },
    "games-slots": {
      sections: [
        {
          title: "What are slot games?",
          paragraphs: [
            "Slot games are digital or video titles that present reels, symbols and a paytable. A round typically starts after a stake is confirmed and ends when the result is displayed according to the game’s rules.",
            "Two slots can share a theme while using different reel counts, paylines or ways-to-win, bonus triggers and stake controls. The in-game information panel is the source for that title.",
          ],
        },
        {
          title: "How slot games work",
          paragraphs: [
            "After you set a stake, the game determines an outcome according to its published rules. Features such as free spins, multipliers or bonus rounds, where present, have their own conditions and may change the cost or pace of a session.",
            "Any theoretical return figure, if shown, is long-run mathematical information. It is not a forecast for a session, a player or a single spin.",
          ],
        },
      ],
      bullets: {
        title: "How to choose a slot game",
        items: [
          "Read the paytable: symbols, lines or ways, feature rules and any displayed maximum-win note.",
          "Check total cost per spin after changing coin, line or feature options.",
          "Notice autoplay or rapid-spin controls that can accelerate spending.",
          "Use session reminders or a personal stop point independent of “due” results.",
          "Treat provider names as catalogue labels, not as proof the game is available or favourable.",
        ],
      },
      faqs: [
        { question: "What should I read before spinning?", answer: "The paytable and feature rules for that title, including stake cost after your settings. Do not rely on promotional artwork alone." },
        { question: "Do bonus rounds guarantee profit?", answer: "No. Bonus features can change pace and cost. They do not make outcomes certain." },
        { question: "What if a round is interrupted?", answer: "Record the time and any round ID shown, then contact authenticated platform support. Replaying to “test” an interruption is not a reliable investigation method." },
        { question: "Are mobile slots different?", answer: "Many titles adapt to smaller screens. Still verify the destination, connection quality and that stake controls remain readable before play." },
        { question: "Does a named provider mean a higher chance of winning?", answer: "No. Provider labels help you find games. They do not alter the uncertainty of results." },
      ],
    },
    "games-live-casino": {
      sections: [
        {
          title: "What is live casino?",
          paragraphs: [
            "Live casino combines a streamed dealer or presenter with a digital betting interface. You typically place wagers during a timed window, then the table result is settled according to that game’s rules.",
            "The stream is a presentation layer. The accepted-bet confirmation and official game history on the platform are more reliable than trying to time an action from delayed video.",
          ],
        },
        {
          title: "How live casino works",
          paragraphs: [
            "Formats such as baccarat, blackjack, roulette and game-show style tables, where offered, each use different outcomes, side bets and settlement logic. Confirm the rules for the specific table you join.",
            "Table minimums and maximums can vary and may change. Check them before sitting down. Side bets often use different payout tables from the main wager.",
          ],
        },
      ],
      bullets: {
        title: "Beginner considerations",
        items: [
          "Join only after you understand the betting window and what “accepted” looks like on screen.",
          "Use a stable connection; avoid switching apps mid-round.",
          "Never type passwords, OTPs or payment details in table chat.",
          "Set a clock-based stop point — continuous tables can hide session length.",
          "Availability of a format should be confirmed in the live lobby, not assumed from this guide.",
        ],
      },
      faqs: [
        { question: "Does a live dealer make results predictable?", answer: "No. A live format does not remove chance or make an outcome more certain." },
        { question: "Which live games are available?", answer: "This guide describes common formats such as baccarat, blackjack, roulette and game shows where they appear in the ecosystem. Confirm actual tables in the authenticated lobby." },
        { question: "What if the stream lags?", answer: "Use the platform’s status and history, not the video delay, to judge whether a bet was accepted." },
        { question: "Can I play live casino on mobile?", answer: "Often yes if the destination supports it. Connection quality and readable controls matter more on a small screen." },
        { question: "What should I do after a disconnection?", answer: "Check the round record before repeating an action, then contact authenticated support with the round reference if needed." },
      ],
    },
    "games-sports": {
      sections: [
        {
          title: "What sports betting means here",
          paragraphs: [
            "Sports interfaces may list markets on events, with prices that can change before or during the event. A selection is only a wager once the platform confirms acceptance on the bet slip or receipt.",
            "Knowing a sport well does not remove financial risk. Market definitions, settlement sources and abandoned-event rules can change how a result is graded.",
          ],
        },
        {
          title: "Pre-match vs live markets",
          paragraphs: [
            "Pre-match markets are offered before an event starts. Live or in-play markets update as the event unfolds; prices and lines can move quickly, and a submission may be delayed, rejected or accepted at a changed price under platform settings.",
            "Cash-out, where shown, is a variable feature — not a guaranteed right. Always read the event, selection, line, odds and stake on the confirmation.",
          ],
        },
      ],
      bullets: {
        title: "How to read a market",
        items: [
          "Identify the event, period and market type (result, handicap, total, player, and so on).",
          "Confirm whether decimal prices include stake in the displayed return.",
          "Check settlement notes for overtime, dead heat or abandoned events.",
          "Do not treat statistics or commentary as a certain future result.",
          "Set time and spending limits before in-play decisions accelerate.",
        ],
      },
      faqs: [
        { question: "Does this site promise sports profits?", answer: "No. There is no guaranteed win, easy money, risk-free or fixed-win claim on these pages." },
        { question: "What are decimal odds?", answer: "They often show total return including stake, but the accepted bet slip is the source for your actual terms." },
        { question: "Why was my live bet rejected?", answer: "Prices can move and submissions can be delayed. Only the platform can confirm the reason for a specific slip." },
        { question: "Where do I check limits?", answer: "On the live sports interface for that market and account. This information site does not display personal limits." },
        { question: "How should I bet responsibly?", answer: "Use money you can afford to lose, avoid chasing a prior result, and take breaks. See the responsible gaming page for more detail." },
      ],
    },
    "games-4d": {
      sections: [
        {
          title: "What is 4D?",
          paragraphs: [
            "4D generally refers to number-selection games tied to a scheduled draw, often using four-digit combinations. Entry types and prize tables can differ by product, so one 4D label does not describe every offering.",
            "This page explains concepts. It does not publish official draw results, guaranteed odds or operator draw times. Use the destination platform’s current draw page for those details.",
          ],
        },
        {
          title: "How draws and entries work",
          paragraphs: [
            "You typically choose a number format, confirm the draw identity and pay the displayed entry cost. Straight, permutation or system-style entries may cover combinations differently and can change the total cost.",
            "An entry counts only when the platform accepts it before the cut-off. Preparing a selection is not the same as a confirmed ticket.",
          ],
        },
      ],
      bullets: {
        title: "Things to understand before participating",
        items: [
          "Match the draw name, date, session and closing time on screen.",
          "Save the ticket reference and verify digits and entry type immediately.",
          "Check results only on the official platform record after settlement.",
          "Dreams, dates or past draws do not make a number “due”.",
          "Set a spending limit; number games remain uncertain entertainment.",
        ],
      },
      faqs: [
        { question: "Does this site publish official 4D results?", answer: "No. Check results on the destination platform’s official record. This site does not fabricate draw times or prize tables." },
        { question: "Are winning odds listed here?", answer: "No. Prize categories depend on the live product rules. This page does not invent probability claims." },
        { question: "What if my entry was not accepted?", answer: "Confirm the cut-off and ticket status on the platform. Use authenticated support with the reference if the status is unclear." },
        { question: "Can a number-selection method guarantee a prize?", answer: "No. Patterns and previous draws do not establish that a number is more likely to win." },
        { question: "How do I keep records?", answer: "Save the platform ticket reference, draw identity and entry type. Do not store passwords with those records." },
      ],
    },
    "game-providers": {
      sections: [
        {
          title: "What is a game provider?",
          paragraphs: [
            "A game provider develops the software, artwork and rule sets behind individual titles. On a gaming platform, those titles usually appear inside category lobbies such as slots or live casino.",
            "A name on this directory is an ecosystem reference. It does not mean this partner website has a direct commercial partnership with that studio, or that every related title is available to every account.",
          ],
        },
        {
          title: "How providers fit into a gaming platform",
          paragraphs: [
            "Providers help players recognise different game styles. The live lobby, each game’s information panel and the platform’s own supplier list remain the sources for what you can actually open.",
            "Catalogues change with maintenance, licensing, device and account settings. If a logo here is missing from your lobby, that is expected — this page is orientation, not a live inventory.",
          ],
        },
      ],
      faqs: [
        { question: "Is this an official partner list for each studio?", answer: "No. Listings are identification and ecosystem context. Company names belong to their owners." },
        { question: "Why might a provider be missing in my account?", answer: "Availability can vary by region, device, maintenance or account. Check the authenticated lobby." },
        { question: "Do provider pages exist for every brand?", answer: "This site uses a directory, not separate thin brand pages, unless a unique verified URL exists." },
        { question: "Should I choose a provider to improve results?", answer: "No. Provider names do not make outcomes more certain." },
        { question: "Where can I read about game formats?", answer: "See the games hub and the slots, live casino, sports and 4D guides." },
      ],
    },
    guides: {
      sections: [
        {
          title: "How to use this knowledge hub",
          paragraphs: [
            "Each guide is written for a specific task: creating an account, signing in, moving funds, using a phone, or protecting credentials. Read the guide that matches the action you are about to take on the external platform.",
            "Screens and field names can change. Treat these pages as checklists, then confirm the live instructions shown after you open the authenticated destination.",
          ],
        },
        {
          title: "Most useful starting points",
          paragraphs: [
            "If you are new, start with registration and account security. If you already have an account, the deposit, withdrawal and payment-method guides usually save the most time.",
            "Partner and promotion topics have their own hubs. Game-format questions belong on the games pages rather than in these operational guides.",
          ],
        },
      ],
      faqs: [
        { question: "Do these guides replace the live platform screens?", answer: "No. They prepare you. Current fields, limits and buttons are shown on the external platform." },
        { question: "Which guide should I read first?", answer: "Registration if you have no account; login and security if you do; deposit or withdrawal if you are about to move funds." },
        { question: "Are there fake screenshots here?", answer: "No. This site does not invent interface screenshots. Field names are described only in general terms." },
        { question: "Can this hub reset my password?", answer: "No. Use the official recovery flow on the destination platform." },
        { question: "Where are partner guides?", answer: "See Agent, Partner Programme, Affiliate Guide, Referral Guide and Partner FAQ." },
      ],
    },
    "guides-how-to-register": {
      sections: [
        {
          title: "Before registration",
          paragraphs: [
            "Have an active mobile number you control, a unique password you can store safely, and enough time to read the destination’s terms. Confirm that participating is lawful and appropriate where you are.",
            "Open the registration destination from a trusted route on this site, then inspect the domain and secure connection before typing personal details.",
          ],
        },
        {
          title: "Important registration checks",
          paragraphs: [
            "Use your own details. Later verification, recovery and payment matching often depend on them. Do not register on behalf of someone else.",
            "Review spelling, mobile number, any referral field and the terms you accept. Account approval remains a platform decision and is not guaranteed by this information website.",
          ],
        },
      ],
      bullets: {
        title: "Common registration problems",
        items: [
          "Wrong or inactive mobile number blocking verification or recovery.",
          "Reused password that is later exposed on another service.",
          "Typing credentials on a lookalike domain from a message link.",
          "Expecting this partner site to create or approve the account.",
          "Assuming a promotion is granted automatically after submit.",
        ],
      },
      faqs: [
        { question: "What fields will I see on the form?", answer: "This guide does not invent exact UI labels. Follow the fields shown on the live external form." },
        { question: "Can I register on this website?", answer: "No. You complete registration on the external destination after leaving this site." },
        { question: "Is approval guaranteed?", answer: "No. Eligibility and verification are controlled by the platform." },
        { question: "What should I do after a successful registration?", answer: "Store credentials safely, review security habits, and only then consider login, deposits or promotions." },
        { question: "Where is the RM10 offer explained?", answer: "See the free-credit promotion page. Quota and conditions must still be confirmed live." },
      ],
    },
    "guides-how-to-login": {
      sections: [
        {
          title: "How to access the login page",
          paragraphs: [
            "Start from a trusted bookmark or from this site’s disclosed external action, then inspect the address bar. Avoid login forms embedded in unexpected messages.",
            "Use a device you control. On a shared computer, prefer a private window and sign out when finished.",
          ],
        },
        {
          title: "Forgot password and recovery",
          paragraphs: [
            "Use only the recovery flow displayed on the verified platform. Confirm that any email or SMS corresponds to a reset you started.",
            "This partner website cannot reset passwords, unlock accounts or complete identity checks for you.",
          ],
        },
      ],
      bullets: {
        title: "Common login problems",
        items: [
          "Incorrect account ID format or extra spaces.",
          "Caps-lock or saved outdated password.",
          "Temporary restriction after repeated failed attempts.",
          "Service interruption or maintenance on the destination.",
          "Phishing pages that copy branding but not the real domain.",
        ],
      },
      faqs: [
        { question: "What if I cannot remember my account ID?", answer: "Use the platform’s official recovery or support channel. Do not send your password to an unsolicited contact." },
        { question: "Should I share an OTP with support?", answer: "No. One-time codes authorise access. Legitimate support should not need you to read a login OTP aloud." },
        { question: "When should I contact support?", answer: "After you have checked ID, password, URL and connection, if the official recovery path still fails. Use authenticated channels." },
        { question: "Is logging in from this information site possible?", answer: "Login happens on the external platform. Buttons here only take you there when marked as external." },
        { question: "What should I review after a suspicious login?", answer: "Recent activity, password, recovery mobile number, and any unexpected devices. See the account security guide." },
      ],
    },
    "guides-how-to-deposit": {
      sections: [
        {
          title: "Before making a deposit",
          paragraphs: [
            "Sign in through the verified destination and open the current cashier. Only methods shown for your account should be used. Availability can change.",
            "This website does not accept funds, display personal bank instructions or process payments. Never send money from a chat screenshot, copied QR code or unsolicited message.",
          ],
        },
        {
          title: "Pending and failed deposits",
          paragraphs: [
            "A submitted payment may take time to credit. Do not automatically repeat the transfer because the balance has not updated. Check the stated processing window and your payment-app status first.",
            "If the window passes, contact authenticated platform support with time, amount, sender name and reference — without sharing banking passwords or OTPs.",
          ],
        },
      ],
      bullets: {
        title: "Payment safety",
        items: [
          "Use a payment account in the required name; avoid unknown third parties.",
          "Copy recipient details from the live screen only.",
          "Keep receipts and platform references; redact secrets.",
          "Incorrect details can delay or return funds according to platform and bank rules.",
          "This site does not publish fabricated bank account numbers.",
        ],
      },
      faqs: [
        { question: "Which payment methods are available?", answer: "Only those shown in your authenticated cashier. This guide does not invent a permanent method list." },
        { question: "Does IWIN Malaysia (this site) receive deposits?", answer: "No. Payments occur on the external platform under its rules." },
        { question: "What if I entered the wrong reference?", answer: "Keep the receipt and contact authenticated support. Do not send a second payment unless the platform instructs you after review." },
        { question: "How long does a deposit take?", answer: "Times vary by method, bank and checks. This site does not promise a specific credit time." },
        { question: "Where can I compare methods?", answer: "See the payment methods guide, then confirm live options in the cashier." },
      ],
    },
    "guides-how-to-withdraw": {
      sections: [
        {
          title: "Before requesting a withdrawal",
          paragraphs: [
            "Confirm identity or bank-name matching if the platform requires it. Check whether the displayed balance includes amounts that are not yet eligible because of promotion turnover or other conditions.",
            "Inspect the receiving account number and name on screen. This information website cannot approve, speed up or guarantee a payout.",
          ],
        },
        {
          title: "Pending withdrawals and delays",
          paragraphs: [
            "A pending status is not automatically a rejection. Follow the stated review window before submitting another request, which can cause duplicate processing.",
            "Common delay reasons include unmatched names, incomplete verification, active wagering conditions, or payment-provider processing. Only the platform can confirm the reason for your request.",
          ],
        },
      ],
      bullets: {
        title: "Important conditions",
        items: [
          "Stay within displayed minimum and maximum amounts.",
          "Keep the request ID, timestamp and status.",
          "Do not promise yourself a specific arrival time unless the live screen states one.",
          "Use in-platform support with the reference if status stalls.",
          "Never share passwords or OTPs when asking about a payout.",
        ],
      },
      faqs: [
        { question: "Can this partner site approve my withdrawal?", answer: "No. Review and processing belong entirely to the external platform." },
        { question: "Why might a withdrawal be delayed?", answer: "Verification, name matching, turnover, limits, or payment-provider timing. Ask authenticated support with your reference." },
        { question: "Should I submit again if it is pending?", answer: "Usually no. Wait for the stated window, then follow platform guidance." },
        { question: "How do I keep transaction records?", answer: "Save date, amount, status and reference. Redact full account secrets." },
        { question: "What should I read about payments generally?", answer: "The payment methods guide and the deposit guide for how funds enter the account." },
      ],
    },
    "guides-payment-methods": {
      sections: [
        {
          title: "Payment method overview",
          paragraphs: [
            "Deposit and withdrawal options can differ. A method used to fund an account may not be available for payout, or may require extra matching. Always compare the live cashier, not a remembered logo.",
            "Why availability varies: bank partnerships, maintenance, account status, device, and platform policy can change what you see.",
          ],
        },
        {
          title: "How to verify payment details",
          paragraphs: [
            "Open the cashier from an authenticated session. Confirm recipient or receiving-account fields on that screen. Do not reuse old images from chats or social media.",
            "Transaction confirmation means both your payment provider’s receipt and the platform’s status. Keep both references when something needs investigation.",
          ],
        },
      ],
      bullets: {
        title: "Common payment issues",
        items: [
          "Using an account held by another person.",
          "Stale recipient details from a previous session.",
          "Assuming “instant” always means immediate credit.",
          "Missing a required transfer reference.",
          "Repeating a payment during a pending status.",
        ],
      },
      faqs: [
        { question: "Is a method listed here always available?", answer: "No. Mentions are examples of what to compare. Your cashier is authoritative." },
        { question: "Are deposit and withdrawal the same list?", answer: "Not necessarily. Check both directions in the live account." },
        { question: "How do I stay safer?", answer: "Owned accounts, live on-screen details, unique passwords, and no OTPs in chat. See account security." },
        { question: "Does this site store my bank details?", answer: "This information website does not operate the cashier. Platform privacy practices apply on the destination." },
        { question: "Where do I go next?", answer: "Deposit guide to send funds, withdrawal guide to request a payout, or contact guidance if you need routing help." },
      ],
    },
    "guides-mobile": {
      sections: [
        {
          title: "Using IWIN on mobile",
          paragraphs: [
            "These information pages are designed for mobile browsers. External game and cashier performance still depend on the destination, device and connection.",
            "This site does not offer a fake APK download. If the platform provides an official app, follow only that platform’s current official installation guidance — not files from messages or forums.",
          ],
        },
        {
          title: "Mobile login, games and payments",
          paragraphs: [
            "Expand shortened links where possible. Confirm the domain before signing in. Keep stake and payment controls readable; rotate the device if needed.",
            "Public Wi-Fi and unexpected certificate warnings deserve extra caution for login and payments. Use a screen lock and conceal OTP notifications.",
          ],
        },
      ],
      bullets: {
        title: "Troubleshooting",
        items: [
          "Update the OS and browser before handling account data.",
          "Refuse unrelated permissions such as contacts or accessibility control.",
          "After a dropped connection, check history before repeating a payment or game action.",
          "Remove old installer files you did not request.",
          "If a prompt bypasses a security warning, stop and verify the source.",
        ],
      },
      faqs: [
        { question: "Is there an official IWIN APK on this site?", answer: "No. This website does not host an app package. Do not install files from unsolicited links." },
        { question: "Can I use the information pages on a phone?", answer: "Yes. Layouts are responsive. External products still depend on the destination." },
        { question: "How do I log in on mobile?", answer: "Verify the URL, use a trusted device, and follow the login guide. Keep OTPs private." },
        { question: "Can I play live casino on a phone?", answer: "If the destination supports it. Connection quality matters; see the live casino guide." },
        { question: "What about payments on mobile?", answer: "Use the live cashier in an authenticated session. See deposit, withdrawal and payment-method guides." },
      ],
    },
    "guides-account-security": {
      sections: [
        {
          title: "Strong passwords and account protection",
          paragraphs: [
            "Use a long, unique password that is not reused for email, banking or social media. A password manager on a device you control is usually safer than notes on a shared phone.",
            "Protect recovery: keep control of the registered mobile number and know the official reset path before you need it.",
          ],
        },
        {
          title: "Phishing, URLs and suspicious messages",
          paragraphs: [
            "Check spelling, domain, urgency and requests for secrecy. No legitimate promotion should require your password, OTP or banking authentication secret.",
            "If you think an account may be compromised, change the password on a trusted device, contact authenticated platform support, and notify your payment provider if financial access may be exposed.",
          ],
        },
      ],
      bullets: {
        title: "Trusted devices and payment information",
        items: [
          "Enable a screen lock and keep software updated.",
          "Remove unknown remote-access or screen-sharing tools.",
          "Sign out on shared devices.",
          "Never reveal card security codes or banking passwords in chat.",
          "Review login and transaction records after unexpected alerts.",
        ],
      },
      faqs: [
        { question: "What is a phishing message?", answer: "A message that imitates a brand to capture credentials or payments. Inspect the URL and never rush because of a threat or prize claim." },
        { question: "Should support ask for my OTP?", answer: "No. Treat that as a warning sign and use official in-platform channels instead." },
        { question: "What if I used the same password elsewhere?", answer: "Change it on the platform and on the other service. Enable any extra verification the platform offers." },
        { question: "How do I check I am on the right site?", answer: "Compare the domain with a trusted source, look for a secure connection, and avoid links from unknown senders." },
        { question: "Where can I read more about safer play?", answer: "The responsible gaming page covers spending limits and taking breaks; this page focuses on credentials and fraud." },
      ],
    },
    promotions: {
      sections: [
        {
          title: "How promotions work",
          paragraphs: [
            "Promotions are conditional. A headline amount does not prove that you qualify, that quota remains, or that promotional value can be withdrawn without extra requirements.",
            "This hub explains how to read categories, eligibility, turnover, withdrawal interaction and account restrictions. Current offers — including whether any are active — must be checked on the external platform. This site does not invent expired or unverified amounts as if they were live.",
          ],
        },
        {
          title: "How to read promotion terms",
          paragraphs: [
            "Identify who qualifies, the claim step, the calculation base, the multiplier, excluded games, maximum bets, expiry, and what happens if you withdraw early.",
            "Keep the accepted terms and on-screen status. Authenticated records govern the account if a dispute arises.",
          ],
        },
      ],
      faqs: [
        { question: "Does this page list today’s active offers?", answer: "It explains how offers work. Live availability, quota and wording are on the external promotion page." },
        { question: "What is turnover?", answer: "A multiple of a defined base (bonus, deposit, or both) in qualifying activity before certain withdrawal conditions are met. Exact formulas are in the live terms." },
        { question: "Can I combine promotions?", answer: "Only if the platform explicitly allows it. Assume conflicts unless the terms say otherwise." },
        { question: "Where is RM10 explained?", answer: "On the free-credit page, with quota, 5x turnover and one-mobile conditions that still need live confirmation." },
        { question: "How should I use promotions responsibly?", answer: "Understand the conditions first and keep a personal spending limit. Promotions are not a reason to chase losses." },
      ],
    },
    "promotions-free-credit": {
      sections: [
        {
          title: "What the free-credit promotion is",
          paragraphs: [
            "Source information describes RM10 promotional credit for eligible new registrations through the official partner route. It is not cash automatically ready for withdrawal.",
            "A daily quota applies. Meeting other criteria does not guarantee a claim if allocation has run out. Confirm today’s status on the external platform.",
          ],
        },
        {
          title: "How to claim and common mistakes",
          paragraphs: [
            "Registration, verification and any claim step must follow the live sequence. One mobile-number limits may apply together with other anti-duplicate checks.",
            "Common mistakes include assuming the credit is guaranteed, ignoring 5x qualifying turnover (RM10 means RM50 of qualifying activity under that example), treating credit as transferable, or depositing before reading excluded games.",
          ],
        },
      ],
      bullets: {
        title: "Conditions to confirm live",
        items: [
          "Daily quota remaining.",
          "New-registration or other eligibility definition.",
          "5x turnover base, contribution and excluded products.",
          "Non-transferable credit and withdrawal interaction.",
          "Claim and completion deadlines.",
        ],
      },
      faqs: [
        { question: "Is RM10 guaranteed if I register?", answer: "No. Quota, eligibility and platform checks apply. This site does not promise allocation." },
        { question: "What does 5x turnover mean for RM10?", answer: "Under the published example, qualifying turnover of RM50 (RM10 × 5), not a promise of winnings. Eligible games must be checked live." },
        { question: "Can I transfer the credit?", answer: "Published conditions describe it as non-transferable. Live terms prevail." },
        { question: "Who may be eligible?", answer: "Typically new registrations through the partner route, subject to one-mobile and other checks. Confirm on the live page." },
        { question: "Where do I register?", answer: "Use the disclosed external registration destination, then follow the live claim instructions." },
      ],
    },
    "promotions-welcome": {
      sections: [
        {
          title: "Evaluating a welcome promotion",
          paragraphs: [
            "Welcome labels often apply only at account creation, first deposit or first claim. A banner is not proof of eligibility.",
            "Read opt-in, qualifying payment, reward formula, turnover, deadlines and withdrawal effects in that order before committing funds.",
          ],
        },
        {
          title: "Account checks",
          paragraphs: [
            "Identity, payment ownership and one-account controls can decide whether a claim remains valid after you think you have opted in.",
            "If the live terms and this page differ, pause and follow the authenticated offer.",
          ],
        },
      ],
      faqs: [
        { question: "Is there a fixed welcome amount on this page?", answer: "No. This guide explains how to read welcome terms. Current value is only on the live offer." },
        { question: "Do I need to opt in?", answer: "Some campaigns require a selection or code before payment. Check the live steps." },
        { question: "Can I withdraw immediately?", answer: "Early withdrawal can cancel or reduce a reward depending on the terms. Read that clause first." },
        { question: "What if I already had an account?", answer: "You may fall outside the new-user definition. The platform’s definition controls." },
        { question: "Where is turnover explained in more detail?", answer: "The bonus-terms guide walks through base, multiplier, contribution and caps." },
      ],
    },
    "promotions-bonus-guide": {
      sections: [
        {
          title: "Separating headline from formula",
          paragraphs: [
            "Bonus terms are easier when you isolate the calculation base, multiplier, game contribution, caps, sequence and expiry from marketing language.",
            "A 5x example means five times the defined base in qualifying turnover. It does not describe expected profit or loss.",
          ],
        },
        {
          title: "Progress and evidence",
          paragraphs: [
            "Use the platform tracker. Preserve the accepted version of terms if you need support to explain a calculation.",
            "Completing turnover does not guarantee profit and should never justify spending beyond a personal limit.",
          ],
        },
      ],
      faqs: [
        { question: "What is a contribution rate?", answer: "Some games count fully, partly or not at all toward wagering. The live table is authoritative." },
        { question: "What are caps?", answer: "Limits on reward, conversion or withdrawal after conditions are met. They can reduce what you keep." },
        { question: "Does finishing wagering mean I will profit?", answer: "No. Wagering is a condition, not a profit forecast." },
        { question: "Why does sequence matter?", answer: "Opt-in, deposit, claim and play may need a specific order. Doing them out of order can void an offer." },
        { question: "How does this relate to withdrawals?", answer: "See the withdrawal guide for how pending conditions can affect eligible balance." },
      ],
    },
    agent: {
      sections: [
        {
          title: "What is an IWIN agent?",
          paragraphs: [
            "An agent is a partner role that may allow eligible people to refer activity through assigned links or codes and view results in a dashboard. Joining may be described as free of a registration fee, while approval and verification still apply.",
            "Turnover-based commissions may apply. This page does not promise income, a commission rate or acceptance. Rates and definitions belong in the live dashboard.",
          ],
        },
        {
          title: "How the partner model works",
          paragraphs: [
            "Typical steps are application, review, tracking setup, referred-user activity, reporting statuses and possible adjustments. Self-created duplicate accounts or misleading promotion can breach rules.",
            "Who it may suit: people who can describe products accurately, disclose the referral relationship, and keep records — not anyone seeking guaranteed earnings.",
          ],
        },
      ],
      bullets: {
        title: "Partner responsibilities",
        items: [
          "Use accurate claims; no guaranteed winnings or income.",
          "Disclose referral or partner status on content you publish.",
          "Do not spam, pressure, or target unsuitable audiences including minors.",
          "Keep dashboard statements for your own records and tax questions.",
          "Confirm current terms after login before planning activity.",
        ],
      },
      faqs: [
        { question: "Is agent registration free?", answer: "Platform information may describe joining without a fee. Approval is still subject to review. Confirm live." },
        { question: "What commission rate will I get?", answer: "This site does not fabricate rates. Read the authenticated dashboard." },
        { question: "How are referrals tracked?", answer: "Usually via assigned links or codes, subject to timing and anti-abuse rules. See the referral guide." },
        { question: "Who should not join?", answer: "Anyone expecting guaranteed income, or unwilling to follow promotion and disclosure standards." },
        { question: "Where are related partner pages?", answer: "Partner Programme, Affiliate Guide, Referral Guide and Partner FAQ." },
      ],
    },
    "partner-program": {
      sections: [
        {
          title: "What is the partner programme?",
          paragraphs: [
            "The programme combines registration, referral attribution, dashboard reporting and conduct rules under external-platform terms. Evaluating only a displayed percentage is not enough.",
            "Registration uses the verified partner route. Tracking must stay consistent. Pending, approved, adjusted and paid figures are different statuses.",
          ],
        },
        {
          title: "Account management and promotion practices",
          paragraphs: [
            "Describe offers conditionally. Avoid fake scarcity. Keep age and responsible-gaming context visible. Do not use bots, impersonation or unsolicited bulk messages.",
            "Reconcile period dates and references before raising a discrepancy with partner support.",
          ],
        },
      ],
      faqs: [
        { question: "Does joining guarantee commissions?", answer: "No. Access and payment depend on valid activity and current terms." },
        { question: "How do I register?", answer: "Use the disclosed external partner destination and wait for the platform decision." },
        { question: "What should I read besides this page?", answer: "Agent overview, referral tracking, affiliate content standards and partner FAQ." },
        { question: "Can this website pay commissions?", answer: "No. Settlement is a platform function." },
        { question: "What if dashboard numbers look wrong?", answer: "Compare dates and statuses, then contact partner support with specific references." },
      ],
    },
    "affiliate-guide": {
      sections: [
        {
          title: "What affiliate marketing means here",
          paragraphs: [
            "Affiliate activity is publishing information that may include a disclosed tracking link so a platform can attribute a later registration or qualifying action.",
            "It is educational and commercial at once. Readers should understand that relationship before they click.",
          ],
        },
        {
          title: "Content guidelines and common mistakes",
          paragraphs: [
            "Answer the actual question. Qualify offers with quota, eligibility, turnover and changeability. Mark when an action happens on another website.",
            "Common mistakes: guaranteed payouts, fake certificates, hiding the referral, collecting passwords, or targeting minors.",
          ],
        },
      ],
      faqs: [
        { question: "Do affiliates receive guaranteed commissions?", answer: "No. Attribution and rates depend on live programme rules." },
        { question: "What is a tracking link?", answer: "An assigned URL or code the platform may use to associate activity. It must not disguise the destination." },
        { question: "What is conversion?", answer: "A platform-defined qualifying event, not merely a click. Definitions live in the dashboard terms." },
        { question: "Can I promise players they will win?", answer: "No. That is inaccurate and irresponsible." },
        { question: "Where is responsible promotion described?", answer: "On this page, the agent guide and the responsible gaming page." },
      ],
    },
    "referral-guide": {
      sections: [
        {
          title: "What a referral is",
          paragraphs: [
            "A referral is a possible attribution between a partner and a later user action, using a valid link or code, timing, and anti-abuse checks.",
            "A shared link or a registered account does not by itself guarantee credit. Existing users may already be attributed elsewhere.",
          ],
        },
        {
          title: "Tracking, eligibility and reward conditions",
          paragraphs: [
            "Qualifying turnover definitions can exclude voids, reversals, selected products or abuse. Dashboard statuses (tracked, pending, approved, adjusted, paid) are not interchangeable.",
            "Reward or commission amounts are only those shown in the live dashboard. This page does not invent a payout figure.",
          ],
        },
      ],
      faqs: [
        { question: "Why is a referral missing?", answer: "Prior attribution, timing, invalid tracking, user status or compliance checks. Ask partner support with dates and references." },
        { question: "Can I refer myself?", answer: "Creating accounts to generate commission may breach rules and lead to adjustments or closure." },
        { question: "Do rates stay the same forever?", answer: "No. Percentages and thresholds can change by period or tier." },
        { question: "How should I invite people?", answer: "Give space to decide, disclose the relationship, and never frame participation as dependable income." },
        { question: "Where do I confirm figures?", answer: "Only in the authenticated partner dashboard." },
      ],
    },
    "partner-faq": {
      sections: [
        {
          title: "How to use these partner answers",
          paragraphs: [
            "Questions are grouped around registration, tracking, commission, referrals, account conduct, promotion and support. They are general and do not replace dashboard terms.",
            "Prepare dates, anonymised referral references and status names before contacting partner support.",
          ],
        },
      ],
      bullets: {
        title: "Support checklist",
        items: [
          "Reporting period and time zone as shown in the dashboard.",
          "Link or code used, without exposing unrelated personal data.",
          "Status of the item (pending, adjusted, paid).",
          "What you already checked against the live terms.",
        ],
      },
      faqs: [
        { question: "Registration: is joining always approved?", answer: "No. Free-to-join, if offered, still includes eligibility and conduct checks." },
        { question: "Tracking: when is a click credited?", answer: "Attribution can require a defined sequence and window. Existing users may not qualify." },
        { question: "Commission: where is the rate?", answer: "In the current dashboard. This FAQ does not publish a fabricated percentage." },
        { question: "Referral: why was activity excluded?", answer: "Voided rounds, excluded products, abuse rules or incomplete status. Ask with a specific reference." },
        { question: "Promotion: what claims are forbidden?", answer: "Guaranteed winnings, guaranteed withdrawals, or guaranteed partner income." },
        { question: "Account: can I run duplicate player accounts?", answer: "Typically prohibited. It can lead to adjustments or closure." },
        { question: "Support: what if I need player-style help?", answer: "Player deposits and logins go through player support. Partner questions go through the partner channel with dashboard evidence." },
      ],
    },
    contact: {
      sections: [
        {
          title: "How to get assistance",
          paragraphs: [
            "Choose the channel that matches the problem. This website can clarify published guides, partner positioning and corrections to our pages. It cannot see your game balance or payment status.",
            "Account, login recovery, deposit and withdrawal questions belong on the external platform’s authenticated support, using the destination shown after login. This site does not invent WhatsApp, Telegram, email or social accounts.",
          ],
        },
        {
          title: "Routing by topic",
          paragraphs: [
            "Payment questions: have the platform reference ready; never send passwords. Partner questions: use the partner dashboard channel with dates. General website questions: use the contact path published for this information site if you need a content correction.",
            "Verified contact options appear only when they exist in site configuration. If a live-chat or support URL is configured, it opens the external platform support destination — not a made-up inbox.",
          ],
        },
      ],
      faqs: [
        { question: "Why is there no WhatsApp number here?", answer: "Unverified contact details are not published. Only configured, verified destinations are shown." },
        { question: "Who handles a stuck withdrawal?", answer: "External-platform support with your transaction reference." },
        { question: "Who handles a wrong paragraph on this website?", answer: "The information-site contact route for editorial corrections, not platform account tools." },
        { question: "Is live chat on this domain?", answer: "If offered, it is the configured external support URL, disclosed as leaving this site." },
        { question: "What should I prepare?", answer: "Timestamps, references, and a description that omits passwords, OTPs and full payment secrets." },
      ],
    },
    "responsible-gaming": {
      sections: [
        {
          title: "Treat gaming as entertainment",
          paragraphs: [
            "Games, sports markets and number draws involve a real risk of losing money. They are not a way to solve financial problems or to recover previous losses.",
            "Set a time limit and a spending limit before you start. Use money you can afford to lose. Do not use rent, food, loan or emergency funds.",
          ],
        },
        {
          title: "Take breaks and get help if needed",
          paragraphs: [
            "If you find it hard to stop, are hiding activity, or are borrowing to continue, pause and seek appropriate help through local health or gambling-support services available in your area.",
            "This information website cannot apply account blocks on the destination platform. Use the tools the external operator provides, and contact that platform for account-level limits where they exist.",
          ],
        },
      ],
      bullets: {
        title: "Practical reminders",
        items: [
          "Do not chase losses by increasing stakes.",
          "Avoid playing when upset, impaired or in a hurry.",
          "Keep other people from using your account.",
          "Combine these habits with the account-security guide.",
        ],
      },
      faqs: [
        { question: "Is gambling risk-free if I use a strategy?", answer: "No. Strategies do not remove the possibility of loss." },
        { question: "Can this site set my deposit limit?", answer: "No. Use the destination platform’s own limit tools where available." },
        { question: "What if someone I know is struggling?", answer: "Encourage them to pause and to seek local professional or support-service help. This site is not a counselling service." },
        { question: "Should promotions change my limit?", answer: "No. Offers are not a reason to spend more than you planned." },
        { question: "Where else should I read?", answer: "Account security, payment guides, and the disclaimer for this website’s limits." },
      ],
    },
    terms: {
      sections: [
        {
          title: "Scope of these terms",
          paragraphs: [
            "These terms cover use of this IWIN Malaysia official partner information website: browsing pages, following internal links, and using disclosed external calls to action.",
            "They do not govern your relationship with the external gaming platform. That platform has its own terms, which apply if you create an account there.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "Do not misuse the site, attempt to disrupt it, scrape in a way that harms service, or impersonate the operator. Content is provided for general information and may change.",
            "If you need account or payment action, you must use the destination platform. We may update these terms; continued use after an update means you should re-read this page.",
          ],
        },
      ],
      faqs: [
        { question: "Do these terms bind the gaming operator?", answer: "No. They bind use of this information website only." },
        { question: "Can I copy the guides commercially?", answer: "Do not present this site’s content as the operator’s official rules. Respect applicable copyright." },
        { question: "What if external links change?", answer: "Destinations can change. Always verify the URL and terms at the time of use." },
        { question: "Where is privacy described?", answer: "In the privacy policy for this website, separate from the platform’s notice." },
        { question: "Where is liability limited?", answer: "See also the disclaimer for information limits and absence of payout guarantees." },
      ],
    },
    "privacy-policy": {
      sections: [
        {
          title: "What this notice covers",
          paragraphs: [
            "This policy describes privacy considerations for this information website, such as technical logs, language preference, or messages you send through a published contact path.",
            "It does not describe how the external gaming platform uses account, payment or gameplay data. That operator has a separate notice you should read before registering there.",
          ],
        },
        {
          title: "What you should not send here",
          paragraphs: [
            "Do not email or message passwords, OTPs, full payment credentials or unnecessary identity documents to this information website.",
            "If you contact us about a content error, include only what is needed to find the page. Account investigations belong on the authenticated platform.",
          ],
        },
      ],
      faqs: [
        { question: "Does this site operate the player database?", answer: "No. Player accounts are on the external platform." },
        { question: "Do you sell personal data?", answer: "This policy describes this information website only. Do not assume practices of the destination operator." },
        { question: "How do I request deletion of platform account data?", answer: "Through the external platform’s own privacy process, not this partner site." },
        { question: "Are cookies used?", answer: "Essential site function and language routing may use technical storage. This page does not invent a third-party advertising list." },
        { question: "Where are website terms?", answer: "On the terms of use page." },
      ],
    },
    disclaimer: {
      sections: [
        {
          title: "Information only",
          paragraphs: [
            "Content on this website is general information about IWIN-related topics for Malaysian visitors researching games, guides, promotions and partner programmes.",
            "Nothing here is a guarantee of payout, profit, commission, game availability or suitability. Live platform terms prevail when they differ.",
          ],
        },
        {
          title: "External links and timing",
          paragraphs: [
            "Marked external actions leave this website. You are responsible for verifying the destination, security and whether you are eligible to use it.",
            "Guides can become outdated when interfaces change. Recheck the authenticated screens before acting.",
          ],
        },
      ],
      faqs: [
        { question: "Can I rely on this site for legal advice?", answer: "No. It is not legal, tax or financial advice." },
        { question: "Are winnings guaranteed?", answer: "No. Outcomes are uncertain." },
        { question: "Are agent earnings guaranteed?", answer: "No." },
        { question: "Who is responsible for platform decisions?", answer: "The external platform, according to its terms." },
        { question: "Where is partner positioning explained?", answer: "On the Official Partner page." },
      ],
    },
  },
  ms: {
    "about-iwin": {
      sections: [
        {
          title: "Apa IWIN dalam konteks ini",
          paragraphs: [
            "IWIN dibincangkan di sini sebagai ekosistem permainan yang mungkin merangkumi slot digital, meja langsung, pasaran sukan dan permainan nombor, bersama alat akaun, pembayaran dan rakan kongsi pada platform luar.",
            "Laman rakan kongsi ini tidak mengendalikan produk tersebut. Ia menjelaskan topik biasa supaya pelawat boleh memutuskan, dengan maklumat lebih jelas, sama ada untuk meneruskan ke destinasi luar.",
          ],
        },
        {
          title: "Apa yang laman web ini sediakan",
          paragraphs: [
            "Anda akan menemui penerangan kategori, panduan akaun dan pembayaran langkah demi langkah, nota membaca terma promosi, orientasi program rakan kongsi dan peringatan permainan bertanggungjawab.",
            "Baki langsung, pusingan permainan, arahan kaunter pembayaran dan sokongan disahkan kekal pada platform luar. Jika halaman di sini berbeza daripada apa yang anda lihat selepas log masuk, anggap skrin disahkan sebagai semasa.",
          ],
        },
      ],
      bullets: {
        title: "Bagaimana laman ini berkaitan dengan IWIN",
        items: [
          "Ia ialah laman maklumat Rakan Kongsi Rasmi IWIN Malaysia, bukan pengendali perjudian.",
          "Seruan tindakan luar mungkin menuju ke destinasi pendaftaran, log masuk, permainan atau rakan kongsi.",
          "Tiada halaman di sini boleh mencipta akaun, memegang dana atau memutuskan pengeluaran.",
          "Nama penyedia dan produk adalah rujukan ekosistem, bukan dakwaan pemilikan atau sokongan.",
        ],
      },
      faqs: [
        { question: "Adakah laman web ini pengendali IWIN?", answer: "Tidak. Ini ialah laman maklumat rakan kongsi. Akaun permainan, dompet, pusingan permainan dan keputusan transaksi milik platform luar." },
        { question: "Mengapa laman ini wujud?", answer: "Ia menyusun maklumat praktikal IWIN Malaysia — permainan, panduan, promosi dan konteks rakan kongsi — supaya pelawat boleh menyiasat sebelum mengikuti pautan luar." },
        { question: "Bolehkah saya lengkapkan pendaftaran di sini?", answer: "Tidak. Pendaftaran, jika anda memilih untuk meneruskan, diselesaikan di destinasi luar selepas anda meninggalkan laman ini." },
        { question: "Adakah nama penyedia perkongsian rasmi?", answer: "Tidak. Nama seperti 918Kiss, JILI atau Pragmatic Play ialah rujukan katalog untuk orientasi. Ketersediaan harus disemak dalam lobi langsung." },
        { question: "Di mana saya mendapat bantuan khusus akaun?", answer: "Gunakan sokongan platform disahkan untuk baki, deposit, pengeluaran dan pemulihan log masuk. Gunakan laluan hubungan laman ini untuk pembetulan maklumat yang diterbitkan." },
      ],
    },
    "official-partner": {
      sections: [
        {
          title: "Apa laman web ini",
          paragraphs: [
            "“Rakan Kongsi Rasmi IWIN Malaysia” menerangkan peranan maklumat dan rujukan laman ini. Ia ialah label cara laman ini membantu pelawat menemui panduan dan destinasi luar yang didedahkan — bukan dakwaan bahawa laman ini memiliki atau mengendalikan IWIN.",
            "Laman ini menerbitkan penerangan untuk permainan, promosi, tugas akaun dan sumber rakan kongsi. Ia tidak mengeluarkan lesen, sijil atau kelulusan kerajaan.",
          ],
        },
        {
          title: "Apa yang pelawat boleh lakukan di sini",
          paragraphs: [
            "Baca orientasi kategori dan penyedia, ikuti panduan langkah demi langkah, semak bagaimana syarat promosi biasanya disusun, dan fahami konsep ejen atau rujukan tanpa janji pendapatan.",
            "Apabila butang ditandakan sebagai luar, anda meninggalkan laman web ini. Sahkan URL, terma semasa dan sama ada destinasi sesuai untuk anda sebelum memasukkan butiran peribadi atau pembayaran.",
          ],
        },
      ],
      bullets: {
        title: "Maklumat penting",
        items: [
          "Laman ini tidak memegang dana pemain atau meluluskan pembayaran.",
          "Angka promosi dan katalog permainan boleh berubah di platform luar.",
          "Penyertaan rakan kongsi dan komisen, jika ditawarkan, dikawal oleh papan pemuka langsung.",
          "Panduan permainan bertanggungjawab terpakai sama ada anda meneruskan ke platform atau tidak.",
        ],
      },
      faqs: [
        { question: "Adakah Rakan Kongsi Rasmi bermaksud laman ini mengendalikan IWIN?", answer: "Tidak. Ia menerangkan peranan maklumat dan rujukan. Platform destinasi mengawal akaun, produk dan sokongan." },
        { question: "Adakah terdapat sijil perkongsian di laman ini?", answer: "Laman web ini tidak memaparkan sijil undang-undang yang direka-cipta. Kedudukan rakan kongsi dijelaskan dalam bahasa biasa dengan pendedahan pautan luar." },
        { question: "Maklumat apa yang boleh saya temui di sini?", answer: "Panduan kategori permainan, panduan akaun dan pembayaran, penerangan terma promosi, sumber rakan kongsi, soalan lazim dan notis undang-undang untuk laman maklumat ini." },
        { question: "Bagaimana patut saya anggap butang luar?", answer: "Ia mungkin membuka platform pihak ketiga. Semak terma, kelayakan dan amalan privasi platform itu sebelum meneruskan." },
        { question: "Siapa yang saya hubungi untuk pengeluaran gagal?", answer: "Sokongan disahkan platform luar, dengan rujukan transaksi. Laman ini tidak boleh meluluskan atau mempercepatkan pembayaran." },
      ],
    },
    games: {
      sections: [
        {
          title: "Memahami kategori permainan IWIN",
          paragraphs: [
            "Slot, kasino langsung, sukan dan 4D ialah format hiburan yang berbeza. Ia menggunakan panel peraturan, rentak sesi dan maklumat yang berbeza, yang patut anda baca sebelum komited dana.",
            "Nama kategori bukan janji bahawa setiap tajuk tersedia untuk setiap akaun. Lobi langsung selepas log masuk ialah katalog semasa.",
          ],
        },
        {
          title: "Cara memilih kategori permainan",
          paragraphs: [
            "Padankan format dengan cara anda ingin menghabiskan masa: pusingan digital singkat, meja distrim, pasaran berasaskan acara atau cabutan berjadual. Pertimbangkan juga seberapa cepat keputusan dijangka dan seberapa selesa anda membaca jadual bayaran, definisi pasaran atau halaman cabutan.",
            "Pertaruhan minimum bukan cadangan. Tetapkan bajet hiburan berasingan yang tidak bergantung pada memulihkan hasil sebelumnya, dan berhenti jika anda mengejar kerugian.",
          ],
        },
      ],
      bullets: {
        title: "Perkara yang perlu difahami sebelum bermain",
        items: [
          "Buka peraturan, jadual bayaran, teks pasaran atau maklumat cabutan untuk produk khusus itu.",
          "Semak had meja atau pertaruhan pada antara muka langsung, bukan dari ingatan.",
          "Baca terma promosi jika bonus dilampirkan — pusing ganti boleh menjejaskan pengeluaran.",
          "Sahkan syarat pembayaran dan akaun sebelum mendeposit.",
          "Anggap hasil sebagai tidak pasti; tiada kategori menghapuskan risiko kerugian.",
        ],
      },
      faqs: [
        { question: "Kategori permainan mana yang laman ini terangkan?", answer: "Slot, kasino langsung, sukan dan 4D. Setiap satu mempunyai panduan khusus. Ketersediaan tajuk individu bergantung pada platform luar." },
        { question: "Adakah halaman ini menyenaraikan setiap permainan IWIN?", answer: "Tidak. Ia menjelaskan format supaya anda boleh membandingkannya. Lobi disahkan ialah sumber untuk tajuk semasa." },
        { question: "Bolehkah mana-mana kategori menjamin kemenangan?", answer: "Tidak. Maklumat kategori pendidikan tidak meramalkan hasil atau pembayaran." },
        { question: "Apakah penyedia permainan?", answer: "Studio yang membangunkan perisian permainan. Lihat direktori penyedia untuk nama ekosistem yang digunakan sebagai rujukan navigasi, bukan sebagai dakwaan perkongsian." },
        { question: "Ke mana patut saya pergi selepas membaca hab ini?", answer: "Buka panduan kategori, direktori penyedia, atau panduan akaun seperti pendaftaran, deposit dan permainan bertanggungjawab." },
      ],
    },
    "games-slots": {
      sections: [
        {
          title: "Apa itu permainan slot?",
          paragraphs: [
            "Permainan slot ialah tajuk digital atau video yang memaparkan gulungan, simbol dan jadual bayaran. Satu pusingan biasanya bermula selepas pertaruhan disahkan dan berakhir apabila hasil dipaparkan mengikut peraturan permainan.",
            "Dua slot boleh berkongsi tema sambil menggunakan bilangan gulungan, garis bayaran atau cara-menang, pencetus bonus dan kawalan pertaruhan yang berbeza. Panel maklumat dalam permainan ialah sumber untuk tajuk itu.",
          ],
        },
        {
          title: "Bagaimana permainan slot berfungsi",
          paragraphs: [
            "Selepas anda menetapkan pertaruhan, permainan menentukan hasil mengikut peraturan yang diterbitkan. Ciri seperti putaran percuma, pengganda atau pusingan bonus, jika ada, mempunyai syarat sendiri dan boleh mengubah kos atau rentak sesi.",
            "Sebarang angka pulangan teori, jika dipaparkan, ialah maklumat matematik jangka panjang. Ia bukan ramalan untuk sesi, pemain atau satu putaran.",
          ],
        },
      ],
      bullets: {
        title: "Cara memilih permainan slot",
        items: [
          "Baca jadual bayaran: simbol, garis atau cara, peraturan ciri dan sebarang nota kemenangan maksimum yang dipaparkan.",
          "Semak jumlah kos setiap putaran selepas menukar pilihan syiling, garis atau ciri.",
          "Perhatikan kawalan autoplay atau putaran pantas yang boleh mempercepatkan perbelanjaan.",
          "Gunakan peringatan sesi atau titik berhenti peribadi yang tidak bergantung pada hasil “wajib”.",
          "Anggap nama penyedia sebagai label katalog, bukan sebagai bukti permainan tersedia atau menguntungkan.",
        ],
      },
      faqs: [
        { question: "Apa yang patut saya baca sebelum memutar?", answer: "Jadual bayaran dan peraturan ciri untuk tajuk itu, termasuk kos pertaruhan selepas tetapan anda. Jangan bergantung pada karya seni promosi semata-mata." },
        { question: "Adakah pusingan bonus menjamin keuntungan?", answer: "Tidak. Ciri bonus boleh mengubah rentak dan kos. Ia tidak menjadikan hasil pasti." },
        { question: "Apa jika pusingan terganggu?", answer: "Catat masa dan sebarang ID pusingan yang dipaparkan, kemudian hubungi sokongan platform disahkan. Mengulang untuk “menguji” gangguan bukan kaedah siasatan yang boleh dipercayai." },
        { question: "Adakah slot mudah alih berbeza?", answer: "Banyak tajuk menyesuaikan diri dengan skrin lebih kecil. Tetap sahkan destinasi, kualiti sambungan dan bahawa kawalan pertaruhan kekal boleh dibaca sebelum bermain." },
        { question: "Adakah penyedia bernama bermaksud peluang menang lebih tinggi?", answer: "Tidak. Label penyedia membantu anda menemui permainan. Ia tidak mengubah ketidakpastian hasil." },
      ],
    },
    "games-live-casino": {
      sections: [
        {
          title: "Apa itu kasino langsung?",
          paragraphs: [
            "Kasino langsung menggabungkan dealer atau pembawa acara yang distrim dengan antara muka pertaruhan digital. Anda biasanya meletakkan pertaruhan dalam tetingkap masa, kemudian hasil meja diselesaikan mengikut peraturan permainan itu.",
            "Strim ialah lapisan persembahan. Pengesahan pertaruhan diterima dan sejarah permainan rasmi pada platform lebih boleh dipercayai daripada cuba mengatur masa tindakan dari video tertunda.",
          ],
        },
        {
          title: "Bagaimana kasino langsung berfungsi",
          paragraphs: [
            "Format seperti baccarat, blackjack, rolet dan meja gaya rancangan permainan, jika ditawarkan, masing-masing menggunakan hasil, pertaruhan sisi dan logik penyelesaian yang berbeza. Sahkan peraturan untuk meja khusus yang anda sertai.",
            "Minimum dan maksimum meja boleh berbeza dan mungkin berubah. Semaknya sebelum duduk. Pertaruhan sisi sering menggunakan jadual bayaran berbeza daripada pertaruhan utama.",
          ],
        },
      ],
      bullets: {
        title: "Pertimbangan untuk pemula",
        items: [
          "Sertai hanya selepas anda memahami tetingkap pertaruhan dan bagaimana “diterima” kelihatan pada skrin.",
          "Gunakan sambungan stabil; elak menukar aplikasi di tengah pusingan.",
          "Jangan sekali-kali taip kata laluan, OTP atau butiran pembayaran dalam sembang meja.",
          "Tetapkan titik berhenti berasaskan jam — meja berterusan boleh menyembunyikan panjang sesi.",
          "Ketersediaan sesuatu format harus disahkan dalam lobi langsung, bukan diandaikan daripada panduan ini.",
        ],
      },
      faqs: [
        { question: "Adakah dealer langsung menjadikan hasil boleh diramal?", answer: "Tidak. Format langsung tidak menghapuskan peluang atau menjadikan hasil lebih pasti." },
        { question: "Permainan langsung mana yang tersedia?", answer: "Panduan ini menerangkan format biasa seperti baccarat, blackjack, rolet dan rancangan permainan di mana ia muncul dalam ekosistem. Sahkan meja sebenar dalam lobi disahkan." },
        { question: "Apa jika strim tertunda?", answer: "Gunakan status dan sejarah platform, bukan kelewatan video, untuk menilai sama ada pertaruhan diterima." },
        { question: "Bolehkah saya main kasino langsung pada mudah alih?", answer: "Selalunya ya jika destinasi menyokongnya. Kualiti sambungan dan kawalan yang boleh dibaca lebih penting pada skrin kecil." },
        { question: "Apa yang patut saya lakukan selepas terputus sambungan?", answer: "Semak rekod pusingan sebelum mengulang tindakan, kemudian hubungi sokongan disahkan dengan rujukan pusingan jika diperlukan." },
      ],
    },
    "games-sports": {
      sections: [
        {
          title: "Maksud pertaruhan sukan di sini",
          paragraphs: [
            "Antara muka sukan mungkin menyenaraikan pasaran pada acara, dengan harga yang boleh berubah sebelum atau semasa acara. Pilihan hanya menjadi pertaruhan apabila platform mengesahkan penerimaan pada slip atau resit pertaruhan.",
            "Mengenali sesuatu sukan dengan baik tidak menghapuskan risiko kewangan. Definisi pasaran, sumber penyelesaian dan peraturan acara terbengkalai boleh mengubah cara hasil digredkan.",
          ],
        },
        {
          title: "Pasaran pra-perlawanan vs langsung",
          paragraphs: [
            "Pasaran pra-perlawanan ditawarkan sebelum acara bermula. Pasaran langsung atau dalam permainan dikemas kini semasa acara berlangsung; harga dan garisan boleh bergerak cepat, dan penyerahan mungkin ditunda, ditolak atau diterima pada harga yang diubah di bawah tetapan platform.",
            "Cash-out, jika dipaparkan, ialah ciri berubah-ubah — bukan hak terjamin. Sentiasa baca acara, pilihan, garisan, odds dan pertaruhan pada pengesahan.",
          ],
        },
      ],
      bullets: {
        title: "Cara membaca pasaran",
        items: [
          "Kenal pasti acara, tempoh dan jenis pasaran (keputusan, handicap, jumlah, pemain, dan sebagainya).",
          "Sahkan sama ada harga perpuluhan merangkumi pertaruhan dalam pulangan yang dipaparkan.",
          "Semak nota penyelesaian untuk masa tambahan, seri (dead heat) atau acara terbengkalai.",
          "Jangan anggap statistik atau ulasan sebagai hasil masa depan yang pasti.",
          "Tetapkan had masa dan perbelanjaan sebelum keputusan dalam permainan mempercepatkan.",
        ],
      },
      faqs: [
        { question: "Adakah laman ini menjanjikan keuntungan sukan?", answer: "Tidak. Tiada dakwaan kemenangan terjamin, wang mudah, tanpa risiko atau kemenangan tetap pada halaman ini." },
        { question: "Apa itu odds perpuluhan?", answer: "Ia sering menunjukkan jumlah pulangan termasuk pertaruhan, tetapi slip pertaruhan yang diterima ialah sumber untuk terma sebenar anda." },
        { question: "Mengapa pertaruhan langsung saya ditolak?", answer: "Harga boleh bergerak dan penyerahan boleh tertunda. Hanya platform boleh mengesahkan sebab untuk slip tertentu." },
        { question: "Di mana saya semak had?", answer: "Pada antara muka sukan langsung untuk pasaran dan akaun itu. Laman maklumat ini tidak memaparkan had peribadi." },
        { question: "Bagaimana patut saya bertaruh secara bertanggungjawab?", answer: "Gunakan wang yang anda mampu rugi, elak mengejar hasil sebelumnya, dan berehat. Lihat halaman permainan bertanggungjawab untuk butiran lanjut." },
      ],
    },
    "games-4d": {
      sections: [
        {
          title: "Apa itu 4D?",
          paragraphs: [
            "4D umumnya merujuk kepada permainan pemilihan nombor yang dikaitkan dengan cabutan berjadual, sering menggunakan kombinasi empat digit. Jenis penyertaan dan jadual hadiah boleh berbeza mengikut produk, jadi satu label 4D tidak menerangkan setiap tawaran.",
            "Halaman ini menjelaskan konsep. Ia tidak menerbitkan keputusan cabutan rasmi, odds terjamin atau masa cabutan pengendali. Gunakan halaman cabutan semasa platform destinasi untuk butiran tersebut.",
          ],
        },
        {
          title: "Bagaimana cabutan dan penyertaan berfungsi",
          paragraphs: [
            "Anda biasanya memilih format nombor, mengesahkan identiti cabutan dan membayar kos penyertaan yang dipaparkan. Penyertaan lurus, permutasi atau gaya sistem mungkin meliputi kombinasi secara berbeza dan boleh mengubah jumlah kos.",
            "Penyertaan dikira hanya apabila platform menerimanya sebelum waktu tamat. Menyediakan pilihan tidak sama dengan tiket yang disahkan.",
          ],
        },
      ],
      bullets: {
        title: "Perkara yang perlu difahami sebelum menyertai",
        items: [
          "Padankan nama cabutan, tarikh, sesi dan masa penutupan pada skrin.",
          "Simpan rujukan tiket dan sahkan digit serta jenis penyertaan serta-merta.",
          "Semak keputusan hanya pada rekod rasmi platform selepas penyelesaian.",
          "Mimpi, tarikh atau cabutan lalu tidak menjadikan nombor “wajib keluar”.",
          "Tetapkan had perbelanjaan; permainan nombor kekal hiburan yang tidak pasti.",
        ],
      },
      faqs: [
        { question: "Adakah laman ini menerbitkan keputusan 4D rasmi?", answer: "Tidak. Semak keputusan pada rekod rasmi platform destinasi. Laman ini tidak mereka-cipta masa cabutan atau jadual hadiah." },
        { question: "Adakah odds kemenangan disenaraikan di sini?", answer: "Tidak. Kategori hadiah bergantung pada peraturan produk langsung. Halaman ini tidak mereka-cipta dakwaan kebarangkalian." },
        { question: "Apa jika penyertaan saya tidak diterima?", answer: "Sahkan waktu tamat dan status tiket pada platform. Gunakan sokongan disahkan dengan rujukan jika status tidak jelas." },
        { question: "Bolehkah kaedah pemilihan nombor menjamin hadiah?", answer: "Tidak. Corak dan cabutan sebelumnya tidak membuktikan bahawa sesuatu nombor lebih berkemungkinan menang." },
        { question: "Bagaimana saya menyimpan rekod?", answer: "Simpan rujukan tiket platform, identiti cabutan dan jenis penyertaan. Jangan simpan kata laluan bersama rekod tersebut." },
      ],
    },
    "game-providers": {
      sections: [
        {
          title: "Apa itu penyedia permainan?",
          paragraphs: [
            "Penyedia permainan membangunkan perisian, karya seni dan set peraturan di sebalik tajuk individu. Pada platform permainan, tajuk tersebut biasanya muncul dalam lobi kategori seperti slot atau kasino langsung.",
            "Nama pada direktori ini ialah rujukan ekosistem. Ia tidak bermaksud laman rakan kongsi ini mempunyai perkongsian komersial langsung dengan studio itu, atau bahawa setiap tajuk berkaitan tersedia untuk setiap akaun.",
          ],
        },
        {
          title: "Bagaimana penyedia sesuai dalam platform permainan",
          paragraphs: [
            "Penyedia membantu pemain mengenali gaya permainan yang berbeza. Lobi langsung, panel maklumat setiap permainan dan senarai pembekal platform sendiri kekal sebagai sumber untuk apa yang anda boleh buka sebenar.",
            "Katalog berubah dengan penyelenggaraan, pelesenan, peranti dan tetapan akaun. Jika logo di sini tiada dalam lobi anda, itu dijangka — halaman ini ialah orientasi, bukan inventori langsung.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah ini senarai rakan rasmi untuk setiap studio?", answer: "Tidak. Senarai ialah pengenalan dan konteks ekosistem. Nama syarikat milik pemiliknya." },
        { question: "Mengapa penyedia mungkin tiada dalam akaun saya?", answer: "Ketersediaan boleh berbeza mengikut wilayah, peranti, penyelenggaraan atau akaun. Semak lobi disahkan." },
        { question: "Adakah halaman penyedia wujud untuk setiap jenama?", answer: "Laman ini menggunakan direktori, bukan halaman jenama nipis yang berasingan, melainkan URL unik yang disahkan wujud." },
        { question: "Patutkah saya memilih penyedia untuk memperbaiki hasil?", answer: "Tidak. Nama penyedia tidak menjadikan hasil lebih pasti." },
        { question: "Di mana saya boleh membaca tentang format permainan?", answer: "Lihat hab permainan serta panduan slot, kasino langsung, sukan dan 4D." },
      ],
    },
    guides: {
      sections: [
        {
          title: "Cara menggunakan hab pengetahuan ini",
          paragraphs: [
            "Setiap panduan ditulis untuk tugas tertentu: mencipta akaun, log masuk, memindahkan dana, menggunakan telefon, atau melindungi kelayakan. Baca panduan yang sepadan dengan tindakan yang anda akan ambil di platform luar.",
            "Skrin dan nama medan boleh berubah. Anggap halaman ini sebagai senarai semak, kemudian sahkan arahan langsung yang dipaparkan selepas anda membuka destinasi disahkan.",
          ],
        },
        {
          title: "Titik permulaan yang paling berguna",
          paragraphs: [
            "Jika anda baharu, mulakan dengan pendaftaran dan keselamatan akaun. Jika anda sudah mempunyai akaun, panduan deposit, pengeluaran dan kaedah pembayaran biasanya menjimatkan masa paling banyak.",
            "Topik rakan kongsi dan promosi mempunyai hab sendiri. Soalan format permainan tergolong pada halaman permainan, bukan dalam panduan operasi ini.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah panduan ini menggantikan skrin platform langsung?", answer: "Tidak. Ia menyediakan anda. Medan, had dan butang semasa dipaparkan pada platform luar." },
        { question: "Panduan mana yang patut saya baca dahulu?", answer: "Pendaftaran jika anda tiada akaun; log masuk dan keselamatan jika ada; deposit atau pengeluaran jika anda akan memindahkan dana." },
        { question: "Adakah terdapat tangkapan skrin palsu di sini?", answer: "Tidak. Laman ini tidak mereka-cipta tangkapan skrin antara muka. Nama medan diterangkan hanya secara umum." },
        { question: "Bolehkah hab ini menetapkan semula kata laluan saya?", answer: "Tidak. Gunakan aliran pemulihan rasmi pada platform destinasi." },
        { question: "Di mana panduan rakan kongsi?", answer: "Lihat Ejen, Program Rakan Kongsi, Panduan Afiliasi, Panduan Rujukan dan Soalan Lazim Rakan Kongsi." },
      ],
    },
    "guides-how-to-register": {
      sections: [
        {
          title: "Sebelum pendaftaran",
          paragraphs: [
            "Sediakan nombor mudah alih aktif yang anda kawal, kata laluan unik yang boleh anda simpan dengan selamat, dan masa yang cukup untuk membaca terma destinasi. Sahkan bahawa penyertaan adalah sah dan sesuai di tempat anda.",
            "Buka destinasi pendaftaran dari laluan dipercayai pada laman ini, kemudian periksa domain dan sambungan selamat sebelum menaip butiran peribadi.",
          ],
        },
        {
          title: "Semakan pendaftaran penting",
          paragraphs: [
            "Gunakan butiran anda sendiri. Pengesahan, pemulihan dan padanan pembayaran kemudian sering bergantung padanya. Jangan daftar bagi pihak orang lain.",
            "Semak ejaan, nombor mudah alih, sebarang medan rujukan dan terma yang anda terima. Kelulusan akaun kekal keputusan platform dan tidak dijamin oleh laman maklumat ini.",
          ],
        },
      ],
      bullets: {
        title: "Masalah pendaftaran biasa",
        items: [
          "Nombor mudah alih salah atau tidak aktif yang menyekat pengesahan atau pemulihan.",
          "Kata laluan digunakan semula yang kemudian terdedah pada perkhidmatan lain.",
          "Menaip kelayakan pada domain menyerupai daripada pautan mesej.",
          "Mengharapkan laman rakan kongsi ini mencipta atau meluluskan akaun.",
          "Menganggap promosi diberikan secara automatik selepas penyerahan.",
        ],
      },
      faqs: [
        { question: "Medan apa yang akan saya lihat pada borang?", answer: "Panduan ini tidak mereka-cipta label UI tepat. Ikuti medan yang dipaparkan pada borang luar langsung." },
        { question: "Bolehkah saya mendaftar di laman web ini?", answer: "Tidak. Anda lengkapkan pendaftaran di destinasi luar selepas meninggalkan laman ini." },
        { question: "Adakah kelulusan dijamin?", answer: "Tidak. Kelayakan dan pengesahan dikawal oleh platform." },
        { question: "Apa yang patut saya lakukan selepas pendaftaran berjaya?", answer: "Simpan kelayakan dengan selamat, semak tabiat keselamatan, dan hanya kemudian pertimbangkan log masuk, deposit atau promosi." },
        { question: "Di mana tawaran RM10 dijelaskan?", answer: "Lihat halaman promosi kredit percuma. Kuota dan syarat masih mesti disahkan secara langsung." },
      ],
    },
    "guides-how-to-login": {
      sections: [
        {
          title: "Cara mengakses halaman log masuk",
          paragraphs: [
            "Mulakan dari penanda halaman dipercayai atau dari tindakan luar yang didedahkan di laman ini, kemudian periksa bar alamat. Elakkan borang log masuk yang terbenam dalam mesej tidak dijangka.",
            "Gunakan peranti yang anda kawal. Pada komputer kongsi, utamakan tetingkap peribadi dan log keluar apabila selesai.",
          ],
        },
        {
          title: "Lupa kata laluan dan pemulihan",
          paragraphs: [
            "Gunakan hanya aliran pemulihan yang dipaparkan pada platform yang disahkan. Sahkan bahawa sebarang e-mel atau SMS sepadan dengan tetapan semula yang anda mulakan.",
            "Laman rakan kongsi ini tidak boleh menetapkan semula kata laluan, membuka kunci akaun atau menyelesaikan semakan identiti untuk anda.",
          ],
        },
      ],
      bullets: {
        title: "Masalah log masuk biasa",
        items: [
          "Format ID akaun salah atau ruang tambahan.",
          "Caps Lock atau kata laluan lama yang disimpan.",
          "Sekatan sementara selepas percubaan gagal berulang.",
          "Gangguan perkhidmatan atau penyelenggaraan pada destinasi.",
          "Halaman phishing yang menyalin penjenamaan tetapi bukan domain sebenar.",
        ],
      },
      faqs: [
        { question: "Apa jika saya tidak ingat ID akaun saya?", answer: "Gunakan saluran pemulihan atau sokongan rasmi platform. Jangan hantar kata laluan anda kepada hubungan tidak diminta." },
        { question: "Patutkah saya kongsi OTP dengan sokongan?", answer: "Tidak. Kod sekali guna memberi kuasa akses. Sokongan sah tidak sepatutnya memerlukan anda membaca OTP log masuk dengan kuat." },
        { question: "Bila patut saya hubungi sokongan?", answer: "Selepas anda menyemak ID, kata laluan, URL dan sambungan, jika laluan pemulihan rasmi masih gagal. Gunakan saluran disahkan." },
        { question: "Adakah log masuk dari laman maklumat ini mungkin?", answer: "Log masuk berlaku di platform luar. Butang di sini hanya membawa anda ke sana apabila ditandakan sebagai luar." },
        { question: "Apa yang patut saya semak selepas log masuk mencurigakan?", answer: "Aktiviti terkini, kata laluan, nombor mudah alih pemulihan, dan sebarang peranti tidak dijangka. Lihat panduan keselamatan akaun." },
      ],
    },
    "guides-how-to-deposit": {
      sections: [
        {
          title: "Sebelum membuat deposit",
          paragraphs: [
            "Log masuk melalui destinasi yang disahkan dan buka kaunter pembayaran semasa. Hanya kaedah yang dipaparkan untuk akaun anda patut digunakan. Ketersediaan boleh berubah.",
            "Laman web ini tidak menerima dana, memaparkan arahan bank peribadi atau memproses pembayaran. Jangan sekali-kali hantar wang dari tangkapan skrin sembang, kod QR disalin atau mesej tidak diminta.",
          ],
        },
        {
          title: "Deposit tertunda dan gagal",
          paragraphs: [
            "Pembayaran yang diserahkan mungkin mengambil masa untuk dikreditkan. Jangan secara automatik ulangi pemindahan kerana baki belum dikemas kini. Semak tetingkap pemprosesan yang dinyatakan dan status aplikasi pembayaran anda dahulu.",
            "Jika tetingkap berlalu, hubungi sokongan platform disahkan dengan masa, jumlah, nama penghantar dan rujukan — tanpa berkongsi kata laluan perbankan atau OTP.",
          ],
        },
      ],
      bullets: {
        title: "Keselamatan pembayaran",
        items: [
          "Gunakan akaun pembayaran dalam nama yang diperlukan; elakkan pihak ketiga tidak dikenali.",
          "Salin butiran penerima dari skrin langsung sahaja.",
          "Simpan resit dan rujukan platform; redak rahsia.",
          "Butiran salah boleh menunda atau memulangkan dana mengikut peraturan platform dan bank.",
          "Laman ini tidak menerbitkan nombor akaun bank yang direka-cipta.",
        ],
      },
      faqs: [
        { question: "Kaedah pembayaran mana yang tersedia?", answer: "Hanya yang dipaparkan dalam kaunter pembayaran disahkan anda. Panduan ini tidak mereka-cipta senarai kaedah kekal." },
        { question: "Adakah IWIN Malaysia (laman ini) menerima deposit?", answer: "Tidak. Pembayaran berlaku di platform luar mengikut peraturannya." },
        { question: "Apa jika saya memasukkan rujukan yang salah?", answer: "Simpan resit dan hubungi sokongan disahkan. Jangan hantar pembayaran kedua melainkan platform mengarahkan anda selepas semakan." },
        { question: "Berapa lama deposit mengambil masa?", answer: "Masa berbeza mengikut kaedah, bank dan semakan. Laman ini tidak menjanjikan masa kredit tertentu." },
        { question: "Di mana saya boleh membandingkan kaedah?", answer: "Lihat panduan kaedah pembayaran, kemudian sahkan pilihan langsung dalam kaunter pembayaran." },
      ],
    },
    "guides-how-to-withdraw": {
      sections: [
        {
          title: "Sebelum meminta pengeluaran",
          paragraphs: [
            "Sahkan padanan identiti atau nama bank jika platform memerlukannya. Semak sama ada baki yang dipaparkan merangkumi jumlah yang belum layak kerana pusing ganti promosi atau syarat lain.",
            "Periksa nombor dan nama akaun penerima pada skrin. Laman maklumat ini tidak boleh meluluskan, mempercepatkan atau menjamin pembayaran.",
          ],
        },
        {
          title: "Pengeluaran tertunda dan kelewatan",
          paragraphs: [
            "Status tertunda bukan secara automatik penolakan. Ikuti tetingkap semakan yang dinyatakan sebelum menyerahkan permintaan lain, yang boleh menyebabkan pemprosesan pendua.",
            "Sebab kelewatan biasa termasuk nama tidak sepadan, pengesahan tidak lengkap, syarat pertaruhan aktif, atau pemprosesan penyedia pembayaran. Hanya platform boleh mengesahkan sebab untuk permintaan anda.",
          ],
        },
      ],
      bullets: {
        title: "Syarat penting",
        items: [
          "Kekal dalam jumlah minimum dan maksimum yang dipaparkan.",
          "Simpan ID permintaan, cap masa dan status.",
          "Jangan janjikan diri anda masa ketibaan tertentu melainkan skrin langsung menyatakan satu.",
          "Gunakan sokongan dalam platform dengan rujukan jika status terhenti.",
          "Jangan sekali-kali berkongsi kata laluan atau OTP semasa bertanya tentang pembayaran.",
        ],
      },
      faqs: [
        { question: "Bolehkah laman rakan kongsi ini meluluskan pengeluaran saya?", answer: "Tidak. Semakan dan pemprosesan milik sepenuhnya platform luar." },
        { question: "Mengapa pengeluaran mungkin tertunda?", answer: "Pengesahan, padanan nama, pusing ganti, had, atau masa penyedia pembayaran. Tanya sokongan disahkan dengan rujukan anda." },
        { question: "Patutkah saya serah semula jika ia tertunda?", answer: "Biasanya tidak. Tunggu tetingkap yang dinyatakan, kemudian ikuti panduan platform." },
        { question: "Bagaimana saya menyimpan rekod transaksi?", answer: "Simpan tarikh, jumlah, status dan rujukan. Redak rahsia akaun penuh." },
        { question: "Apa yang patut saya baca tentang pembayaran secara umum?", answer: "Panduan kaedah pembayaran dan panduan deposit untuk cara dana memasuki akaun." },
      ],
    },
    "guides-payment-methods": {
      sections: [
        {
          title: "Gambaran kaedah pembayaran",
          paragraphs: [
            "Pilihan deposit dan pengeluaran boleh berbeza. Kaedah yang digunakan untuk membiayai akaun mungkin tidak tersedia untuk pembayaran, atau mungkin memerlukan padanan tambahan. Sentiasa bandingkan kaunter pembayaran langsung, bukan logo yang diingati.",
            "Mengapa ketersediaan berbeza: perkongsian bank, penyelenggaraan, status akaun, peranti, dan dasar platform boleh mengubah apa yang anda lihat.",
          ],
        },
        {
          title: "Cara mengesahkan butiran pembayaran",
          paragraphs: [
            "Buka kaunter pembayaran dari sesi disahkan. Sahkan medan penerima atau akaun penerima pada skrin itu. Jangan guna semula imej lama dari sembang atau media sosial.",
            "Pengesahan transaksi bermaksud kedua-dua resit penyedia pembayaran anda dan status platform. Simpan kedua-dua rujukan apabila sesuatu perlu disiasat.",
          ],
        },
      ],
      bullets: {
        title: "Isu pembayaran biasa",
        items: [
          "Menggunakan akaun yang dipegang oleh orang lain.",
          "Butiran penerima lapuk dari sesi sebelumnya.",
          "Menganggap “segera” sentiasa bermaksud kredit serta-merta.",
          "Terlepas rujukan pemindahan yang diperlukan.",
          "Mengulang pembayaran semasa status tertunda.",
        ],
      },
      faqs: [
        { question: "Adakah kaedah yang disenaraikan di sini sentiasa tersedia?", answer: "Tidak. Sebutan ialah contoh perkara untuk dibandingkan. Kaunter pembayaran anda ialah yang berwibawa." },
        { question: "Adakah deposit dan pengeluaran senarai yang sama?", answer: "Tidak semestinya. Semak kedua-dua arah dalam akaun langsung." },
        { question: "Bagaimana saya kekal lebih selamat?", answer: "Akaun milik sendiri, butiran pada skrin langsung, kata laluan unik, dan tiada OTP dalam sembang. Lihat keselamatan akaun." },
        { question: "Adakah laman ini menyimpan butiran bank saya?", answer: "Laman maklumat ini tidak mengendalikan kaunter pembayaran. Amalan privasi platform terpakai di destinasi." },
        { question: "Ke mana saya pergi seterusnya?", answer: "Panduan deposit untuk menghantar dana, panduan pengeluaran untuk meminta pembayaran, atau panduan hubungan jika anda memerlukan bantuan laluan." },
      ],
    },
    "guides-mobile": {
      sections: [
        {
          title: "Menggunakan IWIN pada mudah alih",
          paragraphs: [
            "Halaman maklumat ini direka untuk pelayar mudah alih. Prestasi permainan dan kaunter pembayaran luar masih bergantung pada destinasi, peranti dan sambungan.",
            "Laman ini tidak menawarkan muat turun APK palsu. Jika platform menyediakan aplikasi rasmi, ikuti hanya panduan pemasangan rasmi semasa platform itu — bukan fail dari mesej atau forum.",
          ],
        },
        {
          title: "Log masuk, permainan dan pembayaran mudah alih",
          paragraphs: [
            "Kembangkan pautan dipendekkan jika boleh. Sahkan domain sebelum log masuk. Pastikan kawalan pertaruhan dan pembayaran boleh dibaca; putar peranti jika perlu.",
            "Wi-Fi awam dan amaran sijil tidak dijangka memerlukan kewaspadaan tambahan untuk log masuk dan pembayaran. Gunakan kunci skrin dan sembunyikan pemberitahuan OTP.",
          ],
        },
      ],
      bullets: {
        title: "Penyelesaian masalah",
        items: [
          "Kemas kini OS dan pelayar sebelum mengendalikan data akaun.",
          "Tolak keizinan yang tidak berkaitan seperti kenalan atau kawalan kebolehaksesan.",
          "Selepas sambungan terputus, semak sejarah sebelum mengulang pembayaran atau tindakan permainan.",
          "Buang fail pemasang lama yang anda tidak minta.",
          "Jika gesaan memintas amaran keselamatan, berhenti dan sahkan sumbernya.",
        ],
      },
      faqs: [
        { question: "Adakah terdapat APK IWIN rasmi di laman ini?", answer: "Tidak. Laman web ini tidak mengehos pakej aplikasi. Jangan pasang fail dari pautan tidak diminta." },
        { question: "Bolehkah saya menggunakan halaman maklumat pada telefon?", answer: "Ya. Susun atur responsif. Produk luar masih bergantung pada destinasi." },
        { question: "Bagaimana saya log masuk pada mudah alih?", answer: "Sahkan URL, gunakan peranti dipercayai, dan ikuti panduan log masuk. Kekalkan OTP peribadi." },
        { question: "Bolehkah saya main kasino langsung pada telefon?", answer: "Jika destinasi menyokongnya. Kualiti sambungan penting; lihat panduan kasino langsung." },
        { question: "Bagaimana dengan pembayaran pada mudah alih?", answer: "Gunakan kaunter pembayaran langsung dalam sesi disahkan. Lihat panduan deposit, pengeluaran dan kaedah pembayaran." },
      ],
    },
    "guides-account-security": {
      sections: [
        {
          title: "Kata laluan kukuh dan perlindungan akaun",
          paragraphs: [
            "Gunakan kata laluan panjang dan unik yang tidak digunakan semula untuk e-mel, perbankan atau media sosial. Pengurus kata laluan pada peranti yang anda kawal biasanya lebih selamat daripada nota pada telefon kongsi.",
            "Lindungi pemulihan: kekalkan kawalan nombor mudah alih berdaftar dan ketahui laluan tetapan semula rasmi sebelum anda memerlukannya.",
          ],
        },
        {
          title: "Phishing, URL dan mesej mencurigakan",
          paragraphs: [
            "Semak ejaan, domain, kecemasan dan permintaan kerahsiaan. Tiada promosi yang sah sepatutnya memerlukan kata laluan, OTP atau rahsia pengesahan perbankan anda.",
            "Jika anda fikir akaun mungkin dikompromi, tukar kata laluan pada peranti dipercayai, hubungi sokongan platform disahkan, dan maklumkan penyedia pembayaran anda jika akses kewangan mungkin terdedah.",
          ],
        },
      ],
      bullets: {
        title: "Peranti dipercayai dan maklumat pembayaran",
        items: [
          "Aktifkan kunci skrin dan kekalkan perisian dikemas kini.",
          "Buang alat akses jauh atau perkongsian skrin yang tidak dikenali.",
          "Log keluar pada peranti kongsi.",
          "Jangan sekali-kali dedahkan kod keselamatan kad atau kata laluan perbankan dalam sembang.",
          "Semak rekod log masuk dan transaksi selepas amaran tidak dijangka.",
        ],
      },
      faqs: [
        { question: "Apa itu mesej phishing?", answer: "Mesej yang meniru jenama untuk merampas kelayakan atau pembayaran. Periksa URL dan jangan terburu-buru kerana ancaman atau dakwaan hadiah." },
        { question: "Patutkah sokongan meminta OTP saya?", answer: "Tidak. Anggap itu sebagai tanda amaran dan gunakan saluran rasmi dalam platform sebaliknya." },
        { question: "Apa jika saya menggunakan kata laluan yang sama di tempat lain?", answer: "Tukarnya pada platform dan pada perkhidmatan lain. Aktifkan sebarang pengesahan tambahan yang platform tawarkan." },
        { question: "Bagaimana saya semak bahawa saya di laman yang betul?", answer: "Bandingkan domain dengan sumber dipercayai, cari sambungan selamat, dan elak pautan dari penghantar tidak dikenali." },
        { question: "Di mana saya boleh membaca lebih lanjut tentang permainan yang lebih selamat?", answer: "Halaman permainan bertanggungjawab merangkumi had perbelanjaan dan berehat; halaman ini menumpukan pada kelayakan dan penipuan." },
      ],
    },
    promotions: {
      sections: [
        {
          title: "Bagaimana promosi berfungsi",
          paragraphs: [
            "Promosi adalah bersyarat. Jumlah tajuk tidak membuktikan bahawa anda layak, bahawa kuota masih ada, atau bahawa nilai promosi boleh dikeluarkan tanpa keperluan tambahan.",
            "Hab ini menjelaskan cara membaca kategori, kelayakan, pusing ganti, interaksi pengeluaran dan sekatan akaun. Tawaran semasa — termasuk sama ada ada yang aktif — mesti disemak di platform luar. Laman ini tidak mereka-cipta jumlah luput atau tidak disahkan seolah-olah ia langsung.",
          ],
        },
        {
          title: "Cara membaca terma promosi",
          paragraphs: [
            "Kenal pasti siapa yang layak, langkah tuntutan, asas pengiraan, pengganda, permainan dikecualikan, pertaruhan maksimum, tamat tempoh, dan apa yang berlaku jika anda mengeluarkan awal.",
            "Simpan terma yang diterima dan status pada skrin. Rekod disahkan mengawal akaun jika pertikaian timbul.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah halaman ini menyenaraikan tawaran aktif hari ini?", answer: "Ia menjelaskan bagaimana tawaran berfungsi. Ketersediaan langsung, kuota dan kata-kata ada di halaman promosi luar." },
        { question: "Apa itu pusing ganti?", answer: "Gandaan asas yang ditakrifkan (bonus, deposit, atau kedua-duanya) dalam aktiviti layak sebelum syarat pengeluaran tertentu dipenuhi. Formula tepat ada dalam terma langsung." },
        { question: "Bolehkah saya menggabungkan promosi?", answer: "Hanya jika platform secara jelas membenarkannya. Anggap terdapat konflik melainkan terma menyatakan sebaliknya." },
        { question: "Di mana RM10 dijelaskan?", answer: "Pada halaman kredit percuma, dengan kuota, pusing ganti 5x dan syarat satu mudah alih yang masih perlu pengesahan langsung." },
        { question: "Bagaimana patut saya menggunakan promosi secara bertanggungjawab?", answer: "Fahami syarat dahulu dan kekalkan had perbelanjaan peribadi. Promosi bukan alasan untuk mengejar kerugian." },
      ],
    },
    "promotions-free-credit": {
      sections: [
        {
          title: "Apa itu promosi kredit percuma",
          paragraphs: [
            "Maklumat sumber menerangkan kredit promosi RM10 untuk pendaftaran baharu yang layak melalui laluan rakan kongsi rasmi. Ia bukan tunai yang secara automatik sedia untuk pengeluaran.",
            "Kuota harian terpakai. Memenuhi kriteria lain tidak menjamin tuntutan jika peruntukan telah habis. Sahkan status hari ini di platform luar.",
          ],
        },
        {
          title: "Cara menuntut dan kesilapan biasa",
          paragraphs: [
            "Pendaftaran, pengesahan dan sebarang langkah tuntutan mesti mengikuti urutan langsung. Had satu nombor mudah alih mungkin terpakai bersama semakan anti-pendua lain.",
            "Kesilapan biasa termasuk menganggap kredit dijamin, mengabaikan pusing ganti layak 5x (RM10 bermaksud aktiviti layak RM50 di bawah contoh itu), menganggap kredit boleh dipindah, atau mendeposit sebelum membaca permainan dikecualikan.",
          ],
        },
      ],
      bullets: {
        title: "Syarat untuk disahkan secara langsung",
        items: [
          "Kuota harian yang masih tinggal.",
          "Definisi kelayakan pendaftaran baharu atau lain-lain.",
          "Asas pusing ganti 5x, sumbangan dan produk dikecualikan.",
          "Kredit tidak boleh dipindah dan interaksi pengeluaran.",
          "Tarikh akhir tuntutan dan penyiapan.",
        ],
      },
      faqs: [
        { question: "Adakah RM10 dijamin jika saya mendaftar?", answer: "Tidak. Kuota, kelayakan dan semakan platform terpakai. Laman ini tidak menjanjikan peruntukan." },
        { question: "Apa maksud pusing ganti 5x bagi RM10?", answer: "Di bawah contoh yang diterbitkan, pusing ganti layak RM50 (RM10 × 5), bukan janji kemenangan. Permainan layak mesti disemak secara langsung." },
        { question: "Bolehkah saya memindahkan kredit?", answer: "Syarat yang diterbitkan menyifatkannya sebagai tidak boleh dipindah. Terma langsung mengatasi." },
        { question: "Siapa yang mungkin layak?", answer: "Biasanya pendaftaran baharu melalui laluan rakan kongsi, tertakluk pada satu mudah alih dan semakan lain. Sahkan pada halaman langsung." },
        { question: "Di mana saya mendaftar?", answer: "Gunakan destinasi pendaftaran luar yang didedahkan, kemudian ikuti arahan tuntutan langsung." },
      ],
    },
    "promotions-welcome": {
      sections: [
        {
          title: "Menilai promosi alu-aluan",
          paragraphs: [
            "Label alu-aluan sering terpakai hanya pada penciptaan akaun, deposit pertama atau tuntutan pertama. Sepanduk bukan bukti kelayakan.",
            "Baca opt-in, pembayaran layak, formula ganjaran, pusing ganti, tarikh akhir dan kesan pengeluaran mengikut susunan itu sebelum komited dana.",
          ],
        },
        {
          title: "Semakan akaun",
          paragraphs: [
            "Identiti, pemilikan pembayaran dan kawalan satu akaun boleh memutuskan sama ada tuntutan kekal sah selepas anda fikir anda telah opt-in.",
            "Jika terma langsung dan halaman ini berbeza, berhenti seketika dan ikuti tawaran disahkan.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah terdapat jumlah alu-aluan tetap di halaman ini?", answer: "Tidak. Panduan ini menjelaskan cara membaca terma alu-aluan. Nilai semasa hanya pada tawaran langsung." },
        { question: "Perlukah saya opt-in?", answer: "Sesetengah kempen memerlukan pilihan atau kod sebelum pembayaran. Semak langkah langsung." },
        { question: "Bolehkah saya mengeluarkan serta-merta?", answer: "Pengeluaran awal boleh membatalkan atau mengurangkan ganjaran bergantung pada terma. Baca klausa itu dahulu." },
        { question: "Apa jika saya sudah mempunyai akaun?", answer: "Anda mungkin di luar definisi pengguna baharu. Definisi platform mengawal." },
        { question: "Di mana pusing ganti dijelaskan dengan lebih terperinci?", answer: "Panduan terma bonus membimbing melalui asas, pengganda, sumbangan dan had." },
      ],
    },
    "promotions-bonus-guide": {
      sections: [
        {
          title: "Memisahkan tajuk daripada formula",
          paragraphs: [
            "Terma bonus lebih mudah apabila anda mengasingkan asas pengiraan, pengganda, sumbangan permainan, had, urutan dan tamat tempoh daripada bahasa pemasaran.",
            "Contoh 5x bermaksud lima kali asas yang ditakrifkan dalam pusing ganti layak. Ia tidak menerangkan keuntungan atau kerugian dijangka.",
          ],
        },
        {
          title: "Kemajuan dan bukti",
          paragraphs: [
            "Gunakan penjejak platform. Simpan versi terma yang diterima jika anda memerlukan sokongan untuk menjelaskan pengiraan.",
            "Menyelesaikan pusing ganti tidak menjamin keuntungan dan tidak sepatutnya membenarkan perbelanjaan melebihi had peribadi.",
          ],
        },
      ],
      faqs: [
        { question: "Apa itu kadar sumbangan?", answer: "Sesetengah permainan dikira sepenuhnya, sebahagian atau langsung tidak ke arah pertaruhan. Jadual langsung ialah yang berwibawa." },
        { question: "Apa itu had (caps)?", answer: "Had pada ganjaran, penukaran atau pengeluaran selepas syarat dipenuhi. Ia boleh mengurangkan apa yang anda kekalkan." },
        { question: "Adakah menyelesaikan pertaruhan bermaksud saya akan untung?", answer: "Tidak. Pertaruhan ialah syarat, bukan ramalan keuntungan." },
        { question: "Mengapa urutan penting?", answer: "Opt-in, deposit, tuntutan dan bermain mungkin memerlukan susunan tertentu. Melakukannya di luar susunan boleh membatalkan tawaran." },
        { question: "Bagaimana ini berkaitan dengan pengeluaran?", answer: "Lihat panduan pengeluaran untuk cara syarat tertunda boleh menjejaskan baki layak." },
      ],
    },
    agent: {
      sections: [
        {
          title: "Apa itu ejen IWIN?",
          paragraphs: [
            "Ejen ialah peranan rakan kongsi yang mungkin membenarkan individu layak merujuk aktiviti melalui pautan atau kod yang diberikan dan melihat hasil dalam papan pemuka. Penyertaan mungkin digambarkan sebagai percuma yuran pendaftaran, sementara kelulusan dan pengesahan masih terpakai.",
            "Komisen berasaskan pusing ganti mungkin terpakai. Halaman ini tidak menjanjikan pendapatan, kadar komisen atau penerimaan. Kadar dan definisi tergolong dalam papan pemuka langsung.",
          ],
        },
        {
          title: "Bagaimana model rakan kongsi berfungsi",
          paragraphs: [
            "Langkah biasa ialah permohonan, semakan, persediaan penjejakan, aktiviti pengguna dirujuk, status pelaporan dan kemungkinan pelarasan. Akaun pendua yang dicipta sendiri atau promosi mengelirukan boleh melanggar peraturan.",
            "Siapa yang mungkin sesuai: orang yang boleh menerangkan produk dengan tepat, mendedahkan hubungan rujukan, dan menyimpan rekod — bukan sesiapa yang mencari pendapatan terjamin.",
          ],
        },
      ],
      bullets: {
        title: "Tanggungjawab rakan kongsi",
        items: [
          "Gunakan dakwaan yang tepat; tiada kemenangan atau pendapatan terjamin.",
          "Dedahkan status rujukan atau rakan kongsi pada kandungan yang anda terbitkan.",
          "Jangan spam, menekan, atau menyasarkan khalayak yang tidak sesuai termasuk kanak-kanak.",
          "Simpan penyata papan pemuka untuk rekod sendiri dan soalan cukai.",
          "Sahkan terma semasa selepas log masuk sebelum merancang aktiviti.",
        ],
      },
      faqs: [
        { question: "Adakah pendaftaran ejen percuma?", answer: "Maklumat platform mungkin menerangkan penyertaan tanpa yuran. Kelulusan masih tertakluk pada semakan. Sahkan secara langsung." },
        { question: "Kadar komisen apa yang akan saya dapat?", answer: "Laman ini tidak mereka-cipta kadar. Baca papan pemuka disahkan." },
        { question: "Bagaimana rujukan dijejak?", answer: "Biasanya melalui pautan atau kod yang diberikan, tertakluk pada masa dan peraturan anti-penyalahgunaan. Lihat panduan rujukan." },
        { question: "Siapa yang tidak patut menyertai?", answer: "Sesiapa yang mengharapkan pendapatan terjamin, atau tidak sanggup mengikuti piawaian promosi dan pendedahan." },
        { question: "Di mana halaman rakan kongsi berkaitan?", answer: "Program Rakan Kongsi, Panduan Afiliasi, Panduan Rujukan dan Soalan Lazim Rakan Kongsi." },
      ],
    },
    "partner-program": {
      sections: [
        {
          title: "Apa itu program rakan kongsi?",
          paragraphs: [
            "Program ini menggabungkan pendaftaran, atribusi rujukan, pelaporan papan pemuka dan peraturan tatalaku di bawah terma platform luar. Menilai hanya peratusan yang dipaparkan tidak mencukupi.",
            "Pendaftaran menggunakan laluan rakan kongsi yang disahkan. Penjejakan mesti kekal konsisten. Angka tertunda, diluluskan, dilaraskan dan dibayar ialah status yang berbeza.",
          ],
        },
        {
          title: "Pengurusan akaun dan amalan promosi",
          paragraphs: [
            "Terangkan tawaran secara bersyarat. Elakkan kekurangan palsu. Kekalkan konteks umur dan permainan bertanggungjawab kelihatan. Jangan gunakan bot, peniruan atau mesej pukal tidak diminta.",
            "Padankan tarikh tempoh dan rujukan sebelum mengemukakan percanggahan kepada sokongan rakan kongsi.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah penyertaan menjamin komisen?", answer: "Tidak. Akses dan pembayaran bergantung pada aktiviti sah dan terma semasa." },
        { question: "Bagaimana saya mendaftar?", answer: "Gunakan destinasi rakan kongsi luar yang didedahkan dan tunggu keputusan platform." },
        { question: "Apa yang patut saya baca selain halaman ini?", answer: "Gambaran ejen, penjejakan rujukan, piawaian kandungan afiliasi dan soalan lazim rakan kongsi." },
        { question: "Bolehkah laman web ini membayar komisen?", answer: "Tidak. Penyelesaian ialah fungsi platform." },
        { question: "Apa jika nombor papan pemuka kelihatan salah?", answer: "Bandingkan tarikh dan status, kemudian hubungi sokongan rakan kongsi dengan rujukan khusus." },
      ],
    },
    "affiliate-guide": {
      sections: [
        {
          title: "Maksud pemasaran afiliasi di sini",
          paragraphs: [
            "Aktiviti afiliasi ialah menerbitkan maklumat yang mungkin merangkumi pautan penjejakan yang didedahkan supaya platform boleh mengaitkan pendaftaran atau tindakan layak kemudian.",
            "Ia bersifat pendidikan dan komersial sekali gus. Pembaca patut memahami hubungan itu sebelum mereka mengklik.",
          ],
        },
        {
          title: "Garis panduan kandungan dan kesilapan biasa",
          paragraphs: [
            "Jawab soalan sebenar. Kelayakan tawaran dengan kuota, kelayakan, pusing ganti dan kebolehubahan. Tandakan apabila tindakan berlaku di laman web lain.",
            "Kesilapan biasa: pembayaran terjamin, sijil palsu, menyembunyikan rujukan, mengumpul kata laluan, atau menyasarkan kanak-kanak.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah afiliasi menerima komisen terjamin?", answer: "Tidak. Atribusi dan kadar bergantung pada peraturan program langsung." },
        { question: "Apa itu pautan penjejakan?", answer: "URL atau kod yang diberikan yang mungkin digunakan platform untuk mengaitkan aktiviti. Ia tidak boleh menyamarkan destinasi." },
        { question: "Apa itu penukaran?", answer: "Acara layak yang ditakrifkan platform, bukan sekadar klik. Definisi ada dalam terma papan pemuka." },
        { question: "Bolehkah saya menjanjikan pemain bahawa mereka akan menang?", answer: "Tidak. Itu tidak tepat dan tidak bertanggungjawab." },
        { question: "Di mana promosi bertanggungjawab diterangkan?", answer: "Pada halaman ini, panduan ejen dan halaman permainan bertanggungjawab." },
      ],
    },
    "referral-guide": {
      sections: [
        {
          title: "Apa itu rujukan",
          paragraphs: [
            "Rujukan ialah kemungkinan atribusi antara rakan kongsi dan tindakan pengguna kemudian, menggunakan pautan atau kod yang sah, masa, dan semakan anti-penyalahgunaan.",
            "Pautan dikongsi atau akaun berdaftar tidak dengan sendirinya menjamin kredit. Pengguna sedia ada mungkin sudah dikaitkan di tempat lain.",
          ],
        },
        {
          title: "Penjejakan, kelayakan dan syarat ganjaran",
          paragraphs: [
            "Definisi pusing ganti layak boleh mengecualikan batal, pembalikan, produk terpilih atau penyalahgunaan. Status papan pemuka (dijejak, tertunda, diluluskan, dilaraskan, dibayar) tidak boleh ditukar ganti.",
            "Jumlah ganjaran atau komisen hanya yang dipaparkan dalam papan pemuka langsung. Halaman ini tidak mereka-cipta angka pembayaran.",
          ],
        },
      ],
      faqs: [
        { question: "Mengapa rujukan hilang?", answer: "Atribusi sebelumnya, masa, penjejakan tidak sah, status pengguna atau semakan pematuhan. Tanya sokongan rakan kongsi dengan tarikh dan rujukan." },
        { question: "Bolehkah saya merujuk diri sendiri?", answer: "Mencipta akaun untuk menjana komisen mungkin melanggar peraturan dan membawa kepada pelarasan atau penutupan." },
        { question: "Adakah kadar kekal sama selama-lamanya?", answer: "Tidak. Peratusan dan ambang boleh berubah mengikut tempoh atau peringkat." },
        { question: "Bagaimana patut saya menjemput orang?", answer: "Beri ruang untuk memutuskan, dedahkan hubungan, dan jangan sekali-kali membingkaikan penyertaan sebagai pendapatan yang boleh diharap." },
        { question: "Di mana saya mengesahkan angka?", answer: "Hanya dalam papan pemuka rakan kongsi disahkan." },
      ],
    },
    "partner-faq": {
      sections: [
        {
          title: "Cara menggunakan jawapan rakan kongsi ini",
          paragraphs: [
            "Soalan dikumpulkan sekitar pendaftaran, penjejakan, komisen, rujukan, tatalaku akaun, promosi dan sokongan. Ia bersifat umum dan tidak menggantikan terma papan pemuka.",
            "Sediakan tarikh, rujukan rujukan yang dianonimkan dan nama status sebelum menghubungi sokongan rakan kongsi.",
          ],
        },
      ],
      bullets: {
        title: "Senarai semak sokongan",
        items: [
          "Tempoh pelaporan dan zon waktu seperti dipaparkan dalam papan pemuka.",
          "Pautan atau kod yang digunakan, tanpa mendedahkan data peribadi yang tidak berkaitan.",
          "Status item (tertunda, dilaraskan, dibayar).",
          "Apa yang sudah anda semak berbanding terma langsung.",
        ],
      },
      faqs: [
        { question: "Pendaftaran: adakah penyertaan sentiasa diluluskan?", answer: "Tidak. Percuma untuk menyertai, jika ditawarkan, masih merangkumi semakan kelayakan dan tatalaku." },
        { question: "Penjejakan: bila klik dikreditkan?", answer: "Atribusi boleh memerlukan urutan dan tetingkap yang ditakrifkan. Pengguna sedia ada mungkin tidak layak." },
        { question: "Komisen: di mana kadarnya?", answer: "Dalam papan pemuka semasa. Soalan lazim ini tidak menerbitkan peratusan yang direka-cipta." },
        { question: "Rujukan: mengapa aktiviti dikecualikan?", answer: "Pusingan dibatalkan, produk dikecualikan, peraturan penyalahgunaan atau status tidak lengkap. Tanya dengan rujukan khusus." },
        { question: "Promosi: dakwaan apa yang dilarang?", answer: "Kemenangan terjamin, pengeluaran terjamin, atau pendapatan rakan kongsi terjamin." },
        { question: "Akaun: bolehkah saya mengendalikan akaun pemain pendua?", answer: "Biasanya dilarang. Ia boleh membawa kepada pelarasan atau penutupan." },
        { question: "Sokongan: apa jika saya memerlukan bantuan gaya pemain?", answer: "Deposit dan log masuk pemain melalui sokongan pemain. Soalan rakan kongsi melalui saluran rakan kongsi dengan bukti papan pemuka." },
      ],
    },
    contact: {
      sections: [
        {
          title: "Cara mendapatkan bantuan",
          paragraphs: [
            "Pilih saluran yang sepadan dengan masalah. Laman web ini boleh menjelaskan panduan yang diterbitkan, kedudukan rakan kongsi dan pembetulan pada halaman kami. Ia tidak dapat melihat baki permainan atau status pembayaran anda.",
            "Soalan akaun, pemulihan log masuk, deposit dan pengeluaran tergolong pada sokongan disahkan platform luar, menggunakan destinasi yang dipaparkan selepas log masuk. Laman ini tidak mereka-cipta akaun WhatsApp, Telegram, e-mel atau sosial.",
          ],
        },
        {
          title: "Laluan mengikut topik",
          paragraphs: [
            "Soalan pembayaran: sediakan rujukan platform; jangan sekali-kali hantar kata laluan. Soalan rakan kongsi: gunakan saluran papan pemuka rakan kongsi dengan tarikh. Soalan laman web umum: gunakan laluan hubungan yang diterbitkan untuk laman maklumat ini jika anda memerlukan pembetulan kandungan.",
            "Pilihan hubungan yang disahkan muncul hanya apabila ia wujud dalam konfigurasi laman. Jika URL sembang langsung atau sokongan dikonfigurasi, ia membuka destinasi sokongan platform luar — bukan peti masuk yang direka-cipta.",
          ],
        },
      ],
      faqs: [
        { question: "Mengapa tiada nombor WhatsApp di sini?", answer: "Butiran hubungan yang tidak disahkan tidak diterbitkan. Hanya destinasi yang dikonfigurasi dan disahkan dipaparkan." },
        { question: "Siapa yang mengendalikan pengeluaran tersekat?", answer: "Sokongan platform luar dengan rujukan transaksi anda." },
        { question: "Siapa yang mengendalikan perenggan salah di laman web ini?", answer: "Laluan hubungan laman maklumat untuk pembetulan editorial, bukan alat akaun platform." },
        { question: "Adakah sembang langsung di domain ini?", answer: "Jika ditawarkan, ia ialah URL sokongan luar yang dikonfigurasi, didedahkan sebagai meninggalkan laman ini." },
        { question: "Apa yang patut saya sediakan?", answer: "Cap masa, rujukan, dan penerangan yang menghilangkan kata laluan, OTP dan rahsia pembayaran penuh." },
      ],
    },
    "responsible-gaming": {
      sections: [
        {
          title: "Anggap permainan sebagai hiburan",
          paragraphs: [
            "Permainan, pasaran sukan dan cabutan nombor melibatkan risiko sebenar kehilangan wang. Ia bukan cara untuk menyelesaikan masalah kewangan atau memulihkan kerugian sebelumnya.",
            "Tetapkan had masa dan had perbelanjaan sebelum anda mula. Gunakan wang yang anda mampu rugi. Jangan gunakan dana sewa, makanan, pinjaman atau kecemasan.",
          ],
        },
        {
          title: "Berehat dan dapatkan bantuan jika diperlukan",
          paragraphs: [
            "Jika anda sukar berhenti, menyembunyikan aktiviti, atau meminjam untuk meneruskan, berhenti seketika dan cari bantuan yang sesuai melalui perkhidmatan kesihatan atau sokongan perjudian tempatan yang tersedia di kawasan anda.",
            "Laman maklumat ini tidak boleh menggunakan sekatan akaun pada platform destinasi. Gunakan alat yang pengendali luar sediakan, dan hubungi platform itu untuk had peringkat akaun di mana ia wujud.",
          ],
        },
      ],
      bullets: {
        title: "Peringatan praktikal",
        items: [
          "Jangan kejar kerugian dengan meningkatkan pertaruhan.",
          "Elak bermain apabila marah, terjejas atau terburu-buru.",
          "Halang orang lain daripada menggunakan akaun anda.",
          "Gabungkan tabiat ini dengan panduan keselamatan akaun.",
        ],
      },
      faqs: [
        { question: "Adakah perjudian tanpa risiko jika saya menggunakan strategi?", answer: "Tidak. Strategi tidak menghapuskan kemungkinan kerugian." },
        { question: "Bolehkah laman ini menetapkan had deposit saya?", answer: "Tidak. Gunakan alat had platform destinasi sendiri di mana tersedia." },
        { question: "Apa jika seseorang yang saya kenali sedang bergelut?", answer: "Galakkan mereka berhenti seketika dan mencari bantuan profesional atau perkhidmatan sokongan tempatan. Laman ini bukan perkhidmatan kaunseling." },
        { question: "Patutkah promosi mengubah had saya?", answer: "Tidak. Tawaran bukan alasan untuk berbelanja melebihi yang anda rancangkan." },
        { question: "Di mana lagi patut saya baca?", answer: "Keselamatan akaun, panduan pembayaran, dan penafian untuk had laman web ini." },
      ],
    },
    terms: {
      sections: [
        {
          title: "Skop terma ini",
          paragraphs: [
            "Terma ini merangkumi penggunaan laman maklumat rakan kongsi rasmi IWIN Malaysia ini: menyemak imbas halaman, mengikuti pautan dalaman, dan menggunakan seruan tindakan luar yang didedahkan.",
            "Ia tidak mengawal hubungan anda dengan platform permainan luar. Platform itu mempunyai terma sendiri, yang terpakai jika anda mencipta akaun di sana.",
          ],
        },
        {
          title: "Penggunaan yang diterima",
          paragraphs: [
            "Jangan menyalahgunakan laman, cuba mengganggunya, mengikis data dengan cara yang merosakkan perkhidmatan, atau meniru pengendali. Kandungan disediakan untuk maklumat umum dan boleh berubah.",
            "Jika anda memerlukan tindakan akaun atau pembayaran, anda mesti menggunakan platform destinasi. Kami mungkin mengemas kini terma ini; penggunaan berterusan selepas kemas kini bermaksud anda patut membaca semula halaman ini.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah terma ini mengikat pengendali permainan?", answer: "Tidak. Ia hanya mengikat penggunaan laman maklumat ini." },
        { question: "Bolehkah saya menyalin panduan secara komersial?", answer: "Jangan paparkan kandungan laman ini sebagai peraturan rasmi pengendali. Hormati hak cipta yang terpakai." },
        { question: "Apa jika pautan luar berubah?", answer: "Destinasi boleh berubah. Sentiasa sahkan URL dan terma pada masa penggunaan." },
        { question: "Di mana privasi diterangkan?", answer: "Dalam dasar privasi untuk laman web ini, berasingan daripada notis platform." },
        { question: "Di mana liabiliti dihadkan?", answer: "Lihat juga penafian untuk had maklumat dan ketiadaan jaminan pembayaran." },
      ],
    },
    "privacy-policy": {
      sections: [
        {
          title: "Apa yang notis ini meliputi",
          paragraphs: [
            "Dasar ini menerangkan pertimbangan privasi untuk laman maklumat ini, seperti log teknikal, keutamaan bahasa, atau mesej yang anda hantar melalui laluan hubungan yang diterbitkan.",
            "Ia tidak menerangkan bagaimana platform permainan luar menggunakan data akaun, pembayaran atau permainan. Pengendali itu mempunyai notis berasingan yang patut anda baca sebelum mendaftar di sana.",
          ],
        },
        {
          title: "Apa yang tidak patut anda hantar ke sini",
          paragraphs: [
            "Jangan e-mel atau mesej kata laluan, OTP, kelayakan pembayaran penuh atau dokumen identiti yang tidak perlu kepada laman maklumat ini.",
            "Jika anda menghubungi kami tentang ralat kandungan, sertakan hanya apa yang diperlukan untuk menemui halaman. Siasatan akaun tergolong pada platform disahkan.",
          ],
        },
      ],
      faqs: [
        { question: "Adakah laman ini mengendalikan pangkalan data pemain?", answer: "Tidak. Akaun pemain ada di platform luar." },
        { question: "Adakah anda menjual data peribadi?", answer: "Dasar ini hanya menerangkan laman maklumat ini. Jangan anggap amalan pengendali destinasi." },
        { question: "Bagaimana saya memohon pemadaman data akaun platform?", answer: "Melalui proses privasi platform luar sendiri, bukan laman rakan kongsi ini." },
        { question: "Adakah kuki digunakan?", answer: "Fungsi laman penting dan laluan bahasa mungkin menggunakan storan teknikal. Halaman ini tidak mereka-cipta senarai pengiklanan pihak ketiga." },
        { question: "Di mana terma laman web?", answer: "Pada halaman terma penggunaan." },
      ],
    },
    disclaimer: {
      sections: [
        {
          title: "Maklumat sahaja",
          paragraphs: [
            "Kandungan di laman web ini ialah maklumat umum tentang topik berkaitan IWIN untuk pelawat Malaysia yang menyiasat permainan, panduan, promosi dan program rakan kongsi.",
            "Tiada apa di sini jaminan pembayaran, keuntungan, komisen, ketersediaan permainan atau kesesuaian. Terma platform langsung mengatasi apabila ia berbeza.",
          ],
        },
        {
          title: "Pautan luar dan masa",
          paragraphs: [
            "Tindakan luar yang ditandakan meninggalkan laman web ini. Anda bertanggungjawab untuk mengesahkan destinasi, keselamatan dan sama ada anda layak menggunakannya.",
            "Panduan boleh menjadi lapuk apabila antara muka berubah. Semak semula skrin disahkan sebelum bertindak.",
          ],
        },
      ],
      faqs: [
        { question: "Bolehkah saya bergantung pada laman ini untuk nasihat undang-undang?", answer: "Tidak. Ia bukan nasihat undang-undang, cukai atau kewangan." },
        { question: "Adakah kemenangan dijamin?", answer: "Tidak. Hasil tidak pasti." },
        { question: "Adakah pendapatan ejen dijamin?", answer: "Tidak." },
        { question: "Siapa yang bertanggungjawab atas keputusan platform?", answer: "Platform luar, mengikut termanya." },
        { question: "Di mana kedudukan rakan kongsi dijelaskan?", answer: "Pada halaman Rakan Kongsi Rasmi." },
      ],
    },
  },
  zh: {
    "about-iwin": {
      sections: [
        {
          title: "本文语境中的 IWIN",
          paragraphs: [
            "本文将 IWIN 作为可能包含数字老虎机、真人桌台、体育市场与数字游戏，以及外部平台上的账户、支付与合作工具的游戏生态系统进行讨论。",
            "本合作网站并不运营这些产品。它说明常见话题，以便访客能在信息更清晰的情况下，决定是否继续前往外部目的地。",
          ],
        },
        {
          title: "本网站提供什么",
          paragraphs: [
            "您可以找到类别说明、分步账户与支付指南、促销条款阅读要点、合作计划介绍以及负责任博彩提醒。",
            "实时余额、游戏局、收银台说明及已验证支持仍在外部平台。若此处页面与登录后所见不同，请以已登录界面为准。",
          ],
        },
      ],
      bullets: {
        title: "本站与 IWIN 的关系",
        items: [
          "这是 IWIN Malaysia 官方合作伙伴信息网站，不是博彩运营商。",
          "外部行动号召可能通向注册、登录、游戏或合作目的地。",
          "此处任何页面都不能创建账户、持有资金或决定提款。",
          "提供商与产品名称是生态系统引用，并非所有权或背书声明。",
        ],
      },
      faqs: [
        { question: "本网站是 IWIN 运营商吗？", answer: "不是。这是合作伙伴信息网站。游戏账户、钱包、游戏局与交易决定属于外部平台。" },
        { question: "本站为何存在？", answer: "它整理实用的 IWIN Malaysia 信息——游戏、指南、优惠与合作背景——以便访客在点击外部链接前进行研究。" },
        { question: "我可以在这里完成注册吗？", answer: "不可以。若您选择继续，注册须在离开本站后于外部目的地完成。" },
        { question: "提供商名称是否代表官方合作？", answer: "不是。918Kiss、JILI 或 Pragmatic Play 等名称是用于导向的目录引用。可用性应在实时大厅核实。" },
        { question: "账户相关帮助应向哪里咨询？", answer: "余额、存款、提款与登录找回请使用已验证平台支持。对本站已发布信息的更正，请使用本站联系渠道。" },
      ],
    },
    "official-partner": {
      sections: [
        {
          title: "本网站是什么",
          paragraphs: [
            "“IWIN Malaysia 官方合作伙伴”描述本站的信息与引荐角色。它说明本站如何帮助访客查找指南及已披露的外部目的地——并非声称本站拥有或运营 IWIN。",
            "本站发布游戏、优惠、账户任务与合作资源的说明。它不颁发牌照、证书或政府批准。",
          ],
        },
        {
          title: "访客可以在此做什么",
          paragraphs: [
            "阅读类别与提供商介绍、按步骤指南操作、了解促销条件通常如何构成，并在无收入承诺的前提下理解代理或引荐概念。",
            "当按钮标记为外部时，您将离开本网站。在输入个人或支付信息前，请核实网址、当前条款以及该目的地是否适合您。",
          ],
        },
      ],
      bullets: {
        title: "重要信息",
        items: [
          "本站不持有玩家资金，也不批准付款。",
          "优惠数字与游戏目录可能在外部平台上发生变化。",
          "合作加入与佣金（如有）由实时仪表板管辖。",
          "无论您是否继续前往平台，负责任博彩指引均适用。",
        ],
      },
      faqs: [
        { question: "官方合作伙伴是否意味着本站运营 IWIN？", answer: "不是。它描述信息与引荐角色。目的地平台控制账户、产品与支持。" },
        { question: "本站是否展示合作证书？", answer: "本网站不展示伪造的法律证书。合作定位以通俗语言说明，并披露外部链接。" },
        { question: "我可以在这里找到哪些信息？", answer: "游戏类别指南、账户与支付流程、促销条款说明、合作资源、常见问题，以及本信息网站的法律声明。" },
        { question: "应如何看待外部按钮？", answer: "它们可能打开第三方平台。继续前请查阅该平台的条款、资格与隐私惯例。" },
        { question: "提款失败应联系谁？", answer: "带上交易编号联系外部平台的已验证支持。本站不能批准或加快付款。" },
      ],
    },
    games: {
      sections: [
        {
          title: "了解 IWIN 游戏类别",
          paragraphs: [
            "老虎机、真人娱乐场、体育与 4D 是不同的娱乐形式。它们使用不同的规则面板、会话节奏以及您在投入资金前应阅读的信息。",
            "类别名称并不保证每个账户都能使用每一款游戏。登录后的实时大厅才是当前目录。",
          ],
        },
        {
          title: "如何选择游戏类别",
          paragraphs: [
            "按您希望如何使用时间来匹配形式：短局数字游戏、直播桌台、赛事市场或定时开奖。同时考虑决策速度，以及您阅读赔付表、市场定义或开奖页的舒适程度。",
            "最低投注不是建议投注。请单独设定不依赖挽回先前结果的娱乐预算，若在追损则应停止。",
          ],
        },
      ],
      bullets: {
        title: "游玩前应了解的事项",
        items: [
          "打开该具体产品的规则、赔付表、市场说明或开奖信息。",
          "在实时界面核对桌台或投注限额，勿凭记忆。",
          "若附带奖金，请阅读优惠条款——流水可能影响提款。",
          "存款前确认支付与账户条件。",
          "将结果视为不确定；没有任何类别能消除亏损风险。",
        ],
      },
      faqs: [
        { question: "本站说明哪些游戏类别？", answer: "老虎机、真人娱乐场、体育与 4D。各类均有专属指南。单款游戏是否可用取决于外部平台。" },
        { question: "本页是否列出全部 IWIN 游戏？", answer: "不是。它说明形式以便比较。已登录大厅才是当前游戏来源。" },
        { question: "任何类别能保证赢利吗？", answer: "不能。教育性类别信息不能预测结果或派彩。" },
        { question: "什么是游戏提供商？", answer: "开发游戏软件的工作室。提供商目录中的生态名称用于导航参考，并非合作声明。" },
        { question: "读完本中心后应去哪里？", answer: "打开类别指南、提供商目录，或注册、存款与负责任博彩等账户指南。" },
      ],
    },
    "games-slots": {
      sections: [
        {
          title: "什么是老虎机游戏？",
          paragraphs: [
            "老虎机是展示转轴、符号与赔付表的数字或视频游戏。一局通常在确认投注后开始，并在按游戏规则显示结果时结束。",
            "两款老虎机可以主题相同，但转轴数量、赔付线或多种赢法、奖励触发与投注控制可能不同。该游戏的游戏内信息面板才是依据。",
          ],
        },
        {
          title: "老虎机如何运作",
          paragraphs: [
            "设定投注后，游戏按已公布规则确定结果。免费旋转、倍数或奖励局等功能（如有）有各自条件，并可能改变会话成本或节奏。",
            "任何显示的理论返还率都是长期数学信息，不是对一次会话、一名玩家或单次旋转的预测。",
          ],
        },
      ],
      bullets: {
        title: "如何选择老虎机",
        items: [
          "阅读赔付表：符号、线数或赢法、功能规则及任何显示的最高赢额说明。",
          "更改币值、线数或功能选项后，核对每次旋转的总成本。",
          "注意可能加速消费的自动播放或快速旋转控制。",
          "使用会话提醒或与“该出”结果无关的个人停止点。",
          "将提供商名称视为目录标签，不能证明游戏可用或更有利。",
        ],
      },
      faqs: [
        { question: "旋转前应阅读什么？", answer: "该游戏的赔付表与功能规则，包括按您设置后的投注成本。不要仅依赖促销画面。" },
        { question: "奖励局能保证盈利吗？", answer: "不能。奖励功能可能改变节奏与成本，并不能使结果确定。" },
        { question: "若一局中断怎么办？", answer: "记录时间及显示的局 ID，然后联系已验证平台支持。重玩以“测试”中断并非可靠调查方法。" },
        { question: "手机老虎机有何不同？", answer: "许多游戏会适配较小屏幕。游玩前仍应核实目的地、连接质量，并确认投注控制仍可读。" },
        { question: "具名提供商是否意味更高获胜机会？", answer: "不是。提供商标签帮助您找到游戏，不会改变结果的不确定性。" },
      ],
    },
    "games-live-casino": {
      sections: [
        {
          title: "什么是真人娱乐场？",
          paragraphs: [
            "真人娱乐场将直播荷官或主持人与数字投注界面结合。您通常在限时窗口内下注，然后按该游戏规则结算桌台结果。",
            "直播是呈现层。平台上的已接受投注确认与官方游戏历史，比根据延迟视频卡点操作更可靠。",
          ],
        },
        {
          title: "真人娱乐场如何运作",
          paragraphs: [
            "百家乐、二十一点、轮盘及游戏秀式桌台（如有提供）各有不同的结果、边注与结算逻辑。请确认您加入的具体桌台规则。",
            "桌台最低与最高限额可能不同且会变化。入座前请先核对。边注的赔付表往往与主注不同。",
          ],
        },
      ],
      bullets: {
        title: "新手注意事项",
        items: [
          "先理解投注窗口以及屏幕上“已接受”的显示，再加入。",
          "使用稳定连接；避免在局中切换应用。",
          "切勿在桌台聊天中输入密码、OTP 或支付信息。",
          "设定基于时钟的停止点——连续桌台可能掩盖会话时长。",
          "某种形式是否可用应在实时大厅确认，不要仅凭本指南假定。",
        ],
      },
      faqs: [
        { question: "真人荷官会使结果可预测吗？", answer: "不会。真人形式不能消除随机性，也不能使结果更确定。" },
        { question: "有哪些真人游戏？", answer: "本指南说明生态中常见的百家乐、二十一点、轮盘及游戏秀等形式。实际桌台请在已登录大厅确认。" },
        { question: "直播卡顿怎么办？", answer: "请用平台状态与历史判断投注是否被接受，不要依据视频延迟。" },
        { question: "可以在手机上玩真人娱乐场吗？", answer: "若目的地支持，通常可以。小屏幕上连接质量与可读控制更为重要。" },
        { question: "断线后应做什么？", answer: "重复操作前先查看该局记录；如有需要，带上局次参考联系已验证支持。" },
      ],
    },
    "games-sports": {
      sections: [
        {
          title: "此处体育博彩的含义",
          paragraphs: [
            "体育界面可能列出赛事市场，价格可在赛前或赛中变化。只有平台在注单或回执上确认接受后，选择才构成投注。",
            "熟悉某项运动并不能消除财务风险。市场定义、结算来源与赛事取消规则可能改变结果如何判定。",
          ],
        },
        {
          title: "赛前与滚球市场",
          paragraphs: [
            "赛前市场在赛事开始前提供。滚球或进行中市场随赛事更新；价格与盘口可能快速变动，提交可能被延迟、拒绝，或按平台设置以变更后的价格接受。",
            "若显示提前兑现（cash-out），该功能可变，并非保证权利。请务必阅读确认上的赛事、选项、盘口、赔率与投注额。",
          ],
        },
      ],
      bullets: {
        title: "如何阅读市场",
        items: [
          "确认赛事、时段与市场类型（赛果、让分、总分、球员等）。",
          "确认小数赔率显示的返还是否含本金。",
          "查看加时、并列（dead heat）或赛事取消的结算说明。",
          "不要将统计或解说视为确定的未来结果。",
          "在滚球决策加快前，先设定时间与消费限额。",
        ],
      },
      faqs: [
        { question: "本站是否承诺体育盈利？", answer: "否。这些页面没有保证赢利、轻松赚钱、无风险或固定赢利的声明。" },
        { question: "什么是小数赔率？", answer: "它们通常显示含本金的总返还，但已接受注单才是您实际条款的依据。" },
        { question: "为什么我的滚球投注被拒绝？", answer: "价格可能变动，提交也可能延迟。只有平台能确认某张注单的具体原因。" },
        { question: "在哪里查看限额？", answer: "在该市场与账户的实时体育界面。本信息网站不显示个人限额。" },
        { question: "如何负责任地投注？", answer: "只用亏得起的钱，避免追先前结果，并休息。详见负责任博彩页。" },
      ],
    },
    "games-4d": {
      sections: [
        {
          title: "什么是 4D？",
          paragraphs: [
            "4D 一般指与定时开奖绑定的选号游戏，常用四位数字组合。投注类型与奖级表可能因产品而异，因此一个 4D 标签不能描述所有产品。",
            "本页说明概念。它不发布官方开奖结果、保证赔率或运营商开奖时间。这些细节请使用目的地平台的当前开奖页。",
          ],
        },
        {
          title: "开奖与投注如何运作",
          paragraphs: [
            "您通常选择号码格式、确认开奖标识并支付显示的投注费用。直选、排列或系统式投注覆盖组合的方式可能不同，并可能改变总费用。",
            "仅当平台在截止前接受时，投注才算有效。准备选择并不等于已确认票据。",
          ],
        },
      ],
      bullets: {
        title: "参与前应了解的事项",
        items: [
          "核对屏幕上的开奖名称、日期、场次与截止时间。",
          "保存票据参考，并立即核对数字与投注类型。",
          "仅在结算后于平台官方记录核对结果。",
          "梦境、日期或过往开奖并不能使某号码“该出”。",
          "设定消费限额；数字游戏仍是不确定的娱乐。",
        ],
      },
      faqs: [
        { question: "本站是否发布官方 4D 结果？", answer: "否。请在目的地平台的官方记录核对结果。本站不编造开奖时间或奖级表。" },
        { question: "这里是否列出中奖赔率？", answer: "否。奖级取决于实时产品规则。本页不编造概率声明。" },
        { question: "若投注未被接受怎么办？", answer: "在平台确认截止时间与票据状态。若状态不明，请带参考号使用已验证支持。" },
        { question: "选号方法能保证获奖吗？", answer: "不能。规律与过往开奖并不能证明某号码更可能中奖。" },
        { question: "如何保存记录？", answer: "保存平台票据参考、开奖标识与投注类型。不要与这些记录一起存放密码。" },
      ],
    },
    "game-providers": {
      sections: [
        {
          title: "什么是游戏提供商？",
          paragraphs: [
            "游戏提供商开发各游戏背后的软件、画面与规则集。在游戏平台上，这些游戏通常出现在老虎机或真人娱乐场等类别大厅中。",
            "本目录中的名称是生态系统引用。它不表示本合作网站与该工作室有直接商业合作，也不表示每个相关游戏对每个账户都可用。",
          ],
        },
        {
          title: "提供商如何融入游戏平台",
          paragraphs: [
            "提供商帮助玩家识别不同游戏风格。实时大厅、各游戏信息面板以及平台自身的供应商列表，才是您实际能打开内容的来源。",
            "目录会随维护、许可、设备与账户设置而变化。若此处徽标未出现在您的大厅，这是预期情况——本页是介绍，不是实时库存。",
          ],
        },
      ],
      faqs: [
        { question: "这是各工作室的官方合作名单吗？", answer: "不是。列表用于识别与生态背景。公司名称归其所有者所有。" },
        { question: "为什么我的账户可能缺少某提供商？", answer: "可用性可能因地区、设备、维护或账户而异。请查看已登录大厅。" },
        { question: "每个品牌都有独立页面吗？", answer: "本站使用目录，而非单独的浅薄品牌页，除非存在独特的已核实网址。" },
        { question: "是否应选择提供商以改善结果？", answer: "否。提供商名称不会使结果更确定。" },
        { question: "在哪里阅读游戏形式？", answer: "请查看游戏中心以及老虎机、真人娱乐场、体育与 4D 指南。" },
      ],
    },
    guides: {
      sections: [
        {
          title: "如何使用本知识中心",
          paragraphs: [
            "每份指南针对特定任务：创建账户、登录、资金进出、使用手机或保护凭据。请阅读与您即将在外部平台采取的操作相匹配的指南。",
            "屏幕与字段名称可能变化。请将这些页面视为核对清单，然后在打开已验证目的地后确认实时说明。",
          ],
        },
        {
          title: "最有用的起点",
          paragraphs: [
            "若您是新用户，请从注册与账户安全开始。若已有账户，存款、提款与支付方式指南通常最能节省时间。",
            "合作与优惠话题有各自中心。游戏形式问题应查阅游戏页面，而非这些操作指南。",
          ],
        },
      ],
      faqs: [
        { question: "这些指南能替代实时平台界面吗？", answer: "不能。它们帮助您做准备。当前字段、限额与按钮显示在外部平台。" },
        { question: "应先读哪份指南？", answer: "无账户则读注册；已有账户则读登录与安全；即将划转资金则读存款或提款。" },
        { question: "这里有伪造截图吗？", answer: "没有。本站不编造界面截图。字段名称仅以一般用语描述。" },
        { question: "本中心能重置我的密码吗？", answer: "不能。请使用目的地平台的官方找回流程。" },
        { question: "合作指南在哪里？", answer: "请查看代理、合作计划、联盟指南、引荐指南与合作常见问题。" },
      ],
    },
    "guides-how-to-register": {
      sections: [
        {
          title: "注册前",
          paragraphs: [
            "准备本人控制的活跃手机号、可安全保存的独立密码，以及足够时间阅读目的地条款。确认在您所在地参与合法且适当。",
            "从本站可信路径打开注册目的地，然后在输入个人信息前检查域名与安全连接。",
          ],
        },
        {
          title: "重要注册核对",
          paragraphs: [
            "使用本人资料。后续验证、找回与支付匹配往往依赖这些信息。不要代他人注册。",
            "核对拼写、手机号、任何引荐字段以及您接受的条款。账户批准仍由平台决定，本信息网站不保证通过。",
          ],
        },
      ],
      bullets: {
        title: "常见注册问题",
        items: [
          "错误或未启用的手机号阻碍验证或找回。",
          "在其他服务上复用后被泄露的密码。",
          "通过消息链接在仿冒域名上输入凭据。",
          "期望本合作网站创建或批准账户。",
          "假定提交后会自动获得优惠。",
        ],
      },
      faqs: [
        { question: "表格上会看到哪些字段？", answer: "本指南不编造精确界面标签。请遵循实时外部表格显示的字段。" },
        { question: "可以在本网站注册吗？", answer: "不可以。离开本站后，在外部目的地完成注册。" },
        { question: "批准有保证吗？", answer: "没有。资格与验证由平台控制。" },
        { question: "注册成功后应做什么？", answer: "安全保存凭据、审视安全习惯，然后再考虑登录、存款或优惠。" },
        { question: "RM10 优惠在哪里说明？", answer: "见免费彩金优惠页。名额与条件仍须实时确认。" },
      ],
    },
    "guides-how-to-login": {
      sections: [
        {
          title: "如何进入登录页",
          paragraphs: [
            "从可信书签或本站已披露的外部操作开始，然后检查地址栏。避免在意外消息中嵌入的登录表单。",
            "使用本人控制的设备。在共用电脑上，优先使用无痕窗口，完成后退出。",
          ],
        },
        {
          title: "忘记密码与找回",
          paragraphs: [
            "仅使用已核实平台上显示的找回流程。确认任何邮件或短信对应于您发起的重置。",
            "本合作网站无法为您重置密码、解锁账户或完成身份核验。",
          ],
        },
      ],
      bullets: {
        title: "常见登录问题",
        items: [
          "账户 ID 格式错误或多余空格。",
          "Caps Lock 或已保存的过期密码。",
          "多次失败尝试后的临时限制。",
          "目的地服务中断或维护。",
          "复制品牌形象但域名不真实的钓鱼页面。",
        ],
      },
      faqs: [
        { question: "记不起账户 ID 怎么办？", answer: "使用平台官方找回或支持渠道。不要向未请求的联系人发送密码。" },
        { question: "应向支持分享 OTP 吗？", answer: "不应。一次性验证码用于授权访问。正规支持不应要求您口述登录 OTP。" },
        { question: "何时应联系支持？", answer: "在已核对 ID、密码、网址与连接后，若官方找回仍失败。请使用已验证渠道。" },
        { question: "可以从本信息网站登录吗？", answer: "登录发生在外部平台。此处按钮仅在标记为外部时带您前往。" },
        { question: "可疑登录后应检查什么？", answer: "近期活动、密码、找回手机号及任何意外设备。请参阅账户安全指南。" },
      ],
    },
    "guides-how-to-deposit": {
      sections: [
        {
          title: "存款前",
          paragraphs: [
            "通过已核实目的地登录并打开当前收银台。仅使用您账户显示的方式。可用性可能变化。",
            "本网站不接受资金、不显示个人银行指令、也不处理付款。切勿根据聊天截图、复制的二维码或未请求消息汇款。",
          ],
        },
        {
          title: "待处理与失败的存款",
          paragraphs: [
            "已提交的付款可能需要时间入账。不要因余额尚未更新而自动重复转账。请先查看所述处理窗口及支付应用状态。",
            "若窗口已过，请向已验证平台支持提供时间、金额、汇款人姓名与参考号——不要分享银行密码或 OTP。",
          ],
        },
      ],
      bullets: {
        title: "支付安全",
        items: [
          "使用要求姓名下的支付账户；避免未知第三方。",
          "仅从实时屏幕复制收款信息。",
          "保留回执与平台参考号；隐去机密。",
          "信息错误可能按平台与银行规则延迟或退回资金。",
          "本站不发布伪造银行账号。",
        ],
      },
      faqs: [
        { question: "有哪些支付方式？", answer: "仅限您已登录收银台显示的方式。本指南不编造固定方式清单。" },
        { question: "IWIN Malaysia（本站）接受存款吗？", answer: "不接受。付款在外部平台按其规则进行。" },
        { question: "填错参考号怎么办？", answer: "保留回执并联系已验证支持。除非平台审核后指示，否则不要发送第二笔付款。" },
        { question: "存款需要多久？", answer: "时间因方式、银行与核验而异。本站不承诺具体入账时间。" },
        { question: "在哪里比较支付方式？", answer: "参阅支付方式指南，然后在收银台确认实时选项。" },
      ],
    },
    "guides-how-to-withdraw": {
      sections: [
        {
          title: "申请提款前",
          paragraphs: [
            "若平台要求，请确认身份或银行姓名匹配。检查显示余额是否包含因优惠流水或其他条件而尚未可提的金额。",
            "核对屏幕上的收款账号与姓名。本信息网站不能批准、加快或保证付款。",
          ],
        },
        {
          title: "待处理提款与延迟",
          paragraphs: [
            "待处理状态并不自动等于拒绝。请遵循所述审核窗口后再提交另一次申请，以免重复处理。",
            "常见延迟原因包括姓名不符、验证未完成、有效投注条件，或支付服务商处理中。只有平台能确认您申请的原因。",
          ],
        },
      ],
      bullets: {
        title: "重要条件",
        items: [
          "遵守显示的最低与最高金额。",
          "保留申请 ID、时间戳与状态。",
          "除非实时屏幕写明，否则不要自行假定具体到账时间。",
          "若状态停滞，请带参考号使用平台内支持。",
          "询问付款时切勿分享密码或 OTP。",
        ],
      },
      faqs: [
        { question: "本合作网站可以批准我的提款吗？", answer: "不可以。审核与处理完全属于外部平台。" },
        { question: "提款为何可能延迟？", answer: "验证、姓名匹配、流水、限额或支付服务商时效。请带参考号询问已验证支持。" },
        { question: "待处理时应再次提交吗？", answer: "通常不应。等待所述窗口，然后遵循平台指引。" },
        { question: "如何保存交易记录？", answer: "保存日期、金额、状态与参考号。隐去完整账户机密。" },
        { question: "关于支付一般应读什么？", answer: "支付方式指南，以及资金如何进入账户的存款指南。" },
      ],
    },
    "guides-payment-methods": {
      sections: [
        {
          title: "支付方式概览",
          paragraphs: [
            "存款与提款选项可能不同。用于入金的方式未必可用于出款，或可能需要额外匹配。请始终比较实时收银台，而非记忆中的标识。",
            "可用性为何变化：银行合作、维护、账户状态、设备与平台政策都可能改变您所见内容。",
          ],
        },
        {
          title: "如何核实支付信息",
          paragraphs: [
            "从已登录会话打开收银台。在该屏幕确认收款或收款账户字段。不要复用聊天或社交媒体上的旧图片。",
            "交易确认同时指您的支付服务商回执与平台状态。需要调查时请保留两处参考。",
          ],
        },
      ],
      bullets: {
        title: "常见支付问题",
        items: [
          "使用他人持有的账户。",
          "沿用上一会话的过时收款信息。",
          "假定“即时”始终等于立即入账。",
          "遗漏所需转账参考号。",
          "在待处理状态下重复付款。",
        ],
      },
      faqs: [
        { question: "此处列出的方式是否始终可用？", answer: "否。提及内容仅供比较。您的收银台才具权威性。" },
        { question: "存款与提款是同一清单吗？", answer: "不一定。请在实时账户中分别查看两个方向。" },
        { question: "如何更安全？", answer: "使用本人账户、实时屏幕信息、独立密码，且不在聊天中发送 OTP。参见账户安全。" },
        { question: "本站是否存储我的银行资料？", answer: "本信息网站不运营收银台。目的地适用平台隐私惯例。" },
        { question: "接下来去哪里？", answer: "存款指南用于汇入资金，提款指南用于申请付款，若需路径帮助则查看联系指引。" },
      ],
    },
    "guides-mobile": {
      sections: [
        {
          title: "在移动设备上使用 IWIN",
          paragraphs: [
            "这些信息页面为移动浏览器设计。外部游戏与收银台表现仍取决于目的地、设备与连接。",
            "本站不提供伪造 APK 下载。若平台提供官方应用，请仅遵循该平台当前官方安装说明——不要使用消息或论坛中的文件。",
          ],
        },
        {
          title: "移动端登录、游戏与支付",
          paragraphs: [
            "尽可能展开短链接。登录前确认域名。保持投注与支付控制可读；必要时旋转设备。",
            "公共 Wi-Fi 与意外证书警告对登录和支付需格外谨慎。使用屏幕锁定并隐藏 OTP 通知。",
          ],
        },
      ],
      bullets: {
        title: "故障排查",
        items: [
          "处理账户数据前更新操作系统与浏览器。",
          "拒绝通讯录或无障碍控制等无关权限。",
          "连接中断后，重复支付或游戏操作前先查看历史。",
          "删除您未请求的旧安装文件。",
          "若提示绕过安全警告，请停止并核实来源。",
        ],
      },
      faqs: [
        { question: "本站有官方 IWIN APK 吗？", answer: "没有。本网站不托管应用安装包。不要安装未请求链接中的文件。" },
        { question: "可以在手机上使用信息页吗？", answer: "可以。布局自适应。外部产品仍取决于目的地。" },
        { question: "如何在手机上登录？", answer: "核实网址，使用可信设备，并遵循登录指南。保护 OTP。" },
        { question: "可以在手机上玩真人娱乐场吗？", answer: "若目的地支持。连接质量很重要；参见真人娱乐场指南。" },
        { question: "移动端支付呢？", answer: "在已登录会话中使用实时收银台。参见存款、提款与支付方式指南。" },
      ],
    },
    "guides-account-security": {
      sections: [
        {
          title: "强密码与账户保护",
          paragraphs: [
            "使用未在邮箱、银行或社交媒体复用的长且独立的密码。在本人控制的设备上使用密码管理器，通常比共用手机上的笔记更安全。",
            "保护找回途径：保持对注册手机号的控制，并在需要前了解官方重置路径。",
          ],
        },
        {
          title: "钓鱼、网址与可疑消息",
          paragraphs: [
            "检查拼写、域名、紧迫性及保密要求。任何正规优惠都不应要求您的密码、OTP 或银行认证机密。",
            "若认为账户可能被盗用，请在可信设备上更改密码，联系已验证平台支持，并在财务访问可能暴露时通知支付服务商。",
          ],
        },
      ],
      bullets: {
        title: "可信设备与支付信息",
        items: [
          "启用屏幕锁定并保持软件更新。",
          "移除未知的远程访问或屏幕共享工具。",
          "在共用设备上退出。",
          "切勿在聊天中透露卡片安全码或银行密码。",
          "出现意外提醒后，查看登录与交易记录。",
        ],
      },
      faqs: [
        { question: "什么是钓鱼消息？", answer: "仿冒品牌以套取凭据或付款的消息。检查网址，不要因威胁或奖品声明而仓促行动。" },
        { question: "支持会索要我的 OTP 吗？", answer: "不应。将其视为警告信号，改用官方平台内渠道。" },
        { question: "若我在其他地方使用了相同密码？", answer: "在平台及其他服务上更改密码。启用平台提供的任何额外验证。" },
        { question: "如何确认我在正确网站？", answer: "将域名与可信来源对照，确认安全连接，并避免未知发件人的链接。" },
        { question: "在哪里阅读更安全的游玩？", answer: "负责任博彩页涵盖消费限额与休息；本页聚焦凭据与欺诈。" },
      ],
    },
    promotions: {
      sections: [
        {
          title: "优惠如何运作",
          paragraphs: [
            "优惠是有条件的。标题金额不能证明您符合资格、名额仍在，或优惠价值可在无额外要求的情况下提款。",
            "本中心说明如何阅读类别、资格、流水、与提款的交互以及账户限制。当前优惠——包括是否仍有效——必须在外部平台核对。本站不会把过期或未核实金额写成仿佛仍在生效。",
          ],
        },
        {
          title: "如何阅读优惠条款",
          paragraphs: [
            "明确谁符合资格、领取步骤、计算基数、倍数、排除游戏、最高投注、有效期，以及提前提款会发生什么。",
            "保留已接受条款与屏幕状态。若发生争议，以已验证记录管辖账户。",
          ],
        },
      ],
      faqs: [
        { question: "本页是否列出今日有效优惠？", answer: "它说明优惠如何运作。实时可用性、名额与措辞在外部优惠页。" },
        { question: "什么是流水？", answer: "在满足某些提款条件前，对定义基数（奖金、存款或两者）进行合资格活动的倍数。精确公式见实时条款。" },
        { question: "可以叠加优惠吗？", answer: "仅当平台明确允许。除非条款另有说明，否则假定存在冲突。" },
        { question: "RM10 在哪里说明？", answer: "在免费彩金页，含名额、5 倍流水及单手机条件，仍须实时确认。" },
        { question: "如何负责任地使用优惠？", answer: "先理解条件并保持个人消费限额。优惠不是追损的理由。" },
      ],
    },
    "promotions-free-credit": {
      sections: [
        {
          title: "免费彩金优惠是什么",
          paragraphs: [
            "来源资料说明，经官方合作路径符合资格的新注册可获得 RM10 优惠彩金。它不是可自动提款的现金。",
            "适用每日名额。即使满足其他条件，若名额已用尽也不能保证领取。请在外部平台确认今日状态。",
          ],
        },
        {
          title: "如何领取与常见错误",
          paragraphs: [
            "注册、验证及任何领取步骤必须遵循实时顺序。可能同时适用单手机号限制及其他防重复检查。",
            "常见错误包括假定彩金有保证、忽略 5 倍合资格流水（该示例中 RM10 即 RM50 合资格活动）、将彩金视为可转让，或在阅读排除游戏前存款。",
          ],
        },
      ],
      bullets: {
        title: "须实时确认的条件",
        items: [
          "剩余每日名额。",
          "新注册或其他资格定义。",
          "5 倍流水基数、贡献比例与排除产品。",
          "不可转让彩金及与提款的交互。",
          "领取与完成截止时间。",
        ],
      },
      faqs: [
        { question: "注册是否保证获得 RM10？", answer: "否。适用名额、资格与平台检查。本站不承诺分配。" },
        { question: "RM10 的 5 倍流水是什么意思？", answer: "按已公布示例，合资格流水为 RM50（RM10 × 5），并非赢利承诺。合资格游戏须实时核对。" },
        { question: "可以转让彩金吗？", answer: "已公布条件将其描述为不可转让。以实时条款为准。" },
        { question: "谁可能符合资格？", answer: "通常为经合作路径的新注册，并受单手机及其他检查约束。请在实时页面确认。" },
        { question: "在哪里注册？", answer: "使用已披露的外部注册目的地，然后遵循实时领取说明。" },
      ],
    },
    "promotions-welcome": {
      sections: [
        {
          title: "评估迎新优惠",
          paragraphs: [
            "迎新标签通常仅适用于开户、首次存款或首次领取。横幅不能证明符合资格。",
            "投入资金前，按此顺序阅读选择参与、合资格支付、奖励公式、流水、截止时间与提款影响。",
          ],
        },
        {
          title: "账户检查",
          paragraphs: [
            "身份、支付归属与单账户控制，可能决定您以为已选择参与后领取是否仍然有效。",
            "若实时条款与本页不同，请暂停并遵循已验证优惠。",
          ],
        },
      ],
      faqs: [
        { question: "本页是否有固定迎新金额？", answer: "没有。本指南说明如何阅读迎新条款。当前价值仅见于实时优惠。" },
        { question: "需要选择参与吗？", answer: "部分活动要求在付款前选择或输入代码。请查看实时步骤。" },
        { question: "可以立即提款吗？", answer: "提前提款可能按条款取消或减少奖励。请先阅读该条款。" },
        { question: "若我已有账户呢？", answer: "您可能不符合新用户定义。以平台定义为准。" },
        { question: "流水在哪里有更详细说明？", answer: "奖金条款指南会说明基数、倍数、贡献与上限。" },
      ],
    },
    "promotions-bonus-guide": {
      sections: [
        {
          title: "把标题与公式分开",
          paragraphs: [
            "当您从营销用语中单独抽出计算基数、倍数、游戏贡献、上限、顺序与有效期时，奖金条款更容易理解。",
            "5 倍示例指合资格流水须达到定义基数的五倍。它不描述预期盈亏。",
          ],
        },
        {
          title: "进度与证据",
          paragraphs: [
            "使用平台进度追踪。若需支持解释计算，请保留已接受的条款版本。",
            "完成流水不保证盈利，也绝不应成为超出个人限额消费的理由。",
          ],
        },
      ],
      faqs: [
        { question: "什么是贡献率？", answer: "部分游戏对投注要求全额、部分或不计入。以实时表格为准。" },
        { question: "什么是上限？", answer: "满足条件后对奖励、兑换或提款的限制。它们可能减少您能保留的金额。" },
        { question: "完成投注要求是否意味我会盈利？", answer: "否。投注要求是条件，不是盈利预测。" },
        { question: "为什么顺序重要？", answer: "选择参与、存款、领取与游玩可能需要特定顺序。顺序错误可能使优惠失效。" },
        { question: "这与提款有何关系？", answer: "参阅提款指南，了解待处理条件如何影响可提余额。" },
      ],
    },
    agent: {
      sections: [
        {
          title: "什么是 IWIN 代理？",
          paragraphs: [
            "代理是一种合作角色，可能允许符合资格者通过指定链接或代码引荐活动，并在仪表板查看结果。加入可能被描述为免注册费，但仍适用批准与验证。",
            "可能适用基于流水的佣金。本页不承诺收入、佣金费率或获批。费率与定义属于实时仪表板。",
          ],
        },
        {
          title: "合作模式如何运作",
          paragraphs: [
            "典型步骤为申请、审核、追踪设置、被引荐用户活动、报告状态及可能的调整。自行创建重复账户或误导性推广可能违反规则。",
            "可能适合：能准确描述产品、披露引荐关系并保存记录的人——而非寻求保证收入者。",
          ],
        },
      ],
      bullets: {
        title: "合作伙伴责任",
        items: [
          "使用准确表述；不得承诺保证赢利或收入。",
          "在您发布的内容中披露引荐或合作身份。",
          "不要滥发、施压，或面向包括未成年人在内的不适合受众。",
          "保存仪表板报表供自身记录与税务问题使用。",
          "规划活动前，登录后确认当前条款。",
        ],
      },
      faqs: [
        { question: "代理注册免费吗？", answer: "平台信息可能描述免费用加入。批准仍须审核。请实时确认。" },
        { question: "我会获得什么佣金费率？", answer: "本站不编造费率。请阅读已验证仪表板。" },
        { question: "引荐如何追踪？", answer: "通常通过指定链接或代码，并受时效与防滥用规则约束。参见引荐指南。" },
        { question: "谁不应加入？", answer: "期望保证收入者，或不愿遵守推广与披露标准者。" },
        { question: "相关合作页面在哪里？", answer: "合作计划、联盟指南、引荐指南与合作常见问题。" },
      ],
    },
    "partner-program": {
      sections: [
        {
          title: "什么是合作计划？",
          paragraphs: [
            "该计划在外部平台条款下结合注册、引荐归因、仪表板报告与行为规则。仅评估显示的百分比并不够。",
            "注册使用已核实的合作路径。追踪必须保持一致。待处理、已批准、已调整与已支付是不同状态。",
          ],
        },
        {
          title: "账户管理与推广做法",
          paragraphs: [
            "有条件地描述优惠。避免伪造稀缺。保持年龄与负责任博彩背景可见。不要使用机器人、冒充或未经请求的群发消息。",
            "向合作支持提出差异前，先核对周期日期与参考号。",
          ],
        },
      ],
      faqs: [
        { question: "加入是否保证佣金？", answer: "否。访问与付款取决于有效活动与当前条款。" },
        { question: "如何注册？", answer: "使用已披露的外部合作目的地，并等待平台决定。" },
        { question: "除本页外还应阅读什么？", answer: "代理概览、引荐追踪、联盟内容标准与合作常见问题。" },
        { question: "本网站能支付佣金吗？", answer: "不能。结算是平台功能。" },
        { question: "仪表板数字看起来不对怎么办？", answer: "比较日期与状态，然后带具体参考联系合作支持。" },
      ],
    },
    "affiliate-guide": {
      sections: [
        {
          title: "此处联盟营销的含义",
          paragraphs: [
            "联盟活动是发布可能包含已披露追踪链接的信息，以便平台将之后的注册或合资格行为进行归因。",
            "它同时具有教育性与商业性。读者在点击前应理解该关系。",
          ],
        },
        {
          title: "内容准则与常见错误",
          paragraphs: [
            "回答实际问题。用名额、资格、流水与可变性限定优惠。标明操作发生在另一网站时。",
            "常见错误：保证派彩、伪造证书、隐瞒引荐、收集密码，或面向未成年人。",
          ],
        },
      ],
      faqs: [
        { question: "联盟是否获得保证佣金？", answer: "否。归因与费率取决于实时计划规则。" },
        { question: "什么是追踪链接？", answer: "平台可能用来关联活动的指定网址或代码。它不得掩饰目的地。" },
        { question: "什么是转化？", answer: "平台定义的合资格事件，而不仅是点击。定义见仪表板条款。" },
        { question: "可以承诺玩家会赢吗？", answer: "不可以。那既不准确也不负责任。" },
        { question: "负责任推广在哪里说明？", answer: "本页、代理指南与负责任博彩页。" },
      ],
    },
    "referral-guide": {
      sections: [
        {
          title: "什么是引荐",
          paragraphs: [
            "引荐是合作伙伴与之后用户行为之间可能的归因，依赖有效链接或代码、时效及防滥用检查。",
            "分享链接或已注册账户本身并不保证计入。现有用户可能已在别处被归因。",
          ],
        },
        {
          title: "追踪、资格与奖励条件",
          paragraphs: [
            "合资格流水定义可能排除无效、冲正、特定产品或滥用。仪表板状态（已追踪、待处理、已批准、已调整、已支付）不可互换。",
            "奖励或佣金金额仅以实时仪表板所示为准。本页不编造付款数字。",
          ],
        },
      ],
      faqs: [
        { question: "为什么引荐缺失？", answer: "先前归因、时效、无效追踪、用户状态或合规检查。请带日期与参考询问合作支持。" },
        { question: "可以自我引荐吗？", answer: "为产生佣金而创建账户可能违反规则，并导致调整或关闭。" },
        { question: "费率会永远不变吗？", answer: "不会。百分比与门槛可能按周期或层级变化。" },
        { question: "应如何邀请他人？", answer: "给予决定空间，披露关系，切勿将参与描述为可靠收入。" },
        { question: "在哪里确认数字？", answer: "仅在已验证的合作仪表板中。" },
      ],
    },
    "partner-faq": {
      sections: [
        {
          title: "如何使用这些合作解答",
          paragraphs: [
            "问题围绕注册、追踪、佣金、引荐、账户行为、推广与支持分组。它们是一般说明，不能替代仪表板条款。",
            "联系合作支持前，请准备日期、已匿名的引荐参考与状态名称。",
          ],
        },
      ],
      bullets: {
        title: "支持核对清单",
        items: [
          "仪表板所示的报告周期与时区。",
          "所用链接或代码，且不暴露无关个人数据。",
          "该条目状态（待处理、已调整、已支付）。",
          "您已对照实时条款核对过的内容。",
        ],
      },
      faqs: [
        { question: "注册：加入是否总会获批？", answer: "否。即使免费加入（如有），仍包含资格与行为检查。" },
        { question: "追踪：何时将点击计入？", answer: "归因可能需要既定顺序与时间窗口。现有用户可能不符合资格。" },
        { question: "佣金：费率在哪里？", answer: "在当前仪表板。本常见问题不发布伪造百分比。" },
        { question: "引荐：为何活动被排除？", answer: "无效局、排除产品、滥用规则或不完整状态。请带具体参考询问。" },
        { question: "推广：禁止哪些表述？", answer: "保证赢利、保证提款或保证合作收入。" },
        { question: "账户：可以运营重复玩家账户吗？", answer: "通常禁止。可能导致调整或关闭。" },
        { question: "支持：若需要玩家类帮助怎么办？", answer: "玩家存款与登录走玩家支持。合作问题走合作渠道并附仪表板证据。" },
      ],
    },
    contact: {
      sections: [
        {
          title: "如何获得协助",
          paragraphs: [
            "选择与问题匹配的渠道。本网站可澄清已发布指南、合作定位及对我们页面的更正。它看不到您的游戏余额或支付状态。",
            "账户、登录找回、存款与提款问题属于外部平台的已验证支持，请使用登录后显示的目的地。本站不编造 WhatsApp、Telegram、电子邮件或社交账号。",
          ],
        },
        {
          title: "按主题分流",
          paragraphs: [
            "支付问题：准备好平台参考号；切勿发送密码。合作问题：使用合作仪表板渠道并附日期。一般网站问题：若需内容更正，请使用本信息网站公布的联系路径。",
            "已核实的联系选项仅在站点配置中存在时显示。若配置了在线聊天或支持网址，它打开的是外部平台支持目的地——不是虚构收件箱。",
          ],
        },
      ],
      faqs: [
        { question: "为什么这里没有 WhatsApp 号码？", answer: "未核实的联系方式不予发布。仅显示已配置且已核实的目的地。" },
        { question: "卡住的提款由谁处理？", answer: "带上您的交易编号联系外部平台支持。" },
        { question: "本网站段落有误由谁处理？", answer: "信息网站联系路径用于编辑更正，而非平台账户工具。" },
        { question: "在线聊天在本域名上吗？", answer: "若提供，它是已配置的外部支持网址，并披露为离开本站。" },
        { question: "我应准备什么？", answer: "时间戳、参考号，以及省略密码、OTP 与完整支付机密的说明。" },
      ],
    },
    "responsible-gaming": {
      sections: [
        {
          title: "将博彩视为娱乐",
          paragraphs: [
            "游戏、体育市场与数字开奖涉及真实的金钱损失风险。它们不是解决财务问题或挽回先前亏损的方法。",
            "开始前设定时间限额与消费限额。只用亏得起的钱。不要动用租金、食物、贷款或应急资金。",
          ],
        },
        {
          title: "必要时休息并寻求帮助",
          paragraphs: [
            "若难以停止、隐瞒活动，或借钱继续，请暂停，并通过当地卫生或博彩支持服务寻求适当帮助。",
            "本信息网站无法在目的地平台上实施账户封锁。请使用外部运营商提供的工具，并在存在账户级限额时联系该平台。",
          ],
        },
      ],
      bullets: {
        title: "实用提醒",
        items: [
          "不要通过提高投注来追损。",
          "避免在情绪不佳、状态受损或匆忙时游玩。",
          "防止他人使用您的账户。",
          "将这些习惯与账户安全指南结合。",
        ],
      },
      faqs: [
        { question: "使用策略是否使博彩无风险？", answer: "否。策略不能消除亏损可能。" },
        { question: "本站能设定我的存款限额吗？", answer: "不能。请在可用时使用目的地平台自身的限额工具。" },
        { question: "若我认识的人正在挣扎怎么办？", answer: "鼓励他们暂停，并寻求当地专业或支持服务帮助。本站不是辅导服务。" },
        { question: "优惠应改变我的限额吗？", answer: "否。优惠不是超出原计划消费的理由。" },
        { question: "还应阅读哪里？", answer: "账户安全、支付指南，以及关于本网站限度的免责声明。" },
      ],
    },
    terms: {
      sections: [
        {
          title: "这些条款的范围",
          paragraphs: [
            "这些条款涵盖对本 IWIN Malaysia 官方合作伙伴信息网站的使用：浏览页面、跟随内部链接，以及使用已披露的外部行动号召。",
            "它们不管辖您与外部游戏平台的关系。该平台有自己的条款，若您在那里创建账户则适用。",
          ],
        },
        {
          title: "可接受的使用",
          paragraphs: [
            "不要滥用本站、试图干扰服务、以损害服务的方式抓取，或冒充运营商。内容供一般信息使用，并可能变更。",
            "若您需要账户或支付操作，必须使用目的地平台。我们可能更新这些条款；更新后继续使用意味着您应重读本页。",
          ],
        },
      ],
      faqs: [
        { question: "这些条款约束游戏运营商吗？", answer: "否。它们仅约束对本信息网站的使用。" },
        { question: "可以商业复制这些指南吗？", answer: "不要将本站内容呈现为运营商官方规则。请尊重适用版权。" },
        { question: "外部链接变更怎么办？", answer: "目的地可能变化。使用时请核实网址与条款。" },
        { question: "隐私在哪里说明？", answer: "在本网站隐私政策中，与平台声明分开。" },
        { question: "责任限制在哪里？", answer: "另见免责声明中的信息限度及无付款保证。" },
      ],
    },
    "privacy-policy": {
      sections: [
        {
          title: "本声明涵盖范围",
          paragraphs: [
            "本政策说明本信息网站的隐私考量，例如技术日志、语言偏好，或您通过公布联系路径发送的消息。",
            "它不说明外部游戏平台如何使用账户、支付或游戏数据。该运营商有单独声明，您应在那里注册前阅读。",
          ],
        },
        {
          title: "不应向此处发送什么",
          paragraphs: [
            "不要向本信息网站通过邮件或消息发送密码、OTP、完整支付凭据或不必要的身份文件。",
            "若就内容错误联系我们，请仅包含定位该页所需信息。账户调查属于已验证平台。",
          ],
        },
      ],
      faqs: [
        { question: "本站是否运营玩家数据库？", answer: "否。玩家账户在外部平台。" },
        { question: "你们出售个人数据吗？", answer: "本政策仅描述本信息网站。不要假定目的地运营商的做法。" },
        { question: "如何申请删除平台账户数据？", answer: "通过外部平台自身的隐私流程，而非本合作网站。" },
        { question: "是否使用 Cookie？", answer: "必要站点功能与语言路由可能使用技术存储。本页不编造第三方广告名单。" },
        { question: "网站条款在哪里？", answer: "在使用条款页。" },
      ],
    },
    disclaimer: {
      sections: [
        {
          title: "仅供参考",
          paragraphs: [
            "本网站内容是面向马来西亚访客研究游戏、指南、优惠与合作计划时的 IWIN 相关一般信息。",
            "此处没有任何内容保证付款、盈利、佣金、游戏可用性或适合性。实时平台条款不一致时以平台为准。",
          ],
        },
        {
          title: "外部链接与时效",
          paragraphs: [
            "标记为外部的操作将离开本网站。您有责任核实目的地、安全性以及您是否有资格使用。",
            "界面变更时指南可能过时。行动前请复查已登录屏幕。",
          ],
        },
      ],
      faqs: [
        { question: "可以依赖本站作为法律建议吗？", answer: "否。这不是法律、税务或财务建议。" },
        { question: "赢利有保证吗？", answer: "否。结果不确定。" },
        { question: "代理收入有保证吗？", answer: "否。" },
        { question: "谁对平台决定负责？", answer: "外部平台，依其条款。" },
        { question: "合作定位在哪里说明？", answer: "在官方合作伙伴页。" },
      ],
    },
  },
};

function fallbackPack(pageId: PageId, locale: Locale): ExtraPack {
  const enPack = packs.en[pageId];
  if (locale === "en") return enPack;
  return packs[locale][pageId] ?? enPack;
}

export function getPageExtras(locale: Locale, pageId: PageId): ExtraPack {
  return fallbackPack(pageId, locale);
}
