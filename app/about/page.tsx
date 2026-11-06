import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LoanPay Pets: Our Editorial Team",
  description:
    "About LoanPay Pets: meet our pet editorial team, our vet-review process, and how we keep every guide accurate, original, and genuinely helpful.",
  alternates: { canonical: "https://pets.loanpaylogic.com/about" },
  openGraph: {
    title: "About LoanPay Pets: Our Editorial Team",
    description:
      "Meet the LoanPay Pets editorial team and learn how every guide is researched, written, and reviewed.",
    url: "https://pets.loanpaylogic.com/about",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary",
    title: "About LoanPay Pets: Our Editorial Team",
    description:
      "Meet the LoanPay Pets editorial team and learn how every guide is researched, written, and reviewed.",
  },
};

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <span className="bubble-chip chip-teal">🐾 About us</span>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        About LoanPay Pets
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: November 6, 2026
      </p>
      <div className="article-body">
        <p>
          LoanPay Pets is a friendly pet-care library for everyday dog and
          cat families. We write long, practical guides on adoption,
          training, nutrition, health, safety, and budgeting — the real
          questions owners type into search at 11 p.m. with a new puppy
          chewing the table leg. Every article is 100% original prose
          written for this site, researched against veterinary and shelter
          sources, and updated regularly. We are part of the LoanPayLogic
          network of lifestyle guides, and this pets edition lives at{" "}
          <strong>pets.loanpaylogic.com</strong>.
        </p>
        <h2>Who writes and reviews our guides?</h2>
        <p>
          This page was written by <strong>Sarah Mitchell</strong>, Senior
          Pet Writer; reviewed for accuracy by <strong>David Chen</strong>,
          our independent fact-checking reviewer; and edited by{" "}
          <strong>Emily Roberts</strong>, Managing Editor. Together, this
          three-person team brings over 25 years of combined experience in
          pet-care education, fact-checking, and digital publishing to
          every guide on this site, and each member signs off on the final
          version before it goes live. We keep guidance aligned
          with AAHA, AAFP, AVMA, and university veterinary sources cited
          on each page.
        </p>
        <h2>How do we keep content trustworthy?</h2>
        <p>
          Health articles carry clear general-education notices, link our{" "}
          <Link href="/disclaimer">health disclaimer</Link>, and always
          direct readers to their own veterinarian for diagnosis and
          treatment. We never publish dosages, never diagnose, and never
          substitute for professional care. Costs are presented as
          researched ranges with dates, and we disclose advertising clearly
          in our <Link href="/privacy-policy">privacy policy</Link>. Readers
          can reach us anytime at{" "}
          <a href="mailto:hello@pets.loanpaylogic.com">
            hello@pets.loanpaylogic.com
          </a>{" "}
          with corrections, questions, or story suggestions — we read every
          note and update articles when sources evolve.
        </p>
        <p className="text-sm text-[#6f5f59]">
          Related: <Link href="/">home hub</Link> ·{" "}
          <Link href="/contact">contact</Link> ·{" "}
          <Link href="/disclaimer">disclaimer</Link> ·{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </article>
  );
}
