import Header from '@/app/components/Header';

export default function FAQ() {
  const faqs = [
    {
      question: "What minimum order quantities do you support?",
      answer: "We handle both small and bulk orders. Typical bulk shipments start at 50kg, but we can accommodate specific requests.",
    },
    {
      question: "How is purity verified?",
      answer: "Independent assays confirm purity and weight. Certificates are included in every documentation pack.",
    },
    {
      question: "What payment terms are available?",
      answer: "Payment terms are agreed per order, typically through bank transfer and verified banking channels.",
    },
    {
      question: "How fast can you deliver?",
      answer: "Standard dispatch occurs within 48-72 hours after compliance and assay completion.",
    },
    {
      question: "Do you support buyer compliance checks?",
      answer: "Yes. We provide KYC-ready documentation and work with your compliance team to finalize requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header cta={{ label: 'Ask us directly', href: '/contact' }} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">FAQ</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Common buyer questions</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl">
          Answers to the most frequent questions from buyers and compliance teams.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-amber-200">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </div>
          ))}
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
