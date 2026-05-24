'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter';
import { getArticleById, getAllArticles } from '@/lib/news-articles';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  const previousArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;

  return (
    <main style={{ minHeight: '100vh', background: '#F7F6F2', color: '#0D0D0D' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy: #0A1628; --gold: #B8922A; --gold-lt: #E8C96A;
          --cream: #F7F6F2; --rule-md: rgba(10,22,40,0.15);
        }

        .article-header { background: linear-gradient(135deg, var(--navy) 0%, rgba(10,22,40,0.85) 100%); padding: 4rem 2rem; position: relative; overflow: hidden; }
        .article-header::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 52px 52px; }
        .article-header-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; color: #fff; }
        .breadcrumb { font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-bottom: 1.5rem; }
        .breadcrumb a { color: #4ADE80; transition: color 0.2s; }
        .breadcrumb a:hover { color: #fff; }
        .article-tag { display: inline-block; font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #4ADE80; background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 2px; margin-bottom: 1rem; }
        .article-header h1 { font-size: clamp(2rem, 3vw, 3rem); font-weight: 300; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 1.5rem; }
        .article-meta { display: flex; align-items: center; gap: 1rem; font-family: ui-monospace, monospace; font-size: 12px; color: rgba(255,255,255,0.6); }
        .article-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.2); }

        .article-hero-image { width: 100%; height: 400px; object-fit: cover; display: block; margin-bottom: 0; }

        .article-body-wrapper { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
        .article-content { color: rgba(10,22,40,0.76); font-size: 17px; line-height: 1.85; max-width: 720px; margin: 0 auto; }
        .article-content > * + * { margin-top: 1.15rem; }
        .article-content h2 { font-size: 26px; font-weight: 600; color: var(--navy); margin: 2.75rem 0 1rem 0; letter-spacing: -0.02em; line-height: 1.2; }
        .article-content h3 { font-size: 19px; font-weight: 600; color: var(--navy); margin: 2rem 0 0.75rem 0; letter-spacing: -0.01em; }
        .article-content p { margin: 0; }
        .article-content ul, .article-content ol { margin: 1.25rem 0; padding-left: 1.4rem; }
        .article-content li { margin-bottom: 0.9rem; padding-left: 0.25rem; }
        .article-content strong { font-weight: 600; color: var(--navy); }
        .article-content em { font-style: italic; }
        .article-content a { color: var(--gold); text-decoration: underline; text-underline-offset: 2px; }
        .article-content a:hover { color: var(--navy); }
        .article-content blockquote { border-left: 3px solid rgba(184,146,42,0.35); padding: 0.2rem 0 0.2rem 1rem; margin: 1.5rem 0; color: rgba(10,22,40,0.62); font-style: italic; }
        .article-content hr { border: none; border-top: 1px solid rgba(10,22,40,0.12); margin: 2rem 0; }
        .article-content code { font-family: ui-monospace, monospace; font-size: 0.92em; background: rgba(184,146,42,0.08); padding: 0.12rem 0.35rem; border-radius: 4px; }
        .article-content pre { background: #0A1628; color: #fff; padding: 1.1rem 1.2rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; }
        .article-content pre code { background: transparent; padding: 0; color: inherit; }
        .article-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; overflow: hidden; border-radius: 8px; }
        .article-content th, .article-content td { border: 1px solid rgba(10,22,40,0.12); padding: 0.75rem 0.85rem; text-align: left; }
        .article-content th { background: rgba(184,146,42,0.08); color: var(--navy); font-weight: 600; }

        .related-articles { margin-top: 6rem; padding: 3rem 0; border-top: 1px solid var(--rule-md); }
        .related-title { font-size: 20px; font-weight: 600; color: var(--navy); margin-bottom: 2rem; }
        .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .related-card { background: #fff; border: 1px solid var(--rule-md); border-radius: 4px; padding: 1.5rem; transition: border-color 0.25s; }
        .related-card:hover { border-color: rgba(10,22,40,0.28); }
        .related-card h3 { font-size: 15px; font-weight: 500; color: var(--navy); margin-bottom: 0.75rem; line-height: 1.4; }
        .related-meta { font-family: ui-monospace, monospace; font-size: 11px; color: rgba(10,22,40,0.6); margin-bottom: 0.75rem; }
        .related-link { font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.1em; color: var(--gold); font-weight: 500; }
        .related-link:hover { color: var(--navy); }

        @media (max-width: 768px) {
          .article-header { padding: 3rem 1.5rem; }
          .article-hero-image { height: 250px; }
          .article-body-wrapper { padding: 2rem 1.5rem; }
          .article-content { font-size: 15px; }
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      {/* Article Header */}
      <section className="article-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="article-header-content"
        >
          <div className="breadcrumb">
            <Link href="/news">← Back to articles</Link>
          </div>
          <div className="article-tag">{article.category}</div>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <div className="article-divider" />
            <span>{article.readTime} minute read</span>
            <div className="article-divider" />
            <span>{article.author}</span>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        src={article.image}
        alt={article.title}
        className="article-hero-image"
      />

      {/* Article Body */}
      <section className="article-body-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="article-content"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p>{children}</p>,
              h2: ({ children }) => <h2>{children}</h2>,
              h3: ({ children }) => <h3>{children}</h3>,
              ul: ({ children }) => <ul>{children}</ul>,
              ol: ({ children }) => <ol>{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              blockquote: ({ children }) => <blockquote>{children}</blockquote>,
              a: ({ href, children }) => (
                <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>
                  {children}
                </a>
              ),
            }}
          >
            {article.content.trim()}
          </ReactMarkdown>
        </motion.div>

        {/* Related Articles */}
        {(previousArticle || nextArticle) && (
          <div className="related-articles">
            <h2 className="related-title">Related articles</h2>
            <div className="related-grid">
              {nextArticle && (
                <Link href={`/news/${nextArticle.id}`} style={{ display: 'contents' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="related-card"
                  >
                    <h3>{nextArticle.title}</h3>
                    <div className="related-meta">
                      {new Date(nextArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      {' '} · {nextArticle.readTime} min
                    </div>
                    <div className="related-link">Read next →</div>
                  </motion.div>
                </Link>
              )}
              {previousArticle && (
                <Link href={`/news/${previousArticle.id}`} style={{ display: 'contents' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="related-card"
                  >
                    <h3>{previousArticle.title}</h3>
                    <div className="related-meta">
                      {new Date(previousArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      {' '} · {previousArticle.readTime} min
                    </div>
                    <div className="related-link">Read previous →</div>
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--navy)', padding: '4rem 2rem', marginTop: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', color: '#fff' }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 300, marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Ready to source certified gold?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Contact us for current pricing, available volumes, and compliance documentation.
          </p>
          <Link
            href="/contact"
            style={{
              background: '#B8922A',
              color: '#fff',
              padding: '13px 32px',
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7820')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#B8922A')}
          >
            Get started →
          </Link>
        </motion.div>
      </section>

      <SharedFooter />
    </main>
  );
}
