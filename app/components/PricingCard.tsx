"use client";

import { useState } from "react";
import { track } from "../lib/track";
import PaymentModal from "./PaymentModal";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`rounded-2xl p-8 sm:p-9 flex flex-col transition-all duration-300 ${
          highlighted
            ? "bg-gradient-to-br from-primary to-[#0B7A5E] text-white ring-4 ring-primary/20 shadow-2xl shadow-primary/20 scale-[1.03]"
            : "bg-white text-gray-900 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_32px_rgba(0,0,0,0.04)] hover:border-gray-200/80"
        }`}
      >
        {highlighted && (
          <span className="bg-accent text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full self-start mb-5 shadow-sm">
            Más popular
          </span>
        )}
        <h3 className="text-xl font-bold">{name}</h3>
        <p className={`text-sm mt-1.5 ${highlighted ? "text-white/75" : "text-gray-500"}`}>
          {description}
        </p>
        <div className="mt-6 mb-8">
          <span className="text-4xl font-extrabold tracking-tight">{price}</span>
          <span className={`text-sm ml-1 ${highlighted ? "text-white/60" : "text-gray-400"}`}>
            /mes
          </span>
        </div>
        <ul className="space-y-3.5 mb-9 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <svg
                className={`w-5 h-5 shrink-0 mt-0.5 ${highlighted ? "text-accent" : "text-primary"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => { track("start_payment", { plan: name, price }); setShowModal(true); }}
          className={`w-full py-3.5 rounded-xl font-bold transition-all cursor-pointer hover:-translate-y-0.5 ${
            highlighted
              ? "bg-white text-primary hover:bg-gray-50 shadow-md hover:shadow-lg"
              : "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md"
          }`}
        >
          Empieza ahora
        </button>
      </div>
      {showModal && (
        <PaymentModal plan={name} price={price} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
