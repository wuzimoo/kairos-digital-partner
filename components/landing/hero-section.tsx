"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, CircuitBoard, Rocket, Workflow } from "lucide-react";
import { Container } from "@/components/landing/container";
import { buttonVariants } from "@/components/ui/button";

const heroPills = [
  "Not just development.",
  "Business thinking built in.",
  "Build. Launch. Measure. Improve.",
];

const nodes = [
  { label: "Product Logic", icon: Workflow, className: "left-0 top-8 lg:left-2 lg:top-12", delay: 0.1 },
  { label: "Software", icon: CircuitBoard, className: "right-0 top-8 lg:right-4 lg:top-14", delay: 0.18 },
  { label: "Analytics", icon: BarChart3, className: "left-4 bottom-20 lg:left-8 lg:bottom-14", delay: 0.24 },
  { label: "AI", icon: Bot, className: "right-6 bottom-20 lg:right-8 lg:bottom-20", delay: 0.3 },
  { label: "Automation", icon: Rocket, className: "left-1/2 top-0 -translate-x-1/2 lg:top-2", delay: 0.36 },
  { label: "Growth", icon: ArrowRight, className: "left-1/2 bottom-0 -translate-x-1/2 lg:bottom-2", delay: 0.42 },
];

export function HeroSection() {
  return (
    <section id="top" className="anchor-offset relative overflow-hidden border-b soft-divider py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <div className="relative z-10">
          <motion.p
            className="section-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital & Software Partner
          </motion.p>

          <motion.h1
            className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-[4.5rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            Digital products and software systems <span className="text-gradient">with business thinking built in.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          >
            Kairos helps businesses build, launch, and improve platforms, marketplaces, internal tools, automation,
            AI-enabled workflows, and custom software — fast, directly, and without heavy bureaucracy.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.a href="#contact" className={buttonVariants({ variant: "primary", size: "lg" })} whileHover={{ y: -2 }}>
              Book a Digital System Audit
            </motion.a>
            <motion.a href="#process" className={buttonVariants({ variant: "secondary", size: "lg" })} whileHover={{ y: -2 }}>
              See how we work
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted-strong)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
          >
            From idea and business logic to development, analytics, AI, and continuous improvement.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          >
            {heroPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[var(--muted-strong)]"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[34rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <div className="glass-panel-strong relative min-h-[28rem] rounded-[32px] px-5 py-8 sm:px-6">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(53,231,255,0.14),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(110,102,255,0.14),_transparent_36%)]" />
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 560 480" aria-hidden="true">
              <g stroke="rgba(96,165,250,0.32)" strokeWidth="1.5" fill="none">
                <path d="M280 240L118 88" />
                <path d="M280 240L438 92" />
                <path d="M280 240L120 364" />
                <path d="M280 240L438 356" />
                <path d="M280 240L280 42" />
                <path d="M280 240L280 436" />
              </g>
            </svg>

            <motion.div
              className="glass-panel relative mx-auto flex min-h-[9rem] max-w-[15rem] flex-col justify-center rounded-[28px] border-[rgba(53,231,255,0.26)] p-6 text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Business Goal</span>
              <p className="mt-3 text-2xl font-semibold leading-tight text-white">Build the right system, then improve it.</p>
            </motion.div>

            {nodes.map(({ label, icon: Icon, className, delay }) => (
              <motion.div
                key={label}
                className={`glass-panel absolute w-[10.5rem] rounded-[22px] p-4 ${className}`}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay }}
              >
                <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-2.5 text-[var(--accent)]">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-medium text-white">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
