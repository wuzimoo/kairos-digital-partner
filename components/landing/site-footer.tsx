import { Container } from "@/components/landing/container";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#case-study", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t soft-divider py-8">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(53,231,255,0.3)] bg-[rgba(53,231,255,0.08)] text-sm font-bold text-[var(--accent)]">
              K
            </span>
            <span className="font-display text-xl font-semibold text-white">Kairos</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
            Digital & software partner for businesses building platforms, systems, and digital products.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-1 text-sm text-[var(--muted)] lg:text-right">
          <p>hello@kairos.agency</p>
          <p>Telegram / LinkedIn</p>
          <p>© {new Date().getFullYear()} Kairos. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
