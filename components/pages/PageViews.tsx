import Image from "next/image";
import Link from "next/link";
import {
  CategoryCard,
  FinalCtaBand,
} from "@/components/content/PagePrimitives";
import {
  RichPageLayout,
  richCrumbs,
} from "@/components/content/RichPageLayout";
import { GroupedAccordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { GAME_CATEGORIES, PROVIDER_CATALOG_NOTE, PROVIDERS, getGameCategoryName } from "@/content/games/catalog";
import { getCommon } from "@/content/i18n/common";
import { getGamesHubExtra } from "@/content/i18n/games-hub";
import { flattenFaqs, getFaqGroups, getHomeFaqs } from "@/content/i18n/faq";
import { getHomeContent } from "@/content/i18n/home";
import { getVisual } from "@/content/i18n/visual";
import { getRichPageContent, type PageId } from "@/content/i18n/rich";
import { getRelatedLinkLabel } from "@/content/i18n/rich/related-labels";
import { GUIDE_META } from "@/content/i18n/rich/related";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import {
  AgentSplitPanel,
  ClusterNavCard,
  EcosystemDiagram,
  GuideStepCard,
  PartnerFlowDiagram,
  PremiumDataTable,
  ProcessFlow,
  PromoFactCards,
  PromoVisualPanel,
  ProviderLogoGrid,
  ResponsibleGamingGrid,
  SplitCategorySection,
} from "@/components/visual/VisualPanels";
import { SITE_CONFIG, getActiveContactChannels, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

function RichStandardPage({
  locale,
  pageId,
  trail,
}: {
  locale: Locale;
  pageId: PageId;
  trail: { key: RouteKey; label: string }[];
}) {
  const content = getRichPageContent(locale, pageId);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, trail)}
    />
  );
}

