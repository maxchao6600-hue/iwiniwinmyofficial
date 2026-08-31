"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { getUi } from "@/content/i18n/ui";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getLocaleFromPath, routePath } from "@/lib/i18n/paths";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="rounded text-sm text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const ui = getUi(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[color:var(--iwin-border)]/40 bg-[linear-gradient(180deg,#050505_0%,#0e0e10_100%)]">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="visual-panel lg:col-span-2 rounded-2xl p-6">
            <Link
              href={routePath("home", locale)}
              className="relative mb-4 inline-block h-9 w-[128px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
            >
              <Image
                src={SITE_CONFIG.brandLogo}
                alt={SITE_CONFIG.brandLogoAlt}
                fill
                sizes="140px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-lg font-semibold text-white">{SITE_CONFIG.partnerLabel}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              {ui.partnerDisclosure}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-iwin-yellow">
              {ui.ageNotice}
            </p>
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {ui.footer.language}
              </p>
              <LanguageSwitcher />
            </div>
          </div>
          <FooterColumn title={ui.footerGroups.explore.title} links={ui.footerGroups.explore.links} />
          <FooterColumn title={ui.footerGroups.play.title} links={ui.footerGroups.play.links} />
          <FooterColumn title={ui.footerGroups.support.title} links={ui.footerGroups.support.links} />
          <FooterColumn title={ui.footerGroups.legal.title} links={ui.footerGroups.legal.links} />
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <p>{ui.responsibleNotice}</p>
          <p>
            © {year} {SITE_CONFIG.siteName}. {ui.rightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}
