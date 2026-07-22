import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionTitleProps = Readonly<{
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}>;

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-4 sm:gap-5", alignmentClass, className)}>
      {eyebrow ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--highlight)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-2xl text-balance text-[1.95rem] font-semibold tracking-tight text-[#f5eee7] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[0.98rem] leading-7 text-[color:var(--muted)] sm:text-[1.05rem]">{description}</p>
      ) : null}
    </div>
  );
}