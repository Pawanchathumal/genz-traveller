"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const vehicles = [
  { name: "Rosa Bus (AC)", seats: "26–33 Seats", img: "/images/rosa-bus.png", features: ["Air Conditioned", "Reclining Seats", "Music System", "Luggage Compartment"], price: "From LKR 35,000/day", popular: true, category: "Bus" },
  { name: "Rosa Bus (Non-AC)", seats: "26–33 Seats", img: "/images/rosa-bus.png", features: ["Non-AC", "Comfortable Seats", "Music System", "Luggage Space"], price: "From LKR 25,000/day", popular: false, category: "Bus" },
  { name: "Luxury Coach", seats: "40–55 Seats", img: "/images/rosa-bus.png", features: ["Full AC", "Push-back Seats", "TV/DVD", "Washroom"], price: "From LKR 55,000/day", popular: false, category: "Bus" },
  { name: "Dolphin Van (AC)", seats: "8–10 Seats", img: "/images/dolphin-van.png", features: ["Air Conditioned", "Adjustable Seats", "Spacious Luggage", "Tinted Glass"], price: "From LKR 18,000/day", popular: true, category: "Van" },
  { name: "Dolphin Van (Non-AC)", seats: "8–10 Seats", img: "/images/dolphin-van.png", features: ["Non-AC", "Comfortable Seats", "Luggage Space", "Budget Friendly"], price: "From LKR 12,000/day", popular: false, category: "Van" },
  { name: "KDH Van (AC)", seats: "12–14 Seats", img: "/images/dolphin-van.png", features: ["Full AC", "Premium Seats", "Large Luggage Area", "USB Charging"], price: "From LKR 22,000/day", popular: false, category: "Van" },
  { name: "Premium Sedan", seats: "3–4 Seats", img: "/images/luxury-car.png", features: ["Full AC", "Leather Interior", "GPS Navigation", "Airport Transfer"], price: "From LKR 8,000/day", popular: false, category: "Car" },
  { name: "Luxury SUV", seats: "5–7 Seats", img: "/images/luxury-car.png", features: ["Full AC", "Premium Interior", "4WD Available", "Chauffeur Driven"], price: "From LKR 15,000/day", popular: false, category: "Car" },
  { name: "Wedding Car", seats: "Premium", img: "/images/wedding-car.png", features: ["Fully Decorated", "Professional Chauffeur", "Red Carpet Service", "Photo Session"], price: "Custom Quote", popular: true, category: "Special" },
  { name: "Cargo Lorry", seats: "Goods Transport", img: "/images/hero-bg.png", features: ["Various Sizes", "Covered/Open", "Loading Help", "Island-wide"], price: "From LKR 15,000", popular: false, category: "Logistics" },
];

export default function FleetPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="section-label mb-3 animate-fade-in-down">Our Fleet</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-5 animate-fade-in-up">
            Choose Your <span className="gradient-gold-text">Perfect Ride</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            From luxury buses to premium sedans — we have the perfect vehicle for every journey across Sri Lanka.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v, i) => (
              <div key={v.name} className="card-premium relative reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                {v.popular && <div className="absolute top-4 right-4 z-10 badge-popular">Popular</div>}
                <div className="absolute top-4 left-4 z-10 text-xs bg-dark-500/80 backdrop-blur text-gold-400 px-3 py-1 rounded-full border border-gold-400/20">{v.category}</div>
                <div className="relative h-56 overflow-hidden">
                  <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white font-[var(--font-heading)]">{v.name}</h3>
                  </div>
                  <p className="text-gold-400 text-sm font-medium mb-1">{v.seats}</p>
                  <p className="text-gray-500 text-xs mb-4">{v.price}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {v.features.map((f) => (
                      <span key={f} className="text-xs bg-white/5 text-gray-400 px-2.5 py-1 rounded-full border border-white/5">{f}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="block text-center text-sm font-semibold btn-gold !py-2.5">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-gold rounded-2xl p-12 reveal">
          <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-white mb-4">
            Can&apos;t find what you need?
          </h2>
          <p className="text-gray-400 mb-8">Contact us for custom vehicle arrangements and special requests.</p>
          <a href="https://wa.me/94719593100" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block">WhatsApp Us Now</a>
        </div>
      </section>
    </>
  );
}
