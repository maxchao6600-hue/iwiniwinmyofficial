import Image from "next/image";
import Link from "next/link";
import type { RichBlock } from "@/content/i18n/rich/types";
import type { Locale } from "@/lib/i18n/config";
import { routePath } from "@/lib/i18n/paths";

function BlockHeading({ title, id }: { title: string; id?: string }) {
  return (
    <h2 id={id} className="font-display scroll-mt-28 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
  );
}

function ProseBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "prose" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      {block.title ? <BlockHeading title={block.title} id={sectionId} /> : null}
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

function BulletsBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "bullets" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
      <ul className="mt-5 max-w-3xl space-y-3">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)} className="border-l-2 border-iwin-yellow/35 pl-4 leading-relaxed text-zinc-300">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function StepsBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "steps" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
      <ol className="mt-8 grid gap-5 sm:grid-cols-2">
        {block.steps.map((step, index) => (
          <li
            key={step.slice(0, 48)}
            className="relative min-h-[140px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(28,28,33,0.9),rgba(8,8,10,0.95))] p-6"
          >
            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-iwin-yellow/8 blur-2xl" />
            <p className="font-display text-4xl font-bold text-iwin-yellow/30">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-zinc-200 sm:text-base">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CardsBlock({
  block,
  locale,
  sectionId,
}: {
  block: Extract<RichBlock, { type: "cards" }>;
  locale: Locale;
  sectionId?: string;
}) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
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

function GridBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "grid" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
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

function TableBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "table" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
      <div className="premium-table-wrap mt-5 overflow-x-auto rounded-2xl">
        <table className="premium-table min-w-full text-left text-sm">
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="sticky left-0 z-10 px-4 py-3 sm:static">
                  {row.label}
                </th>
                <td className="px-4 py-3">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CalloutBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "callout" }>; sectionId?: string }) {
  const tone =
    block.variant === "warning"
      ? "border-amber-500/30 bg-amber-500/10"
      : "border-iwin-yellow/20 bg-iwin-yellow/5";
  return (
    <section className={`scroll-mt-28 rounded-2xl border p-6 ${tone}`}>
      <h2 id={sectionId} className="font-display scroll-mt-28 text-xl font-semibold text-white">{block.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{block.body}</p>
    </section>
  );
}

function SplitBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "split" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
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

function SubsectionsBlock({ block, sectionId }: { block: Extract<RichBlock, { type: "subsections" }>; sectionId?: string }) {
  return (
    <section className="scroll-mt-28">
      <BlockHeading title={block.title} id={sectionId} />
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
      {blocks.map((block, index) => {
        const sectionId = "title" in block && block.title ? `section-${index}` : undefined;
        switch (block.type) {
          case "prose":
            return <ProseBlock key={block.title ?? block.paragraphs[0]?.slice(0, 40)} block={block} sectionId={sectionId} />;
          case "bullets":
            return <BulletsBlock key={block.title} block={block} sectionId={sectionId} />;
          case "steps":
            return <StepsBlock key={block.title} block={block} sectionId={sectionId} />;
          case "cards":
            return <CardsBlock key={block.title} block={block} locale={locale} sectionId={sectionId} />;
          case "grid":
            return <GridBlock key={block.title} block={block} sectionId={sectionId} />;
          case "table":
            return <TableBlock key={block.title} block={block} sectionId={sectionId} />;
          case "callout":
            return <CalloutBlock key={block.title} block={block} sectionId={sectionId} />;
          case "split":
            return <SplitBlock key={block.title} block={block} sectionId={sectionId} />;
          case "subsections":
            return <SubsectionsBlock key={block.title} block={block} sectionId={sectionId} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
