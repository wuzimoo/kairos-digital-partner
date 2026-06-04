import { ArrowRight, Megaphone, Target, Users } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { buttonVariants } from "@/components/ui/button";

const pyramid = [
  {
    label: "1 Audience",
    title: "Founder-led businesses and SMB owners with a real business idea or operational need, but without a strong internal product/software team.",
    icon: Users,
  },
  {
    label: "1 Problem",
    title: "Good ideas and operational needs get stuck because there is no team that can shape, build, launch, measure, and improve the system.",
    icon: Target,
  },
  {
    label: "1 Product",
    title: "Kairos Digital Build Sprint",
    icon: ArrowRight,
  },
  {
    label: "1 Traffic Source",
    title: "Telegram outbound to entrepreneurs, founders, business owners, operators, and niche communities.",
    icon: Megaphone,
  },
  {
    label: "1 Converter",
    title: "Free 30-minute Digital System Audit",
    icon: ArrowRight,
  },
];

const inclusions = [
  "business/problem discovery",
  "product/system logic",
  "MVP scope",
  "UX/system flows",
  "technical architecture",
  "development roadmap",
  "first implementation phase",
  "analytics plan",
  "AI/automation opportunities",
  "next-step recommendations",
];

export function OfferSection() {
  return (
    <section className="border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Focused Offer"
            title="Focused offer. Clear path. No scattered services."
            description="We use a focused approach for new clients: one audience, one core problem, one flagship offer, one acquisition channel, and one conversion path."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
          <Reveal>
            <div className="space-y-3">
              {pyramid.map(({ label, title, icon: Icon }, index) => (
                <div
                  key={label}
                  className="glass-panel relative rounded-[22px] p-5 sm:p-6"
                  style={{ marginLeft: `${index * 10}px`, marginRight: `${index * 10}px` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{label}</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="glass-panel-strong rounded-[24px] p-6">
                <h3 className="text-2xl font-semibold text-white">Kairos Digital Build Sprint</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  A focused engagement where Kairos helps turn a business idea or software need into a clear product/system
                  plan, MVP scope, working implementation roadmap, and first build phase.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {inclusions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs text-[var(--muted-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass-panel rounded-[24px] p-6">
                <h3 className="text-xl font-semibold text-white">Free 30-minute Digital System Audit</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  On the audit call, we review the business idea, current process, or existing digital product and show what
                  should be built, simplified, measured, automated, or improved first.
                </p>
                <a href="#contact" className={`${buttonVariants({ variant: "primary", size: "lg" })} mt-6`}>
                  Book a Digital System Audit
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Focused does not mean we only do one type of project. It means the first sales motion is clear.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
