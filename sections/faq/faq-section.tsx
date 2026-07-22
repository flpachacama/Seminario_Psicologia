import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const faqs = [
  {
    question: "¿Qué es la neurogénesis?",
    answer: "Es la etapa inicial donde las células se dividen y dan origen a la base del desarrollo psicomotriz.",
  },
  {
    question: "¿Qué ocurre en la migración neuronal?",
    answer: "Las neuronas se desplazan por el encéfalo y contribuyen al control motor básico.",
  },
  {
    question: "¿Cómo se relaciona la especialización neuronal con la coordinación?",
    answer: "Permite conexiones complejas y favorece las habilidades motoras finas y la coordinación.",
  },
  {
    question: "¿Para qué sirve la poda neuronal?",
    answer: "Refina el movimiento, fortalece las conexiones útiles y mejora la eficiencia motora.",
  },
];

export function FaqSection() {
  return (
    <Section id="preguntas-frecuentes" className="scroll-mt-28 bg-[#0d0908]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow={<Badge variant="outline">Preguntas clave</Badge>}
            title="Aclaraciones rápidas sobre el contenido del seminario"
            description="Las preguntas ayudan a fijar los conceptos esenciales del proceso de desarrollo y su vínculo con la psicomotricidad."
          />

          <div className="grid gap-4">
            {faqs.map((item) => (
              <Card key={item.question} padding="md" interactive>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium tracking-tight text-[#f5eee7]">
                    {item.question}
                    <span className="text-[color:var(--highlight)] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}