"use client";

import { useState } from "react";

interface PaymentModalProps {
  plan: string;
  price: string;
  onClose: () => void;
}

export default function PaymentModal({ plan, price, onClose }: PaymentModalProps) {
  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => setStep("success"), 2000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 text-xl leading-none transition-colors"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {step === "form" && (
          <>
            <div className="mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">Plan {plan}</p>
              <p className="text-3xl font-extrabold text-text mt-1">{price}<span className="text-base font-medium text-gray-400">/mes</span></p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nombre en la tarjeta
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="María García"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Vencimiento
                  </label>
                  <input
                    type="text"
                    required
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value.replace(/[^\d/]/g, "").slice(0, 5))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="MM/AA"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    CVC
                  </label>
                  <input
                    type="text"
                    required
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="123"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-colors cursor-pointer shadow-sm mt-2"
              >
                Pagar {price}/mes
              </button>
              <p className="text-xs text-center text-gray-400 mt-2">
                Pago seguro. Puedes cancelar cuando quieras.
              </p>
            </form>
          </>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-lg font-semibold text-gray-700">Procesando pago...</p>
            <p className="text-sm text-gray-500 mt-1">No cierres esta ventana</p>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">¡Pago confirmado!</h3>
            <p className="text-gray-600 mb-1">Tu plan <strong>{plan}</strong> está activo.</p>
            <p className="text-sm text-gray-500 mb-6">
              Recibirás un correo con los próximos pasos para configurar PATT en tu veterinaria.
            </p>
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
