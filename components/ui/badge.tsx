import type { ComponentPropsWithoutRef, ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "outline";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
  children: ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-white/6 text-[#f5eee7] border border-white/8",
  accent: "bg-[color:var(--accent-soft)] text-[color:var(--highlight)] border border-[color:var(--accent-soft)]",
  outline: "border border-white/10 bg-transparent text-[#e9e1d8]",
};

export function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}