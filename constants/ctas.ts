import type { CtaLink } from "./types";

export const ctaLinks = {
  primary: {
    label: "Solicitar propuesta",
    href: "#contacto",
    variant: "primary",
  },
  secondary: {
    label: "Ver servicios",
    href: "#servicios",
    variant: "secondary",
  },
  ghost: {
    label: "Conocer proyectos",
    href: "#proyectos",
    variant: "ghost",
  },
} as const satisfies Record<string, CtaLink>;