import type { Locale } from "@/lib/i18n/config";
import type { PageId } from "@/content/i18n/rich/types";

/** Meaningful alt text for page hero imagery — unique, not keyword-stuffed. */
const HERO_ALT: Record<Locale, Partial<Record<PageId | "home", string>>> = {
  en: {
    home: "IWIN Malaysia official partner information",
    games: "IWIN Malaysia games and game categories",
    "games-slots": "IWIN Malaysia slots game category",
    "games-live-casino": "IWIN Malaysia live casino game category",
    "games-sports": "IWIN Malaysia sports game category",
    "games-4d": "IWIN Malaysia 4D game category",
    "game-providers": "IWIN Malaysia game provider references",
    promotions: "IWIN Malaysia promotions information",
    "promotions-free-credit": "IWIN Malaysia free credit offer conditions",
    "promotions-welcome": "IWIN Malaysia welcome promotion information",
    "promotions-bonus-guide": "IWIN Malaysia bonus and turnover terms",
    guides: "IWIN Malaysia account and payment guides",
    "guides-how-to-register": "IWIN Malaysia registration walkthrough",
    "guides-how-to-login": "IWIN Malaysia login and recovery guide",
    "guides-how-to-deposit": "IWIN Malaysia deposit funding guide",
    "guides-how-to-withdraw": "IWIN Malaysia withdrawal request guide",
    "guides-payment-methods": "IWIN Malaysia payment methods overview",
    "guides-mobile": "IWIN Malaysia mobile access guidance",
    "guides-account-security": "IWIN Malaysia account security checkpoints",
    agent: "IWIN Malaysia agent and partner programme",
    "partner-program": "IWIN Malaysia partner programme relationship",
    "affiliate-guide": "IWIN Malaysia affiliate publishing guidance",
    "referral-guide": "IWIN Malaysia referral tracking lifecycle",
    "partner-faq": "IWIN Malaysia partner programme FAQ",
    "about-iwin": "About the IWIN Malaysia partner website",
    "official-partner": "IWIN Malaysia official partner boundaries",
    contact: "IWIN Malaysia support topic router",
    "responsible-gaming": "IWIN Malaysia responsible gaming framework",
    terms: "IWIN Malaysia terms of use document",
    "privacy-policy": "IWIN Malaysia privacy policy document",
    disclaimer: "IWIN Malaysia information disclaimer",
  },
  ms: {
    home: "Maklumat rakan rasmi IWIN Malaysia",
    games: "Permainan dan kategori permainan IWIN Malaysia",
    "games-slots": "Kategori slot IWIN Malaysia",
    "games-live-casino": "Kategori kasino langsung IWIN Malaysia",
    "games-sports": "Kategori sukan IWIN Malaysia",
    "games-4d": "Kategori 4D IWIN Malaysia",
    promotions: "Maklumat promosi IWIN Malaysia",
    guides: "Panduan akaun dan bayaran IWIN Malaysia",
    agent: "Program ejen dan rakan IWIN Malaysia",
  },
  zh: {
    home: "IWIN Malaysia 官方合作伙伴信息",
    games: "IWIN Malaysia 游戏与游戏类别",
    "games-slots": "IWIN Malaysia 老虎机游戏类别",
    "games-live-casino": "IWIN Malaysia 真人娱乐场类别",
    "games-sports": "IWIN Malaysia 体育类别",
    "games-4d": "IWIN Malaysia 4D 类别",
    promotions: "IWIN Malaysia 优惠信息",
    guides: "IWIN Malaysia 账户与支付指南",
    agent: "IWIN Malaysia 代理与合作伙伴计划",
  },
};

export type HeroAtmosphere =
  | "home"
  | "games"
  | "category"
  | "promo"
  | "guide"
  | "partner"
  | "help"
  | "support"
  | "legal"
  | "default";

export function getHeroAtmosphere(pageId: PageId | "home" | "faqs"): HeroAtmosphere {
  if (pageId === "home") return "home";
  if (pageId === "games" || pageId === "game-providers") return "games";
  if (pageId.startsWith("games-")) return "category";
  if (pageId.startsWith("promotions")) return "promo";
  if (pageId.startsWith("guides")) return "guide";
  if (
    pageId === "agent" ||
    pageId === "partner-program" ||
    pageId === "affiliate-guide" ||
    pageId === "referral-guide" ||
    pageId === "partner-faq"
  ) {
    return "partner";
  }
  if (pageId === "faqs") return "help";
  if (pageId === "contact") return "support";
  if (
    pageId === "terms" ||
    pageId === "privacy-policy" ||
    pageId === "disclaimer" ||
    pageId === "responsible-gaming"
  ) {
    return "legal";
  }
  return "default";
}

export function getHeroImageAlt(
  locale: Locale,
  pageId: PageId | "home",
  fallback?: string,
): string {
  return HERO_ALT[locale][pageId] ?? HERO_ALT.en[pageId] ?? fallback ?? "IWIN Malaysia";
}
