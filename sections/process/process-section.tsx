import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const processSteps = [
  {
    title: "Descubrimiento",
    description:
      "Inicio del proceso con neurogénesis y desarrollo psicomotriz inicial.",
  },
  {
    title: "Arquitectura",
    description:
      "La migración neuronal consolida el control motor básico.",
  },
  {
    title: "Diseño",
    description:
      "La especialización neuronal fortalece la coordinación y las habilidades motoras finas.",
  },
  {
    title: "Escalado",
    description:
      "La poda neuronal refina el movimiento y mejora la eficiencia motora.",
  },
];

export function ProcessSection() {
  return (
    <Section id="marco-teorico" className="scroll-mt-28 bg-[#0d0908]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow={<Badge variant="accent">Marco Teorico</Badge>}
            title="Base conceptual del seminario"
            description="Los conceptos teóricos se presentan en una secuencia que explica la evolución del sistema nervioso y su efecto en la psicomotricidad."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title} padding="lg" interactive>
                <div className="flex h-full flex-col gap-4">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="text-lg font-semibold tracking-tight text-[#f5eee7]">{step.title}</h3>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}