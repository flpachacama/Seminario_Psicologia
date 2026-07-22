import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: CardPadding;
  interactive?: boolean;
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

export function Card({
  padding = "md",
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.45rem] border border-white/10 bg-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-200 ease-out",
        interactive ? "hover:-translate-y-1 hover:border-[color:var(--accent-soft)] hover:shadow-[0_18px_40px_rgba(255,106,0,0.08)]" : "",
        paddingClasses[padding],
        className,
      )}
      {...props}
    />
  );
}