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
  category: string;
  note: string;
};

export const GAME_CATEGORIES: readonly GameCategory[] = [
  { id: "slots", name: "Slots", routeKey: "games-slots", image: "/images/games/slots.webp" },
  { id: "live-casino", name: "Live Casino", routeKey: "games-live-casino", image: "/images/games/live-casino.webp" },
  { id: "sports", name: "Sports", routeKey: "games-sports", image: "/images/games/sports.webp" },
  { id: "4d", name: "4D", routeKey: "games-4d", image: "/images/games/4d.webp" },
] as const;

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
