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
        className={`rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 ${
          highlighted
            ? "bg-gradient-to-br from-[#0a7a5e] to-[#0F9D7A] text-white ring-1 ring-primary/15 shadow-lg shadow-primary/12 sm:scale-[1.02]"
            : "bg-white text-text border border-gray-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] hover:border-gray-200/60"
        }`}
      >
        {highlighted && (
          <span className="bg-accent text-text text-[0.6875rem] font-bold px-3 py-0.5 rounded-full self-start mb-3">
            Más popular
          </span>
        )}
        <h3 className="text-base font-bold">{name}</h3>
        <p className={`text-[0.75rem] mt-1 ${highlighted ? "text-white/65" : "text-gray-400"}`}>
          {description}
        </p>
        <div className="mt-4 mb-6">
          <span className="text-[1.75rem] font-extrabold tracking-tight">{price}</span>
          <span className={`text-[0.8125rem] ml-1 ${highlighted ? "text-white/50" : "text-gray-400"}`}>
            /mes
          </span>
        </div>
        <ul className="space-y-2.5 mb-7 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-[0.8125rem]">
              <svg
                className={`w-4 h-4 shrink-0 mt-0.5 ${highlighted ? "text-accent" : "text-primary"}`}
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
          onClick={() => { track("start_checkout", { plan: name, price }); setShowModal(true); }}
          className={`w-full py-2.5 rounded-xl font-bold transition-all cursor-pointer hover:-translate-y-0.5 text-[0.8125rem] ${
            highlighted
              ? "bg-white text-primary hover:bg-gray-50 shadow-sm hover:shadow-md"
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
