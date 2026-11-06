import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection, OfficialBox } from "../lib";

export const metadata: Metadata = {
  title: "Pet Dental Care Guide: Brushing & Cleanings",
  description:
    "Pet dental care guide: brushing technique, dental treats, cleaning costs & warning signs. Save teeth and money — start the routine today!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/pet-dental-care-guide",
  },
  openGraph: {
    title: "Pet Dental Care Guide: Brushing & Cleanings",
    description:
      "Pet dental care guide: brushing technique, dental treats, cleaning costs & warning signs. Save teeth and money — start the routine today!",
    url: "https://pets.loanpaylogic.com/pet-dental-care-guide",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Dental Care Guide: Brushing & Cleanings",
    description:
      "Pet dental care guide: brushing technique, dental treats, cleaning costs & warning signs. Save teeth and money — start the routine today!",
  },
};

const FAQS = [
  {
    q: "How often should I brush my pet's teeth?",
    a: "Daily brushing is the gold standard because plaque hardens into tartar within 48 to 72 hours, and only mechanical brushing removes it effectively. Three sessions per week still meaningfully reduces gingivitis versus none. Use a soft pet toothbrush with enzymatic pet toothpaste in a flavor your pet likes, working the outer surfaces of the upper teeth where tartar accumulates fastest. Build duration over two weeks from lip lifts to full 60-second sessions.",
  },
  {
    q: "How much does a professional pet dental cleaning cost?",
    a: "Anesthesia-based dental cleanings with X-rays typically cost $500 to $1,200 for cats and $600 to $1,500 for dogs, with extractions adding $100 to $500 per tooth depending on complexity. Prices reflect anesthesia monitoring, imaging, scaling, polishing, and nerve blocks. Anesthesia-free cosmetic cleanings cannot take X-rays or clean under the gumline and are not a medical substitute. Annual cleanings for at-risk breeds cost less than the multi-tooth extractions that neglected mouths require.",
  },
  {
    q: "What are signs of dental disease in pets?",
    a: "Bad breath beyond normal pet smell, red or bleeding gums, yellow-brown tartar crusts, drooling, dropping food, chewing on one side, pawing at the mouth, and reluctance to play with toys all signal dental disease. Advanced signs include facial swelling, sneezing with discharge from tooth-root abscesses, and weight loss. By age three most dogs and cats show some periodontal disease, so do not dismiss bad breath as normal.",
  },
  {
    q: "Do dental treats and water additives work?",
    a: "Dental treats and diets with the VOHC seal of acceptance genuinely reduce plaque and tartar buildup as a supplement, not a replacement for brushing. Enzymatic water additives offer mild benefits for pets that refuse brushing, though picky drinkers may avoid treated water. Hard bones, antlers, and nylon toys marketed for teeth commonly fracture teeth and should be avoided. Rank home care as brushing first, VOHC chews second, and additives third.",
  },
  {
    q: "Is anesthesia safe for pet dental cleanings?",
    a: "Modern anesthesia with pre-surgical bloodwork, IV fluids, monitoring, and tailored protocols is very safe for most pets including seniors, and it is required for complete X-rays plus under-gum scaling without pain or panic. The greater risk lies in skipping care: chronic oral infection seeds bacteria into the bloodstream and causes constant pain pets hide well. Discuss your pet's specific risk factors with your vet, and follow fasting and medication instructions exactly.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">🏥 Health</span>
        <span className="bubble-chip chip-honey">🦷 Dental</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Pet Dental Care: Brushing, Treats & Cleanings
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAHA, AVDC · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>pet dental care guide</strong> tackles the most
          neglected corner of pet health: mouths. By age three, the majority
          of dogs and cats show signs of periodontal disease — red gums,
          tartar, and bad breath that owners wave away as normal. It is not
          normal; it is chronic infection that hurts with every chew and
          seeds bacteria toward the heart, liver, and kidneys. The happier
          truth is that daily two-minute brushing plus smart chews plus
          periodic professional cleanings keep most mouths healthy for life
          at a fraction of extraction-surgery costs. Inside you will learn
          the exact brushing technique vets teach, which products carry
          real evidence, what professional cleanings involve and cost, the
          warning signs that mean call now, and age-specific plans from
          puppy teeth to senior mouths.
        </p>

        <h2>Why does dental disease hurt more than owners realize?</h2>
        <p>
          Periodontal disease starts invisibly as plaque films the teeth and
          hardens into tartar within days, driving infection under the
          gumline where owners cannot see. Gums bleed, bone loosens around
          roots, and abscesses brew while pets keep eating — evolution taught
          them to hide pain or lose meals to rivals. Studies link advanced
          dental disease to kidney, liver, and cardiac stress from chronic
          bacteremia, plus measurable quality-of-life drops owners only
          recognize after treatment when a gray-muzzle pet plays like a
          youngster again. Small breeds, greyhounds, Persians, and seniors
          face the highest risk due to crowded teeth and years of buildup.
          Bad breath is the billboard: healthy mouths smell neutral, so
          persistent odor deserves a vet look, not a mint treat. Treat the
          mouth as an organ system, and the rest of the body thanks you.
        </p>

        <h2>How do you brush your pet's teeth step by step?</h2>
        <p>
          Build the habit over fourteen days, never in one forced session.
          Days one to three: smear enzymatic pet toothpaste on your finger
          and let your pet lick it as a treat after lifting the lip briefly.
          Days four to seven: rub the finger along the outer upper teeth for
          ten seconds, always ending with play. Week two: graduate to a soft
          pet brush or finger brush at a 45-degree angle to the gumline,
          circling the outer surfaces of the canines and upper premolars
          where tartar strikes hardest. Aim for sixty seconds daily; even
          thirty seconds on the outsides beats skipping. Use only pet
          toothpaste — human formulas with fluoride and xylitol are unsafe —
          in poultry, fish, or peanut flavors your pet adores. Puppies and
          kittens from our <Link href="/puppy-training-basics">puppy</Link>{" "}
          and <Link href="/cat-adoption-checklist">kitten</Link> routines
          accept brushing fastest, but seniors learn too with extra patience
          and shorter sessions.
        </p>
        <table>
          <thead>
            <tr>
              <th>Home-care method</th>
              <th>Evidence level</th>
              <th>How to use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daily brushing</td>
              <td>Gold standard</td>
              <td>60 seconds, outer surfaces, pet paste</td>
            </tr>
            <tr>
              <td>VOHC dental chews</td>
              <td>Good supplement</td>
              <td>Daily chew matched to size</td>
            </tr>
            <tr>
              <td>VOHC dental diet</td>
              <td>Good supplement</td>
              <td>As vet-directed base or mix</td>
            </tr>
            <tr>
              <td>Water additives</td>
              <td>Mild help</td>
              <td>Only if drinking stays normal</td>
            </tr>
            <tr>
              <td>Hard bones / antlers</td>
              <td>Harmful — fractures teeth</td>
              <td>Avoid entirely</td>
            </tr>
          </tbody>
        </table>

        <h2>What happens during a professional dental cleaning?</h2>
        <p>
          Real dentistry happens under anesthesia and follows astage:
          pre-anesthetic bloodwork, IV catheter and fluids, full-mouth X-rays
          revealing the 60 percent of each tooth hidden below gums, ultrasonic
          scaling above and below the gumline, polishing, nerve blocks for
          extractions, and charting you can review. Anesthesia-free cosmetic
          services scrape visible tartar while leaving subgingival disease —
          and pain — untouched, which is why veterinary dental specialists
          oppose them. Costs from our{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link> reflect
          genuine medical work: $500 to $1,500 depending on species, size,
          and extractions. Frequency follows risk: annual for small breeds
          and red-gum individuals, every one to two years for many others.
          Ask whether X-rays, blocks, and rechecks are bundled, and request
          before-and-after photos. Pets wake up groggy, eat soft food that
          night, and within days chew with a comfort owners forgot was
          possible.
        </p>

        <h2>What warning signs mean call the vet now?</h2>
        <p>
          Distinguish watch signs from rush signs. Schedule a prompt visit
          for persistent bad breath, yellow-brown tartar ridges, pink-tinged
          drool, dropping kibble, one-sided chewing, or pawing at the face.
          Seek urgent care for facial swelling, jaw chattering with pain,
          bleeding that will not stop, refusal to eat beyond 24 hours, or
          sneezing with bloody discharge suggesting root abscesses. Never
          attempt home extractions, file teeth, or dose human painkillers —
          ibuprofen and acetaminophen poison pets, as our{" "}
          <Link href="/common-pet-emergencies">emergencies guide</Link>{" "}
          details. Photograph the mouth in good light before the visit; vets
          diagnose faster with visuals. Between visits, log brushing
          compliance, chew acceptance, and breath changes in the same phone
          note as weight and appetite. Mouths change slowly until they
          change suddenly, and early appointments save teeth.
        </p>

        <h2>How does dental care change with age?</h2>
        <p>
          Puppy and kitten months are for training, not treatment: handle
          mouths daily, brush deciduous teeth gently, and let the vet check
          retained baby teeth at spay-neuter time per our{" "}
          <Link href="/spay-neuter-guide">surgery guide</Link>. Adult years
          are the prevention window — daily brushing plus VOHC chews plus
          scheduled cleanings keeps mouths boring. Seniors need the closest
          watch:mantableannual exams with dental scoring, X-rays catching
          root resorption common in older cats, and prompt cleaning before
          kidney values complicate anesthesia. Pair dental routines with
          nutrition from our <Link href="/dog-nutrition-guide">dog</Link>{" "}
          and <Link href="/cat-nutrition-guide">cat</Link> guides, because
          crunchy kibble helps minimally while overall health shapes gum
          resilience. Budget cleanings in the{" "}
          <Link href="/pet-budget-calculator">budget calculator</Link> as
          predictable care. A lifetime of two-minute brushings buys your pet
          comfortable chewing into the late teens — the gentlest longevity
          investment you will ever make.
        </p>
        <table>
          <thead>
            <tr>
              <th>Life stage</th>
              <th>Home focus</th>
              <th>Professional rhythm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Puppy / kitten</td>
              <td>Handling + paste familiarity</td>
              <td>Mouth check at vaccine visits</td>
            </tr>
            <tr>
              <td>Adult</td>
              <td>Daily brushing + VOHC chews</td>
              <td>Cleaning every 1 – 2 years as advised</td>
            </tr>
            <tr>
              <td>Senior</td>
              <td>Gentle brushing, soft chews</td>
              <td>Annual assessment with X-rays</td>
            </tr>
          </tbody>
        </table>

        <h2>Which breeds and ages need the closest dental watch?</h2>
        <p>
          Risk concentrates sharply, so calibrate vigilance to your pet.
          Small and toy breeds — dachshunds, Yorkies, Chihuahuas, Maltese —
          crowd 42 teeth into tiny jaws, trapping plaque that becomes
          advanced disease by middle age without intervention. Greyhounds and
          Persians carry notorious breed predispositions, while golden
          retrievers and Labradors crack teeth on hard chewing. Cats develop
          painful tooth resorption that dissolves roots silently; drooling,
          jaw chattering over food, and sudden kibble refusal flag it. Age
          compounds everything: most pets show some periodontal disease by
          three years, and seniors stack years of tartar with weaker immune
          defenses. High-risk pets deserve daily brushing without excuses,
          VOHC chews sized correctly, and professional assessments on the
          early side of the schedule. Ask your vet to score dental grade at
          every wellness visit and photograph changes over time. Breed-aware
          owners catch disease at the cleaning stage instead of the
          extraction stage — saving teeth, money, and months of hidden pain.
        </p>

        <h2>How do you start brushing when your pet already resists?</h2>
        <p>
          Adult refusers convert with slower shaping, not force. Week one
          pairs lip lifts with licked paste rewards, ten reps daily, no brush
          in sight. Week two rubs paste along the outer teeth with a finger
          for five seconds, always ending in play. Week three introduces the
          brush for three teeth only, building two teeth per day toward full
          mouths. Nervous pets learn one quadrant daily rather than whole
          mouths at once. Pair sessions with the same cue word, location, and
          treat so ritual predicts rewards. Cats accept finger brushes and
          gauze wraps more readily than long handles; small dogs prefer
          angled mini heads. If growling or snapping appears, stop and
          rebuild at the previous stage — pain from existing dental disease
          often drives resistance, and our warning-signs section tells you
          when the vet must go first. Most refusers brush calmly within a
          month when the human slows down enough to let them succeed.
        </p>

        <VetNote>
          This pet dental care guide shares general education, not
          veterinary advice. Only your veterinarian can diagnose dental
          disease and plan anesthesia care. Learn more in our{" "}
          <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <OfficialBox
          gov={{ href: "https://www.fda.gov/animal-veterinary", label: "FDA Center for Veterinary Medicine", desc: "federal information on approved animal dental products" }}
          authority={{ href: "https://www.avma.org/resources-tools/pet-owners", label: "AVMA pet-owner resources", desc: "veterinarian-reviewed dental-care guidance" }}
        />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: AAHA dental care guidelines; American Veterinary Dental
          College owner resources. Outbound references:{" "}
          <a href="https://www.aaha.org/resources/pet-owner/">
            AAHA pet-owner resources
          </a>{" "}
          and{" "}
          <a href="https://avdc.org/clients/">
            AVDC client resources
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/pet-grooming-basics">Pet Grooming Basics</Link> — baths, brushing, nails, and ear-care routines.
            </li>
            <li>
              <Link className="underline" href="/vet-costs-guide">Vet Costs Guide</Link> — exam, vaccine, and surgery price ranges plus saving tips.
            </li>
            <li>
              <Link className="underline" href="/senior-cat-care">Senior Cat Care</Link> — diet, comfort, and health checks for aging cats.
            </li>
            <li>
              <Link className="underline" href="/dog-nutrition-guide">Dog Nutrition Guide</Link> — food types, portions, and puppy-to-adult transitions.
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