export function HomePageView({ locale }: { locale: Locale }) {
  const home = getHomeContent(locale);
  const common = getCommon(locale);
  const visual = getVisual(locale);
  const faqs = getHomeFaqs(locale);
  const homePath = routePath("home", locale);
  const primaryHref = home.hero.primaryCta.href || routePath("guides-how-to-register", locale);
  const clusterMarkers = ["G", "P", "Gu", "A", "F", "Ab"];

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([{ name: common.breadcrumbHome, path: homePath }])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: home.hero.h1,
          description: home.hero.description,
          path: homePath,
          locale,
        })}
      />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src={VISUAL_IMAGES.hero.home}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%] opacity-50"
          />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/94 via-black/78 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/55" />
        </div>
        <Container className="relative py-12 sm:py-14 lg:py-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-iwin-yellow/30 bg-black/50">
              <Image src={VISUAL_IMAGES.brand.mark} alt="" width={40} height={40} className="object-contain p-1" priority />
            </span>
            <p className="eyebrow mb-0">{home.hero.eyebrow}</p>
          </div>
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {home.hero.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {home.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryHref} size="lg" external={primaryHref.startsWith("http")}>
              {home.hero.primaryCta.label}
            </Button>
            <Button href={routePath("games", locale)} variant="secondary" size="lg">
              {home.hero.secondaryCta.label}
            </Button>
            <Button href={routePath("guides", locale)} variant="ghost" size="lg">
              {common.exploreGuides}
            </Button>
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-zinc-400">{home.hero.note}</p>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeading
                eyebrow={home.aboutIwin.eyebrow}
                title={home.aboutIwin.title}
                description={home.aboutIwin.paragraphs[0]}
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300">
                {home.aboutIwin.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={routePath("about-iwin", locale)} variant="secondary">
                  {getRichPageContent(locale, "about-iwin").h1}
                </Button>
                <Button href={routePath("official-partner", locale)} variant="ghost">
                  {getRichPageContent(locale, "official-partner").h1}
                </Button>
              </div>
            </div>
            <EcosystemDiagram locale={locale} />
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {home.aboutIwin.points.map((point) => (
              <li key={point} className="visual-panel flex gap-3 rounded-xl p-4 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-iwin-yellow/15 text-xs font-bold text-iwin-yellow">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <SectionHeading title={home.partnerBand.title} description={home.partnerBand.body} />
            <PartnerFlowDiagram locale={locale} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routePath("official-partner", locale)} variant="secondary">
              {common.partnerBoundaries}
            </Button>
            <Button href={routePath("disclaimer", locale)} variant="ghost">
              {getRichPageContent(locale, "disclaimer").h1}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <SectionHeading eyebrow={home.clusterLinks.eyebrow} title={home.clusterLinks.title} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.clusterLinks.items.map((item, index) => (
              <ClusterNavCard
                key={item.routeKey}
                href={item.href}
                label={item.label}
                description={item.description}
                marker={clusterMarkers[index] ?? String(index + 1)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <SectionHeading
            eyebrow={home.categories.eyebrow}
            title={home.categories.title}
            description={home.categories.intro}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.categories.items.map((item, index) => {
              const category = GAME_CATEGORIES.find((cat) => cat.routeKey === item.routeKey);
              return (
              <CategoryCard
                key={item.routeKey}
                href={item.href}
                title={item.title}
                description={item.description}
                image={category?.image ?? item.image ?? "/images/games/slots.webp"}
                alt={category?.alt[locale] ?? item.title}
                objectPosition={category?.objectPosition}
                priority={index < 2}
                actionLabel={visual.exploreCategory}
              />
            )})}
          </div>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <SectionHeading eyebrow={home.whyIwin.eyebrow} title={home.whyIwin.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.whyIwin.features.map((feature, index) => (
              <article key={feature.title} className="visual-panel rounded-2xl p-6">
                <span className="font-display text-3xl font-bold text-iwin-yellow/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <SectionHeading
            eyebrow={home.providers.eyebrow}
            title={home.providers.title}
            description={home.providers.intro}
          />
          <div className="mt-8">
            <ProviderLogoGrid />
          </div>
          <div className="mt-6">
            <Button href={home.providers.cta.href || routePath("game-providers", locale)} variant="secondary">
              {home.providers.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <PromoVisualPanel locale={locale} />
            <div>
              <SectionHeading
                eyebrow={home.promotions.eyebrow}
                title={home.promotions.title}
                description={home.promotions.description}
              />
              <div className="mt-6">
                <PromoFactCards locale={locale} items={home.promotions.conditions} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={home.promotions.cta.href || routePath("promotions-free-credit", locale)}>
                  {home.promotions.cta.label}
                </Button>
                <Button href={routePath("promotions-bonus-guide", locale)} variant="secondary">
                  {getRichPageContent(locale, "promotions-bonus-guide").h1}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <SectionHeading
            eyebrow={home.guides.eyebrow}
            title={home.guides.title}
            description={home.guides.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.guides.items.map((item, index) => (
              <GuideStepCard
                key={item.routeKey}
                href={item.href}
                number={String(index + 1).padStart(2, "0")}
                title={item.title}
                description={item.description}
                featured={index < 2}
                featuredLabel={index < 2 ? visual.guideFeatured : undefined}
              />
            ))}
          </div>
          <div className="mt-6">
            <Button href={home.guides.cta.href || routePath("guides", locale)} variant="secondary">
              {home.guides.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <AgentSplitPanel
            locale={locale}
            imageSrc={VISUAL_IMAGES.agent}
            imageAlt={home.agent.title}
            eyebrow={home.agent.eyebrow}
            title={home.agent.title}
            description={home.agent.description}
            points={home.agent.points}
          >
            <Button href={home.agent.cta.href || routePath("agent", locale)}>
              {home.agent.cta.label}
            </Button>
            <Button href={routePath("referral-guide", locale)} variant="secondary">
              {getRichPageContent(locale, "referral-guide").h1}
            </Button>
            {hasExternalUrl(SITE_CONFIG.agentUrl) ? (
              <Button href={SITE_CONFIG.agentUrl} variant="ghost" external>
                {common.visitPlatform}
              </Button>
            ) : null}
          </AgentSplitPanel>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <SectionHeading
            eyebrow={home.getStarted.eyebrow}
            title={home.getStarted.title}
            description={home.getStarted.description}
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {home.getStarted.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-surface-900/60 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-iwin-yellow text-sm font-bold text-black">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={routePath("guides-how-to-register", locale)}>{home.guides.items[0].title}</Button>
            <Button href={routePath("games", locale)} variant="secondary">
              {home.hero.secondaryCta.label}
            </Button>
            <Button href={routePath("responsible-gaming", locale)} variant="ghost">
              {home.responsibleBand.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-10 sm:py-12">
          <SectionHeading eyebrow={home.faq.eyebrow} title={home.faq.title} />
          <div className="mt-8">
            <GroupedAccordion
              groups={getFaqGroups(locale).slice(0, 3).map((g) => ({
                id: g.id,
                label: visual.faqCategoryLabels[g.id],
                items: g.items.slice(0, 2),
              }))}
            />
          </div>
          <div className="mt-6">
            <Button href={home.faq.cta.href || routePath("faqs", locale)} variant="secondary">
              {home.faq.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band-alt">
        <Container className="py-10 sm:py-12">
          <SectionHeading
            title={home.responsibleBand.title}
            description={home.responsibleBand.description}
          />
          <div className="mt-8">
            <ResponsibleGamingGrid locale={locale} />
          </div>
          <div className="mt-6">
            <Button
              href={home.responsibleBand.cta.href || routePath("responsible-gaming", locale)}
              variant="secondary"
            >
              {home.responsibleBand.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <FinalCtaBand
        locale={locale}
        title={home.finalCta.title}
        description={home.finalCta.description}
        primaryLabel={home.finalCta.primaryCta.label}
        primaryHref={home.finalCta.primaryCta.href || routePath("guides-how-to-register", locale)}
        secondaryLabel={home.finalCta.secondaryCta.label}
        secondaryHref={home.finalCta.secondaryCta.href || routePath("guides", locale)}
      />
    </>
  );
}

export function AboutPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "about-iwin");
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "about-iwin", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12">
          <PartnerFlowDiagram locale={locale} />
        </section>
      }
    />
  );
}

export function OfficialPartnerPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "official-partner");
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "official-partner", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <PartnerFlowDiagram locale={locale} />
          <EcosystemDiagram locale={locale} />
        </section>
      }
    />
  );
}

export function GamesHubPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "games");
  const hub = getGamesHubExtra(locale);
  const routeByCategory = {
    slots: "games-slots",
    "live-casino": "games-live-casino",
    sports: "games-sports",
    "4d": "games-4d",
  } as const;
  const relatedGuideKeys = [
    "guides-how-to-register",
    "guides-how-to-login",
    "guides-account-security",
  ] as const;

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "games", label: locale === "ms" ? "Permainan" : locale === "zh" ? "游戏" : "Games" },
      ])}
      beforeBlocks={
        <>
          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {hub.exploreLabel}
            </h2>
            <nav aria-label={hub.categoryNavTitle} className="mt-5 flex flex-wrap gap-2">
              {GAME_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-white/10 bg-surface-900/60 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
                >
                  {getGameCategoryName(cat.id, locale)}
                </a>
              ))}
            </nav>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GAME_CATEGORIES.map((cat, index) => (
                <CategoryCard
                  key={cat.id}
                  href={routePath(cat.routeKey, locale)}
                  title={getGameCategoryName(cat.id, locale)}
                  description={hub.sections[index]?.intro ?? ""}
                  image={cat.image}
                  alt={cat.alt[locale]}
                  objectPosition={cat.objectPosition}
                  priority={index < 2}
                />
              ))}
            </div>
          </section>
        </>
      }
      afterBlocks={
        <>
          {hub.sections.map((section, index) => {
            const cat = GAME_CATEGORIES.find((c) => c.id === section.id);
            return (
              <div key={section.id} className="mt-14">
                <SplitCategorySection
                  id={section.id}
                  title={section.title}
                  intro={section.intro}
                  bullets={section.bullets}
                  image={cat?.image ?? VISUAL_IMAGES.category.slots}
                  alt={cat?.alt[locale] ?? section.title}
                  objectPosition={cat?.objectPosition}
                  imageFirst={index % 2 === 0}
                >
                  <Button href={routePath(routeByCategory[section.id], locale)} variant="secondary">
                    {section.guideLabel}
                  </Button>
                  <Button href={routePath("faqs", locale)} variant="ghost">
                    {section.faqLabel}
                  </Button>
                </SplitCategorySection>
              </div>
            );
          })}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {hub.providersTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">{hub.providersIntro}</p>
            <div className="mt-6">
              <ProviderLogoGrid limit={6} />
            </div>
            <div className="mt-5">
              <Button href={routePath("game-providers", locale)} variant="secondary">
                {getRelatedLinkLabel(locale, "game-providers")}
              </Button>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {hub.chooseTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">{hub.chooseIntro}</p>
            <div className="mt-6">
              <PremiumDataTable headers={hub.chooseHeaders} rows={hub.chooseRows} />
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {hub.relatedGuidesTitle}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuideKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={routePath(key, locale)}
                    className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
                  >
                    {getRelatedLinkLabel(locale, key)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      }
    />
  );
}

function GameCategoryPage({
  locale,
  pageId,
  parentLabel,
}: {
  locale: Locale;
  pageId: Extract<PageId, "games-slots" | "games-live-casino" | "games-sports" | "games-4d">;
  parentLabel: string;
}) {
  const content = getRichPageContent(locale, pageId);

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "games", label: parentLabel },
        { key: pageId, label: content.h1 },
      ])}
    />
  );
}

