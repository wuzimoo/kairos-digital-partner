import { ArrowRight, BarChart3, Boxes, Lightbulb, Settings, Workflow } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { buttonVariants } from "@/components/ui/button";

const detailCards = [
  {
    title: "Challenge",
    text: "Turn a marketplace idea into a working digital platform.",
    icon: Lightbulb,
  },
  {
    title: "Role",
    text: "Development + product/business logic + analytics + recommendations.",
    icon: Workflow,
  },
  {
    title: "Tools",
    text: "Custom software, Clarity, PostHog, tracking, dashboards, product improvements.",
    icon: Settings,
  },
  {
    title: "Result / Value",
    text: "Client received not only a platform, but a system for learning from users and improving the marketplace after launch.",
    icon: BarChart3,
  },
];

export function CaseStudySection() {
  return (
    <section id="case-study" className="anchor-offset border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Featured Case"
            title="Atrady: building a marketplace for Latvia"
            description="An OLX-like marketplace where Kairos supported not only development, but also product logic, metrics, analytics, recommendations, and implementation."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <Reveal>
            <div className="glass-panel-strong overflow-hidden rounded-[28px] p-5 sm:p-6">
              <div className="rounded-[22px] border border-[var(--border)] bg-[rgba(7,11,20,0.82)] p-4">
                <div className="flex flex-wrap items-center gap-3 border-b soft-divider pb-4">
                  <div className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">Atrady Marketplace</div>
                  <div className="rounded-full border border-[rgba(53,231,255,0.24)] bg-[rgba(53,231,255,0.08)] px-3 py-1 text-xs text-[var(--accent)]">
                    Idea → Marketplace → Analytics → Improvements
                  </div>
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_240px]">
                  <div className="rounded-[20px] border border-[var(--border)] bg-[rgba(15,23,42,0.72)] p-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--muted)]">
                      <Boxes className="h-4 w-4 text-[var(--accent)]" />
                      Search listings, categories, and sellers
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Vehicles", "Electronics", "Property"].map((item) => (
                        <div key={item} className="rounded-[18px] border border-[var(--border)] bg-[rgba(8,13,26,0.9)] px-4 py-5 text-sm font-medium text-white">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3">
                      {[
                        "Listing feed with category filters and ranking logic",
                        "Seller dashboard and moderation flow",
                        "Marketplace admin logic and tracking-ready events",
                      ].map((line) => (
                        <div key={line} className="rounded-[18px] border border-[var(--border)] bg-[rgba(8,13,26,0.9)] px-4 py-4 text-sm text-[var(--muted-strong)]">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-[20px] border border-[var(--border)] bg-[rgba(8,13,26,0.9)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Signals</p>
                      <div className="mt-4 space-y-3">
                        {[
                          "Clarity sessions",
                          "PostHog funnels",
                          "Listing submission events",
                          "Drop-off recommendations",
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-3 py-3 text-sm text-white">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-[rgba(53,231,255,0.22)] bg-[rgba(53,231,255,0.06)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Marketplace loop</p>
                      <div className="mt-4 flex items-center justify-between gap-2 text-xs text-[var(--muted-strong)]">
                        <span>Acquire</span>
                        <ArrowRight className="h-4 w-4 text-[var(--accent)]" />
                        <span>Track</span>
                        <ArrowRight className="h-4 w-4 text-[var(--accent)]" />
                        <span>Improve</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="glass-panel rounded-[24px] p-6 text-base leading-7 text-[var(--muted)]">
                <p>
                  Atrady needed to build a marketplace for Latvia, similar in logic to OLX, but adapted to its own market
                  and business goals.
                </p>
                <p className="mt-4">
                  We did not just build features. We helped the client think through the product, understand what to
                  measure, connect analytics, and keep improving the platform.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {detailCards.map(({ title, text, icon: Icon }, index) => (
                <Reveal key={title} delay={0.12 + index * 0.06}>
                  <article className="glass-panel h-full rounded-[22px] p-5">
                    <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a href="#contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Want to build something similar?
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
