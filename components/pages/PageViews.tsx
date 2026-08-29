import Image from "next/image";
import Link from "next/link";
import {
  CategoryCard,
  ContentSections,
  FinalCtaBand,
  PageChrome,
  PageHeroBlock,
  RelatedLinks,
} from "@/components/content/PagePrimitives";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { GAME_CATEGORIES, PROVIDER_CATALOG_NOTE, PROVIDERS } from "@/content/games/catalog";
import { getCommon } from "@/content/i18n/common";
import { flattenFaqs, getFaqGroups, getHomeFaqs } from "@/content/i18n/faq";
import { getHomeContent } from "@/content/i18n/home";
import { getPageContent, type PageId } from "@/content/i18n/pages";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { faqPageJsonLd } from "@/lib/seo/json-ld";

function crumbs(locale: Locale, items: { key: RouteKey; label: string }[]) {
  const common = getCommon(locale);
  return [
    { name: common.breadcrumbHome, path: routePath("home", locale) },
    ...items.map((item) => ({
      name: item.label,
      path: routePath(item.key, locale),
    })),
  ];
}

function StandardPage({
  locale,
  pageId,
  trail,
}: {
  locale: Locale;
  pageId: PageId;
  trail: { key: RouteKey; label: string }[];
}) {
  const content = getPageContent(locale, pageId);
  const common = getCommon(locale);
  return (
    <>
      <PageChrome locale={locale} crumbs={crumbs(locale, trail)}>
        <PageHeroBlock
          locale={locale}
          content={content}
          secondaryHref={routePath("guides", locale)}
          secondaryLabel={common.exploreGuides}
        />
        <Container className="pb-16">
          <ContentSections sections={content.sections} />
          <RelatedLinks locale={locale} links={content.related} />
          <p className="mt-10 text-xs text-zinc-500">{common.lastUpdated}</p>
        </Container>
      </PageChrome>
      <FinalCtaBand
        locale={locale}
        title={content.h1}
        description={content.intro}
      />
    </>
  );
}

