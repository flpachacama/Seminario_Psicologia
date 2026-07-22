import Link from "next/link";

import { Badge, Card, Container, Section } from "@/components/ui";

export function CtaSection() {
  return (
    <Section id="evaluacion" className="scroll-mt-28 pb-20">
      <Container>
        <Card padding="lg" className="bg-[#15100e] text-white shadow-[0_24px_60px_rgba(0,0,0,0.34)] border border-white/10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <Badge variant="accent" className="bg-[color:var(--accent-soft)] text-[color:var(--highlight)]">
                Evaluación
              </Badge>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.05]">
                La evaluación busca interpretar resultados y orientar la intervención desde la psicomotricidad.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#d7cfc6]">
                El cierre del seminario integra los criterios de observación para
                reconocer fortalezas, dificultades y posibles estrategias de apoyo.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="#inicio"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[color:var(--accent)] px-6 text-sm font-medium text-[#090504] shadow-[0_12px_28px_rgba(255,106,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff812f] hover:shadow-[0_16px_36px_rgba(255,106,0,0.28)]"
              >
                Volver al inicio
              </Link>
              <Link
                href="#proyectos"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/12 px-6 text-sm font-medium text-[#f5eee7] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/6"
              >
                Revisar la secuencia
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Identificar el nivel de desarrollo psicomotor.",
              "Detectar fortalezas y dificultades.",
              "Orientar la planificación de estrategias de intervención.",
              "Favorecer el desarrollo integral del niño.",
              "Interpretar los resultados obtenidos.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-[#f5eee7]">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}