import type { Locale } from "@/lib/i18n/config";
import type { PageId, RichPageContent } from "./types";
import { buildRichPageContent } from "./build";
import { enSpecs, getRichPageContentEn } from "./en";
import { msSpecs } from "./ms";
import { zhSpecs } from "./zh";

const specsByLocale = {
  en: enSpecs,
  ms: msSpecs,
  zh: zhSpecs,
} as const;

export function getRichPageContent(locale: Locale, pageId: PageId): RichPageContent {
  if (locale === "en") {
    return getRichPageContentEn(pageId);
  }
  return buildRichPageContent(locale, pageId, specsByLocale[locale][pageId]);
}

export type { PageId, RichPageContent };
