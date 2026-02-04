import Header from '@/app/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden">
        <div className="hero-slideshow">
          <div className="hero-slide hero-slide-1" aria-hidden="true" />
          <div className="hero-slide hero-slide-2" aria-hidden="true" />
          <div className="hero-slide hero-slide-3" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-300/70">
              Responsible Gold Trading
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Premium gold supply from Uganda and Congo, delivered with full traceability.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              We connect verified mining partners to global buyers, providing certified gold products, secure logistics,
              and compliance-first documentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/products" className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition">
                View Products
              </a>
              <a href="/about" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-amber-300/60 transition">
                Our Operations
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Purity", value: "99.5%+", desc: "Lab-tested bar & dust" },
                { label: "Compliance", value: "100%", desc: "Traceable documentation" },
                { label: "Logistics", value: "48-72h", desc: "Secure export readiness" },
                { label: "Supply", value: "50kg+", desc: "Monthly capacity" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-amber-200">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/80 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Our Footprint</p>
            <h2 className="mt-4 text-2xl font-semibold">Operations across East & Central Africa</h2>
            <p className="mt-4 text-slate-300">
              We operate through vetted partners in Uganda and Congo, ensuring ethical practices and community impact.
            </p>
          </div>
          {[
            { title: "Kampala HQ", detail: "Client services, compliance, logistics" },
            { title: "Field Sites", detail: "Partner mines with on-site verification" },
          ].map((site) => (
            <div key={site.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-amber-200">{site.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{site.detail}</p>
              <a href="/about" className="mt-6 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Operations in focus</p>
            <h2 className="mt-3 text-3xl font-semibold">On-the-ground visuals</h2>
          </div>
          <a href="/contact" className="text-sm font-semibold text-amber-200 hover:text-amber-100">
            Request sourcing details →
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Gold refining",
              src: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?_gl=1*jij8cl*_ga*MTA4OTYyNTc3LjE3NzAyMzY2MTM.*_ga_8JE65Q40S6*czE3NzAyMzcxNDkkajM3JGwwJGgw",
              description: "Controlled smelting with assay oversight and secure handling.",
            },
            {
              label: "Field operations",
              src: "https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?_gl=1*1lyzlep*_ga*MTA4OTYyMTc3LjE3NzAyMzY2MTM.*_ga_8JE65Q40S6*czE3NzAyMzY2MTMkbzEkZzEkdDE3NzAyMzcyNjckajU5JGwwJGgw",
              description: "On-site inspections, partner coordination, and custody tracking.",
            },
            {
              label: "Mineral sourcing",
              src: "https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?_gl=1*g5f2m0*_ga*MTA4OTYyMTc3LjE3NzAyMzY2MTM.*_ga_8JE65Q40S6*czE3NzAyMzY2MTMkbzEkZzEkdDE3NzAyMzczNjkkajIzJGwwJGgw",
              description: "Verified mineral lots with documented origin and logistics.",
            },
          ].map((item) => (
            <div key={item.label} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={item.src}
                alt={`Victoria Gold ${item.label}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Compliance & assurance</p>
            <h2 className="mt-4 text-3xl font-semibold">Built for institutional buyers</h2>
            <p className="mt-4 text-slate-300">
              Our processes emphasize traceability, independent verification, and export-ready documentation.
              Every shipment is prepared with custody records, assay reports, and logistics coordination.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-2">Assay certificates</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Origin verification</span>
              <span className="rounded-full border border-white/10 px-3 py-2">KYC-ready files</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Secure logistics</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-amber-200">How orders are fulfilled</h3>
            <ol className="mt-6 space-y-4 text-sm text-slate-300">
              <li>1. Confirm specifications and volume requirements.</li>
              <li>2. Complete compliance review and documentation pack.</li>
              <li>3. Arrange inspection, assay, and packing.</li>
              <li>4. Dispatch with insured logistics and tracking.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Buyer feedback</p>
          <h2 className="mt-4 text-3xl font-semibold">Trusted by established traders</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "Victoria Gold provided 500kg of certified bars on schedule. Their documentation was flawless and the logistics were seamless.",
              author: "Ahmed K.",
              title: "Gold Importer, Dubai",
              volume: "500kg order",
            },
            {
              quote: "As a jewelry manufacturer, I needed verified sourcing. Their compliance package saved us months of due diligence.",
              author: "Maria S.",
              title: "Refinery Manager, Europe",
              volume: "250kg order",
            },
            {
              quote: "Fast turnaround, competitive pricing, and honest communication. We've already placed a second order.",
              author: "James M.",
              title: "Precious Metals Dealer, UK",
              volume: "150kg order",
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-300">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-300 italic">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-amber-200">{testimonial.author}</p>
                <p className="text-xs text-slate-400">{testimonial.title}</p>
                <p className="mt-2 text-xs text-amber-300/70 font-medium">{testimonial.volume}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resources Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-slate-900/50 p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Resources</p>
            <h2 className="mt-3 text-2xl font-semibold">Download our product specifications</h2>
            <p className="mt-2 text-slate-300">Browse full specifications, purity details, and current pricing for all product forms.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Product Spec Sheet", file: "Victoria_Gold_Spec_Sheet.pdf" },
              { name: "Current Price List", file: "Victoria_Gold_Pricing.pdf" },
              { name: "Compliance Guide", file: "Victoria_Gold_Compliance.pdf" },
            ].map((doc) => (
              <a
                key={doc.file}
                href={`/api/download?file=${doc.file}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <svg className="h-5 w-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-amber-200">{doc.name}</p>
                  <p className="text-xs text-slate-400">PDF</p>
                </div>
                <svg className="ml-auto h-4 w-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Responsible sourcing</p>
            <h3 className="mt-4 text-2xl font-semibold">Ethics-first procurement</h3>
            <p className="mt-4 text-slate-300">
              We verify origin, ensure compliance with local regulations, and maintain documented custody chains.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Buyer confidence</p>
            <h3 className="mt-4 text-2xl font-semibold">Secure transactions & delivery</h3>
            <p className="mt-4 text-slate-300">
              Dedicated account managers coordinate inspection, packing, and insured export logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-400 to-amber-300 py-14 text-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold">Ready for a verified gold supply partner?</h3>
            <p className="mt-2 text-sm text-slate-800">Talk with our team about quantities, pricing, and compliance requirements.</p>
          </div>
          <a href="/contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-amber-200 hover:bg-slate-900 transition">
            Contact our team
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 text-amber-300">
                VG
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">Victoria Gold</p>
                <p className="text-xs text-slate-500">Uganda • Congo</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Premium gold supply with verified sourcing, compliance documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-amber-300 transition">About us</a></li>
              <li><a href="/products" className="hover:text-amber-300 transition">Products</a></li>
              <li><a href="/compliance" className="hover:text-amber-300 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-amber-300 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-amber-300 transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@victoriagold.ac.ug" className="hover:text-amber-300 transition">info@victoriagold.ac.ug</a></li>
              <li><a href="tel:+256704833021" className="hover:text-amber-300 transition">+256 (0) 704 833 021</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2024 Victoria Gold. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
