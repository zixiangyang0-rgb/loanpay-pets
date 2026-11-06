import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection } from "../lib";

export const metadata: Metadata = {
  title: "Cat Adoption Checklist: New Owner Guide 2026",
  description:
    "Cat adoption checklist: fees, supplies, litter setup, vet timeline & first-week plan. Welcome your new cat calmly — read the full guide now!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/cat-adoption-checklist",
  },
  openGraph: {
    title: "Cat Adoption Checklist: New Owner Guide 2026",
    description:
      "Cat adoption checklist: fees, supplies, litter setup, vet timeline & first-week plan. Welcome your new cat calmly — read the full guide now!",
    url: "https://pets.loanpaylogic.com/cat-adoption-checklist",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Adoption Checklist: New Owner Guide 2026",
    description:
      "Cat adoption checklist: fees, supplies, litter setup, vet timeline & first-week plan. Welcome your new cat calmly — read the full guide now!",
  },
};

const FAQS = [
  {
    q: "How much does it cost to adopt a cat?",
    a: "Cat adoption fees usually range from $25 to $250, with kittens costing more than adult cats and many shelters discounting bonded pairs and seniors. The fee generally covers spay or neuter surgery, age-appropriate vaccines, deworming, a vet exam, and sometimes a microchip. Budget another $250 to $600 for first-month supplies, a wellness exam, food, and litter, bringing realistic first-month spending to $350 to $850.",
  },
  {
    q: "What do I need before bringing an adopted cat home?",
    a: "Prepare one litter box per cat plus one extra, unscented clumping litter, a scoop, food and water bowls or a fountain, the shelter's current food, a sturdy scratching post, a hiding spot like a covered bed or box, a carrier, and a few wand and crinkle toys. Set up a small starter room with everything inside so your cat can adjust to one safe space first. Add Feliway-style calming diffusers and window perches later once the cat explores confidently.",
  },
  {
    q: "How long does it take a rescue cat to settle in?",
    a: "Expect the 3-3-3 pattern: about three days of hiding, three weeks of cautious exploration, and three months to show a full personality. Shy former strays and traumatized cats may need six months of patient routine. Keep the starter room door closed for the first week, sit quietly nearby reading aloud, and let the cat initiate contact. Appetite, litter habits, and playfulness improving week by week are the best signs of progress.",
  },
  {
    q: "Should I adopt a kitten or an adult cat?",
    a: "Kittens need near-constant supervision, midnight play sessions, and careful kitten-proofing for the first year, plus a second kitten is often recommended for social development. Adult cats arrive litter trained, calmer, and with settled personalities you can match to a quiet or lively home. Seniors are the gentlest and most overlooked. First-time owners working full-time usually do better with a confident adult cat than a tiny kitten.",
  },
  {
    q: "When should a newly adopted cat see the vet?",
    a: "Schedule a wellness exam within the first seven days and bring all shelter paperwork. The vet will verify vaccines against feline schedules, run fecal and FeLV/FIV tests if not already done, discuss parasite prevention, and plan spay or neuter timing for young kittens. Early visits also let you calibrate food portions, review litter-box setup, and start pet insurance waiting periods before any condition becomes pre-existing.",
  },
  {
    q: "Can I adopt a cat if I already have a cat or dog?",
    a: "Yes, with slow scent-first introductions over two to four weeks. Keep the new cat in a separate room, swap scents with blankets, feed on opposite sides of the closed door, then allow short supervised visual contact through a gate. Most cat-to-cat tension comes from rushed face-to-face meetings and too few resources. Provide one litter box per cat plus one extra, separate feeding stations, and vertical escape routes before opening the whole home.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-coral">🐱 Cats</span>
        <span className="bubble-chip chip-honey">📋 Adoption</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Cat Adoption Checklist: Everything New Owners Need
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAHA, Cornell Feline Health · 12-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>cat adoption checklist</strong> covers every step of
          adopting a cat, from picking a shelter cat that matches your home to
          litter-box setup, vet timelines, and the gentle first month. Cats
          are America&apos;s most popular pets, with tens of millions living in
          family homes, yet shelter cats are returned most often for fixable
          reasons: rushed introductions, too few litter boxes, and
          misunderstood hiding behavior. A little preparation changes
          everything. This guide explains adoption fees, the full supply list,
          how to build a starter room, the 3-3-3 adjustment timeline, feeding
          basics, and when to schedule vet care. Whether you are adopting a
          playful kitten, a dignified adult, or a bonded pair, follow this
          checklist and your new cat will feel safe, eat well, and bloom into
          a confident companion faster than you expect.
        </p>

        <h2>Are you ready to adopt a cat?</h2>
        <p>
          Cats live fifteen to twenty years, so adoption is a genuine
          long-term promise. The good news is that cats fit beautifully into
          apartments, full-time work schedules, and small families: they
          groom themselves, use a litter box instinctively, and nap while you
          work. Still, every household member must agree, because litter duty,
          scratching-post training, and 3 a.m. zoomies divide reluctant
          families fast. Renters should confirm pet deposits, breed rules, and
          any limits on cat numbers before visiting shelters. Allergy
          sufferers need honest testing too: spend hours in a shelter cat room
          and talk to a doctor, since no cat is truly hypoallergenic even if
          some individuals shed less. Map the next year for moves, travel, and
          new babies, and line up a backup caregiver who can scoop litter and
          refresh water. Cats are independent but not self-sufficient; they
          need daily fresh food, clean boxes, play, and company. If your
          schedule allows thirty focused minutes morning and evening plus a
          clean litter routine, you are ready for the quiet joy of cat
          parenthood.
        </p>
        <p>
          Budget honestly before you browse. The first year with a cat
          typically costs $800 to $1,500 plus emergencies, and our{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link> details exam
          and vaccine pricing. Adoption fees, a starter supply haul, food,
          litter, and a wellness visit cluster into the first month. Use our{" "}
          <Link href="/pet-budget-calculator">pet budget calculator</Link> to
          estimate your monthly number, and read the{" "}
          <Link href="/pet-insurance-guide">pet insurance guide</Link> to
          decide whether accident coverage belongs in your plan.
        </p>

        <h2>How do you choose the right shelter cat?</h2>
        <p>
          Match personality to household energy instead of picking the cutest
          photo. High-octane kittens destroy curtain rods in quiet senior
          homes, while aloof independent adults frustrate families wanting a
          lap cat. Tell adoption counselors your work hours, noise level,
          children, and resident pets, then ask which cats solicit attention,
          tolerate handling, and recover quickly from startling sounds. Visit
          twice if possible and look for soft blinking, slow approaches, and
          relaxed eating in the kennel, which signal adaptability better than
          frantic meowing. Ask for behavioral notes on litter habits, carrier
          tolerance, handling sensitivity, and history with other animals.
          Foster-home adults give the most reliable picture because volunteers
          observe them in real living rooms. Consider bonded pairs seriously:
          two kittens entertain each other, destroy less furniture, and cost
          shelters less to house, so fees are often discounted. Seniors over
          seven are calm, already trained, and profoundly grateful. Choose the
          cat whose observed rhythm mirrors yours, and you will skip most
          adjustment drama entirely.
        </p>
        <h3>Questions to ask the shelter before you sign</h3>
        <ul>
          <li>What is the cat&apos;s history and reason for surrender?</li>
          <li>Which vaccines, deworming, and tests (FeLV/FIV) are complete?</li>
          <li>Is the cat spayed or neutered, and is a microchip included?</li>
          <li>How does the cat handle carriers, handling, and visitors?</li>
          <li>What litter and food is the cat using right now?</li>
          <li>Has the cat lived with other cats, dogs, or children?</li>
          <li>What is the return policy if the match truly fails?</li>
        </ul>

        <h2>What does it cost to adopt a cat?</h2>
        <p>
          Cat adoption is affordable, but first-month clustering surprises
          unprepared owners. Municipal shelters often charge $25 to $100,
          private rescues $100 to $250 for kittens, with frequent two-for-one
          kitten specials and senior discounts. Fees usually bundle spay or
          neuter, core vaccines, deworming, and a vet exam worth far more than
          the sticker price. Expect $150 to $300 for starter supplies, $60 to
          $200 for the first wellness exam, $25 to $60 monthly for food, and
          $15 to $30 monthly for litter. The table below maps first-year
          ranges so you can save before adoption day instead of scrambling
          after it.
        </p>
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Single adult cat</th>
              <th>Kitten (first year)</th>
              <th>Bonded pair</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adoption fee</td>
              <td>$25 – $150</td>
              <td>$100 – $250</td>
              <td>$50 – $300</td>
            </tr>
            <tr>
              <td>Starter supplies</td>
              <td>$150 – $280</td>
              <td>$180 – $320</td>
              <td>$220 – $400</td>
            </tr>
            <tr>
              <td>Annual food + litter</td>
              <td>$450 – $800</td>
              <td>$500 – $900</td>
              <td>$800 – $1,400</td>
            </tr>
            <tr>
              <td>Routine vet + prevention</td>
              <td>$250 – $500</td>
              <td>$350 – $650</td>
              <td>$450 – $900</td>
            </tr>
            <tr>
              <td>Enrichment + scratchers</td>
              <td>$60 – $150</td>
              <td>$80 – $180</td>
              <td>$100 – $220</td>
            </tr>
          </tbody>
        </table>
        <p>
          Keep a $500 starter emergency fund, because urinary blockages and
          foreign-body surgeries are expensive and urgent. Details on visit
          pricing live in the{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link>, and the{" "}
          <Link href="/pet-budget-calculator">pet budget calculator</Link>{" "}
          turns these ranges into a personal monthly plan.
        </p>

        <h2>How should you set up your home before pickup day?</h2>
        <p>
          Build a starter room first and the rest later. Choose a quiet
          bedroom or office with a door, and place inside it a litter box,
          food and water dishes kept apart from each other, a scratching post,
          a hiding spot, a bed, and a few toys. Scoopable unscented clumping
          litter suits most cats; scented litters repel sensitive noses. Set
          the box in a low-traffic corner, never beside a loud washer, and
          remember the golden rule of one box per cat plus one extra once the
          cat earns the whole home. Cat-proof by securing dangling blind
          cords, storing medications, rubber bands, and{" "}
          <Link href="/foods-toxic-to-pets">foods toxic to pets</Link> out of
          reach, and checking window screens for gaps. A tall scratching post
          near the sofa plus a window perch prevents most furniture scratching
          before it starts. Our{" "}
          <Link href="/litter-box-guide">litter box guide</Link> covers box
          styles and placement science, and{" "}
          <Link href="/indoor-cat-enrichment">indoor cat enrichment</Link>{" "}
          shows how to furnish a small apartment for climbing and play.
        </p>

        <h2>What should the first month home look like?</h2>
        <p>
          Slow and boring wins. Keep your cat in the starter room for three to
          seven days with the door closed, visiting often to read aloud, offer
          treats, and play with a wand toy. Let the cat hide as much as it
          wants; appetite and litter use matter more than cuddles in week one.
          Open one new room at a time only after the cat eats, drinks, and
          eliminates normally for 48 hours. Introductions to resident pets
          follow scent swapping, feeding across the closed door, then brief
          gated visuals over two to four weeks — never a face-to-face ambush.
          Establish rituals cats adore: same feeding times, a ten-minute
          evening play session ending in a small meal, and a calm bedtime.
          Brush gently, handle paws briefly with treats, and practice short
          carrier sessions with rewards so vet trips stay low-stress. Track
          eating, drinking, sneezing, and stool in a phone note for the first
          vet visit. By month three most cats claim favorite sunny spots,
          greet you at the door, and reveal the quirky personality that hiding
          concealed.
        </p>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Typical timing</th>
              <th>What you will see</th>
              <th>Your job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hide</td>
              <td>Days 1–3</td>
              <td>Hiding, night-only eating</td>
              <td>Starter room, quiet visits</td>
            </tr>
            <tr>
              <td>Explore</td>
              <td>Weeks 1–3</td>
              <td>Room-by-room patrols, play bursts</td>
              <td>Open space gradually, set rituals</td>
            </tr>
            <tr>
              <td>Belong</td>
              <td>Months 1–3</td>
              <td>Lap time, routines, confidence</td>
              <td>Enrichment, training, vet baseline</td>
            </tr>
          </tbody>
        </table>

        <h2>When do vet care, feeding, and routines lock in?</h2>
        <p>
          Week one is for the vet baseline. Bring every shelter record so the
          vet can map completed vaccines against the{" "}
          <Link href="/pet-vaccination-schedule">vaccination schedule</Link>,
          run fecal testing, confirm FeLV/FIV status, start{" "}
          <Link href="/flea-tick-prevention-guide">
            flea and tick prevention
          </Link>
          , and plan{" "}
          <Link href="/spay-neuter-guide">spay or neuter timing</Link>. Verify
          the <Link href="/microchip-pets-guide">microchip registration</Link>{" "}
          lists your phone number. Feed the shelter&apos;s current diet for
          two weeks before transitioning gradually over seven to ten days to
          avoid digestive upset; our{" "}
          <Link href="/cat-nutrition-guide">cat nutrition guide</Link> explains
          portions and label reading. Anchor the day with morning feeding,
          evening play-then-dinner, and nightly scooping, since cats thrive on
          predictability. Schedule{" "}
          <Link href="/pet-dental-care-guide">dental checkups</Link> and{" "}
          <Link href="/pet-grooming-basics">grooming routines</Link> early so
          handling stays easy for life.
        </p>

        <VetNote>
          This cat adoption checklist shares general education, not veterinary
          advice. Shelter records can be incomplete, so have your own
          veterinarian confirm vaccines, testing, and feeding plans within the
          first week. Learn more in our{" "}
          <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: American Association of Feline Practitioners guidelines;
          Cornell University Feline Health Center; ASPCA cat-care resources.
          Outbound references:{" "}
          <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center">
            Cornell Feline Health Center
          </a>{" "}
          and{" "}
          <a href="https://www.aspca.org/pet-care/cat-care">
            ASPCA cat-care library
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/litter-box-guide">Litter Box Guide</Link> — setup, cleaning cadence, and training fixes.
            </li>
            <li>
              <Link className="underline" href="/indoor-cat-enrichment">Indoor Cat Enrichment</Link> — play, scratching, and climbing ideas for happy cats.
            </li>
            <li>
              <Link className="underline" href="/vet-costs-guide">Vet Costs Guide</Link> — exam, vaccine, and surgery price ranges plus saving tips.
            </li>
            <li>
              <Link className="underline" href="/cat-nutrition-guide">Cat Nutrition Guide</Link> — food types, portions, and kitten-to-senior transitions.
            </li>
          </ul>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
    </article>
  );
}
