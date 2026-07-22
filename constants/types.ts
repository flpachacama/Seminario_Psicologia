export type NavigationItem = Readonly<{
  label: string;
  href: string;
  external?: boolean;
}>;

export type CtaLink = Readonly<{
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  external?: boolean;
}>;