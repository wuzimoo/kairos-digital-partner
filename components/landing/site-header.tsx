"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/landing/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#case-study", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#ai", label: "AI" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(148,163,184,0.12)] bg-[rgba(7,11,20,0.7)] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-4">
        <a href="#top" className="inline-flex items-center gap-3" aria-label="Kairos home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(53,231,255,0.3)] bg-[rgba(53,231,255,0.08)] text-sm font-bold text-[var(--accent)]">
            K
          </span>
          <span className="font-display text-xl font-semibold tracking-[0.04em] text-white">Kairos</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className={buttonVariants({ variant: "primary", size: "sm" })}>
            Book a Digital System Audit
          </a>
        </div>

        <button
          type="button"
          className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "lg:hidden")}
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-[rgba(148,163,184,0.12)] bg-[rgba(7,11,20,0.96)] lg:hidden">
          <Container className="flex flex-col gap-3 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[rgba(148,163,184,0.12)] px-4 py-3 text-sm text-[var(--muted-strong)] transition hover:border-[rgba(53,231,255,0.24)] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={buttonVariants({ variant: "primary", size: "default" })}
              onClick={() => setIsOpen(false)}
            >
              Book a Digital System Audit
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
