"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_HREFLANG, LOCALE_LABELS, LOCALES } from "@/lib/i18n/config";
import { getLocaleFromPath, switchLocalePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils/cn";

export function LanguageSwitcher({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || "/";
  const active = getLocaleFromPath(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-white/10 bg-black/20 p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((locale) => {
        const href = switchLocalePath(pathname, locale);
        const isActive = active === locale;
        return (
          <Link
            key={locale}
            href={href}
            hrefLang={LOCALE_HREFLANG[locale]}
            lang={LOCALE_HREFLANG[locale]}
            aria-current={isActive ? "true" : undefined}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/60",
              locale === "zh" && "px-1.5",
              isActive
                ? "bg-iwin-yellow text-black"
                : "text-iwin-muted hover:bg-white/5 hover:text-white",
            )}
          >
            {LOCALE_LABELS[locale]}
          </Link>
        );
      })}
    </div>
  );
}
