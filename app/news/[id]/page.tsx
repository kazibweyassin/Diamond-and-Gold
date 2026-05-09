import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter.jsx';
import { articlesSorted, articleIds, getArticleById } from '@/lib/news-articles';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return articleIds.map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(parseInt(id, 10));

  if (!article) return { title: 'Article' };

  return {
    title: `${article.title} | Diamond Capital Africa`,
    description: article.brief,
    openGraph: {
      title: article.title,
      description: article.brief,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const article = getArticleById(numId);

  if (!article || Number.isNaN(numId)) notFound();

  const relatedArticles = articlesSorted.filter((item) => item.id !== article.id).slice(0, 3);
  const paragraphs = article.content
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf2_0%,#fffdf8_34%,#f8f4eb_100%)] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />

      <article className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 transition hover:text-amber-950">
            <span aria-hidden="true">←</span>
            Back to news
          </Link>
        </nav>

        <div className="grid gap-8 xl:grid-cols-[1.35fr_0.65fr] xl:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_18px_55px_-32px_rgba(15,23,42,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- remote article imagery */}
            <img src={article.image} alt={article.imageAlt} className="h-[22rem] w-full object-cover md:h-[28rem]" />

            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
                  {article.category}
                </span>
                <time dateTime={article.isoDate} className="text-[12px] text-slate-500">
                  {article.date}
                </time>
              </div>

              <h1 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-slate-900 md:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                {article.brief}
              </p>

              <div className="mt-8 grid gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-5 md:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">Why it matters</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{article.homeTeaser ?? article.excerpt}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">Source</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {article.sourceUrl ? (
                      <a href={article.sourceUrl} target="_blank" rel="noreferrer" className="font-medium text-amber-800 hover:text-amber-950">
                        {article.sourceName ?? 'External reference'}
                      </a>
                    ) : (
                      article.sourceName ?? 'Diamond Capital Africa'
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-slate-700">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-amber-100 pt-8">
                <Link href="/contact" className="inline-flex rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800">
                  Discuss sourcing
                </Link>
                <Link href="/news" className="inline-flex rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-900">
                  More news
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28">
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.4)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">Article snapshot</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-400">Date</dt>
                  <dd className="mt-1 font-medium text-slate-800">{article.date}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Category</dt>
                  <dd className="mt-1 font-medium text-slate-800">{article.category}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Summary</dt>
                  <dd className="mt-1 leading-6 text-slate-600">{article.excerpt}</dd>
                </div>
              </dl>
            </div>

            {article.sourceUrl && (
              <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">Reference link</p>
                <a href={article.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 block text-sm font-medium leading-6 text-amber-800 hover:text-amber-950">
                  View the original source and supporting reference material
                </a>
              </div>
            )}

            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.4)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700/70">Related articles</p>
              <div className="mt-4 space-y-4">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/news/${related.id}`} className="block rounded-2xl border border-slate-100 p-4 transition hover:border-amber-200 hover:bg-amber-50/40">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700/70">{related.category}</p>
                    <h2 className="mt-2 font-serif text-lg font-normal leading-snug text-slate-900">{related.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">{related.brief}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <SharedFooter variant="compact" />
    </main>
  );
}
