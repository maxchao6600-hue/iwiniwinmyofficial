import type { Locale } from "@/lib/i18n/config";

export type GameCategoryId = "slots" | "live-casino" | "sports" | "4d";

export type GameCategory = {
  id: GameCategoryId;
  name: string;
  routeKey: "games-slots" | "games-live-casino" | "games-sports" | "games-4d";
  image: string;
  alt: Record<Locale, string>;
  objectPosition?: string;
};

export type ProviderReference = {
  name: string;
  image: string;
  category: string;
  note: string;
};

/** Single source of truth for IWIN game category card imagery. */
export const GAME_CATEGORIES: readonly GameCategory[] = [
  {
    id: "slots",
    name: "Slots",
    routeKey: "games-slots",
    image: "/images/games/slots.webp",
    alt: {
      en: "IWIN Malaysia slots game category",
      ms: "Kategori slot IWIN Malaysia",
      zh: "IWIN Malaysia 老虎机游戏类别",
    },
  },
  {
    id: "live-casino",
    name: "Live Casino",
    routeKey: "games-live-casino",
    image: "/images/games/live-casino.png",
    alt: {
      en: "IWIN Malaysia live casino game category",
      ms: "Kategori kasino langsung IWIN Malaysia",
      zh: "IWIN Malaysia 真人娱乐场类别",
    },
    objectPosition: "center top",
  },
  {
    id: "sports",
    name: "Sports",
    routeKey: "games-sports",
    image: "/images/games/sports.webp",
    alt: {
      en: "IWIN Malaysia sports game category",
      ms: "Kategori sukan IWIN Malaysia",
      zh: "IWIN Malaysia 体育类别",
    },
    objectPosition: "center 35%",
  },
  {
    id: "4d",
    name: "4D",
    routeKey: "games-4d",
    image: "/images/games/4d.png",
    alt: {
      en: "IWIN Malaysia 4D game category",
      ms: "Kategori 4D IWIN Malaysia",
      zh: "IWIN Malaysia 4D 类别",
    },
    objectPosition: "left center",
  },
] as const;

export function getGameCategoryImage(routeKey: GameCategory["routeKey"]): string {
  return GAME_CATEGORIES.find((cat) => cat.routeKey === routeKey)?.image ?? "/images/games/slots.webp";
}

export function getGameCategoryAlt(
  routeKey: GameCategory["routeKey"],
  locale: Locale,
): string {
  return GAME_CATEGORIES.find((cat) => cat.routeKey === routeKey)?.alt[locale] ?? "IWIN game category";
}

export function getGameCategoryByRouteKey(routeKey: GameCategory["routeKey"]): GameCategory | undefined {
  return GAME_CATEGORIES.find((cat) => cat.routeKey === routeKey);
}

const CATEGORY_NAMES: Record<GameCategoryId, Record<Locale, string>> = {
  slots: { en: "Slots", ms: "Slot", zh: "老虎机" },
  "live-casino": { en: "Live Casino", ms: "Kasino Langsung", zh: "真人娱乐场" },
  sports: { en: "Sports", ms: "Sukan", zh: "体育" },
  "4d": { en: "4D", ms: "4D", zh: "4D" },
};

export function getGameCategoryName(id: GameCategoryId, locale: Locale): string {
  return CATEGORY_NAMES[id][locale];
}

export const PROVIDERS: readonly ProviderReference[] = [
  {
    name: "918Kiss",
    image: "/images/providers/p13.png",
    category: "Slots / mobile catalogues",
    note: "An ecosystem reference often associated with mobile-oriented game catalogues. Confirm current titles in the live lobby; listing here is not a partnership claim.",
  },
  {
    name: "LionKing",
    image: "/images/providers/p14.png",
    category: "Digital games",
    note: "A referenced brand name whose titles, interface and availability may vary by account, device or maintenance window.",
  },
  {
    name: "Lucky365",
    image: "/images/providers/p15.png",
    category: "Catalogue reference",
    note: "A catalogue label used for orientation only. This website does not represent that every related product is supplied or maintained here.",
  },
  {
    name: "JILI",
    image: "/images/providers/p16.png",
    category: "Slots / arcade-style",
    note: "Often researched for digital slot and arcade-style titles. Each game is governed by its own displayed paytable and feature rules.",
  },
  {
    name: "JDB",
    image: "/images/providers/p17.png",
    category: "Slots / fishing-style",
    note: "A provider label that may organise slot or fishing-style titles. Individual mechanics require a separate in-game review.",
  },
  {
    name: "Pragmatic Play",
    image: "/images/providers/p18.png",
    category: "Slots / live-style content",
    note: "A widely recognised content name used here for identification. It does not imply endorsement of this partner website.",
  },
  {
    name: "ASKME",
    image: "/images/providers/p20.png",
    category: "Ecosystem label",
    note: "An ecosystem label that may appear in provider searches. Verify exact branding and service details on the destination platform.",
  },
] as const;

export const PROVIDER_CATALOG_NOTE =
  "These are provider and game names referenced in the IWIN gaming ecosystem. Availability can change and should be checked on the external platform. Listing a name is not a claim of direct partnership, endorsement or permanent supply.";
