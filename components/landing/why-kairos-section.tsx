import { Bot, Gauge, Handshake, Layers3, LineChart, Zap } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const reasons = [
  {
    title: "Business-first",
    text: "We start from the goal, not from the technology stack.",
    icon: Layers3,
  },
  {
    title: "More than task execution",
    text: "We challenge weak logic, help define priorities, and think with the founder.",
    icon: Handshake,
  },
  {
    title: "Fast and non-bureaucratic",
    text: "No corporate theater. Clear communication, fast decisions, direct execution.",
    icon: Zap,
  },
  {
    title: "From idea to launch",
    text: "We can start from a raw idea and turn it into a working product or system.",
    icon: Gauge,
  },
  {
    title: "Launch plus improvement",
    text: "We connect analytics and help improve the product after launch.",
    icon: LineChart,
  },
  {
    title: "Strong AI capability",
    text: "We can implement AI and automation where they create real business leverage.",
    icon: Bot,
  },
];

const traditional = [
  "waits for detailed tasks",
  "focuses on output",
  "disappears after launch",
  "rarely challenges the product logic",
  "treats analytics as optional",
];

const kairos = [
  "helps shape the idea",
  "focuses on business outcome",
  "supports launch and improvement",
  "challenges weak assumptions",
  "connects analytics and metrics",
  "adds AI/automation where useful",
];

export function WhyKairosSection() {
  return (
    <section className="border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Why Kairos"
            title="Why businesses work with Kairos"
            description="Fast. Direct. Business-minded. No heavy bureaucracy."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map(({ title, text, icon: Icon }, index) => (
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

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[24px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Traditional dev team</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {traditional.map((item) => (
                  <li key={item} className="rounded-2xl border border-[var(--border)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass-panel-strong rounded-[24px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Kairos</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted-strong)]">
                {kairos.map((item) => (
                  <li key={item} className="rounded-2xl border border-[rgba(53,231,255,0.18)] bg-[rgba(53,231,255,0.05)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
