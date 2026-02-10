'use client';

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function Compliance() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Compliance</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl text-slate-900">Documentation buyers can rely on</h1>
        <p className="mt-4 text-lg text-slate-800 max-w-3xl">
          We prepare complete compliance packs for every shipment to support regulatory review, KYC requirements,
          and internal risk controls.
        </p>
      </section>

      {/* Compliance Pillars Section - New 2x2 Grid Design */}
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
                COMPLIANCE FRAMEWORK
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Built on transparency, verification, and regulatory alignment.
              </h2>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
              >
                Review Our Standards
              </motion.a>
            </motion.div>

            {/* Right Side - 2x2 Grid of Compliance Cards */}
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
                <div className="w-12 h-12 mb-4 text-amber-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  KYC Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Buyer due diligence support and compliance-ready files for regulatory review.
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
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Origin Verification
                </h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  Verified sourcing records and partner documentation for each lot.
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
                  Complete Documentation
                </h3>
                <p className="text-sm text-amber-50 leading-relaxed">
                  Full compliance packs with custody chain, export papers, and audit trails.
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Regulatory Alignment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  OECD-aligned standards and international trade compliance protocols.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        <p className="col-span-full text-xs uppercase tracking-[0.35em] text-amber-700/80 mb-4">Additional Services</p>
        {[
          {
            title: "Origin Verification",
            body: "Verified sourcing records and partner documentation for each lot.",
          },
          {
            title: "Assay Reports",
            body: "Independent lab testing to confirm purity and weight.",
          },
          {
            title: "Custody Chain",
            body: "Documented handling from collection to export delivery.",
          },
          {
            title: "KYC Support",
            body: "Buyer due diligence support and compliance-ready files.",
          },
          {
            title: "Export Compliance",
            body: "Documentation aligned with regional and international export requirements.",
          },
          {
            title: "Insured Logistics",
            body: "Secure logistics options with tracking and coverage.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-amber-200/70 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-800">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-amber-200/60 bg-[#faf8f2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">Required buyer documentation</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200/70 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Standard pack</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                <li>• Assay certificate</li>
                <li>• Origin declaration</li>
                <li>• Packing list & invoice</li>
                <li>• Logistics manifest</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200/70 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Buyer KYC</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                <li>• Company registration</li>
                <li>• Beneficial ownership</li>
                <li>• Compliance contact</li>
                <li>• Banking and payment details</li>
              </ul>
            </div>
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
