const steps = [
  {
    title: "Audit the bottleneck",
    description: "We map the workflow friction, handoff gaps, and repetitive work slowing outcomes.",
  },
  {
    title: "Design the operating logic",
    description: "We define process rules, automation checkpoints, and decision paths before building.",
  },
  {
    title: "Build the system",
    description: "We implement the workflows, integrations, and tooling in your real stack.",
  },
  {
    title: "Iterate with the team",
    description: "We refine based on usage data and frontline feedback to keep execution stable.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">PROCESS</p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">How we work</h2>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-[var(--border)] bg-white p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-muted)]">STEP {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
