'use client';

import { motion } from 'framer-motion';
import ProductHeader from '@/app/components/ProductHeader';

export default function Process() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <ProductHeader />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">
          Process
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          From inquiry to delivery
        </h1>

        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          A structured, transparent workflow designed to reduce risk and ensure
          compliance at every stage.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-sm">
          <img
            src="/man-pouring-melted-metal-workshop-large.jpg"
            alt="Operations"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-amber-200/60 bg-gradient-to-br from-slate-50 to-amber-50/30 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 mb-4">
                How it works
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Secure, compliant gold transactions in four steps.
              </h2>

              <p className="mt-4 text-sm text-slate-600 max-w-md">
                Every transaction follows a structured path to ensure transparency,
                legal compliance, and delivery assurance.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition"
              >
                Start your order →
              </motion.a>
            </motion.div>

            {/* RIGHT - STEPS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  id: '01',
                  title: 'Requirements & pricing',
                  desc: 'Define quantity, purity, and delivery requirements to receive a formal quote.',
                },
                {
                  id: '02',
                  title: 'Compliance review',
                  desc: 'KYC verification, buyer approval, and regulatory alignment.',
                },
                {
                  id: '03',
                  title: 'Assay & verification',
                  desc: 'Independent testing confirms gold purity and weight.',
                },
                {
                  id: '04',
                  title: 'Secure logistics',
                  desc: 'Insured shipping, export documentation, and delivery tracking.',
                },
              ].map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-amber-200/70 bg-white p-7 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                      {step.id}
                    </div>
                    <div className="h-px flex-1 bg-amber-100 group-hover:bg-amber-200 transition" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="bg-[#faf8f2] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Logistics options
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              'Insured air cargo',
              'Secure ground transfer',
              'Escorted delivery',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-amber-200/70 bg-white p-6 text-sm text-slate-700 shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (unchanged, just slightly cleaner spacing) */}
      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src="/Logo.png" alt="Logo" className="h-12" />
            <p className="mt-4 text-sm text-slate-700">
              Premium gold supply with verified sourcing and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/about">About</a></li>
              <li><a href="/products">Services</a></li>
              <li><a href="/compliance">Compliance</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Kampala, Uganda</li>
              <li>info@diamondcapitalafrica.com</li>
              <li>+256 704 833 021</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
              Compliance
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab verification</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-600 flex justify-between">
          <p>© 2026 Diamond Capital Africa</p>
          <p>Uganda • Global delivery</p>
        </div>
      </footer>
    </main>
  );
}