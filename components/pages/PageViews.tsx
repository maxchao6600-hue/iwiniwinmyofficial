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
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { GAME_CATEGORIES, PROVIDER_CATALOG_NOTE, PROVIDERS } from "@/content/games/catalog";
import { getCommon } from "@/content/i18n/common";
import { flattenFaqs, getFaqGroups, getHomeFaqs } from "@/content/i18n/faq";
import { getHomeContent } from "@/content/i18n/home";
import { getRichPageContent, type PageId } from "@/content/i18n/rich";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { faqPageJsonLd } from "@/lib/seo/json-ld";

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
              {getRichPageContent(locale, "about-iwin").h1}
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
  const content = getRichPageContent(locale, "about-iwin");
  return (
    <RichStandardPage
      locale={locale}
      pageId="about-iwin"
      trail={[{ key: "about-iwin", label: content.h1 }]}
    />
  );
}

export function OfficialPartnerPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "official-partner");
  return (
    <RichStandardPage
      locale={locale}
      pageId="official-partner"
      trail={[{ key: "official-partner", label: content.h1 }]}
    />
  );
}

export function GamesHubPageView({ locale }: { locale: Locale }) {
  const content = getRichPageContent(locale, "games");
  const exploreLabel =
    locale === "ms"
      ? "Terokai kategori permainan"
      : locale === "zh"
        ? "浏览游戏类别"
        : "Explore IWIN game categories";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "games", label: content.h1 }])}
      beforeBlocks={
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {exploreLabel}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GAME_CATEGORIES.map((cat, index) => (
              <CategoryCard
                key={cat.id}
                href={routePath(cat.routeKey, locale)}
                title={cat.name}
                description={content.blocks[1]?.type === "grid" ? content.blocks[1].items[index]?.description ?? "" : ""}
                image={cat.image}
                priority={index < 2}
              />
            ))}
          </div>
        </section>
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
  const category = GAME_CATEGORIES.find((c) => c.routeKey === pageId);

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
        ) : null
      }
    />
  );
}

export function SlotsPageView({ locale }: { locale: Locale }) {
  const gamesLabel = getRichPageContent(locale, "games").h1;
  return <GameCategoryPage locale={locale} pageId="games-slots" parentLabel={gamesLabel} />;
}
export function LiveCasinoPageView({ locale }: { locale: Locale }) {
  const gamesLabel = getRichPageContent(locale, "games").h1;
  return <GameCategoryPage locale={locale} pageId="games-live-casino" parentLabel={gamesLabel} />;
}
export function SportsPageView({ locale }: { locale: Locale }) {
  const gamesLabel = getRichPageContent(locale, "games").h1;
  return <GameCategoryPage locale={locale} pageId="games-sports" parentLabel={gamesLabel} />;
}
export function Lottery4dPageView({ locale }: { locale: Locale }) {
  const gamesLabel = getRichPageContent(locale, "games").h1;
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
                <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
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
  const guideKeys: RouteKey[] = [
    "guides-how-to-register",
    "guides-how-to-login",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "guides-payment-methods",
    "guides-mobile",
    "guides-account-security",
  ];
  const hubCardsTitle =
    locale === "ms" ? "Panduan mengikut topik" : locale === "zh" ? "按主题浏览指南" : "Guides by topic";

  return (
    <RichPageLayout
      locale={locale}
      content={content}
      crumbs={richCrumbs(locale, [{ key: "guides", label: content.h1 }])}
      beforeBlocks={
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{hubCardsTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideKeys.map((key) => {
              const page = getRichPageContent(locale, key as PageId);
              return (
                <Link
                  key={key}
                  href={routePath(key, locale)}
                  className="card-surface rounded-2xl p-6 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{page.h1}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-300">{page.intro[0]}</p>
                </Link>
              );
            })}
          </div>
        </section>
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
    <RichStandardPage
      locale={locale}
      pageId={pageId}
      trail={[
        { key: "promotions", label: promoLabel },
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
  const content = getRichPageContent(locale, "agent");
  return (
    <RichStandardPage locale={locale} pageId="agent" trail={[{ key: "agent", label: content.h1 }]} />
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

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iwin-yellow">{titles.eyebrow}</p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{titles.h1}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">{titles.intro}</p>
        </Container>
      </section>
      <Container className="py-12 sm:py-14">
        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{group.title}</h2>
              <p className="mt-2 max-w-3xl text-sm text-zinc-400">
                {group.items.length}{" "}
                {locale === "ms" ? "soalan" : locale === "zh" ? "个问题" : "questions"}
              </p>
              <div className="mt-5">
                <Accordion items={group.items} />
              </div>
            </section>
          ))}
        </div>
        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="font-display text-xl font-semibold text-white">{common.relatedLinks}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { key: "guides" as const, label: common.exploreGuides },
              { key: "contact" as const, label: getRichPageContent(locale, "contact").h1 },
              { key: "responsible-gaming" as const, label: getRichPageContent(locale, "responsible-gaming").h1 },
            ].map((link) => (
              <li key={link.key}>
                <Link
                  href={routePath(link.key, locale)}
                  className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 text-sm text-zinc-200 transition hover:border-iwin-yellow/40 hover:text-white"
                >
                  {link.label}
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
  return (
    <RichStandardPage locale={locale} pageId="contact" trail={[{ key: "contact", label: content.h1 }]} />
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
