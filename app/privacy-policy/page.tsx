import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy for LoanPay Pets",
  description:
    "Privacy policy for LoanPay Pets: what data we collect, cookies, Google AdSense ads, and your choices. Read how we protect your privacy today.",
  alternates: { canonical: "https://pets.loanpaylogic.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy for LoanPay Pets",
    description:
      "How LoanPay Pets collects data, uses cookies, and works with Google AdSense advertising.",
    url: "https://pets.loanpaylogic.com/privacy-policy",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy for LoanPay Pets",
    description:
      "How LoanPay Pets collects data, uses cookies, and works with Google AdSense advertising.",
  },
};

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <span className="bubble-chip chip-teal">🔒 Privacy</span>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026
      </p>
      <div className="article-body">
        <p>
          This Privacy Policy explains how LoanPay Pets
          (pets.loanpaylogic.com) collects, uses, and protects information
          when you read our guides. We keep data collection minimal: we do
          not require accounts, we do not sell personal information, and we
          use aggregated analytics only to understand which articles help
          readers most. Contact emails sent to
          hello@pets.loanpaylogic.com are used solely to reply and improve
          content. If you contact us, we retain the message only as long as
          needed for that purpose.
        </p>
        <h2>How do third-party ads and cookies work here?</h2>
        <p>
          We use third-party advertising, including Google AdSense, to keep
          our guides free for every reader. Google and its partners use
          cookies and similar identifiers to serve ads based on your prior
          visits to this and other websites. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads based
          on your visit to our site and other sites on the Internet. You may
          opt out of personalized advertising by visiting Google&apos;s Ads
          Settings page, and you can clear or block cookies in your browser
          settings at any time, though parts of the site may work less
          smoothly without them. Learn more about how Google manages data in
          its Privacy &amp; Terms pages and its Partner Sites policy. By
          using this site with cookies enabled, you consent to this
          advertising and measurement as described here.
        </p>
        <h2>What are your choices and who keeps what?</h2>
        <p>
          You may read without contacting us and share nothing beyond
          standard log data your browser sends every site. Analytics, if
          enabled, aggregates page views without building personal profiles.
          Advertising vendors maintain their own cookie policies linked
          from the ads they serve. Children&apos;s use should be supervised
          by adults; this site is written for general audiences and pet
          parents. We may update this policy as services change and will
          revise the date above. Questions belong at{" "}
          <a href="mailto:hello@pets.loanpaylogic.com">
            hello@pets.loanpaylogic.com
          </a>
          . Related: <Link href="/">home hub</Link> ·{" "}
          <Link href="/terms">terms</Link> ·{" "}
          <Link href="/disclaimer">disclaimer</Link> ·{" "}
          <Link href="/about">about</Link>.
        </p>
      </div>
    </article>
  );
}
