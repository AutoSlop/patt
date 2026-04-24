import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import PricingCard from "./components/PricingCard";
import Tracking from "./components/Tracking";
import WhatsAppButton from "./components/WhatsAppButton";

const WA_URL =
  "https://wa.me/573212266160?text=Hola%20PATT%2C%20quiero%20conocer%20la%20demo%20para%20mi%20veterinaria";

const plans = [
  {
    name: "Starter",
    price: "USD 49",
    description: "Para clínicas con 1 veterinario",
    features: [
      "Agenda por WhatsApp",
      "Recordatorios automáticos",
      "Historia clínica digital",
      "Hasta 200 pacientes",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Pro",
    price: "USD 99",
    description: "Para clínicas con 2-3 veterinarios",
    highlighted: true,
    features: [
      "Todo lo de Starter",
      "Pasarela de pagos con cuotas",
      "Facturación electrónica DIAN",
      "Dashboard de ingresos",
      "Pacientes ilimitados",
      "Gerente de cuenta dedicado",
    ],
  },
  {
    name: "Enterprise",
    price: "USD 199",
    description: "Para clínicas con 4-5 veterinarios",
    features: [
      "Todo lo de Pro",
      "Multi-sede",
      "API para integraciones",
      "Reportes avanzados",
      "Soporte prioritario 24/7",
      "Capacitación presencial",
    ],
  },
];

const testimonials = [
  {
    name: "Dra. Carolina Mendoza",
    clinic: "Clínica VetAmigo",
    city: "Bogotá",
    text: "Desde que implementamos PATT, las citas perdidas bajaron un 62%. Los recordatorios automáticos por WhatsApp son un antes y un después. Ahora atendemos 15 pacientes más por semana.",
    metric: "62% menos citas perdidas",
  },
  {
    name: "Dr. Andrés Restrepo",
    clinic: "Centro Veterinario PetSalud",
    city: "Medellín",
    text: "La financiación de cirugías nos cambió la vida. El mes pasado hicimos 8 cirugías que antes se perdían porque los dueños no podían pagar de contado. Son $12M extra en ingresos.",
    metric: "+$12M en ingresos mensuales",
  },
  {
    name: "Dra. Valentina Herrera",
    clinic: "Veterinaria El Buen Pastor",
    city: "Cali",
    text: "Dejamos de buscar historias clínicas en cuadernos. Ahora todo está en el celular. La migración de datos fue rápida y el soporte nos acompañó en cada paso.",
    metric: "3 días de implementación",
  },
];

export default function Home() {
  return (
    <>
      <Tracking />
      <WhatsAppButton />

      {/* NAV */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[4.5rem]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#0B7A5E] rounded-xl flex items-center justify-center shadow-sm shadow-primary/20">
              <svg className="w-5 h-5 text-white" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="20" cy="12" r="7" />
                <circle cx="44" cy="12" r="7" />
                <circle cx="10" cy="28" r="6" />
                <circle cx="54" cy="28" r="6" />
                <ellipse cx="32" cy="42" rx="16" ry="18" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">PATT</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-7 text-sm font-medium text-gray-500">
            <a href="#como-funciona" className="hidden sm:inline hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#features" className="hidden sm:inline hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#precios" className="hidden sm:inline hover:text-primary transition-colors">Precios</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-label="nav"
              className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-sm shadow-primary/20"
            >
              Habla con nosotros
            </a>
            <a
              href="/login"
              className="border border-gray-200 text-gray-700 hover:border-primary hover:text-primary font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-colors text-sm"
            >
              Inicia sesión
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#083d30] via-[#0a6e55] to-[#0F9D7A] text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-white/[0.03] blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/[0.12] backdrop-blur-sm text-white/90 text-sm font-medium px-5 py-2 rounded-full mb-8 border border-white/[0.08]">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
                +200 veterinarias en Colombia ya usan PATT
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight">
                Ordena tu veterinaria.{" "}
                <span className="text-accent">Controla todo desde WhatsApp.</span>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">
                Agenda citas, envía recordatorios, consulta historias clínicas y cobra procedimientos con cuotas — todo integrado al WhatsApp que ya usan tus clientes.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#lead-form"
                  data-track="click_pruebalo_gratis"
                  data-track-label="hero"
                  className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  Pruébalo gratis 14 días
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_whatsapp"
                  data-track-label="hero"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Habla con nosotros
                </a>
              </div>
              {/* Mini metrics */}
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/60">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  Sin tarjeta de crédito
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  Implementación en 48 horas
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  Soporte humano incluido
                </div>
              </div>
            </div>
            {/* Lead Form */}
            <div id="lead-form" className="scroll-mt-24">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="bg-white border-b border-gray-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {[
              { value: "200+", label: "Veterinarias activas" },
              { value: "15K+", label: "Citas agendadas/mes" },
              { value: "62%", label: "Menos citas perdidas" },
              { value: "4.9/5", label: "Satisfacción promedio" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-bg/50">
                <p className="text-3xl sm:text-4xl font-extrabold text-gradient">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 sm:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">El problema</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              ¿Te suena familiar?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Los 3 problemas que más afectan a las veterinarias independientes
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Caos en WhatsApp</h3>
              <p className="text-gray-500 text-[0.9rem] leading-relaxed">
                Citas mezcladas con fotos de mascotas, preguntas de precios y memes. Pierdes
                mensajes importantes y terminas trabajando hasta medianoche respondiendo chats.
              </p>
            </div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Cirugías perdidas por falta de liquidez</h3>
              <p className="text-gray-500 text-[0.9rem] leading-relaxed">
                El dueño quiere operar a su mascota pero no tiene el dinero completo. Tú pierdes
                el ingreso y la mascota no recibe el tratamiento que necesita.
              </p>
            </div>
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">Historia clínica fragmentada</h3>
              <p className="text-gray-500 text-[0.9rem] leading-relaxed">
                Cuadernos, hojas sueltas, archivos en Excel que nadie actualiza. Cuando llega un
                paciente de urgencia, pierdes minutos valiosos buscando su historial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Cómo funciona</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              Actívalo en 3 pasos simples
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Sin instalaciones complicadas. Sin cambiar tu flujo de trabajo.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 mb-20 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden sm:block absolute top-7 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20" />
            {[
              { step: "1", title: "Conecta tu WhatsApp", desc: "Vincula tu número de WhatsApp Business en menos de 10 minutos. Sin cambiar de número." },
              { step: "2", title: "Configura tu agenda", desc: "Define horarios, servicios y duración de consultas desde el dashboard. Nosotros te ayudamos." },
              { step: "3", title: "Recibe y cobra citas", desc: "PATT agenda, recuerda, cobra y registra. Tú te dedicas a lo que importa: atender pacientes." },
            ].map((item) => (
              <div key={item.step} className="text-center relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#0B7A5E] text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-6 shadow-lg shadow-primary/20">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[0.9rem] leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Mockup */}
          <div className="max-w-sm mx-auto">
            <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-200/50 ring-1 ring-black/5">
              <div className="bg-[#075E54] px-4 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="20" cy="12" r="7" />
                    <circle cx="44" cy="12" r="7" />
                    <circle cx="10" cy="28" r="6" />
                    <circle cx="54" cy="28" r="6" />
                    <ellipse cx="32" cy="42" rx="16" ry="18" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">PATT - VetAmigo</p>
                  <p className="text-white/70 text-xs">en línea</p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Hola, quiero agendar una cita para mi perro Max 🐕</p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:30 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-sm text-gray-800">
                    ¡Hola! 👋 Encontré a Max en el sistema. ¿Qué servicio necesitas?
                  </p>
                  <p className="text-sm text-gray-800 mt-1">
                    1️⃣ Consulta general<br />
                    2️⃣ Vacunación<br />
                    3️⃣ Peluquería
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:30 a.m. ✓✓</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">1</p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:31 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-sm text-gray-800">
                    Consulta general para Max 🐾 Horarios disponibles para mañana:
                  </p>
                  <p className="text-sm text-gray-800 mt-1">
                    🕐 9:00 a.m.<br />
                    🕐 11:30 a.m.<br />
                    🕐 3:00 p.m.
                  </p>
                  <p className="text-sm text-gray-800 mt-1">Responde con el número del horario.</p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:31 a.m. ✓✓</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">2</p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:31 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-sm text-gray-800">
                    ✅ ¡Listo! Cita confirmada para Max mañana a las 11:30 a.m. con la Dra. Mendoza. Te enviaré un recordatorio 1 hora antes. 🐶
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:31 a.m. ✓✓</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6 font-medium">
              Así se ve una cita agendada con PATT — automático, rápido, sin fricción.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Funcionalidades</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              Todo lo que necesitas para tu veterinaria
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Diseñado para veterinarias independientes en Latinoamérica
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: "Agenda por WhatsApp",
                desc: "Tus clientes agendan citas directamente desde el chat. Sin apps, sin llamadas, sin esperar.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                ),
                title: "Recordatorios automáticos",
                desc: "Mensajes automáticos 24h y 1h antes. Reduce las citas perdidas hasta un 60%.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
                title: "Historia clínica digital",
                desc: "Todo el historial de cada paciente disponible al instante. Vacunas, tratamientos, alergias y más.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                ),
                title: "Pasarela con cuotas",
                desc: "Ofrece financiación de cirugías y tratamientos. Tú cobras de inmediato, el cliente paga en cuotas.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                ),
                title: "Facturación DIAN",
                desc: "Genera facturas electrónicas válidas ante la DIAN directamente desde PATT. Cumple con la normativa sin esfuerzo.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: "Dashboard de ingresos",
                desc: "Visualiza ingresos, citas y pagos pendientes en tiempo real. Toma mejores decisiones para tu clínica.",
              },
            ].map((feature, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]">
                <div className="w-14 h-14 bg-primary/[0.08] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-[0.9rem] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Precios</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              Planes simples, sin sorpresas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 sm:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Testimonios</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              Veterinarias que ya usan PATT
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Resultados reales de clínicas como la tuya
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]">
                <div className="bg-primary/[0.08] text-primary text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                  {t.metric}
                </div>
                <p className="text-gray-500 text-[0.9rem] leading-relaxed mb-7">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {t.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">
                      {t.clinic} — {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 mb-5">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Todo lo que necesitas saber antes de empezar
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#083d30] via-[#0a6e55] to-[#0F9D7A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.08]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 leading-tight">
            Lleva tu veterinaria al siguiente nivel
          </h2>
          <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Más de 200 clínicas en Colombia ya usan PATT para gestionar citas, pagos e historia
            clínica desde WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              data-track="click_pruebalo_gratis"
              data-track-label="cta_final"
              className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Pruébalo gratis 14 días
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-label="cta_final"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:-translate-y-0.5"
            >
              Habla con nosotros
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091a14] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
          <div className="grid sm:grid-cols-4 gap-10 sm:gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#0B7A5E] rounded-xl flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="20" cy="12" r="7" />
                    <circle cx="44" cy="12" r="7" />
                    <circle cx="10" cy="28" r="6" />
                    <circle cx="54" cy="28" r="6" />
                    <ellipse cx="32" cy="42" rx="16" ry="18" />
                  </svg>
                </div>
                <span className="text-white font-extrabold text-lg tracking-tight">PATT</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                WhatsApp-native SaaS para veterinarias independientes en Latinoamérica. Agenda, cobra y gestiona desde el chat.
              </p>
            </div>
            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5">Producto</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_whatsapp"
                    data-track-label="footer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li><a href="mailto:hola@patt.vet" className="hover:text-white transition-colors">hola@patt.vet</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} PATT. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600">
              Hecho con ❤️ para veterinarias en LatAm
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
