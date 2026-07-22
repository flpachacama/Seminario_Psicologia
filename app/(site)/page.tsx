import {
  CtaSection,
  DifferentiatorsSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TrustSection,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}