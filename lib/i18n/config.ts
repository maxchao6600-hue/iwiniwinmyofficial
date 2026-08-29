export const LOCALES = ["en", "ms", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  ms: "BM",
  zh: "中文",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en-MY",
  ms: "ms-MY",
  zh: "zh-CN",
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: "en-MY",
  ms: "ms-MY",
  zh: "zh-CN",
};

export const LOCALE_OG: Record<Locale, string> = {
  en: "en_MY",
  ms: "ms_MY",
  zh: "zh_CN",
};

export const LOCALE_PREFIX: Record<Locale, string> = {
  en: "",
  ms: "/ms",
  zh: "/zh",
};

export const ROUTE_KEYS = [
  "home",
  "about-iwin",
  "official-partner",
  "games",
  "games-slots",
  "games-live-casino",
  "games-sports",
  "games-4d",
  "game-providers",
  "guides",
  "guides-how-to-register",
  "guides-how-to-login",
  "guides-how-to-deposit",
  "guides-how-to-withdraw",
  "guides-payment-methods",
  "guides-mobile",
  "guides-account-security",
  "promotions",
  "promotions-free-credit",
  "promotions-welcome",
  "promotions-bonus-guide",
  "agent",
  "partner-program",
  "affiliate-guide",
  "referral-guide",
  "partner-faq",
  "faqs",
  "contact",
  "responsible-gaming",
  "terms",
  "privacy-policy",
  "disclaimer",
] as const;

export type RouteKey = (typeof ROUTE_KEYS)[number];

export const ROUTE_SEGMENTS: Record<RouteKey, string> = {
  home: "",
  "about-iwin": "about-iwin",
  "official-partner": "official-partner",
  games: "games",
  "games-slots": "games/slots",
  "games-live-casino": "games/live-casino",
  "games-sports": "games/sports",
  "games-4d": "games/4d",
  "game-providers": "game-providers",
  guides: "guides",
  "guides-how-to-register": "guides/how-to-register",
  "guides-how-to-login": "guides/how-to-login",
  "guides-how-to-deposit": "guides/how-to-deposit",
  "guides-how-to-withdraw": "guides/how-to-withdraw",
  "guides-payment-methods": "guides/payment-methods",
  "guides-mobile": "guides/mobile",
  "guides-account-security": "guides/account-security",
  promotions: "promotions",
  "promotions-free-credit": "promotions/free-credit",
  "promotions-welcome": "promotions/welcome",
  "promotions-bonus-guide": "promotions/bonus-guide",
  agent: "agent",
  "partner-program": "partner-program",
  "affiliate-guide": "affiliate-guide",
  "referral-guide": "referral-guide",
  "partner-faq": "partner-faq",
  faqs: "faqs",
  contact: "contact",
  "responsible-gaming": "responsible-gaming",
  terms: "terms",
  "privacy-policy": "privacy-policy",
  disclaimer: "disclaimer",
};

/** Maps route keys to PageView component names used by the route generator */
export const ROUTE_VIEW_MAP: Record<RouteKey, string> = {
  home: "HomePageView",
  "about-iwin": "AboutPageView",
  "official-partner": "OfficialPartnerPageView",
  games: "GamesHubPageView",
  "games-slots": "SlotsPageView",
  "games-live-casino": "LiveCasinoPageView",
  "games-sports": "SportsPageView",
  "games-4d": "Lottery4dPageView",
  "game-providers": "ProvidersPageView",
  guides: "GuidesHubPageView",
  "guides-how-to-register": "RegisterGuidePageView",
  "guides-how-to-login": "LoginGuidePageView",
  "guides-how-to-deposit": "DepositGuidePageView",
  "guides-how-to-withdraw": "WithdrawGuidePageView",
  "guides-payment-methods": "PaymentMethodsGuidePageView",
  "guides-mobile": "MobileGuidePageView",
  "guides-account-security": "AccountSecurityGuidePageView",
  promotions: "PromotionsHubPageView",
  "promotions-free-credit": "FreeCreditPageView",
  "promotions-welcome": "WelcomePromoPageView",
  "promotions-bonus-guide": "BonusGuidePageView",
  agent: "AgentPageView",
  "partner-program": "PartnerProgramPageView",
  "affiliate-guide": "AffiliateGuidePageView",
  "referral-guide": "ReferralGuidePageView",
  "partner-faq": "PartnerFaqPageView",
  faqs: "FaqsPageView",
  contact: "ContactPageView",
  "responsible-gaming": "ResponsibleGamingPageView",
  terms: "TermsPageView",
  "privacy-policy": "PrivacyPageView",
  disclaimer: "DisclaimerPageView",
};
