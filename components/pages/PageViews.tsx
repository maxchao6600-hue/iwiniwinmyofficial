import Image from "next/image";
import Link from "next/link";
import {
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
import { getVisual, getMarqueeItems } from "@/content/i18n/visual";
import { getRichPageContent, type PageId } from "@/content/i18n/rich";
import { getRelatedLinkLabel } from "@/content/i18n/rich/related-labels";
import { GUIDE_META } from "@/content/i18n/rich/related";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import {
  AgentSplitPanel,
  BrandEditorialPanel,
  ClusterNavCard,
  ContactVisualPanel,
  EcosystemComposition,
  GuideNavCard,
  JourneyComposition,
  MasonryCategoryGrid,
  PartnerFlowComposition,
  PremiumDataTable,
  ProcessFlow,
  PromoFactCards,
  PromoHeroComposition,
  ProviderLogoGrid,
  ResponsibleEditorial,
  SplitCategorySection,
} from "@/components/visual/VisualPanels";
import {
  FAQPreview,
  FeatureGrid,
  LegalSectionNav,
  MarqueeTicker,
  ProcessTimeline,
  SupportTopicGrid,
  TopicNavigation,
  WarningPanel,
} from "@/components/visual/EditorialPrimitives";
import { SITE_CONFIG, getActiveContactChannels, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import type { RichBlock } from "@/content/i18n/rich/types";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/seo/json-ld";

function sectionNavFromBlocks(blocks: readonly RichBlock[]) {
  return blocks
    .filter((b) => "title" in b && typeof b.title === "string" && b.title.length > 0)
    .map((b, index) => ({
      id: `section-${index}`,
      label: (b as { title: string }).title,
    }));
}

const CATEGORY_PAGE_IDS = {
  "games-slots": "slots",
  "games-live-casino": "live-casino",
  "games-sports": "sports",
  "games-4d": "4d",
} as const;

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
  const masonryItems = home.categories.items.map((item) => {
    const category = GAME_CATEGORIES.find((cat) => cat.routeKey === item.routeKey);
    return {
      href: item.href,
      title: item.title,
      description: item.description,
      image: category?.image ?? item.image ?? VISUAL_IMAGES.category.slots,
      alt: category?.alt[locale] ?? item.title,
      objectPosition: category?.objectPosition,
    };
  });

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
      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/5 sm:min-h-[75vh]">
        <div className="absolute inset-0">
          <Image
            src={VISUAL_IMAGES.hero.home}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%] opacity-55"
          />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/78 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/55" />
        </div>
        <Container className="relative flex min-h-[70vh] flex-col justify-end py-14 sm:min-h-[75vh] sm:py-16 lg:py-20">
          <div className="relative mb-5 h-10 w-[148px]">
            <Image src={VISUAL_IMAGES.brand.logo} alt="" fill sizes="148px" className="object-contain object-left" priority />
          </div>
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
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

      <MarqueeTicker
        items={getMarqueeItems(locale, "brand")}
        variant="gold"
        ariaLabel={visual.ecosystem.subtitle}
      />

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow={home.aboutIwin.eyebrow}
                title={home.aboutIwin.title}
                description={home.aboutIwin.paragraphs[0]}
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {home.aboutIwin.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {home.aboutIwin.points.map((point) => (
                  <li key={point} className="border-l-2 border-iwin-yellow/40 pl-4 text-sm text-zinc-300">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={routePath("about-iwin", locale)} variant="secondary">
                  {getRichPageContent(locale, "about-iwin").h1}
                </Button>
                <Button href={routePath("official-partner", locale)} variant="ghost">
                  {getRichPageContent(locale, "official-partner").h1}
                </Button>
              </div>
            </div>
            <EcosystemComposition locale={locale} />
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-12 sm:py-14">
          <BrandEditorialPanel
            locale={locale}
            title={home.partnerBand.title}
            body={home.partnerBand.body}
          />
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

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <SectionHeading eyebrow={home.clusterLinks.eyebrow} title={home.clusterLinks.title} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.clusterLinks.items.map((item) => (
              <ClusterNavCard
                key={item.routeKey}
                href={item.href}
                label={item.label}
                description={item.description}
                routeKey={item.routeKey}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-12 sm:py-14">
          <SectionHeading
            eyebrow={home.categories.eyebrow}
            title={home.categories.title}
            description={home.categories.intro}
          />
          <div className="mt-8">
            <MasonryCategoryGrid
              locale={locale}
              items={masonryItems}
              actionLabel={visual.exploreCategory}
            />
          </div>
        </Container>
      </section>

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-[420px]">
              <Image
                src={VISUAL_IMAGES.hero.banner2}
                alt=""
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <SectionHeading eyebrow={home.whyIwin.eyebrow} title={home.whyIwin.title} />
              </div>
            </div>
            <div className="grid gap-5">
              {home.whyIwin.features.map((feature) => (
                <article key={feature.title} className="border-l-2 border-iwin-yellow/40 pl-5">
                  <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-12 sm:py-14">
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

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <PromoHeroComposition locale={locale} />
            <div>
              <SectionHeading
                eyebrow={home.promotions.eyebrow}
                title={home.promotions.title}
                description={home.promotions.description}
              />
              <PromoFactCards locale={locale} items={home.promotions.conditions} />
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
        <Container className="py-12 sm:py-14">
          <SectionHeading
            eyebrow={home.guides.eyebrow}
            title={home.guides.title}
            description={home.guides.description}
          />
          <div className="mt-8">
            <JourneyComposition locale={locale} />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.guides.items.map((item, index) => (
              <GuideNavCard
                key={item.routeKey}
                href={item.href}
                number={String(index + 1).padStart(2, "0")}
                title={item.title}
                description={item.description}
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

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <AgentSplitPanel
            locale={locale}
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
        <Container className="py-12 sm:py-14">
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

      <section className="section-media">
        <Container className="py-12 sm:py-14">
          <p className="mb-4 max-w-3xl text-base leading-relaxed text-zinc-400">
            {home.responsibleBand.description}
          </p>
          <ResponsibleEditorial locale={locale} />
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
          <PartnerFlowComposition locale={locale} />
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
          <PartnerFlowComposition locale={locale} />
          <EcosystemComposition locale={locale} />
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
          <MarqueeTicker
            items={getMarqueeItems(locale, "games")}
            variant="subtle"
            className="mb-8 rounded-xl"
          />
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
            <div className="mt-6">
              <MasonryCategoryGrid
                locale={locale}
                items={GAME_CATEGORIES.map((cat, index) => ({
                  href: routePath(cat.routeKey, locale),
                  title: getGameCategoryName(cat.id, locale),
                  description: hub.sections[index]?.intro ?? "",
                  image: cat.image,
                  alt: cat.alt[locale],
                  objectPosition: cat.objectPosition,
                }))}
                actionLabel={getVisual(locale).exploreCategory}
              />
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
  const catId = CATEGORY_PAGE_IDS[pageId];
  const category = GAME_CATEGORIES.find((c) => c.id === catId);

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "games", label: parentLabel },
        { key: pageId, label: content.h1 },
      ])}
      beforeBlocks={
        category ? (
          <section className="mb-10">
            <SplitCategorySection
              title={content.h1}
              intro={content.intro[0] ?? ""}
              bullets={[]}
              image={category.image}
              alt={category.alt[locale]}
              objectPosition={category.objectPosition}
              imageFirst
            />
          </section>
        ) : null
      }
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
      beforeBlocks={
        <MarqueeTicker
          items={getMarqueeItems(locale, "games")}
          variant="subtle"
          className="mb-8 rounded-xl"
        />
      }
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
  const visual = getVisual(locale);
  const guidesLabel =
    locale === "ms" ? "Panduan" : locale === "zh" ? "指南" : "Guides";
  const trail =
    pageId === "guides"
      ? [{ key: "guides" as const, label: content.h1 }]
      : [
          { key: "guides" as const, label: guidesLabel },
          { key: pageId, label: content.h1 },
        ];
  const isSecurityGuide = pageId === "guides-account-security";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, trail)}
      beforeBlocks={
        isSecurityGuide ? (
          <MarqueeTicker
            items={getMarqueeItems(locale, "security")}
            variant="subtle"
            className="mb-8 rounded-xl"
          />
        ) : null
      }
      afterBlocks={
        isSecurityGuide ? (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {visual.securityCenter.heading}
            </h2>
            <div className="mt-6">
              <FeatureGrid items={visual.securityCenter.panels} />
            </div>
            <div className="mt-6">
              <WarningPanel title={visual.playResponsibly}>
                {visual.responsible.items.map((item) => item.description).join(" ")}
              </WarningPanel>
            </div>
          </section>
        ) : null
      }
    />
  );
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
          <MarqueeTicker
            items={getMarqueeItems(locale, "guides")}
            variant="subtle"
            className="mb-8 rounded-xl"
          />
          <section className="mb-10">
            <JourneyComposition locale={locale} />
          </section>
          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{featuredTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {featuredKeys.map((key, index) => {
                const page = getRichPageContent(locale, key);
                const meta = GUIDE_META[key];
                return (
                  <GuideNavCard
                    key={key}
                    href={routePath(key, locale)}
                    number={String(index + 1).padStart(2, "0")}
                    title={page.h1}
                    description={meta.purpose[locale]}
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
            <PromoHeroComposition locale={locale} />
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
            <PromoHeroComposition locale={locale} />
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
      beforeBlocks={
        <>
          <MarqueeTicker
            items={getMarqueeItems(locale, "partner")}
            variant="subtle"
            className="mb-8 rounded-xl"
          />
          <section className="mb-10 grid items-start gap-8 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[360px]">
              <Image
                src={VISUAL_IMAGES.agent}
                alt={content.h1}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="visual-panel rounded-2xl p-6 sm:p-8">
              <p className="eyebrow">{content.eyebrow}</p>
              <h2 className="font-display mt-3 text-xl font-semibold text-white sm:text-2xl">
                {content.h1}
              </h2>
              <div className="mt-6">
                <ProcessTimeline steps={visual.agentTimeline} />
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
export function PartnerProgramPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "partner-program");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "agent", label: agentLabel },
        { key: "partner-program", label: content.h1 },
      ])}
      beforeBlocks={
        <section className="mb-10">
          <PartnerFlowComposition locale={locale} />
        </section>
      }
    />
  );
}
export function AffiliateGuidePageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "affiliate-guide");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  const disclosureTitle =
    locale === "ms" ? "Pendedahan & pematuhan" : locale === "zh" ? "披露与合规" : "Disclosure & compliance";
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "agent", label: agentLabel },
        { key: "affiliate-guide", label: content.h1 },
      ])}
      beforeBlocks={
        <section className="mb-10">
          <WarningPanel title={disclosureTitle}>
            {content.intro[0]}
          </WarningPanel>
        </section>
      }
    />
  );
}
export function ReferralGuidePageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "referral-guide");
  const agentLabel = locale === "ms" ? "Ejen" : locale === "zh" ? "代理" : "Agent";
  const visual = getVisual(locale);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [
        { key: "agent", label: agentLabel },
        { key: "referral-guide", label: content.h1 },
      ])}
      beforeBlocks={
        <section className="mb-10">
          <ProcessFlow steps={visual.agentProcess} />
        </section>
      }
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
        <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{visual.helpBrowseTopics}</h2>
        <div className="mt-6">
          <TopicNavigation
            items={groups.map((group) => ({
              id: group.id,
              label: visual.faqCategoryLabels[group.id],
              description: visual.faqCategoryDescriptions[group.id],
              count: group.items.length,
              countLabel: visual.faqQuestionCount,
            }))}
          />
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{visual.helpQuickAnswers}</h2>
          <div className="mt-6">
            <FAQPreview
              items={groups.flatMap((g) => g.items.slice(0, 1)).slice(0, 4)}
            />
          </div>
        </section>

        <nav aria-label={titles.eyebrow} className="my-10 flex flex-wrap gap-2 lg:hidden">
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
  const visual = getVisual(locale);
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
      beforeBlocks={
        <section className="mb-10">
          <SectionHeading
            title={visual.contactSupport.heading}
            description={visual.contactSupport.subheading}
          />
          <div className="mt-8">
            <SupportTopicGrid topics={visual.contactSupport.topics} />
          </div>
        </section>
      }
      afterBlocks={
        <>
          <section className="mt-10">
            <ContactVisualPanel title={channelTitle} description={noneLabel} />
          </section>
          <section className="mt-12">
            {channels.length ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {channels.map((channel) => (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="relative block overflow-hidden rounded-2xl border border-white/10 p-5 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
                    >
                      <h3 className="font-display text-lg font-semibold text-white">{channel.label}</h3>
                      <p className="mt-2 text-sm text-zinc-300">{channel.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        </>
      }
    />
  );
}
export function ResponsibleGamingPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "responsible-gaming");
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "responsible-gaming", label: content.h1 }])}
      afterBlocks={
        <section className="mt-12">
          <ResponsibleEditorial locale={locale} />
        </section>
      }
    />
  );
}
export function TermsPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "terms");
  const sections = sectionNavFromBlocks(content.blocks);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "terms", label: content.h1 }])}
      beforeBlocks={
        sections.length > 0 ? (
          <aside className="mb-10 lg:float-right lg:ml-8 lg:w-56">
            <LegalSectionNav sections={sections} />
          </aside>
        ) : null
      }
    />
  );
}
export function PrivacyPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "privacy-policy");
  const sections = sectionNavFromBlocks(content.blocks);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "privacy-policy", label: content.h1 }])}
      beforeBlocks={
        sections.length > 0 ? (
          <aside className="mb-10 lg:float-right lg:ml-8 lg:w-56">
            <LegalSectionNav sections={sections} />
          </aside>
        ) : null
      }
    />
  );
}
export function DisclaimerPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "disclaimer");
  const sections = sectionNavFromBlocks(content.blocks);
  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "disclaimer", label: content.h1 }])}
      beforeBlocks={
        sections.length > 0 ? (
          <aside className="mb-10 lg:float-right lg:ml-8 lg:w-56">
            <LegalSectionNav sections={sections} />
          </aside>
        ) : null
      }
    />
  );
}
