import Image from "next/image";
import Link from "next/link";
import { PROVIDERS } from "@/content/games/catalog";
import { getVisual } from "@/content/i18n/visual";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";

export function EcosystemDiagram({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div
      className="visual-panel relative overflow-hidden rounded-2xl p-6 sm:p-8"
      aria-hidden="false"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-iwin-yellow/10 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <div className="rounded-xl border border-iwin-yellow/40 bg-black/50 px-6 py-3 text-center">
          <span className="font-display text-xl font-semibold text-iwin-yellow">{v.ecosystem.hub}</span>
        </div>
        <div className="my-3 h-8 w-px bg-gradient-to-b from-iwin-yellow/60 to-iwin-yellow/20" aria-hidden="true" />
        <ul className="grid w-full gap-2 sm:grid-cols-2">
          {v.ecosystem.nodes.map((node) => (
            <li
              key={node}
              className="rounded-lg border border-white/10 bg-surface-900/80 px-4 py-2.5 text-center text-sm font-medium text-zinc-200"
            >
              {node}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PartnerFlowDiagram({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <div className="visual-panel rounded-2xl p-6 sm:p-8">
      <ol className="space-y-0">
        {v.partnerFlow.map((step, index) => (
          <li key={step} className="relative flex flex-col items-center pb-6 last:pb-0">
            <div
              className={cn(
                "relative z-10 w-full max-w-md rounded-xl border px-4 py-3 text-center text-sm font-medium",
                index === 0
                  ? "border-iwin-yellow/45 bg-iwin-yellow/10 text-white"
                  : "border-white/10 bg-surface-900/70 text-zinc-200",
              )}
            >
              {step}
            </div>
            {index < v.partnerFlow.length - 1 ? (
              <div
                className="my-2 h-5 w-px bg-gradient-to-b from-iwin-yellow/50 to-transparent"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PromoVisualPanel({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  const stats = [
    { label: v.promo.freeCredit, value: v.promo.amount, large: true },
    { label: v.promo.turnoverLabel, value: v.promo.turnoverValue },
    { label: v.promo.claimLabel, value: v.promo.claimValue },
    { label: v.promo.eligibilityLabel, value: v.promo.eligibilityValue },
  ];
  return (
    <div className="visual-panel-gold relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,0.18),transparent_55%)]" />
      <div className="relative grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-xl border border-iwin-yellow/25 bg-black/40 p-4 text-center",
              stat.large && "col-span-2 py-6",
            )}
          >
            <p
              className={cn(
                "font-display font-semibold text-iwin-yellow",
                stat.large ? "text-4xl sm:text-5xl" : "text-2xl",
              )}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
              {stat.label}
            </p>
          </div>
        ))}
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
    <div className={cn("visual-panel rounded-2xl p-5 sm:p-6", className)}>
      <ol className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2 sm:gap-3">
            <span className="rounded-lg border border-iwin-yellow/30 bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 sm:text-sm">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="text-iwin-yellow/60" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ResponsibleGamingGrid({ locale }: { locale: Locale }) {
  const items = getVisual(locale).responsible;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="visual-panel rounded-2xl p-5">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-iwin-yellow/30 bg-iwin-yellow/10 text-lg text-iwin-yellow"
            aria-hidden="true"
          >
            {item.icon}
          </span>
          <h3 className="font-display mt-4 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ProviderLogoGrid({ limit }: { limit?: number }) {
  const list = limit ? PROVIDERS.slice(0, limit) : PROVIDERS;
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
      {list.map((provider) => (
        <div
          key={provider.name}
          className="provider-tile flex aspect-square items-center justify-center rounded-xl p-3"
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
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/11]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-cover transition duration-500 hover:scale-[1.02]"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
  const text = (
    <div>
      <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">{intro}</p>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 rounded-xl border border-white/10 bg-surface-900/60 p-3 text-sm text-zinc-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iwin-yellow" />
            {bullet}
          </li>
        ))}
      </ul>
      {children ? <div className="mt-5 flex flex-wrap gap-3">{children}</div> : null}
    </div>
  );
  return (
    <section id={id} className="scroll-mt-28">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {imageFirst ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            {text}
            {media}
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
              <th key={header} scope="col" className="sticky left-0 z-10 px-4 py-3 sm:static">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${row[0]}-${cell}`}
                  className={cn("px-4 py-3", cellIndex === 0 && "sticky left-0 z-10 sm:static")}
                >
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

export function AgentSplitPanel({
  locale,
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  points,
  children,
}: {
  locale: Locale;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <ProcessFlow steps={getVisual(locale).agentProcess} className="border-0 bg-black/50 p-3" />
        </div>
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="visual-panel rounded-xl p-4 text-sm text-zinc-300">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">{children}</div>
      </div>
    </div>
  );
}

export function ClusterNavCard({
  href,
  label,
  description,
  marker,
}: {
  href: string;
  label: string;
  description: string;
  marker: string;
}) {
  return (
    <Link
      href={href}
      className="group visual-panel block rounded-2xl p-5 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-iwin-yellow/30 bg-iwin-yellow/10 text-xs font-bold uppercase text-iwin-yellow"
        aria-hidden="true"
      >
        {marker}
      </span>
      <h3 className="font-display mt-4 text-lg font-semibold text-white group-hover:text-iwin-yellow-bright">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </Link>
  );
}

export function GuideStepCard({
  href,
  number,
  title,
  description,
  featured = false,
  featuredLabel,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
  featuredLabel?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group visual-panel block rounded-2xl p-5 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50",
        featured && "md:col-span-1 lg:row-span-1 border-iwin-yellow/30 bg-gradient-to-br from-iwin-yellow/5 to-transparent",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-display text-3xl font-bold text-iwin-yellow/90">{number}</span>
        {featured && featuredLabel ? (
          <span className="rounded-full border border-iwin-yellow/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-iwin-yellow">
            {featuredLabel}
          </span>
        ) : null}
      </div>
      <h3 className="font-display mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </Link>
  );
}

export function PromoFactCards({
  locale,
  items,
}: {
  locale: Locale;
  items: readonly string[];
}) {
  const v = getVisual(locale);
  const labels = [
    v.promo.eligibilityLabel,
    v.promo.turnoverLabel,
    v.promo.claimLabel,
    locale === "ms" ? "Kuota" : locale === "zh" ? "名额" : "Quota",
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.slice(0, 4).map((item, index) => (
        <div key={item} className="visual-panel rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-iwin-yellow">
            {labels[index] ?? v.promo.eligibilityLabel}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item}</p>
        </div>
      ))}
    </div>
  );
}

export { VISUAL_IMAGES };
