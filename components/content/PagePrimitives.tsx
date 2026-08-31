import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCommon } from "@/content/i18n/common";
import { getVisual } from "@/content/i18n/visual";
import { SITE_CONFIG, hasExternalUrl } from "@/lib/constants/site";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

export type PageSection = {
  title: string;
  body?: string[];
  steps?: string[];
  bullets?: string[];
  table?: { label: string; value: string }[];
};

export type PageContent = {
  eyebrow?: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  related?: { key: RouteKey; label: string }[];
};

export function PageChrome({
  locale,
  crumbs,
  children,
  showDisclosure = false,
}: {
  locale: Locale;
  crumbs: { name: string; path: string }[];
  children: React.ReactNode;
  showDisclosure?: boolean;
}) {
  const common = getCommon(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          crumbs.map((c) => ({ name: c.name, path: c.path })),
        )}
      />
      <div className="border-b border-white/5 bg-iwin-charcoal/40">
        <Container className="py-8 sm:py-10">
          <Breadcrumbs
            items={crumbs.map((c, i) => ({
              label: c.name,
              href: i < crumbs.length - 1 ? c.path : undefined,
            }))}
          />
          {showDisclosure ? (
            <p className="mt-2 max-w-3xl text-xs leading-relaxed text-zinc-500">
              {common.externalCtaNote}
            </p>
          ) : null}
        </Container>
      </div>
      {children}
    </>
  );
}

export function ContentSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {section.title}
          </h2>
          {section.body?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-zinc-300">
              {p}
            </p>
          ))}
          {section.bullets ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          {section.steps ? (
            <ol className="mt-5 space-y-3">
              {section.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-xl border border-white/10 bg-surface-900/60 px-4 py-3 text-zinc-200"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-iwin-yellow text-sm font-bold text-black">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          ) : null}
          {section.table ? (
            <div className="mt-5 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <tbody>
                  {section.table.map((row) => (
                    <tr key={row.label} className="border-b border-white/10 last:border-0">
                      <th className="bg-surface-900/80 px-4 py-3 font-medium text-zinc-200">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-zinc-300">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function RelatedLinks({
  locale,
  links,
}: {
  locale: Locale;
  links?: { key: RouteKey; label: string }[];
}) {
  const common = getCommon(locale);
  if (!links?.length) return null;
  return (
    <section className="mt-14">
      <h2 className="text-lg font-semibold text-white">{common.relatedLinks}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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

export function PageHeroBlock({
  locale,
  content,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  locale: Locale;
  content: PageContent;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const common = getCommon(locale);
  const register = hasExternalUrl(SITE_CONFIG.registerUrl)
    ? SITE_CONFIG.registerUrl
    : routePath("guides-how-to-register", locale);

  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.h1}
        description={content.intro}
        as="h1"
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          href={primaryHref || register}
          size="lg"
          external={(primaryHref || register).startsWith("http")}
        >
          {primaryLabel || common.visitPlatform}
        </Button>
        {secondaryHref ? (
          <Button href={secondaryHref} variant="secondary" size="lg">
            {secondaryLabel || common.exploreGuides}
          </Button>
        ) : null}
      </div>
    </Container>
  );
}

export function CategoryCard({
  href,
  title,
  description,
  image,
  alt,
  objectPosition = "center",
  priority = false,
  actionLabel,
}: {
  href: string;
  title: string;
  description: string;
  image: string;
  alt?: string;
  objectPosition?: string;
  priority?: boolean;
  actionLabel?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50 sm:min-h-[280px]"
    >
      <Image
        src={image}
        alt={alt ?? title}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        style={{ objectPosition }}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-300">{description}</p>
        {actionLabel ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-iwin-yellow">
            {actionLabel} →
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function FinalCtaBand({
  locale,
  title,
  description,
  showExternalNotice = true,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  locale: Locale;
  title: string;
  description: string;
  showExternalNotice?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const common = getCommon(locale);
  const visual = getVisual(locale);
  const register = hasExternalUrl(SITE_CONFIG.registerUrl)
    ? SITE_CONFIG.registerUrl
    : routePath("guides-how-to-register", locale);
  const primary = primaryHref || register;
  const secondary = secondaryHref || routePath("guides", locale);

  return (
    <section className="section-band">
      <Container className="py-10 sm:py-12">
        <div className="final-cta-panel px-6 py-10 sm:px-10 sm:py-12">
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="eyebrow">{visual.finalCtaEyebrow}</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-300">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primary} size="lg" external={primary.startsWith("http")}>
                {primaryLabel || common.visitPlatform}
              </Button>
              <Button href={secondary} variant="secondary" size="lg">
                {secondaryLabel || common.exploreGuides}
              </Button>
            </div>
            {showExternalNotice ? (
              <p className="mx-auto mt-4 max-w-lg text-xs text-zinc-500">{common.externalCtaNote}</p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
