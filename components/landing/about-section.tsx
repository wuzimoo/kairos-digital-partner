export function AboutSection() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">ABOUT</p>
          <h2 className="font-display text-4xl leading-[1.08] text-[var(--ink)] sm:text-5xl">We build systems, not demos.</h2>
        </div>

        <div className="relative rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8 lg:col-span-7">
          <div className="pointer-events-none absolute -right-12 -top-16 h-32 w-32 rounded-full border border-[var(--border)] opacity-55" />
          <div className="pointer-events-none absolute right-14 top-12 h-0.5 w-24 bg-[var(--border-strong)]/60" />

          <p className="text-lg leading-relaxed text-[var(--ink-soft)]">
            Most companies do not need &quot;more AI ideas.&quot; They need cleaner processes, better workflows, and
            implementation that actually works inside the business.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">
            Kairos helps founders and operators redesign how work gets done with automations, internal tools, AI assistants,
            CRM logic, and practical system architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-secondary">
              Learn more
            </a>
            <a href="#contact" className="btn-primary">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
