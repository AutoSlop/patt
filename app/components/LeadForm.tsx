"use client";

import { useState } from "react";
import { track } from "../lib/track";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [nombre, setNombre] = useState("");
  const [clinica, setClinica] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    track("form_submit_lead", { nombre, clinica, whatsapp, ciudad, email });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/[0.12] backdrop-blur-md rounded-2xl p-7 sm:p-9 border border-white/[0.08] text-center shadow-xl shadow-black/10">
        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">¡Listo!</h3>
        <p className="text-white/75 text-sm leading-relaxed">
          Te contactaremos pronto por WhatsApp para agendar tu demo personalizada.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/[0.08] backdrop-blur-md rounded-2xl p-7 sm:p-9 border border-white/[0.08] space-y-4 shadow-xl shadow-black/10"
    >
      <h3 className="text-xl font-bold text-white mb-1">Solicita tu demo gratis</h3>
      <p className="text-white/60 text-sm mb-4">Te contactamos por WhatsApp en menos de 24 horas.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 focus:bg-white/[0.1] outline-none transition-all text-sm"
        />
        <input
          type="text"
          required
          value={clinica}
          onChange={(e) => setClinica(e.target.value)}
          placeholder="Nombre de tu clínica"
          className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 focus:bg-white/[0.1] outline-none transition-all text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp (con código de país)"
          className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 focus:bg-white/[0.1] outline-none transition-all text-sm"
        />
        <input
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Ciudad / País (opcional)"
          className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 focus:bg-white/[0.1] outline-none transition-all text-sm"
        />
      </div>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email (opcional)"
        className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent/40 focus:border-accent/40 focus:bg-white/[0.1] outline-none transition-all text-sm"
      />

      <button
        type="submit"
        className="w-full bg-accent hover:bg-amber-400 text-gray-900 font-bold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 cursor-pointer hover:-translate-y-0.5"
      >
        Solicitar demo gratis
      </button>
    </form>
  );
}
