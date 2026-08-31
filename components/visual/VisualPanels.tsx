import Image from "next/image";
import Link from "next/link";
import { GAME_CATEGORIES, PROVIDERS, getGameCategoryName } from "@/content/games/catalog";
import { getVisual } from "@/content/i18n/visual";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import type { Locale } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils/cn";

/** Brand-centered collage using real category artwork. */
export function EcosystemComposition({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  const tiles = [
    { src: VISUAL_IMAGES.category.slots, label: v.ecosystem.nodes[0], pos: "object-center" },
    { src: VISUAL_IMAGES.category["live-casino"], label: v.ecosystem.nodes[1], pos: "object-top" },
    { src: VISUAL_IMAGES.category.sports, label: v.ecosystem.nodes[2], pos: "object-[center_35%]" },
    { src: VISUAL_IMAGES.agent, label: v.ecosystem.nodes[3], pos: "object-center" },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-iwin-yellow/20 bg-black">
      <div className="grid grid-cols-2 gap-1">
        {tiles.map((tile) => (
          <div key={tile.label} className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={tile.src}
              alt=""
              fill
              sizes="(max-width:1024px) 50vw, 280px"
              className={cn("object-cover opacity-70", tile.pos)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <p className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {tile.label}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-2xl border border-iwin-yellow/45 bg-black/80 px-6 py-5 text-center shadow-[0_0_60px_rgba(245,197,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-6">
          <div className="relative mx-auto mb-3 h-10 w-[120px]">
            <Image src={VISUAL_IMAGES.brand.logo} alt="" fill sizes="120px" className="object-contain" />
          </div>
          <p className="font-display text-2xl font-semibold text-iwin-yellow sm:text-3xl">{v.ecosystem.hub}</p>
          <p className="mt-1 max-w-[14rem] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
            {v.ecosystem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Large partner-boundary editorial composition with brand imagery. */
export function PartnerFlowComposition({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0">
        <Image
          src={VISUAL_IMAGES.hero.banner2}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 560px"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
        <div className="absolute inset-0 hero-glow opacity-60" />
      </div>
      <ol className="relative space-y-0 px-5 py-8 sm:px-8 sm:py-10">
        {v.partnerFlow.map((step, index) => (
          <li key={step} className="flex flex-col items-center">
            <div
              className={cn(
                "w-full max-w-md rounded-xl border px-5 py-4 text-center",
                index === 0
                  ? "border-iwin-yellow/50 bg-black/55 text-white"
                  : index === v.partnerFlow.length - 1
                    ? "border-white/15 bg-black/40 text-zinc-300"
                    : "border-white/10 bg-black/45 text-zinc-200",
              )}
            >
              {index === 0 ? (
                <p className="font-display text-lg font-semibold sm:text-xl">{step}</p>
              ) : (
                <p className="text-sm font-medium sm:text-base">{step}</p>
              )}
            </div>
            {index < v.partnerFlow.length - 1 ? (
              <div className="my-2 flex flex-col items-center" aria-hidden="true">
                <div className="h-6 w-px bg-gradient-to-b from-iwin-yellow/60 to-iwin-yellow/15" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Cinematic promo panel using promo artwork + large typography. */
export function PromoHeroComposition({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-iwin-yellow/25 sm:min-h-[380px]">
      <Image
        src={VISUAL_IMAGES.promotion}
        alt=""
        fill
        sizes="(max-width:1024px) 100vw, 560px"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,0.22),transparent_50%)]" />
      <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iwin-yellow">{v.promo.freeCredit}</p>
        <p className="font-display mt-2 text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
          {v.promo.amount}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/15 pt-5">
          <div>
            <p className="font-display text-xl font-semibold text-iwin-yellow sm:text-2xl">{v.promo.turnoverValue}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{v.promo.turnoverLabel}</p>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-iwin-yellow sm:text-2xl">{v.promo.claimValue}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{v.promo.claimLabel}</p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold leading-snug text-white sm:text-base">{v.promo.eligibilityValue}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{v.promo.eligibilityLabel}</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-zinc-400">{v.promo.verifyNote}</p>
      </div>
    </div>
  );
}

/** Editorial user-journey ribbon over hero imagery. */
export function JourneyComposition({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0">
        <Image
          src={VISUAL_IMAGES.hero.banner3}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/75" />
      </div>
      <div className="relative px-5 py-8 sm:px-8 sm:py-10">
        <p className="eyebrow">{v.journey.title}</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {v.journey.steps.map((step, index) => (
            <li key={step.label} className="relative">
              <p className="font-display text-4xl font-bold text-iwin-yellow/25 sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-2 text-lg font-semibold text-white">{step.label}</p>
              <p className="mt-1 text-sm text-zinc-400">{step.hint}</p>
              {index < v.journey.steps.length - 1 ? (
                <span
                  className="absolute -right-2 top-6 hidden text-iwin-yellow/40 xl:block"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Masonry-style category showcase — image dominant. */
export function MasonryCategoryGrid({
  locale,
  items,
  actionLabel,
}: {
  locale: Locale;
  items: readonly {
    href: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    objectPosition?: string;
  }[];
  actionLabel: string;
}) {
  const [first, second, ...rest] = items;
  if (!first) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
      <Link
        href={first.href}
        className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 lg:col-span-7 lg:row-span-2 lg:min-h-[520px]"
      >
        <Image
          src={first.image}
          alt={first.alt}
          fill
          priority
          sizes="(max-width:1024px) 100vw, 60vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: first.objectPosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-iwin-yellow">
            {getVisual(locale).featuredCategory}
          </p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">{first.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">{first.description}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-iwin-yellow">
            {actionLabel} →
          </p>
        </div>
      </Link>

      {second ? (
        <Link
          href={second.href}
          className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 lg:col-span-5 lg:min-h-0"
        >
          <Image
            src={second.image}
            alt={second.alt}
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: second.objectPosition ?? "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h3 className="font-display text-2xl font-semibold text-white">{second.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-zinc-300">{second.description}</p>
          </div>
        </Link>
      ) : null}

      {rest.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative min-h-[180px] overflow-hidden rounded-2xl border border-white/10 lg:col-span-5 lg:min-h-0"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: item.objectPosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-300">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** Calm editorial responsible-gaming panel — no casino imagery. */
export function ResponsibleEditorial({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0c0c0e_0%,#151518_55%,#0a0a0c_100%)]">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-iwin-yellow/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full border border-iwin-yellow/15" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-28 w-28 rounded-full border border-iwin-yellow/10" />
      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">{v.playResponsibly}</p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {v.responsible.headline}
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-iwin-yellow to-transparent" aria-hidden="true" />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {v.responsible.items.map((item) => (
            <li key={item.title} className="border-l-2 border-iwin-yellow/40 pl-4">
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProcessFlow({
  steps,
  className,
}: {
  steps: readonly string[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-black/40", className)}>
      <ol className="flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex flex-1 items-center justify-center gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <span className="font-display text-2xl font-bold text-iwin-yellow/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-200">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProviderLogoGrid({ limit }: { limit?: number }) {
  const list = limit ? PROVIDERS.slice(0, limit) : PROVIDERS;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {list.map((provider) => (
        <div
          key={provider.name}
          className="provider-tile flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl p-4"
        >
          <Image
            src={provider.image}
            alt={provider.name}
            width={80}
            height={80}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <p className="text-center text-[11px] font-medium text-zinc-400">{provider.name}</p>
        </div>
      ))}
    </div>
  );
}

export function SplitCategorySection({
  id,
  title,
  intro,
  bullets,
  image,
  alt,
  objectPosition,
  imageFirst = true,
  children,
}: {
  title: string;
  intro: string;
  bullets: string[];
  image: string;
  alt: string;
  objectPosition?: string;
  imageFirst?: boolean;
  children?: React.ReactNode;
  id?: string;
}) {
  const media = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/11] lg:min-h-[360px] lg:aspect-auto">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
  const text = (
    <div>
      <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">{intro}</p>
      <ul className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="border-l-2 border-iwin-yellow/35 pl-4 text-sm leading-relaxed text-zinc-300">
            {bullet}
          </li>
        ))}
      </ul>
      {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
    </div>
  );
  return (
    <section id={id} className="scroll-mt-28">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {imageFirst ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{text}</div>
            <div className="order-1 lg:order-2">{media}</div>
          </>
        )}
      </div>
    </section>
  );
}

export function PremiumDataTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="premium-table-wrap overflow-x-auto rounded-2xl">
      <table className="premium-table min-w-full text-left text-sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={`${row[0]}-${cell}`} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AgentHeroSplit({
  locale,
  eyebrow,
  title,
  description,
  points,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  children: React.ReactNode;
}) {
  const v = getVisual(locale);
  return (
    <div className="grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-2">
      <div className="relative min-h-[320px] lg:min-h-[480px]">
        <Image
          src={VISUAL_IMAGES.agent}
          alt={title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <ProcessFlow steps={v.agentProcess} className="border-iwin-yellow/20 bg-black/60 backdrop-blur-sm" />
        </div>
      </div>
      <div className="flex flex-col justify-center bg-surface-900/40 p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="border-l-2 border-iwin-yellow/35 pl-4 text-sm text-zinc-300">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">{children}</div>
      </div>
    </div>
  );
}

export function BrandEditorialPanel({
  locale,
  title,
  body,
}: {
  locale: Locale;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0">
        <Image
          src={VISUAL_IMAGES.hero.banner2}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/70" />
      </div>
      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="relative mb-5 h-12 w-[160px]">
            <Image src={VISUAL_IMAGES.brand.logo} alt="" fill sizes="160px" className="object-contain object-left" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">{body}</p>
        </div>
        <PartnerFlowComposition locale={locale} />
      </div>
    </div>
  );
}

export function ContactVisualPanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div className="absolute inset-0">
        <Image
          src={VISUAL_IMAGES.hero.banner3}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50" />
      </div>
      <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="relative mx-auto mb-6 h-12 w-[160px]">
          <Image src={VISUAL_IMAGES.brand.logo} alt="" fill sizes="160px" className="object-contain" />
        </div>
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">{description}</p>
      </div>
    </div>
  );
}

export function GuideNavCard({
  href,
  number,
  title,
  description,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-900/50 p-5 transition hover:border-iwin-yellow/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
    >
      <p className="font-display text-4xl font-bold text-iwin-yellow/20 transition group-hover:text-iwin-yellow/35">
        {number}
      </p>
      <h3 className="font-display mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </Link>
  );
}

export function ClusterImageCard({
  href,
  label,
  description,
  image,
}: {
  href: string;
  label: string;
  description: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[200px] overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width:768px) 100vw, 33vw"
        className="object-cover opacity-55 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-lg font-semibold text-white">{label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>
      </div>
    </Link>
  );
}

/** Helper: map homepage cluster route keys to imagery. */
export function clusterImageForRoute(routeKey: string): string {
  switch (routeKey) {
    case "games":
      return VISUAL_IMAGES.category.slots;
    case "promotions":
      return VISUAL_IMAGES.promotion;
    case "guides":
      return VISUAL_IMAGES.hero.banner2;
    case "agent":
      return VISUAL_IMAGES.agent;
    case "faqs":
      return VISUAL_IMAGES.hero.banner3;
    case "about-iwin":
      return VISUAL_IMAGES.hero.banner2;
    default:
      return VISUAL_IMAGES.hero.home;
  }
}

export function categoryItemsFromLocale(locale: Locale) {
  return GAME_CATEGORIES.map((cat) => ({
    id: cat.id,
    href: routePath(cat.routeKey, locale),
    title: getGameCategoryName(cat.id, locale),
    image: cat.image,
    alt: cat.alt[locale],
    objectPosition: cat.objectPosition,
  }));
}

export { VISUAL_IMAGES };

// Backwards-compatible aliases used by existing PageViews imports
export const EcosystemDiagram = EcosystemComposition;
export const PartnerFlowDiagram = PartnerFlowComposition;
export const PromoVisualPanel = PromoHeroComposition;
export const AgentSplitPanel = AgentHeroSplit;
export const ResponsibleGamingGrid = ResponsibleEditorial;

export function PromoFactCards({
  locale,
  items,
}: {
  locale: Locale;
  items: readonly string[];
}) {
  const v = getVisual(locale);
  const labels = [v.promo.eligibilityLabel, v.promo.turnoverLabel, v.promo.claimLabel, v.promo.freeCredit];
  return (
    <ul className="mt-4 space-y-3">
      {items.slice(0, 4).map((item, index) => (
        <li key={item} className="border-l-2 border-iwin-yellow/35 pl-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-iwin-yellow">
            {labels[index] ?? v.promo.eligibilityLabel}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export function GuideStepCard({
  href,
  number,
  title,
  description,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
  featuredLabel?: string;
}) {
  return <GuideNavCard href={href} number={number} title={title} description={description} />;
}

export function ClusterNavCard({
  href,
  label,
  description,
  routeKey,
}: {
  href: string;
  label: string;
  description: string;
  marker?: string;
  routeKey?: string;
}) {
  return (
    <ClusterImageCard
      href={href}
      label={label}
      description={description}
      image={clusterImageForRoute(routeKey ?? "about-iwin")}
    />
  );
}
