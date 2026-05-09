"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "🚌", title: "Bus Hire", desc: "Whether it's a school trip, pilgrimage, or corporate outing, our fleet of luxury and standard Rosa buses are ready. AC and Non-AC options with reclining seats, music systems, and professional drivers.", features: ["26–55 seater options", "AC & Non-AC available", "Licensed professional drivers", "Island-wide service"] },
  { icon: "🚐", title: "Van Hire", desc: "Perfect for family vacations, small group tours, and daily hire. Our Dolphin and KDH vans come with adjustable seating, spacious luggage compartments, and optional AC.", features: ["8–14 seater vans", "AC & Non-AC options", "Adjustable seating", "Luggage space included"] },
  { icon: "🚗", title: "Car Hire", desc: "Premium sedans and SUVs for personal travel, business trips, and VIP transfers. All cars come with experienced chauffeurs and are impeccably maintained.", features: ["Premium sedan fleet", "SUV options available", "Chauffeur driven", "GPS navigation"] },
  { icon: "✈️", title: "Airport Transfers", desc: "Reliable and punctual airport pickup and drop-off service. We monitor flight schedules to ensure we're always on time, whether you're arriving or departing.", features: ["Flight tracking", "Meet & greet service", "24/7 availability", "All airports covered"] },
  { icon: "💒", title: "Wedding Transport", desc: "Make your special day unforgettable with our elegantly decorated wedding cars. Complete with professional chauffeurs, red carpet service, and photo-ready vehicles.", features: ["Decorated vehicles", "Professional chauffeurs", "Red carpet service", "Photo session included"] },
  { icon: "🏔️", title: "Group Tours", desc: "Explore Sri Lanka's most beautiful destinations with our organized group tour packages. Popular routes include Kandy, Ella, Nuwara Eliya, Sigiriya, and coastal areas.", features: ["Kandy & Temple tours", "Ella & tea country", "Nuwara Eliya hills", "Coastal excursions"] },
  { icon: "🚚", title: "Lorry Transport", desc: "Heavy goods and logistics transport solutions for businesses. Various lorry sizes available for commercial goods, furniture moving, and industrial transport needs.", features: ["Various lorry sizes", "Covered & open options", "Loading assistance", "Commercial goods"] },
  { icon: "🏢", title: "Corporate Transport", desc: "Scheduled shuttle services for corporate clients. We provide reliable daily transport solutions for employees, executives, and corporate events.", features: ["Daily shuttle service", "Executive vehicles", "Event transport", "Flexible scheduling"] },
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="section-label mb-3 animate-fade-in-down">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-5 animate-fade-in-up">
            Complete <span className="gradient-gold-text">Transport Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            From daily commutes to once-in-a-lifetime events, we provide premium transport services tailored to your needs.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div key={s.title} className={`glass-light rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start reveal${i % 2 === 0 ? '' : '-right'}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-16 h-16 shrink-0 rounded-xl glass-gold flex items-center justify-center text-3xl">{s.icon}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white font-[var(--font-heading)] mb-3">{s.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-5">{s.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-gold inline-block text-sm !py-2.5 !px-6">Get Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