export function SlotsPageView({ locale }: { locale: Locale }) {
  const gamesLabel = locale === "ms" ? "Permainan" : locale === "zh" ? "游戏" : "Games";
  return <GameCategoryPage locale={locale} pageId="games-slots" parentLabel={gamesLabel} />;
}
export function LiveCasinoPageView({ locale }: { locale: Locale }) {
  const gamesLabel = locale === "ms" ? "Permainan" : locale === "zh" ? "游戏" : "Games";
  return <GameCategoryPage locale={locale} pageId="games-live-casino" parentLabel={gamesLabel} />;
}
export function SportsPageView({ locale }: { locale: Locale }) {
  const gamesLabel = locale === "ms" ? "Permainan" : locale === "zh" ? "游戏" : "Games";
  return <GameCategoryPage locale={locale} pageId="games-sports" parentLabel={gamesLabel} />;
}
export function Lottery4dPageView({ locale }: { locale: Locale }) {
  const gamesLabel = locale === "ms" ? "Permainan" : locale === "zh" ? "游戏" : "Games";
  return <GameCategoryPage locale={locale} pageId="games-4d" parentLabel={gamesLabel} />;
}

export function ProvidersPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "game-providers");
  const providerTitle =
    locale === "ms" ? "Penyedia dirujuk" : locale === "zh" ? "相关提供商" : "Referenced providers";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "game-providers", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{providerTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-zinc-400">{PROVIDER_CATALOG_NOTE}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROVIDERS.map((provider) => (
              <article key={provider.name} className="visual-panel rounded-2xl p-5">
                <div className="provider-tile mb-4 flex h-20 items-center justify-center rounded-xl">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-iwin-yellow/80">
                  {provider.category}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{provider.note}</p>
              </article>
            ))}
          </div>
        </section>
      }
    />
  );
}

