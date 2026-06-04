import { AiSection } from "@/components/landing/ai-section";
import { CaseStudySection } from "@/components/landing/case-study-section";
import { ContactSection } from "@/components/landing/contact-section";
import { CredibilityStrip } from "@/components/landing/credibility-strip";
import { HeroSection } from "@/components/landing/hero-section";
import { OfferSection } from "@/components/landing/offer-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ProcessSection } from "@/components/landing/process-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhyKairosSection } from "@/components/landing/why-kairos-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(37,244,238,0.18),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[22rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(110,102,255,0.16),_transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(0,185,255,0.12),_transparent_70%)] blur-3xl" />
        <div className="surface-grid absolute inset-0 opacity-60" />
      </div>

      <SiteHeader />
      <main className="relative z-10">
        <HeroSection />
        <CredibilityStrip />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudySection />
        <AiSection />
        <WhyKairosSection />
        <OfferSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
