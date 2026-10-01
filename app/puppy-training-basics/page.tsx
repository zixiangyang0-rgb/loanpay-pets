import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, VetNote, FaqSection } from "../lib";

export const metadata: Metadata = {
  title: "Puppy Training Basics: Sit, Stay, Come & Leash",
  description:
    "Puppy training basics: sit, stay, come, leash manners & housetraining timelines. Raise a polite pup step by step — start training today!",
  alternates: {
    canonical: "https://pets.loanpaylogic.com/puppy-training-basics",
  },
  openGraph: {
    title: "Puppy Training Basics: Sit, Stay, Come & Leash",
    description:
      "Puppy training basics: sit, stay, come, leash manners & housetraining timelines. Raise a polite pup step by step — start training today!",
    url: "https://pets.loanpaylogic.com/puppy-training-basics",
    type: "article",
    siteName: "LoanPay Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puppy Training Basics: Sit, Stay, Come & Leash",
    description:
      "Puppy training basics: sit, stay, come, leash manners & housetraining timelines. Raise a polite pup step by step — start training today!",
  },
};

const FAQS = [
  {
    q: "When should I start training my puppy?",
    a: "Start the day your puppy comes home, usually around eight weeks old. Early training means short name-recognition games, gentle handling, crate introductions, and rewarding calm behavior, not formal hour-long sessions. Puppies learn fastest between eight and sixteen weeks, so use that window for socialization outings and foundation cues. Enroll in a force-free puppy class after the first vet visit, and keep home sessions to three to five minutes several times daily.",
  },
  {
    q: "How long does it take to housetrain a puppy?",
    a: "Most puppies grasp housetraining basics within four to eight weeks of consistent scheduling, with full reliability by six to twelve months. Small breeds and winter puppies often take longer because tiny bladders and cold weather complicate outdoor trips. Take the puppy out after waking, eating, drinking, and playing, reward outdoor success within three seconds, and supervise indoors or use the crate between outings. Punishing accidents slows learning; interrupting calmly and cleaning with enzymatic cleaner works far better.",
  },
  {
    q: "What are the first commands to teach a puppy?",
    a: "Teach name recognition first, then sit, down, come, stay, leave it, and loose-leash walking in that order. Name and recall are safety skills every puppy needs before off-leash freedom. Sit and down build impulse control for greetings and vet visits. Leave it prevents swallowed trash and dangerous food. Practice each cue in quiet rooms first, then add distance, duration, and distractions one at a time.",
  },
  {
    q: "How do I stop my puppy from biting and chewing?",
    a: "Puppy biting is normal exploration that fades with consistent redirection. Yelp-free strategy: the instant teeth touch skin, freeze, withdraw attention for five seconds, then offer a chew toy and praise gentle mouthing. Provide frozen carrots, rubber stuffable toys, and safe chews on rotation so the puppy always has a legal outlet. Enforce naps every one to two hours because overtired puppies bite hardest. If biting breaks skin regularly past sixteen weeks, ask your vet or a certified trainer for help.",
  },
  {
    q: "Should I use a crate for puppy training?",
    a: "Yes, a properly introduced crate speeds housetraining, prevents destructive chewing, and gives puppies the eighteen to twenty hours of daily sleep they need. Size it so the puppy can stand, turn, and lie flat, feed meals inside, and build duration gradually from seconds to hours. Never use the crate as punishment. Our crate training guide walks through first-night whining, daytime schedules, and troubleshooting step by step.",
  },
];