function GuidePage({
  locale,
  pageId,
}: {
  locale: Locale;
  pageId: Extract<
    PageId,
    | "guides"
    | "guides-how-to-register"
    | "guides-how-to-login"
    | "guides-how-to-deposit"
    | "guides-how-to-withdraw"
    | "guides-payment-methods"
    | "guides-mobile"
    | "guides-account-security"
  >;
}) {
  const content = getRichPageContent(locale, pageId);
  const guidesLabel =
    locale === "ms" ? "Panduan" : locale === "zh" ? "指南" : "Guides";
  const trail =
    pageId === "guides"
      ? [{ key: "guides" as const, label: content.h1 }]
      : [
          { key: "guides" as const, label: guidesLabel },
          { key: pageId, label: content.h1 },
        ];
  return <RichStandardPage locale={locale} pageId={pageId} trail={trail} />;
}

export function GuidesHubPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "guides");
  const featuredKeys = [
    "guides-how-to-register",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
  ] as const;
  const featuredTitle =
    locale === "ms" ? "Panduan paling berguna" : locale === "zh" ? "最有用的指南" : "Most useful guides";
  const groups: { title: string; keys: RouteKey[] }[] =
    locale === "ms"
      ? [
          { title: "Panduan akaun", keys: ["guides-how-to-register", "guides-how-to-login", "guides-account-security"] },
          { title: "Panduan bayaran", keys: ["guides-how-to-deposit", "guides-how-to-withdraw", "guides-payment-methods"] },
          { title: "Panduan permainan", keys: ["games", "games-slots", "games-live-casino"] },
          { title: "Panduan promosi", keys: ["promotions", "promotions-free-credit", "promotions-bonus-guide"] },
          { title: "Mudah alih & keselamatan", keys: ["guides-mobile", "guides-account-security"] },
          { title: "Panduan rakan", keys: ["agent", "partner-program", "affiliate-guide", "referral-guide"] },
        ]
      : locale === "zh"
        ? [
            { title: "账户指南", keys: ["guides-how-to-register", "guides-how-to-login", "guides-account-security"] },
            { title: "支付指南", keys: ["guides-how-to-deposit", "guides-how-to-withdraw", "guides-payment-methods"] },
            { title: "游戏指南", keys: ["games", "games-slots", "games-live-casino"] },
            { title: "优惠指南", keys: ["promotions", "promotions-free-credit", "promotions-bonus-guide"] },
            { title: "移动端与安全", keys: ["guides-mobile", "guides-account-security"] },
            { title: "合作伙伴指南", keys: ["agent", "partner-program", "affiliate-guide", "referral-guide"] },
          ]
        : [
            { title: "Account guides", keys: ["guides-how-to-register", "guides-how-to-login", "guides-account-security"] },
            { title: "Payment guides", keys: ["guides-how-to-deposit", "guides-how-to-withdraw", "guides-payment-methods"] },
            { title: "Game guides", keys: ["games", "games-slots", "games-live-casino"] },
            { title: "Promotion guides", keys: ["promotions", "promotions-free-credit", "promotions-bonus-guide"] },
            { title: "Mobile and security", keys: ["guides-mobile", "guides-account-security"] },
            { title: "Partner guides", keys: ["agent", "partner-program", "affiliate-guide", "referral-guide"] },
          ];

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "guides", label: locale === "ms" ? "Panduan" : locale === "zh" ? "指南" : "Guides" },
      ])}
      beforeBlocks={
        <>
          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{featuredTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {featuredKeys.map((key, index) => {
                const page = getRichPageContent(locale, key);
                const meta = GUIDE_META[key];
                return (
                  <GuideStepCard
                    key={key}
                    href={routePath(key, locale)}
                    number={String(index + 1).padStart(2, "0")}
                    title={page.h1}
                    description={meta.purpose[locale]}
                    featured
                    featuredLabel={getVisual(locale).guideFeatured}
                  />
                );
              })}
            </div>
          </section>
          {groups.map((group) => (
            <section key={group.title} className="mb-10">
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{group.title}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.keys.map((key) => (
                  <li key={key}>
                    <Link
                      href={routePath(key, locale)}
                      className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      {getRichPageContent(locale, key as PageId).h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      }
    />
  );
}

export function RegisterGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-how-to-register" />;
}
export function LoginGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-how-to-login" />;
}
export function DepositGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-how-to-deposit" />;
}
export function WithdrawGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-how-to-withdraw" />;
}
export function PaymentMethodsGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-payment-methods" />;
}
export function MobileGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-mobile" />;
}
export function AccountSecurityGuidePageView({ locale }: { locale: Locale }) {
  return <GuidePage locale={locale} pageId="guides-account-security" />;
}

