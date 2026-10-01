import type { MetadataRoute } from "next";

const BASE = "https://pets.loanpaylogic.com";

const SLUGS = [
  "/dog-adoption-checklist",
  "/cat-adoption-checklist",
  "/puppy-training-basics",
  "/litter-box-guide",
  "/dog-nutrition-guide",
  "/cat-nutrition-guide",
  "/pet-insurance-guide",
  "/vet-costs-guide",
  "/pet-vaccination-schedule",
  "/spay-neuter-guide",
  "/microchip-pets-guide",
  "/traveling-with-pets-guide",
  "/moving-with-pets-guide",
  "/pet-grooming-basics",
  "/pet-dental-care-guide",
  "/flea-tick-prevention-guide",
  "/common-pet-emergencies",
  "/foods-toxic-to-pets",
  "/senior-dog-care",
  "/senior-cat-care",
  "/crate-training-guide",
  "/separation-anxiety-dogs",
  "/best-dog-breeds-apartments",
  "/indoor-cat-enrichment",
  "/pet-budget-calculator",
];

const LEGAL = ["/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-01");
  const urls = ["", ...SLUGS, ...LEGAL].map((p) => ({
    url: `${BASE}${p === "" ? "" : p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : p.startsWith("/pet-budget") ? 0.9 : 0.8,
  }));
  return urls;
}
