'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { articlesSorted, type NewsCategory } from '@/lib/news-articles';

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
  Markets:        'bg-emerald-50  text-emerald-800',
  Mining:         'bg-amber-50    text-amber-800',
  Compliance:     'bg-blue-50     text-blue-800',
  Trade:          'bg-violet-50   text-violet-800',
  Technology:     'bg-rose-50     text-rose-800',
  Policy:         'bg-orange-50   text-orange-800',
  Sustainability: 'bg-green-50    text-green-800',
  Industry:       'bg-slate-100   text-slate-600',
};

type SortOrder = 'newest' | 'oldest';

function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[4.5rem] w-24 shrink-0 overflow-hidden rounded-lg bg-amber-50">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
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
    return sortOrder === 'oldest' ? [...base].reverse() : base;
  }, [activeCategory, sortOrder]);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-amber-200/60 bg-white py-14">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-amber-700/80">
            Industry Insights
          </p>
          <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight md:text-[2.75rem]">
            Gold news &amp; market updates
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
            Uganda's gold industry trends, market developments, and supply chain
            innovations — sourced from Bank of Uganda data and verified press.
          </p>
        </div>
      </section>

      {/* ── Sticky toolbar ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-10 border-b border-amber-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filter by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={[
                  'rounded-full border px-3 py-1 text-[11px] font-medium transition',
                  activeCategory === cat
                    ? 'border-amber-400 bg-amber-100 text-amber-800'
                    : 'border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-800',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400">
              {displayed.length} article{displayed.length !== 1 ? 's' : ''}
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-300"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Article list ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        {displayed.length === 0 ? (
          <p className="py-20 text-center text-sm text-slate-400">
            No articles in this category yet.
          </p>
        ) : (
          <ul className="divide-y divide-amber-100">
            {displayed.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/news/${article.id}`}
                  className="group flex items-start gap-5 py-6"
                  aria-label={`Read: ${article.title}`}
                >
                  {/* Small thumbnail */}
                  <Thumbnail src={article.image} alt={article.imageAlt} />

                  {/* Body */}
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          'rounded-full px-2.5 py-0.5 text-[10px] font-semibold',
                          CATEGORY_STYLES[article.category as NewsCategory] ??
                            'bg-slate-100 text-slate-600',
                        ].join(' ')}
                      >
                        {article.category}
                      </span>
                      <time
                        dateTime={article.isoDate}
                        className="text-[11px] text-slate-400"
                      >
                        {article.dateShort}
                      </time>
                    </div>

                    <h2 className="font-serif text-[1.05rem] font-normal leading-snug text-slate-900 transition-colors group-hover:text-amber-800">
                      {article.title}
                    </h2>

                    <p className="line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                      {article.excerpt}
                    </p>

                    {article.sourceName && (
                      <p className="text-[11px] text-slate-400">
                        {article.sourceName}
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-slate-300 transition group-hover:text-amber-600"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-2xl font-normal text-slate-900">
              Stay updated on market trends
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Get the latest on Uganda's gold industry delivered to your inbox.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-red-700 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-red-800"
          >
            Contact us for updates
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/Logo.png"
              alt="Diamond Capital Africa"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Premium gold supply with verified sourcing, compliance
              documentation, and secure logistics.
            </p>
          </div>

          {(
            [
              {
                heading: 'Company',
                links: [
                  { label: 'About us', href: '/about' },
                  { label: 'Services', href: '/products' },
                  { label: 'News', href: '/news' },
                  { label: 'Contact', href: '/contact' },
                ],
              },
              {
                heading: 'Contact',
                links: [
                  { label: 'Kampala, Uganda', href: null },
                  { label: 'info@diamondcapitalafrica.com', href: 'mailto:info@diamondcapitalafrica.com' },
                  { label: '+256 (0) 704 833 021', href: 'tel:+256704833021' },
                ],
              },
              {
                heading: 'Compliance',
                links: [
                  { label: 'Responsible sourcing', href: null },
                  { label: 'Custody documentation', href: null },
                  { label: 'Lab-verified purity', href: null },
                ],
              },
            ] as const
          ).map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                {heading}
              </p>
              <ul className="mt-4 space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label} className="text-sm text-slate-500">
                    {href ? (
                      <a href={href} className="transition hover:text-amber-700">
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-2 border-t border-amber-200/60 px-6 pt-6 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="/privacy-policy" className="transition hover:text-amber-700">
              Privacy Policy
            </a>
            <span>Serving East &amp; Central Africa · Global delivery available</span>
          </div>
        </div>
      </footer>
    </main>
  );
}