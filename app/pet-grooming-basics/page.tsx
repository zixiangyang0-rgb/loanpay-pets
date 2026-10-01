import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection } from "../lib";

export const metadata: Metadata = {
  title: "Pet Grooming Basics: Baths, Brushing & Nails",
  description:
    "Pet grooming basics: bath schedules, brushing by coat type, nail trims & ear care. Keep your pet clean and comfy — learn the gentle routine!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/pet-grooming-basics",
  },
  openGraph: {
    title: "Pet Grooming Basics: Baths, Brushing & Nails",
    description:
      "Pet grooming basics: bath schedules, brushing by coat type, nail trims & ear care. Keep your pet clean and comfy — learn the gentle routine!",
    url: "https://pets.loanpaylogic.com/pet-grooming-basics",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Grooming Basics: Baths, Brushing & Nails",
    description:
      "Pet grooming basics: bath schedules, brushing by coat type, nail trims & ear care. Keep your pet clean and comfy — learn the gentle routine!",
  },
};

const FAQS = [
  {
    q: "How often should I bathe my dog or cat?",
    a: "Most dogs need baths every four to eight weeks, with oily or outdoor dogs washed more often and low-odor indoor dogs less. Cats usually groom themselves and need baths only for medical reasons, greasy coats, or messy accidents. Overbathing strips natural oils and causes flaky itchy skin. Use lukewarm water with a species-specific pH-balanced shampoo, rinse thoroughly, and dry completely, especially in cold weather.",
  },
  {
    q: "How often should I brush my pet?",
    a: "Long-haired dogs and cats need daily brushing to prevent mats, medium coats need brushing two to three times weekly, and short coats thrive on weekly sessions with a rubber curry or bristle brush. Double-coated breeds shed heavily each spring and fall and need daily undercoat raking during those blows. Every session doubles as a health check for lumps, ticks, mats, and skin changes. Reward calm cooperation with treats so grooming stays a bonding ritual.",
  },
  {
    q: "How do I trim my pet's nails safely?",
    a: "Trim small amounts every two to four weeks, cutting only the curved tip and stopping well before the pink quick visible in light nails. For dark nails, shave thin slices until you see a gray or pink oval appear, then stop. Keep styptic powder ready for quick nicks, which bleed dramatically but stop quickly with pressure. Reward each paw generously, and trim one paw per day for nervous pets rather than forcing all four at once.",
  },
  {
    q: "How do I clean my pet's ears?",
    a: "Check ears weekly for odor, redness, or dark discharge, and clean only the visible outer ear with a vet-approved ear cleaner on cotton, never Q-tips in the canal. Fill the flap, massage the base for twenty seconds, let your pet shake, then wipe what surfaces. Floppy-eared dogs and swimmers need more frequent checks. Persistent head shaking, smell, or discharge needs a vet visit because infections and mites require prescription treatment.",
  },
  {
    q: "When should I use a professional groomer?",
    a: "Book a professional for breed-specific haircuts like poodles and doodles every six to eight weeks, severe matting that pulls skin, anxious nail trims you cannot complete safely, and deshedding treatments on heavy-coated breeds. Choose certified groomers who welcome tours, ask about health history, and never use sedatives without vet direction. Maintain brushing between appointments because even the best groomer cannot fix months of matting without shaving.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">🧼 Care</span>
        <span className="bubble-chip chip-honey">✂️ Grooming</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Pet Grooming Basics: Baths, Brushing & Nails
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAHA, Cornell · 12-minute read
      </p>
      <div className="article-body">
        <p>
          These <strong>pet grooming basics</strong> teach the gentle home
          routine behind every healthy coat: brushing by coat type, bath
          schedules that protect skin, safe nail trims, ear checks, and when
          to hand off to a professional. Grooming is health care disguised
          as beauty: regular hands-on sessions catch lumps, ticks, mats,
          infections, and weight changes months before they become crises.
          The secret is low-stress technique — right tools, tasty rewards,
          short sessions — so pets volunteer for care instead of fleeing the
          bathroom. This guide covers dogs and cats together with
          species-specific callouts, realistic schedules for busy owners,
          and troubleshooting for matting, fear, and senior stiffness. Build
          the routine once and your pet will look, feel, and smell like the
          loved family member they are.
        </p>

        <h2>Which grooming tools do you actually need?</h2>
        <p>
          Start with six affordable tools and add specialty items only as
          needed. A slicker brush handles tangles in medium and long coats, a
          steel comb finds hidden mats, an undercoat rake manages double-coat
          shedding seasons, and a rubber curry massages short coats while
          lifting loose hair. Add guillotine or scissor-style nail clippers
          matched to your pet&apos;s size plus styptic powder, a species-safe
          shampoo, and a vet-approved ear cleaner with cotton pads. Skip
          gimmicky de-matting blades until technique is solid, and never use
          human shampoo, whose pH strips pet skin. Store everything in one
          caddy so sessions start instantly; hunting for the brush while the
          cat loses patience ruins more routines than any tool choice. Total
          starter cost runs $40 to $80, roughly one professional groom, and
          pays back within two months.
        </p>

        <h2>How should you brush each coat type?</h2>
        <p>
          Brush with the grain in short sections, working from ends toward
          skin so tangles slide out instead of tightening. Long coats need
          daily ten-minute sessions: mist lightly with detangler, slicker
          through small sections, then comb to the skin to verify no mats
          hide underneath. Medium coats thrive on twice-weekly slicker plus
          weekly combing, with extra sessions during spring and fall sheds.
          Short coats enjoy weekly rubber-curry massages that distribute oils
          and reduce household hair dramatically. Double coats like huskies
          and golden retrievers need undercoat raking during seasonal blows —
          never shave them, since the coat insulates against heat as well as
          cold. Cats follow the same rhythm at shorter durations: daily for
          Persians and Maine Coons, twice weekly for shorthairs, with treats
          for belly tolerance. End every session with a full-body stroke
          check for lumps, scabs, ticks from our{" "}
          <Link href="/flea-tick-prevention-guide">prevention guide</Link>,
          and skin odor changes worth mentioning at the next{" "}
          <Link href="/vet-costs-guide">vet visit</Link>.
        </p>
        <table>
          <thead>
            <tr>
              <th>Coat type</th>
              <th>Brushing rhythm</th>
              <th>Primary tools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Long / silky</td>
              <td>Daily, 10 minutes</td>
              <td>Slicker + steel comb</td>
            </tr>
            <tr>
              <td>Medium / wavy</td>
              <td>2 – 3 times weekly</td>
              <td>Slicker, comb check</td>
            </tr>
            <tr>
              <td>Short / smooth</td>
              <td>Weekly</td>
              <td>Rubber curry, bristle brush</td>
            </tr>
            <tr>
              <td>Double / dense</td>
              <td>Daily during shed season</td>
              <td>Undercoat rake + comb</td>
            </tr>
            <tr>
              <td>Curly / doodle</td>
              <td>Every 1 – 2 days</td>
              <td>Slicker + comb to skin</td>
            </tr>
          </tbody>
        </table>

        <h2>How do you bathe dogs and cats without drama?</h2>
        <p>
          Dogs need baths every four to eight weeks or when visibly dirty and
          smelly; cats need them rarely, usually for medical, greasy, or
          messy reasons. Brush thoroughly before water, since baths tighten
          existing mats into felt. Use lukewarm water, a species-specific
          shampoo massaged from neck to tail avoiding eyes and ears, then
          rinse twice as long as you lather — residue itches. A non-slip mat,
          a handheld sprayer, and cotton balls loosely placed at ear openings
          transform the experience. Dry completely with absorbent towels plus
          low warm airflow; damp undercoats chill small pets and grow hot
          spots. Reward calm standing throughout with smeared wet food on the
          tub wall. Between baths, waterless foam, paw wipes after muddy
          walks from our{" "}
          <Link href="/traveling-with-pets-guide">travel guide</Link> stops,
          and regular brushing keep coats fresh. Puppies and kittens deserve
          three ultra-short happy baths early so the procedure joins life as
          normal background.
        </p>

        <h2>How do you trim nails and clean ears safely?</h2>
        <p>
          Nails grow continuously, and overlong nails splay toes, snag, and
          alter gait into joint pain — so trim every two to four weeks. Hold
          the paw gently, clip only the curved tip at a 45-degree angle, and
          stop before the pink quick; on dark nails, slice thin layers until
          a gray-pink oval appears. Styptic powder plus five minutes of
          pressure handles nicks. Pair each paw with high-value treats, and
          split nervous pets across days. Ears need weekly peeks: healthy
          ears look clean and smell neutral. Clean only visible folds with
          vet-approved solution on cotton, massage the base, allow a shake,
          and wipe. Never probe the canal with swabs. Floppy ears, swimmers,
          and allergy-prone pets need extra vigilance; persistent odor,
          discharge, or head tilts mean infection or mites needing
          prescription care, not deeper home cleaning. Both tasks also train
          handling tolerance that pays off at vet exams and{" "}
          <Link href="/pet-dental-care-guide">dental care</Link> sessions.
        </p>

        <h2>When should a professional groomer take over?</h2>
        <p>
          Home care covers maintenance, but professionals own three domains:
          breed-standard haircuts every six to eight weeks for poodles,
          doodles, schnauzers, and spaniels; severe matting fused to skin
          that home tools cannot safely separate; and high-anxiety nail or
          deshed cases where speed and extra hands keep everyone safe.
          Senior pets with arthritis often prefer groomer hydraulic tables
          and experienced support holds. Choose groomers who tour proudly,
          document health notes, require vaccines per the{" "}
          <Link href="/pet-vaccination-schedule">schedule</Link>, and refuse
          cage dryers or unsupervised sedation. Book morning slots for
          nervous pets, disclose bites, seizures, and lumps in writing, and
          keep brushing between visits — groomers de-mat maintenance, not
          months of neglect, without shaving. Budget pro grooms in the{" "}
          <Link href="/pet-budget-calculator">budget calculator</Link> as
          recurring care, not splurges, and your pet&apos;s coat will never
          reach crisis again.
        </p>
        <table>
          <thead>
            <tr>
              <th>Task rhythm</th>
              <th>Dogs</th>
              <th>Cats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brush</td>
              <td>Weekly – daily by coat</td>
              <td>Twice weekly – daily longhair</td>
            </tr>
            <tr>
              <td>Bath</td>
              <td>Every 4 – 8 weeks</td>
              <td>Only as needed</td>
            </tr>
            <tr>
              <td>Nails</td>
              <td>Every 2 – 4 weeks</td>
              <td>Every 2 – 4 weeks + scratchers</td>
            </tr>
            <tr>
              <td>Ears</td>
              <td>Weekly check, clean as needed</td>
              <td>Monthly check, clean as needed</td>
            </tr>
          </tbody>
        </table>

        <h2>How do you groom fearful and senior pets gently?</h2>
        <p>
          Fear and frailty change technique, not standards. Fearful pets need
          cooperative care: break sessions into thirty-second reps, reward
          calm participation with licked treats, and let the pet opt in by
          targeting a hand or mat before each step. Never flood through panic
          — one forced nail trim can poison months of progress. Seniors need
          ergonomic kindness: non-slip mats, supported standing with a belly
          hand, shorter sessions with rest breaks, and warm water for stiff
          joints. Arthritic cats from our{" "}
          <Link href="/senior-cat-care">senior cat</Link> guide tolerate
          brief daily brushing better than weekly marathons. Watch pain
          signals — lip licking, freezing, growling — and stop to reassess
          rather than pushing through. For severely matted, aggressive, or
          painful cases, book vet-supervised grooming where sedation and pain
          control keep everyone safe. Document what works in a grooming note
          to share with future groomers and sitters. Gentle persistence
          converts most refusers within a month, and the trust built spills
          into vet visits and <Link href="/pet-dental-care-guide">dental
          care</Link> too.
        </p>

        <h2>What does a year-round grooming calendar look like?</h2>
        <p>
          Seasons set the rhythm. Spring brings the great shed: daily
          undercoat raking for double coats, extra vacuuming, and a
          deshedding appointment for heavy blowers. Summer means paw checks
          after hot pavement, more frequent baths for swimmers with
          thorough ear drying, and tick scrutiny from our{" "}
          <Link href="/flea-tick-prevention-guide">prevention guide</Link>.
          Fall repeats shedding plus coat recovery brushing as winter
          undercoat grows in. Winter needs paw balm against salt, longer
          intervals between full baths with waterless touch-ups, and static-
          control brushing for long coats. Year-round constants anchor every
          month: nail trims every two to four weeks, ear peeks weekly,
          brushing per coat type, and dental handling from our{" "}
          <Link href="/pet-dental-care-guide">dental guide</Link>. Book
          professional cuts six weeks ahead for poodles and doodles, since
          holiday slots vanish. A calendar reminder per task plus one
          seasonal audit keeps coats show-ready without marathon sessions.
        </p>

        <VetNote>
          This grooming guide shares general education, not veterinary
          advice. Skin infections, ear disease, and severe matting need
          professional diagnosis — ask your vet before treating. Learn more
          in our <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: AAHA grooming and skin-care resources; Cornell veterinary
          dermatology materials. Outbound references:{" "}
          <a href="https://www.aaha.org/resources/pet-owner/">
            AAHA pet-owner resources
          </a>{" "}
          and{" "}
          <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center">
            Cornell Feline Health Center
          </a>
          . Related on LoanPay Pets: <Link href="/">home hub</Link> ·{" "}
          <Link href="/pet-dental-care-guide">pet dental care</Link> ·{" "}
          <Link href="/flea-tick-prevention-guide">flea and tick prevention</Link> ·{" "}
          <Link href="/senior-dog-care">senior dog care</Link>.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
    </article>
  );
}
