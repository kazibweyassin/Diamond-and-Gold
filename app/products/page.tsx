'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const services = [
    {
      id: 'gold-sourcing',
      name: 'Gold Buying & Sourcing',
      coverage: 'Uganda & Congo',
      turnaround: '7-14 days',
      documentation: 'KYC + custody pack',
      terms: 'NDA available',
      description: 'Direct sourcing from verified partners with transparent documentation.',
      features: ['Verified origin', 'Pre-screened supply', 'Chain-of-custody', 'Volume capacity'],
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'gold-export',
      name: 'Gold Sales & Export',
      coverage: 'Global delivery',
      turnaround: '48-72h dispatch',
      documentation: 'Export-ready files',
      terms: 'Buyer escrow options',
      description: 'Structured export coordination with insured logistics and delivery timelines.',
      features: ['Custom packing', 'Secure dispatch', 'Buyer updates', 'Regulated routing'],
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'assay-coordination',
      name: 'Assay & Testing Coordination',
      coverage: 'Certified labs',
      turnaround: '24-72h results',
      documentation: 'Assay certificates',
      terms: 'Independent verification',
      description: 'Third-party purity verification arranged with accredited laboratories.',
      features: ['XRF testing', 'Independent labs', 'Digital reports', 'Buyer-ready files'],
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'logistics-shipping',
      name: 'Logistics & Shipping',
      coverage: 'Air & ground',
      turnaround: '48-72h dispatch',
      documentation: 'Insurance + tracking',
      terms: 'Insured transport',
      description: 'Secure delivery options with full tracking and insured handling.',
      features: ['Secure custody', 'Insured routes', 'Live tracking', 'Delivery SLAs'],
      image: 'https://images.pexels.com/photos/4246091/pexels-photo-4246091.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'compliance-docs',
      name: 'Compliance & Documentation',
      coverage: 'Regulatory ready',
      turnaround: '3-5 days',
      documentation: 'Full compliance pack',
      terms: 'Audit support',
      description: 'Structured documentation for origin, KYC, and export compliance.',
      features: ['Origin verification', 'Custody records', 'KYC support', 'Export compliance'],
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'vaulting-storage',
      name: 'Vaulting & Secure Storage',
      coverage: 'Kampala hub',
      turnaround: 'Immediate',
      documentation: 'Access logs',
      terms: 'Short-term holds',
      description: 'Secure storage with documented access and custody tracking.',
      features: ['Controlled access', 'Secure vaults', 'Custody logs', 'Short-term holding'],
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      {/* Hero Section with Image */}
      <section className="relative h-[45vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545873692-64145c8c42ed?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gold trading services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        <div className="relative h-full mx-auto max-w-6xl px-4 flex items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Our services</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-5xl text-slate-900">
              End-to-end gold trading services for institutional buyers.
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              From sourcing to export, we coordinate the full transaction with compliance-first documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 rounded-2xl border border-amber-200/70 bg-white p-6 text-sm text-slate-800 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Coverage</p>
            <p className="mt-2 text-amber-700">Uganda & Congo</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Scope</p>
            <p className="mt-2 text-amber-700">Sourcing, compliance, export</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Dispatch</p>
            <p className="mt-2 text-amber-700">48-72h coordination</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Documentation</p>
            <p className="mt-2 text-amber-700">KYC + custody pack</p>
          </div>
        </div>
      </section>

      {/* Service Highlights Section - 2x2 Grid */}
      <section className="border-y border-amber-200/60 bg-gradient-to-br from-slate-50 to-amber-50/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
            {/* Left Side - Heading & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-red-800/90 mb-6">
                WHY CHOOSE OUR SERVICES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Comprehensive gold solutions backed by expertise and integrity.
              </h2>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
              >
                Request Consultation
              </motion.a>
            </motion.div>

            {/* Right Side - 2x2 Grid of Service Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 - White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-red-700">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Direct Sourcing Network
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Verified partnerships with licensed miners across Uganda and Congo for reliable supply.
                </p>
              </motion.div>

              {/* Card 2 - Red */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-red-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Full Compliance Support
                </h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  Complete documentation packages including KYC, origin verification, and regulatory alignment.
                </p>
              </motion.div>

              {/* Card 3 - Amber */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-amber-500 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Independent Lab Testing
                </h3>
                <p className="text-sm text-amber-50 leading-relaxed">
                  Third-party assay coordination with certified labs for verified purity and weight.
                </p>
              </motion.div>

              {/* Card 4 - White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-slate-900">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Secure Logistics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Insured transport with live tracking and coordinated export delivery worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80 mb-2">Detailed Services</p>
        <h2 className="text-3xl font-semibold text-slate-900 mb-8">Complete service offerings</h2>
        {services.map((service) => (
          <div
            key={service.id}
            className="group rounded-2xl border border-amber-200/70 bg-white overflow-hidden transition hover:border-amber-300 hover:shadow-sm"
          >
            <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <div className="relative h-64 md:h-auto">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-slate-800">{service.description}</p>

                <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Coverage</p>
                    <p className="mt-2 text-sm font-semibold text-amber-700">{service.coverage}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Turnaround</p>
                    <p className="mt-2 text-sm font-semibold text-amber-700">{service.turnaround}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Documentation</p>
                    <p className="mt-2 text-sm font-semibold text-amber-700">{service.documentation}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Terms</p>
                    <p className="mt-2 text-sm font-semibold text-amber-700">{service.terms}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700 mb-3">Features</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1 text-xs text-amber-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setSelectedProduct(service.id === selectedProduct ? null : service.id)}
                  className="mt-6 rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
                >
                  Request service details →
                </button>
                
                {selectedProduct === service.id && (
                  <div className="mt-6 border-t border-amber-200/60 pt-6">
                    <p className="text-sm text-slate-800 mb-4">
                      Contact our team for service scope, timelines, and compliance requirements:
                    </p>
                    <div className="flex flex-col gap-2 text-sm">
                      <p>
                        <span className="text-amber-700">Email:</span> <a href="mailto:info@diamondcapitalafrica.com" className="text-slate-800 hover:text-amber-700">info@diamondcapitalafrica.com</a>
                      </p>
                      <p>
                        <span className="text-amber-700">Phone:</span> <a href="tel:+256704833021" className="text-slate-800 hover:text-amber-700">+256 (0) 704 833 021</a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#faf8f2] py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Need a custom service package?</h3>
            <p className="mt-2 text-sm text-slate-800">We can structure sourcing, compliance, and export around your requirements.</p>
          </div>
          <a href="/contact" className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800 transition">
            Request a formal quote
          </a>
        </div>
      </section>

      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.png" 
                alt="Diamond Capital Africa" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-slate-800">
              Premium gold supply with verified sourcing, compliance documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li><a href="/about" className="hover:text-emerald-700 transition">About us</a></li>
              <li><a href="/products" className="hover:text-emerald-700 transition">Services</a></li>
              <li><a href="/compliance" className="hover:text-emerald-700 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-emerald-700 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-emerald-700 transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-emerald-700 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@diamondcapitalafrica.com" className="hover:text-emerald-700 transition">info@diamondcapitalafrica.com</a></li>
              <li><a href="tel:+256704833021" className="hover:text-emerald-700 transition">+256 (0) 704 833 021</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-700 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2024 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
