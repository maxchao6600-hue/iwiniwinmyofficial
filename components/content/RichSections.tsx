import Image from "next/image";
import Link from "next/link";
import type { RichBlock } from "@/content/i18n/rich/types";
import type { Locale } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";

function BlockHeading({ title }: { title: string }) {
  return (
    <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
  );
}

function ProseBlock({ block }: { block: Extract<RichBlock, { type: "prose" }> }) {
  return (
    <section className="scroll-mt-28">
      {block.title ? <BlockHeading title={block.title} /> : null}
      <div className={block.title ? "mt-4 space-y-4" : "space-y-4"}>
        {block.paragraphs.map((p) => (
          <p key={p.slice(0, 48)} className="max-w-3xl text-base leading-relaxed text-zinc-300">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function BulletsBlock({ block }: { block: Extract<RichBlock, { type: "bullets" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-zinc-300">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function StepsBlock({ block }: { block: Extract<RichBlock, { type: "steps" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      <ol className="mt-5 max-w-3xl space-y-3">
        {block.steps.map((step, index) => (
          <li
            key={step.slice(0, 48)}
            className="flex gap-3 rounded-xl border border-white/10 bg-surface-900/60 px-4 py-3 text-zinc-200"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-iwin-yellow text-sm font-bold text-black">
              {index + 1}
            </span>
            <span className="pt-0.5 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CardsBlock({
  block,
  locale,
}: {
  block: Extract<RichBlock, { type: "cards" }>;
  locale: Locale;
}) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      {block.intro ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">{block.intro}</p>
      ) : null}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {block.items.map((item) => {
          const href = item.href ? routePath(item.href, locale) : undefined;
          const inner = (
            <>
              {item.image ? (
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width:768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              {item.bullets?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-zinc-400">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </>
          );
          return href ? (
            <Link
              key={item.title}
              href={href}
              className="card-surface rounded-2xl p-5 transition hover:border-iwin-yellow/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {inner}
            </Link>
          ) : (
            <article key={item.title} className="card-surface rounded-2xl p-5">
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function GridBlock({ block }: { block: Extract<RichBlock, { type: "grid" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      {block.intro ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">{block.intro}</p>
      ) : null}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {block.items.map((item) => (
          <article key={item.title} className="card-surface rounded-2xl p-5">
            <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TableBlock({ block }: { block: Extract<RichBlock, { type: "table" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      <div className="mt-5 overflow-x-auto rounded-xl border border-white/10">
        <table className="min-w-full text-left text-sm">
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10 last:border-0">
                <th className="bg-surface-900/80 px-4 py-3 font-medium text-zinc-200">{row.label}</th>
                <td className="px-4 py-3 text-zinc-300">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CalloutBlock({ block }: { block: Extract<RichBlock, { type: "callout" }> }) {
  const tone =
    block.variant === "warning"
      ? "border-amber-500/30 bg-amber-500/10"
      : "border-iwin-yellow/20 bg-iwin-yellow/5";
  return (
    <section className={`scroll-mt-28 rounded-2xl border p-6 ${tone}`}>
      <h2 className="font-display text-xl font-semibold text-white">{block.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{block.body}</p>
    </section>
  );
}

function SplitBlock({ block }: { block: Extract<RichBlock, { type: "split" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="card-surface rounded-2xl p-5">
          {block.leftTitle ? (
            <h3 className="font-display text-lg font-semibold text-white">{block.leftTitle}</h3>
          ) : null}
          <ul className={`space-y-2 text-sm text-zinc-300 ${block.leftTitle ? "mt-3" : ""}`}>
            {block.left.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iwin-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface rounded-2xl p-5">
          {block.rightTitle ? (
            <h3 className="font-display text-lg font-semibold text-white">{block.rightTitle}</h3>
          ) : null}
          <ul className={`space-y-2 text-sm text-zinc-300 ${block.rightTitle ? "mt-3" : ""}`}>
            {block.right.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iwin-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SubsectionsBlock({ block }: { block: Extract<RichBlock, { type: "subsections" }> }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} />
      {block.intro ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">{block.intro}</p>
      ) : null}
      <div className="mt-6 space-y-7">
        {block.items.map((item) => (
          <article key={item.title} className="max-w-3xl">
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <div className="mt-3 space-y-3">
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-base leading-relaxed text-zinc-300">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RichSections({ blocks, locale }: { blocks: RichBlock[]; locale: Locale }) {
  return (
    <div className="space-y-10">
      {blocks.map((block) => {
        switch (block.type) {
          case "prose":
            return <ProseBlock key={block.title ?? block.paragraphs[0]?.slice(0, 40)} block={block} />;
          case "bullets":
            return <BulletsBlock key={block.title} block={block} />;
          case "steps":
            return <StepsBlock key={block.title} block={block} />;
          case "cards":
            return <CardsBlock key={block.title} block={block} locale={locale} />;
          case "grid":
            return <GridBlock key={block.title} block={block} />;
          case "table":
            return <TableBlock key={block.title} block={block} />;
          case "callout":
            return <CalloutBlock key={block.title} block={block} />;
          case "split":
            return <SplitBlock key={block.title} block={block} />;
          case "subsections":
            return <SubsectionsBlock key={block.title} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
