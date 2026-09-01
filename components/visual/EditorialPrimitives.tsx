import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils/cn";

/** CSS-only horizontal marquee — pause on hover; optional linked chips for utility. */
export function MarqueeTicker({
  items,
  links,
  variant = "default",
  ariaLabel,
  className,
}: {
  items: readonly string[];
  links?: readonly { label: string; href: string }[];
  variant?: "default" | "gold" | "subtle";
  ariaLabel?: string;
  className?: string;
}) {
  if (links?.length) {
    return (
      <nav
        aria-label={ariaLabel}
        className={cn(
          "category-rail -mx-1 overflow-x-auto border-y border-white/6 px-1",
          variant === "gold" && "border-iwin-yellow/15 bg-iwin-yellow/[0.03]",
          variant === "subtle" && "border-white/5 bg-black/40",
          variant === "default" && "bg-iwin-charcoal/50",
          className,
        )}
      >
        <ul className="flex w-max min-w-full items-center gap-2 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "inline-flex min-h-10 shrink-0 items-center rounded-full border border-white/10 px-4 text-xs font-semibold uppercase tracking-[0.16em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50",
                  variant === "gold"
                    ? "text-iwin-yellow/85 hover:border-iwin-yellow/40 hover:text-iwin-yellow"
                    : "text-zinc-400 hover:border-iwin-yellow/35 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee-wrap overflow-hidden border-y border-white/6",
        variant === "gold" && "border-iwin-yellow/15 bg-iwin-yellow/[0.03]",
        variant === "subtle" && "border-white/5 bg-black/40",
        variant === "default" && "bg-iwin-charcoal/50",
        className,
      )}
      aria-label={ariaLabel}
      role="region"
    >
      <div className="marquee-track flex w-max items-center gap-8 py-3">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              "shrink-0 text-xs font-semibold uppercase tracking-[0.18em]",
              variant === "gold" ? "text-iwin-yellow/80" : "text-zinc-400",
            )}
            aria-hidden={index >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Image + text split layout for editorial sections. */
export function ImageTextSplit({
  image,
  alt,
  objectPosition = "center",
  imageFirst = true,
  children,
  className,
}: {
  image: string;
  alt: string;
  objectPosition?: string;
  imageFirst?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const media = (
    <div className="image-frame relative aspect-[4/3] sm:aspect-[16/11] lg:min-h-[360px] lg:aspect-auto">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
  return (
    <div className={cn("grid items-center gap-8 lg:grid-cols-2 lg:gap-12", className)}>
      {imageFirst ? (
        <>
          {media}
          <div>{children}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{children}</div>
          <div className="order-1 lg:order-2">{media}</div>
        </>
      )}
    </div>
  );
}

/** Full-bleed visual band with optional overlay content. */
export function FullBleedVisualSection({
  image,
  alt,
  objectPosition = "center",
  children,
  minHeight = "min-h-[280px]",
}: {
  image: string;
  alt: string;
  objectPosition?: string;
  children?: React.ReactNode;
  minHeight?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden rounded-2xl border border-white/10", minHeight)}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover opacity-55"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 hero-glow opacity-50" />
      {children ? <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">{children}</div> : null}
    </section>
  );
}

/** Feature grid with border-left accent — not icon cards. */
export function FeatureGrid({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-l-2 border-iwin-yellow/40 pl-5">
          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

/** Horizontal fact strip for promo / eligibility data. */
export function StatFactStrip({
  facts,
}: {
  facts: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label} className="visual-panel rounded-xl px-4 py-4 text-center">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{fact.label}</dt>
          <dd className="font-display mt-1 text-xl font-semibold text-iwin-yellow sm:text-2xl">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Vertical process timeline with connecting line. */
export function ProcessTimeline({
  steps,
}: {
  steps: readonly { label: string; hint?: string; href?: string }[];
}) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={step.label} className="relative flex gap-5 pb-8 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-iwin-yellow/50 to-iwin-yellow/10"
              aria-hidden="true"
            />
          ) : null}
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-iwin-yellow/40 bg-black text-xs font-bold text-iwin-yellow">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pt-0.5">
            <p className="font-display text-base font-semibold text-white">{step.label}</p>
            {step.hint ? <p className="mt-1 text-sm text-zinc-400">{step.hint}</p> : null}
            {step.href ? (
              <Link
                href={step.href}
                className="mt-2 inline-flex min-h-10 items-center text-xs font-semibold uppercase tracking-[0.12em] text-iwin-yellow transition hover:text-iwin-yellow-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
              >
                {step.label} →
              </Link>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Numbered step visual for guide pages. */
export function StepVisual({
  steps,
  title,
}: {
  steps: readonly string[];
  title?: string;
}) {
  return (
    <section>
      {title ? <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2> : null}
      <ol className={cn("grid gap-4 sm:grid-cols-2", title && "mt-6")}>
        {steps.map((step, index) => (
          <li
            key={step.slice(0, 48)}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(28,28,33,0.9),rgba(8,8,10,0.95))] p-5"
          >
            <p className="font-display text-3xl font-bold text-iwin-yellow/25">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Side-by-side comparison panel. */
export function ComparisonPanel({
  left,
  right,
}: {
  left: { title: string; items: readonly string[] };
  right: { title: string; items: readonly string[] };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[left, right].map((side) => (
        <div key={side.title} className="visual-panel rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold text-white">{side.title}</h3>
          <ul className="mt-4 space-y-2">
            {side.items.map((item) => (
              <li key={item} className="border-l-2 border-iwin-yellow/30 pl-3 text-sm text-zinc-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Large topic navigation cards for FAQ / help centre. */
export function TopicNavigation({
  items,
  baseHref = "",
}: {
  items: readonly { id: string; label: string; description: string; count?: number; countLabel?: string }[];
  baseHref?: string;
}) {
  return (
    <nav className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`${baseHref}#faq-${item.id}`}
          className="group visual-panel rounded-2xl p-5 transition hover:border-iwin-yellow/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
        >
          <h3 className="font-display text-lg font-semibold text-white group-hover:text-iwin-yellow">{item.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
        {item.count !== undefined ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
            {item.count} {item.countLabel ?? (item.count === 1 ? "question" : "questions")}
          </p>
        ) : null}
        </a>
      ))}
    </nav>
  );
}

/** Quick answer cards — not full accordion. */
export function FAQPreview({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.question} className="visual-panel rounded-2xl p-5">
          <h3 className="text-base font-medium text-white">{item.question}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}

/** Related content grid with optional descriptions. */
export function RelatedContentGrid({
  items,
}: {
  items: readonly { href: string; label: string; description?: string }[];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block rounded-xl border border-white/10 bg-surface-900/50 px-4 py-3 transition hover:border-iwin-yellow/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
          >
            <span className="text-sm font-medium text-zinc-200">{item.label}</span>
            {item.description ? (
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.description}</p>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Content callout — informational highlight. */
export function ContentCallout({
  title,
  children,
  variant = "info",
}: {
  title?: string;
  children: React.ReactNode;
  variant?: "info" | "gold";
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border px-5 py-4",
        variant === "gold"
          ? "border-iwin-yellow/30 bg-iwin-yellow/[0.06]"
          : "border-white/10 bg-surface-900/60",
      )}
    >
      {title ? <p className="mb-2 text-sm font-semibold text-white">{title}</p> : null}
      <div className="text-sm leading-relaxed text-zinc-300">{children}</div>
    </aside>
  );
}

/** Warning / important panel for security and legal notices. */
export function WarningPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] px-5 py-4">
      <p className="text-sm font-semibold text-amber-200">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-zinc-300">{children}</div>
    </aside>
  );
}

/** Support routing blocks for contact page. */
export function SupportTopicGrid({
  topics,
  coversLabel,
  prepareLabel,
}: {
  topics: readonly {
    id: string;
    title: string;
    description: string;
    prepare: readonly string[];
    nextAction?: string;
    href?: string;
  }[];
  coversLabel: string;
  prepareLabel: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <article key={topic.id} className="visual-panel flex flex-col rounded-2xl p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-iwin-yellow/70">
            {topic.id}
          </p>
          <h3 className="font-display mt-2 text-lg font-semibold text-white">{topic.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            <span className="font-medium text-zinc-300">{coversLabel}: </span>
            {topic.description}
          </p>
          <div className="mt-4 flex-1 border-t border-white/10 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {prepareLabel}
            </p>
            <ul className="mt-2 space-y-1.5">
              {topic.prepare.map((item) => (
                <li key={item} className="text-xs leading-relaxed text-zinc-500">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          {topic.href && topic.nextAction ? (
            <div className="mt-5">
              <Button href={topic.href} size="lg" className="w-full justify-center sm:w-auto">
                {topic.nextAction}
              </Button>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/** Legal document section navigation. */
export function LegalSectionNav({
  sections,
}: {
  sections: readonly { id: string; label: string }[];
}) {
  return (
    <nav aria-label="Document sections" className="visual-panel rounded-2xl p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">On this page</p>
      <ul className="mt-3 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-zinc-300 transition hover:text-iwin-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Sticky mobile CTA bar — shown only on small screens. */
export function MobileStickyCta({
  label,
  href,
  external = false,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 p-3 backdrop-blur-md lg:hidden">
      <Button href={href} size="lg" external={external} className="w-full">
        {label}
      </Button>
    </div>
  );
}

/** Breadcrumb bar wrapper for custom pages. */
export function BreadcrumbBar({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <div className="border-b border-white/5 bg-iwin-charcoal/30">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <Breadcrumbs items={[...items]} />
      </div>
    </div>
  );
}

/** Re-export section heading for design system completeness. */
export { SectionHeading };
