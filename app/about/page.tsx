export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
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
            Speak to us
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">About us</p>
            <h1 className="mt-4 text-4xl font-semibold">Integrity-led gold trading for global buyers.</h1>
            <p className="mt-6 text-lg text-slate-300">
              Victoria Gold is based in Kampala, Uganda, with verified partners in Uganda and Congo. We supply
              certified gold products with full documentation, quality checks, and secure logistics.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold text-amber-200">Mission</h2>
            <p className="mt-4 text-slate-300">
              Provide premium gold products while protecting communities, complying with regulations, and
              promoting transparent trade practices.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-400">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Traceability</span>
                <span className="text-amber-200">End-to-end</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Compliance</span>
                <span className="text-amber-200">Documented</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Quality Control</span>
                <span className="text-amber-200">Lab verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/70 py-16">
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
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-amber-200">{item.title}</h3>
                <p className="mt-4 text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Operating standards</h2>
            <p className="mt-4 text-slate-300">
              Our procedures align with international trading standards, local regulations, and ethical sourcing
              initiatives to ensure safe and compliant operations.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>• Origin verification and custody tracking</li>
              <li>• Independent purity testing</li>
              <li>• Export readiness and logistics compliance</li>
              <li>• Community engagement and environmental awareness</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-amber-200">Operational highlights</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Kampala hub</p>
                <p className="mt-2">Client services, compliance checks, and logistics coordination.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Field verification</p>
                <p className="mt-2">On-site inspections with partner mine operations and custody documentation.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Global delivery</p>
                <p className="mt-2">Secure shipping options aligned to buyer requirements and timelines.</p>
              </div>
            </div>
          </div>
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
