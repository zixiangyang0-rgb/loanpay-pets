import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Health Disclaimer: Education, Not Vet Advice",
  description:
    "Pet health disclaimer: LoanPay Pets guides share general education only and never replace your veterinarian. Please read before acting on advice.",
  alternates: { canonical: "https://pets.loanpaylogic.com/disclaimer" },
  openGraph: {
    title: "Pet Health Disclaimer: Education, Not Vet Advice",
    description:
      "LoanPay Pets guides share general education only and never replace your veterinarian.",
    url: "https://pets.loanpaylogic.com/disclaimer",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary",
    title: "Pet Health Disclaimer: Education, Not Vet Advice",
    description:
      "LoanPay Pets guides share general education only and never replace your veterinarian.",
  },
};

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <span className="bubble-chip chip-coral">🩺 Disclaimer</span>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Pet Health Disclaimer
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026
      </p>
      <div className="article-body">
        <p>
          LoanPay Pets articles share <strong>general education, not
          veterinary advice</strong>. Nothing here diagnoses illness,
          prescribes medication or dosages, or replaces an examination by
          your own licensed veterinarian. Every pet differs by age, breed,
          weight, history, and condition, so guidance that is safe generally
          can be unsafe specifically. Always consult your veterinarian
          before changing food, starting supplements, interpreting symptoms,
          or delaying care — and seek emergency care immediately for
          breathing trouble, collapse, seizures, bloat signs, urinary
          blockage, poisoning, or major trauma.
        </p>
        <h2>How should you use our health guides safely?</h2>
        <p>
          Use guides to prepare better vet conversations: learn the right
          questions, understand common options in general terms, track
          trends to report, and follow professional instructions exactly.
          Never dose medicines from internet articles, never induce vomiting
          or attempt procedures without explicit veterinary direction, and
          treat anecdotes as stories rather than evidence. If anything here
          conflicts with your veterinarian&apos;s advice for your pet,
          follow your veterinarian. Concerns about our content are welcome
          at{" "}
          <a href="mailto:hello@pets.loanpaylogic.com">
            hello@pets.loanpaylogic.com
          </a>
          . Related: <Link href="/">home hub</Link> ·{" "}
          <Link href="/about">about</Link> ·{" "}
          <Link href="/common-pet-emergencies">pet emergencies</Link> ·{" "}
          <Link href="/foods-toxic-to-pets">toxic foods</Link>.
        </p>
      </div>
    </article>
  );
}
