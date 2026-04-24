"use client";

import { useState } from "react";

export default function RecuperarAccesoPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Ingresa tu correo electrónico.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <div className="py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="20" cy="12" r="7" />
                <circle cx="44" cy="12" r="7" />
                <circle cx="10" cy="28" r="6" />
                <circle cx="54" cy="28" r="6" />
                <ellipse cx="32" cy="42" rx="16" ry="18" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">PATT</span>
          </a>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
          {sent ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Revisa tu correo</h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Si existe una cuenta asociada a <strong className="text-gray-700">{email}</strong>, recibirás instrucciones para restablecer tu contraseña.
              </p>
              <p className="text-xs text-gray-400 mb-6">
                Esta funcionalidad estará completamente conectada al backend próximamente.
              </p>
              <div className="space-y-3">
                <a
                  href="/login"
                  className="block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm text-center"
                >
                  Volver al inicio de sesión
                </a>
                <button
                  onClick={() => { setSent(false); setEmail(""); }}
                  className="w-full text-sm text-primary hover:text-primary-dark transition-colors font-medium py-2"
                >
                  Intentar con otro correo
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-extrabold text-gray-900">Recuperar acceso</h1>
                <p className="text-gray-500 text-sm mt-2">
                  Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="recovery-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    id="recovery-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@tuvet.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar instrucciones"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center space-y-3">
                <a href="/login" className="inline-block text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                  &larr; Volver al inicio de sesión
                </a>
              </div>

              <div className="mt-6 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-xs text-amber-700 text-center">
                  La recuperación de contraseña estará conectada al backend próximamente. Por ahora, puedes registrarte nuevamente o contactar soporte.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
