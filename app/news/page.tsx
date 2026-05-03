'use client';

import Link from 'next/link';
import Header from '@/app/components/Header';
import { articles } from '@/lib/news-articles';

export default function News() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Industry Insights</p>
          </div>
          <h1 className="text-4xl font-semibold md:text-5xl text-slate-900">Gold News & Market Updates</h1>
          <p className="mt-4 text-lg text-slate-800">
            Stay informed on Uganda's gold industry trends, market developments, and supply chain innovations.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-white transition hover:border-amber-300 hover:shadow-sm">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden bg-amber-50">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-800">{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-xl font-semibold leading-tight text-slate-900">{article.title}</h2>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-slate-800">{article.excerpt}</p>

                <Link
                  href={`/news/${article.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  Read full article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#faf8f2] py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Stay updated on market trends</h3>
            <p className="mt-2 text-sm text-slate-800">Get the latest news on Uganda's gold industry delivered to your inbox.</p>
          </div>
          <a href="/contact" className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800 transition">
            Contact us for updates
          </a>
        </div>
      </section>

      {/* Footer */}
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
              <li><a href="/about" className="hover:text-amber-700 transition">About us</a></li>
              <li><a href="/products" className="hover:text-amber-700 transition">Services</a></li>
              <li><a href="/news" className="hover:text-amber-700 transition">News</a></li>
              <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
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
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
