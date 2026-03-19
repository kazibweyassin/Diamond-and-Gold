'use client';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import GoldTicker from '@/app/components/GoldTicker';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header />

      {/* ── Hero ── */}
      <section className="relative bg-[#fdfbf7] px-12 py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 max-w-6xl mx-auto">
          <div className="flex-1">
            {/* License badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="text-[11px] text-emerald-700 tracking-widest uppercase">
                Uganda minerals &amp; mining licensed operator
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight max-w-2xl mb-5 text-slate-900">
              We source gold from Uganda. Every shipment is verified, documented, and ready to export.
            </h1>

            {/* Sub-copy */}
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-9">
              Tell us what you need. We handle the sourcing, lab testing, paperwork, and
              delivery — so it arrives clean and on time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="https://wa.me/256704833021"
                className="inline-flex items-center gap-2.5 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-6 py-3 rounded-lg no-underline transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.861L.057 23.5l5.79-1.452A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.214-3.716.931.99-3.63-.236-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                </svg>
                Request consultation
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 text-slate-700 text-sm font-semibold px-6 py-3 rounded-lg border border-slate-200 no-underline hover:bg-slate-50 transition"
              >
                Explore services →
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "99.5%+", label: "Purity" },
                { value: "Verified", label: "Uganda licensed" },
                { value: "48–72h", label: "Dispatch" },
                { value: "KYC-ready", label: "Documentation" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-amber-200/70 bg-white p-4 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-1">{label}</div>
                  <div className="text-lg font-bold text-slate-900">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold ticker — no extra wrapper */}
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0 mt-4 md:mt-16">
            <GoldTicker />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white border-b border-amber-200/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">From inquiry to delivery — 4 clear steps</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Submit requirements", body: "Share quantity, form factor, purity, and delivery needs. Receive a formal quote within 24 hours." },
              { step: "02", title: "Compliance review",   body: "We align on KYC documentation, buyer approvals, and regulatory checks before proceeding." },
              { step: "03", title: "Assay & verification", body: "Independent ISO-certified lab testing confirms purity and weight before packing begins." },
              { step: "04", title: "Insured dispatch",    body: "Coordinated export documentation, insured logistics, and real-time tracking to confirmed delivery." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-6">
                <p className="text-4xl font-bold text-amber-300">{item.step}</p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/process" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
              See full process details →
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="border-y border-amber-200/60 bg-gradient-to-br from-slate-50 to-amber-50/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-red-800/90 mb-6">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                We know the mines, hold the licenses, and have done this before. Your paperwork will be clean.
              </h2>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
              >
                Contact Us
              </motion.a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-red-700">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent and competitive prices</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Working directly with local artisanal miners enables us to sell at competitive prices thereby cutting out middlemen.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -4 }}
                className="bg-red-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Authenticity and legitimacy</h3>
                <p className="text-sm text-red-100 leading-relaxed">We're fully licensed to buy and export gold in Uganda. Ask us for the documentation — we'll send it.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ y: -4 }}
                className="bg-amber-500 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professionalism and experience</h3>
                <p className="text-sm text-amber-50 leading-relaxed">Gold trade has a lot of moving parts. We've been doing this long enough to know where things go wrong — and how to stop them.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mb-4 text-slate-900">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality and timely delivery</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Diamond Capital Africa delivers every order on schedule with no compromise on purity, documentation, or custody chain.</p>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-amber-200/60">
            <p className="text-sm text-slate-600">
              Want to invest in Uganda&apos;s gold sector, not just buy from it?{' '}
              <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">
                Invest in Uganda →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Operations visuals ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Operations in focus</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">On-the-ground visuals</h2>
          </div>
          <a href="/contact" className="text-sm font-semibold text-amber-700 hover:text-amber-800">Request sourcing details →</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { label: "Assay coordination", src: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Independent purity verification arranged with certified labs." },
            { label: "Field operations",   src: "https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=800",  description: "On-site inspections, partner coordination, and custody tracking." },
            { label: "Mineral sourcing",   src: "https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Verified mineral lots with documented origin and logistics." },
          ].map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-sm">
              <img src={item.src} alt={`Diamond Capital Africa ${item.label}`} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700">{item.label}</p>
                <p className="mt-2 text-sm text-slate-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Compliance & assurance ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Compliance &amp; assurance</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Built for institutional buyers</h2>
            <p className="mt-4 text-slate-800">Our processes emphasize traceability, independent verification, and export-ready documentation. Every shipment is prepared with custody records, assay reports, and logistics coordination.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-800">
              {["Assay certificates", "Origin verification", "KYC-ready files", "Secure logistics"].map((t) => (
                <span key={t} className="rounded-full border border-amber-200/70 px-3 py-2 bg-white">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How orders are fulfilled</h3>
            <ol className="mt-6 space-y-4 text-sm text-slate-800">
              <li>1. Confirm specifications and volume requirements.</li>
              <li>2. Complete compliance review and documentation pack.</li>
              <li>3. Arrange inspection, assay, and packing.</li>
              <li>4. Dispatch with insured logistics and tracking.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Compliance &amp; Standards</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">What we can show you in writing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Licensed Trader",         detail: "Uganda Minerals & Mining licensed operator — license available to verified buyers on request" },
              { title: "ISO-Certified Assay Labs", detail: "Third-party purity testing via accredited independent facilities — certificates included with every shipment" },
              { title: "OECD Due Diligence",      detail: "Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition" },
              { title: "Insured Logistics",       detail: "Full-value shipment insurance with real-time tracking from dispatch to confirmed delivery" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-amber-200/70 bg-amber-50/40 p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300 mb-4">
                  <span className="text-xs font-semibold text-amber-700">DCA</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-800">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-amber-200/60 bg-[#faf8f2] p-8 text-center">
            <p className="text-slate-900 text-lg">Every order comes with the full paper trail: origin certificate, lab assay report, custody records, and export docs. Nothing missing, nothing you'll have to chase us for.</p>
            <a href="/compliance" className="mt-6 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold">View our compliance documentation →</a>
          </div>
        </div>
      </section>

      {/* ── Why buyers choose us ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Why Buyers Choose Us</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">What you actually get when you order</h2>
            <p className="mt-4 text-lg text-slate-800">Not vague promises — specific things you can check and verify yourself.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "📋", title: "Every document, included",   description: "Origin certificate, assay report, custody records, KYC package — all included. Nothing you'll need to chase us for." },
              { icon: "✓",  title: "Lab-Verified Purity",        description: "We don't self-certify. Every shipment goes through an independent ISO-certified lab. You get the stamped certificate with your order." },
              { icon: "🚚", title: "Insured & Tracked Delivery", description: "Your shipment is insured, tracked, and handled by someone who knows your order and answers your calls." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-8 shadow-sm">
                <p className="mb-4" style={{ fontSize: 28 }}>{item.icon}</p>
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-slate-800 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download resources ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Resources</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Download our service documents</h2>
            <p className="mt-2 text-slate-800">Review specifications, compliance requirements, and pricing guidance.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Product Spec Sheet", file: "Diamond_Capital_Africa_Spec_Sheet.pdf" },
              { name: "Current Price List",  file: "Diamond_Capital_Africa_Pricing.pdf" },
              { name: "Compliance Guide",    file: "Diamond_Capital_Africa_Compliance.pdf" },
            ].map((doc) => (
              <a key={doc.file} href={`/api/download?file=${doc.file}`} className="flex items-center gap-3 rounded-lg border border-amber-200/70 bg-white px-4 py-3 hover:bg-amber-50 transition">
                <svg className="h-5 w-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" /></svg>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
                  <p className="text-xs text-slate-500">PDF</p>
                </div>
                <svg className="ml-auto h-4 w-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Industry insights</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Latest gold market news</h2>
          <p className="mt-2 text-slate-800">Stay informed on Uganda's gold industry trends and supply chain updates.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Uganda's Gold Production Reaches Record Levels in 2025",      date: "January 2026",   category: "Mining",      excerpt: "Uganda solidifies its position as Africa's leading gold producer with unprecedented output levels." },
            { title: "International Gold Standards Boost Uganda's Competitive Edge", date: "December 2025",  category: "Compliance",  excerpt: "KIMBERLEY PROCESS adoption and conflict-free sourcing enhance investor confidence." },
            { title: "East African Gold Trade Corridor Expands Opportunities",       date: "October 2025",   category: "Trade",       excerpt: "Trade agreements improve export logistics and cross-border gold commerce." },
            { title: "Technology Integration Improves Gold Processing Efficiency",   date: "September 2025", category: "Technology",  excerpt: "Advanced assay systems and blockchain tracking boost quality standards." },
          ].map((article, idx) => (
            <motion.a key={idx} href="/news" whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-amber-200/70 bg-white p-6 hover:bg-amber-50 hover:shadow-lg transition cursor-pointer block shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">{article.category}</span>
                <span className="text-xs text-slate-500">{article.date}</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{article.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
              <p className="mt-4 text-xs font-semibold text-amber-700">Read full article →</p>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/news" className="inline-block rounded-full border border-amber-500/70 px-6 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-50 transition">
            Read all news articles →
          </a>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#faf8f2] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-700 font-medium">Available for Immediate Orders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Source certified Ugandan gold — verified, documented, and delivered.
          </h2>
          <p className="mt-6 text-xl text-slate-800">
            Tell us what you need — volume, purity, timeline. We'll come back with a straight quote and answer your questions directly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
            <a href="/contact" className="rounded-full bg-red-700 hover:bg-red-800 px-8 py-4 text-base font-semibold text-white transition">
              Get started today
            </a>
            <a href="/products" className="text-sm font-semibold text-red-700 hover:text-red-800 transition">
              View all services →
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Want to invest in Uganda&apos;s gold sector, not just buy from it?{' '}
            <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-700 hover:underline">
              Invest in Uganda →
            </a>
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Direct contact", detail: "+256 (0) 704 833 021" },
              { title: "Email",          detail: "info@diamondcapitalafrica.com" },
              { title: "Response time",  detail: "Within 24 hours" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-amber-200/70 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">{item.title}</p>
                <p className="font-semibold text-slate-900">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src="/Logo.png" alt="Diamond Capital Africa" className="h-12 w-auto object-contain" />
            <p className="mt-4 text-sm text-slate-600">Gold from Uganda — properly sourced, fully documented, and delivered.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[["About us","/about"],["Services","/products"],["Compliance","/compliance"],["Process","/process"],["FAQ","/faq"],["Contact","/contact"]].map(([label,href]) => (
                <li key={href}><a href={href} className="hover:text-emerald-700 transition">{label}</a></li>
              ))}
              <li><a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition">Investor advisory ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@diamondcapitalafrica.com" className="hover:text-emerald-700 transition">info@diamondcapitalafrica.com</a></li>
              <li><a href="tel:+256704833021" className="hover:text-emerald-700 transition">+256 (0) 704 833 021</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East &amp; Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}