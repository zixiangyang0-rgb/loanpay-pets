import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection } from "../lib";

export const metadata: Metadata = {
  title: "Pet Vaccination Schedule: Puppy & Kitten Shots",
  description:
    "Pet vaccination schedule: core puppy & kitten shots by age, boosters, costs & side effects. Keep your pet protected — see the full timetable!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/pet-vaccination-schedule",
  },
  openGraph: {
    title: "Pet Vaccination Schedule: Puppy & Kitten Shots",
    description:
      "Pet vaccination schedule: core puppy & kitten shots by age, boosters, costs & side effects. Keep your pet protected — see the full timetable!",
    url: "https://pets.loanpaylogic.com/pet-vaccination-schedule",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Vaccination Schedule: Puppy & Kitten Shots",
    description:
      "Pet vaccination schedule: core puppy & kitten shots by age, boosters, costs & side effects. Keep your pet protected — see the full timetable!",
  },
};

const FAQS = [
  {
    q: "What shots do puppies need and when?",
    a: "Puppies need DHPP combination shots at roughly 6 to 8, 10 to 12, and 14 to 16 weeks, plus rabies at 12 to 16 weeks as required by law. Your vet may add bordetella, leptospirosis, Lyme, or influenza based on local risk and lifestyle. Boosters follow one year later, then every one to three years by vaccine. Bring all breeder or shelter records to the first visit so the vet can map what is complete.",
  },
  {
    q: "What shots do kittens need and when?",
    a: "Kittens need FVRCP combination shots at roughly 6 to 8, 10 to 12, and 14 to 16 weeks, plus rabies at 12 to 16 weeks as required by law. Outdoor cats and multi-cat households often add FeLV vaccination. Boosters follow one year later, then every one to three years. Indoor-only adults still need rabies and FVRCP maintenance because bats, escapes, and boarding exposures happen.",
  },
  {
    q: "How much do pet vaccinations cost?",
    a: "Core puppy or kitten series total roughly $150 to $350 across three to four visits, with individual shots $25 to $55 each. Adult annual boosters run $60 to $150 plus the exam fee. Low-cost clinics and shelter events often cut those prices in half for routine shots. Emergency treatment for parvovirus or panleukopenia costs $1,500 to $4,000, making vaccines one of the best bargains in pet care.",
  },
  {
    q: "What are normal vaccine side effects in pets?",
    a: "Mild soreness at the injection site, slight tiredness, and a small appetite dip for 24 to 48 hours are normal and resolve without treatment. A small firm lump may linger for weeks after rabies or FeLV shots and should be reported if it grows past two centimeters or persists beyond three months. Facial swelling, vomiting, hives, or breathing trouble are rare allergic emergencies needing immediate vet care. Report anything beyond mild effects to your vet promptly.",
  },
  {
    q: "Can my puppy go outside before finishing vaccines?",
    a: "Ask your local vet, because risk depends on neighborhood disease levels. Most vets allow carried outings, clean puppy classes, and visits with healthy vaccinated dogs while advising against dog parks, pet-store floors, and unknown-dog greetings until the series completes around 16 weeks. Undersocialized puppies face greater lifetime behavior risks than carefully managed disease risks. Balance both with your vet's neighborhood-specific guidance rather than total isolation.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">🏥 Health</span>
        <span className="bubble-chip chip-honey">💉 Vaccines</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Pet Vaccination Schedule: Shots by Age
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAHA, AAFP · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>pet vaccination schedule</strong> lays out exactly
          which shots puppies and kittens need at each age, which boosters
          adults need, what everything costs, and how to handle side effects
          calmly. Vaccines are the single highest-value purchase in pet
          care: a $30 shot prevents a $3,000 parvovirus hospitalization and
          protects whole neighborhoods through herd immunity. Yet schedules
          confuse owners because core and lifestyle vaccines differ, timing
          windows matter, and state rabies laws vary. This guide follows the
          American Animal Hospital Association canine guidelines and the
          American Association of Feline Practitioners recommendations in
          plain language, with age-by-age tables for puppies and kittens,
          adult booster rhythms, cost ranges, and vet-visit checklists. Read
          it before your first wellness appointment and you will understand
          every recommendation your vet makes.
        </p>

        <h2>Which vaccines are core for every dog and cat?</h2>
        <p>
          Core vaccines protect against widespread, severe, often fatal
          diseases, so every pet needs them regardless of lifestyle. For
          dogs, core means distemper, adenovirus, parvovirus, parainfluenza
          (the DHPP combination) plus rabies as required by state law. For
          cats, core means herpesvirus, calicivirus, panleukopenia (the FVRCP
          combination) plus rabies. Non-core or lifestyle vaccines are chosen
          by risk: bordetella, leptospirosis, Lyme, and influenza for social,
          outdoor, or travel-heavy dogs; feline leukemia (FeLV) for kittens,
          outdoor cats, and multi-cat homes. Your vet layers lifestyle
          choices onto the core foundation after asking about boarding,
          daycare, dog parks, wildlife, and travel. No schedule on the
          internet overrides that local risk conversation, so treat these
          tables as your preparation, not your prescription.
        </p>

        <h2>What is the puppy vaccination timeline?</h2>
        <p>
          Puppies receive a series rather than one shot because maternal
          antibodies fade unpredictably between six and sixteen weeks, and
          each dose boosts protection as interference wanes. The classic
          rhythm is DHPP at 6 to 8 weeks, again at 10 to 12 weeks, and again
          at 14 to 16 weeks, with rabies given once between 12 and 16 weeks
          per state law. Lifestyle vaccines slot into the same visits:
          bordetella often at the first or second visit for social puppies,
          leptospirosis as a two-dose series for outdoor and suburban dogs,
          Lyme where ticks prevail. A booster visit one year later locks in
          adult immunity, after which most core vaccines move to every three
          years while lifestyle shots stay annual. Puppies adopted at ten or
          twelve weeks with unknown history simply start the series at that
          age and space doses three to four weeks apart until sixteen weeks
          plus. Bring every scrap of breeder or shelter paperwork so your vet
          avoids repeating or missing doses.
        </p>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Core shots</th>
              <th>Common lifestyle adds</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 – 8 weeks</td>
              <td>DHPP #1</td>
              <td>Bordetella if social</td>
              <td>First vet visit + fecal test</td>
            </tr>
            <tr>
              <td>10 – 12 weeks</td>
              <td>DHPP #2</td>
              <td>Lepto #1, Lyme #1 as needed</td>
              <td>Start prevention plan</td>
            </tr>
            <tr>
              <td>14 – 16 weeks</td>
              <td>DHPP #3, rabies</td>
              <td>Lepto #2, Lyme #2, flu</td>
              <td>Series complete; license</td>
            </tr>
            <tr>
              <td>12 – 16 months</td>
              <td>DHPP + rabies boosters</td>
              <td>Lifestyle boosters</td>
              <td>Then core every 3 years</td>
            </tr>
          </tbody>
        </table>

        <h2>What is the kitten vaccination timeline?</h2>
        <p>
          Kittens follow a mirror-image series. FVRCP arrives at 6 to 8
          weeks, 10 to 12 weeks, and 14 to 16 weeks, with rabies once between
          12 and 16 weeks. Kittens test for FeLV and FIV at the first visit,
          and at-risk kittens receive a two-dose FeLV series. Indoor-only
          adults still maintain rabies plus FVRCP because rabies law applies
          regardless of lifestyle, bats enter homes, cats escape, and
          boarding facilities require proof. The one-year boosters mirror the
          puppy pattern, then core vaccines typically extend to every three
          years while FeLV stays annual for outdoor cats. Kittens adopted
          older than sixteen weeks with no records receive two FVRCP doses
          three to four weeks apart plus rabies. Pair vaccine visits with
          weight checks, diet calibration from our{" "}
          <Link href="/cat-nutrition-guide">cat nutrition guide</Link>, and{" "}
          <Link href="/spay-neuter-guide">spay-neuter planning</Link> so each
          trip advances multiple goals.
        </p>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Core shots</th>
              <th>Common lifestyle adds</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 – 8 weeks</td>
              <td>FVRCP #1</td>
              <td>FeLV test; FeLV #1 if at risk</td>
              <td>First vet visit + fecal test</td>
            </tr>
            <tr>
              <td>10 – 12 weeks</td>
              <td>FVRCP #2</td>
              <td>FeLV #2 if started</td>
              <td>Start prevention plan</td>
            </tr>
            <tr>
              <td>14 – 16 weeks</td>
              <td>FVRCP #3, rabies</td>
              <td>—</td>
              <td>Series complete; license</td>
            </tr>
            <tr>
              <td>12 – 16 months</td>
              <td>FVRCP + rabies boosters</td>
              <td>FeLV annual if outdoor</td>
              <td>Then core every 3 years</td>
            </tr>
          </tbody>
        </table>

        <h2>How much do vaccines cost, and what about side effects?</h2>
        <p>
          Budget $150 to $350 for a full puppy or kitten series across three
          to four visits, with single shots priced $25 to $55 plus exam fees.
          Adult booster years typically total $100 to $250 including the
          exam. Low-cost clinics halve routine shot prices, and our{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link> compares
          settings in detail. Most pets feel nothing beyond brief injection
          fussiness; mild lethargy, soreness, or a small appetite dip for a
          day or two is normal. Comfort them with rest, gentle play, and
          normal meals. Call the vet the same day for facial swelling,
          repeated vomiting, hives, or breathing changes, and report lumps
          that exceed two centimeters or persist past three months. Keep the
          vaccine certificate with your pet&apos;s records and photograph it
          for boarding, grooming, and{" "}
          <Link href="/traveling-with-pets-guide">travel</Link> check-ins.
          Staying on schedule protects not just your pet but every
          under-vaccinated puppy and kitten they will ever meet.
        </p>

        <h2>How do you prepare for each vaccine visit?</h2>
        <p>
          Bring records, a hungry pet, and questions. Fast only if the clinic
          instructs; otherwise bring favorite treats to build happy vet
          associations during handling and injections. List your pet&apos;s
          lifestyle honestly: dog parks, daycare, hiking, boarding plans,
          outdoor access, and travel. Ask which vaccines are core versus
          lifestyle for your situation, what schedule the clinic follows, and
          what side effects to watch for. Confirm microchip scanning and
          registration while you are there via our{" "}
          <Link href="/microchip-pets-guide">microchip guide</Link>. Before
          leaving, photograph the updated certificate and schedule the next
          due date in your phone with a two-week advance reminder. Good
          records turn every future boarding, grooming, and emergency visit
          into a five-second interaction instead of a paperwork scramble.
        </p>

        <h2>How do you keep vaccine records organized for life?</h2>
        <p>
          Records are the unglamorous half of vaccination — clinics,
          groomers, boarders, landlords, and airlines all demand proof, and
          scrambling costs appointments. Build a pet health folder the first
          week: paper certificates in a sleeve plus phone photos of every
          page, backed to cloud storage your partner can access. Log each
          visit with date, products given, lot numbers when provided, next
          due dates, and any reactions noticed. Set phone reminders two
          weeks before boosters expire, since lapsed vaccines restart
          series in some protocols. Share records before every new service —
          email the PDF to boarders ahead of drop-off rather than
          discovering gaps at the counter. Keep the microchip number, license
          tags, and insurance details in the same folder for one-grab
          emergencies. When switching vets, request full history transfers
          including lab work, not just vaccine slips. Organized owners glide
          through requirements that strand everyone else, and their pets
          never miss protection over paperwork.
        </p>

        <h2>Which lifestyle vaccines does your pet really need?</h2>
        <p>
          Lifestyle vaccines tailor protection to exposure, so answer the
          vet&apos;s questions precisely. Social dogs visiting daycare,
          boarding, grooming salons, or parks usually need bordetella and
          canine influenza; hiking and suburban dogs need leptospirosis,
          which also threatens humans through urine-contaminated water; tick-
          country dogs merit Lyme discussion alongside the prevention in our{" "}
          <Link href="/flea-tick-prevention-guide">parasite guide</Link>.
          Outdoor and multi-cat households need feline leukemia shots, while
          strictly indoor solo cats may skip it per risk review. Travel
          plans, shown below in our{" "}
          <Link href="/traveling-with-pets-guide">travel guide</Link>, add
          destination-specific requirements. Honest lifestyle reporting
          prevents both dangerous gaps and unnecessary shots — the vet cannot
          calibrate what you do not disclose. Revisit the list yearly as
          routines change, since yesterday&apos;s couch dog may be
          tomorrow&apos;s trail companion.
        </p>

        <h2>What vaccine myths should you stop believing?</h2>
        <p>
          Three myths harm pets yearly. Indoor-only pets still need rabies
          and core boosters — bats enter homes, cats escape, and boarding
          requires proof regardless of lifestyle. Annual boosters for every
          vaccine are outdated — modern core shots last three years while
          lifestyle ones stay annual, and titers guide individual cases. And
          tiny pets do not need tiny doses — vaccines are dosed to immune
          response, not weight, per the AAHA and AAFP panels. Trust your
          vet&apos;s schedule over forums, keep the records from our
          organization section current, and vaccinate on time. Herd immunity
          protects the puppies and kittens too young for shots.
        </p>

        <VetNote>
          This pet vaccination schedule shares general education, not
          veterinary advice. Timing and lifestyle vaccines must be set by
          your own veterinarian under local law and disease risk. Learn more
          in our <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: AAHA canine vaccination guidelines; AAFP feline
          vaccination advisory panel report. Outbound references:{" "}
          <a href="https://www.aaha.org/resources/canine-vaccination-guidelines/">
            AAHA vaccination guidelines
          </a>{" "}
          and{" "}
          <a href="https://catfriendly.com/cat-owner-resources/">
            AAFP cat-owner resources
          </a>
          . Related on LoanPay Pets: <Link href="/">home hub</Link> ·{" "}
          <Link href="/dog-adoption-checklist">dog adoption checklist</Link> ·{" "}
          <Link href="/cat-adoption-checklist">cat adoption checklist</Link> ·{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link>.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
    </article>
  );
}
