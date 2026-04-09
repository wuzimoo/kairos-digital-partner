import Image from "next/image";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(247,247,245,0.86)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-5 py-4 sm:px-8">
        <a href="#top" className="inline-flex items-center" aria-label="Kairos home">
          <Image src="/kairos-logo.svg" alt="Kairos" width={148} height={30} priority className="h-auto w-[132px] sm:w-[148px]" />
        </a>

        <div className="flex flex-1 items-center justify-end gap-5 sm:gap-7">
          <nav aria-label="Primary" className="flex items-center gap-3 text-sm text-[var(--ink-soft)] sm:gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link whitespace-nowrap py-1">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary px-4 py-2 text-xs sm:text-sm">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}
