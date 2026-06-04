"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircleMore, Send, Wallet } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/landing/container";
import { Reveal } from "@/components/landing/reveal";
import { buttonVariants, Button } from "@/components/ui/button";

const contactOptions = [
  {
    label: "Email",
    value: "hello@kairos.agency",
    href: "mailto:hello@kairos.agency",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@kairosagency",
    href: "https://t.me/your_handle",
    icon: MessageCircleMore,
  },
  {
    label: "Book a call",
    value: "Calendly placeholder",
    href: "https://cal.com/kairos/digital-system-audit",
    icon: Send,
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="anchor-offset py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="glass-panel-strong rounded-[32px] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div>
                <p className="section-kicker">Digital System Audit</p>
                <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have an idea, platform, or system you need to build?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  Let’s map the business logic, define what should be built first, and show where software, analytics,
                  automation, or AI can create the most leverage.
                </p>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                  Fast. Direct. Business-minded. No heavy bureaucracy.
                </p>

                <div className="mt-8 space-y-3">
                  {contactOptions.map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="glass-panel flex items-center justify-between rounded-[22px] px-4 py-4 transition hover:border-[rgba(53,231,255,0.24)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex rounded-2xl border border-[var(--border)] bg-[rgba(53,231,255,0.08)] p-3 text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-white">{label}</span>
                          <span className="block text-sm text-[var(--muted)]">{value}</span>
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-6 sm:p-7">
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label className="field-label">
                    Name
                    <input className="field-input" type="text" name="name" placeholder="Your name" autoComplete="name" required />
                  </label>

                  <label className="field-label">
                    Company
                    <input
                      className="field-input"
                      type="text"
                      name="company"
                      placeholder="Company or project name"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="field-label">
                    Telegram or Email
                    <input
                      className="field-input"
                      type="text"
                      name="contact"
                      placeholder="@telegram or email@example.com"
                      required
                    />
                  </label>

                  <label className="field-label">
                    What do you want to build/improve?
                    <textarea
                      className="field-input min-h-32 resize-y"
                      name="scope"
                      placeholder="Marketplace, internal system, platform, analytics setup, automation, product improvement..."
                      required
                    />
                  </label>

                  <label className="field-label">
                    <span className="inline-flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-[var(--accent)]" />
                      Budget range optional
                    </span>
                    <input className="field-input" type="text" name="budget" placeholder="Optional" />
                  </label>

                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.18, ease: "easeOut" }}>
                    <Button type="submit" className="w-full" size="lg">
                      Tell us about your project
                    </Button>
                  </motion.div>
                </form>

                <div aria-live="polite" className="mt-4 min-h-6">
                  {submitted ? (
                    <p className="rounded-2xl border border-[rgba(110,231,183,0.25)] bg-[rgba(110,231,183,0.08)] px-4 py-3 text-sm text-[var(--success)]">
                      Thanks. We&apos;ll get back to you shortly.
                    </p>
                  ) : (
                    <p className="text-sm text-[var(--muted)]">Primary CTA: Book a Digital System Audit.</p>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:hello@kairos.agency" className={buttonVariants({ variant: "secondary", size: "sm" })}>
                    Email us
                  </a>
                  <a
                    href="https://t.me/your_handle"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    Telegram placeholder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
