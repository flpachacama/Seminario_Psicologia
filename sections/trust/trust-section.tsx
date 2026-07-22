import Image from "next/image";

import { Badge, Card, Container, Section, SectionTitle } from "@/components/ui";

export function TrustSection() {
  return (
    <Section id="confianza" className="scroll-mt-28 bg-[#0d0908]">
      <Container>
        <div className="flex min-h-[86svh] flex-col justify-center gap-8 py-8 sm:py-12">
          <SectionTitle
            eyebrow={<Badge variant="outline">Contexto académico</Badge>}
            title="Institución y marco visual del seminario"
            className="max-w-3xl [&>h2]:text-[1.75rem] sm:[&>h2]:text-[2.3rem] lg:[&>h2]:text-[2.7rem] [&>p]:text-[0.92rem] sm:[&>p]:text-[0.98rem]"
          />

          <Card padding="none" className="mx-auto w-full max-w-6xl overflow-hidden">
            <div className="relative mx-auto aspect-[16/9] max-h-[74svh] w-full bg-white/6">
              <Image
                src="/images/WhatsApp%20Image%202026-07-21%20at%2023.16.61.jpeg"
                alt="Contexto académico del seminario"
                fill
                priority
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 90vw"
              />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}