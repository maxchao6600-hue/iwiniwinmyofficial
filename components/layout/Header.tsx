"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getUi } from "@/content/i18n/ui";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import { LOCALE_HTML_LANG } from "@/lib/i18n/config";
import { getLocaleFromPath, routePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const ui = getUi(locale);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const registerHref = hasExternalUrl(SITE_CONFIG.registerUrl)
    ? SITE_CONFIG.registerUrl
    : routePath("guides-how-to-register", locale);
  const loginHref = hasExternalUrl(SITE_CONFIG.loginUrl)
    ? SITE_CONFIG.loginUrl
    : routePath("guides-how-to-login", locale);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--iwin-border)]/70 bg-[color:var(--iwin-charcoal)]/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href={routePath("home", locale)}
          className="group flex min-w-0 items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/60"
        >
          <span className="relative block h-8 w-[140px] shrink-0 sm:h-9 sm:w-[160px]">
            <Image
              src={SITE_CONFIG.brandLogo}
              alt={SITE_CONFIG.brandLogoAlt}
              fill
              sizes="160px"
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

        <nav aria-label={ui.primaryNav} className="hidden items-center gap-0.5 xl:flex">
          {ui.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-iwin-muted transition hover:bg-iwin-yellow/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <Button href={loginHref} variant="secondary" size="md" external={loginHref.startsWith("http")}>
            {ui.login}
          </Button>
          <Button href={registerHref} size="md" external={registerHref.startsWith("http")}>
            {ui.register}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher onNavigate={() => setOpen(false)} />
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-5 bg-current transition",
                  open && "top-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={cn(
          "border-t border-white/10 bg-surface-950 lg:hidden",
          open ? "block" : "hidden",
        )}
        role="dialog"
        aria-modal="true"
        aria-label={ui.primaryNav}
      >
        <Container className="flex flex-col gap-2 py-4">
          {ui.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button href={loginHref} variant="secondary" external={loginHref.startsWith("http")}>
              {ui.login}
            </Button>
            <Button href={registerHref} external={registerHref.startsWith("http")}>
              {ui.register}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
