"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 1200);
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

      {/* Login card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Contraseña
                </label>
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
                  "Ingresar"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="/" className="text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                &larr; Volver al inicio
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Acceso exclusivo para administradores de clínicas registradas en PATT.
          </p>
        </div>
      </div>
    </div>
  );
}
