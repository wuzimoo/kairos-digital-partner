const services = [
  {
    title: "AI Strategy",
    description:
      "Roadmaps, prioritization, and practical use-case selection based on business reality.",
  },
  {
    title: "Automation",
    description:
      "Reduce repetitive work with connected systems, logic, and AI-assisted workflows.",
  },
  {
    title: "Lead Generation Systems",
    description:
      "Design outreach and inbound flows that create a more predictable pipeline.",
  },
  {
    title: "CRM & Operational Architecture",
    description:
      "Build cleaner internal processes across sales, delivery, and client operations.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">SERVICES</p>
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
            Strategy and implementation for teams that need working systems.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
            Engagements are scoped around bottlenecks, process realities, and measurable execution quality.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
