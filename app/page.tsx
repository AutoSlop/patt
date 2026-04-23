import FAQ from "./components/FAQ";
import PricingCard from "./components/PricingCard";
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
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute bottom-0 -left-12 w-72 h-72 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Tu veterinaria no necesita más chats.{" "}
              <span className="text-accent">Necesita control en WhatsApp.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
              Agenda citas, manda recordatorios, consulta la historia clínica y cobra
              procedimientos con cuotas, sin salir de WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#precios"
                className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Pruébalo gratis 14 días
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Habla con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Los 3 problemas que más afectan a las veterinarias independientes
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Caos en WhatsApp</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Citas mezcladas con fotos de mascotas, preguntas de precios y memes. Pierdes
                mensajes importantes y terminas trabajando hasta medianoche respondiendo chats.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cirugías perdidas por falta de liquidez</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                El dueño quiere operar a su mascota pero no tiene el dinero completo. Tú pierdes
                el ingreso y la mascota no recibe el tratamiento que necesita.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Historia clínica fragmentada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cuadernos, hojas sueltas, archivos en Excel que nadie actualiza. Cuando llega un
                paciente de urgencia, pierdes minutos valiosos buscando su historial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            4 pasos para transformar la comunicación de tu veterinaria
          </p>

          <div className="grid sm:grid-cols-4 gap-8 mb-16">
            {[
              { step: "1", title: "Conecta tu WhatsApp", desc: "Vincula tu número de WhatsApp Business en menos de 10 minutos." },
              { step: "2", title: "Configura tu agenda", desc: "Define horarios, servicios y duración de consultas desde el dashboard." },
              { step: "3", title: "Activa recordatorios", desc: "PATT envía recordatorios automáticos 24h y 1h antes de cada cita." },
              { step: "4", title: "Cobra y factura", desc: "Recibe pagos con cuotas y genera facturación electrónica automática." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Mockup */}
          <div className="max-w-sm mx-auto bg-[#ECE5DD] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-primary px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
          <p className="text-center text-sm text-gray-500 mt-4">
            Así se ve una cita agendada con PATT — automático, rápido, sin fricción.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Todo lo que necesitas para tu veterinaria
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Funcionalidades diseñadas para veterinarias independientes en Latinoamérica
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Planes simples, sin sorpresas
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 items-start">
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
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Veterinarias que ya usan PATT
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Resultados reales de clínicas como la tuya
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  {t.metric}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {t.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar
          </p>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Lleva tu veterinaria al siguiente nivel
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Más de 200 clínicas en Colombia ya usan PATT para gestionar citas, pagos e historia
            clínica desde WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#precios"
              className="inline-flex items-center justify-center bg-accent hover:bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Pruébalo gratis 14 días
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Habla con nosotros
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 64 64" fill="none">
              <circle cx="20" cy="12" r="7" fill="#0F9D7A" />
              <circle cx="44" cy="12" r="7" fill="#0F9D7A" />
              <circle cx="10" cy="28" r="6" fill="#0F9D7A" />
              <circle cx="54" cy="28" r="6" fill="#0F9D7A" />
              <ellipse cx="32" cy="42" rx="16" ry="18" fill="#0F9D7A" />
            </svg>
            <span className="text-white font-bold text-lg">PATT</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PATT. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
