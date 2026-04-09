const clients = ["Northline Ops", "Harborlane", "Vertex Studio", "Sable Group", "Atlas Clinic", "CedarWorks"];

export function CredibilityStrip() {
  return (
    <section aria-label="Credibility" className="border-b border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <p className="text-center text-sm text-[var(--ink-muted)] sm:text-base">
          Selected work across operations, automation, CRM, and lead generation
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {/* Replace placeholders below with real client logos/names when approved */}
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-center text-xs font-medium tracking-[0.12em] text-[var(--ink-muted)]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
