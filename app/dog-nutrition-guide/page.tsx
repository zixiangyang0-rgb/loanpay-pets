import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection, OfficialBox } from "../lib";

export const metadata: Metadata = {
  title: "Dog Nutrition Guide: Food, Portions & Puppy Diets",
  description:
    "Dog nutrition guide: best foods, portion charts, puppy vs adult diets & treats. Feed your dog with confidence — read the complete guide!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/dog-nutrition-guide",
  },
  openGraph: {
    title: "Dog Nutrition Guide: Food, Portions & Puppy Diets",
    description:
      "Dog nutrition guide: best foods, portion charts, puppy vs adult diets & treats. Feed your dog with confidence — read the complete guide!",
    url: "https://pets.loanpaylogic.com/dog-nutrition-guide",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Nutrition Guide: Food, Portions & Puppy Diets",
    description:
      "Dog nutrition guide: best foods, portion charts, puppy vs adult diets & treats. Feed your dog with confidence — read the complete guide!",
  },
};

const FAQS = [
  {
    q: "What is the best food for my dog?",
    a: "The best food is a complete and balanced diet formulated for your dog's life stage that carries an AAFCO nutritional adequacy statement on the label. Dogs thrive on quality commercial kibble, wet food, or a mix of both from established manufacturers with feeding trials. Grain-free, raw, and boutique diets need a vet conversation first because of documented heart and contamination risks. Choose the recipe your individual dog eats eagerly, digests well, and maintains a healthy weight on.",
  },
  {
    q: "How much should I feed my dog per day?",
    a: "Most adult dogs need two measured meals daily totaling roughly 2 to 3 percent of body weight in food, but the label's feeding chart adjusted by your vet beats any generic rule. Start with the package amount for your dog's weight, then adjust every two weeks toward a visible waist and feelable ribs. Puppies need three to four smaller meals, seniors often need fewer calories with more fiber, and active sporting dogs need significantly more. Always measure with a scale or cup rather than eyeballing.",
  },
  {
    q: "Is grain-free dog food better?",
    a: "For most dogs, no. Whole grains like rice, oats, and barley provide safe energy and fiber, and the FDA has investigated links between grain-free boutique diets heavy in peas and lentils and canine dilated cardiomyopathy. Unless your vet diagnoses a specific grain allergy, which is rare in dogs, choose a grain-inclusive formula from a manufacturer meeting WSAVA guidelines. If your dog currently eats grain-free, ask your vet about an echocardiogram discussion and a diet review.",
  },
  {
    q: "What human foods can dogs eat safely?",
    a: "Plain cooked chicken, turkey, carrots, green beans, apple slices without seeds, blueberries, plain pumpkin, and peanut butter without xylitol make safe occasional treats. Keep treats under 10 percent of daily calories and introduce new foods one at a time. Never feed chocolate, grapes, raisins, onions, garlic, macadamia nuts, alcohol, or anything sweetened with xylitol. Our foods toxic to pets guide lists the full danger chart with symptoms.",
  },
  {
    q: "When should I switch my puppy to adult dog food?",
    a: "Small breeds usually transition around 9 to 12 months, medium breeds around 12 months, and large or giant breeds around 12 to 18 months when growth plates close. Switch gradually over 7 to 10 days by mixing increasing proportions of adult food to avoid digestive upset. Ask your vet at the one-year wellness visit to confirm timing based on weight curves and body condition. Large-breed puppies should stay on large-breed puppy formulas until the vet approves the change.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">🐶 Dogs</span>
        <span className="bubble-chip chip-honey">🍖 Nutrition</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Dog Nutrition Guide: Feed Your Dog Right
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAFCO, WSAVA, Cornell · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>dog nutrition guide</strong> cuts through pet-food
          marketing to explain what dogs actually need: balanced nutrients,
          right-sized portions, and life-stage feeding from puppyhood to the
          gray-muzzle years. Walk down any pet aisle and you will face walls
          of kibble shouting grain-free, ancestral, and human-grade promises,
          yet canine nutrition science is refreshingly straightforward. Dogs
          are adaptable omnivores that thrive on complete commercial diets
          meeting AAFCO standards, fed in measured meals matched to weight
          and activity. Inside you will learn to read labels in sixty
          seconds, compare kibble versus wet versus fresh food honestly,
          follow portion charts by size, transition foods without stomach
          drama, and pick treats that help rather than harm. Pair this guide
          with your vet&apos;s body-condition checks and your dog will hold a
          healthy weight, shine from coat to stool, and enjoy meals as a
          highlight of every single day.
        </p>

        <h2>What nutrients does your dog actually need?</h2>
        <p>
          Dogs need six nutrient groups every day: water, protein, fat,
          carbohydrates, vitamins, and minerals. Protein from meat, fish, and
          eggs builds muscle and immune defenses, with puppies needing around
          22 percent protein minimum and adults around 18 percent on a dry
          matter basis. Fat supplies concentrated energy plus omega fatty
          acids for skin and brain health. Carbohydrates from rice, oats, and
          vegetables offer gentle energy and fiber for steady digestion.
          Calcium, phosphorus, and trace minerals in correct ratios grow
          strong bones, which is why large-breed puppies need precisely
          balanced growth formulas rather than extra calcium supplements.
          Fresh water matters most of all: wash bowls daily and keep water
          available always, adding a second station in multi-level homes.
          Complete commercial diets deliver all of this in every scoop, which
          is why homemade meals require a veterinary nutritionist recipe
          rather than improvisation. deficiencies from unbalanced home cooking
          develop silently over months, so treat nutrition as preventive
          medicine served twice daily.
        </p>

        <h2>How do you read a dog food label in 60 seconds?</h2>
        <p>
          Flip the bag and hunt three things. First, the AAFCO statement:
          look for complete and balanced for a named life stage such as
          growth, adult maintenance, or all life stages, ideally validated
          by feeding trials. Second, the guaranteed analysis minimums for
          protein and fat matched to your dog&apos;s stage. Third, the
          feeding chart by weight, which gives your starting portion. The
          ingredient list orders by pre-cooked weight, so named meats first
          is reassuring but not decisive — processing and overall formulation
          matter more than any single ingredient. Marketing words like
          natural, premium, and holistic have no legal definitions in pet
          food, so ignore the front and trust the back panel. Prefer
          manufacturers that employ full-time nutritionists, run feeding
          trials, publish research, and meet WSAVA manufacturer guidelines.
          When comparing prices, divide by daily feeding cost using the
          chart rather than bag price, because dense premium kibble often
          costs less per day than fluffy budget filler.
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
              <td>Dry kibble</td>
              <td>Affordable, easy to measure, good for teeth engagement</td>
              <td>Low moisture; pick proven brands</td>
            </tr>
            <tr>
              <td>Wet / canned</td>
              <td>High moisture, great palatability for picky dogs</td>
              <td>Costs more; refrigerate leftovers</td>
            </tr>
            <tr>
              <td>Fresh / gently cooked</td>
              <td>Excellent palatability, portioned plans</td>
              <td>Pricey; verify AAFCO balance</td>
            </tr>
            <tr>
              <td>Raw / BARF</td>
              <td>Marketing appeal</td>
              <td>Bacterial risk; nutritional gaps common — vet consult first</td>
            </tr>
          </tbody>
        </table>

        <h2>How much should you feed at each life stage?</h2>
        <p>
          Portions beat formulas for weight control. Start from the package
          chart for your dog&apos;s current weight, feed two measured meals
          twelve hours apart, and reassess body condition every two weeks:
          you should see a waist from above, feel ribs under a thin fat
          cover, and notice steady energy. Puppies eat three to four meals
          daily until six months, then graduate to two. Large-breed puppies
          need large-breed growth formulas with controlled calcium until
          growth completes around twelve to eighteen months. Adults hold
          steady on maintenance portions tuned to activity — a weekend hiking
          buddy eats more than an apartment nap champion of the same weight.
          Seniors often need fewer calories but more protein and joint
          support; our <Link href="/senior-dog-care">senior dog care</Link>{" "}
          guide details the transition. Pregnant and nursing dogs need
          calorie-dense growth formulas under vet supervision. The table
          below gives starting daily cups for a typical mid-calorie kibble;
          your vet fine-tunes from there.
        </p>
        <table>
          <thead>
            <tr>
              <th>Dog weight</th>
              <th>Typical daily kibble</th>
              <th>Meals per day</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 lb (small)</td>
              <td>¾ – 1 cup</td>
              <td>2</td>
              <td>Weigh food; small dogs gain fast</td>
            </tr>
            <tr>
              <td>30 lb (medium)</td>
              <td>1¾ – 2¼ cups</td>
              <td>2</td>
              <td>Adjust for walk distance</td>
            </tr>
            <tr>
              <td>50 lb (large)</td>
              <td>2½ – 3¼ cups</td>
              <td>2</td>
              <td>Slow-feed bowl if gulping</td>
            </tr>
            <tr>
              <td>80 lb (giant)</td>
              <td>3½ – 4½ cups</td>
              <td>2</td>
              <td>Split to reduce bloat risk</td>
            </tr>
          </tbody>
        </table>

        <h2>Which treats and chews are safe versus risky?</h2>
        <p>
          Follow the ten-percent rule: treats plus chews plus table scraps
          stay under a tenth of daily calories so the balanced diet does its
          job. Training treats should be pea-sized, soft, and smelly — tiny
          chicken bits beat giant biscuits for repetition work in{" "}
          <Link href="/puppy-training-basics">puppy training</Link>. Safe
          whole-food rewards include baby carrots, green beans, apple slices,
          blueberries, watermelon chunks, and spoonfuls of plain pumpkin for
          mild tummy days. Dental chews with VOHC acceptance genuinely reduce
          tartar between cleanings; see our{" "}
          <Link href="/pet-dental-care-guide">pet dental care guide</Link> for
          the full routine. Avoid cooked bones that splinter, rawhide chunks
          that swell, and any treat sweetened with xylitol or birch sugar.
          Memorize the danger list in our{" "}
          <Link href="/foods-toxic-to-pets">foods toxic to pets</Link> chart
          and tape it inside a kitchen cabinet. When trying new treats,
          introduce one at a time over three days and watch stools — even
          safe foods upset sensitive stomachs in large debuts.
        </p>

        <h2>How do you switch foods without stomach upset?</h2>
        <p>
          Transition over seven to ten days, longer for sensitive stomachs.
          Days one to two mix 25 percent new with 75 percent old, days three
          to four go fifty-fifty, days five to six reach 75 percent new, and
          day seven completes the swap if stools stay firm. Slow down and
          hold a ratio two extra days if stools soften. Puppies, seniors, and
          dogs with chronic conditions deserve ten-to-fourteen-day ramps plus
          a vet heads-up. Keep plain canned pumpkin and the vet&apos;s phone
          number handy during swaps, and postpone transitions around
          boarding, <Link href="/traveling-with-pets-guide">travel</Link>, or
          vaccine appointments so you can isolate the cause of any upset. If
          vomiting, bloody stool, or appetite loss beyond 24 hours appears,
          stop and call the vet rather than pushing through. Food changes are
          marathons, and patience protects the gut microbiome your dog spent
          months building.
        </p>

        <h2>How do you handle food allergies and sensitive stomachs?</h2>
        <p>
          True food allergies affect a minority of dogs but cause outsized
          worry, so diagnose systematically. Suspect allergy when year-round
          itching concentrates on ears, paws, and rear, or when chronic soft
          stools persist despite parasite clearance and quality diets. The
          gold standard is an eight-to-twelve-week elimination trial with a
          novel or hydrolyzed protein prescribed by your vet — not random
          boutique rotation, which diagnoses nothing. Every treat, flavored
          medication, and table scrap must comply during the trial or the
          clock restarts. Sensitive stomachs without allergy need simpler
          care: consistent recipes, slow seven-day transitions, pre-measured
          meals instead of grazing, and plain pumpkin or vet-directed bland
          diets during flare-ups. Log foods, stools, and itch scores daily
          during trials; patterns reveal triggers that memory misses. Most
          suspected allergies resolve as flea allergy, environmental
          triggers, or overfeeding richness — all fixable once identified.
          Work the process with your vet rather than the pet aisle, and the
          right bowl emerges from data instead of marketing.
        </p>

        <h2>How do you read the feeding chart across brands?</h2>
        <p>
          Cups lie and calories tell the truth. A dense performance kibble
          can pack 450 kcal per cup while an airy budget recipe holds 300,
          so identical cup portions differ by a full meal daily. Convert any
          brand to calories: find kcal per cup on the label, multiply toward
          your dog&apos;s target from the portion table, and split into two
          meals. Transition brands by calories held constant while recipes
          swap underneath over seven to ten days. Weigh monthly and adjust
          in ten-percent steps toward visible waist and feelable ribs. Post
          a feeding card with product, kcal per cup, daily cups, and treat
          allowance so every family member and sitter serves identically.
          Calorie thinking unifies kibble, wet, fresh, and prescription diets
          into one arithmetic your dog&apos;s body condition already speaks.
        </p>

        <VetNote>
          This dog nutrition guide shares general education, not veterinary
          advice. Dogs with kidney, liver, allergy, or weight disorders need
          prescription diets chosen by their veterinarian. Learn more in our{" "}
          <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <OfficialBox
          gov={{ href: "https://www.fda.gov/animal-veterinary", label: "FDA Center for Veterinary Medicine", desc: "federal pet-food safety and labeling information" }}
          authority={{ href: "https://www.avma.org/resources-tools/pet-owners", label: "AVMA pet-owner resources", desc: "veterinarian-reviewed canine nutrition guidance" }}
        />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: AAFCO official publication; WSAVA global nutrition
          guidelines; Cornell veterinary nutrition resources. Outbound
          references:{" "}
          <a href="https://www.aafco.org/consumers/understanding-pet-food">
            AAFCO pet-food basics
          </a>{" "}
          and{" "}
          <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/">
            WSAVA nutrition guidelines
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/cat-nutrition-guide">Cat Nutrition Guide</Link> — food types, portions, and kitten-to-senior transitions.
            </li>
            <li>
              <Link className="underline" href="/foods-toxic-to-pets">Foods Toxic to Pets</Link> — 20 dangerous foods chart every owner should know.
            </li>
            <li>
              <Link className="underline" href="/vet-costs-guide">Vet Costs Guide</Link> — exam, vaccine, and surgery price ranges plus saving tips.
            </li>
            <li>
              <Link className="underline" href="/senior-dog-care">Senior Dog Care</Link> — mobility, diet, and vet cadence for aging dogs.
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
