'use client';

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs uppercase tracking-[0.35em] text-emerald-700/80"
              >
                Partners &amp; Licenses
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl font-semibold text-slate-900"
              >
                Verified licensing and partner trust signals for buyers.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-800 max-w-2xl"
              >
                This page is designed so buyers can confidently share compliance proof. It shows our Uganda Minerals &amp; Mining license, audit partners, and shipping credentials.
              </motion.p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Licensed by', value: 'Uganda Minerals & Mining' },
                  { label: 'Standards', value: 'OECD & ISO-aligned processes' },
                  { label: 'Logistics', value: 'Insured and audited freight partners' },
                  { label: 'Document access', value: 'Download licence and certification details' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">{item.label}</p>
                    <p className="mt-3 text-sm text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-3xl border border-amber-200/70 bg-slate-950 text-white shadow-lg"
            >
              <img
                src="/law.png"
                alt="Uganda Minerals & Mining license scan"
                className="h-[440px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-slate-950/95">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">License scan</p>
                <h2 className="mt-4 text-2xl font-semibold">Uganda Minerals &amp; Mining Licensed Operator</h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Buyers should screenshot this page and share it with compliance teams during purchase evaluation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: 'Assay Services', file: '/partners/as.png', description: 'Trusted assay and testing verification for buyers.' },
            { name: 'ISO Certified Labs', file: '/partners/iso.png', description: 'Independent lab partners for purity testing and reporting.' },
            { name: 'Ministry Authorization', file: '/partners/moe-sm-1.png', description: 'Ugandan regulatory and mining authority validation.' },
          ].map((logo) => (
            <div key={logo.name} className="rounded-3xl border border-amber-200/70 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50">
                <img src={logo.file} alt={logo.name} className="max-h-16 max-w-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{logo.name}</h3>
              <p className="mt-3 text-sm text-slate-700">{logo.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#faf8f2] py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">For compliance teams</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">A clean, screenshot-ready credibility page</h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">Make it easy for buyers to share proof of licensing, audit standards, and shipping partners with internal compliance and legal teams.</p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800 transition">
            Start account onboarding
          </a>
        </div>
      </section>
    </main>
  );
}
