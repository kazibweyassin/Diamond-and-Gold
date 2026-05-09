// ---------------------------------------------------------------------------
// articles.ts  –  Diamond Capital Africa  |  News & Insights
// ---------------------------------------------------------------------------
// All figures sourced from Bank of Uganda, Uganda Investment Authority, and
// major Ugandan press (Daily Monitor, New Vision, The Independent) – 2025/26.
// ---------------------------------------------------------------------------

export type NewsCategory =
  | 'Mining'
  | 'Compliance'
  | 'Trade'
  | 'Technology'
  | 'Markets'
  | 'Sustainability'
  | 'Policy'
  | 'Industry';

export type NewsArticle = {
  id: number;
  title: string;
  /** Full date label for article page and /news index (e.g. "January 2026") */
  date: string;
  /** Compact label for cards and grids (e.g. "Jan 2026") */
  dateShort: string;
  /** ISO 8601 date string for <time datetime="…"> and sorting */
  isoDate: string;
  category: NewsCategory;
  /** 1–2 sentences shown on the /news index and article intro */
  excerpt: string;
  /** Optional shorter line for the home-page grid only (falls back to excerpt) */
  homeTeaser?: string;
  /** 2–3 sentence summary for meta descriptions / share cards */
  brief: string;
  /** Full article body (plain prose, may include \n\n paragraph breaks) */
  content: string;
  /** Publicly accessible image URL */
  image: string;
  /** Alt text for accessibility */
  imageAlt: string;
  /** Optional external source attribution */
  sourceName?: string;
  sourceUrl?: string;
};

// ---------------------------------------------------------------------------
// Article data
// ---------------------------------------------------------------------------

