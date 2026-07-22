import Image from "next/image";

import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const aboutPoints = [
  "La psicomotricidad integra movimiento, cognición y desarrollo nervioso.",
  "Cada fase del sistema nervioso refina la capacidad motora.",
  "El resultado visible es control, coordinación y eficiencia del movimiento.",
];

export function AboutSection() {
  return (
    <Section id="nosotros" className="scroll-mt-28 bg-[#0b0706]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow={<Badge>Psicomotricidad</Badge>}
              title="La expresión final del desarrollo nervioso"
              description="La psicomotricidad aparece como síntesis del proceso: un movimiento más coordinado, más preciso y más eficiente."
            />

            <ul className="mt-7 space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[color:var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_4px_rgba(255,106,0,0.12)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <Card padding="none" className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-white/6">
                <Image
                  src="/images/WhatsApp%20Image%202026-07-21%20at%2022.33.61.jpeg"
                  alt="Niño realizando una actividad de psicomotricidad junto a una terapeuta"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card padding="md" interactive>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--highlight)]">
                  Control
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-[#f5eee7]">
                  Base del movimiento básico.
                </p>
              </Card>
              <Card padding="md" interactive>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--highlight)]">
                  Coordinación
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-[#f5eee7]">
                  Habilidades motoras finas y precisión.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}