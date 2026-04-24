"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, getSession } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (getSession()) router.replace("/admin");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    // Small delay for UX
    setTimeout(() => {
      const err = login(email, password);
      setLoading(false);
      if (err) {
        setError(err);
      } else {
        router.push("/admin");
      }
    }, 600);
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

      {/* Login card + side panel */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Left: Benefits panel */}
          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-[#062b22] via-[#085c47] to-[#0F9D7A] text-white p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-[80px]" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="20" cy="12" r="7" />
                  <circle cx="44" cy="12" r="7" />
                  <circle cx="10" cy="28" r="6" />
                  <circle cx="54" cy="28" r="6" />
                  <ellipse cx="32" cy="42" rx="16" ry="18" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold leading-tight mb-3">
                Gestiona tu veterinaria desde un solo lugar
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Accede al panel de administración para controlar citas, pacientes, pagos y conversaciones de WhatsApp.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Agenda y recordatorios automáticos por WhatsApp", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                  { text: "Historia clínica digital de todos tus pacientes", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { text: "Cobra cirugías con cuotas y factura electrónicamente", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
                  { text: "Dashboard de ingresos y métricas en tiempo real", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80 leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["CM", "AR", "VH"].map((initials) => (
                      <div key={initials} className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center border-2 border-[#085c47] text-[0.6rem] font-bold text-white/80">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/50">+200 veterinarias activas en Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Login form */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="20" cy="12" r="7" />
                  <circle cx="44" cy="12" r="7" />
                  <circle cx="10" cy="28" r="6" />
                  <circle cx="54" cy="28" r="6" />
                  <ellipse cx="32" cy="42" rx="16" ry="18" />
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900">Panel de administración</h1>
              <p className="text-gray-500 text-sm mt-2">Ingresa con tu cuenta de administrador</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tuvet.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <a href="/recuperar-acceso" className="text-xs text-primary hover:text-primary-dark transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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
                    Ingresando...
                  </span>
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <p className="text-sm text-gray-500">
                ¿No tienes cuenta?{" "}
                <a href="/registro" className="text-primary hover:text-primary-dark font-semibold transition-colors">
                  Registra tu clínica
                </a>
              </p>
              <a href="/" className="inline-block text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                &larr; Volver al inicio
              </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              Acceso exclusivo para administradores de clínicas registradas en PATT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
