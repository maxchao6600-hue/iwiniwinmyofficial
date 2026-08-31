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
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

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
  primaryLabel,
  primaryUrl,
  secondaryLabel,
  secondaryUrl,
}: {
  content: Pick<RichPageContent, "eyebrow" | "h1" | "intro" | "heroImage">;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
}) {
  const isExternal = primaryUrl.startsWith("http");
  return (
    <section className="relative min-h-[280px] overflow-hidden border-b border-white/5 sm:min-h-[320px]">
      {content.heroImage ? (
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%] opacity-50"
          />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-iwin-charcoal via-black to-black" />
      )}
      <Container className="relative py-10 sm:py-12 lg:py-14">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {content.h1}
        </h1>
        <div className="mt-5 max-w-2xl space-y-3">
          {content.intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={primaryUrl} size="lg" external={isExternal}>
            {primaryLabel}
          </Button>
          {secondaryUrl && secondaryLabel ? (
            <Button href={secondaryUrl} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
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
    <section className="section-band">
      <Container className="py-10 sm:py-12">
        <div className="final-cta-panel px-6 py-10 sm:px-10 sm:py-12">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {cta.footerTitle}
            </h2>
            <p className="mt-3 text-zinc-300">{cta.footerDescription}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
    <section className="mt-10 border-t border-white/10 pt-8">
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
}: {
  locale: Locale;
  content: RichPageContent;
  crumbs: { name: string; path: string }[];
  beforeBlocks?: React.ReactNode;
  afterBlocks?: React.ReactNode;
}) {
  const common = getCommon(locale);
  const primary = primaryHref(locale, content.cta);
  const secondary = secondaryHref(locale, content.cta);
  const pageUrl = crumbs[crumbs.length - 1]?.path ?? routePath("home", locale);

  return (
    <>
      {content.faqs?.length ? <JsonLd data={faqPageJsonLd(content.faqs)} /> : null}
      <JsonLd
        data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.path })))}
      />
      <JsonLd
        data={webPageJsonLd({
          name: content.h1,
          description: content.intro[0] ?? content.h1,
          path: pageUrl,
          locale,
        })}
      />
      <div className="border-b border-white/5 bg-iwin-charcoal/30">
        <Container className="py-4 sm:py-5">
          <Breadcrumbs
            items={crumbs.map((c, i) => ({
              label: c.name,
              href: i < crumbs.length - 1 ? c.path : undefined,
            }))}
          />
        </Container>
      </div>

      <CompactPageHero
        content={content}
        primaryLabel={content.cta.primaryLabel}
        primaryUrl={primary}
        secondaryLabel={content.cta.secondaryLabel}
        secondaryUrl={secondary}
      />

      <Container className="py-8 sm:py-10">
        {beforeBlocks}
        <RichSections blocks={content.blocks} locale={locale} />
        {afterBlocks}

        {content.faqs?.length ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {common.faqHeading}
            </h2>
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
