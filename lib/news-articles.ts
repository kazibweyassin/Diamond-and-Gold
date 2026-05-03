export type NewsArticle = {
  id: number;
  title: string;
  date: string;
  /** Short form for home teasers (e.g. Jan 2026) */
  dateShort: string;
  category: string;
  /** Shown on /news index and article page intro */
  excerpt: string;
  /** Optional shorter line for home page grid only */
  homeTeaser?: string;
  content: string;
  image: string;
};

export const articles: NewsArticle[] = [
  {
    id: 1,
    title: "Uganda's Gold Production Reaches Record Levels in 2025",
    date: 'January 2026',
    dateShort: 'Jan 2026',
    category: 'Mining',
    excerpt:
      "Uganda has solidified its position as one of Africa's leading gold producers, with output reaching unprecedented levels. The Uganda Geological Survey reports increased mining activities across multiple regions.",
    homeTeaser:
      "Uganda solidifies its position as Africa's leading gold producer with unprecedented output levels.",
    content: `Uganda's commitment to sustainable gold production continues to drive the nation's mining sector forward. Recent developments indicate that mining operations across the country have scaled production significantly, contributing substantially to the nation's GDP. The government's supportive regulatory framework and investment in infrastructure have enabled both large-scale and artisanal mining operations to flourish. Major mining sites across Western Uganda continue to report strong operational performance, with enhanced processing capabilities improving purity standards and output volumes. Industry analysts predict continued growth as international demand for African-sourced, ethical gold remains strong.`,
    image:
      'https://www.ceicdata.com/datapage/charts/ipc_uganda_gold-production/?type=area&from=2012-12-01&to=2023-12-01&lang=en',
  },
  {
    id: 2,
    title: "International Gold Standards Boost Uganda's Competitive Edge",
    date: 'December 2025',
    dateShort: 'Dec 2025',
    category: 'Compliance',
    excerpt:
      'Diamond Capital Africa and other suppliers benefit from Uganda\'s adoption of international compliance standards, positioning the nation as a preferred source for ethical gold.',
    homeTeaser:
      'KIMBERLEY PROCESS adoption and conflict-free sourcing enhance global investor confidence.',
    content: `Uganda's mining sector has embraced rigorous international compliance standards, distinguishing itself in the global gold market. The implementation of KIMBERLEY PROCESS protocols and conflict-free sourcing practices has enhanced investor confidence and opened new market opportunities. Multi-stakeholder initiatives involving government, mining operators, and civil society organizations have strengthened certification processes and supply chain transparency. These developments have attracted attention from major international buyers seeking responsibly sourced gold with complete documentation. The certification boom has also created opportunities for specialized suppliers who can provide comprehensive compliance packages to international purchasers.`,
    image: 'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
  },
  {
    id: 3,
    title: 'East African Gold Trade Corridor Expands Opportunities',
    date: 'October 2025',
    dateShort: 'Oct 2025',
    category: 'Trade',
    excerpt:
      'New trade agreements among East African nations are opening corridors for gold export, benefiting suppliers and manufacturers across the region.',
    homeTeaser:
      'Trade agreements improve export logistics and cross-border gold commerce substantially.',
    content: `The East African Community continues to strengthen trade relationships, creating enhanced opportunities for precious metals commerce. Progressive tariff reductions and streamlined border procedures have made regional gold trading more efficient and cost-effective. Uganda, as a central hub in the East African trade network, is experiencing increased cross-border transactions with neighboring nations. The expansion of the Kampala-based trading infrastructure, including secure storage facilities and assay laboratories, supports this growth. Gold traders and suppliers report improved logistics pathways for international shipments, with standardized documentation requirements facilitating faster export processes. These developments position Uganda as a strategic source for buyers across Africa, Asia, and beyond.`,
    image:
      'https://www.africatradefund.org/wp-content/uploads/2025/08/piyush-astro-2025-08-26T182757.178.png',
  },
  {
    id: 4,
    title: 'Technology Improves Gold Processing Efficiency',
    date: 'September 2025',
    dateShort: 'Sep 2025',
    category: 'Technology',
    excerpt:
      'Modern assay and refining technologies are increasing purity standards and reducing processing time, benefiting the entire supply chain.',
    homeTeaser:
      'Advanced assay systems and blockchain tracking raise quality and traceability standards.',
    content: `The introduction of cutting-edge processing technologies in Uganda's gold sector is revolutionizing quality control and production efficiency. XRF analysis systems, advanced refining equipment, and blockchain-based tracking systems are becoming standard in modern operations. These technological advances enable suppliers to achieve higher purity levels (99.5%+ consistency) while reducing processing timelines. Investment in laboratory infrastructure has attracted international quality audits, with many operations now meeting European and American standards for precious metals. The tech-forward approach also improves chain-of-custody documentation, making it easier for international buyers to verify product authenticity and origin. Training programs for process operators ensure sustained quality improvements across the sector.`,
    image: 'https://www.goldmarket.fr/wp-content/uploads/2025/08/31417e2ethumbnail.jpeg.webp',
  },
  {
    id: 5,
    title: 'Global Gold Prices Support Supplier Growth in Uganda',
    date: 'August 2025',
    dateShort: 'Aug 2025',
    category: 'Markets',
    excerpt:
      'Stable and favorable global gold pricing trends continue to provide strong incentives for increased production and supplier expansion.',
    content: `Global precious metals markets have remained robust, providing a supportive environment for Uganda's mining and supply sector. Stable pricing trends, combined with growing international demand for African-sourced gold, have created favorable conditions for both established suppliers and new market entrants. Central banks and institutional investors continue to increase gold reserves, driving consistent demand. African precious metals have gained prominence as investors seek portfolio diversification and ethical sourcing options. The commodity's status as a hedge against economic uncertainty has sustained purchase interest from commercial and investment sectors globally. For Uganda-based suppliers, this market environment translates to sustained buyer interest and competitive pricing opportunities.`,
    image: 'https://goldbuyersafrica.com/wp-content/uploads/2026/01/Gold-Market-in-Uganda.avif?w=800&h=400',
  },
  {
    id: 6,
    title: 'Sustainability Initiatives Position Uganda as Leader in Ethical Mining',
    date: 'July 2025',
    dateShort: 'Jul 2025',
    category: 'Sustainability',
    excerpt:
      'Environmental and community-focused initiatives in Uganda\'s gold sector are attracting socially conscious international buyers.',
    content: `Uganda's commitment to sustainable mining practices is gaining international recognition and opening doors with environmentally conscious buyers. Conservation programs protecting mining regions' ecosystems, combined with community development initiatives, have set new industry standards. Mining operators are increasingly implementing water management systems, reforestation programs, and local employment initiatives. These efforts resonate strongly with European and North American buyers seeking gold from responsible sources. NGOs and industry groups have documented improvements in mining practices and community relations across major production areas. The emphasis on sustainability not only enhances Uganda's reputation but also supports premium pricing for certified ethical gold, benefiting the entire supply chain from miners to international distributors.`,
    image:
      'https://www.watchdoguganda.com/wp-content/uploads/2024/12/7f6045bc8fd427e2c4b03e2c26f703a91.png',
  },
];

export const articleIds = articles.map((a) => a.id);

export function getArticleById(id: number): NewsArticle | undefined {
  return articles.find((a) => a.id === id);
}

/** Home page grid — matches first four stories */
export const homeNewsTeaserIds = [1, 2, 3, 4] as const;
