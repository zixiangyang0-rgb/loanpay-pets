# LoanPay Pets 🐾

Friendly dog & cat guides for everyday families — adoption, training, nutrition, health, safety, and costs. Part of the LoanPayLogic network at **pets.loanpaylogic.com**.

## Stack

Next 15 + React 19 + Tailwind 4, TypeScript strict. Zero new dependencies beyond the shared template versions. No external fonts or images; only the AdSense library script.

## Develop

```bash
npm install --no-audit --no-fund
npm run dev
npx tsc --noEmit
npm run build
```

## Content

- 25 content guides (dogs, cats, health & safety, costs) with FAQPage JSON-LD matching visible FAQs
- 5 legal pages: about, contact, privacy-policy, terms, disclaimer
- `app/sitemap.ts` lists 31 URLs; `public/robots.txt` references the sitemap; `public/ads.txt` holds the publisher ID

## Notes

- Health pages are general education, not veterinary advice, and link `/disclaimer`.
- Not committed — leave uncommitted per task instructions.
