'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

const pages = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/products' },
  { title: 'Partners & Licenses', href: '/partners' },
  { title: 'Account Holders', href: '/account-holders' },
  { title: 'News', href: '/news' },
  { title: 'Compliance', href: '/compliance' },
  { title: 'Process', href: '/process' },
  { title: 'FAQ', href: '/faq' },
];

export default function SiteMapPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Request Quote', href: '/contact' }} />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700/80">Site map</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Website structure and page links</h1>
            <p className="mt-4 max-w-2xl text-slate-700">Use this page to review the main website sections and quickly navigate through every public page on the site.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <motion.a
                key={page.href}
                href={page.href}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-amber-200/70 bg-white p-8 shadow-sm transition hover:border-amber-300 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-amber-700">{page.title}</p>
                <p className="mt-4 text-sm text-slate-800">{page.href}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-amber-200/70 bg-[#faf8f2] p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Quick access</h2>
            <p className="mt-3 text-slate-700">This page is a single reference for the site’s main public pages. Share it with stakeholders or use it to verify navigation completeness.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/partners" className="rounded-2xl border border-amber-200/70 bg-white px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-amber-50 transition">Partners & Licenses</Link>
              <Link href="/account-holders" className="rounded-2xl border border-amber-200/70 bg-white px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-amber-50 transition">Account Holders</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
