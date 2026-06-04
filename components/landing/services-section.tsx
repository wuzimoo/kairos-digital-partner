"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Code2,
  Layers3,
  Rocket,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const services = [
  {
    title: "Digital Products & Platforms",
    description: "Marketplaces, portals, SaaS-like tools, web platforms, client-facing systems, and MVPs.",
    deliverables: ["marketplace platforms", "web apps", "portals", "MVPs", "admin panels"],
    outcome: "your idea becomes a working product.",
    icon: Layers3,
  },
  {
    title: "Business Logic & System Design",
    description: "We help shape the product before development: user flows, roles, monetization logic, operations, admin logic, and MVP scope.",
    deliverables: ["product logic", "user scenarios", "role maps", "MVP scope", "system architecture"],
    outcome: "the system gets defined before code makes it expensive.",
    icon: Workflow,
  },
  {
    title: "Software Development",
    description: "Frontend, backend, databases, integrations, admin panels, custom systems, and scalable software foundations.",
    deliverables: ["frontend", "backend", "databases", "APIs", "integrations"],
    outcome: "you get software that fits the business, not just the backlog.",
    icon: Code2,
  },
  {
    title: "Analytics & Metrics",
    description: "We connect tools like Microsoft Clarity, PostHog, event tracking, funnels, dashboards, and behavior analytics.",
    deliverables: ["PostHog", "Clarity", "event tracking", "funnels", "dashboards"],
    outcome: "decisions are based on data, not guesses.",
    icon: BarChart3,
  },
  {
    title: "AI & Automation",
    description: "AI assistants, internal workflows, support automation, document processing, recommendations, and team AI enablement.",
    deliverables: ["AI workflows", "automation", "internal assistants", "data processing", "team training"],
    outcome: "manual work drops where it actually creates leverage.",
    icon: Bot,
  },
  {
    title: "Continuous Improvement",
    description: "After launch, we analyze behavior, find bottlenecks, recommend improvements, and implement better product flows.",
    deliverables: ["UX improvements", "conversion fixes", "new features", "performance optimization", "growth iteration"],
    outcome: "the product keeps improving after version one goes live.",
    icon: Rocket,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="anchor-offset border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="What We Build"
            title="Platforms, systems, and digital products designed around business logic — not just technical tasks."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, deliverables, outcome, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <motion.article
                className="glass-panel glow-outline h-full rounded-[24px] p-6"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(148,163,184,0.15)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs text-[var(--muted-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[20px] border border-[rgba(53,231,255,0.16)] bg-[rgba(53,231,255,0.06)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">{outcome}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
