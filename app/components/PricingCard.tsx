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
            ? "bg-gradient-to-br from-[#0a7a5e] to-[#0F9D7A] text-white ring-1 ring-primary/20 shadow-xl shadow-primary/15 sm:scale-[1.03]"
            : "bg-white text-text border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-gray-200"
        }`}
      >
        {highlighted && (
          <span className="bg-accent text-text text-[0.6875rem] font-bold px-3.5 py-1 rounded-full self-start mb-4 shadow-sm">
            Más popular
          </span>
        )}
        <h3 className="text-[1.0625rem] font-bold">{name}</h3>
        <p className={`text-[0.8125rem] mt-1.5 ${highlighted ? "text-white/60" : "text-gray-400"}`}>
          {description}
        </p>
        <div className="mt-5 mb-7">
          <span className="text-[2rem] font-extrabold tracking-tight">{price}</span>
          <span className={`text-[0.8125rem] ml-1 ${highlighted ? "text-white/45" : "text-gray-400"}`}>
            /mes
          </span>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[0.8125rem] sm:text-[0.875rem]">
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
          className={`w-full py-3 rounded-xl font-bold transition-all cursor-pointer hover:-translate-y-0.5 text-[0.875rem] ${
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
