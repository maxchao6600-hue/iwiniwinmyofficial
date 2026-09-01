import Image from "next/image";
import Link from "next/link";
import { getVisual } from "@/content/i18n/visual";
import { getVisualFlows } from "@/content/i18n/visual-flows";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import type { Locale, RouteKey } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils/cn";
import { ProcessTimeline, StatFactStrip, WarningPanel } from "@/components/visual/EditorialPrimitives";

type GuideKind =
  | "register"
  | "login"
  | "deposit"
  | "withdraw"
  | "payment"
  | "mobile"
  | "security";

const GUIDE_KIND: Record<string, GuideKind> = {
  "guides-how-to-register": "register",
  "guides-how-to-login": "login",
  "guides-how-to-deposit": "deposit",
  "guides-how-to-withdraw": "withdraw",
  "guides-payment-methods": "payment",
  "guides-mobile": "mobile",
  "guides-account-security": "security",
};

export function GuideProcessPanel({ locale, pageId }: { locale: Locale; pageId: string }) {
  const flows = getVisualFlows(locale);
  const kind = GUIDE_KIND[pageId] ?? "register";
  const flow = flows.guideFlows[kind];

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(20,20,24,0.95),rgba(8,8,10,0.98))]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[220px] border-b border-white/10 p-6 sm:min-h-[280px] sm:p-8 lg:border-b-0 lg:border-r">
          <p className="eyebrow">{flow.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">{flow.title}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{flow.intro}</p>
          <div className="mt-8">
            <ProcessTimeline steps={flow.steps} />
          </div>
        </div>
        <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 sm:aspect-auto sm:min-h-[200px] sm:flex-1">
            <Image
              src={flow.image}
              alt=""
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover opacity-60"
              style={{ objectPosition: flow.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-4xl font-bold text-iwin-yellow/25 sm:text-5xl">{flow.chapter}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
                {flow.chapterLabel}
              </p>
            </div>
          </div>
          {flow.warning ? (
            <WarningPanel title={flow.warningTitle ?? ""}>{flow.warning}</WarningPanel>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PromoFlowPanel({
  locale,
  variant,
}: {
  locale: Locale;
  variant: "free-credit" | "welcome" | "bonus-guide";
}) {
  const v = getVisual(locale);
  const flow = getVisualFlows(locale).promoFlows[variant];
  const matrix = [
    { label: v.promo.eligibilityLabel, value: v.promo.eligibilityValue },
    { label: v.promo.claimLabel, value: v.promo.claimValue },
    { label: v.promo.turnoverLabel, value: v.promo.turnoverValue },
    {
      label: locale === "ms" ? "Had" : locale === "zh" ? "限制" : "Limitations",
      value:
        locale === "ms"
          ? "Kuota harian; tidak dijamin"
          : locale === "zh"
            ? "每日配额；不保证"
            : "Daily quota; not guaranteed",
    },
    {
      label: locale === "ms" ? "Pengeluaran" : locale === "zh" ? "提款" : "Withdrawal",
      value:
        locale === "ms"
          ? "Sahkan pusing ganti terlebih dahulu"
          : locale === "zh"
            ? "先确认流水要求"
            : "Confirm turnover first",
    },
    {
      label: locale === "ms" ? "Tamat" : locale === "zh" ? "有效期" : "Expiry",
      value:
        locale === "ms"
          ? "Ikuti terma platform langsung"
          : locale === "zh"
            ? "以实时平台条款为准"
            : "Follow live platform terms",
    },
  ] as const;

  return (
    <section className="mb-10 space-y-6">
      {variant === "free-credit" ? null : (
        <div className="visual-panel-gold rounded-2xl p-6 sm:p-8">
          <p className="eyebrow">{flow.eyebrow}</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">{flow.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">{flow.intro}</p>
        </div>
      )}
      <div>
        <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
          {locale === "ms" ? "Matriks terma promosi" : locale === "zh" ? "优惠条款矩阵" : "Promotion terms matrix"}
        </h2>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {matrix.map((row) => (
            <div key={row.label} className="rounded-xl border border-white/10 bg-black/40 px-4 py-4">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{row.label}</dt>
              <dd className="mt-2 text-sm font-medium leading-snug text-white">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {flow.steps.map((step, index) => (
          <li key={step.label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="font-display text-3xl font-bold text-iwin-yellow/30">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">{step.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">{step.hint}</p>
          </li>
        ))}
      </ol>
      {variant === "free-credit" ? (
        <StatFactStrip
          facts={[
            { label: v.promo.turnoverLabel, value: v.promo.turnoverValue },
            { label: v.promo.claimLabel, value: v.promo.claimValue },
            { label: v.promo.eligibilityLabel, value: v.promo.eligibilityValue },
            { label: v.promo.freeCredit, value: v.promo.amount },
          ]}
        />
      ) : null}
      <p className="text-xs leading-relaxed text-zinc-500">{v.promo.verifyNote}</p>
    </section>
  );
}

export function CategoryImmersion({
  locale,
  title,
  intro,
  image,
  alt,
  objectPosition,
  imageFirst,
  checkpoints,
  theme = "slots",
}: {
  locale: Locale;
  title: string;
  intro: string;
  image: string;
  alt: string;
  objectPosition?: string;
  imageFirst: boolean;
  checkpoints: readonly string[];
  theme?: "slots" | "live-casino" | "sports" | "4d";
}) {
  const v = getVisual(locale);
  const checkpointLabel = getVisualFlows(locale).categoryCheckpointLabel;
  const themeOverlay =
    theme === "slots"
      ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,transparent_40%,transparent_60%,rgba(0,0,0,0.55)_100%)]"
      : theme === "live-casino"
        ? "bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]"
        : theme === "sports"
          ? "bg-gradient-to-t from-black via-transparent to-black/40"
          : "bg-[radial-gradient(circle_at_70%_30%,rgba(245,197,24,0.12),transparent_45%)]";

  const media = (
    <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-iwin-yellow/20 sm:min-h-[340px] lg:min-h-[420px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="(max-width:1024px) 100vw, 55vw"
        className="object-cover transition duration-700 hover:scale-[1.02]"
        style={{ objectPosition: objectPosition ?? "center" }}
      />
      <div className={cn("absolute inset-0", themeOverlay)} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 hero-glow opacity-40" />
      {theme === "4d" ? (
        <p className="pointer-events-none absolute right-4 top-4 font-display text-6xl font-bold tracking-tight text-iwin-yellow/20 sm:text-7xl" aria-hidden="true">
          4D
        </p>
      ) : null}
      {theme === "slots" ? (
        <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-iwin-yellow/20" aria-hidden="true" />
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-iwin-yellow">{v.featuredCategory}</p>
        <p className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</p>
      </div>
    </div>
  );
  const copy = (
    <div>
      <div className="editorial-divider mb-5" />
      <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">{intro}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{checkpointLabel}</p>
      <ul className="mt-4 space-y-3">
        {checkpoints.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
            <span className="font-display shrink-0 text-iwin-yellow/50">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="mb-10">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {imageFirst ? (
          <>
            {media}
            {copy}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{copy}</div>
            <div className="order-1 lg:order-2">{media}</div>
          </>
        )}
      </div>
    </section>
  );
}

export function RelatedContentRail({
  locale,
  title,
  links,
}: {
  locale: Locale;
  title: string;
  links: readonly { key: RouteKey; label: string }[];
}) {
  if (!links.length) return null;
  return (
    <section className="mt-12 border-t border-white/10 pt-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h2>
        <div className="editorial-divider hidden sm:block" aria-hidden="true" />
      </div>
      <div className="content-rail -mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
        {links.map((link, index) => (
          <Link
            key={link.key}
            href={routePath(link.key, locale)}
            className="group flex min-w-[200px] max-w-[240px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(28,28,33,0.9),rgba(10,10,12,0.95))] p-4 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50"
          >
            <span className="font-display text-2xl font-bold text-iwin-yellow/25 transition group-hover:text-iwin-yellow/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-3 text-sm font-medium leading-snug text-zinc-200 group-hover:text-white">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function EcosystemBoundaryPanel({ locale }: { locale: Locale }) {
  const v = getVisual(locale);
  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-white/10">
      <div className="relative px-5 py-10 sm:px-10 sm:py-14">
        <div className="absolute inset-0">
          <Image src={VISUAL_IMAGES.hero.banner2} alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
        </div>
        <div className="relative">
          <p className="eyebrow">{v.ecosystem.subtitle}</p>
          <ol className="mt-8 flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center">
            {v.partnerFlow.map((step, index) => (
              <li key={step} className="flex flex-1 flex-col items-center sm:flex-row sm:items-center">
                <div
                  className={cn(
                    "w-full max-w-xs rounded-xl border px-4 py-4 text-center",
                    index === 0
                      ? "border-iwin-yellow/50 bg-black/60 text-white"
                      : index === v.partnerFlow.length - 1
                        ? "border-white/15 bg-black/35 text-zinc-400"
                        : "border-white/10 bg-black/45 text-zinc-200",
                  )}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-iwin-yellow/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-medium sm:text-base">{step}</p>
                </div>
                {index < v.partnerFlow.length - 1 ? (
                  <span className="my-2 text-iwin-yellow/40 sm:mx-2 sm:my-0" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
