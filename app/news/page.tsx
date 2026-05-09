'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { articles, articlesSorted, type NewsCategory } from '@/lib/news-articles';

const ALL = 'All' as const;
type Filter = NewsCategory | typeof ALL;

const CATEGORIES: Filter[] = [
  ALL,
  'Markets',
  'Mining',
  'Compliance',
  'Trade',
  'Technology',
  'Policy',
  'Sustainability',
];

const CATEGORY_STYLES: Record<NewsCategory, string> = {
  Markets:      'bg-emerald-50 text-emerald-800',
  Mining:       'bg-amber-50 text-amber-800',
  Compliance:   'bg-blue-50 text-blue-800',
  Trade:        'bg-violet-50 text-violet-800',
  Technology:   'bg-rose-50 text-rose-800',
  Policy:       'bg-orange-50 text-orange-800',
  Sustainability:'bg-green-50 text-green-800',
  Industry:     'bg-slate-100 text-slate-700',
};

type SortOrder = 'newest' | 'oldest';

function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget;
        img.onerror = null;
        img.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23fef3c7'/%3E%3Ccircle cx='400' cy='180' r='44' fill='none' stroke='%23d97706' stroke-width='3'/%3E%3Cpath d='M376 180 l14-24 14 24 14-24 14 24' fill='none' stroke='%23d97706' stroke-width='3' stroke-linejoin='round'/%3E%3Ctext x='400' y='256' text-anchor='middle' font-family='Georgia,serif' font-size='14' fill='%23b45309'%3EDiamond Capital Africa%3C/text%3E%3C/svg%3E";
      }}
    />
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<Filter>(ALL);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const displayed = useMemo(() => {
    const base =
      activeCategory === ALL
        ? [...articlesSorted]
        : articlesSorted.filter((a) => a.category === activeCategory);

    return sortOrder === 'oldest' ? base.reverse() : base;
  }, [activeCategory, sortOrder]);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-amber-200/60 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-700/80">
            Industry Insights
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Gold news &amp; market updates
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Stay informed on Uganda's gold industry trends, market developments,
            and supply chain innovations — sourced from Bank of Uganda data and
            verified press.
          </p>
        </div>
      </section>

      {/* ── Filters + grid ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12">

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={[
                'rounded-full border px-4 py-1.5 text-xs font-semibold transition',
                activeCategory === cat
                  ? 'border-amber-400 bg-amber-100 text-amber-800'
                  : 'border-amber-200/70 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-800',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort row */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {displayed.length} article{displayed.length !== 1 ? 's' : ''}
          </p>
          <label className="flex items-center gap-2 text-sm text-slate-500">
            Sort:
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="rounded-lg border border-amber-200/70 bg-white px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        {/* Grid */}
        {displayed.length === 0 ? (
          <p className="mt-16 text-center text-sm text-slate-400">
            No articles in this category yet.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {displayed.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-amber-200/70 bg-white transition hover:border-amber-300 hover:shadow-sm"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-amber-50">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col gap-3 p-6">
                  {/* Category + date */}
                  <div className="flex items-center justify-between">
                    <span
                      className={[
                        'rounded-full px-3 py-1 text-xs font-semibold',
                        CATEGORY_STYLES[article.category as NewsCategory] ??
                          'bg-slate-100 text-slate-700',
                      ].join(' ')}
                    >
                      {article.category}
                    </span>
                    <time
                      dateTime={article.isoDate}
                      className="text-xs text-slate-400"
                    >
                      {article.dateShort}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="text-[1.05rem] font-semibold leading-snug text-slate-900">
                    {article.title}
                  </h2>

                  {/* Excerpt — capped to keep cards uniform */}
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {article.excerpt}
                  </p>

                  {/* Source attribution (if present) */}
                  {article.sourceName && (
                    <p className="text-xs text-slate-400">
                      Source:{' '}
                      {article.sourceUrl ? (
                        <a
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-amber-700"
                        >
                          {article.sourceName}
                        </a>
                      ) : (
                        article.sourceName
                      )}
                    </p>
                  )}

                  <Link
                    href={`/news/${article.id}`}
                    className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-semibold text-amber-700 transition hover:text-amber-900"
                    aria-label={`Read full article: ${article.title}`}
                  >
                    Read full article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f2] py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Stay updated on market trends
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Get the latest news on Uganda's gold industry delivered to your inbox.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Contact us for updates
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/Logo.png"
              alt="Diamond Capital Africa"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 text-sm text-slate-600">
              Premium gold supply with verified sourcing, compliance
              documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {[
                { label: 'About us', href: '/about' },
                { label: 'Services', href: '/products' },
                { label: 'News', href: '/news' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-amber-700">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Kampala, Uganda</li>
              <li>
                <a
                  href="mailto:info@diamondcapitalafrica.com"
                  className="transition hover:text-amber-700"
                >
                  info@diamondcapitalafrica.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+256704833021"
                  className="transition hover:text-amber-700"
                >
                  +256 (0) 704 833 021
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Compliance
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <a href="/privacy-policy" className="transition hover:text-amber-700">
              Privacy Policy
            </a>
            <p>Serving East &amp; Central Africa · Global delivery available</p>
          </div>
        </div>
      </footer>
    </main>
  );
}