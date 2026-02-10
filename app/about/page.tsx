'use client';

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Speak to us', href: '/contact' }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
              Established in Uganda
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-slate-900">
            Building trust through transparent gold trading.
          </h1>
          <p className="mt-6 text-xl text-slate-800 leading-relaxed">
            Diamond Capital Africa connects responsible gold miners with global buyers through ethical sourcing,
            comprehensive compliance, and secure logistics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">About us</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Integrity-led gold trading for global buyers.</h1>
            <p className="mt-6 text-lg text-slate-800">
              Diamond Capital Africa is based in Kampala, Uganda, with verified partners in Uganda and Congo. We supply
              certified gold products with full documentation, quality checks, and secure logistics.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
            <p className="mt-4 text-slate-800">
              Provide premium gold products while protecting communities, complying with regulations, and
              promoting transparent trade practices.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-800">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <span>Traceability</span>
                <span className="text-amber-700">End-to-end</span>
              </div>
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
                <span>Compliance</span>
                <span className="text-amber-700">Documented</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Quality Control</span>
                <span className="text-amber-700">Lab verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-br from-slate-50 to-amber-50/30 py-20 border-y border-amber-200/60">
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
                OUR PRINCIPLES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Values that guide every transaction and partnership.
              </h2>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
              >
                Partner With Us
              </motion.a>
            </motion.div>

            {/* Right Side - 2x2 Grid of Value Cards */}
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Integrity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Honest communication and transparent operations in every transaction.
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
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Compliance First
                </h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  Full adherence to international gold trading standards and regulations.
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Ethical Sourcing
                </h3>
                <p className="text-sm text-amber-50 leading-relaxed">
                  Verified origin, community respect, and environmental responsibility.
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
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Professional Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated account management and responsive customer support.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Field gallery</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Operations across mines and minerals</h2>
          </div>
          <a href="/contact" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
            Request site visit info →
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "gold",
              src: "https://images.unsplash.com/photo-1624365168056-daf44387e2ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "mine",
              src: "/man-pouring-melted-metal-workshop-large.jpg",
            },
            {
              label: "minerals",
              src: "https://images.pexels.com/photos/34522438/pexels-photo-34522438.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ].map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-sm">
              <img
                src={item.src}
                alt={`Diamond Capital Africa ${item.label}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700">{item.label}</p>
                <p className="mt-2 text-sm text-slate-800">On-site visibility and documented custody.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-amber-200/60 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Regulatory alignment</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Compliance-ready documentation</h2>
              <p className="mt-4 text-slate-800">
                We prepare full documentation packs for buyers, including origin verification, assay reports,
                and shipment custody records to support due diligence and regulatory requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Certification badges</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Assay certified",
                  "Origin verified",
                  "Custody documented",
                  "KYC-ready",
                  "Export compliant",
                  "Insured logistics",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-amber-200/70 bg-white px-3 py-2 text-xs text-amber-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200/60 bg-[#faf8f2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Responsible sourcing",
                body: "We verify mining partners, ensure lawful procurement, and maintain documentation at every stage.",
              },
              {
                title: "Verified supply",
                body: "Gold is tested for purity and accompanied by compliance and export-ready documentation.",
              },
              {
                title: "Buyer support",
                body: "Dedicated account managers coordinate inspections, logistics, and secure delivery.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-200/70 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm text-slate-800">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Operating standards</h2>
            <p className="mt-4 text-slate-800">
              Our procedures align with international trading standards, local regulations, and ethical sourcing
              initiatives to ensure safe and compliant operations.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-800">
              <li>• Origin verification and custody tracking</li>
              <li>• Independent purity testing</li>
              <li>• Export readiness and logistics compliance</li>
              <li>• Community engagement and environmental awareness</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Operational highlights</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-800">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Kampala hub</p>
                <p className="mt-2">Client services, compliance checks, and logistics coordination.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Field verification</p>
                <p className="mt-2">On-site inspections with partner mine operations and custody documentation.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Global delivery</p>
                <p className="mt-2">Secure shipping options aligned to buyer requirements and timelines.</p>
              </div>
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
              <li><a href="/faq" className="hover:text-amber-700 transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
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
