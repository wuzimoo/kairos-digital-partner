import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[var(--ink)] text-zinc-300">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-3 lg:items-end">
        <div>
          <Image src="/kairos-logo.svg" alt="Kairos" width={155} height={32} className="h-auto w-[145px] invert" />
          <p className="mt-3 text-sm text-zinc-400">AI systems and operational automation for execution-focused teams.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm lg:justify-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-zinc-400 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-1 text-sm text-zinc-400 lg:text-right">
          <p>hello@kairos.agency</p>
          <p>Telegram: @kairosagency</p>
          <p>© {new Date().getFullYear()} Kairos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
