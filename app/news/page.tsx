'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import SharedFooter from '@/app/components/SharedFooter.jsx';
import { articlesSorted, type NewsCategory } from '@/lib/news-articles';

const ALL = 'All' as const;
type Filter = NewsCategory | typeof ALL;
type SortOrder = 'newest' | 'oldest';

const CATEGORIES: Filter[] = [ALL, 'Markets', 'Mining', 'Compliance', 'Trade', 'Technology', 'Policy', 'Sustainability'];

const CATEGORY_STYLES: Record<NewsCategory, string> = {
  Markets: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  Mining: 'bg-amber-50 text-amber-800 ring-amber-200',
  Compliance: 'bg-blue-50 text-blue-800 ring-blue-200',
  Trade: 'bg-violet-50 text-violet-800 ring-violet-200',
  Technology: 'bg-rose-50 text-rose-800 ring-rose-200',
  Policy: 'bg-orange-50 text-orange-800 ring-orange-200',
  Sustainability: 'bg-green-50 text-green-800 ring-green-200',
  Industry: 'bg-slate-100 text-slate-600 ring-slate-200',
};

function ArticleCard({ article, featured = false }: { article: (typeof articlesSorted)[number]; featured?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/news/${article.id}`}
      className={[
        'group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl',
        featured ? 'md:grid md:grid-cols-[1.05fr_0.95fr]' : '',
      ].join(' ')}
      aria-label={`Read: ${article.title}`}
    >
      <div className={featured ? 'relative min-h-[18rem] bg-slate-50 md:min-h-full' : 'relative h-56 bg-slate-50'}>
        {/* eslint-disable-next-line @next/next/no-img-element -- remote article imagery */}
        {!imgError && (
          <img
            src={article.image}
            alt={article.imageAlt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}

        {imgError && (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
            Image not available
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className={featured ? 'p-7 md:p-8' : 'p-6'}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={['rounded-full px-3 py-1 text-[11px] font-semibold ring-1', CATEGORY_STYLES[article.category]].join(' ')}>
            {article.category}
          </span>
          <time dateTime={article.isoDate} className="text-[11px] text-slate-400">
            {article.dateShort}
          </time>
        </div>

        <h2 className={['mt-4 font-serif font-normal tracking-tight text-slate-900 transition-colors group-hover:text-emerald-800', featured ? 'text-3xl leading-tight md:text-[2.7rem]' : 'text-[1.4rem] leading-snug'].join(' ')}>
          {article.title}
        </h2>

        <p className={['mt-4 leading-relaxed text-slate-600', featured ? 'text-base md:text-[1.02rem]' : 'text-[13px]'].join(' ')}>
          {article.brief}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 transition group-hover:text-emerald-900">
            Read article
            <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
          </span>
          {article.sourceName && <span className="text-[11px] text-slate-400">Source: {article.sourceName}</span>}
        </div>
      </div>
    </Link>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<Filter>(ALL);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const displayed = useMemo(() => {
    const base = activeCategory === ALL ? [...articlesSorted] : articlesSorted.filter((a) => a.category === activeCategory);
    return sortOrder === 'oldest' ? [...base].reverse() : base;
  }, [activeCategory, sortOrder]);

  const featuredArticle = displayed[0];
  const remainingArticles = displayed.slice(1);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf2_0%,#fffdf8_34%,#f8f4eb_100%)] text-slate-900">
      <Navbar />

      <section className="border-b border-slate-100 bg-white/90 py-16 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-emerald-700/80">Industry Insights</p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight text-slate-900 md:text-5xl">
              Gold news and market intelligence
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-[1.02rem]">
              Editorial updates on Uganda&apos;s gold trade, mining policy, compliance, refining, and export markets — written to feel like a real industry brief, not a placeholder feed.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              { label: 'Articles', value: articlesSorted.length.toString() },
              { label: 'Categories', value: String(new Set(articlesSorted.map((article) => article.category)).size) },
              { label: 'Latest', value: articlesSorted[0]?.dateShort ?? '—' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-emerald-50/80 p-4 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-700/70">{item.label}</div>
                <div className="mt-2 font-serif text-2xl text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 border-b border-slate-100 bg-[#fffaf2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={active}
                  className={[
                    'rounded-full border px-4 py-2 text-[11px] font-semibold tracking-wide transition',
                    active
                      ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                      : 'border-slate-100 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-900',
                  ].join(' ')}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-2 shadow-sm">
            <span className="text-[11px] text-slate-500">
              {displayed.length} article{displayed.length !== 1 ? 's' : ''}
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="bg-transparent text-[11px] font-medium text-slate-700 focus:outline-none"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        {displayed.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-amber-200 bg-white px-8 py-20 text-center">
            <p className="text-sm font-medium text-slate-600">No articles in this category yet.</p>
            <p className="mt-2 text-sm text-slate-500">Try another category or switch back to All.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-8">
              {featuredArticle && <ArticleCard article={featuredArticle} featured />}

              {remainingArticles.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {remainingArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.4)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">What this section covers</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>• Market prices, export flows, and central bank demand</li>
                  <li>• Mining policy, compliance, and certification updates</li>
                  <li>• Refining, logistics, and East African trade developments</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.4)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-700/70">Need verified supply updates?</p>
                <h2 className="mt-3 font-serif text-2xl font-normal text-slate-900">Talk to our team</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  If you need sourcing, documentation, or logistics support, we can help translate news into actual procurement decisions.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800"
                >
                  Contact us
                </Link>
              </div>
            </aside>
          </div>
        )}
      </section>

      <SharedFooter variant="compact" />
    </main>
  );
}