"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { withBasePath } from "@/lib/site";

const fleetPreview = [
  { name: "Rosa Bus", seats: "26–33 Seats", img: withBasePath("/images/rosa-bus.png"), features: ["AC", "Reclining Seats", "Music System"], popular: true },
  { name: "Dolphin Van", seats: "8–14 Seats", img: withBasePath("/images/dolphin-van.png"), features: ["AC / Non-AC", "Adjustable Seats", "Luggage Space"], popular: false },
  { name: "Luxury Car", seats: "3–4 Seats", img: withBasePath("/images/luxury-car.png"), features: ["AC", "Airport Transfer", "Leather Interior"], popular: false },
  { name: "Wedding Car", seats: "Premium", img: withBasePath("/images/wedding-car.png"), features: ["Decorated", "Chauffeur", "Red Carpet"], popular: false },
];

const services = [
  { icon: "🚌", title: "Bus Hire", desc: "Luxury & standard buses for groups of any size" },
  { icon: "🚐", title: "Van Hire", desc: "AC/Non-AC vans with adjustable seating" },
  { icon: "🚗", title: "Car Hire", desc: "Premium sedans for personal & business travel" },
  { icon: "✈️", title: "Airport Transfers", desc: "Reliable pickup & drop to any airport" },
  { icon: "💒", title: "Wedding Transport", desc: "Elegant decorated vehicles for your big day" },
  { icon: "🏔️", title: "Group Tours", desc: "Kandy, Ella, Nuwara Eliya & more destinations" },
  { icon: "🚚", title: "Lorry Transport", desc: "Heavy goods & logistics transport solutions" },
  { icon: "🏢", title: "Corporate Transport", desc: "Scheduled corporate shuttle services" },
];

const whyUs = [
  { icon: "🛡️", title: "Safety First", desc: "Licensed drivers, insured vehicles, GPS tracked" },
  { icon: "💎", title: "Premium Fleet", desc: "Well-maintained, modern & comfortable vehicles" },
  { icon: "⏰", title: "Always On Time", desc: "Punctual service with real-time tracking" },
  { icon: "💰", title: "Best Rates", desc: "Competitive pricing with no hidden charges" },
  { icon: "🌍", title: "Island-Wide", desc: "Service coverage across all of Sri Lanka" },
  { icon: "📞", title: "24/7 Support", desc: "Round-the-clock customer assistance" },
];

const testimonials = [
  { name: "Amara Perera", role: "Tourist from Australia", text: "Absolutely fantastic service! The van was spotless, driver was professional, and the whole Ella trip was magical. Highly recommend Genz Traveller!", rating: 5 },
  { name: "Kamal Fernando", role: "Wedding Client", text: "They made our wedding transport flawless. The decorated cars were stunning and everything ran on time. Thank you so much!", rating: 5 },
  { name: "Sarah Mitchell", role: "Corporate Client", text: "We use Genz Traveller for all our corporate events. Reliable, professional, and always deliver premium service.", rating: 5 },
  { name: "Dinesh Rajapaksa", role: "Group Tour", text: "Booked a Rosa bus for our family reunion trip to Nuwara Eliya. Comfortable seats, great AC, and wonderful driver. Will book again!", rating: 5 },
];

const destinations = [
  { name: "Kandy", desc: "Temple of the Tooth & Culture", img: withBasePath("/images/ella-bridge.png") },
  { name: "Ella", desc: "Nine Arches & Tea Plantations", img: withBasePath("/images/ella-bridge.png") },
  { name: "Nuwara Eliya", desc: "Little England & Hill Country", img: withBasePath("/images/ella-bridge.png") },
  { name: "Sigiriya", desc: "Ancient Rock Fortress", img: withBasePath("/images/ella-bridge.png") },
];

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={withBasePath("/images/hero-bg.png")} alt="Premium transport" fill className="object-cover" priority />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
          <div className="max-w-3xl">
            <p className="section-label mb-4 animate-fade-in-down">Sri Lanka&apos;s Premier Transport</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[var(--font-heading)] text-white leading-tight mb-6 animate-fade-in-up">
              Premium Transport<br />
              <span className="gradient-gold-text">Services Across</span><br />
              Sri Lanka
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl animate-fade-in-up delay-200">
              Safe, Comfortable &amp; Reliable Travel Solutions — from airport transfers to island-wide tours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Link href="/contact" className="btn-gold text-center text-base">Book Now</Link>
              <a href="https://wa.me/94719593100" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-center text-base flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.763-6.26-2.055a.75.75 0 00-.63-.123l-3.15 1.056 1.056-3.15a.75.75 0 00-.123-.63A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-gold-400/40 flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold-400/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== FLEET PREVIEW ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Our Fleet</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-4">
              Travel in <span className="gradient-gold-text">Style &amp; Comfort</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetPreview.map((v, i) => (
              <div key={v.name} className={`card-premium relative reveal`} style={{ transitionDelay: `${i * 100}ms` }}>
                {v.popular && <div className="absolute top-4 right-4 z-10 badge-popular">Most Popular</div>}
                <div className="relative h-48 overflow-hidden">
                  <Image src={v.img} alt={v.name} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white font-[var(--font-heading)] mb-1">{v.name}</h3>
                  <p className="text-gold-400 text-sm font-medium mb-3">{v.seats}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.features.map((f) => (
                      <span key={f} className="text-xs bg-white/5 text-gray-400 px-2.5 py-1 rounded-full border border-white/5">{f}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="block text-center text-sm font-semibold text-gold-400 border border-gold-400/30 rounded-lg py-2.5 hover:bg-gold-400/10 transition-all duration-300">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/fleet" className="btn-outline-gold inline-block">View Full Fleet →</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/0 via-gold-400/[0.02] to-dark-800/0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-4">
              Our <span className="gradient-gold-text">Services</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="glass-light rounded-xl p-6 hover:border-gold-400/30 transition-all duration-400 hover:-translate-y-2 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Why Genz Traveller</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-4">
              Why <span className="gradient-gold-text">Choose Us</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={item.title} className="flex gap-4 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 shrink-0 rounded-xl glass-gold flex items-center justify-center text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/0 via-gold-400/[0.02] to-dark-800/0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Explore Sri Lanka</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-4">
              Popular <span className="gradient-gold-text">Destinations</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <div key={d.name} className="relative group rounded-2xl overflow-hidden h-72 reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
                <Image src={d.img} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-[var(--font-heading)]">{d.name}</h3>
                  <p className="text-gold-300 text-sm">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-4">
              What Our <span className="gradient-gold-text">Clients Say</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="glass-light rounded-xl p-6 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <span key={j} className="text-gold-400">★</span>)}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gold-400/70 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative reveal">
          <p className="section-label mb-3">Ready to Travel?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-6">
            Book Your <span className="gradient-gold-text">Ride Today</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a family trip, corporate event, wedding, or airport transfer — we&apos;ve got you covered with premium comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base">Book Now</Link>
            <a href="https://wa.me/94719593100" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-base">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
