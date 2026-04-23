"use client";

import { useState } from "react";
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
        className={`rounded-2xl p-8 flex flex-col ${
          highlighted
            ? "bg-primary text-white ring-4 ring-primary/20 scale-[1.02]"
            : "bg-white text-gray-900 border border-gray-100"
        }`}
      >
        {highlighted && (
          <span className="bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
            Más popular
          </span>
        )}
        <h3 className="text-xl font-bold">{name}</h3>
        <p className={`text-sm mt-1 ${highlighted ? "text-white/80" : "text-gray-500"}`}>
          {description}
        </p>
        <div className="mt-4 mb-6">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className={`text-sm ${highlighted ? "text-white/70" : "text-gray-500"}`}>
            /mes
          </span>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
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
          onClick={() => setShowModal(true)}
          className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
            highlighted
              ? "bg-white text-primary hover:bg-gray-100"
              : "bg-primary text-white hover:bg-primary-dark"
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