export default function Page() {
  return (
    <article className="bubble-card px-6 py-8 md:px-10">
      <div className="flex flex-wrap gap-2">
        <span className="bubble-chip chip-teal">🐶 Dogs</span>
        <span className="bubble-chip chip-honey">🎓 Training</span>
      </div>
      <h1 className="font-plump mt-4 text-3xl md:text-4xl">
        Puppy Training Basics: Your First 90 Days
      </h1>
      <p className="mt-2 text-sm font-bold text-[#6f5f59]">
        Updated: October 2026 · Sources: AAHA, AVSAB · 13-minute read
      </p>
      <div className="article-body">
        <p>
          These <strong>puppy training basics</strong> give you a week-by-week
          plan for the first 90 days: housetraining schedules, crate routines,
          the six foundation cues, socialization checklists, and biting
          solutions that actually work. A new puppy is a fuzzy chaos goblin
          with a brain growing faster than any other life stage, and the
          training you do between eight and sixteen weeks shapes adult
          behavior more than anything that follows. The good news is that
          modern reward-based training is simple, fun, and fast when you keep
          sessions short and consistent. This guide explains exactly what to
          teach first, how many repetitions to expect, when to add
          distractions, and which mistakes set puppies back. Follow it alongside
          your vet&apos;s health schedule and you will raise a confident,
          polite dog instead of a furry delinquent.
        </p>

        <h2>How should you set up training for success?</h2>
        <p>
          Training succeeds on management before it succeeds on cues. Set up a
          small puppy zone with a crate, playpen, water, and chew toys so the
          puppy practices good habits by default instead of rehearsing
          mistakes across the whole house. Stock pea-sized soft treats, a
          treat pouch, a six-foot leash, a front-clip harness, and an
          enzymatic cleaner before day one. Every family member must use the
          same cue words and the same rules: if jumping earns lap time from
          one person, no amount of training from another will fix it. Write
          the rules on the fridge — couch yes or no, feeding times, potty
          door, crate location — and review them together. Schedule three to
          five mini-sessions daily of three to five minutes each, always
          ending while the puppy still wants more. Train before meals when
          motivation peaks, in boring rooms before parks, and after a potty
          break so a full bladder never sabotages focus. This boring
          preparation is what makes everything below feel easy.
        </p>

        <h2>What is the fastest way to housetrain a puppy?</h2>
        <p>
          Housetraining is a scheduling game, not an obedience mystery.
          Puppies under twelve weeks need outdoor trips every one to two
          hours plus immediately after waking, eating, drinking, playing, and
          chewing. Carry or leash-walk the puppy to the same boring potty
          spot, stand quietly, and the instant elimination finishes, deliver
          three tiny treats in a row with happy praise. That three-second
          reward timing is the entire secret. Indoors, supervise with eyes on
          or use the crate and pen, because every unsupervised accident
          teaches the puppy that carpets work fine. Interrupt mid-squat
          accidents with a calm clap, carry outside, and clean indoor spots
          with enzymatic cleaner so no scent invites repeats. Overnight, set
          one alarm for small puppies rather than waiting for crying, and
          stretch the interval by thirty minutes every few dry nights. Most
          puppies connect the pattern within two to four weeks and earn
          reliability by six months. Our{" "}
          <Link href="/crate-training-guide">crate training guide</Link>{" "}
          pairs perfectly here, since crate naps structure the whole schedule.
        </p>
        <table>
          <thead>
            <tr>
              <th>Puppy age</th>
              <th>Max bladder hold</th>
              <th>Daytime trip frequency</th>
              <th>Night plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8–10 weeks</td>
              <td>About 1–2 hours</td>
              <td>Every 60–90 minutes</td>
              <td>1–2 alarms nightly</td>
            </tr>
            <tr>
              <td>10–12 weeks</td>
              <td>About 2–3 hours</td>
              <td>Every 2 hours</td>
              <td>1 alarm nightly</td>
            </tr>
            <tr>
              <td>3–4 months</td>
              <td>About 3–4 hours</td>
              <td>Every 2–3 hours</td>
              <td>Often sleeps through</td>
            </tr>
            <tr>
              <td>4–6 months</td>
              <td>About 4–5 hours</td>
              <td>Every 3–4 hours</td>
              <td>Sleeps through</td>
            </tr>
          </tbody>
        </table>

        <h2>Which six cues should every puppy learn first?</h2>
        <p>
          Teach in this order: name, sit, recall, down, stay, and leave it.
          Name recognition comes first — say the name once, mark and reward
          eye contact, and repeat ten times daily until the head whips around
          happily. Sit follows naturally: hold a treat at the nose, arc it
          over the head, and reward the instant the rear touches floor. Recall
          is a safety skill, so practice indoors with two people trading
          happy call-and-reward games before ever trying it outside. Down
          builds settle behavior for cafés and vet exams; lure from sit by
          dragging the treat down and forward along the floor. Stay starts as
          a three-second sit-stay with one step back, growing one second and
          one step at a time. Leave it protects against chicken bones and{" "}
          <Link href="/foods-toxic-to-pets">toxic foods</Link>: cover a treat
          with your hand, reward the puppy for backing off with a better
          treat from the other hand, then generalize to dropped items. Train
          each cue to eighty percent reliability in the living room before
          adding the three Ds — distance, duration, distraction — one at a
          time. Fifty short wins beat one long frustrated drill every time.
        </p>

        <h2>How do you socialize a puppy safely before vaccines finish?</h2>
        <p>
          Socialization means calm positive exposure to the world, not
          wrestling strange dogs at the park. Between eight and sixteen weeks,
          puppies form lifelong opinions about noises, surfaces, people, and
          animals, so your job is one hundred gentle first impressions. Carry
          your puppy through farmers markets, sit outside playgrounds at a
          distance, and reward calm watching of bikes, hats, umbrellas, and
          wheelchairs. Invite vaccinated adult dogs you trust for short
          play-and-rest sessions rather than chaotic dog-park free-for-alls.
          Follow your vet&apos;s local disease-risk advice from the{" "}
          <Link href="/pet-vaccination-schedule">vaccination schedule</Link>,
          which usually allows carried outings and clean puppy classes before
          the series completes. Pair every novelty with treats: thunder sounds
          at low volume plus chicken, nail clippers plus peanut butter, the
          vacuum at a distance plus play. Watch for stress signals — lip
          licking, yawning, tucked tail — and increase distance rather than
          flooding. A puppy that meets the world at its own pace becomes the
          bomb-proof adult everyone admires.
        </p>

        <h2>How do you stop biting, chewing, and jumping?</h2>
        <p>
          All three problems share one cure: reward the behavior you want
          instead of punishing the one you hate. For biting, freeze when teeth
          touch skin, withdraw play for five seconds, then redirect to a toy
          and praise gentle mouthing; enforce crate naps every one to two
          hours because exhausted puppies bite like tiny sharks. For chewing,
          rotate six to eight legal chews, smear stuffable toys with wet food
          and freeze them, and manage access so shoes live in closets while
          the puppy learns. Taste-deterrent sprays help at furniture edges,
          but management plus appropriate outlets do the real work. For
          jumping, turn boring the instant paws leave the floor — fold arms,
          look away — then explode with praise the second all four feet land.
          Practice doorbell setups with a helper: bell rings, puppy sits for
          treats, guest enters only while sitting continues. Add daily mental
          work through snuffle mats and short training games, because a tired
          brain chews less furniture. If growling over toys or food appears,
          trade up with better treats instead of grabbing, and ask a certified
          force-free trainer early. And when{" "}
          <Link href="/separation-anxiety-dogs">separation whining</Link>{" "}
          starts, build alone-time gradually with stuffed toys rather than
          dramatic exits.
        </p>
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Instant response</th>
              <th>Prevention setup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biting hands</td>
              <td>Freeze 5 seconds, redirect to toy</td>
              <td>Naps every 1–2 hours, toy rotation</td>
            </tr>
            <tr>
              <td>Chewing furniture</td>
              <td>Trade for chew, praise swap</td>
              <td>Frozen stuffed toys, closed closets</td>
            </tr>
            <tr>
              <td>Jumping on guests</td>
              <td>Turn away, reward four-on-floor</td>
              <td>Leashed greetings, sit practice</td>
            </tr>
            <tr>
              <td>Pulling on leash</td>
              <td>Stop, reward slack, change direction</td>
              <td>Front-clip harness, short sniff walks</td>
            </tr>
          </tbody>
        </table>

        <h2>What does a good first-90-days training schedule look like?</h2>
        <p>
          Weeks one and two are for names, crates, potty spots, and handling:
          touch ears, paws, and belly daily with treats so future grooming
          and <Link href="/pet-dental-care-guide">dental care</Link> feel
          normal. Weeks three through six add sit, down, recall games, and
          leash pressure introduction in quiet streets. Weeks seven through
          twelve layer stay duration, leave it with real-world trash, polite
          greetings, and car-ride practice for future{" "}
          <Link href="/traveling-with-pets-guide">travel with pets</Link>.
          Enroll in a puppy class around week three for coached socialization
          and homework accountability. Log progress weekly: recall success
          rate, longest stay, loose-leash minutes. Expect regression during
          teething at sixteen to twenty weeks and adolescence at six to nine
          months — both are normal brain remodels, not training failures.
          Return to shorter sessions and higher-value rewards, and the skills
          come back stronger. Pair training milestones with health milestones
          from the <Link href="/dog-adoption-checklist">dog adoption checklist</Link>,
          and celebrate graduation with a new adventure walk. Consistency for
          ninety days buys you a decade of easy companionship.
        </p>

        <h2>How do adolescents keep training from unraveling?</h2>
        <p>
          Six-to-eighteen-month adolescence tests every foundation with
          selective hearing, boundary pushing, and fear periods that make
          brave puppies spook at trash cans. Expect it, do not mourn it:
          the brain is remodeling toward adulthood and previously solid cues
          need rebuilding under distraction. Return to shorter sessions,
          higher-value rewards, and easier environments temporarily, then
          re-proof systematically. Maintain the exercise-plus-training rhythm
          from our <Link href="/crate-training-guide">crate routine</Link>{" "}
          since under-exercised teenagers invent their own entertainment.
          Enroll in a Level 2 class for coached distraction work and
          continue socialization with calm adult dogs. Second fear periods
          need patience, not flooding — let the dog observe from distance
          with treats. Most owners who survive adolescence with humor and
          consistency report the same miracle around age two: the wild child
          naps through dinner parties. Regression is a season, not a verdict.
        </p>

        <VetNote>
          This puppy training guide shares general education, not veterinary
          or behavioral-medicine advice. If your puppy shows panic, aggression,
          or sudden behavior changes, consult your veterinarian and a
          certified professional promptly. Learn more in our{" "}
          <a href="/disclaimer">pet-health disclaimer</a>.
        </VetNote>

        <FaqSection faqs={FAQS} />

        <p className="mt-8 text-sm text-[#6f5f59]">
          Sources: American Veterinary Society of Animal Behavior position
          statements; AAHA canine behavior guidelines; Cornell veterinary
          behavior resources. Outbound references:{" "}
          <a href="https://avsab.org/resources/position-statements/">
            AVSAB position statements
          </a>{" "}
          and{" "}
          <a href="https://www.aaha.org/resources/pet-owner/">
            AAHA pet-owner resources
          </a>
          . Related on LoanPay Pets: <Link href="/">home hub</Link> ·{" "}
          <Link href="/dog-adoption-checklist">dog adoption checklist</Link> ·{" "}
          <Link href="/crate-training-guide">crate training guide</Link> ·{" "}
          <Link href="/separation-anxiety-dogs">separation anxiety</Link>.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
    </article>
  );
}
