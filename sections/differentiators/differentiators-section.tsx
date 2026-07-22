import Image from "next/image";

import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const contentBlocks = [
  {
    title: "Desarrollo del sistema nervioso y su relación con la psicomotricidad",
    body: "Neurogénesis, Migración neuronal, Especialización neuronal, Poda neuronal.",
  },
  {
    title: "Relación entre el desarrollo cerebral y la psicomotricidad",
    body: "El desarrollo cerebral sostiene el control motor, la coordinación y el refinamiento de la acción psicomotriz.",
  },
  {
    title: "Diagnóstico y valoración",
    body: "Analizar los aspectos clave para una adecuada comprensión de los diferentes instrumentos y para un uso riguroso de ellos.",
  },
];

const objectives = [
  "Conocer diversas escalas de evaluación psicomotriz utilizadas en Educación Infantil o en primer ciclo de Educación Primaria.",
  "Analizar los distintos posibles objetivos que pueden perseguirse con la aplicación de estos instrumentos.",
  "Valorar el uso de sistemas de observación, cuestionarios, escalas de desarrollo madurativo y tests, como instrumentos que permiten objetivar datos en contextos educativos.",
  "Aprender a diseñar y llevar a la práctica técnicas de observación de utilidad en estas etapas educativas y a reconocer las posibles limitaciones en la aplicación de estos instrumentos.",
];

const methodologyPoints = [
  "Exposiciones académicas.",
  "Análisis de casos.",
  "Talleres prácticos.",
  "Demostraciones motrices.",
  "Evaluaciones formativas.",
  "Actividades colaborativas.",
  "Retroalimentación especializada.",
];

export function DifferentiatorsSection() {
  return (
    <Section id="contenido" className="scroll-mt-28 bg-[#0d0908]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow={<Badge variant="accent">Contenido</Badge>}
            title="Contenido académico"
            className="max-w-3xl [&>h2]:text-[1.7rem] sm:[&>h2]:text-[2.3rem] lg:[&>h2]:text-[2.65rem] [&>p]:text-[0.92rem] sm:[&>p]:text-[0.98rem]"
          />

          <Card padding="none" className="overflow-hidden">
            <div className="relative aspect-[16/9] bg-white/6">
              <Image
                src="/images/WhatsApp%20Image%202026-07-21%20at%2022.33.56.jpeg"
                alt="Contenido académico del seminario"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Card>

          <div className="grid gap-4 xl:grid-cols-3">
            {contentBlocks.map((block) => (
              <Card key={block.title} padding="md" interactive>
                <h3 className="text-[1rem] font-semibold tracking-tight text-[#f5eee7] sm:text-[1.05rem]">
                  {block.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-7 text-[color:var(--muted)] sm:text-[0.96rem]">
                  {block.body}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <Card padding="lg" interactive>
              <div className="flex h-full flex-col gap-4">
                <Badge variant="outline">Objetivos</Badge>
                <p className="text-[0.92rem] leading-7 text-[color:var(--muted)] sm:text-[0.96rem]">
                  Analizar los aspectos clave para una adecuada comprensión de los diferentes instrumentos y para un uso riguroso de ellos.
                </p>
                <ul className="space-y-3">
                  {objectives.map((objective) => (
                    <li key={objective} className="flex gap-3 text-[0.9rem] leading-7 text-[color:var(--muted)] sm:text-[0.96rem]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_4px_rgba(255,106,0,0.12)]" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card padding="lg" interactive>
              <div className="flex h-full flex-col gap-4">
                <Badge variant="outline">Metodología</Badge>
                <h3 className="text-[1rem] font-semibold tracking-tight text-[#f5eee7] sm:text-[1.05rem]">
                  Metodología Psicomotriz
                </h3>
                <p className="text-[0.92rem] leading-7 text-[color:var(--muted)] sm:text-[0.96rem]">
                  El seminario combina teoría y práctica mediante una metodología activa centrada en el aprendizaje experiencial.
                </p>
                <div className="space-y-3">
                  {methodologyPoints.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[0.9rem] leading-6 text-[#f5eee7] sm:text-[0.95rem]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}