export function PromotionsHubPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "promotions");
  const keys: PageId[] = ["promotions-free-credit", "promotions-welcome", "promotions-bonus-guide"];
  const promoCardsTitle =
    locale === "ms" ? "Topik promosi" : locale === "zh" ? "优惠专题" : "Promotion topics";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "promotions", label: content.h1 }])}
      beforeBlocks={
        <>
          <section className="mb-10 grid items-start gap-8 lg:grid-cols-2">
            <PromoVisualPanel locale={locale} />
            <div className="visual-panel rounded-2xl p-6">
              <p className="text-sm leading-relaxed text-zinc-300">{content.intro[0]}</p>
            </div>
          </section>
          <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{promoCardsTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {keys.map((key) => {
              const page = getRichPageContent(locale, key);
              return (
                <Link
                  key={key}
                  href={routePath(key, locale)}
                  className="card-surface rounded-2xl p-6 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{page.h1}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{page.intro[0]}</p>
                </Link>
              );
            })}
          </div>
        </section>
        </>
      }
    />
  );
}

function PromoPage({
  locale,
  pageId,
}: {
  locale: Locale;
  pageId: Extract<PageId, "promotions-free-credit" | "promotions-welcome" | "promotions-bonus-guide">;
}) {
  const content = getRichPageContent(locale, pageId);
  const promoLabel =
    locale === "ms" ? "Promosi" : locale === "zh" ? "优惠" : "Promotions";
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "promotions", label: promoLabel },
        { key: pageId, label: content.h1 },
      ])}
      beforeBlocks={
        pageId === "promotions-free-credit" ? (
          <section className="mb-10 grid items-start gap-8 lg:grid-cols-2">
            <PromoVisualPanel locale={locale} />
            <div className="visual-panel rounded-2xl p-6">
              <p className="text-sm leading-relaxed text-zinc-300">{content.intro[0]}</p>
            </div>
          </section>
        ) : null
      }
    />
  );
}

