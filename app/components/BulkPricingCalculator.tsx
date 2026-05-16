'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

const PRODUCTS = [
  { id: 'gold-bars-99-5', name: '99.5% Gold Bars', basePrice: 65 },
  { id: 'refined-gold-99-99', name: '99.99% Refined Gold', basePrice: 68 },
  { id: 'artisanal-gold-raw', name: 'Artisanal Raw Gold', basePrice: 55 },
  { id: 'investment-gold-bars', name: 'Investment Gold Bars', basePrice: 65 },
];

const BULK_DISCOUNTS = [
  { min: 0, max: 1, discount: 0, label: 'Base' },
  { min: 1, max: 5, discount: 2, label: '1–5 kg: 2% off' },
  { min: 5, max: 10, discount: 5, label: '5–10 kg: 5% off' },
  { min: 10, max: 25, discount: 7, label: '10–25 kg: 7% off' },
  { min: 25, max: Infinity, discount: 10, label: '25+ kg: 10% off' },
];

export default function BulkPricingCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].id);
  const [quantity, setQuantity] = useState('1');

  const product = PRODUCTS.find(p => p.id === selectedProduct);
  const qty = parseFloat(quantity) || 0;
  
  const discountTier = BULK_DISCOUNTS.find(
    d => qty >= d.min && qty < d.max
  ) || BULK_DISCOUNTS[0];

  const basePrice = (product?.basePrice || 0) * qty;
  const discount = (basePrice * discountTier.discount) / 100;
  const finalPrice = basePrice - discount;

  const handleWhatsAppClick = () => {
    const productName = product?.name || 'Gold';
    const message = `Hi, I'm interested in a bulk order: ${qty} kg of ${productName}. Current pricing estimate: $${finalPrice.toFixed(2)}. Can you confirm current pricing and provide a formal quote?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Bulk Pricing Calculator
          </h2>
          <p className="mt-3 text-lg text-slate-700">
            Estimate your order cost with our volume-based discount tiers.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-8 lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Product Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-slate-700 sm:text-sm">
                Select Product
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 sm:px-4 sm:py-3"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (${p.basePrice}/kg)
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-slate-700 sm:text-sm">
                Quantity (kg)
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="0.1"
                step="0.1"
                placeholder="Enter quantity"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 sm:px-4 sm:py-3"
              />
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="mt-5 sm:mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-600 sm:mb-3">
              Quick Select
            </p>
            <div className="flex flex-wrap gap-2">
              {[1, 5, 10, 25, 50].map((kg) => (
                <button
                  key={kg}
                  onClick={() => setQuantity(kg.toString())}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${
                    parseFloat(quantity) === kg
                      ? 'bg-emerald-700 text-white'
                      : 'border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {kg} kg
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="mt-7 space-y-2 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:mt-8 sm:space-y-3 sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-700 sm:text-sm">Base Price</span>
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                ${basePrice.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-700 sm:text-sm">
                Discount {discountTier.discount > 0 && `(${discountTier.discount}%)`}
              </span>
              <span className={`text-sm font-semibold sm:text-base ${discount > 0 ? 'text-emerald-700' : 'text-slate-900'}`}>
                {discount > 0 ? '-' : ''}${discount.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-2 sm:pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 sm:text-base">Estimated Total</span>
                <span className="text-xl font-bold text-emerald-700 sm:text-2xl">
                  ${finalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Discount Tiers Info */}
          <div className="mt-7 sm:mt-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-600 sm:mb-3">
              Volume Discounts
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {BULK_DISCOUNTS.map((tier) => (
                <div
                  key={`${tier.min}-${tier.max}`}
                  className={`rounded-lg p-2.5 text-xs transition sm:p-3 sm:text-sm ${
                    qty >= tier.min && qty < tier.max
                      ? 'border border-emerald-500 bg-emerald-50'
                      : 'border border-slate-200 bg-white'
                  }`}
                >
                  <div
                    className={`font-semibold ${
                      qty >= tier.min && qty < tier.max
                        ? 'text-emerald-900'
                        : 'text-slate-900'
                    }`}
                  >
                    {tier.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 active:scale-95 sm:py-3"
            >
              Get Quote on WhatsApp
            </button>
            <a
              href="/contact"
              className="flex-1 rounded-lg border border-emerald-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 sm:py-3"
            >
              Email Quote
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-5 text-center text-xs text-slate-600 sm:mt-6">
            Prices are estimates based on current spot rates. Final pricing confirmed upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
