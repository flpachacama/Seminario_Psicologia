import Image from "next/image";
import Link from "next/link";

import { Badge, Card, Container, Section } from "@/components/ui";

export function HeroSection() {
  return (
    <Section id="inicio" className="scroll-mt-28 pt-12 sm:pt-16 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-20">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6">
              Seminario académico
            </Badge>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#f5eee7] text-balance sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
              Seminario de diagnóstico, valoración y metodología de la psicomotricidad.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              Este seminario busca fortalecer la observación, la valoración y la
              interpretación del desarrollo psicomotor para orientar acciones de
              intervención con una mirada integral.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Identificar el nivel de desarrollo psicomotor.",
                "Detectar fortalezas y dificultades.",
                "Orientar la planificación de estrategias de intervención.",
                "Favorecer el desarrollo integral del niño.",
                "Interpretar los resultados obtenidos.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-[color:var(--foreground)] shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:col-span-1">
                  <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)] align-middle shadow-[0_0_0_4px_rgba(255,106,0,0.12)]" />
                  <strong className="font-semibold">{item}</strong>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { label: "Fecha", value: "Lunes 27 de Julio de 2026" },
                { label: "Horario", value: "Desde las 07:00 a 09:00" },
                { label: "Modalidad", value: "Híbrida (online y presencial)" },
                { label: "Cupos Online", value: "40 Personas" },
                { label: "Cupos Presenciales", value: "40 Personas" },
                {
                  label: "Lugar",
                  value: 'Universidad de las Fuerzas Armadas "ESPE" Bloque B (Aula 217)',
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--highlight)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="#contenido"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0f2741] px-6 text-sm font-medium text-white shadow-[0_10px_30px_rgba(15,39,65,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#143355] hover:shadow-[0_14px_36px_rgba(15,39,65,0.18)]"
              >
                Ver contenido del seminario
              </Link>
            </div>
          </div>

          <Card padding="lg" className="relative overflow-hidden lg:translate-y-2">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0f2741] via-[#6b4f26] to-[#0f2741]" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">Primera vista</Badge>
                <Badge variant="accent">Seminario</Badge>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/6 shadow-[0_16px_30px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/WhatsApp%20Image%202026-07-21%20at%2022.33.61.jpeg"
                  alt="Registro visual del seminario de diagnóstico, valoración y metodología de la psicomotricidad"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}