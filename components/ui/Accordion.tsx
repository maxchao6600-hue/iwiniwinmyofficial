"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils/cn";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface-900/70">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "px-5 transition-colors sm:px-6",
              isOpen && "bg-iwin-yellow/[0.04]",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iwin-yellow/50",
                  isOpen ? "text-white" : "text-zinc-200",
                )}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-medium sm:text-[1.05rem]">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition",
                    isOpen
                      ? "rotate-45 border-iwin-yellow/50 bg-iwin-yellow/15 text-iwin-yellow"
                      : "border-white/15 text-zinc-400",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5"
            >
              <p className="max-w-3xl border-l-2 border-iwin-yellow/30 pl-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function GroupedAccordion({
  groups,
}: {
  groups: { id: string; label: string; items: AccordionItem[] }[];
}) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.id} id={`faq-${group.id}`} className="scroll-mt-28">
          <p className="eyebrow mb-3">{group.label}</p>
          <Accordion items={group.items} defaultOpen={null} />
        </section>
      ))}
    </div>
  );
}
