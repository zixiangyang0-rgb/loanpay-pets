import type { Metadata } from "next";
import Link from "next/link";
import Estimator from "./estimator";
import { faqJsonLd, FaqSection, OfficialBox } from "../lib";

export const metadata: Metadata = {
  title: "Pet Budget Calculator: Monthly & Yearly Costs",
  description:
    "Pet budget calculator: estimate monthly dog & cat costs with food, vet, insurance & grooming. Plan pet spending smartly — try it free now!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/pet-budget-calculator",
  },
  openGraph: {
    title: "Pet Budget Calculator: Monthly & Yearly Costs",
    description:
      "Pet budget calculator: estimate monthly dog & cat costs with food, vet, insurance & grooming. Plan pet spending smartly — try it free now!",
    url: "https://pets.loanpaylogic.com/pet-budget-calculator",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Budget Calculator: Monthly & Yearly Costs",
    description:
      "Pet budget calculator: estimate monthly dog & cat costs with food, vet, insurance & grooming. Plan pet spending smartly — try it free now!",
  },
};

const FAQS = [
  {
    q: "How much does a dog cost per month?",
    a: "Most pet dogs cost $100 to $250 monthly covering food, prevention, a vet-care sinking fund, insurance, grooming, and treats. Small dogs cluster near $100 to $150, medium dogs $140 to $200, and large dogs $180 to $280 before daycare or walkers. First months run higher with setup supplies and starter vet visits. Use the estimator above with your quotes for a personal number.",
  },
  {
    q: "How much does a cat cost per month?",
    a: "Most indoor cats cost $70 to $150 monthly covering food, litter, prevention, a vet sinking fund, and treats. Wet-food-heavy diets and insurance push toward the top of the range, while dry-supplemented routines sit lower. First months add supplies and starter vet visits of $250 to $600. Senior cats need larger vet funds for twice-yearly screening and dental care.",
  },
  {
    q: "What is the 50/30/20 rule for pet budgeting?",
    a: "Adapt the classic budget by treating pet essentials as needs: roughly 50 percent of pet spending covers food, prevention, and insurance, 30 percent covers vet savings and grooming wants, and 20 percent builds the emergency fund until it reaches $1,000 to $2,000. Automate transfers to a dedicated pet account on payday. Review quarterly against actual vet receipts and adjust the sinking fund first.",
  },
  {
    q: "How large should my pet emergency fund be?",
    a: "Start with $1,000 before adoption day, build toward one month of income or $2,000 to $5,000 for multi-pet homes, and keep it in a separate high-yield savings account. Emergency exams plus imaging commonly reach $800 to $1,500 before treatment, and surgery deposits start around $2,000. Insurance complements the fund rather than replacing it because reimbursement lags the vet bill. Refill the fund immediately after any withdrawal.",
  },
  {
    q: "Is pet insurance or saving better for my budget?",
    a: "Insurance smooths catastrophe risk into predictable premiums while savings smooth routine costs, so most budgets benefit from both: a mid-tier insurance plan plus a $1,000 cash buffer. Self-insuring alone works only with iron discipline and large reserves. Compare expected breed risks, your shock absorption, and premium quotes in our pet insurance guide. Whichever you choose, automate the monthly amount before lifestyle spending touches it.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">💰 Costs</span>
        <span className="bubble-chip chip-honey">🧮 Calculator</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Pet Budget Calculator: Plan Every Dollar
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AVMA, APPA · 13-minute read
      </p>
      <div className="article-body">
        <p>
          This <strong>pet budget calculator</strong> page helps you price
          dog and cat ownership honestly: interactive monthly estimates,
          first-year setup tables, emergency-fund targets, and saving
          tactics that keep vet bills from becoming credit-card debt. Pets
          are priceless emotionally and very priced financially — the
          American Pet Products Association pegs routine first-year dog
          costs well above $1,500 before surprises. The families who thrive
          are not the richest but the most planned: they automate a monthly
          pet transfer, maintain a dedicated emergency fund, and know their
          numbers before adoption day. Use the interactive estimator below,
          compare the species tables, set your fund target, and walk into
          pet parenthood with a budget that purrs.
        </p>

        <Estimator />

        <h2>What does the first year really cost?</h2>
        <p>
          First years cluster one-time and recurring costs together, which
          is why they shock unprepared owners. Adoption fees, crates,
          carriers, beds, bowls, leashes, litter boxes, and starter toys
          total $200 to $450. Spay-neuter, microchipping, and vaccine
          series add $200 to $500 even with low-cost options from our{" "}
          <Link href="/vet-costs-guide">vet costs guide</Link>. Food,
          litter, and prevention run every month from day one. Training
          classes or a behavior consult add $150 to $350 well spent. The
          table below maps realistic first-year totals by household type so
          you can save the lump sum before pickup day rather than financing
          it after. Divide the total by twelve for your true monthly cost,
          then add 15 percent buffer for the surprises statistics promise.
        </p>
        <table>
          <thead>
            <tr>
              <th>Household</th>
              <th>Setup + first vet</th>
              <th>Yearly recurring</th>
              <th>Realistic year-one total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single adult cat</td>
              <td>$350 – $700</td>
              <td>$800 – $1,400</td>
              <td>$1,150 – $2,100</td>
            </tr>
            <tr>
              <td>Single small dog</td>
              <td>$450 – $900</td>
              <td>$1,200 – $2,000</td>
              <td>$1,650 – $2,900</td>
            </tr>
            <tr>
              <td>Single large dog</td>
              <td>$550 – $1,100</td>
              <td>$1,600 – $2,800</td>
              <td>$2,150 – $3,900</td>
            </tr>
            <tr>
              <td>Two cats</td>
              <td>$500 – $950</td>
              <td>$1,400 – $2,400</td>
              <td>$1,900 – $3,350</td>
            </tr>
          </tbody>
        </table>

        <h2>How should monthly pet spending break down?</h2>
        <p>
          Structure beats willpower. Route a fixed pet transfer to a
          dedicated account on payday covering food, litter, prevention,
          insurance premiums, and a vet sinking fund of $40 to $60 monthly
          for routine care plus emergency-fund building. Grooming joins the
          transfer as a smoothed average: a $90 quarterly groom equals $30
          monthly. Our <Link href="/dog-nutrition-guide">dog</Link> and{" "}
          <Link href="/cat-nutrition-guide">cat nutrition</Link> guides set
          food budgets by weight, the{" "}
          <Link href="/pet-insurance-guide">insurance guide</Link> prices
          premiums, and the <Link href="/pet-grooming-basics">grooming</Link>{" "}
          schedule sets coat-care rhythm. Track with any budgeting app using
          a dedicated pet category, and reconcile against vet receipts
          quarterly. Households that automate the transfer before lifestyle
          spending rarely face painful vet-room arithmetic — the money is
          simply already there.
        </p>

        <h2>How big an emergency fund do you need?</h2>
        <p>
          Emergencies price in thousands, so funds must match. Foreign-body
          surgery runs $2,000 to $5,000, cruciate repair $3,500 to $6,000,
          and urinary blockage $1,500 to $3,500 — all documented in the{" "}
          <Link href="/vet-costs-guide">costs guide</Link> and{" "}
          <Link href="/common-pet-emergencies">emergencies guide</Link>.
          Start with $1,000 saved before adoption, grow to $2,000 for single
          pets and $3,000 to $5,000 for multi-pet or large-breed homes, and
          hold it in a separate high-yield account you never borrow against.
          Insurance reimburses 70 to 90 percent after deductibles but pays
          days after you pay the clinic, so the fund bridges the gap both
          ways. Rebuild immediately after withdrawals with temporarily
          doubled transfers. Owners with funded accounts approve urgent care
          in minutes; owners without them negotiate while pets wait. Fund
          first, everything else second.
        </p>
        <table>
          <thead>
            <tr>
              <th>Fund milestone</th>
              <th>Target</th>
              <th>Covers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter (pre-adoption)</td>
              <td>$1,000</td>
              <td>ER exam + imaging + deposit start</td>
            </tr>
            <tr>
              <td>Single-pet solid</td>
              <td>$2,000</td>
              <td>Most single emergencies with insurance</td>
            </tr>
            <tr>
              <td>Multi-pet / large breed</td>
              <td>$3,000 – $5,000</td>
              <td>Surgery-scale events</td>
            </tr>
            <tr>
              <td>Self-insured alternative</td>
              <td>$8,000+</td>
              <td>Only for disciplined large reserves</td>
            </tr>
          </tbody>
        </table>

        <h2>How can you cut pet costs without cutting care?</h2>
        <p>
          Optimize in this order: prevent expensive disease with vaccines,
          prevention, weight control, and dental care; buy food by
          cost-per-day using label feeding charts rather than bag price;
          use low-cost clinics for routine shots and spay-neuter while
          keeping a full-service vet for diagnosis; ask for generics and
          written estimates; groom at home between professional sessions;
          and rotate toy and treat stock seasonally instead of impulse
          buying. Never economize by skipping boosters, splitting parasite
          doses, delaying limps and lumps, or feeding unbalanced homemade
          diets — each false saving returns multiplied. Annual insurance
          re-shopping, wellness-plan math for puppy and senior years, and
          bulk litter and food buys complete the toolkit. Frugality funds
          the emergency account; cheapness empties it with interest.
        </p>

        <h2>What is your personal pet budget action plan?</h2>
        <p>
          Finish with four moves this week. First, run the estimator above
          with real local quotes and write down your monthly number.
          Second, open the dedicated pet savings account and automate the
          transfer for the next payday. Third, price insurance in the{" "}
          <Link href="/pet-insurance-guide">insurance guide</Link> and
          decide before the first vet visit writes pre-existing history.
          Fourth, schedule the spending audit date three months out to
          compare actuals against estimates using receipts. New adopters
          should start from the{" "}
          <Link href="/dog-adoption-checklist">dog</Link> or{" "}
          <Link href="/cat-adoption-checklist">cat checklist</Link> for
          setup lists, and planners eyeing the future should read{" "}
          <Link href="/senior-dog-care">senior dog</Link> and{" "}
          <Link href="/senior-cat-care">senior cat</Link> costs before they
          arrive. Budgeted love is the steadiest love — your future self,
          facing a midnight estimate with funds ready, will thank you.
        </p>

        <h2>How do multi-pet households budget without chaos?</h2>
        <p>
          Second pets rarely double costs — expect roughly 60 to 80 percent
          more rather than 100, since supplies, knowledge, and vet
          relationships scale. Run the estimator separately for each animal
          because a large dog plus a senior cat share almost no line items:
          food sizes, prevention doses, grooming rhythms, and vet funds all
          differ. Consolidate where safe: shared toy boxes, bulk litter and
          food buys, synchronized vaccine visits saving exam fees, and
          multi-pet insurance discounts some carriers offer. Never share
          medications or parasite doses between pets — weight-specific
          products make this dangerous, as our{" "}
          <Link href="/flea-tick-prevention-guide">prevention guide</Link>{" "}
          warns. Stagger major elective costs like dental cleanings across
          quarters so one month never carries two anesthesias. Grow the
          emergency fund toward $3,000 to $5,000 since two pets double the
          chance of overlapping crises. Track per-pet spending quarterly;
          averages hide the senior&apos;s rising labs behind the
          youngster&apos;s cheap routine. Multi-pet budgeting rewards the
          same habits that single-pet budgeting does — automation,
          separation of funds, and honest numbers — just run twice with
          shared wisdom.
        </p>

        <h2>What does a sample monthly budget look like in practice?</h2>
        <p>
          Concrete numbers beat abstractions, so walk through two realistic
          households. Household A — one indoor adult cat on mixed wet-dry
          feeding: food $35, litter $20, prevention $20, vet sinking fund
          $40, insurance $28, treats and toys $15, for a $158 monthly total
          or about $1,900 yearly plus the starter fund. Household B — one
          medium adult dog: food $60, prevention $28, vet sinking fund $50,
          insurance $48, grooming average $30, treats and toys $25, for a
          $241 monthly total or about $2,900 yearly. Neither includes
          walkers, daycare, or boarding, which add $200 to $600 monthly where
          used. Compare your estimator result against these anchors: within
          20 percent means your inputs are realistic, while large gaps
          signal a missed line or an optimistic quote. Revisit the numbers
          after three months of receipts and adjust the sinking fund first —
          food brands change slowly, but vet reality arrives fast.
        </p>

        <h2>When should you revisit and raise the pet budget?</h2>
        <p>
          Budgets age as pets do, so schedule reviews on birthdays and
          adoption anniversaries. Puppies graduating to adult food, seniors
          adding twice-yearly labs, and new diagnoses all shift the monthly
          number — update the estimator inputs and re-automate transfers the
          same week. City moves raise vet and walker prices; compare new
          quotes in the <Link href="/vet-costs-guide">costs guide</Link>
          before signing leases. Raise the emergency fund target after any
          withdrawal until whole again, and celebrate funded years by
          directing surplus toward dental cleanings or training classes that
          prevent future bills. A budget reviewed yearly stays a tool; one
          set and forgotten becomes fiction.
        </p>

        <h2>How do you handle surprise bills without debt?</h2>
        <p>
          Surprises are certainties with fur, so build shock absorbers before
          they hit. Keep the emergency fund in a separate high-yield account
          with no debit card attached, and define the refill rule now: double
          transfers until whole again. For bills beyond the fund, ask the
          clinic about payment plans, compare CareCredit-style terms against
          the <Link href="/vet-costs-guide">costs guide</Link> ranges, and
          call your insurer the same day to start reimbursement. Never delay
          urgent care to shop — stabilize first, optimize second. Owners with
          written money rules approve treatment in minutes while others
          negotiate; preparation is the real insurance.
        </p>

        <FaqSection faqs={FAQS} />

        <OfficialBox
          gov={{ href: "https://www.aphis.usda.gov", label: "USDA APHIS", desc: "federal pet-travel and animal-welfare rules" }}
          authority={{ href: "https://www.aaha.org/resources/pet-owner/", label: "AAHA pet-owner resources", desc: "accredited-hospital ownership guidance" }}
        />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: American Veterinary Medical Association ownership data;
          American Pet Products Association survey data. Outbound references:{" "}
          <a href="https://www.avma.org/resources-tools/pet-owners">
            AVMA pet-owner resources
          </a>{" "}
          and{" "}
          <a href="https://www.aspca.org/pet-care">
            ASPCA pet-care library
          </a>.
        </p>

        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-[#f0d9c8] bg-[#fff8f1] p-5">
          <p className="font-plump text-sm">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4c423d]">
            <li>
              <Link className="underline" href="/pet-insurance-guide">Pet Insurance Guide</Link> — costs, coverage types, and when to enroll.
            </li>
            <li>
              <Link className="underline" href="/vet-costs-guide">Vet Costs Guide</Link> — exam, vaccine, and surgery price ranges plus saving tips.
            </li>
            <li>
              <Link className="underline" href="/dog-adoption-checklist">Dog Adoption Checklist</Link> — 25 steps for supplies, vet visits, and the first week.
            </li>
            <li>
              <Link className="underline" href="/how-much-does-pet-insurance-cost-by-breed">Pet Insurance Cost by Breed</Link> — 2026 breed-level premium comparisons.
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
