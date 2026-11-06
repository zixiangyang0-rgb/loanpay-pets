import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection, OfficialBox } from "../lib";

export const metadata: Metadata = {
  title: "Foods Toxic to Pets: 20 Dangerous Foods Chart",
  description:
    "Foods toxic to pets: chocolate, grapes, xylitol & 17 more with symptoms. Protect your dog and cat today — see the danger chart now!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/foods-toxic-to-pets",
  },
  openGraph: {
    title: "Foods Toxic to Pets: 20 Dangerous Foods Chart",
    description:
      "Foods toxic to pets: chocolate, grapes, xylitol & 17 more with symptoms. Protect your dog and cat today — see the danger chart now!",
    url: "https://pets.loanpaylogic.com/foods-toxic-to-pets",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foods Toxic to Pets: 20 Dangerous Foods Chart",
    description:
      "Foods toxic to pets: chocolate, grapes, xylitol & 17 more with symptoms. Protect your dog and cat today — see the danger chart now!",
  },
};

const FAQS = [
  {
    q: "What foods are most poisonous to dogs and cats?",
    a: "The most dangerous everyday foods are chocolate, cocoa, xylitol-sweetened products, grapes and raisins, onions and garlic in all forms, macadamia nuts, alcohol, and raw bread dough. Xylitol causes rapid liver failure in dogs from tiny amounts in sugar-free gum and peanut butter. Grapes can trigger sudden kidney failure unpredictably. Keep all of these sealed above counter height and teach every family member the list.",
  },
  {
    q: "Can dogs eat grapes or raisins?",
    a: "No, never feed grapes, raisins, currants, or foods containing them. Even small amounts have caused sudden kidney failure in some dogs while others seem unaffected, and sensitivity cannot be predicted. Vomiting, lethargy, and appetite loss within hours warrant immediate veterinary care. Keep lunchboxes, trail mix, and fruit bowls out of dog reach entirely.",
  },
  {
    q: "What should I do if my pet eats chocolate?",
    a: "Note the type and amount of chocolate, your pet's weight, and the time eaten, then call your veterinarian immediately for case-specific guidance. Dark and baking chocolate carry far more theobromine than milk chocolate, and small dogs face higher risk per ounce. Do not attempt home treatments unless a veterinary professional explicitly directs you. Bring packaging to the clinic and follow their plan promptly.",
  },
  {
    q: "Is xylitol really that dangerous for dogs?",
    a: "Yes, xylitol is among the most acutely dangerous common ingredients for dogs, triggering massive insulin release, crashing blood sugar, and potentially fatal liver failure from small amounts. It hides in sugar-free gum, mints, some peanut butters, baked goods, and chewable medications under names like birch sugar. Check every label before sharing human foods. Suspected ingestion is an immediate emergency clinic visit.",
  },
  {
    q: "What human foods are safe for pets as treats?",
    a: "Plain cooked chicken and turkey, carrots, green beans, apple slices without seeds, blueberries, watermelon without seeds, plain pumpkin, and xylitol-free peanut butter make safe occasional treats under ten percent of daily calories. Introduce one new food at a time and watch stools. Cats need meat-based treats and tolerate dairy poorly. When uncertain about any food, skip it and ask your vet first.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-coral">🚨 Emergencies</span>
        <span className="bubble-chip chip-honey">☠️ Toxic Foods</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Foods Toxic to Pets: The Danger Chart
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: ASPCA APCC, FDA · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>foods toxic to pets</strong> guide lists the everyday
          human foods that poison dogs and cats, the general signs each one
          causes, and exactly what to do when ingestion happens. Kitchens are
          minefields of good intentions: a well-meaning child shares grapes,
          a guest drops sugar-free gum, holiday stuffing hides onions. Dogs
          explore with their mouths and cats bat at interesting objects, so
          prevention beats treatment every time. This article shares general
          knowledge only — no diagnoses, no home-treatment dosing — and
          directs you to veterinary professionals for every real case. Print
          the danger chart for the fridge, teach the whole household, and
          pet-proof the kitchen once using the checklist below. Your
          vigilance is the only barrier between a curious nose and a
          midnight emergency drive.
        </p>

        <h2>Which foods are most dangerous for dogs and cats?</h2>
        <p>
          Eight culprits cause the majority of food-poisoning calls. Xylitol
          (birch sugar) in sugar-free gum, candy, and some peanut butters
          triggers catastrophic blood-sugar crashes and liver failure in dogs
          from tiny amounts. Chocolate and cocoa deliver theobromine, with
          baking chocolate far deadlier per ounce than milk varieties.
          Grapes, raisins, and currants can precipitate sudden kidney failure
          unpredictably. Onions, garlic, leeks, and chives damage red blood
          cells in all forms — raw, cooked, powdered — with cats especially
          sensitive. Macadamia nuts cause weakness and tremors in dogs.
          Alcohol, raw yeasted dough, and high-fat gorge meals round out the
          chart with poisoning, bloat, and pancreatitis risks. Medications,
          lilies for cats, and essential oils deserve equal caution but sit
          outside this food-focused chart; ask your vet about the full home
          audit.
        </p>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Who is at risk</th>
              <th>General signs reported</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Xylitol / birch sugar</td>
              <td>Dogs (extreme risk)</td>
              <td>Weakness, collapse, vomiting — emergency</td>
            </tr>
            <tr>
              <td>Chocolate, cocoa</td>
              <td>Dogs, cats</td>
              <td>Restlessness, vomiting, rapid heart — dose matters</td>
            </tr>
            <tr>
              <td>Grapes, raisins, currants</td>
              <td>Dogs</td>
              <td>Vomiting, lethargy, appetite loss — emergency</td>
            </tr>
            <tr>
              <td>Onion, garlic, leeks</td>
              <td>Dogs, cats (cats very sensitive)</td>
              <td>Pale gums, weakness over days</td>
            </tr>
            <tr>
              <td>Macadamia nuts</td>
              <td>Dogs</td>
              <td>Weakness, tremors, vomiting</td>
            </tr>
            <tr>
              <td>Alcohol</td>
              <td>Dogs, cats</td>
              <td>Wobbliness, collapse — emergency</td>
            </tr>
            <tr>
              <td>Raw bread dough</td>
              <td>Dogs, cats</td>
              <td>Bloating, pain — emergency</td>
            </tr>
            <tr>
              <td>Cooked bones</td>
              <td>Dogs, cats</td>
              <td>Choking, blockage risk — emergency if signs</td>
            </tr>
          </tbody>
        </table>

        <h2>What symptoms suggest food poisoning in pets?</h2>
        <p>
          General early signs include sudden vomiting, diarrhea, drooling,
          appetite loss, lethargy, wobbliness, and abdominal pain. Later or
          severe patterns involve tremors, seizures, pale or yellow gums,
          collapse, excessive thirst with little urine, and breathing
          changes. Timing varies: xylitol and chocolate signs can appear
          within an hour or two, grape-related kidney changes over a day or
          more, onion damage over several days. Never use symptom-matching to
          diagnose or to decide waiting is safe — identical vomiting comes
          from trivial to fatal causes. Instead, treat any known ingestion
          of a listed food plus any sudden severe sign as a call-your-vet
          trigger. Note what was eaten, the estimated amount, the time, and
          your pet&apos;s weight before calling, since those four facts shape
          every triage decision. Our{" "}
          <Link href="/common-pet-emergencies">emergencies guide</Link>{" "}
          covers the broader red-flag list and ER transport steps.
        </p>

        <h2>What should you do when your pet eats something toxic?</h2>
        <p>
          Follow the same safe sequence every time. First, secure the scene:
          remove remaining food, keep packaging, and move the pet somewhere
          calm and observable. Second, call your veterinarian or an animal
          poison helpline immediately with the food name, amount, time, and
          pet weight ready. Third, follow their instructions exactly — they
          may direct monitoring, an immediate clinic visit, or specific
          clinic-administered care. Critically, do not induce vomiting, give
          oils, milk, or human medicines, or try internet antidotes unless a
          veterinary professional explicitly directs it, because wrong home
          measures worsen burns, aspiration, and bleeding risks. Fourth,
          transport promptly with packaging and notes if directed. Fifth,
          debrief the household afterward: how did access happen, and what
          barrier — locked pantry, lidded trash, kid training — closes it
          permanently. Fast professional contact, not home heroics, saves
          pets.
        </p>

        <h2>How do you pet-proof the kitchen for good?</h2>
        <p>
          Engineer access away rather than relying on training alone. Store
          all eight chart foods in sealed containers above counter height or
          behind latched doors, since dogs surf counters and cats open
          low cabinets. Use step-lid trash cans inside latched cabinets for
          onion scraps, grape stems, and gum wrappers. Teach children the
          never-share list with the fridge chart, and brief every guest at
          holidays when chocolate boxes, stuffing, and cocktails multiply.
          Read peanut-butter and baked-good labels for xylitol or birch
          sugar before buying. Keep the vet clinic number and a poison
          helpline on the fridge beside the chart. Pair kitchen safety with
          nutrition from our <Link href="/dog-nutrition-guide">dog</Link>{" "}
          and <Link href="/cat-nutrition-guide">cat nutrition</Link> guides
          so safe treats satisfy the begging eyes honestly. A one-hour
          audit now prevents a lifetime of what-if midnight drives.
        </p>
        <table>
          <thead>
            <tr>
              <th>Holiday risk</th>
              <th>Hidden danger</th>
              <th>Safe swap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gift chocolate boxes</td>
              <td>Theobromine; dark is deadliest</td>
              <td>Pet treats in a separate room</td>
            </tr>
            <tr>
              <td>Stuffing + gravy</td>
              <td>Onion and garlic powder</td>
              <td>Plain cooked turkey bites</td>
            </tr>
            <tr>
              <td>Fruitcake + trail mix</td>
              <td>Raisins and currants</td>
              <td>Apple slices, blueberries</td>
            </tr>
            <tr>
              <td>Sugar-free candy</td>
              <td>Xylitol / birch sugar</td>
              <td>Xylitol-free pet chews</td>
            </tr>
          </tbody>
        </table>

        <h2>Which human foods can pets enjoy safely?</h2>
        <p>
          Safe sharing exists and delights everyone when bounded. Plain
          cooked chicken, turkey, carrots, green beans, peas, apple slices
          without seeds, blueberries, watermelon without seeds, plain
          pumpkin, and xylitol-free peanut butter suit most dogs in small
          treat portions. Cats enjoy tiny meat morsels and some freeze-dried
          proteins, while tolerating dairy poorly despite the storybook milk
          image. Hold all extras under ten percent of daily calories, add
          one new food at a time, and watch stools for two days. Puppies in{" "}
          <Link href="/puppy-training-basics">training</Link> earn pea-sized
          versions of these as rewards. When any doubt exists — new cuisine,
          seasoned leftovers, mixed dishes — skip the share and ask your vet
          first. Generosity with safe foods plus discipline with dangerous
          ones is the whole philosophy.
        </p>

        <h2>Which household non-foods threaten pets most?</h2>
        <p>
          Kitchens get the attention, but bathrooms, gardens, and handbags
          poison pets nearly as often. Human medications top the real-world
          call lists: ibuprofen and acetaminophen damage stomachs, kidneys,
          and livers at small doses, ADHD stimulants and antidepressants
          cause dangerous agitation and heart rates, and even pet-labeled
          chewables overdose when entire bottles are eaten. Lilies kill cats
          through kidney failure from tiny exposures — pollen on fur,
          vase water sips — so lily-free homes are the only safe homes for
          cat families. Sago palm seeds, azaleas, and tulip bulbs threaten
          dogs outdoors, while cocoa mulch combines landscaping with
          theobromine. Essential oils, liquid potpourri, and many cleaning
          concentrates burn mouths and injure livers, especially in cats
          that groom residues from paws. Rodenticides and snail baits kill
          with delayed bleeding and seizures days after tasting. Audit room
          by room: lock medicines in high cabinets, choose pet-safe plants
          before buying bouquets, store oils sealed away, and ask your vet
          about the regional garden list. Food charts save kitchens; whole-
          home audits save everything else.
        </p>

        <h2>How do you teach kids and guests the safety rules?</h2>
        <p>
          Most poisonings involve a well-meaning human, so train the people
          as carefully as the pets. Teach children three absolutes: never
          share food without asking, never feed the pet from lunchboxes or
          purses, and tell an adult immediately about dropped gum or
          chocolate. Post the danger chart at kid eye level on the fridge
          with the vet number beside it. Brief every guest and babysitter at
          arrival during holidays: purses on high shelves, plates never left
          on coffee tables, and no treat-giving without permission. Dog
          training helps enormously — a solid leave-it and go-to-mat from
          our <Link href="/puppy-training-basics">puppy guide</Link> convert
          dropped hazards into ignored ones. For cats, manage the
          environment since training has limits: closed lunchboxes, latched
          cabinets, and trash inside latched doors. Celebrate compliance
          with safe treat rituals kids can own, like carrot time for the dog
          or wand-play rewards for the cat. A household that knows the rules
          protects pets better than any emergency clinic.
        </p>

        <h2>Which seasonal hazards spike each year?</h2>
        <p>
          Calendars predict poisonings. Spring brings fertilizer, cocoa mulch,
          and Easter lilies lethal to cats. Summer adds barbecue onions,
          corn cobs that block intestines, and antifreeze puddles with sweet
          deadly taste. Fall delivers mouse poisons, wild mushrooms on hikes,
          and Halloween chocolate stashes at nose height. Winter centers on
          holiday stuffing, xylitol candies, rich fatty feasts triggering
          pancreatitis, and ice-melt salts burning paws that cats then groom.
          Mark each season&apos;s risks on the family calendar beside the
          fridge chart, refresh supplies like locked trash cans before
          holidays, and brief visitors every time. Seasonal awareness turns
          predictable spikes into uneventful months.
        </p>

        <VetNote>
          This toxic-foods guide shares general knowledge only and never
          diagnoses or prescribes treatment. Contact your veterinarian
          immediately for any known or suspected ingestion. Learn more in our{" "}
          <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <OfficialBox
          gov={{ href: "https://www.fda.gov/animal-veterinary", label: "FDA Center for Veterinary Medicine", desc: "federal pet-food safety and contamination alerts" }}
          authority={{ href: "https://www.aaha.org/resources/pet-owner/", label: "AAHA pet-owner resources", desc: "accredited-hospital nutrition guidance" }}
        />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: ASPCA Animal Poison Control Center; FDA pet-food safety
          resources. Outbound references:{" "}
          <a href="https://www.aspca.org/pet-care/animal-poison-control">
            ASPCA Poison Control
          </a>{" "}
          and{" "}
          <a href="https://www.avma.org/resources-tools/pet-owners">
            AVMA pet-owner resources
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/common-pet-emergencies">Common Pet Emergencies</Link> — warning signs and when to rush to the ER.
            </li>
            <li>
              <Link className="underline" href="/dog-nutrition-guide">Dog Nutrition Guide</Link> — food types, portions, and puppy-to-adult transitions.
            </li>
            <li>
              <Link className="underline" href="/cat-nutrition-guide">Cat Nutrition Guide</Link> — food types, portions, and kitten-to-senior transitions.
            </li>
            <li>
              <Link className="underline" href="/vet-costs-guide">Vet Costs Guide</Link> — exam, vaccine, and surgery price ranges plus saving tips.
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
