'use client';

import Header from '@/app/components/Header';

export default function News() {
  const articles = [
    {
      id: 1,
      title: 'Uganda\'s Gold Production Reaches Record Levels in 2025',
      date: 'January 2026',
      category: 'Mining',
      excerpt: 'Uganda has solidified its position as one of Africa\'s leading gold producers, with output reaching unprecedented levels. The Uganda Geological Survey reports increased mining activities across multiple regions.',
      content: `Uganda's commitment to sustainable gold production continues to drive the nation's mining sector forward. Recent developments indicate that mining operations across the country have scaled production significantly, contributing substantially to the nation's GDP. The government's supportive regulatory framework and investment in infrastructure have enabled both large-scale and artisanal mining operations to flourish. Major mining sites across Western Uganda continue to report strong operational performance, with enhanced processing capabilities improving purity standards and output volumes. Industry analysts predict continued growth as international demand for African-sourced, ethical gold remains strong.`,
      image: 'https://www.ceicdata.com/datapage/charts/ipc_uganda_gold-production/?type=area&from=2012-12-01&to=2023-12-01&lang=en',
    },
    {
      id: 2,
      title: 'International Gold Standards Boost Uganda\'s Competitive Edge',
      date: 'December 2025',
      category: 'Compliance',
      excerpt: 'Diamond Capital Africa and other suppliers benefit from Uganda\'s adoption of international compliance standards, positioning the nation as a preferred source for ethical gold.',
      content: `Uganda's mining sector has embraced rigorous international compliance standards, distinguishing itself in the global gold market. The implementation of KIMBERLEY PROCESS protocols and conflict-free sourcing practices has enhanced investor confidence and opened new market opportunities. Multi-stakeholder initiatives involving government, mining operators, and civil society organizations have strengthened certification processes and supply chain transparency. These developments have attracted attention from major international buyers seeking responsibly sourced gold with complete documentation. The certification boom has also created opportunities for specialized suppliers who can provide comprehensive compliance packages to international purchasers.`,
      image: 'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
    },
    {
      id: 3,
      title: 'East African Gold Trade Corridor Expands Opportunities',
      date: 'October 2025',
      category: 'Trade',
      excerpt: 'New trade agreements among East African nations are opening corridors for gold export, benefiting suppliers and manufacturers across the region.',
      content: `The East African Community continues to strengthen trade relationships, creating enhanced opportunities for precious metals commerce. Progressive tariff reductions and streamlined border procedures have made regional gold trading more efficient and cost-effective. Uganda, as a central hub in the East African trade network, is experiencing increased cross-border transactions with neighboring nations. The expansion of the Kampala-based trading infrastructure, including secure storage facilities and assay laboratories, supports this growth. Gold traders and suppliers report improved logistics pathways for international shipments, with standardized documentation requirements facilitating faster export processes. These developments position Uganda as a strategic source for buyers across Africa, Asia, and beyond.`,
      image: 'https://www.africatradefund.org/wp-content/uploads/2025/08/piyush-astro-2025-08-26T182757.178.png',
    },
    {
      id: 4,
      title: 'Technology Integration Improves Gold Processing Efficiency',
      date: 'September 2025',
      category: 'Technology',
      excerpt: 'Modern assay and refining technologies are increasing purity standards and reducing processing time, benefiting the entire supply chain.',
      content: `The introduction of cutting-edge processing technologies in Uganda's gold sector is revolutionizing quality control and production efficiency. XRF analysis systems, advanced refining equipment, and blockchain-based tracking systems are becoming standard in modern operations. These technological advances enable suppliers to achieve higher purity levels (99.5%+ consistency) while reducing processing timelines. Investment in laboratory infrastructure has attracted international quality audits, with many operations now meeting European and American standards for precious metals. The tech-forward approach also improves chain-of-custody documentation, making it easier for international buyers to verify product authenticity and origin. Training programs for process operators ensure sustained quality improvements across the sector.`,
      image: 'https://www.goldmarket.fr/wp-content/uploads/2025/08/31417e2ethumbnail.jpeg.webp',
    },
    {
      id: 5,
      title: 'Global Gold Prices Support Supplier Growth in Uganda',
      date: 'August 2025',
      category: 'Markets',
      excerpt: 'Stable and favorable global gold pricing trends continue to provide strong incentives for increased production and supplier expansion.',
      content: `Global precious metals markets have remained robust, providing a supportive environment for Uganda's mining and supply sector. Stable pricing trends, combined with growing international demand for African-sourced gold, have created favorable conditions for both established suppliers and new market entrants. Central banks and institutional investors continue to increase gold reserves, driving consistent demand. African precious metals have gained prominence as investors seek portfolio diversification and ethical sourcing options. The commodity's status as a hedge against economic uncertainty has sustained purchase interest from commercial and investment sectors globally. For Uganda-based suppliers, this market environment translates to sustained buyer interest and competitive pricing opportunities.`,
      image: 'https://goldbuyersafrica.com/wp-content/uploads/2026/01/Gold-Market-in-Uganda.avif?w=800&h=400',
    },
    {
      id: 6,
      title: 'Sustainability Initiatives Position Uganda as Leader in Ethical Mining',
      date: 'July 2025',
      category: 'Sustainability',
      excerpt: 'Environmental and community-focused initiatives in Uganda\'s gold sector are attracting socially conscious international buyers.',
      content: `Uganda's commitment to sustainable mining practices is gaining international recognition and opening doors with environmentally conscious buyers. Conservation programs protecting mining regions' ecosystems, combined with community development initiatives, have set new industry standards. Mining operators are increasingly implementing water management systems, reforestation programs, and local employment initiatives. These efforts resonate strongly with European and North American buyers seeking gold from responsible sources. NGOs and industry groups have documented improvements in mining practices and community relations across major production areas. The emphasis on sustainability not only enhances Uganda's reputation but also supports premium pricing for certified ethical gold, benefiting the entire supply chain from miners to international distributors.`,
      image: 'https://www.watchdoguganda.com/wp-content/uploads/2024/12/7f6045bc8fd427e2c4b03e2c26f703a91.png',
    },
  ];

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

                {/* Read More */}
                <button
                  onClick={() => {
                    const modal = document.getElementById(`modal-${article.id}`);
                    if (modal) modal.classList.remove('hidden');
                  }}
                  className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800 transition"
                >
                  Read full article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modals for full articles */}
      {articles.map((article) => (
        <div
          key={`modal-${article.id}`}
          id={`modal-${article.id}`}
          className="fixed inset-0 z-50 hidden overflow-y-auto bg-black/40 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              document.getElementById(`modal-${article.id}`)?.classList.add('hidden');
            }
          }}
        >
          <div className="flex min-h-screen items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl rounded-2xl border border-amber-200/70 bg-white p-8">
              {/* Close button */}
              <button
                onClick={() => {
                  document.getElementById(`modal-${article.id}`)?.classList.add('hidden');
                }}
                className="float-right mb-4 text-2xl text-slate-700 hover:text-slate-900"
              >
                ✕
              </button>

              {/* Article content */}
              <img
                src={article.image}
                alt={article.title}
                className="mb-6 w-full rounded-lg object-cover"
              />

              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  {article.category}
                </span>
                <span className="text-sm text-slate-800">{article.date}</span>
              </div>

              <h1 className="text-3xl font-semibold text-slate-900">{article.title}</h1>

              <p className="mt-6 whitespace-pre-wrap text-slate-800 leading-relaxed">{article.content}</p>

              {/* Share & Contact CTA */}
              <div className="mt-8 border-t border-amber-200/60 pt-6">
                <p className="text-sm text-slate-800 mb-4">Interested in discussing gold supply opportunities?</p>
                <a
                  href="/contact"
                  className="inline-block rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-800 transition"
                >
                  Get in touch with our team
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

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
          <p>&copy; 2024 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
