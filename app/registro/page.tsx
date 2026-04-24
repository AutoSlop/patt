"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { register, getSession } from "../lib/auth";

export default function RegistroPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    clinicName: "",
    city: "",
    country: "Colombia",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (getSession()) router.replace("/admin");
  }, [router]);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.clinicName || !form.email || !form.password || !form.confirmPassword) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }
    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const err = register({
        name: form.name,
        clinicName: form.clinicName,
        city: form.city,
        country: form.country,
        email: form.email,
        password: form.password,
      });
      setLoading(false);
      if (err) {
        setError(err);
      } else {
        router.push("/admin");
      }
    }, 800);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

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

      {/* Registration card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Left: Info panel */}
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
                Registra tu clínica en PATT
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                En menos de 2 minutos tendrás acceso completo al panel de administración para gestionar tu veterinaria por WhatsApp.
              </p>
              <ul className="space-y-4">
                {[
                  "Configuración guiada paso a paso",
                  "14 días de prueba gratis incluidos",
                  "Sin tarjeta de crédito requerida",
                  "Soporte dedicado desde el día uno",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40">
                  +200 veterinarias en Colombia ya usan PATT para ordenar sus citas y cobros por WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-extrabold text-gray-900">Crea tu cuenta</h1>
              <p className="text-gray-500 text-sm mt-2">Registra tu clínica y comienza a usar PATT</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nombre completo *
                </label>
                <input id="name" type="text" value={form.name} onChange={set("name")} placeholder="Dr. Juan Pérez" className={inputClass} />
              </div>

              <div>
                <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nombre de la clínica *
                </label>
                <input id="clinicName" type="text" value={form.clinicName} onChange={set("clinicName")} placeholder="Clínica Veterinaria Mi Mascota" className={inputClass} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ciudad
                  </label>
                  <input id="city" type="text" value={form.city} onChange={set("city")} placeholder="Bogotá" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
                    País
                  </label>
                  <select id="country" value={form.country} onChange={set("country")} className={inputClass}>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Perú">Perú</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo electrónico *
                </label>
                <input id="reg-email" type="email" value={form.email} onChange={set("email")} placeholder="admin@tuvet.com" className={inputClass} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Contraseña *
                  </label>
                  <input id="reg-password" type="password" value={form.password} onChange={set("password")} placeholder="Mín. 6 caracteres" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Confirmar *
                  </label>
                  <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={set("confirmPassword")} placeholder="Repetir contraseña" className={inputClass} />
                </div>
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
                    Creando cuenta...
                  </span>
                ) : (
                  "Registrar mi clínica"
                )}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <p className="text-sm text-gray-500">
                ¿Ya tienes cuenta?{" "}
                <a href="/login" className="text-primary hover:text-primary-dark font-semibold transition-colors">
                  Inicia sesión
                </a>
              </p>
              <a href="/" className="inline-block text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                &larr; Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
