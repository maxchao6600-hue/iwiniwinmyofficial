import Image from "next/image";
import { ExternalLinkNotice } from "@/components/content/ExternalLinkNotice";
import { RichSections } from "@/components/content/RichSections";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContentRail } from "@/components/visual/PageCompositions";
import { getCommon } from "@/content/i18n/common";
import type { RichPageContent } from "@/content/i18n/rich/types";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils/cn";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";
import type { HeroAtmosphere } from "@/lib/visual/alt";
import { getHeroAtmosphere } from "@/lib/visual/alt";

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
  variant = "editorial",
  atmosphere = "default",
}: {
  content: Pick<RichPageContent, "eyebrow" | "h1" | "intro" | "heroImage" | "heroImageAlt">;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  variant?: "editorial" | "immersive" | "quiet" | "guide";
  atmosphere?: HeroAtmosphere;
}) {
  const isExternal = primaryUrl.startsWith("http");
  const introLimit = variant === "quiet" ? 1 : variant === "guide" ? 1 : 2;
  const intros = content.intro.slice(0, introLimit);

  if (variant === "quiet") {
    return (
      <section
        className={cn(
          "border-b border-white/5 bg-[linear-gradient(180deg,rgba(14,14,16,0.9),rgba(5,5,5,1))]",
          atmosphere === "legal" && "hero-atmosphere-legal",
        )}
      >
        <Container className="py-10 sm:py-12 lg:py-14">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {content.h1}
          </h1>
          <div className="mt-5 max-w-2xl space-y-3">
            {intros.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const minH =
    variant === "immersive"
      ? "min-h-[340px] sm:min-h-[400px]"
      : variant === "guide"
        ? "min-h-[260px] sm:min-h-[300px]"
        : "min-h-[280px] sm:min-h-[320px]";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/5",
        minH,
        atmosphere === "games" && "hero-atmosphere-games",
        atmosphere === "category" && "hero-atmosphere-category",
        atmosphere === "promo" && "hero-atmosphere-promo",
        atmosphere === "guide" && "hero-atmosphere-guide",
        atmosphere === "partner" && "hero-atmosphere-partner",
        atmosphere === "help" && "hero-atmosphere-help",
        atmosphere === "support" && "hero-atmosphere-support",
      )}
    >
      {content.heroImage ? (
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={content.heroImageAlt ?? content.h1}
            fill
            priority
            sizes="100vw"
            className={cn(
              "object-cover",
              variant === "immersive" ? "opacity-60 object-[center_28%]" : "opacity-45 object-[center_28%]",
              atmosphere === "category" && "object-[center_20%]",
              atmosphere === "promo" && "object-[center_35%] opacity-35",
              atmosphere === "guide" && "opacity-30 object-left",
              atmosphere === "partner" && "opacity-25 object-center",
            )}
          />
          <div className="absolute inset-0 hero-glow" />
          <div
            className={cn(
              "absolute inset-0",
              atmosphere === "guide"
                ? "bg-gradient-to-r from-black via-black/90 to-black/70"
                : atmosphere === "promo"
                  ? "bg-gradient-to-br from-black via-black/85 to-black/55"
                  : atmosphere === "partner"
                    ? "bg-gradient-to-t from-black via-black/80 to-black/50"
                    : "bg-gradient-to-r from-black/95 via-black/80 to-black/45",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-iwin-charcoal via-black to-black" />
      )}
      <Container className="relative py-10 sm:py-12 lg:py-14">
        {atmosphere === "guide" ? (
          <div className="mb-4 h-px w-16 bg-iwin-yellow/50" aria-hidden="true" />
        ) : null}
        {atmosphere === "promo" ? (
          <div
            className="pointer-events-none absolute right-6 top-8 hidden h-24 w-24 rounded-full border border-iwin-yellow/20 sm:block"
            aria-hidden="true"
          />
        ) : null}
        <p className="eyebrow">{content.eyebrow}</p>
        <h1
          className={cn(
            "font-display mt-4 max-w-3xl font-semibold tracking-tight text-white",
            variant === "immersive" || atmosphere === "games"
              ? "text-3xl sm:text-5xl lg:text-6xl"
              : atmosphere === "guide"
                ? "text-2xl sm:text-4xl lg:text-[2.75rem]"
                : "text-3xl sm:text-4xl lg:text-5xl",
          )}
        >
          {content.h1}
        </h1>
        <div className="mt-5 max-w-2xl space-y-3">
          {intros.map((p) => (
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
    <RelatedContentRail
      locale={locale}
      title={common.relatedLinks}
      links={links.map((link) => ({ key: link.key, label: link.label }))}
    />
  );
}

export function RichPageLayout({
  locale,
  content,
  crumbs,
  beforeBlocks,
  afterBlocks,
  heroVariant = "editorial",
}: {
  locale: Locale;
  content: RichPageContent;
  crumbs: { name: string; path: string }[];
  beforeBlocks?: React.ReactNode;
  afterBlocks?: React.ReactNode;
  heroVariant?: "editorial" | "immersive" | "quiet" | "guide";
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
        variant={heroVariant}
        atmosphere={getHeroAtmosphere(content.pageId)}
      />

      <Container className="py-8 sm:py-10">
        {beforeBlocks}
        <div className="rich-chapter-stack">
          <RichSections blocks={content.blocks} locale={locale} />
        </div>
        {afterBlocks}

        {content.faqs?.length ? (
          <section className="mt-12">
            <div className="mb-6 flex items-end gap-4">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {common.faqHeading}
              </h2>
              <div className="editorial-divider mb-2 hidden sm:block" aria-hidden="true" />
            </div>
            <div className="mt-2">
              <Accordion items={content.faqs} defaultOpen={null} />
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
