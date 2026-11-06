import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { OrgJsonLd } from "./components/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pets.loanpaylogic.com"),
  title: {
    default: "LoanPay Pets — Happy Dogs, Happy Cats, Happy Homes",
    template: "%s | LoanPay Pets",
  },
  description:
    "LoanPay Pets helps dog and cat families with adoption, training, nutrition, health, and budgeting guides written in plain friendly language.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pets.loanpaylogic.com",
    siteName: "LoanPay Pets",
    title: "LoanPay Pets — Happy Dogs, Happy Cats, Happy Homes",
    description:
      "Friendly, vet-informed guides for dog and cat adoption, training, nutrition, health, safety, and everyday costs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Pets — Happy Dogs, Happy Cats, Happy Homes",
    description:
      "Friendly, vet-informed guides for dog and cat adoption, training, nutrition, health, safety, and everyday costs.",
  },
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-4906207495792820",
  },
};

const NAV = [
  { href: "/dog-adoption-checklist", label: "🐶 Dogs" },
  { href: "/cat-adoption-checklist", label: "🐱 Cats" },
  { href: "/pet-vaccination-schedule", label: "💉 Health" },
  { href: "/vet-costs-guide", label: "💰 Costs" },
  { href: "/pet-budget-calculator", label: "🧮 Budget" },
  { href: "/pet-insurance-guide", label: "🛡️ Insurance" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="paw-shell min-h-screen">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <OrgJsonLd />
        <header className="mx-auto w-full max-w-6xl px-4 pt-5">
          <div className="bubble-card flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <Link href="/" className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                style={{ background: "#dcf5f1", border: "2px solid #b9e8e1" }}
              >
                🐾
              </span>
              <span>
                <span className="font-plump block text-xl leading-none">
                  LoanPay Pets
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0b7d73]">
                  happy pets · calm humans
                </span>
              </span>
            </Link>
            <nav aria-label="Primary" className="flex flex-wrap gap-1">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="nav-pill">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-6xl px-4 pb-10">
          <div className="bubble-card px-6 py-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-plump text-lg">🐾 LoanPay Pets</p>
              <p className="text-sm text-[#6f5f59]">
                Friendly pet guides for everyday dog and cat families.
              </p>
            </div>
            <nav
              aria-label="Footer"
              className="mt-4 flex flex-wrap gap-2 text-sm font-bold"
            >
              <Link className="nav-pill" href="/">
                Home
              </Link>
              <Link className="nav-pill" href="/about">
                About
              </Link>
              <Link className="nav-pill" href="/contact">
                Contact
              </Link>
              <Link className="nav-pill" href="/privacy-policy">
                Privacy
              </Link>
              <Link className="nav-pill" href="/terms">
                Terms
              </Link>
              <Link className="nav-pill" href="/disclaimer">
                Disclaimer
              </Link>
              <Link className="nav-pill" href="/pet-budget-calculator">
                Budget calculator
              </Link>
            </nav>
            <p className="mt-4 text-xs leading-relaxed text-[#6f5f59]">
              Pet-health articles on this site share general education only and
              are not veterinary advice. Always consult your own veterinarian
              about your pet. See our{" "}
              <Link href="/disclaimer" className="underline">
                disclaimer
              </Link>
              .
            </p>
            <p className="mt-2 text-xs text-[#6f5f59]">
              © 2026 LoanPay Pets · pets.loanpaylogic.com · Updated: October
              2026 · Part of{" "}
              <a href="https://loanpaylogic.com" className="underline">LoanPay Logic</a> ·{" "}
              <a href="https://insurance.loanpaylogic.com" className="underline">Pet Insurance</a> ·{" "}
              <a href="https://home.loanpaylogic.com" className="underline">Home</a> ·{" "}
              <a href="https://food.loanpaylogic.com" className="underline">Kitchen</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