export function FreeCreditPageView({ locale }: { locale: Locale }) {
  return <PromoPage locale={locale} pageId="promotions-free-credit" />;
}
export function WelcomePromoPageView({ locale }: { locale: Locale }) {
  return <PromoPage locale={locale} pageId="promotions-welcome" />;
}
export function BonusGuidePageView({ locale }: { locale: Locale }) {
  return <PromoPage locale={locale} pageId="promotions-bonus-guide" />;
}

export function AgentPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "agent");
  const visual = getVisual(locale);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "agent", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            {locale === "ms" ? "Aliran rujukan" : locale === "zh" ? "推荐流程" : "Referral flow"}
          </h2>
          <div className="mt-5">
            <ProcessFlow steps={visual.agentProcess} />
          </div>
        </section>
      }
    />
  );
}
export function PartnerProgramPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "partner-program");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  return (
    <RichStandardPage
      locale={locale}
      pageId="partner-program"
      trail={[
        { key: "agent", label: agentLabel },
        { key: "partner-program", label: content.h1 },
      ]}
    />
  );
}
export function AffiliateGuidePageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "affiliate-guide");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  return (
    <RichStandardPage
      locale={locale}
      pageId="affiliate-guide"
      trail={[
        { key: "agent", label: agentLabel },
        { key: "affiliate-guide", label: content.h1 },
      ]}
    />
  );
}
export function ReferralGuidePageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "referral-guide");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  return (
    <RichStandardPage
      locale={locale}
      pageId="referral-guide"
      trail={[
        { key: "agent", label: agentLabel },
        { key: "referral-guide", label: content.h1 },
      ]}
    />
  );
}
export function PartnerFaqPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "partner-faq");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  const partnerGroups = getFaqGroups(locale).filter((g) => g.id === "partner-agent");
  const partnerFaqs = flattenFaqs(partnerGroups);

  return (
    <RichPageLayout
      locale={locale}
      content={{
        ...content,
        faqs: [...(content.faqs ?? []), ...partnerFaqs],
      }}
      crumbs={richCrumbs(locale, [
        { key: "agent", label: agentLabel },
        { key: "partner-faq", label: content.h1 },
      ])}
    />
  );
}

