"use client";

import { useState } from "react";

const navItems = [
  {
    id: "resumen",
    label: "Resumen",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
    ),
  },
  {
    id: "citas",
    label: "Citas",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    id: "pacientes",
    label: "Pacientes",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    id: "recordatorios",
    label: "Recordatorios",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    ),
  },
  {
    id: "pagos",
    label: "Pagos",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    ),
  },
];

const statCards = [
  { label: "Citas hoy", value: "12", change: "+3 vs. ayer", color: "bg-primary/10 text-primary" },
  { label: "Pacientes activos", value: "348", change: "+18 este mes", color: "bg-blue-50 text-blue-600" },
  { label: "Ingresos del mes", value: "$4.2M", change: "+12% vs. anterior", color: "bg-amber-50 text-amber-600" },
  { label: "Citas perdidas", value: "3", change: "-62% con PATT", color: "bg-red-50 text-red-500" },
];

const todayAppointments = [
  { time: "9:00 a.m.", pet: "Max", owner: "Carlos Pérez", service: "Consulta general", status: "Confirmada" },
  { time: "10:30 a.m.", pet: "Luna", owner: "María García", service: "Vacunación", status: "Confirmada" },
  { time: "11:00 a.m.", pet: "Rocky", owner: "Ana Rodríguez", service: "Peluquería", status: "Pendiente" },
  { time: "2:00 p.m.", pet: "Milo", owner: "Juan López", service: "Control post-cirugía", status: "Confirmada" },
  { time: "3:30 p.m.", pet: "Coco", owner: "Laura Martínez", service: "Consulta general", status: "Pendiente" },
];

const recentPatients = [
  { name: "Max", species: "Perro", breed: "Golden Retriever", owner: "Carlos Pérez", lastVisit: "22 abr 2026" },
  { name: "Luna", species: "Gato", breed: "Siamés", owner: "María García", lastVisit: "20 abr 2026" },
  { name: "Rocky", species: "Perro", breed: "Bulldog Francés", owner: "Ana Rodríguez", lastVisit: "18 abr 2026" },
  { name: "Milo", species: "Perro", breed: "Poodle", owner: "Juan López", lastVisit: "15 abr 2026" },
];

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("resumen");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-100">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="20" cy="12" r="7" />
                <circle cx="44" cy="12" r="7" />
                <circle cx="10" cy="28" r="6" />
                <circle cx="54" cy="28" r="6" />
                <ellipse cx="32" cy="42" rx="16" ry="18" />
              </svg>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-gray-900">PATT</span>
          </a>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {item.icon}
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="px-3 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xs">CM</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Clínica VetAmigo</p>
              <p className="text-xs text-gray-500 truncate">admin@vetamigo.com</p>
            </div>
          </div>
          <a
            href="/login"
            className="mt-2 w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-red-500 rounded-xl hover:bg-red-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar sesión
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 -ml-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-gray-900 capitalize">
              {navItems.find((n) => n.id === activeSection)?.label ?? "Resumen"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm text-gray-500">Hoy: 23 abr 2026</span>
            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xs">CM</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* Resumen */}
          {activeSection === "resumen" && (
            <div className="space-y-6">
              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                  <div key={card.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.color.split(" ")[0]}`}>
                      <span className={`text-lg font-extrabold ${card.color.split(" ")[1]}`}>#</span>
                    </div>
                    <p className="text-2xl font-extrabold text-gray-900">{card.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{card.label}</p>
                    <p className="text-xs text-primary font-medium mt-2">{card.change}</p>
                  </div>
                ))}
              </div>

              {/* Today's appointments */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-bold text-gray-900">Citas de hoy</h2>
                  <span className="text-xs text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                    {todayAppointments.length} citas
                  </span>
                </div>
                <div className="divide-y divide-gray-50">
                  {todayAppointments.map((apt, i) => (
                    <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-500 w-20 shrink-0">{apt.time}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{apt.pet} <span className="font-normal text-gray-500">— {apt.owner}</span></p>
                        <p className="text-xs text-gray-400">{apt.service}</p>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                        apt.status === "Confirmada"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent patients */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900">Pacientes recientes</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentPatients.map((p, i) => (
                    <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-xs">{p.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{p.name} <span className="font-normal text-gray-400">({p.species} — {p.breed})</span></p>
                        <p className="text-xs text-gray-400">Dueño: {p.owner}</p>
                      </div>
                      <span className="hidden sm:inline text-xs text-gray-400 shrink-0">{p.lastVisit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Citas */}
          {activeSection === "citas" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Gestión de citas</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Aquí podrás ver, crear y gestionar todas las citas de tu clínica. Las citas agendadas por WhatsApp aparecerán automáticamente.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-6">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-sm">Próximas citas</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {todayAppointments.map((apt, i) => (
                    <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-500 w-20 shrink-0">{apt.time}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{apt.pet} <span className="font-normal text-gray-500">— {apt.owner}</span></p>
                        <p className="text-xs text-gray-400">{apt.service}</p>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                        apt.status === "Confirmada"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pacientes */}
          {activeSection === "pacientes" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Directorio de pacientes</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Administra los pacientes de tu clínica, consulta historiales clínicos y datos de contacto de los dueños.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-6">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm">Pacientes registrados</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentPatients.map((p, i) => (
                    <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-xs">{p.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-semibold text-gray-900">{p.name} <span className="font-normal text-gray-400">({p.species} — {p.breed})</span></p>
                        <p className="text-xs text-gray-400">Dueño: {p.owner} &middot; Última visita: {p.lastVisit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recordatorios */}
          {activeSection === "recordatorios" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Recordatorios automáticos</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                PATT envía recordatorios automáticos por WhatsApp 24 horas y 1 hora antes de cada cita. Configura mensajes personalizados y revisa el historial de envíos.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <p className="text-2xl font-extrabold text-green-700">47</p>
                  <p className="text-sm text-green-600 mt-1">Enviados esta semana</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-5 border border-primary/20">
                  <p className="text-2xl font-extrabold text-primary">92%</p>
                  <p className="text-sm text-primary mt-1">Tasa de apertura</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                  <p className="text-2xl font-extrabold text-amber-700">5</p>
                  <p className="text-sm text-amber-600 mt-1">Pendientes hoy</p>
                </div>
              </div>
            </div>
          )}

          {/* Pagos */}
          {activeSection === "pagos" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Pagos e ingresos</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Revisa el estado de pagos, cuotas pendientes y facturación electrónica DIAN de tu clínica.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-primary/10 rounded-2xl p-5 border border-primary/20">
                  <p className="text-2xl font-extrabold text-primary">$4.2M</p>
                  <p className="text-sm text-primary mt-1">Ingresos del mes</p>
                </div>
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                  <p className="text-2xl font-extrabold text-amber-700">$820K</p>
                  <p className="text-sm text-amber-600 mt-1">Cuotas pendientes</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <p className="text-2xl font-extrabold text-green-700">23</p>
                  <p className="text-sm text-green-600 mt-1">Facturas emitidas</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
