import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection, OfficialBox } from "../lib";

export const metadata: Metadata = {
  title: "Cat Nutrition Guide: Food, Portions & Kitten Diets",
  description:
    "Cat nutrition guide: obligate carnivore needs, wet vs dry food, portions & kitten feeding. Nourish your cat properly — read the full guide!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/cat-nutrition-guide",
  },
  openGraph: {
    title: "Cat Nutrition Guide: Food, Portions & Kitten Diets",
    description:
      "Cat nutrition guide: obligate carnivore needs, wet vs dry food, portions & kitten feeding. Nourish your cat properly — read the full guide!",
    url: "https://pets.loanpaylogic.com/cat-nutrition-guide",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Nutrition Guide: Food, Portions & Kitten Diets",
    description:
      "Cat nutrition guide: obligate carnivore needs, wet vs dry food, portions & kitten feeding. Nourish your cat properly — read the full guide!",
  },
};

const FAQS = [
  {
    q: "What is the best food for my cat?",
    a: "The best food is a complete and balanced diet formulated for cats that carries an AAFCO statement for your cat's life stage. Cats are obligate carnivores needing animal protein, taurine, arachidonic acid, and preformed vitamin A that plant foods cannot supply. Most vets recommend quality wet food as the base with measured dry food for grazing, from manufacturers with feeding trials. Pick the recipe your cat eats eagerly with firm stools and a healthy coat.",
  },
  {
    q: "Should I feed my cat wet food or dry food?",
    a: "Wet food suits most cats better because its 75 percent moisture supports urinary health and mirrors natural prey hydration, while dry food offers convenience and calorie density. A mixed routine — scheduled wet meals plus a measured dry portion — captures both benefits. Cats with urinary crystals, kidney disease, or constipation often do best on vet-guided high-moisture diets. Whatever mix you choose, measure portions and keep fresh water available in multiple spots.",
  },
  {
    q: "How much should I feed my cat per day?",
    a: "An average 10-pound indoor adult cat needs roughly 200 to 250 calories daily, usually split into two wet meals plus a small measured dry portion. Start from the label chart for your cat's weight, then adjust every two weeks toward a visible waist and feelable ribs. Kittens need three to four meals of growth formula, while seniors need vet-tuned portions. Weigh food with a kitchen scale for accuracy since free-pouring is the top cause of feline weight gain.",
  },
  {
    q: "Can cats be vegetarian or vegan?",
    a: "No, cats cannot thrive on vegetarian or vegan diets. As obligate carnivores they require taurine, arachidonic acid, vitamin A, and vitamin B12 in animal-tissue forms, and deficiencies cause blindness, heart failure, and reproductive collapse. Even supplemented plant diets carry documented risks and need direct veterinary nutritionist supervision. Feed a meat-based complete diet and discuss any ethical concerns with your vet for the safest compromise options.",
  },
  {
    q: "When should I switch my kitten to adult cat food?",
    a: "Most kittens transition to adult food around 12 months, with large breeds like Maine Coons staying on growth formulas until 15 to 18 months per vet guidance. Switch gradually over 7 to 10 days by blending increasing amounts of adult food. Confirm timing at the one-year wellness visit using weight curves and body condition scoring. Spayed and neutered kittens often need slightly fewer calories, so ask about portions at the surgery recheck.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-coral">🐱 Cats</span>
        <span className="bubble-chip chip-honey">🍖 Nutrition</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Cat Nutrition Guide: Feed Your Cat Right
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAFCO, AAFP, Cornell · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>cat nutrition guide</strong> explains how to feed an
          obligate carnivore in a kibble-filled world: why meat matters more
          for cats than dogs, how wet and dry food compare for urinary
          health, exact portion starting points, kitten-to-adult transitions,
          and treat rules that protect the waistline. Cats evolved as desert
          hunters that pull moisture from prey, so modern indoor cats on
          dry-only diets often drink too little and concentrate their urine —
          a quiet driver of crystals and bladder misery. The fix is simpler
          than marketing suggests: a meat-based, AAFCO-balanced diet matched
          to life stage, measured meals instead of endless buffets, and water
          strategy woven into daily routine. Read on for label-reading
          shortcuts, feeding charts by weight, safe human-food treats, and the
          transition schedules vets recommend for kittens, adults, and
          seniors alike.
        </p>

        <h2>Why are cats called obligate carnivores?</h2>
        <p>
          Obligate carnivore means cats must eat animal tissue to survive —
          it is biochemistry, not preference. Cats cannot manufacture taurine,
          the amino acid that powers heart and eye function, and taurine
          deficiency causes dilated cardiomyopathy and retinal degeneration.
          They also require arachidonic acid, preformed vitamin A, and
          vitamin B12 in animal forms because they lack the enzymes to convert
          plant precursors efficiently. Protein needs run high: growth
          formulas carry at least 30 percent protein and adult formulas at
          least 26 percent on a dry-matter basis. This biology explains why
          dog food, vegetarian cooking, and tuna-only treats all fail cats
          over time despite short-term enthusiasm. Every meal should center
          on named animal proteins — chicken, turkey, fish, rabbit — within a
          complete formula designed for cats specifically. Treat the meat
          requirement as non-negotiable biology, and most feline nutrition
          decisions become wonderfully simple.
        </p>

        <h2>How do you read a cat food label in 60 seconds?</h2>
        <p>
          Check the same three panel items as dog owners but with feline
          thresholds. First, the AAFCO statement must say complete and
          balanced for growth, adult maintenance, or all life stages — and
          all-life-stage foods must meet the stricter growth profile. Second,
          confirm protein and taurine minimums in the guaranteed analysis.
          Third, note the calorie content and feeding chart so you can
          portion by calories rather than cups across brands. Named meats
          leading the ingredient list is reassuring, while vague meat
          by-products and heavy plant-protein splitting deserve skepticism.
          Ignore front-of-bag poetry like ancestral and holistic, which carry
          no legal meaning. Favor manufacturers employing credentialed
          nutritionists, conducting feeding trials, and following WSAVA
          manufacturer guidelines. When comparing costs, calculate price per
          100 calories fed — premium wet food often competes well once you
          stop free-pouring dry.
        </p>
        <table>
          <thead>
            <tr>
              <th>Food type</th>
              <th>Strengths</th>
              <th>Watch-outs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wet / canned</td>
              <td>High moisture for urinary health, high protein</td>
              <td>Costs more; refrigerate opened cans</td>
            </tr>
            <tr>
              <td>Dry kibble</td>
              <td>Convenient, calorie-dense, easy to store</td>
              <td>Low moisture; measure strictly</td>
            </tr>
            <tr>
              <td>Mixed wet + dry</td>
              <td>Hydration plus convenience; most vets&apos; pick</td>
              <td>Track total calories across both</td>
            </tr>
            <tr>
              <td>Raw / homemade</td>
              <td>Owner control appeal</td>
              <td>Bacterial risk; needs nutritionist recipe</td>
            </tr>
          </tbody>
        </table>

        <h2>How much should you feed at each life stage?</h2>
        <p>
          Calories, not cups, run the show. An average 10-pound indoor adult
          needs roughly 200 to 250 calories daily; active outdoor cats need
          more and couch loafers need less. Split the total into a morning
          wet meal and an evening wet meal with a small measured dry snack
          midday, which stabilizes energy and reduces 5 a.m. wake-up yowling.
          Kittens eat like tiny athletes: three to four growth-formula meals
          daily until six months, then three until twelve months, with food
          scaled to weekly weigh-ins. Spay and neuter surgery drops calorie
          needs by up to 30 percent, so reduce portions at the recheck rather
          than waiting for weight gain. Seniors need vet-tuned plans from our{" "}
          <Link href="/senior-cat-care">senior cat care</Link> playbook,
          because kidney, thyroid, and dental changes pull appetites in
          opposite directions. Reassess body condition monthly: ribs
          feelable, waist visible, belly without a heavy pad. A $15 kitchen
          scale pays for itself by ending portion guesswork forever.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cat profile</th>
              <th>Daily calories (start)</th>
              <th>Meal pattern</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8 lb indoor adult</td>
              <td>180 – 220 kcal</td>
              <td>2 wet meals + tiny dry</td>
              <td>Weigh monthly</td>
            </tr>
            <tr>
              <td>10 lb indoor adult</td>
              <td>200 – 250 kcal</td>
              <td>2 wet meals + tiny dry</td>
              <td>Most common profile</td>
            </tr>
            <tr>
              <td>12 lb large/active</td>
              <td>250 – 300 kcal</td>
              <td>2–3 meals</td>
              <td>Adjust for outdoor roaming</td>
            </tr>
            <tr>
              <td>Kitten, 6 months</td>
              <td>250 – 350 kcal</td>
              <td>3–4 growth meals</td>
              <td>Weigh weekly</td>
            </tr>
          </tbody>
        </table>

        <h2>How do you keep your cat hydrated and treat-smart?</h2>
        <p>
          Water strategy is urinary insurance. Place wide ceramic bowls and a
          quiet fountain in two separate spots away from food, wash them
          every day or two, and keep toilet lids closed so the fountain wins.
          Flavor water occasionally with a teaspoon of tuna water for reluctant
          drinkers, and consider a second fountain on another floor. For
          treats, hold the ten-percent rule and choose pea-sized meaty bits,
          freeze-dried single proteins, and lick mats smeared with wet food
          for grooming-distraction duty. Safe nibbles include plain cooked
          chicken, tiny cheese crumbs for tolerant cats, and blueberries some
          cats bat around before eating. Never feed onions, garlic, grapes,
          chocolate, alcohol, or xylitol-sweetened foods — the full chart
          lives in our <Link href="/foods-toxic-to-pets">toxic foods</Link>{" "}
          guide. Use puzzle feeders from our{" "}
          <Link href="/indoor-cat-enrichment">indoor enrichment</Link> guide
          to slow gobblers and engage hunter brains; a cat that works for
          dinner stays leaner and calmer than a bowl-staring grazer.
        </p>

        <h2>How do you switch foods without hunger strikes?</h2>
        <p>
          Cats are famously neophobic, so transitions run seven to fourteen
          days. Start with 75 percent old food and 25 percent new for three
          days, move to fifty-fifty for three days, then 25-75 for three days
          before completing the swap. Warm wet food to mouse temperature to
          release aroma, and keep mealtimes, bowls, and locations identical
          while only the recipe changes. Never starve a cat into accepting
          new food: cats that fast over 24 to 48 hours risk hepatic lipidosis,
          a dangerous liver condition, so call the vet if refusal passes a
          day. Time transitions away from{" "}
          <Link href="/moving-with-pets-guide">moves</Link>, boarding, and
          vaccine weeks. If digestive upset, itching, or ear inflammation
          follows a new diet, document timing with photos and loop in your
          vet for elimination-diet guidance rather than cycling randomly
          through boutique bags.
        </p>

        <h2>How do you handle picky eaters and food allergies?</h2>
        <p>
          Picky eating in cats is often neophobia plus texture loyalty: cats
          imprint on shapes and mouthfeels early, so a lifelong kibble cat
          may genuinely not recognize wet chunks as food. Convert gradually
          by crushing a little new food over the old favorite, warming wet
          portions to release aroma, and keeping mealtimes to twenty-minute
          windows rather than all-day buffets that teach grazing disdain.
          Never let stubbornness become fasting beyond 24 hours — call the
          vet instead, since hepatic lipidosis threatens cats that stop
          eating. True food allergies show as year-round itching, ear
          inflammation, or chronic soft stools, and diagnosis requires a
          strict eight-to-twelve-week elimination diet with a novel or
          hydrolyzed protein, not random boutique hopping. During trials,
          every treat, flavored medication, and table scrap resets the
          clock, so the whole household must commit. Document everything:
          start dates, exact products, itch scores, and stool quality. Most
          suspected allergies turn out to be flea allergy, environmental
          triggers, or boredom overeating, which your vet distinguishes with
          skin and diet workups. Patience plus records beats another
          expensive bag every time.
        </p>

        <h2>How do you read the feeding chart across brands?</h2>
        <p>
          Feeding charts confuse because cups and calories differ wildly
          between recipes. Convert everything to daily calories first: find
          the kcal per cup or per can on the label, multiply by your
          cat&apos;s target — roughly 200 to 250 for an average indoor adult
          — and divide into meals. Dense premium foods feed smaller volumes
          than airy budget kibble, so cup-to-cup comparisons mislead badly.
          Transition brands by calories, not cups, holding energy constant
          while the recipe changes underneath. Weigh the cat every two weeks
          during any switch and adjust ten percent at a time toward the body
          condition your vet targets. Keep a feeding card on the fridge with
          product, kcal per unit, daily amount, and treat budget so
          sitters and family members pour identically. Calorie thinking turns
          every label — wet, dry, fresh, or prescription — into the same
          simple arithmetic your cat&apos;s waistline understands.
        </p>

        <VetNote>
          This cat nutrition guide shares general education, not veterinary
          advice. Cats with urinary, kidney, thyroid, or diabetic conditions
          need prescription nutrition chosen by their veterinarian. Learn
          more in our <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <OfficialBox
          gov={{ href: "https://www.fda.gov/animal-veterinary", label: "FDA Center for Veterinary Medicine", desc: "federal pet-food safety and labeling information" }}
          authority={{ href: "https://www.avma.org/resources-tools/pet-owners", label: "AVMA pet-owner resources", desc: "veterinarian-reviewed feline nutrition guidance" }}
        />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: AAFCO official publication; American Association of Feline
          Practitioners nutrition resources; Cornell Feline Health Center.
          Outbound references:{" "}
          <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center">
            Cornell Feline Health Center
          </a>{" "}
          and{" "}
          <a href="https://catfriendly.com/cat-owner-resources/">
            AAFP cat-owner resources
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/dog-nutrition-guide">Dog Nutrition Guide</Link> — food types, portions, and puppy-to-adult transitions.
            </li>
            <li>
              <Link className="underline" href="/senior-cat-care">Senior Cat Care</Link> — diet, comfort, and health checks for aging cats.
            </li>
            <li>
              <Link className="underline" href="/pet-dental-care-guide">Pet Dental Care Guide</Link> — brushing, chews, and professional cleaning timing.
            </li>
            <li>
              <Link className="underline" href="/foods-toxic-to-pets">Foods Toxic to Pets</Link> — 20 dangerous foods chart every owner should know.
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
