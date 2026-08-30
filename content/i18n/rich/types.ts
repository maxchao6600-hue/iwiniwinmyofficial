import type { Locale, RouteKey } from "@/lib/i18n/config";

export type RichCard = {
  title: string;
  description: string;
  href?: RouteKey;
  image?: string;
  bullets?: string[];
};

export type RichBlock =
  | { type: "prose"; title?: string; paragraphs: string[] }
  | { type: "bullets"; title: string; items: string[] }
  | { type: "steps"; title: string; steps: string[] }
  | { type: "cards"; title: string; intro?: string; items: RichCard[] }
  | { type: "grid"; title: string; intro?: string; items: { title: string; description: string }[] }
  | { type: "table"; title: string; rows: { label: string; value: string }[] }
  | { type: "callout"; title: string; body: string; variant?: "info" | "warning" }
  | { type: "split"; title: string; leftTitle?: string; left: string[]; rightTitle?: string; right: string[] };

export type RichPageCta = {
  primaryLabel: string;
  primaryExternal?: boolean;
  primaryExternalUrl?: "register" | "agent" | "support";
  primaryRoute?: RouteKey;
  secondaryLabel?: string;
  secondaryRoute?: RouteKey;
  footerTitle: string;
  footerDescription: string;
  showExternalNotice?: boolean;
};

export type RichPageContent = {
  eyebrow: string;
  h1: string;
  intro: string[];
  heroImage?: string;
  blocks: RichBlock[];
  faqs?: { question: string; answer: string }[];
  related: { key: RouteKey; label: string }[];
  cta: RichPageCta;
};

export type PageId = Exclude<
  RouteKey,
  "home" | "faqs"
>;

export type RichContentGetter = (locale: Locale) => RichPageContent;
