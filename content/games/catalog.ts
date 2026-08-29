export type GameCategoryId = "slots" | "live-casino" | "sports" | "4d";

export type GameCategory = {
  id: GameCategoryId;
  name: string;
  routeKey: "games-slots" | "games-live-casino" | "games-sports" | "games-4d";
  image: string;
};

export type ProviderReference = {
  name: string;
  image: string;
  note: string;
};

export const GAME_CATEGORIES: readonly GameCategory[] = [
  { id: "slots", name: "Slots", routeKey: "games-slots", image: "/images/games/slots.webp" },
  { id: "live-casino", name: "Live Casino", routeKey: "games-live-casino", image: "/images/games/live-casino.webp" },
  { id: "sports", name: "Sports", routeKey: "games-sports", image: "/images/games/sports.webp" },
  { id: "4d", name: "4D", routeKey: "games-4d", image: "/images/games/4d.webp" },
] as const;

const providerNote =
  "Provider/game name referenced in the IWIN gaming ecosystem; listing it here does not claim a direct partnership, endorsement or current availability.";

export const PROVIDERS: readonly ProviderReference[] = [
  { name: "918Kiss", image: "/images/providers/p13.png", note: providerNote },
  { name: "LionKing", image: "/images/providers/p14.png", note: providerNote },
  { name: "Lucky365", image: "/images/providers/p15.png", note: providerNote },
  { name: "JILI", image: "/images/providers/p16.png", note: providerNote },
  { name: "JDB", image: "/images/providers/p17.png", note: providerNote },
  { name: "Pragmatic Play", image: "/images/providers/p18.png", note: providerNote },
  { name: "ASKME", image: "/images/providers/p20.png", note: providerNote },
] as const;

export const PROVIDER_CATALOG_NOTE =
  "These are provider/game names referenced in the IWIN gaming ecosystem. Availability can change and should be checked on the external platform.";
