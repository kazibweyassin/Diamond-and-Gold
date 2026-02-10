'use client';

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function Process() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Start an order', href: '/contact' }} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Process</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl text-slate-900">From inquiry to delivery</h1>
        <p className="mt-4 text-lg text-slate-800 max-w-3xl">
          Our process is built to reduce buyer risk and ensure compliance at every stage.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-sm">
          <img
            src="/man-pouring-melted-metal-workshop-large.jpg"
            alt="Diamond Capital Africa operations"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

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
                HOW IT WORKS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                A structured process for secure, compliant gold transactions.
              </h2>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
              >
                Start Your Order
              </motion.a>
            </motion.div>

            {/* Right Side - 2x2 Grid of Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Step 1 - White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Requirements & pricing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Share quantity, form factor, purity, and delivery needs to receive a formal quote.
                </p>
              </motion.div>

              {/* Step 2 - Red */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-red-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/20 text-white font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Compliance review
                </h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  We align on KYC documentation, buyer approvals, and regulatory checks.
                </p>
              </motion.div>

              {/* Step 3 - Amber */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-amber-500 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/20 text-white font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Assay & verification
                </h3>
                <p className="text-sm text-amber-50 leading-relaxed">
                  Independent testing confirms purity and weight before packing.
                </p>
              </motion.div>

              {/* Step 4 - White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 font-bold text-lg">
                  04
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Secure logistics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We coordinate insured transport, export documentation, and tracking updates.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200/60 bg-[#faf8f2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">Logistics options</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Insured air cargo",
              "Secure ground transfer",
              "Escorted delivery",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-amber-200/70 bg-white p-6 text-sm text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
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
