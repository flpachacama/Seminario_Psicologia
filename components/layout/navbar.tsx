"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button, Container } from "@/components/ui";
import { companyInfo, ctaLinks, mainNavigationItems } from "@/constants";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "border-b border-white/10 bg-[#0b0706]/82 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full px-1 py-1 text-[#f5eee7] transition-transform duration-200 hover:scale-[0.99]"
            aria-label="Ir al inicio"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-semibold tracking-[0.2em] text-[#f5eee7] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
              SP
            </span>
            <span className="hidden text-sm font-medium tracking-[0.18em] text-[#c7beb6] uppercase sm:inline-flex">
              {companyInfo.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
            {mainNavigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#c7beb6] transition-all duration-200 hover:bg-white/6 hover:text-white hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button size="md">{ctaLinks.primary.label}</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="icon"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            >
              <span className="sr-only">Menú</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={[
            "overflow-hidden border-t border-white/10 md:hidden transition-[max-height,opacity,transform] duration-300 ease-out",
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "pointer-events-none max-h-0 opacity-0 -translate-y-2",
          ].join(" ")}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col gap-2 py-4">
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#c7beb6] transition-all duration-200 hover:bg-white/6 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button className="mt-2 w-full" onClick={() => setIsMenuOpen(false)}>
              {ctaLinks.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}