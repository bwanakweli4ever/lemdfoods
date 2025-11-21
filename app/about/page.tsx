"use client";

import Image from "next/image";
import { Leaf, Globe, Truck, Star, ShieldCheck, Clock3, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar - Contact Info (shared) */}
      <div className="text-white py-2" style={{ background: '#085078', backgroundImage: 'linear-gradient(to right, #085078, #85d8ce)' }}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +1 (945) 284-5679
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              info@lemdfoods.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">Currency: USD</span>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/10 rounded text-xs">USD</span>
              <span className="px-2 py-1 bg-white/10 rounded text-xs">EUR</span>
              <span className="px-2 py-1 bg-white/10 rounded text-xs">GBP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (shared) */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" aria-label="Lem-D Foods - Home">
                <Image
                  src="/images/lemd_logo.png"
                  alt="Lem-D Foods - Tropical Foods, Spices & Beverages"
                  width={170}
                  height={60}
                  className="rounded-lg"
                  priority
                />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap text-sm md:text-base">
              <a href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</a>
              <a href="/#products" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Products</a>
              <a href="/#countries" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Countries</a>
              <a href="/#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200">About Us</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Organic foods. Wholesale logistics. Family values.</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">Lem-D Foods partners directly with trusted farmers across Africa, the Caribbean, and Asia to supply premium, affordable products in bulk—delivered with speed and care across the USA.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4 flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /><span>100% Organic</span></div>
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4 flex items-center gap-2"><Globe className="h-4 w-4 text-emerald-600" /><span>Multi‑region sourcing</span></div>
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-gray-200 p-4 flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-600" /><span>Wholesale nationwide</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Story card */}
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">Lem-D Foods is a proud family-owned company dedicated to delivering high-quality, affordable products directly from trusted farmers across tropical regions of Africa, the Caribbean, and Asia.</p>
             <p className="mt-3 text-gray-700 leading-relaxed">Founded in 2022 on strong family values, we’ve grown through strategic partnerships with businesses and industry experts—embracing innovation while keeping our community at heart.</p>
            </div>

            {/* Mission card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
             <p className="opacity-95 leading-relaxed">Reliable supply of a wide variety of top-quality, low-cost products delivered to your doorstep in a timely manner.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Clock3 className="h-4 w-4" />Same-day delivery within 500 miles of Dallas HQ</li>
                <li className="flex items-center gap-2"><Clock3 className="h-4 w-4" />3-day delivery for 501–1000 miles</li>
                <li className="flex items-center gap-2"><Truck className="h-4 w-4" />Nationwide distribution to all 50 states</li>
              </ul>
            </div>

            {/* Values card */}
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Core Values</h2>
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                <li><span className="font-medium">Customer Satisfaction</span> — customers first.</li>
                <li><span className="font-medium">Accountability</span> — we keep our promises.</li>
                <li><span className="font-medium">Trust</span> — honest, long-term relationships.</li>
                <li><span className="font-medium">Innovation</span> — always improving.</li>
                <li><span className="font-medium">Community & Sustainability</span> — giving back and growing together.</li>
              </ul>
            </div>
          </div>

          {/* Community + Leadership */}
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Community Impact</h2>
              <p className="text-gray-700 leading-relaxed">Through the Lem-D Foundation in Cameroon, we support initiatives that uplift local communities, create opportunities, and promote sustainable development.</p>
            </div>
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h2>
              <p className="text-gray-700 leading-relaxed">We continually raise the bar on products and services to meet evolving customer needs across the USA.</p>
            </div>
          </div>

          {/* Leadership highlight */}
          <div className="mt-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white shadow-sm ring-1 ring-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h2>
            <p className="text-gray-700 leading-relaxed">Lem-D Foods is led by <span className="font-medium">Stephen Che</span>, Manager and CEO, guiding the company with passion, vision, and a commitment to excellence.</p>
          </div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-4 text-center"><p className="text-2xl font-bold text-gray-900">2022</p><p className="text-xs text-gray-500">Founded</p></div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-4 text-center"><p className="text-2xl font-bold text-gray-900">50+</p><p className="text-xs text-gray-500">States Served</p></div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-4 text-center"><p className="text-2xl font-bold text-gray-900">3‑Day</p><p className="text-xs text-gray-500">Delivery (up to 1000mi)</p></div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-4 text-center"><p className="text-2xl font-bold text-gray-900">100%</p><p className="text-xs text-gray-500">Organic Focus</p></div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700 transition">Explore Products</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition">Contact Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}


