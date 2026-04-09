const testimonials = [
  {
    quote: "They did not just automate tasks. They cleaned up how the team actually works.",
    name: "A. M.",
    title: "COO, B2B Service Firm",
  },
  {
    quote: "Fast, structured, and focused on implementation instead of AI theater.",
    name: "N. K.",
    title: "Founder, Growth Agency",
  },
  {
    quote: "Clear thinking, strong execution, and zero fluff.",
    name: "D. R.",
    title: "Head of Operations, Professional Services",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--ink-muted)]">TESTIMONIALS</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
          Operational teams describe the work the same way: clear and useful.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name + testimonial.title} className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <p className="text-lg leading-relaxed text-[var(--ink)]">“{testimonial.quote}”</p>
              <footer className="mt-6 border-t border-[var(--border)] pt-4 text-sm text-[var(--ink-muted)]">
                <p className="font-medium text-[var(--ink-soft)]">{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
