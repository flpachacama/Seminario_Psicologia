import type { NavigationItem } from "./types";

export const mainNavigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Contenido", href: "#contenido" },
  { label: "Marco Teorico", href: "#marco-teorico" },
  { label: "Evaluación", href: "#evaluacion" },
] as const satisfies readonly NavigationItem[];