import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LoanPay Pets: Say Hello",
  description:
    "Contact LoanPay Pets with questions, corrections, or story ideas. We read every message and reply within a few business days — write to us!",
  alternates: { canonical: "https://pets.loanpaylogic.com/contact" },
  openGraph: {
    title: "Contact LoanPay Pets: Say Hello",
    description:
      "Contact LoanPay Pets with questions, corrections, or story ideas — we reply within a few business days.",
    url: "https://pets.loanpaylogic.com/contact",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary",
    title: "Contact LoanPay Pets: Say Hello",
    description:
      "Contact LoanPay Pets with questions, corrections, or story ideas — we reply within a few business days.",
  },
};

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <span className="bubble-chip chip-coral">💌 Contact</span>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Contact LoanPay Pets
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: November 6, 2026
      </p>
      <div className="article-body">
        <p>
          We love hearing from readers — corrections, topic requests,
          adoption success stories, and gentle disagreements about the best
          apartment dog. Email us at{" "}
          <a href="mailto:hello@pets.loanpaylogic.com">
            hello@pets.loanpaylogic.com
          </a>{" "}
          and a human on our editorial team will reply within three business
          days. For urgent pet-health concerns, please contact your
          veterinarian or nearest emergency clinic directly instead of
          waiting for email, since we cannot diagnose or treat animals.
        </p>
        <h2>What should you include in your message?</h2>
        <p>
          Tell us the article URL, what you expected, and what you found —
          screenshots help enormously for display issues. Messages to this
          page are read by our three-person editorial team:{" "}
          <strong>Sarah Mitchell</strong>, Senior Pet Writer, who drafts
          and maintains our guides; <strong>David Chen</strong>, our
          independent fact-checking reviewer, who verifies costs and
          definitions; and <strong>Emily Roberts</strong>, Managing Editor,
          who gives the final sign-off before anything is published. Our
          writers and reviewers cannot answer personal medical questions by
          email, but we can point you to the right guide or suggest what
          to ask your vet. We welcome source tips from veterinary
          professionals and shelter staff; please include your credentials
          and citable references.
        </p>
        <h2>Where else can you explore?</h2>
        <p>
          Start at our <Link href="/">home hub</Link>, browse the{" "}
          <Link href="/about">about page</Link> to meet the team, and review
          the <Link href="/disclaimer">disclaimer</Link> and{" "}
          <Link href="/privacy-policy">privacy policy</Link> for how we
          handle health content and data. Press and partnership inquiries
          use the same inbox with PRESS in the subject line.
        </p>
      </div>
    </article>
  );
}
