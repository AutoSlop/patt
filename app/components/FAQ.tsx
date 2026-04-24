"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. PATT se conecta a tu número actual de WhatsApp Business a través de la API oficial de Meta. Tus clientes siguen escribiendo al mismo número de siempre.",
  },
  {
    q: "¿Cómo funciona la financiación de procedimientos?",
    a: "PATT integra una pasarela de pagos que permite dividir el costo de cirugías y tratamientos en cuotas. El dueño de la mascota recibe un enlace de pago directo en WhatsApp. Tú recibes el monto completo por adelantado.",
  },
  {
    q: "¿Puedo migrar la historia clínica que ya tengo?",
    a: "Sí. Nuestro equipo te ayuda a migrar tus datos desde Excel, Google Sheets o cualquier software veterinario anterior. El proceso toma entre 2 y 5 días dependiendo del volumen de registros.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "La configuración básica queda lista en 48 horas. Incluye la conexión de WhatsApp, configuración de agenda, y entrenamiento del equipo. La migración de historia clínica puede tomar unos días adicionales.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen?",
    a: "Todos los planes incluyen soporte por WhatsApp de lunes a sábado de 8am a 6pm (hora Colombia). Los planes Pro y Enterprise incluyen además un gerente de cuenta dedicado y soporte prioritario.",
  },
  {
    q: "¿Puedo probar antes de pagar?",
    a: "¡Claro! Ofrecemos 14 días de prueba gratis sin necesidad de tarjeta de crédito. Puedes explorar todas las funcionalidades del plan Pro y decidir si PATT es para tu clínica.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:border-gray-200/80">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
          >
            <span className="font-semibold text-text pr-4 text-[0.9375rem]">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="faq-answer px-6 pb-5 text-gray-400 leading-relaxed text-sm">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
