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
        className={`rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 ${
          highlighted
            ? "bg-gradient-to-br from-[#0a7a5e] to-[#0F9D7A] text-white ring-2 ring-primary/20 shadow-xl shadow-primary/15 sm:scale-[1.02]"
            : "bg-white text-text border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.03)] hover:border-gray-200/60"
        }`}
      >
        {highlighted && (
          <span className="bg-accent text-text text-xs font-bold px-3.5 py-1 rounded-full self-start mb-4">
            Más popular
          </span>
        )}
        <h3 className="text-lg font-bold">{name}</h3>
        <p className={`text-[0.8125rem] mt-1 ${highlighted ? "text-white/70" : "text-gray-400"}`}>
          {description}
        </p>
        <div className="mt-5 mb-7">
          <span className="text-3xl font-extrabold tracking-tight">{price}</span>
          <span className={`text-sm ml-1 ${highlighted ? "text-white/50" : "text-gray-400"}`}>
            /mes
          </span>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <svg
                className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${highlighted ? "text-accent" : "text-primary"}`}
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
          className={`w-full py-3 rounded-xl font-bold transition-all cursor-pointer hover:-translate-y-0.5 text-sm ${
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
