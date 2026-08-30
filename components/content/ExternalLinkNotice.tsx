import { getCommon } from "@/content/i18n/common";
import type { Locale } from "@/lib/i18n/config";

export function ExternalLinkNotice({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const common = getCommon(locale);
  return (
    <p className={`text-xs leading-relaxed text-zinc-500 ${className}`.trim()}>
      {common.externalCtaNote}
    </p>
  );
}