export function HomePageView({ locale }: { locale: Locale }) {
  const home = getHomeContent(locale);
  const common = getCommon(locale);
  const register = hasExternalUrl(SITE_CONFIG.registerUrl)
    ? SITE_CONFIG.registerUrl
    : routePath("guides-how-to-register", locale);
  const faqs = getHomeFaqs(locale);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/banner-1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        <Container className="relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iwin-yellow">
              {home.hero.eyebrow}
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {home.hero.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {home.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={register} size="lg" external={register.startsWith("http")}>
                {common.visitPlatform}
              </Button>
              <Button href={routePath("guides", locale)} variant="secondary" size="lg">
                {home.hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-zinc-400">
              {home.hero.note}
            </p>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl border border-iwin-yellow/20 shadow-[0_0_60px_rgba(245,197,24,0.12)] lg:block">
            <Image
              src="/images/hero/banner-2.png"
              alt="IWIN Malaysia promotional visual"
              fill
              sizes="560px"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading title={home.partnerBand.title} description={home.partnerBand.body} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routePath("official-partner", locale)} variant="secondary">
              {common.learnMore}
            </Button>
            <Button href={routePath("about-iwin", locale)} variant="ghost">
              {getPageContent(locale, "about-iwin").h1}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading
            eyebrow={home.categories.eyebrow}
            title={home.categories.title}
            description={home.categories.intro}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.categories.items.map((item, index) => (
              <CategoryCard
                key={item.routeKey}
                href={item.href}
                title={item.title}
                description={item.description}
                image={item.image || GAME_CATEGORIES[index]?.image || "/images/games/slots.webp"}
                priority={index < 2}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading eyebrow={home.whyIwin.eyebrow} title={home.whyIwin.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.whyIwin.features.map((feature) => (
              <article key={feature.title} className="card-surface rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading
            eyebrow={home.providers.eyebrow}
            title={home.providers.title}
            description={home.providers.intro}
          />
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
            {PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-surface-900/70 p-3"
              >
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={72}
                  height={72}
                  className="h-14 w-14 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href={home.providers.cta.href || routePath("game-providers", locale)} variant="secondary">
              {home.providers.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="grid gap-8 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={home.promotions.eyebrow}
              title={home.promotions.title}
              description={home.promotions.description}
            />
            <ul className="mt-6 space-y-2">
              {home.promotions.conditions.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-zinc-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-iwin-yellow" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={home.promotions.cta.href || routePath("promotions-free-credit", locale)}>
                {home.promotions.cta.label}
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/games/promo.webp"
              alt="IWIN promotions visual"
              fill
              sizes="(max-width:1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading
            eyebrow={home.guides.eyebrow}
            title={home.guides.title}
            description={home.guides.description}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {home.guides.items.map((item) => (
              <Link
                key={item.routeKey}
                href={item.href}
                className="card-surface rounded-2xl p-6 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{item.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Button href={home.guides.cta.href || routePath("guides", locale)} variant="secondary">
              {home.guides.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="grid gap-8 py-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/games/agent.webp"
              alt="IWIN agent programme visual"
              fill
              sizes="(max-width:1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={home.agent.eyebrow}
              title={home.agent.title}
              description={home.agent.description}
            />
            <ul className="mt-6 space-y-2">
              {home.agent.points.map((point) => (
                <li key={point} className="text-sm text-zinc-300">
                  • {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={home.agent.cta.href || routePath("agent", locale)}>
                {home.agent.cta.label}
              </Button>
              {hasExternalUrl(SITE_CONFIG.agentUrl) ? (
                <Button href={SITE_CONFIG.agentUrl} variant="secondary" external>
                  {common.visitPlatform}
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <SectionHeading eyebrow={home.faq.eyebrow} title={home.faq.title} />
          <div className="mt-8">
            <Accordion items={home.faq.items} />
          </div>
          <div className="mt-6">
            <Button href={home.faq.cta.href || routePath("faqs", locale)} variant="secondary">
              {home.faq.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-band">
        <Container className="py-14">
          <div className="card-surface rounded-2xl p-8 sm:p-10">
            <SectionHeading
              title={home.responsibleBand.title}
              description={home.responsibleBand.description}
            />
            <div className="mt-6">
              <Button
                href={home.responsibleBand.cta.href || routePath("responsible-gaming", locale)}
                variant="secondary"
              >
                {home.responsibleBand.cta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCtaBand
        locale={locale}
        title={home.finalCta.title}
        description={home.finalCta.description}
      />
    </>
  );
}

export function AboutPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "about-iwin");
  return (
    <StandardPage
      locale={locale}
      pageId="about-iwin"
      trail={[{ key: "about-iwin", label: content.h1 }]}
    />
  );
}

export function OfficialPartnerPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "official-partner");
  return (
    <StandardPage
      locale={locale}
      pageId="official-partner"
      trail={[{ key: "official-partner", label: content.h1 }]}
    />
  );
}

export function GamesHubPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "games");
  const common = getCommon(locale);
  return (
    <>
      <PageChrome locale={locale} crumbs={crumbs(locale, [{ key: "games", label: content.h1 }])}>
        <PageHeroBlock locale={locale} content={content} secondaryHref={routePath("game-providers", locale)} />
        <Container className="pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GAME_CATEGORIES.map((cat, index) => (
              <CategoryCard
                key={cat.id}
                href={routePath(cat.routeKey, locale)}
                title={cat.name}
                description={content.sections[0]?.bullets?.[index] || content.intro}
                image={cat.image}
              />
            ))}
          </div>
          <div className="mt-12">
            <ContentSections sections={content.sections} />
          </div>
          <RelatedLinks locale={locale} links={content.related} />
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={common.exploreGuides} />
    </>
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
  const content = getPageContent(locale, pageId);
  const category = GAME_CATEGORIES.find((c) => c.routeKey === pageId);
  return (
    <>
      <PageChrome
        locale={locale}
        crumbs={crumbs(locale, [
          { key: "games", label: parentLabel },
          { key: pageId, label: content.h1 },
        ])}
      >
        <PageHeroBlock locale={locale} content={content} secondaryHref={routePath("guides", locale)} />
        <Container className="pb-16">
          {category ? (
            <div className="relative mb-10 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={category.image}
                alt={content.h1}
                fill
                sizes="(max-width:768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
          <ContentSections sections={content.sections} />
          <RelatedLinks locale={locale} links={content.related} />
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={content.intro} />
    </>
  );
}

export function SlotsPageView({ locale }: { locale: Locale }) {
  return <GameCategoryPage locale={locale} pageId="games-slots" parentLabel="Games" />;
}
export function LiveCasinoPageView({ locale }: { locale: Locale }) {
  return <GameCategoryPage locale={locale} pageId="games-live-casino" parentLabel="Games" />;
}
export function SportsPageView({ locale }: { locale: Locale }) {
  return <GameCategoryPage locale={locale} pageId="games-sports" parentLabel="Games" />;
}
export function Lottery4dPageView({ locale }: { locale: Locale }) {
  return <GameCategoryPage locale={locale} pageId="games-4d" parentLabel="Games" />;
}

export function ProvidersPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "game-providers");
  return (
    <>
      <PageChrome
        locale={locale}
        crumbs={crumbs(locale, [{ key: "game-providers", label: content.h1 }])}
      >
        <PageHeroBlock locale={locale} content={content} secondaryHref={routePath("games", locale)} />
        <Container className="pb-16">
          <p className="mb-8 text-sm text-zinc-400">{PROVIDER_CATALOG_NOTE}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROVIDERS.map((provider) => (
              <article key={provider.name} className="card-surface rounded-2xl p-5">
                <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-black/40">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white">{provider.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{provider.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ContentSections sections={content.sections} />
          </div>
          <RelatedLinks locale={locale} links={content.related} />
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={content.intro} />
    </>
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
  const content = getPageContent(locale, pageId);
  const trail =
    pageId === "guides"
      ? [{ key: "guides" as const, label: content.h1 }]
      : [
          { key: "guides" as const, label: "Guides" },
          { key: pageId, label: content.h1 },
        ];
  return <StandardPage locale={locale} pageId={pageId} trail={trail} />;
}

export function GuidesHubPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "guides");
  const guideKeys: RouteKey[] = [
    "guides-how-to-register",
    "guides-how-to-login",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "guides-payment-methods",
    "guides-mobile",
    "guides-account-security",
  ];
  return (
    <>
      <PageChrome locale={locale} crumbs={crumbs(locale, [{ key: "guides", label: content.h1 }])}>
        <PageHeroBlock locale={locale} content={content} />
        <Container className="pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideKeys.map((key) => {
              const page = getPageContent(locale, key as PageId);
              return (
                <Link
                  key={key}
                  href={routePath(key, locale)}
                  className="card-surface rounded-2xl p-6 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <h2 className="font-display text-lg font-semibold text-white">{page.h1}</h2>
                  <p className="mt-3 line-clamp-3 text-sm text-zinc-300">{page.intro}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-12">
            <ContentSections sections={content.sections} />
          </div>
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={content.intro} />
    </>
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
  const content = getPageContent(locale, "promotions");
  const keys: PageId[] = ["promotions-free-credit", "promotions-welcome", "promotions-bonus-guide"];
  return (
    <>
      <PageChrome locale={locale} crumbs={crumbs(locale, [{ key: "promotions", label: content.h1 }])}>
        <PageHeroBlock locale={locale} content={content} />
        <Container className="pb-16">
          <div className="grid gap-4 md:grid-cols-3">
            {keys.map((key) => {
              const page = getPageContent(locale, key);
              return (
                <Link
                  key={key}
                  href={routePath(key, locale)}
                  className="card-surface rounded-2xl p-6 transition hover:border-iwin-yellow/40"
                >
                  <h2 className="font-display text-lg font-semibold text-white">{page.h1}</h2>
                  <p className="mt-3 text-sm text-zinc-300">{page.intro}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-12">
            <ContentSections sections={content.sections} />
          </div>
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={content.intro} />
    </>
  );
}

function PromoPage({
  locale,
  pageId,
}: {
  locale: Locale;
  pageId: Extract<PageId, "promotions-free-credit" | "promotions-welcome" | "promotions-bonus-guide">;
}) {
  const content = getPageContent(locale, pageId);
  return (
    <StandardPage
      locale={locale}
      pageId={pageId}
      trail={[
        { key: "promotions", label: "Promotions" },
        { key: pageId, label: content.h1 },
      ]}
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
  const content = getPageContent(locale, "agent");
  return (
    <StandardPage locale={locale} pageId="agent" trail={[{ key: "agent", label: content.h1 }]} />
  );
}
export function PartnerProgramPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "partner-program");
  return (
    <StandardPage
      locale={locale}
      pageId="partner-program"
      trail={[
        { key: "agent", label: "Agent" },
        { key: "partner-program", label: content.h1 },
      ]}
    />
  );
}
export function AffiliateGuidePageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "affiliate-guide");
  return (
    <StandardPage
      locale={locale}
      pageId="affiliate-guide"
      trail={[
        { key: "agent", label: "Agent" },
        { key: "affiliate-guide", label: content.h1 },
      ]}
    />
  );
}
export function ReferralGuidePageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "referral-guide");
  return (
    <StandardPage
      locale={locale}
      pageId="referral-guide"
      trail={[
        { key: "agent", label: "Agent" },
        { key: "referral-guide", label: content.h1 },
      ]}
    />
  );
}
export function PartnerFaqPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "partner-faq");
  const groups = getFaqGroups(locale).filter((g) => g.id === "partner-agent");
  const faqs = flattenFaqs(groups);
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageChrome
        locale={locale}
        crumbs={crumbs(locale, [
          { key: "agent", label: "Agent" },
          { key: "partner-faq", label: content.h1 },
        ])}
      >
        <PageHeroBlock locale={locale} content={content} />
        <Container className="pb-16">
          <ContentSections sections={content.sections} />
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
          <RelatedLinks locale={locale} links={content.related} />
        </Container>
      </PageChrome>
      <FinalCtaBand locale={locale} title={content.h1} description={content.intro} />
    </>
  );
}

export function FaqsPageView({ locale }: { locale: Locale }) {
  const groups = getFaqGroups(locale);
  const faqs = flattenFaqs(groups);
  const common = getCommon(locale);
  const titles = {
    en: {
      h1: "IWIN Malaysia Frequently Asked Questions",
      intro: "Practical answers about accounts, payments, games, promotions, partners and security.",
    },
    ms: {
      h1: "Soalan Lazim IWIN Malaysia",
      intro: "Jawapan praktikal tentang akaun, bayaran, permainan, promosi, rakan dan keselamatan.",
    },
    zh: {
      h1: "IWIN Malaysia 常见问题",
      intro: "关于账户、支付、游戏、优惠、合作伙伴与安全的实用解答。",
    },
  }[locale];

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageChrome locale={locale} crumbs={crumbs(locale, [{ key: "faqs", label: titles.h1 }])}>
        <Container className="py-10 sm:py-14">
          <SectionHeading title={titles.h1} description={titles.intro} as="h1" />
        </Container>
        <Container className="pb-16">
          <div className="space-y-10">
            {groups.map((group) => (
              <section key={group.id}>
                <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                  {group.title}
                </h2>
                <Accordion items={group.items} />
              </section>
            ))}
          </div>
          <RelatedLinks
            locale={locale}
            links={[
              { key: "guides", label: common.exploreGuides },
              { key: "contact", label: "Contact" },
              { key: "responsible-gaming", label: "Responsible Gaming" },
            ]}
          />
        </Container>
      </PageChrome>
    </>
  );
}

export function ContactPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "contact");
  return (
    <StandardPage locale={locale} pageId="contact" trail={[{ key: "contact", label: content.h1 }]} />
  );
}
export function ResponsibleGamingPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "responsible-gaming");
  return (
    <StandardPage
      locale={locale}
      pageId="responsible-gaming"
      trail={[{ key: "responsible-gaming", label: content.h1 }]}
    />
  );
}
export function TermsPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "terms");
  return (
    <StandardPage locale={locale} pageId="terms" trail={[{ key: "terms", label: content.h1 }]} />
  );
}
export function PrivacyPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "privacy-policy");
  return (
    <StandardPage
      locale={locale}
      pageId="privacy-policy"
      trail={[{ key: "privacy-policy", label: content.h1 }]}
    />
  );
}
export function DisclaimerPageView({ locale }: { locale: Locale }) {
  const content = getPageContent(locale, "disclaimer");
  return (
    <StandardPage
      locale={locale}
      pageId="disclaimer"
      trail={[{ key: "disclaimer", label: content.h1 }]}
    />
  );
}
