import {
  getGameCategoryImage,
  type GameCategory,
} from "@/content/games/catalog";
import type { PageId } from "./types";

/** Maps each page to an existing asset under public/images. */
const HERO_IMAGES: Partial<Record<PageId, string>> = {
  "about-iwin": "/images/hero/banner-2.png",
  "official-partner": "/images/hero/banner-3.png",
  games: "/images/hero/banner-1.png",
  "games-slots": getGameCategoryImage("games-slots"),
  "games-live-casino": getGameCategoryImage("games-live-casino"),
  "games-sports": getGameCategoryImage("games-sports"),
  "games-4d": getGameCategoryImage("games-4d"),
  "game-providers": "/images/hero/banner-2.png",
  guides: "/images/hero/banner-2.png",
  "guides-how-to-register": "/images/hero/banner-1.png",
  "guides-how-to-login": "/images/hero/banner-2.png",
  "guides-how-to-deposit": "/images/hero/banner-3.png",
  "guides-how-to-withdraw": "/images/hero/banner-1.png",
  "guides-payment-methods": "/images/hero/banner-2.png",
  "guides-mobile": "/images/hero/banner-3.png",
  "guides-account-security": "/images/hero/banner-1.png",
  promotions: "/images/games/promo.webp",
  "promotions-free-credit": "/images/games/promo.webp",
  "promotions-welcome": "/images/games/promo.webp",
  "promotions-bonus-guide": "/images/games/promo.webp",
  agent: "/images/hero/banner-3.png",
  "partner-program": "/images/hero/banner-3.png",
  "affiliate-guide": "/images/hero/banner-2.png",
  "referral-guide": "/images/hero/banner-2.png",
  "partner-faq": "/images/hero/banner-3.png",
  contact: "/images/hero/banner-3.png",
  "responsible-gaming": "/images/hero/banner-2.png",
  terms: "/images/hero/banner-1.png",
  "privacy-policy": "/images/hero/banner-2.png",
  disclaimer: "/images/hero/banner-3.png",
};

export function resolveHeroImage(pageId: PageId, fallback?: string): string | undefined {
  return HERO_IMAGES[pageId] ?? fallback;
}

export function resolveCategoryHeroImage(routeKey: GameCategory["routeKey"]): string {
  return getGameCategoryImage(routeKey);
}
