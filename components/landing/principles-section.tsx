import { BarChart3, Brain, BriefcaseBusiness, Gauge, Handshake, Rocket } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const principles = [
  {
    title: "Business before code",
    text: "We don’t start from frameworks. We start from the business model, process, users, and goal.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Outcome over output",
    text: "Clients don’t need more screens or features. They need working systems that create business value.",
    icon: Gauge,
  },
  {
    title: "Fast beats bureaucratic",
    text: "We prefer quick alignment, clear scope, and visible progress over endless documentation.",
    icon: Rocket,
  },
  {
    title: "Data after launch",
    text: "We connect analytics and improve based on user behavior, not opinions.",
    icon: BarChart3,
  },
  {
    title: "AI where it matters",
    text: "AI is powerful when connected to a real process. We use it as leverage, not decoration.",
    icon: Brain,
  },
  {
    title: "Partner mindset",
    text: "We don’t just execute tasks. We think with you, challenge assumptions, and help move the project forward.",
    icon: Handshake,
  },
];

export function PrinciplesSection() {
  return (
    <section className="border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading kicker="How We Think" title="Business-first principles for product and software work." />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="glass-panel rounded-[22px] p-6">
                <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
