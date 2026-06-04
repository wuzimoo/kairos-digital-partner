import { AlertCircle, Bot, ChartNoAxesCombined, FileCog } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const problems = [
  {
    title: "Raw idea, no clear product logic",
    text: "You know what you want to build, but the flows, roles, MVP scope, monetization, and priorities are still unclear.",
    icon: AlertCircle,
  },
  {
    title: "Developers wait for perfect tasks",
    text: "Traditional dev teams often need a detailed technical brief. We help shape the logic before writing code.",
    icon: FileCog,
  },
  {
    title: "Launch without metrics",
    text: "A product can go live and still leave you blind. We connect analytics, track behavior, and improve based on data.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI without a business case",
    text: "AI is useful only when it improves operations, product experience, support, analytics, or team productivity.",
    icon: Bot,
  },
];

export function ProblemSection() {
  return (
    <section id="work" className="anchor-offset border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Problem"
            title="Most businesses don’t need just more developers. They need a partner who can think through the system."
            description="Many projects fail before development even starts: weak product logic, unclear business goals, overloaded MVPs, missing analytics, disconnected tools, and teams that only execute tickets without challenging the logic."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="glass-panel glow-outline h-full rounded-[22px] p-6">
                <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-lg font-medium text-[var(--muted-strong)]">
            Kairos closes the gap between business idea and working software.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
