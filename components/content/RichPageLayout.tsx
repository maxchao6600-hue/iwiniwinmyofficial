import Image from "next/image";
import Link from "next/link";
import { ExternalLinkNotice } from "@/components/content/ExternalLinkNotice";
import { RichSections } from "@/components/content/RichSections";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCommon } from "@/content/i18n/common";
import type { RichPageContent } from "@/content/i18n/rich/types";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";

function externalUrl(kind: RichPageContent["cta"]["primaryExternalUrl"]): string | undefined {
  if (kind === "agent" && hasExternalUrl(SITE_CONFIG.agentUrl)) return SITE_CONFIG.agentUrl;
  if (kind === "support" && hasExternalUrl(SITE_CONFIG.supportUrl)) return SITE_CONFIG.supportUrl;
  if (hasExternalUrl(SITE_CONFIG.registerUrl)) return SITE_CONFIG.registerUrl;
  return undefined;
}

function primaryHref(locale: Locale, cta: RichPageContent["cta"]): string {
  if (cta.primaryExternal) {
    const url = externalUrl(cta.primaryExternalUrl ?? "register");
    if (url) return url;
  }
  if (cta.primaryRoute) {
    return routePath(cta.primaryRoute, locale);
  }
  return hasExternalUrl(SITE_CONFIG.registerUrl)
    ? SITE_CONFIG.registerUrl
    : routePath("guides-how-to-register", locale);
}

function secondaryHref(locale: Locale, cta: RichPageContent["cta"]): string | undefined {
  if (cta.secondaryRoute) {
    return routePath(cta.secondaryRoute, locale);
  }
  return undefined;
}

export function CompactPageHero({
  content,
  locale,
  primaryLabel,
  primaryUrl,
  secondaryLabel,
  secondaryUrl,
  showExternalNotice = false,
}: {
  content: Pick<RichPageContent, "eyebrow" | "h1" | "intro" | "heroImage">;
  locale: Locale;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  showExternalNotice?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      {content.heroImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={content.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-iwin-charcoal via-black to-black" />
      )}
      <Container className="relative max-h-[500px] py-10 sm:py-12 lg:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iwin-yellow">
          {content.eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          {content.h1}
        </h1>
        <div className="mt-4 max-w-3xl space-y-3">
          {content.intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-base leading-relaxed text-zinc-300">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={primaryUrl}
            size="lg"
            external={primaryUrl.startsWith("http")}
          >
            {primaryLabel}
          </Button>
          {secondaryUrl && secondaryLabel ? (
            <Button href={secondaryUrl} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
        {showExternalNotice ? (
          <ExternalLinkNotice locale={locale} className="mt-4 max-w-2xl" />
        ) : null}
      </Container>
    </section>
  );
}

export function ContextualFinalCta({
  locale,
  cta,
}: {
  locale: Locale;
  cta: RichPageContent["cta"];
}) {
  const primary = primaryHref(locale, cta);
  const secondary = secondaryHref(locale, cta);

  return (
    <section className="section-band bg-[linear-gradient(180deg,rgba(245,197,24,0.08),transparent)]">
      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {cta.footerTitle}
          </h2>
          <p className="mt-3 text-zinc-300">{cta.footerDescription}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={primary} size="lg" external={primary.startsWith("http")}>
              {cta.primaryLabel}
            </Button>
            {secondary && cta.secondaryLabel ? (
              <Button href={secondary} variant="secondary" size="lg">
                {cta.secondaryLabel}
              </Button>
            ) : null}
          </div>
          {cta.showExternalNotice ? (
            <ExternalLinkNotice locale={locale} className="mx-auto mt-4 max-w-xl" />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function RelatedInformation({
  locale,
  links,
}: {
  locale: Locale;
  links: RichPageContent["related"];
}) {
  const common = getCommon(locale);
  if (!links.length) return null;
  return (
    <section className="mt-14 border-t border-white/10 pt-10">
      <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
        {common.relatedLinks}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.key}>
            <Link
              href={routePath(link.key, locale)}
              className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RichPageLayout({
  locale,
  content,
  crumbs,
  beforeBlocks,
  afterBlocks,
  showHeroCta = true,
}: {
  locale: Locale;
  content: RichPageContent;
  crumbs: { name: string; path: string }[];
  beforeBlocks?: React.ReactNode;
  afterBlocks?: React.ReactNode;
  showHeroCta?: boolean;
}) {
  const common = getCommon(locale);
  const primary = primaryHref(locale, content.cta);
  const secondary = secondaryHref(locale, content.cta);

  return (
    <>
      {content.faqs?.length ? <JsonLd data={faqPageJsonLd(content.faqs)} /> : null}
      <JsonLd
        data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.path })))}
      />
      <div className="border-b border-white/5 bg-iwin-charcoal/30">
        <Container className="py-6 sm:py-8">
          <Breadcrumbs
            items={crumbs.map((c, i) => ({
              label: c.name,
              href: i < crumbs.length - 1 ? c.path : undefined,
            }))}
          />
        </Container>
      </div>

      {showHeroCta ? (
        <CompactPageHero
          locale={locale}
          content={content}
          primaryLabel={content.cta.primaryLabel}
          primaryUrl={primary}
          secondaryLabel={content.cta.secondaryLabel}
          secondaryUrl={secondary}
          showExternalNotice={content.cta.showExternalNotice}
        />
      ) : (
        <CompactPageHero
          locale={locale}
          content={content}
          primaryLabel={content.cta.primaryLabel}
          primaryUrl={primary}
        />
      )}

      <Container className="py-12 sm:py-14">
        {beforeBlocks}
        <RichSections blocks={content.blocks} locale={locale} />
        {afterBlocks}

        {content.faqs?.length ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">FAQ</h2>
            <div className="mt-6">
              <Accordion items={content.faqs} />
            </div>
          </section>
        ) : null}

        <RelatedInformation locale={locale} links={content.related} />
        <p className="mt-10 text-xs text-zinc-500">{common.lastUpdated}</p>
      </Container>

      <ContextualFinalCta locale={locale} cta={content.cta} />
    </>
  );
}

export function richCrumbs(
  locale: Locale,
  items: { key: RouteKey; label: string }[],
) {
  const common = getCommon(locale);
  return [
    { name: common.breadcrumbHome, path: routePath("home", locale) },
    ...items.map((item) => ({
      name: item.label,
      path: routePath(item.key, locale),
    })),
  ];
}
