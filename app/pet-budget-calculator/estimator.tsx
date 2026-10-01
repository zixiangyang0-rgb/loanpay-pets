"use client";

import { useMemo, useState } from "react";

const DOG_FOOD: Record<string, number> = { small: 35, medium: 55, large: 75 };
const CAT_FOOD = 30;

export default function Estimator() {
  const [pet, setPet] = useState<"dog" | "cat">("dog");
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [insurance, setInsurance] = useState(45);
  const [grooming, setGrooming] = useState(30);
  const [extras, setExtras] = useState(25);

  const rows = useMemo(() => {
    const food = pet === "dog" ? DOG_FOOD[size] : CAT_FOOD;
    const litter = pet === "cat" ? 20 : 0;
    const vet = 45;
    const prevention = 25;
    const total = food + litter + vet + prevention + insurance + grooming + extras;
    return [
      { label: pet === "dog" ? `Food (${size})` : "Food + treats", value: food },
      ...(litter ? [{ label: "Litter", value: litter }] : []),
      { label: "Vet fund (1/12 yearly)", value: vet },
      { label: "Flea/tick + heartworm", value: prevention },
      { label: "Pet insurance", value: insurance },
      { label: "Grooming average", value: grooming },
      { label: "Toys, treats, extras", value: extras },
      { label: "Estimated monthly total", value: total, total: true },
    ];
  }, [pet, size, insurance, grooming, extras]);

  return (
    <div
      className="mt-6 px-5 py-6"
      style={{
        background: "#fff",
        border: "2px solid #f0dfc8",
        borderRadius: "2rem",
        boxShadow: "0 10px 0 rgba(61,51,48,.06)",
      }}
    >
      <h2 className="!mt-0">🧮 Try the estimator</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold">
          Pet type
          <select
            value={pet}
            onChange={(e) => setPet(e.target.value as "dog" | "cat")}
            className="mt-1 block w-full rounded-2xl border-2 border-[#f0dfc8] bg-[#fffaf0] px-3 py-2"
          >
            <option value="dog">Dog 🐶</option>
            <option value="cat">Cat 🐱</option>
          </select>
        </label>
        <label className="text-sm font-bold">
          Dog size
          <select
            value={size}
            disabled={pet === "cat"}
            onChange={(e) => setSize(e.target.value as "small" | "medium" | "large")}
            className="mt-1 block w-full rounded-2xl border-2 border-[#f0dfc8] bg-[#fffaf0] px-3 py-2 disabled:opacity-50"
          >
            <option value="small">Small (under 25 lb)</option>
            <option value="medium">Medium (25–60 lb)</option>
            <option value="large">Large (60+ lb)</option>
          </select>
        </label>
        <label className="text-sm font-bold">
          Insurance $/mo: {insurance}
          <input
            type="range"
            min={0}
            max={110}
            value={insurance}
            onChange={(e) => setInsurance(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
        <label className="text-sm font-bold">
          Grooming $/mo: {grooming}
          <input
            type="range"
            min={0}
            max={120}
            value={grooming}
            onChange={(e) => setGrooming(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
        <label className="text-sm font-bold md:col-span-2">
          Toys, treats & extras $/mo: {extras}
          <input
            type="range"
            min={0}
            max={100}
            value={extras}
            onChange={(e) => setExtras(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
      </div>
      <table className="!mb-0">
        <thead>
          <tr>
            <th>Line</th>
            <th>$/month</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td>
                <strong>{r.label}</strong>
              </td>
              <td>
                <strong>${r.value}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-[#6f5f59]">
        Yearly estimate:{" "}
        <strong>
          ${(rows[rows.length - 1].value * 12).toLocaleString()}
        </strong>{" "}
        plus a $1,000 starter emergency fund. Tune every line to your quotes.
      </p>
    </div>
  );
}
