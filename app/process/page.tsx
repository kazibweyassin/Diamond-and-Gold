import Header from '@/app/components/Header';

export default function Process() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header cta={{ label: 'Start an order', href: '/contact' }} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Process</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">From inquiry to delivery</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl">
          Our process is built to reduce buyer risk and ensure compliance at every stage.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src="/man-pouring-melted-metal-workshop-large.jpg"
            alt="Victoria Gold operations"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              step: "01",
              title: "Requirements & pricing",
              body: "Share quantity, form factor, purity, and delivery needs to receive a formal quote.",
            },
            {
              step: "02",
              title: "Compliance review",
              body: "We align on KYC documentation, buyer approvals, and regulatory checks.",
            },
            {
              step: "03",
              title: "Assay & verification",
              body: "Independent testing confirms purity and weight before packing.",
            },
            {
              step: "04",
              title: "Secure logistics",
              body: "We coordinate insured transport, export documentation, and tracking updates.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300/70">Step {item.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-amber-200">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/70 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Logistics options</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Insured air cargo",
              "Secure ground transfer",
              "Escorted delivery",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
                {item}
              </div>
            ))}
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
