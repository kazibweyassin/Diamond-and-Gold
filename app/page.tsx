export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 text-amber-300">
              VG
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">Victoria Gold</p>
              <p className="text-xs text-slate-400">Uganda • Congo</p>
            </div>
          </div>
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <li><a href="/" className="hover:text-amber-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-amber-300 transition">About</a></li>
            <li><a href="/products" className="hover:text-amber-300 transition">Products</a></li>
            <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
          </ul>
          <a
            href="/contact"
            className="rounded-full border border-amber-400/60 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10"
          >
            Request Quote
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.15),_transparent_55%)]" />
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
              <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@victoriagold.ac.ug" className="hover:text-amber-300 transition">info@victoriagold.ac.ug</a></li>
              <li><a href="tel:+256123456789" className="hover:text-amber-300 transition">+256 (0) 123 456 789</a></li>
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
