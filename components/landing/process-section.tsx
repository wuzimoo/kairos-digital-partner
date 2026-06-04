"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const steps = [
  {
    title: "Diagnose",
    description:
      "We understand the business goal, constraints, users, revenue logic, and the real reason this product/system needs to exist.",
  },
  {
    title: "Shape",
    description:
      "We turn the idea into product logic: flows, roles, MVP scope, features, priorities, and success metrics.",
  },
  {
    title: "Design",
    description: "We create the structure, UX direction, technical architecture, and implementation plan.",
  },
  {
    title: "Build",
    description: "We develop the product or system quickly and directly, without heavy bureaucracy.",
  },
  {
    title: "Launch & Measure",
    description: "We launch, connect analytics, track user behavior, set up events, and check what actually happens.",
  },
  {
    title: "Improve",
    description: "We recommend and implement improvements based on real data, not assumptions.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="anchor-offset border-b soft-divider py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Process"
            title="From idea to launch — and beyond."
            description="Launch is not the finish line. It’s where the real product work starts."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <motion.article
                className="glass-panel rounded-[24px] p-6"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(53,231,255,0.22)] bg-[rgba(53,231,255,0.08)] text-sm font-bold text-[var(--accent)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
