import type { ReactNode } from "react";

type LayoutProps = Readonly<{
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}>;

export function Layout({ children, header, footer }: LayoutProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip">
      <header>{header}</header>
      <main className="flex-1">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}