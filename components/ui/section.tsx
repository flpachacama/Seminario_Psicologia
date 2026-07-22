import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className = "", ...props }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", className)} {...props} />
  );
}