'use client';

import { useState, useEffect } from 'react';
import { CONTACT, GOLD_PRICING } from '@/lib/constants';

const PRODUCTS = [
  { id: 'gold-bars-99-5', name: '99.5% Gold Bars', purity: 0.995 },
  { id: 'refined-gold-99-99', name: '99.99% Refined Gold', purity: 0.9999 },
  { id: 'artisanal-gold-raw', name: 'Artisanal Raw Gold (97%)', purity: 0.97 },
  { id: 'investment-gold-bars', name: 'Investment Gold Bars', purity: 0.995 },
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
  const [spotPrice, setSpotPrice] = useState(3327.45); // Default fallback
  const [loading, setLoading] = useState(true);

  // Fetch live gold spot price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://metals.live/api/latest');
        const data = await response.json();
        if (data.spot?.gold) {
          setSpotPrice(data.spot.gold);
        }
      } catch (err) {
        console.error('Failed to fetch gold price:', err);
        // Use fallback price on error
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const product = PRODUCTS.find(p => p.id === selectedProduct);
  const qty = parseFloat(quantity) || 0;
  
  const discountTier = BULK_DISCOUNTS.find(
    d => qty >= d.min && qty < d.max
  ) || BULK_DISCOUNTS[0];

  // Calculate price per kg based on spot price
  // Spot price is per troy oz, 1 kg = 32.1507 troy oz
  const pricePerKgSpot = spotPrice * GOLD_PRICING.GRAM_TO_KG;
  const pricePerKgPurity = pricePerKgSpot * (product?.purity || 0.995);
  const pricePerKgWithPremium = pricePerKgPurity * (1 + GOLD_PRICING.DCA_PREMIUM);

  const basePrice = pricePerKgWithPremium * qty;
  const discount = (basePrice * discountTier.discount) / 100;
  const finalPrice = basePrice - discount;

  const handleWhatsAppClick = () => {
    const productName = product?.name || 'Gold';
    const message = `Hi, I'm interested in a bulk order: ${qty} kg of ${productName}. Current pricing estimate: $${finalPrice.toFixed(2)} (based on spot $${spotPrice.toFixed(2)}/oz). Can you confirm current pricing and provide a formal quote?`;
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
            Live pricing based on current gold spot rate. Volume discounts applied automatically.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-amber-200 bg-white p-5 sm:p-8 lg:p-10">
          {/* Live Spot Price Display */}
          <div className="mb-6 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Live Spot Price (XAU/USD)</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  ${loading ? '···' : spotPrice.toFixed(2)} <span className="text-sm font-normal text-slate-600">/troy oz</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-600">Per kilogram</p>
                <p className="mt-1 text-xl font-bold text-amber-700">
                  ${loading ? '···' : (spotPrice * GOLD_PRICING.GRAM_TO_KG).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

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
                    {p.name}
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
              <span className="text-xs text-slate-700 sm:text-sm">Price per kg (spot + purity)</span>
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                ${loading ? '···' : pricePerKgPurity.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-700 sm:text-sm">DCA Facilitation Premium (1.8%)</span>
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                ${loading ? '···' : (pricePerKgPurity * GOLD_PRICING.DCA_PREMIUM).toFixed(2)}/kg
              </span>
            </div>

            <div className="border-t border-slate-200 pt-2 sm:pt-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-700 sm:text-sm">Subtotal ({qty} kg)</span>
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  ${loading ? '···' : basePrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-700 sm:text-sm">
                Volume Discount {discountTier.discount > 0 && `(${discountTier.discount}%)`}
              </span>
              <span className={`text-sm font-semibold sm:text-base ${discount > 0 ? 'text-emerald-700' : 'text-slate-900'}`}>
                {discount > 0 ? '-' : ''}${discount.toFixed(2)}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-2 sm:pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 sm:text-base">Estimated Total</span>
                <span className="text-xl font-bold text-emerald-700 sm:text-2xl">
                  ${loading ? '···' : finalPrice.toFixed(2)}
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
              disabled={loading}
              className="flex-1 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 active:scale-95 disabled:opacity-50 sm:py-3"
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

          {/* Info */}
          <p className="mt-5 text-center text-xs text-slate-600 sm:mt-6">
            Prices update every 60 seconds. Final quote confirmed upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