export function FaqsPageView({ locale }: { locale: Locale }) {
  const groups = getFaqGroups(locale);
  const faqs = flattenFaqs(groups);
  const common = getCommon(locale);
  const visual = getVisual(locale);
  const titles = {
    en: {
      h1: "IWIN Malaysia Frequently Asked Questions",
      intro:
        "Practical answers about accounts, payments, games, promotions, partners and security — organised by topic so you can find relevant guidance quickly.",
      eyebrow: "Help centre",
    },
    ms: {
      h1: "Soalan Lazim IWIN Malaysia",
      intro:
        "Jawapan praktikal tentang akaun, bayaran, permainan, promosi, rakan dan keselamatan — disusun mengikut topik untuk carian pantas.",
      eyebrow: "Pusat bantuan",
    },
    zh: {
      h1: "IWIN Malaysia 常见问题",
      intro: "关于账户、支付、游戏、优惠、合作伙伴与安全的实用解答——按主题分类，便于快速查找。",
      eyebrow: "帮助中心",
    },
  }[locale];
  const faqPath = routePath("faqs", locale);
  const relatedKeys: RouteKey[] = [
    "guides-how-to-register",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "games",
    "promotions-bonus-guide",
    "agent",
    "responsible-gaming",
    "contact",
  ];

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: common.breadcrumbHome, path: routePath("home", locale) },
          { name: titles.h1, path: faqPath },
        ])}
      />
      <JsonLd
        data={webPageJsonLd({
          name: titles.h1,
          description: titles.intro,
          path: faqPath,
          locale,
        })}
      />
      <div className="border-b border-white/5 bg-iwin-charcoal/30">
        <Container className="py-6 sm:py-8">
          <Breadcrumbs
            items={[
              { label: common.breadcrumbHome, href: routePath("home", locale) },
              { label: titles.h1 },
            ]}
          />
        </Container>
      </div>
      <section className="border-b border-white/5 bg-gradient-to-br from-iwin-charcoal/80 to-black">
        <Container className="py-10 sm:py-12">
          <p className="eyebrow">{titles.eyebrow}</p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{titles.h1}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">{titles.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={routePath("guides", locale)}>{common.exploreGuides}</Button>
            <Button href={routePath("contact", locale)} variant="secondary">
              {getRichPageContent(locale, "contact").h1}
            </Button>
          </div>
        </Container>
      </section>
      <Container className="py-12 sm:py-14">
        <nav aria-label={titles.eyebrow} className="mb-10 flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#faq-${group.id}`}
              className="rounded-full border border-white/10 bg-surface-900/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
            >
              {visual.faqCategoryLabels[group.id]}
            </a>
          ))}
        </nav>
        <GroupedAccordion
          groups={groups.map((group) => ({
            id: group.id,
            label: visual.faqCategoryLabels[group.id],
            items: group.items,
          }))}
        />
        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="font-display text-xl font-semibold text-white">{common.relatedLinks}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedKeys.map((key) => (
              <li key={key}>
                <Link
                  href={routePath(key, locale)}
                  className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
                >
                  {getRelatedLinkLabel(locale, key)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}

export function ContactPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "contact");
  const channels = getActiveContactChannels();
  const channelTitle =
    locale === "ms" ? "Saluran yang disahkan" : locale === "zh" ? "已核实的联系方式" : "Verified contact options";
  const noneLabel =
    locale === "ms"
      ? "Tiada nombor WhatsApp, Telegram atau e-mel yang direka. Gunakan sokongan platform yang disahkan untuk akaun, atau halaman ini untuk pembetulan maklumat."
      : locale === "zh"
        ? "本站不编造 WhatsApp、Telegram 或电子邮件。账户问题请使用已核实的平台支持；信息勘误请使用本页说明。"
        : "No invented WhatsApp, Telegram or email addresses are published. Use verified platform support for accounts, or this page for information corrections.";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "contact", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{channelTitle}</h2>
          {channels.length ? (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card-surface block rounded-2xl p-5 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    <h3 className="font-display text-lg font-semibold text-white">{channel.label}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{channel.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300">{noneLabel}</p>
          )}
        </section>
      }
    />
  );
}
export function ResponsibleGamingPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "responsible-gaming");
  return (
    <RichStandardPage
      locale={locale}
      pageId="responsible-gaming"
      trail={[{ key: "responsible-gaming", label: content.h1 }]}
    />
  );
}
export function TermsPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "terms");
  return (
    <RichStandardPage locale={locale} pageId="terms" trail={[{ key: "terms", label: content.h1 }]} />
  );
}
export function PrivacyPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "privacy-policy");
  return (
    <RichStandardPage
      locale={locale}
      pageId="privacy-policy"
      trail={[{ key: "privacy-policy", label: content.h1 }]}
    />
  );
}
export function DisclaimerPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "disclaimer");
  return (
    <RichStandardPage
      locale={locale}
      pageId="disclaimer"
      trail={[{ key: "disclaimer", label: content.h1 }]}
    />
  );
}