export const articles: NewsArticle[] = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Uganda's Gold Exports Hit Record $5.8 Billion in 2025",
    date: 'January 2026',
    dateShort: 'Jan 2026',
    isoDate: '2026-01-09',
    category: 'Markets',
    excerpt:
      'Bank of Uganda data confirms gold export earnings reached an unprecedented $5.8 billion in the year ending November 2025 — a 44 percent rise year-on-year — cementing gold as the country\'s single largest export commodity, surpassing coffee for the first time.',
    homeTeaser:
      'Gold surpasses coffee to become Uganda\'s #1 export, with Bank of Uganda recording $5.8 billion in earnings.',
    brief:
      'Uganda\'s gold sector delivered a landmark performance in 2025, with Bank of Uganda figures showing export earnings of $5.8 billion — up 44 percent on the prior year\'s $3.3 billion. The surge reflects a structural shift away from raw-mineral exports toward domestic refining and value addition, aided by favourable global prices and tighter regulatory oversight. Gold and coffee together accounted for 76.8 percent of Uganda\'s total export earnings, underlining the sector\'s central role in the national economy.',
    content: `Uganda has firmly established itself as one of Africa's fastest-rising gold exporters. Bank of Uganda figures for the year ending November 2025 show gold export earnings reaching $5.8 billion (approximately UGX 21.1 trillion) — a 44 percent increase from $3.3 billion the previous year. In a historic shift, gold overtook coffee as Uganda's single largest export commodity, with the two sectors together accounting for 76.8 percent of total national export revenue.

The performance reflects deliberate policy choices as much as favourable market conditions. The government's push for domestic value addition — including a ban on unprocessed mineral exports — has driven investment in refining infrastructure, enabling Uganda to capture a greater share of the gold value chain. Uganda exported 8,298 kilogrammes of gold in October 2025 alone, more than double the 3,765 kilogrammes shipped in September, according to central bank data.

Global dynamics also played a role. Gold prices reached record highs entering 2026, driven by geopolitical uncertainty, inflationary pressures and sustained central bank purchases worldwide. For Uganda-based suppliers such as Diamond Capital Africa, this environment translates into sustained buyer interest, premium pricing opportunities and growing demand for fully certified, refined product.

The export boom has strengthened Uganda's foreign exchange position and helped stabilise the shilling. Analysts project continued growth as Uganda's refining capacity expands and international buyers increasingly seek documented, conflict-free African gold.`,
    image: 'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
    imageAlt: 'Refined gold bars ready for export at a Ugandan refinery',
    sourceName: 'Daily Monitor / Bank of Uganda',
    sourceUrl:
      'https://www.monitor.co.ug/uganda/business/commodities/2025-uganda-s-exports-hit-record-shs46-trillion--5320056',
  },

  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Wagagai Gold Mine Opens in Busia — Uganda's Largest Industrial Project",
    date: 'August 2025',
    dateShort: 'Aug 2025',
    isoDate: '2025-08-18',
    category: 'Mining',
    excerpt:
      'President Museveni commissioned the Wagagai Gold Mine in Busia District on 16 August 2025, marking the launch of Uganda\'s biggest and most technologically advanced gold project, with capacity to produce 1.2 metric tonnes of refined 99.9%-purity gold per year.',
    homeTeaser:
      'Wagagai Mine — a $250 million, 30-million-tonne project — opens in Busia, transforming Uganda\'s industrial mining landscape.',
    brief:
      'The Wagagai Gold Mine in Alupe, Busia District — Uganda\'s largest gold project — was officially commissioned in August 2025 after a $150 million Phase I investment by Liaoning Hongda Group. The state-of-the-art refinery processes 5,000 tonnes of ore per day and produces gold at 99.9% purity, directly meeting international bullion standards. The project is expected to generate over $100 million annually for 21 years and create more than 5,000 jobs at full capacity.',
    content: `President Yoweri Museveni commissioned the Wagagai Gold Mine on 16 August 2025 at Alupe Village, Buteba Sub-county, Busia District — marking a transformative moment for Uganda's mining sector. The project, operated by Wagagai Mining Uganda Company Limited (a subsidiary of Beijing-based Liaoning Hongda Enterprise), spans 9.224 square kilometres with proven reserves of 30 million tonnes of gold ore at an average grade of 0.81 grammes per tonne.

Phase I, completed in April 2025 after a $150 million investment, brought online a state-of-the-art refinery capable of processing 5,000 tonnes of ore per day and producing 1.2 metric tonnes of refined gold annually at 99.9% purity — suitable for direct use in international bullion markets. Phase II, currently under development, is expected to push total investment to $250 million and increase production significantly.

"I commissioned the Wagagai gold mining project in Busia District today, celebrating a significant step towards processing minerals in Uganda. Under my leadership, we will not export unprocessed minerals, as this undermines our economy," President Museveni stated. The project creates over 2,000 direct jobs in Phase I, with the number expected to exceed 5,000 at full operational capacity. Annual tax remittances are projected at UGX 60 billion, with the mine's 21-year lifespan expected to generate over $100 million in revenue annually for Uganda.

Energy Minister Ruth Nankabirwa linked the commissioning to the government's Domestic Gold Purchase Programme, a new initiative through which the Bank of Uganda will acquire locally refined gold to diversify the country's foreign exchange reserves. For suppliers like Diamond Capital Africa operating within Uganda's formalised gold ecosystem, Wagagai's arrival significantly expands the pool of certified, high-purity product available for international buyers.`,
    image:
      'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
    imageAlt: "President Museveni at the commissioning of Wagagai Gold Mine, Busia District, August 2025",
    sourceName: 'Uganda Investment Authority',
    sourceUrl:
      'https://ugandainvest.go.ug/president-museveni-commissions-ugandas-biggest-gold-project/',
  },

  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Uganda Adopts ICGLR Certification, Becoming Fifth Great Lakes Member State',
    date: 'September 2025',
    dateShort: 'Sep 2025',
    isoDate: '2025-09-28',
    category: 'Compliance',
    excerpt:
      'Uganda has become the fifth member state to implement the International Conference on the Great Lakes Region (ICGLR) Regional Certification Mechanism, establishing a mine-to-export traceability system for gold and 3T minerals that opens doors to regulated international markets.',
    homeTeaser:
      'ICGLR certification adoption positions Uganda\'s gold as fully traceable and conflict-free for global buyers.',
    brief:
      'Uganda\'s adoption of the ICGLR Regional Certification Mechanism marks a pivotal step in formalising the country\'s mineral supply chains. The certification covers gold and 3T minerals (tin, tantalum, tungsten) from mine to export, improving transparency and enabling small-scale miners to access regulated international markets. The government is establishing gold buying centres in Busia, Kasanda, Buhweju, Kampala and Entebbe to support the rollout.',
    content: `Uganda has become the fifth member state of the International Conference on the Great Lakes Region (ICGLR) to adopt the Regional Certification Mechanism (RCM) — a mine-to-export traceability system for gold and 3T minerals (tin, tantalum and tungsten). The move represents a significant step toward formalising Uganda's mineral trade and satisfying the growing compliance requirements of international buyers.

The ICGLR RCM system tracks minerals from the point of extraction through to export, ensuring they are free from conflict-linked practices, child labour and armed-group involvement. By improving transparency and accountability, the certification enables Ugandan miners and suppliers to access regulated international markets on fairer terms and achieve better pricing for certified product.

Agnes Alaba, Commissioner at the Ministry of Energy and Mineral Development, confirmed that mine inspections are underway to ensure sites comply with labour and environmental standards. The government is also recruiting additional mine inspectors to strengthen oversight across the country's major gold belts in Busia, Kasanda, Buhweju, Mubende and Karamoja.

In parallel, Uganda is building a traceability system modelled on Tanzania's framework and plans to establish dedicated gold buying centres in Busia, Kasanda, Buhweju, Kampala and Entebbe. These centres will provide formal channels for artisanal and small-scale miners to sell their production and access certification support. For international buyers seeking fully documented, conflict-free Ugandan gold, these developments significantly reduce due-diligence burden and reinforce the credibility of supply chains managed by compliant operators such as Diamond Capital Africa.`,
    image:
      'https://www.newvision.co.ug/uploads/images/2025/09/kedi-and-kutesa-discussing-during-a-meeting-on-mining-at-the-kabira-country_NV_219454_3.jpg',
    imageAlt: 'Mining officials at a compliance and certification meeting in Kampala',
    sourceName: 'New Vision',
    sourceUrl:
      'https://www.newvision.co.ug/category/business/uganda-steps-up-efforts-on-icglr-mineral-cert-NV_219454',
  },

  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'East African Trade Corridor Drives Regional Gold Hub Strategy',
    date: 'October 2025',
    dateShort: 'Oct 2025',
    isoDate: '2025-10-15',
    category: 'Trade',
    excerpt:
      'Uganda\'s strategic position within the East African Community is being leveraged to develop a regional gold hub, with the country importing raw gold from Tanzania, Zimbabwe and the DRC for refining and re-export to the UAE, Europe and Asia.',
    homeTeaser:
      'Uganda\'s refining infrastructure turns the country into East Africa\'s gold trading hub, with the UAE as the primary destination.',
    brief:
      'Uganda has emerged as a regional gold processing and trade hub, importing raw gold from neighbouring Tanzania, Zimbabwe and the DRC, refining it domestically and exporting finished bullion primarily to the UAE — the world\'s largest gold trading market. This value-addition model, supported by EAC trade frameworks and Kampala\'s growing refinery infrastructure, positions Uganda as a strategic gateway for international buyers seeking African-sourced gold.',
    content: `Uganda's emergence as a regional gold hub is one of the most significant structural shifts in East Africa's precious metals economy. Rather than simply exporting its own artisanal production, Uganda has developed a model of importing raw and semi-processed gold from neighbouring Tanzania, Zimbabwe and the Democratic Republic of Congo, refining it domestically to international bullion standards, and re-exporting finished product to global markets.

The UAE remains Uganda's primary gold export destination, consuming the lion's share of refined output — a reflection of Dubai's position as the world's largest gold trading hub. Italy, Kenya, DRC and South Sudan are also significant markets for Ugandan gold and other exports. This geographic diversification reduces dependence on any single buyer and strengthens Uganda's negotiating position in international trade.

The East African Community's progressive tariff reductions and streamlined border procedures have made cross-border gold sourcing more efficient. Kampala's growing infrastructure of secure storage facilities and certified assay laboratories supports the refining model, while standardised documentation requirements facilitate faster export clearances. John Bosco Lwere of the Uganda Free Zones and Export Promotions Authority notes that "Uganda's strategic location in East Africa makes it an attractive hub for trade and commerce."

For international buyers working with Diamond Capital Africa, this regional hub model means access to larger, more consistent volumes of certified gold — combined with the traceability documentation and compliance standards demanded by European and North American markets.`,
    image:
      'https://goldbuyersafrica.com/wp-content/uploads/2026/01/Gold-Market-in-Uganda.avif',
    imageAlt: 'Gold trading and export operations in East Africa',
    sourceName: 'Daily Monitor',
    sourceUrl:
      'https://www.monitor.co.ug/uganda/business/commodities/2025-uganda-s-exports-hit-record-shs46-trillion--5320056',
  },

  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: '99.9% Purity Standard Becomes the New Benchmark for Ugandan Gold',
    date: 'September 2025',
    dateShort: 'Sep 2025',
    isoDate: '2025-09-10',
    category: 'Technology',
    excerpt:
      'Ugandan refineries — led by Wagagai Mining and Eurogold Refinery — are now consistently producing gold at 99.9% purity, meeting the London Bullion Market Association (LBMA) good delivery standard and unlocking direct access to global institutional buyers.',
    homeTeaser:
      'Ugandan refineries hit 99.9% purity — the LBMA good delivery standard — attracting institutional buyers worldwide.',
    brief:
      'Investment in modern refining and assay technology has driven Uganda\'s gold purity standards to 99.9%, satisfying LBMA good delivery requirements. Facilities operated by Wagagai Mining, Eurogold Refinery and Simba Gold Refinery use XRF analysis systems, advanced smelting equipment and blockchain-based chain-of-custody tracking to guarantee product integrity. This technological leap directly benefits international buyers by eliminating re-refining costs and simplifying compliance audits.',
    content: `A technological step-change in Uganda's gold processing sector is raising standards across the industry. Multiple Ugandan refineries now consistently produce gold at 99.9% purity — satisfying the London Bullion Market Association's good delivery standard and enabling direct placement with institutional buyers who previously required re-refining in third-party facilities.

Wagagai Mining's facility in Busia, which uses what General Manager Tan Jiuchang describes as "internationally advanced equipment," is built to produce 99.9% purity gold from local ore at a rate of 5,000 tonnes per day. Eurogold Refinery Uganda, the country's first wholly Ugandan-owned refinery, founded by Arua-based entrepreneur Benard Feni, has also achieved the 99.9% purity benchmark and established offices in Dubai to service international bullion market demand directly. Simba Gold Refinery Limited, operational since late 2024, adds to Uganda's growing refining footprint.

Modern assay technology — including portable X-ray fluorescence (XRF) analysers and laboratory fire assay systems — allows rapid, precise verification of gold content at multiple points in the supply chain. Blockchain-based tracking systems are increasingly being adopted to create tamper-evident chain-of-custody records from mine to export, addressing the due-diligence requirements of European and North American buyers.

For buyers working with Diamond Capital Africa, these technological advances mean shorter lead times, reduced need for independent re-testing, and seamless integration with international compliance frameworks. Training programmes for process operators and laboratory technicians ensure that the quality gains are institutionalised rather than dependent on individual facilities.`,
    image:
      'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
    imageAlt: 'State-of-the-art gold refining equipment at a Ugandan processing facility',
    sourceName: 'Uganda Investment Authority / The Independent',
    sourceUrl: 'https://www.independent.co.ug/gold-exports-power-ugandas-mineral-economy-as-new-industry-heavyweights-emerge/',
  },

  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Global Gold Prices at Record Highs as Central Bank Demand Surges',
    date: 'December 2025',
    dateShort: 'Dec 2025',
    isoDate: '2025-12-01',
    category: 'Markets',
    excerpt:
      'Gold prices reached all-time highs entering 2026, driven by sustained central bank purchases, geopolitical uncertainty and inflation hedging — creating an exceptionally favourable environment for Uganda\'s growing export sector and its international trade partners.',
    homeTeaser:
      'Record global gold prices, driven by central bank buying, create sustained demand for Uganda\'s refined output.',
    brief:
      'International gold markets delivered record pricing through 2025 and into 2026, underpinned by central bank reserve diversification, geopolitical tensions and investor demand for safe-haven assets. Africa\'s share of global central bank gold reserves increased significantly, with the Bank of Uganda initiating its own domestic gold purchase programme. For Uganda-based suppliers and their international clients, this market environment supports premium pricing and long-term demand stability.',
    content: `Gold prices reached historic levels entering 2026, reflecting a confluence of structural and cyclical forces that analysts expect to sustain elevated pricing through the medium term. Central banks worldwide — particularly those seeking to reduce dependence on the US dollar following the freezing of Russia's foreign exchange reserves in 2022 — have consistently increased gold purchases, creating a durable institutional demand floor.

Africa's central banks have followed this trend. Aggregate reserves across the continent reached approximately $530 billion in 2025, with gold's share rising to around 17 percent — up from less than 10 percent in 2022–23. Uganda's Bank of Uganda has responded by establishing a Domestic Gold Purchase Programme: a policy framework enabling it to acquire locally refined gold to strengthen its own reserve position and support currency stability.

For Uganda's export sector, the market environment has been transformative. Gold export earnings grew from $1.26 billion in 2019 to $5.8 billion in 2025 — a more than fourfold increase in six years. Uganda's net gain from the trade is approximately $200 million annually, reflecting the value added through domestic refining. Analysts at the IMF and World Bank have noted that diversified export earnings, now anchored by both gold and coffee, reduce Uganda's vulnerability to commodity-specific price shocks.

Diamond Capital Africa and other compliant suppliers are well-positioned within this environment. Sustained institutional demand, growing appetite from Gulf and European buyers, and Uganda's expanding refining infrastructure together create conditions for long-term, volume-stable supply relationships built on certified, ethically sourced product.`,
    image:
      'https://goldbuyersafrica.com/wp-content/uploads/2026/01/Gold-Market-in-Uganda.avif',
    imageAlt: 'Gold bullion bars representing record international gold market valuations',
    sourceName: 'The Independent Uganda / FurtherAfrica',
    sourceUrl: 'https://furtherafrica.com/2026/01/23/uganda-gold-exports-surge/',
  },

  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Uganda's 2022 Mining Act Creates Clearer Framework for International Investors",
    date: 'November 2025',
    dateShort: 'Nov 2025',
    isoDate: '2025-11-01',
    category: 'Policy',
    excerpt:
      'Regulations operationalising Uganda\'s 2022 Mining and Minerals Act are being finalised, introducing clearer licensing, stronger environmental safeguards and formalised routes for artisanal miners — giving international buyers greater confidence in Uganda\'s supply chain governance.',
    homeTeaser:
      'New Mining Act regulations formalise licensing and traceability, reducing risk for international buyers sourcing Ugandan gold.',
    brief:
      'Uganda\'s landmark 2022 Mining and Minerals Act is being brought into full operation through subsidiary regulations developed in consultation with the Uganda Chamber of Mines & Petroleum, industry operators and civil society. Key provisions include formalised artisanal mining licences, mandatory environmental impact assessments, strengthened export documentation requirements and increased penalties for non-compliant operators. The framework aligns Uganda\'s regulatory environment more closely with OECD due diligence guidance for responsible mineral supply chains.',
    content: `Uganda's 2022 Mining and Minerals Act represents the most comprehensive overhaul of the country's mineral governance framework in decades. Following the act's passage, the Ministry of Energy and Mineral Development and the Uganda Chamber of Mines & Petroleum have been working through an extensive consultation process to develop the subsidiary regulations required to bring its provisions into full operational effect.

Key elements of the regulatory package include formalised licencing pathways for artisanal and small-scale miners, who currently number between 400,000 and 600,000 direct participants (with an estimated two million benefiting indirectly). Bringing this segment into the formal economy is central to Uganda's efforts to improve supply chain transparency, increase government revenue and reduce the risk of conflict-linked or child-labour-associated gold entering export channels.

The act also strengthens export documentation requirements, increases penalties for non-compliant operators and mandates environmental impact assessments for new mining projects. High compliance costs have historically pushed some small-scale operators into informal activity; the regulations aim to address this through tiered requirements calibrated to operation size, coupled with government support for environmental assessments in priority areas.

For international buyers, these developments materially reduce supply chain due-diligence risk. Uganda's regulatory framework is converging with the OECD's Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas — a benchmark increasingly required by European and North American institutional purchasers. Diamond Capital Africa's compliance operations are built around these standards, positioning us to provide the documentation packages that sophisticated international buyers require.`,
    image:
      'https://ugandainvest.go.ug/wp-content/uploads/2025/08/W4-1536x1024.jpeg',
    imageAlt: 'Mining policy and regulatory framework consultation in Uganda',
    sourceName: 'Daily Monitor',
    sourceUrl:
      'https://www.monitor.co.ug/uganda/business/commodities/govt-working-on-regulations-to-operationalise-mining-law-4760374',
  },

  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Artisanal Miners Drive Sustainability Push Across Uganda's Gold Belts",
    date: 'July 2025',
    dateShort: 'Jul 2025',
    isoDate: '2025-07-15',
    category: 'Sustainability',
    excerpt:
      'With artisanal and small-scale mining employing an estimated 200,000 Ugandans directly, government and civil society initiatives are working to formalise operations, phase out mercury use and improve environmental practices — key requirements for international buyers seeking responsibly sourced gold.',
    homeTeaser:
      'Mercury phase-out programmes and community formalisation initiatives address environmental risks in Uganda\'s artisanal gold sector.',
    brief:
      'Artisanal and small-scale mining (ASM) forms the backbone of Uganda\'s gold sector, with an estimated 200,000 direct participants and two million indirect beneficiaries across Mubende, Kassanda, Busia, Buhweju and Karamoja. Sustainability initiatives — including mercury phase-out programmes, reforestation schemes and community development funds — are gaining traction, supported by multi-stakeholder frameworks including the Africa Laudato Si Conference hosted in Uganda in 2025. These improvements underpin the responsible sourcing credentials that international buyers increasingly demand.',
    content: `Artisanal and small-scale mining (ASM) is the backbone of Uganda's gold sector. Planet Gold, the ASM lobby group, estimates between 400,000 and 600,000 direct participants — 60 to 70 percent of whom are women and children — with an estimated two million Ugandans benefiting indirectly across major production areas including Mubende, Kassanda, Busia, Buhweju and the Karamoja sub-region.

The environmental and public health challenges associated with unregulated ASM are well documented. Uganda's National Environment Management Authority (NEMA) reports that artisanal miners release approximately 15,000 kilogrammes of mercury into the environment annually — a significant public health risk and a barrier to responsible sourcing certification for international buyers.

Addressing these challenges requires coordinated action across government, civil society and the private sector. The Africa Laudato Si 2025 Conference, held at Bethany Land Institute in Luweero District, convened stakeholders from across the continent to examine sustainable mining practice, ecological stewardship and community empowerment. Participants called for government support for alternative mercury-free mining techniques, investment in water management systems and formalised community benefit-sharing frameworks.

The government's Mining Act regulations include provisions for environmental impact assessments and mine inspections, with a focus on eliminating child labour and armed-group involvement. Woodcross Resources' success in establishing Uganda's only certified tin export operation — following government investment in a modern processing plant — provides a replicable model for the gold sector.

For Diamond Capital Africa, supply chain responsibility means actively engaging with and supporting formalisation efforts among the artisanal miners who contribute to our sourcing network. We maintain documented relationships with verified suppliers, conduct regular audits against ICGLR and OECD standards, and contribute to community development initiatives in the regions where our supply partners operate.`,
    image:
      'https://www.watchdoguganda.com/wp-content/uploads/2024/12/7f6045bc8fd427e2c4b03e2c26f703a91.png',
    imageAlt: 'Artisanal miners working in Uganda\'s gold belt regions',
    sourceName: 'Daily Monitor / Africa Laudato Si 2025',
    sourceUrl:
      'https://www.monitor.co.ug/uganda/special-reports/mad-dash-for-gold-degrades-ecosystem-5144832',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const articleIds = articles.map((a) => a.id);

export function getArticleById(id: number): NewsArticle | undefined {
  return articles.find((a) => a.id === id);
}

/** Articles sorted newest → oldest by isoDate */
export const articlesSorted = [...articles].sort(
  (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
);

/** Home-page grid: four most recent articles */
export const homeNewsTeaserIds = articlesSorted.slice(0, 4).map((a) => a.id) as number[];

/** Articles by category */
export function getArticlesByCategory(category: NewsCategory): NewsArticle[] {
  return articlesSorted.filter((a) => a.category === category);
}