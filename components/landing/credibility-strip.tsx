import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";

const capabilities = [
  "Marketplaces",
  "Platforms",
  "Internal Tools",
  "CRM Systems",
  "Dashboards",
  "AI Workflows",
  "Automation",
  "Analytics",
  "Custom Software",
];

export function CredibilityStrip() {
  return (
    <section className="border-b soft-divider py-8">
      <Container>
        <Reveal>
          <div className="glass-panel rounded-[26px] px-5 py-6 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted-strong)] sm:text-base">
                We don’t start with technology. We start with the business problem, then build the right system.
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(255,255,255,0.03)] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted-strong)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
