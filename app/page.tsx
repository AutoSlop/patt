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
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-2xl border-b border-gray-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-[4.5rem]">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#0B7A5E] rounded-xl flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow">
              <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 64 64" fill="currentColor">
                <circle cx="20" cy="12" r="7" />
                <circle cx="44" cy="12" r="7" />
                <circle cx="10" cy="28" r="6" />
                <circle cx="54" cy="28" r="6" />
                <ellipse cx="32" cy="42" rx="16" ry="18" />
              </svg>
            </div>
            <span className="text-[1.125rem] font-extrabold tracking-tight text-text">PATT</span>
          </a>
          <div className="flex items-center gap-3 sm:gap-5 text-[0.8125rem] font-medium text-gray-500">
            <a href="#como-funciona" className="hidden sm:inline hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#features" className="hidden sm:inline hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#precios" className="hidden sm:inline hover:text-primary transition-colors">Precios</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-label="nav"
              className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-lg transition-all text-[0.8125rem] shadow-sm shadow-primary/15 hover:shadow-md hover:shadow-primary/20"
            >
              Habla con nosotros
            </a>
            <a
              href="/login"
              className="border border-gray-200 text-gray-600 hover:border-primary hover:text-primary font-semibold px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-[0.8125rem]"
            >
              Inicia sesión
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#041e17] via-[#074d3b] to-[#0F9D7A] text-white">
        <div className="absolute inset-0 bg-grid opacity-[0.08]" />
        <div className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-white/[0.015] blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm text-white/90 text-[0.8125rem] font-medium px-4 py-2 rounded-full mb-8 border border-white/[0.1] shadow-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
                +200 veterinarias en Colombia ya usan PATT
              </div>
              <h1 className="text-[2rem] sm:text-[2.875rem] lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight">
                Ordena tu veterinaria.{" "}
                <span className="text-accent">Domina WhatsApp.</span>
              </h1>
              <p className="mt-7 text-base sm:text-[1.125rem] text-white/65 leading-relaxed max-w-xl">
                Agenda citas, envía recordatorios automáticos, consulta historias clínicas y cobra procedimientos con cuotas — todo desde el WhatsApp que ya usan tus clientes.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#lead-form"
                  data-track="click_pruebalo_gratis"
                  data-track-label="hero"
                  className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-[0.9375rem] transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                >
                  Pruébalo gratis 14 días
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="click_whatsapp"
                  data-track-label="hero"
                  className="inline-flex items-center justify-center border-2 border-white/15 hover:bg-white/[0.08] text-white font-semibold px-8 py-4 rounded-xl text-[0.9375rem] transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <svg className="w-4.5 h-4.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Habla con nosotros
                </a>
              </div>
              {/* Mini metrics */}
              <div className="mt-14 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { val: "200+", label: "Clínicas activas" },
                  { val: "62%", label: "Menos no-shows" },
                  { val: "48h", label: "Implementación" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-2xl sm:text-[2rem] font-extrabold text-white tracking-tight">{m.val}</p>
                    <p className="text-[0.6875rem] sm:text-xs text-white/45 mt-1 font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Lead Form */}
            <div id="lead-form" className="scroll-mt-24">
              <LeadForm />
            </div>
          </div>
        </div>
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" className="w-full text-white block"><path d="M0 48h1440V24c-240 16-480 24-720 24S240 40 0 24v24z" fill="currentColor"/></svg>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 text-[0.8125rem] text-gray-400">
            <span className="font-semibold text-gray-500 mr-1">Confían en nosotros:</span>
            {["Clínica VetAmigo", "PetSalud", "El Buen Pastor", "VetCenter", "PawCare"].map((name) => (
              <span key={name} className="bg-gray-50/80 px-3.5 py-1.5 rounded-full border border-gray-100 font-medium text-gray-400 text-xs">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {[
              { value: "200+", label: "Veterinarias activas", icon: "🏥" },
              { value: "15K+", label: "Citas agendadas/mes", icon: "📅" },
              { value: "62%", label: "Menos citas perdidas", icon: "📉" },
              { value: "4.9/5", label: "Satisfacción promedio", icon: "⭐" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-bg rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <p className="text-xs mb-2">{stat.icon}</p>
                <p className="text-[1.625rem] sm:text-3xl font-extrabold text-gradient tracking-tight">{stat.value}</p>
                <p className="text-[0.6875rem] sm:text-xs text-gray-400 mt-1.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROBLEMAS */}
      <section className="py-24 sm:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">El problema</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              ¿Te suena familiar?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Los 3 problemas que más afectan a las veterinarias independientes
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                bgClass: "bg-red-50",
                textClass: "text-red-500",
                borderAccent: "border-red-100",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
                title: "Caos en WhatsApp",
                desc: "Citas mezcladas con fotos de mascotas, preguntas de precios y memes. Pierdes mensajes importantes y terminas trabajando hasta medianoche respondiendo chats.",
              },
              {
                bgClass: "bg-amber-50",
                textClass: "text-amber-500",
                borderAccent: "border-amber-100",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Cirugías perdidas por falta de liquidez",
                desc: "El dueño quiere operar a su mascota pero no tiene el dinero completo. Tú pierdes el ingreso y la mascota no recibe el tratamiento que necesita.",
              },
              {
                bgClass: "bg-blue-50",
                textClass: "text-blue-500",
                borderAccent: "border-blue-100",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                title: "Historia clínica fragmentada",
                desc: "Cuadernos, hojas sueltas, archivos en Excel que nadie actualiza. Cuando llega un paciente de urgencia, pierdes minutos valiosos buscando su historial.",
              },
            ].map((item) => (
              <div key={item.title} className={`card-hover bg-white rounded-2xl p-8 sm:p-9 border ${item.borderAccent} shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.02)]`}>
                <div className={`icon-box ${item.bgClass} mb-6`}>
                  <svg className={`w-6 h-6 ${item.textClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-text text-[1.0625rem] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-[0.875rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">Cómo funciona</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              Actívalo en 3 pasos simples
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Sin instalaciones complicadas. Sin cambiar tu flujo de trabajo.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 mb-24 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden sm:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10" />
            {[
              { step: "1", title: "Conecta tu WhatsApp", desc: "Vincula tu número de WhatsApp Business en menos de 10 minutos. Sin cambiar de número." },
              { step: "2", title: "Configura tu agenda", desc: "Define horarios, servicios y duración de consultas desde el dashboard. Nosotros te ayudamos." },
              { step: "3", title: "Recibe y cobra citas", desc: "PATT agenda, recuerda, cobra y registra. Tú te dedicas a lo que importa: atender pacientes." },
            ].map((item) => (
              <div key={item.step} className="text-center relative z-10 bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#0B7A5E] text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-6 shadow-lg shadow-primary/15 ring-4 ring-primary/[0.06]">
                  {item.step}
                </div>
                <h3 className="font-bold text-text text-[1.0625rem] mb-3">{item.title}</h3>
                <p className="text-gray-400 text-[0.875rem] leading-relaxed max-w-[280px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Mockup */}
          <div className="max-w-sm mx-auto">
            <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-200/50 ring-1 ring-black/[0.03]">
              <div className="bg-[#075E54] px-4 py-3.5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="20" cy="12" r="7" />
                    <circle cx="44" cy="12" r="7" />
                    <circle cx="10" cy="28" r="6" />
                    <circle cx="54" cy="28" r="6" />
                    <ellipse cx="32" cy="42" rx="16" ry="18" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">PATT - VetAmigo</p>
                  <p className="text-white/60 text-[0.6875rem]">en línea</p>
                </div>
              </div>
              <div className="p-3.5 space-y-1.5">
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">Hola, quiero agendar una cita para mi perro Max 🐕</p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:30 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">
                    ¡Hola! 👋 Encontré a Max en el sistema. ¿Qué servicio necesitas?
                  </p>
                  <p className="text-[0.8125rem] text-gray-800 mt-1">
                    1️⃣ Consulta general<br />
                    2️⃣ Vacunación<br />
                    3️⃣ Peluquería
                  </p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:30 a.m. ✓✓</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">1</p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:31 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">
                    Consulta general para Max 🐾 Horarios disponibles para mañana:
                  </p>
                  <p className="text-[0.8125rem] text-gray-800 mt-1">
                    🕐 9:00 a.m.<br />
                    🕐 11:30 a.m.<br />
                    🕐 3:00 p.m.
                  </p>
                  <p className="text-[0.8125rem] text-gray-800 mt-1">Responde con el número del horario.</p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:31 a.m. ✓✓</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">2</p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:31 a.m.</p>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg px-3 py-2 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-[0.8125rem] text-gray-800">
                    ✅ ¡Listo! Cita confirmada para Max mañana a las 11:30 a.m. con la Dra. Mendoza. Te enviaré un recordatorio 1 hora antes. 🐶
                  </p>
                  <p className="text-[0.625rem] text-gray-400 text-right mt-0.5">10:31 a.m. ✓✓</p>
                </div>
              </div>
            </div>
            <p className="text-center text-[0.8125rem] text-gray-400 mt-6 font-medium">
              Así se ve una cita agendada con PATT — automático, rápido, sin fricción.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* FEATURES */}
      <section id="features" className="py-24 sm:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">Funcionalidades</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              Todo lo que necesitas para tu veterinaria
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Diseñado para veterinarias independientes en Latinoamérica
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: "Agenda por WhatsApp",
                desc: "Tus clientes agendan citas directamente desde el chat. Sin apps, sin llamadas, sin esperar.",
                badge: null,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                ),
                title: "Recordatorios automáticos",
                desc: "Mensajes automáticos 24h y 1h antes. Reduce las citas perdidas hasta un 60%.",
                badge: "Popular",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
                title: "Historia clínica digital",
                desc: "Todo el historial de cada paciente disponible al instante. Vacunas, tratamientos, alergias y más.",
                badge: null,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                ),
                title: "Pasarela con cuotas",
                desc: "Ofrece financiación de cirugías y tratamientos. Tú cobras de inmediato, el cliente paga en cuotas.",
                badge: "Nuevo",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                ),
                title: "Facturación DIAN",
                desc: "Genera facturas electrónicas válidas ante la DIAN directamente desde PATT. Cumple con la normativa sin esfuerzo.",
                badge: null,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                title: "Dashboard de ingresos",
                desc: "Visualiza ingresos, citas y pagos pendientes en tiempo real. Toma mejores decisiones para tu clínica.",
                badge: null,
              },
            ].map((feature, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 sm:p-9 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.02)] relative">
                {feature.badge && (
                  <span className="absolute top-5 right-5 bg-accent/10 text-accent text-[0.6875rem] font-bold px-2.5 py-0.5 rounded-full">{feature.badge}</span>
                )}
                <div className="icon-box bg-primary/[0.08] mb-6">
                  <svg className="w-5.5 h-5.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-text text-[1.0625rem] mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-[0.875rem] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PRECIOS */}
      <section id="precios" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">Precios</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              Planes simples, sin sorpresas
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-start max-w-5xl mx-auto">
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

      <div className="section-sep" />

      {/* TESTIMONIOS */}
      <section className="py-24 sm:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">Testimonios</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              Veterinarias que ya usan PATT
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Resultados reales de clínicas como la tuya
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 sm:p-9 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_20px_rgba(0,0,0,0.02)]">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <div className="bg-primary/[0.07] text-primary text-[0.75rem] font-bold px-3 py-1.5 rounded-full inline-block mb-5">
                  {t.metric}
                </div>
                <p className="text-gray-500 text-[0.875rem] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary/15 to-primary/[0.07] rounded-full flex items-center justify-center ring-2 ring-primary/[0.06]">
                    <span className="text-primary font-bold text-xs">
                      {t.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{t.name}</p>
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

      <div className="section-sep" />

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <span className="section-label mb-5 inline-flex">FAQ</span>
            <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold text-text mt-5 mb-5 leading-[1.12] tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[0.9375rem] sm:text-lg leading-relaxed">
              Todo lo que necesitas saber antes de empezar
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#041e17] via-[#074d3b] to-[#0F9D7A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.1] blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm text-white/80 text-[0.8125rem] font-medium px-4 py-2 rounded-full mb-8 border border-white/[0.1]">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
            Sin compromiso · Sin tarjeta de crédito
          </div>
          <h2 className="text-[1.625rem] sm:text-[2.375rem] lg:text-[2.75rem] font-extrabold mb-5 leading-[1.12] tracking-tight">
            Lleva tu veterinaria al siguiente nivel
          </h2>
          <p className="text-white/55 text-[0.9375rem] sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Más de 200 clínicas en Colombia ya usan PATT para gestionar citas, pagos e historia
            clínica desde WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <a
              href="#lead-form"
              data-track="click_pruebalo_gratis"
              data-track-label="cta_final"
              className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-[0.9375rem] transition-all shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Pruébalo gratis 14 días
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="click_whatsapp"
              data-track-label="cta_final"
              className="inline-flex items-center justify-center border-2 border-white/15 hover:bg-white/[0.08] text-white font-semibold px-8 py-4 rounded-xl text-[0.9375rem] transition-all hover:-translate-y-0.5"
            >
              Habla con nosotros
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.8125rem] text-white/40">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent/70" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
              Sin tarjeta de crédito
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent/70" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
              Implementación en 48h
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent/70" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
              Soporte humano
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061610] text-gray-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-[#0B7A5E] rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                  <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="20" cy="12" r="7" />
                    <circle cx="44" cy="12" r="7" />
                    <circle cx="10" cy="28" r="6" />
                    <circle cx="54" cy="28" r="6" />
                    <ellipse cx="32" cy="42" rx="16" ry="18" />
                  </svg>
                </div>
                <span className="text-white font-extrabold text-[1.125rem] tracking-tight">PATT</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                WhatsApp-native SaaS para veterinarias independientes en Latinoamérica. Agenda, cobra y gestiona desde el chat.
              </p>
            </div>
            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-[0.8125rem] mb-5 uppercase tracking-wider text-[0.75rem]">Producto</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#lead-form" className="hover:text-white transition-colors">Solicitar demo</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold text-[0.8125rem] mb-5 uppercase tracking-wider text-[0.75rem]">Recursos</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="text-gray-600">Blog (próximamente)</span></li>
                <li><span className="text-gray-600">Centro de ayuda</span></li>
                <li><span className="text-gray-600">Términos de servicio</span></li>
                <li><span className="text-gray-600">Política de privacidad</span></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-[0.8125rem] mb-5 uppercase tracking-wider text-[0.75rem]">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_whatsapp"
                    data-track-label="footer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </li>
                <li><a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a></li>
                <li><span className="text-gray-600">Bogotá, Colombia</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
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
