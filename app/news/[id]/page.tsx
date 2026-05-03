import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import { articleIds, getArticleById } from '@/lib/news-articles';

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
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const article = getArticleById(numId);
  if (!article || Number.isNaN(numId)) notFound();

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />

      <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/news"
            className="text-sm font-medium text-amber-800/90 hover:text-amber-900"
          >
            ← Back to news
          </Link>
        </nav>

        {/* eslint-disable-next-line @next/next/no-img-element -- remote article imagery */}
        <img
          src={article.image}
          alt={article.title}
          className="mb-8 max-h-[420px] w-full rounded-xl object-cover shadow-sm"
        />

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            {article.category}
          </span>
          <time dateTime={article.date} className="text-sm text-slate-700">
            {article.date}
          </time>
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
          {article.title}
        </h1>

        <p className="mt-4 text-lg text-slate-800">{article.excerpt}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p className="whitespace-pre-wrap leading-relaxed text-slate-800">{article.content}</p>
        </div>

        <div className="mt-10 border-t border-amber-200/70 pt-8">
          <p className="mb-4 text-sm text-slate-800">
            Interested in discussing gold supply opportunities?
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-red-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            Get in touch with our team
          </Link>
        </div>
      </article>
    </main>
  );
}
