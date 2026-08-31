import { GAME_CATEGORIES, getGameCategoryImage } from "@/content/games/catalog";
import { resolveHeroImage } from "@/content/i18n/rich/hero-images";
import type { PageId } from "@/content/i18n/rich/types";
import type { GameCategoryId } from "@/content/games/catalog";
import { SITE_CONFIG } from "@/lib/constants/site";

/** Central semantic image map — reuse across components. */
export const VISUAL_IMAGES = {
  hero: {
    home: "/images/hero/banner-1.png",
    banner2: "/images/hero/banner-2.png",
    banner3: "/images/hero/banner-3.png",
  },
  brand: {
    logo: SITE_CONFIG.brandLogo,
    mark: SITE_CONFIG.brandMark,
  },
  promotion: "/images/games/promo.webp",
  agent: "/images/games/agent.webp",
  category: Object.fromEntries(
    GAME_CATEGORIES.map((cat) => [cat.id, cat.image]),
  ) as Record<GameCategoryId, string>,
} as const;

export function getCategoryImage(id: GameCategoryId): string {
  return VISUAL_IMAGES.category[id];
}

export function getPageHeroImage(pageId: PageId): string | undefined {
  return resolveHeroImage(pageId);
}

export function getCategoryImageByRoute(
  routeKey: (typeof GAME_CATEGORIES)[number]["routeKey"],
): string {
  return getGameCategoryImage(routeKey);
}
