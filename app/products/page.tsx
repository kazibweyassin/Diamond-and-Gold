'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import ProductHeader from '@/app/components/ProductHeader';
import SharedFooter from '@/app/components/SharedFooter';
import { services } from '@/lib/services';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const found = services.find((s) => s.id === hash);
    if (!found) return;
    setSelectedProduct(hash);
    const t = requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <ProductHeader />
      <Hero />
      <Stats />
      <ServicesSection
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <CTA />
      <Footer />
    </main>
  );
}

// ---------------- HERO ----------------
function Hero() {
  return (
    <section className="relative h-[45vh] min-h-[420px] overflow-hidden">
      <img
        src="/Gold-bars.webp"
        alt="Premium certified gold bars and institutional precious metals trading services"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      <div className="relative h-full mx-auto max-w-6xl px-4 flex items-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">
            Our services
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            End-to-end precious metals & mineral services.
          </h1>
          <p className="mt-4 text-lg text-slate-800">
            From sourcing and refining to export and compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <a href="/faq" className="rounded-full border border-emerald-700/20 bg-white/80 px-4 py-2 text-emerald-900 transition hover:bg-white">
              Read FAQs
            </a>
            <a href="/compliance" className="rounded-full border border-amber-600/20 bg-white/80 px-4 py-2 text-amber-800 transition hover:bg-white">
              View compliance docs
            </a>
            <a href="/contact" className="rounded-full bg-emerald-700 px-4 py-2 text-white transition hover:bg-emerald-800">
              Request a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- STATS ----------------
function Stats() {
  const items = [
    { label: 'Coverage', value: 'Uganda, Congo & global' },
    { label: 'Scope', value: 'Full transaction support' },
    { label: 'Dispatch', value: '48–72h coordination' },
    { label: 'Documentation', value: 'KYC & compliance pack' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-4 rounded-2xl border border-amber-200/70 bg-white p-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
              {item.label}
            </p>
            <p className="mt-2 text-amber-700">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------- SERVICES ----------------
function ServicesSection({ selectedProduct, setSelectedProduct }: any) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-semibold mb-10">Service Offerings</h2>

      <div className="space-y-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, selectedProduct, setSelectedProduct }: any) {
  const isOpen = selectedProduct === service.id;

  return (
    <div
      id={service.id}
      className="scroll-mt-20 rounded-2xl border border-amber-200 bg-white overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        <img
          src={service.image}
          alt={service.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-8">
          <h3 className="text-xl font-semibold">{service.name}</h3>
          <p className="mt-2 text-slate-700">{service.description}</p>

          <button
            onClick={() => setSelectedProduct(isOpen ? null : service.id)}
            className="mt-6 bg-amber-600 text-white px-4 py-2 rounded-full"
          >
            Request details
          </button>

          {isOpen && (
            <div className="mt-6 border-t pt-4 text-sm">
              <p>Email: info@diamondcapitalafrica.com</p>
              <p>Phone: +256 704 833 021</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------- CTA ----------------
function CTA() {
  return (
    <section className="bg-[#faf8f2] py-14">
      <div className="mx-auto max-w-6xl px-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Custom service package?</h3>
          <p className="text-sm text-slate-700">We structure deals to your needs.</p>
          <p className="mt-2 text-sm text-slate-600">
            Need answers first? Visit the <a href="/faq" className="underline text-emerald-700">FAQ</a> or review our <a href="/compliance" className="underline text-emerald-700">compliance pack</a>.
          </p>
        </div>
        <a
          href="/contact"
          className="bg-red-700 text-white px-6 py-3 rounded-full"
        >
          Request Quote
        </a>
      </div>
    </section>
  );
}

// ---------------- FOOTER ----------------
function Footer() {
  return <SharedFooter variant="default" />;
}
