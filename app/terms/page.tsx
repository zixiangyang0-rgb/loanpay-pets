import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use for LoanPay Pets",
  description:
    "Terms of use for LoanPay Pets: acceptable use, content ownership, and liability limits. Please read these friendly ground rules before browsing.",
  alternates: { canonical: "https://pets.loanpaylogic.com/terms" },
  openGraph: {
    title: "Terms of Use for LoanPay Pets",
    description:
      "The friendly ground rules for reading and sharing LoanPay Pets guides.",
    url: "https://pets.loanpaylogic.com/terms",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use for LoanPay Pets",
    description:
      "The friendly ground rules for reading and sharing LoanPay Pets guides.",
  },
};

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <span className="bubble-chip chip-honey">📜 Terms</span>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026
      </p>
      <div className="article-body">
        <p>
          Welcome to LoanPay Pets. By reading pets.loanpaylogic.com you agree
          to these friendly ground rules. Our guides are original
          educational content for personal, non-commercial reading — share
          links freely, quote briefly with credit, but do not republish full
          articles without written permission. Pet-health content is general
          education, not veterinary advice, as our{" "}
          <Link href="/disclaimer">disclaimer</Link> explains in detail.
          Always consult your veterinarian about your pet.
        </p>
        <h2>What are the acceptable-use and liability basics?</h2>
        <p>
          Please browse kindly: no scraping that harms availability, no
          misrepresenting our content as professional advice, and no unlawful
          use. We work hard for accuracy and update articles as sources
          evolve, but we provide content as-is without warranties, and we
          are not liable for actions you take based on general information —
          professional guidance for your specific pet governs. External links
          to veterinary schools and associations are conveniences, not
          endorsements of every statement there. We may change content and
          these terms; continued use means acceptance. Questions:{" "}
          <a href="mailto:hello@pets.loanpaylogic.com">
            hello@pets.loanpaylogic.com
          </a>
          . Related: <Link href="/">home hub</Link> ·{" "}
          <Link href="/privacy-policy">privacy policy</Link> ·{" "}
          <Link href="/about">about</Link>.
        </p>
      </div>
    </article>
  );
}
