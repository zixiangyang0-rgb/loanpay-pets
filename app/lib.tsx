export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function VetNote({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="vet-card mt-6 px-5 py-4">
      <p className="font-plump text-[#0b7d73]">🩺 Vet reminder</p>
      <div className="mt-1 text-sm leading-relaxed text-[#4c423d]">
        {children ?? (
          <>
            This guide shares general education, not veterinary advice. Every
            pet is different, so please consult your own veterinarian before
            changing food, medication, or routines. Learn more in our{" "}
            <a href="/disclaimer">pet-health disclaimer</a>.
          </>
        )}
      </div>
    </aside>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section aria-label="Frequently asked questions" className="mt-10">
      <h2>Frequently asked questions</h2>
      <div className="grid gap-4">
        {faqs.map((f) => (
          <div key={f.q} className="faq-bubble">
            <h3 className="!mt-0">{f.q}</h3>
            <p className="mb-0 mt-2 leading-relaxed text-[#4c423d]">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
