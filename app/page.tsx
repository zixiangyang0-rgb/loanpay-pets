import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Pets: Happy Dogs, Happy Cats, Happy Homes",
  description:
    "LoanPay Pets: friendly dog & cat guides on adoption, training, health, and costs. Start with our checklists and calculators — explore now!",
  alternates: { canonical: "https://pets.loanpaylogic.com" },
  openGraph: {
    title: "LoanPay Pets: Happy Dogs, Happy Cats, Happy Homes",
    description:
      "Friendly dog & cat guides on adoption, training, health, and costs. Start with our checklists and calculators.",
    url: "https://pets.loanpaylogic.com",
    type: "website",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Pets: Happy Dogs, Happy Cats, Happy Homes",
    description:
      "Friendly dog & cat guides on adoption, training, health, and costs. Start with our checklists and calculators.",
  },
};

type Card = { href: string; icon: string; title: string; blurb: string };
type Group = { name: string; icon: string; cards: Card[] };

const GROUPS: Group[] = [
  {
    name: "Dogs",
    icon: "🐶",
    cards: [
      { href: "/dog-adoption-checklist", icon: "📋", title: "Dog Adoption Checklist", blurb: "25 steps, costs, supplies & the first month." },
      { href: "/puppy-training-basics", icon: "🎓", title: "Puppy Training Basics", blurb: "Sit, stay, come, housetraining & biting fixes." },
      { href: "/dog-nutrition-guide", icon: "🍖", title: "Dog Nutrition Guide", blurb: "Foods, portions & life-stage feeding." },
      { href: "/best-dog-breeds-apartments", icon: "🏢", title: "Best Apartment Dog Breeds", blurb: "15 calm, quiet small-space picks." },
      { href: "/crate-training-guide", icon: "🏠", title: "Crate Training Guide", blurb: "Sizing, first nights & schedules." },
      { href: "/separation-anxiety-dogs", icon: "💛", title: "Separation Anxiety in Dogs", blurb: "Calm alone-time training that works." },
      { href: "/senior-dog-care", icon: "🧓", title: "Senior Dog Care", blurb: "Arthritis, diet & golden-years comfort." },
    ],
  },
  {
    name: "Cats",
    icon: "🐱",
    cards: [
      { href: "/cat-adoption-checklist", icon: "📋", title: "Cat Adoption Checklist", blurb: "Fees, starter rooms & the first month." },
      { href: "/litter-box-guide", icon: "🧼", title: "Litter Box Guide", blurb: "Setup, cleaning & fixing avoidance." },
      { href: "/cat-nutrition-guide", icon: "🍖", title: "Cat Nutrition Guide", blurb: "Wet vs dry, portions & kitten diets." },
      { href: "/indoor-cat-enrichment", icon: "🧩", title: "Indoor Cat Enrichment", blurb: "Play cycles, catios & scratching fixes." },
      { href: "/senior-cat-care", icon: "🧓", title: "Senior Cat Care", blurb: "Kidney signs, diet & home comfort." },
    ],
  },
  {
    name: "Health & Safety",
    icon: "🏥",
    cards: [
      { href: "/pet-vaccination-schedule", icon: "💉", title: "Pet Vaccination Schedule", blurb: "Puppy & kitten shots by age." },
      { href: "/spay-neuter-guide", icon: "✂️", title: "Spay & Neuter Guide", blurb: "Timing, costs & 14-day recovery." },
      { href: "/microchip-pets-guide", icon: "📡", title: "Microchip Pets Guide", blurb: "Costs, registration & reunion plan." },
      { href: "/pet-grooming-basics", icon: "🛁", title: "Pet Grooming Basics", blurb: "Baths, brushing, nails & ears." },
      { href: "/pet-dental-care-guide", icon: "🦷", title: "Pet Dental Care Guide", blurb: "Brushing, treats & cleanings." },
      { href: "/flea-tick-prevention-guide", icon: "🦟", title: "Flea & Tick Prevention", blurb: "Products, schedules & tick removal." },
      { href: "/common-pet-emergencies", icon: "🚨", title: "Common Pet Emergencies", blurb: "Red flags & first ten minutes." },
      { href: "/foods-toxic-to-pets", icon: "☠️", title: "Foods Toxic to Pets", blurb: "20-danger-food chart & action plan." },
      { href: "/traveling-with-pets-guide", icon: "🚗", title: "Traveling With Pets", blurb: "Cars, flights, hotels & packing." },
      { href: "/moving-with-pets-guide", icon: "📦", title: "Moving With Pets", blurb: "Countdown, moving day & new home." },
    ],
  },
  {
    name: "Costs & Planning",
    icon: "💰",
    cards: [
      { href: "/vet-costs-guide", icon: "🏥", title: "Vet Costs Guide", blurb: "Real exam, vaccine & surgery prices." },
      { href: "/pet-insurance-guide", icon: "🛡️", title: "Pet Insurance Guide", blurb: "Plans, costs & when to enroll." },
      { href: "/pet-budget-calculator", icon: "🧮", title: "Pet Budget Calculator", blurb: "Interactive monthly cost estimator." },
    ],
  },
];

export default function Page() {
  return (
    <div>
      <section className="bubble-card px-6 py-10 text-center md:px-12">
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2">
          <span className="bubble-chip chip-teal">🐶 Dog guides</span>
          <span className="bubble-chip chip-coral">🐱 Cat guides</span>
          <span className="bubble-chip chip-honey">🏥 Vet-informed</span>
        </div>
        <h1 className="font-plump mx-auto mt-4 max-w-3xl text-3xl md:text-5xl">
          Happy dogs, happy cats, happy homes 🐾
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#4c423d]">
          LoanPay Pets helps everyday families adopt, train, feed, and care
          for dogs and cats with calm, vet-informed guides. Start with an
          adoption checklist, price your budget, and learn the routines that
          keep whiskers wagging and tails high.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/dog-adoption-checklist" className="btn-plump btn-teal px-6 py-3">
            🐶 Start: adopting a dog?
          </Link>
          <Link href="/cat-adoption-checklist" className="btn-plump btn-coral px-6 py-3">
            🐱 Start: adopting a cat?
          </Link>
        </div>
        <p className="mt-4 text-xs text-[#6f5f59]">
          Updated: October 2026 · General education, not veterinary advice — see our{" "}
          <Link href="/disclaimer" className="underline">disclaimer</Link>.
        </p>
      </section>

      {GROUPS.map((g) => (
        <section key={g.name} className="mt-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full text-xl"
              style={{ background: "#fff", border: "2px solid #f0dfc8" }}
              aria-hidden
            >
              {g.icon}
            </span>
            <h2 className="font-plump text-2xl">{g.name}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bubble-card btn-plump block px-5 py-5"
              >
                <p className="text-2xl" aria-hidden>{c.icon}</p>
                <p className="font-plump mt-2">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6f5f59]">
                  {c.blurb}
                </p>
                <p className="mt-2 text-sm font-extrabold text-[#0b7d73]">
                  Read the guide →
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="vet-card mt-8 px-6 py-6">
        <p className="font-plump text-[#0b7d73]">🩺 Vet reminder</p>
        <p className="mt-1 text-sm leading-relaxed text-[#4c423d]">
          Our guides share general education, not veterinary advice. For
          diagnosis, medication, or emergencies, please contact your own
          veterinarian promptly. Learn more in our{" "}
          <Link href="/disclaimer" className="underline font-bold">pet-health disclaimer</Link>.
        </p>
      </section>
    </div>
  );
}
