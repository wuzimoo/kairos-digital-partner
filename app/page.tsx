import { AboutSection } from "@/components/landing/about-section";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { ContactSection } from "@/components/landing/contact-section";
import { CredibilityStrip } from "@/components/landing/credibility-strip";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { UseCasesGrid } from "@/components/landing/use-cases-grid";

export default function Home() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <main>
        <HeroSection />
        <CredibilityStrip />
        <AboutSection />
        <UseCasesGrid />
        <ServicesSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
