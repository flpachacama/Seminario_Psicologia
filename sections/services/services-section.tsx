import Image from "next/image";

import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

const expositors = [
  {
    name: "Heckel Grefa",
    image: "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.59.jpeg",
  },
  {
    name: "Ariel Guamán",
    image: "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.58.jpeg",
  },
  {
    name: "Leandro Pachacama",
    image: "/images/WhatsApp%20Image%202026-07-21%20at%2022.33.57.jpeg",
  },
];

export function ServicesSection() {
  return (
    <Section id="contenido" className="scroll-mt-28 bg-[#0b0706]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitle
            title="Expositores"
            className="max-w-2xl [&>h2]:text-[1.7rem] sm:[&>h2]:text-[2.35rem] lg:[&>h2]:text-[2.7rem] [&>p]:text-[0.92rem] sm:[&>p]:text-[0.98rem]"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expositors.map((expositor, index) => (
              <Card key={expositor.name} padding="md" interactive className="group overflow-hidden">
                <div className="flex h-full flex-col gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#120d0b]">
                    <Image
                      src={expositor.image}
                      alt={expositor.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 px-1 pb-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">0{index + 1}</Badge>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <h3 className="text-[1.1rem] font-semibold tracking-tight text-[#f5eee7] sm:text-[1.2rem]">
                      {expositor.name}
                    </h3>

                    <p className="text-[0.92rem] leading-6 text-[color:var(--muted)]">
                      Estudiante de la Universidad de las Fuerzas Armadas ESPE Carrera de Pedagogía de la Actividad Física y el Deporte
                    </p>
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