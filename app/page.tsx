'use client';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header />

      <section className="relative overflow-hidden">
        <div className="hero-slideshow">
          <div className="hero-slide hero-slide-1" aria-hidden="true" />
          <div className="hero-slide hero-slide-2" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Diamond Capital Africa</p>
              <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-900 md:text-6xl">
                Reliable gold trading with complete documentation and export readiness.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-900">
                We coordinate sourcing, assay verification, compliance files, and secure logistics for buyers
                across Africa, the Middle East, and Europe.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/products" className="rounded-full bg-red-700 px-7 py-3 text-sm font-semibold text-white hover:bg-red-800 transition">
                  Explore services
                </a>
                <a href="/contact" className="rounded-full border border-red-700 px-7 py-3 text-sm font-semibold text-red-700 hover:bg-red-50 transition">
                  Request consultation
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200/70 bg-white/80 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Service coverage</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Uganda & Congo supply</h2>
              <p className="mt-4 text-sm text-slate-900">
                Verified partners, independent assay coordination, and export documentation for each shipment.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Purity", value: "99.5%+" },
                  { label: "Compliance", value: "KYC-ready" },
                  { label: "Dispatch", value: "48-72h" },
                  { label: "Capacity", value: "50kg+" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-amber-200/60 bg-amber-50 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-800">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Experience professionalism, security, and success in the gold industry.
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

            {/* Right Side - 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 - White with red icon */}
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Transparent and competitive prices
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Working directly with local artisanal miners enables us to sale at competitive prices thereby cutting costs of middle men.
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
                  Authenticity and legitimacy
                </h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  We possess all the licences necessary to transact in gold in Uganda. All our licenses can be verified with the issuing authorities upon request.
                </p>
              </motion.div>

              {/* Card 3 - Yellow/Amber */}
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
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Professionalism and experience
                </h3>
                <p className="text-sm text-amber-50 leading-relaxed">
                  We combine professionalism and experience to deliver trouble free transaction in gold trade.
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
                  Quality and Timely delivery
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  NGL delivers the ordered products within stipulated time without compromising quality.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200/60 bg-[#faf8f2] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Our Footprint</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">Operations across East & Central Africa</h2>
            <p className="mt-4 text-slate-800">
              We operate through vetted partners in Uganda and Congo, ensuring ethical practices and community impact.
            </p>
          </div>
          {[
            { title: "Kampala HQ", detail: "Client services, compliance, logistics" },
            { title: "Field Sites", detail: "Partner mines with on-site verification" },
          ].map((site) => (
            <motion.div key={site.title} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-amber-200/70 bg-white p-6 shadow-sm hover:shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">{site.title}</h3>
              <p className="mt-3 text-sm text-slate-800">{site.detail}</p>
              <a href="/about" className="mt-6 inline-flex text-sm font-semibold text-amber-700 hover:text-amber-800">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Operations in focus</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">On-the-ground visuals</h2>
          </div>
          <a href="/contact" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
            Request sourcing details →
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Assay coordination",
              src: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=800",
              description: "Independent purity verification arranged with certified labs.",
            },
            {
              label: "Field operations",
              src: "https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=800",
              description: "On-site inspections, partner coordination, and custody tracking.",
            },
            {
              label: "Mineral sourcing",
              src: "https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?auto=compress&cs=tinysrgb&w=800",
              description: "Verified mineral lots with documented origin and logistics.",
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
                <p className="mt-2 text-sm text-slate-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Compliance & assurance</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Built for institutional buyers</h2>
            <p className="mt-4 text-slate-800">
              Our processes emphasize traceability, independent verification, and export-ready documentation.
              Every shipment is prepared with custody records, assay reports, and logistics coordination.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-800">
              <span className="rounded-full border border-amber-200/70 px-3 py-2 bg-white">Assay certificates</span>
              <span className="rounded-full border border-amber-200/70 px-3 py-2 bg-white">Origin verification</span>
              <span className="rounded-full border border-amber-200/70 px-3 py-2 bg-white">KYC-ready files</span>
              <span className="rounded-full border border-amber-200/70 px-3 py-2 bg-white">Secure logistics</span>
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

      {/* Credentials & Certifications */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Compliance & Standards</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Licensed & Verified Operations</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Licensed Trader",
                detail: "Registered gold trading entity in Uganda",
              },
              {
                title: "ISO Certified Labs",
                detail: "Partner assay facilities with international accreditation",
              },
              {
                title: "Export Compliance",
                detail: "Full adherence to OECD due diligence guidelines",
              },
              {
                title: "Insured Logistics",
                detail: "All shipments covered by comprehensive insurance",
              },
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
            <p className="text-slate-900 text-lg">
              All transactions include complete documentation packages: origin certificates, independent assay reports, 
              custody chain records, and export compliance verification.
            </p>
            <a href="/compliance" className="mt-6 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold">
              View our compliance documentation
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Client Success Stories</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">Trusted by Global Gold Traders</h2>
            <p className="mt-4 text-lg text-slate-800">
              See what our clients say about working with Diamond Capital Africa
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Diamond Capital Africa provided 500kg of certified bars on schedule. Their documentation was flawless and the logistics were seamless.",
                author: "Ahmed K.",
                title: "Gold Importer, Dubai",
                volume: "500kg order",
                rating: 5,
              },
              {
                quote: "As a jewelry manufacturer, I needed verified sourcing. Their compliance package saved us months of due diligence.",
                author: "Maria S.",
                title: "Refinery Manager, Europe",
                volume: "250kg order",
                rating: 5,
              },
              {
                quote: "Fast turnaround, competitive pricing, and honest communication. We've already placed a second order.",
                author: "James M.",
                title: "Precious Metals Dealer, UK",
                volume: "150kg order",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700 mb-6">Rated 5/5</p>
                <p className="text-slate-900 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 border-t border-amber-200/60 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-800">{testimonial.title}</p>
                    <p className="mt-1 text-xs text-amber-700 font-medium">Verified {testimonial.volume}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources Section */}
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
              { name: "Current Price List", file: "Diamond_Capital_Africa_Pricing.pdf" },
              { name: "Compliance Guide", file: "Diamond_Capital_Africa_Compliance.pdf" },
            ].map((doc) => (
              <a
                key={doc.file}
                href={`/api/download?file=${doc.file}`}
                className="flex items-center gap-3 rounded-lg border border-amber-200/70 bg-white px-4 py-3 hover:bg-amber-50 transition"
              >
                <svg className="h-5 w-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
                  <p className="text-xs text-slate-800">PDF</p>
                </div>
                <svg className="ml-auto h-4 w-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Industry insights</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Latest gold market news</h2>
          <p className="mt-2 text-slate-800">Stay informed on Uganda's gold industry trends and supply chain updates.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Uganda's Gold Production Reaches Record Levels in 2025",
              date: 'January 2026',
              category: 'Mining',
              excerpt: 'Uganda solidifies its position as Africa\'s leading gold producer with unprecedented output levels.',
            },
            {
              title: 'International Gold Standards Boost Uganda\'s Competitive Edge',
              date: 'December 2025',
              category: 'Compliance',
              excerpt: 'KIMBERLEY PROCESS adoption and conflict-free sourcing enhance investor confidence.',
            },
            {
              title: 'East African Gold Trade Corridor Expands Opportunities',
              date: 'October 2025',
              category: 'Trade',
              excerpt: 'Trade agreements improve export logistics and cross-border gold commerce.',
            },
            {
              title: 'Technology Integration Improves Gold Processing Efficiency',
              date: 'September 2025',
              category: 'Technology',
              excerpt: 'Advanced assay systems and blockchain tracking boost quality standards.',
            },
          ].map((article, idx) => (
            <motion.a key={idx} href="/news" whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-amber-200/70 bg-white p-6 hover:bg-amber-50 hover:shadow-lg transition cursor-pointer block shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                  {article.category}
                </span>
                <span className="text-xs text-slate-800">{article.date}</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{article.title}</h3>
              <p className="mt-2 text-sm text-slate-800">{article.excerpt}</p>
              <p className="mt-4 text-xs font-semibold text-amber-700 hover:text-amber-800">Read full article →</p>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/news" className="inline-block rounded-full border border-amber-500/70 px-6 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-50 transition">
            Read all news articles →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Responsible sourcing</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Ethics-first procurement</h3>
            <p className="mt-4 text-slate-800">
              We verify origin, ensure compliance with local regulations, and maintain documented custody chains.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Buyer confidence</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Secure transactions & delivery</h3>
            <p className="mt-4 text-slate-800">
              Dedicated account managers coordinate inspection, packing, and insured export logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-[#faf8f2] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.12),_transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-700 font-medium">
              Available for Immediate Orders
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            Ready to Source Premium African Gold?
          </h2>
          <p className="mt-6 text-xl text-slate-800">
            Connect with our team to discuss your requirements. We provide complete gold trading services with 
            full transparency, compliance documentation, and secure delivery.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="rounded-full bg-red-700 px-8 py-4 text-base font-semibold text-white hover:bg-red-800 transition">
              Get started today
            </a>
            <a href="/products" className="rounded-full border border-red-700 px-8 py-4 text-base font-semibold text-red-700 hover:bg-red-50 transition">
              View all services
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Direct contact",
                detail: "+256 (0) 704 833 021",
              },
              {
                title: "Email",
                detail: "info@diamondcapitalafrica.com",
              },
              {
                title: "Response time",
                detail: "Within 24 hours",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-amber-200/70 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-700 mb-2">{item.title}</p>
                <p className="font-semibold text-slate-900">{item.detail}</p>
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
