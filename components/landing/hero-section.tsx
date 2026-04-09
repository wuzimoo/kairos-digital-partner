import Image from "next/image";

const proofPoints = [
  "Automation-first execution",
  "Built around business operations",
  "Fast, practical implementation",
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 pointer-events-none bg-grid-paper opacity-70" />
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-14 pt-14 sm:px-8 md:grid-cols-[minmax(0,1fr)_420px] md:pt-20 lg:pb-20">
        <div className="relative z-10 animate-rise-fade">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-[var(--ink-muted)] sm:text-xs">
            AI SYSTEMS &amp; OPERATIONAL DESIGN
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.03] text-[var(--ink)] sm:text-5xl lg:text-[4.2rem]">
            Right moment for your business and AI is now.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            Kairos designs AI-enabled systems that reduce manual work, improve operations, and turn messy workflows into
            scalable execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Book a Strategy Call
            </a>
            <a href="#cases" className="btn-secondary">
              See Case Studies
            </a>
          </div>

          <div className="mt-12 grid gap-3 border-t border-[var(--border)] pt-7 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <p key={point} className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--ink-soft)]">
                {point}
              </p>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[340px] animate-rise-fade delay-150 sm:min-h-[420px]">
          <div className="hero-orbit absolute inset-x-0 top-0 mx-auto h-[330px] w-[330px] rounded-full border border-[var(--border)] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.85),_rgba(245,245,243,0.6)_58%,_rgba(240,240,238,0.22)_100%)] sm:h-[400px] sm:w-[400px]" />
          <div className="hero-ring absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-strong)] sm:h-[355px] sm:w-[355px]" />
          <div className="hero-ring delay-75 absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] sm:h-[265px] sm:w-[265px]" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ink)]" />
          <div className="absolute left-8 top-10 h-[1px] w-16 bg-[var(--ink)]/60" />
          <div className="absolute bottom-12 right-6 hidden rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--ink-muted)] sm:block">
            Operational Intelligence
          </div>

          <div className="absolute bottom-0 left-0 rounded-2xl border border-[var(--border)] bg-white px-5 py-4 shadow-[0_10px_25px_rgba(17,17,17,0.06)]">
            <Image src="/kairos-logo.svg" alt="Kairos logo" width={160} height={33} className="h-auto w-[130px]" />
            <p className="mt-2 text-xs tracking-[0.14em] text-[var(--ink-muted)]">SYSTEMS STUDIO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
