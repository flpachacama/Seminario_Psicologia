import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Layout } from "@/components/layout/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servicios Profesionales",
  description: "Sitio web corporativo en preparación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased selection:bg-[color:var(--accent-soft)] selection:text-[color:var(--foreground)]">
        <Layout header={<Navbar />}>{children}</Layout>
      </body>
    </html>
  );
}
