"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { withBasePath } from "@/lib/site";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Vehicles" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const values = [
  { icon: "🛡️", title: "Safety", desc: "Every vehicle is regularly serviced, insured, and GPS-tracked. Our drivers are licensed, experienced professionals." },
  { icon: "🤝", title: "Reliability", desc: "We pride ourselves on punctuality and dependability. When we say we'll be there, we mean it." },
  { icon: "💎", title: "Quality", desc: "From the cleanliness of our vehicles to the professionalism of our staff, quality is non-negotiable." },
  { icon: "❤️", title: "Customer First", desc: "Your comfort and satisfaction drive everything we do. We go above and beyond for every client." },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="section-label mb-3 animate-fade-in-down">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-5 animate-fade-in-up">
            The Story Behind <span className="gradient-gold-text">Genz Traveller</span>
          </h1>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="relative rounded-2xl overflow-hidden h-96">
              <Image src={withBasePath("/images/hero-bg.png")} alt="Genz Traveller fleet" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                <p className="text-gold-400 font-semibold font-[var(--font-heading)] text-lg">Trusted by 500+ Clients</p>
                <p className="text-gray-400 text-sm">Across Sri Lanka</p>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <p className="section-label mb-3">Our Story</p>
            <h2 className="text-3xl font-bold font-[var(--font-heading)] text-white mb-6">
              Redefining <span className="gradient-gold-text">Travel</span> in Sri Lanka
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>Genz Traveller was born from a simple vision: to make premium transport accessible to everyone in Sri Lanka. What started as a small family operation has grown into one of the island&apos;s most trusted transport services.</p>
              <p>We believe that every journey should be comfortable, safe, and memorable. Whether you&apos;re a tourist exploring the breathtaking landscapes of Ella, a family heading to Kandy for a weekend getaway, or a corporate team needing reliable daily transport — we&apos;re here to serve you.</p>
              <p>Our fleet ranges from luxury air-conditioned buses and vans to premium sedans and wedding cars. Every vehicle is meticulously maintained, and every driver is a licensed professional who knows Sri Lanka inside and out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center glass-gold rounded-xl p-6 reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-3xl sm:text-4xl font-bold gradient-gold-text font-[var(--font-heading)]">{s.value}</p>
              <p className="text-gray-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] text-white mb-4">
              What <span className="gradient-gold-text">Drives Us</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="glass-light rounded-xl p-8 hover:border-gold-400/30 transition-all duration-400 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-white font-[var(--font-heading)] mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-white mb-6">
            Ready to <span className="gradient-gold-text">Experience Premium</span> Travel?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Book Now</Link>
            <a href="https://wa.me/94719593100" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
