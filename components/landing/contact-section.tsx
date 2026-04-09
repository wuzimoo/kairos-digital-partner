import { ArrowUpRightIcon } from "./icons";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--ink)] py-16 text-[var(--paper)] sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">CONTACT</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Let&apos;s design the right system for your business.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Tell us what is slowing the business down, and we will propose the highest-leverage automation or systems fix.
          </p>

          <div className="mt-10 grid gap-3 sm:max-w-lg sm:grid-cols-3">
            {/* Replace links below with final Telegram/email/booking URLs */}
            <a href="https://t.me/your_handle" className="contact-link" target="_blank" rel="noreferrer">
              Telegram
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a href="mailto:hello@kairos.agency" className="contact-link">
              Email
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a href="https://cal.com/kairos/strategy-call" className="contact-link" target="_blank" rel="noreferrer">
              Book a call
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <form className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-7" aria-label="Contact Kairos">
          <div className="space-y-4">
            <label className="form-field">
              Full name
              <input type="text" name="fullName" autoComplete="name" required className="form-input" />
            </label>

            <label className="form-field">
              Work email
              <input type="email" name="email" autoComplete="email" required className="form-input" />
            </label>

            <label className="form-field">
              Company
              <input type="text" name="company" autoComplete="organization" className="form-input" />
            </label>

            <label className="form-field">
              What do you need help with?
              <input type="text" name="scope" required className="form-input" />
            </label>

            <label className="form-field">
              Optional details
              <textarea name="details" rows={4} className="form-input resize-y" />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
