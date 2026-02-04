'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: '24k-bars',
      name: '24K Pure Gold Bars',
      purity: '99.9%',
      origin: 'Uganda',
      pricing: '$65/gram',
      weight: '1kg & 5kg bars',
      description: 'Investment-grade pure gold bars with lab certification.',
      features: ['Lab-tested', 'Certified weight', 'Insured transit', 'Document bundle'],
    },
    {
      id: '22k-bars',
      name: '22K Gold Bars',
      purity: '91.67%',
      origin: 'Uganda & Congo',
      pricing: '$62/gram',
      weight: '1kg & 5kg bars',
      description: 'High-purity alloyed bars suitable for fabrication.',
      features: ['Consistent alloy', 'Competitive pricing', 'Rapid delivery', 'Batch certs'],
    },
    {
      id: 'gold-dust',
      name: 'Gold Dust',
      purity: '99.5%+',
      origin: 'Uganda',
      pricing: '$60/gram',
      weight: 'Bulk quantities',
      description: 'Fine gold powder for jewelry fabrication and industrial use.',
      features: ['High purity', 'Bulk discounts', 'Custom grading', 'Export ready'],
    },
    {
      id: 'bulk-raw',
      name: 'Bulk Raw Gold',
      purity: 'Variable',
      origin: 'Uganda & Congo',
      pricing: 'Contact us',
      weight: '50kg+ quantities',
      description: 'Direct sourced raw gold from our mining partners.',
      features: ['Large volume', 'Custom assay', 'Flexible terms', 'Premium pricing'],
    },
    {
      id: 'gold-coins',
      name: 'Gold Coins',
      purity: '99.99%',
      origin: 'Uganda',
      pricing: '$70/gram equiv.',
      weight: '1oz, 5oz sizes',
      description: 'Certified investment and collectible gold coins.',
      features: ['Numismatic grade', 'Certificate included', 'Secure packaging', 'Authentication'],
    },
    {
      id: 'gold-powder',
      name: 'Gold Powder',
      purity: '99.5%',
      origin: 'Congo',
      pricing: '$58/gram',
      weight: 'Custom quantities',
      description: 'Finely processed gold powder for electronics and refining.',
      features: ['Custom mesh size', 'Bulk delivery', 'Industrial spec', 'Quality assurance'],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Our catalog</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Verified gold products for every requirement.
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Lab-tested, certified, and ready for immediate fulfillment.
        </p>
        <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Purity range</p>
            <p className="mt-2 text-amber-200">91.67% - 99.99%</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Forms</p>
            <p className="mt-2 text-amber-200">Bars, dust, powder, coins</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Availability</p>
            <p className="mt-2 text-amber-200">48-72h dispatch</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Documentation</p>
            <p className="mt-2 text-amber-200">Assay + custody pack</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-amber-400/40 hover:bg-white/[0.08]"
          >
            <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr]">
              <div>
                <h3 className="text-2xl font-semibold text-amber-200">{product.name}</h3>
                <p className="mt-2 text-slate-300">{product.description}</p>

                <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Purity</p>
                    <p className="mt-2 text-sm font-semibold text-amber-300">{product.purity}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Origin</p>
                    <p className="mt-2 text-sm font-semibold text-amber-300">{product.origin}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Weight</p>
                    <p className="mt-2 text-sm font-semibold text-amber-300">{product.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Pricing</p>
                    <p className="mt-2 text-sm font-semibold text-amber-300">{product.pricing}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Features</p>
                  <ul className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1 text-xs text-amber-200"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-between md:col-span-2">
                <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-300/70">Available</p>
                  <p className="mt-3 text-lg font-semibold text-amber-200">In stock</p>
                  <p className="mt-2 text-xs text-slate-400">48-72h delivery available</p>
                </div>

                <button
                  onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                  className="mt-4 rounded-full border border-amber-400/60 bg-amber-400/5 px-4 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10 hover:border-amber-300/80"
                >
                  {selectedProduct === product.id ? 'Hide details' : 'Request Quote'}
                </button>
              </div>
            </div>

            {selectedProduct === product.id && (
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-300 mb-4">
                  Contact our team for current pricing, bulk discounts, and delivery terms:
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <p>
                    <span className="text-amber-300">Email:</span> <a href="mailto:info@victoriagold.ac.ug" className="text-slate-400 hover:text-amber-300">info@victoriagold.ac.ug</a>
                  </p>
                  <p>
                    <span className="text-amber-300">Phone:</span> <a href="tel:+256704833021" className="text-slate-400 hover:text-amber-300">+256 (0) 704 833 021</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="bg-gradient-to-r from-amber-400 to-amber-300 py-14 text-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold">Need a custom specification?</h3>
            <p className="mt-2 text-sm text-slate-800">We can source and prepare gold to your exact requirements.</p>
          </div>
          <a href="/contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-amber-200 hover:bg-slate-900 transition">
            Request a formal quote
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
