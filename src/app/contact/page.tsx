"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", date: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const text = `*New Booking Request*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Vehicle:* ${form.vehicle}%0A*Date:* ${form.date}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/94719593100?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="section-label mb-3 animate-fade-in-down">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-5 animate-fade-in-up">
            Book Your <span className="gradient-gold-text">Journey</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Fill out the form below and we&apos;ll get back to you instantly via WhatsApp.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-3 reveal">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white font-[var(--font-heading)] mb-2">Booking Form</h2>
              <p className="text-gray-400 text-sm mb-8">Fill in your details and we&apos;ll send you a quote via WhatsApp.</p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  ✓ Your request has been sent! We&apos;ll contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-300 mb-2 block">Full Name *</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} className="input-premium" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm text-gray-300 mb-2 block">Phone Number *</label>
                  <input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-premium" placeholder="+94 71 234 5678" />
                </div>
                <div>
                  <label htmlFor="vehicle" className="text-sm text-gray-300 mb-2 block">Vehicle Type *</label>
                  <select id="vehicle" required value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className="input-premium">
                    <option value="">Select a vehicle</option>
                    <option>Rosa Bus (AC)</option>
                    <option>Rosa Bus (Non-AC)</option>
                    <option>Luxury Coach</option>
                    <option>Dolphin Van (AC)</option>
                    <option>Dolphin Van (Non-AC)</option>
                    <option>KDH Van (AC)</option>
                    <option>Premium Sedan</option>
                    <option>Luxury SUV</option>
                    <option>Wedding Car</option>
                    <option>Cargo Lorry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="text-sm text-gray-300 mb-2 block">Travel Date *</label>
                  <input id="date" type="date" required value={form.date} onChange={(e) => update("date", e.target.value)} className="input-premium" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">Message</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="input-premium resize-none" placeholder="Tell us about your trip (pickup location, destination, special requirements...)" />
                </div>
                <button type="submit" className="btn-gold w-full text-base mt-2">Send Booking Request</button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6 reveal-right">
            {/* Phone card */}
            <div className="glass-gold rounded-xl p-6">
              <h3 className="text-lg font-bold text-white font-[var(--font-heading)] mb-4">Call Us</h3>
              <a href="tel:+94719593100" className="flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors text-lg font-semibold">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +94 71 959 3100
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="glass-light rounded-xl p-6 border-green-500/20">
              <h3 className="text-lg font-bold text-white font-[var(--font-heading)] mb-4">WhatsApp</h3>
              <a href="https://wa.me/94719593100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors font-semibold">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.763-6.26-2.055a.75.75 0 00-.63-.123l-3.15 1.056 1.056-3.15a.75.75 0 00-.123-.63A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Chat on WhatsApp
              </a>
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
            </div>

            {/* Location card */}
            <div className="glass-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-white font-[var(--font-heading)] mb-4">Location</h3>
              <div className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-gold-400/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <div>
                  <p className="font-medium">Sri Lanka</p>
                  <p className="text-gray-500 text-sm mt-1">Island-wide service coverage</p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="glass-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-white font-[var(--font-heading)] mb-4">Operating Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300"><span>Mon – Sat</span><span className="text-gold-400">6:00 AM – 10:00 PM</span></div>
                <div className="flex justify-between text-gray-300"><span>Sunday</span><span className="text-gold-400">7:00 AM – 9:00 PM</span></div>
                <div className="flex justify-between text-gray-300"><span>Airport Transfers</span><span className="text-green-400">24/7</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
