import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[color:var(--accent)] text-[#090504] shadow-[0_12px_28px_rgba(255,106,0,0.22)] hover:-translate-y-0.5 hover:bg-[#ff812f] hover:shadow-[0_16px_36px_rgba(255,106,0,0.28)]",
  secondary:
    "border border-white/12 bg-white/6 text-[#f5eee7] shadow-sm hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10 hover:shadow-md",
  ghost: "text-[#e9e1d8] hover:bg-white/6 hover:text-white",
  icon: "border border-white/12 bg-white/6 text-[#e9e1d8] shadow-sm hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10 hover:shadow-md",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-xl",
  md: "h-11 px-4 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const sizeClass = variant === "icon" ? "h-11 w-11 rounded-full p-0" : sizeClasses[size];

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2741]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf7] active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}