import Image from "next/image";

import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const projects = [
  {
    title: "Neurogénesis",
    description:
      "Células que se dividen y forman la base del desarrollo psicomotriz inicial.",
  },
  {
    title: "Migración neuronal",
    description:
      "Las neuronas se mueven en el encéfalo y ayudan al control motor básico.",
  },
  {
    title: "Especialización neuronal",
    description:
      "Se desarrollan conexiones complejas para habilidades motoras finas y coordinación.",
  },
  {
    title: "Poda neuronal",
    description:
      "Se fortalecen las conexiones útiles y se depuran las débiles para refinar el movimiento.",
  },
];

export function ProjectsSection() {
  return (
    <Section id="proyectos" className="scroll-mt-28 bg-[#0b0706]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            eyebrow={<Badge>Secuencia</Badge>}
            title="El desarrollo explicado como un recorrido visual"
            description="Cada tarjeta resume una parte del proceso hasta llegar a la psicomotricidad como resultado global."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <Card key={project.title} padding="none" interactive className="overflow-hidden">
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] bg-white/6">
                    <Image
                      src={
                        index === 0
                          ? "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.56.jpeg"
                          : index === 1
                          ? "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.60.jpeg"
                          : index === 2
                          ? "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.57.jpeg"
                          : "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.59.jpeg"
                      }
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  <div className="flex h-full flex-col gap-4 p-6">
                    <Badge variant="outline">Etapa {index + 1}</Badge>
                    <h3 className="text-lg font-semibold tracking-tight text-[#f5eee7]">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}