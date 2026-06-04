import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wuzimoo.github.io"),
  title: "Kairos — Digital & Software Partner",
  description:
    "Kairos helps businesses build, launch, and improve digital products, platforms, software systems, analytics, automation, and AI-enabled workflows.",
  openGraph: {
    title: "Kairos — Digital & Software Partner",
    description:
      "Kairos helps businesses build, launch, and improve digital products, platforms, software systems, analytics, automation, and AI-enabled workflows.",
    type: "website",
    url: "https://wuzimoo.github.io/kairos-digital-partner/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
