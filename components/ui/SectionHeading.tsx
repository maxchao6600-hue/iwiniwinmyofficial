import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-3">{eyebrow}</p>
      ) : null}
      <Tag className="font-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
