import { BrainCircuit, FileStack, Settings2, Sparkles } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const cards = [
  {
    title: "AI for operations",
    description: "Automate repetitive internal work, routing, summaries, notifications, and process logic.",
    icon: Settings2,
  },
  {
    title: "AI for products",
    description: "Add smart recommendations, assistants, search, classification, personalization, or support flows.",
    icon: Sparkles,
  },
  {
    title: "AI for teams",
    description: "Train your team to use AI tools properly and integrate them into daily work.",
    icon: BrainCircuit,
  },
  {
    title: "AI for data",
    description: "Process documents, extract insights, classify information, summarize, and connect workflows.",
    icon: FileStack,
  },
];

export function AiSection() {
  return (
    <section id="ai" className="anchor-offset border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="AI & Automation"
            title="AI is not the label. It’s leverage."
            description="Kairos has strong AI expertise, but we don’t sell AI for hype. We use it where it improves the product, operations, support, analytics, internal workflows, or team productivity."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="glass-panel rounded-[22px] p-6">
                <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(110,102,255,0.12)] p-3 text-[#b8b2ff]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass-panel-strong mt-8 rounded-[24px] px-6 py-5 text-sm font-medium text-[var(--muted-strong)] sm:text-base">
            If AI does not create leverage, we will not force it into the project.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
