'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter';
import { getAllArticles } from '@/lib/news-articles';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <main style={{ minHeight: '100vh', background: '#F7F6F2', color: '#0D0D0D' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy: #0A1628; --gold: #B8922A; --gold-lt: #E8C96A;
          --cream: #F7F6F2; --rule-md: rgba(10,22,40,0.15);
        }
        .eyebrow { font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
        .eyebrow::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }
        .section-title { font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; letter-spacing: -0.025em; color: var(--navy); line-height: 1.15; }
        .section-title strong { font-weight: 600; }

        .news-hero { background: linear-gradient(135deg, var(--navy) 0%, rgba(10,22,40,0.85) 100%); padding: 6rem 2rem; position: relative; overflow: hidden; }
        .news-hero::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 52px 52px; }
        .news-hero h1 { color: #fff; font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 300; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 1.5rem; max-width: 800px; position: relative; z-index: 1; }
        .news-hero h1 strong { font-weight: 600; }
        .news-hero p { color: rgba(255,255,255,0.52); font-size: 15px; line-height: 1.75; max-width: 600px; position: relative; z-index: 1; }

        .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 4rem; }
        .article-card { background: #fff; border: 1px solid var(--rule-md); border-radius: 4px; overflow: hidden; transition: border-color 0.25s, box-shadow 0.25s, transform 0.3s; display: flex; flex-direction: column; }
        .article-card:hover { border-color: rgba(10,22,40,0.28); box-shadow: 0 8px 24px rgba(10,22,40,0.08); transform: translateY(-4px); }
        .article-image { width: 100%; height: 200px; background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%); overflow: hidden; }
        .article-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .article-body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
        .article-tag { display: inline-block; font-family: ui-monospace, monospace; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); background: rgba(184,146,42,0.08); padding: 4px 10px; border-radius: 2px; margin-bottom: 0.75rem; width: fit-content; }
        .article-meta { display: flex; align-items: center; gap: 1rem; font-family: ui-monospace, monospace; font-size: 10px; color: rgba(10,22,40,0.45); margin-bottom: 1rem; }
        .article-divider { width: 1px; height: 12px; background: rgba(10,22,40,0.15); }
        .article-title { font-size: 16px; font-weight: 500; color: var(--navy); line-height: 1.4; margin-bottom: 0.75rem; }
        .article-excerpt { font-size: 13px; color: rgba(10,22,40,0.5); line-height: 1.65; flex: 1; margin-bottom: 1.25rem; }
        .article-link { font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.1em; color: var(--gold); font-weight: 500; }
        .article-link:hover { color: var(--navy); }

        .empty-state { text-align: center; padding: 4rem 2rem; }
        .empty-state h3 { font-size: 20px; color: var(--navy); margin-bottom: 0.75rem; }
        .empty-state p { color: rgba(10,22,40,0.48); font-size: 14px; }

        @media (max-width: 768px) {
          .news-hero { padding: 4rem 1.5rem; }
          .news-hero h1 { font-size: 1.8rem; margin-bottom: 1rem; }
          .articles-grid { gap: 1.5rem; }
        }
      `}</style>

      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      {/* Hero Section */}
      <section className="news-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ maxWidth: 1280, margin: '0 auto' }}
        >
          <div className="eyebrow" style={{ color: '#4ADE80' }}>News & insights</div>
          <h1>
            Market insights, compliance updates,<br />
            <strong>and industry analysis.</strong>
          </h1>
          <p>
            Stay informed about gold markets, sourcing trends, and regulatory developments that matter to international buyers.
          </p>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem' }}>
        {articles.length > 0 ? (
          <div className="articles-grid">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="article-card"
              >
                <Link href={`/news/${article.id}`} style={{ display: 'contents' }}>
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="article-body">
                    <div className="article-tag">{article.category}</div>
                    <div className="article-meta">
                      <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <div className="article-divider" />
                      <span>{article.readTime} min read</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-link">Read article →</div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No articles yet</h3>
            <p>Check back soon for market insights and industry updates.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--navy)', padding: '4rem 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', color: '#fff' }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 300, marginBottom: 1, letterSpacing: '-0.025em' }}>
            Want to stay updated?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 14, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Subscribe to our newsletter for monthly market analysis, compliance updates, and sourcing insights.
          </p>
          <a
            href="mailto:info@diamondcapitalafrica.com?subject=Subscribe%20to%20News"
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
            Subscribe →
          </a>
        </motion.div>
      </section>

      <SharedFooter />
    </main>
  );
}
