import type { Locale } from "@/lib/i18n/config";
import type { PageId } from "@/content/i18n/rich/types";

/** Meaningful alt text for page hero imagery — unique, not keyword-stuffed. */
const HERO_ALT: Record<Locale, Partial<Record<PageId | "home", string>>> = {
  en: {
    home: "IWIN Malaysia information and partner website",
    games: "IWIN Malaysia games and categories",
    "games-slots": "IWIN slots game category",
    "games-live-casino": "IWIN live casino game category",
    "games-sports": "IWIN sports game category",
    "games-4d": "IWIN 4D game category",
    "game-providers": "IWIN game provider references",
    promotions: "IWIN promotions and bonus information",
    "promotions-free-credit": "IWIN free credit promotion conditions",
    "promotions-welcome": "IWIN welcome promotion information",
    "promotions-bonus-guide": "IWIN bonus and turnover terms guide",
    guides: "IWIN registration, payment and account guides",
    "guides-how-to-register": "IWIN registration guide",
    "guides-how-to-login": "IWIN login and account access guide",
    "guides-how-to-deposit": "IWIN deposit and funding guide",
    "guides-how-to-withdraw": "IWIN withdrawal guide",
    "guides-payment-methods": "IWIN payment methods comparison",
    "guides-mobile": "IWIN mobile access guide",
    "guides-account-security": "IWIN account security checkpoints",
    agent: "IWIN agent and partner program",
    "partner-program": "IWIN partner programme overview",
    "affiliate-guide": "IWIN affiliate publishing guidance",
    "referral-guide": "IWIN referral tracking guidance",
    "about-iwin": "About IWIN Malaysia partner website",
    "official-partner": "IWIN Malaysia official partner boundaries",
    contact: "IWIN Malaysia support routing",
    "responsible-gaming": "IWIN responsible gaming framework",
  },
  ms: {
    home: "Laman maklumat dan rakan IWIN Malaysia",
    games: "Permainan dan kategori IWIN Malaysia",
    "games-slots": "Kategori permainan slot IWIN",
    "games-live-casino": "Kategori kasino langsung IWIN",
    "games-sports": "Kategori sukan IWIN",
    "games-4d": "Kategori 4D IWIN",
    promotions: "Maklumat promosi dan bonus IWIN",
    guides: "Panduan pendaftaran, bayaran dan akaun IWIN",
    agent: "Program ejen dan rakan IWIN",
  },
  zh: {
    home: "IWIN Malaysia 信息与合作伙伴网站",
    games: "IWIN Malaysia 游戏与类别",
    "games-slots": "IWIN 老虎机游戏类别",
    "games-live-casino": "IWIN 真人娱乐场类别",
    "games-sports": "IWIN 体育类别",
    "games-4d": "IWIN 4D 类别",
    promotions: "IWIN 优惠与奖金信息",
    guides: "IWIN 注册、支付与账户指南",
    agent: "IWIN 代理与合作伙伴计划",
  },
};

export function getHeroImageAlt(
  locale: Locale,
  pageId: PageId | "home",
  fallback?: string,
): string {
  return HERO_ALT[locale][pageId] ?? HERO_ALT.en[pageId] ?? fallback ?? "IWIN Malaysia";
}
