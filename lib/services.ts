export interface Service {
  id: string;
  name: string;
  coverage: string;
  turnaround: string;
  documentation: string;
  terms: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'gold-refining',
    name: 'Gold Refining & Smelting',
    coverage: 'Global',
    turnaround: 'Varies',
    documentation: 'Purity certificates',
    terms: 'Sustainable methods',
    description: 'High-purity refining and smelting using eco‑friendly processes.',
    features: ['99.99% purity', 'Eco-friendly', 'Custom alloys', 'Smelting services'],
    image: '/goldsmelting.webp',
  },
  {
    id: 'assay-testing',
    name: 'Assaying & Testing',
    coverage: 'Certified labs',
    turnaround: '24-72h results',
    documentation: 'Assay certificates',
    terms: 'Independent verification',
    description: 'Precise assay services with fast, digital reports from accredited labs.',
    features: ['XRF testing', 'Digital reports', '24‑h turnaround', 'Buyer-ready files'],
    image: '/assaying.jpg',
  },
  {
    id: 'transaction-handling',
    name: 'End-to-End Transaction Handling',
    coverage: 'Uganda, Congo & global',
    turnaround: '48-72h coordination',
    documentation: 'KYC & compliance pack',
    terms: 'Escrow options available',
    description: 'From sourcing to export, we manage the full transaction with compliance-first documentation.',
    features: ['Sourcing', 'Compliance', 'Export logistics', 'Buyer communication'],
    image: '/Gold-bars.webp',
  },
  {
    id: 'secure-logistics',
    name: 'Secure Logistics & Shipping',
    coverage: 'Air & ground',
    turnaround: '48-72h dispatch',
    documentation: 'Insurance & tracking',
    terms: 'Insured transport',
    description: 'Insured transport with live tracking and coordinated export delivery worldwide.',
    features: ['Secure custody', 'Insured routes', 'Live tracking', 'Delivery SLAs'],
    image: '/man-pouring-melted-metal-workshop-large.jpg-',
  },
  {
    id: 'compliance-docs',
    name: 'Compliance & Documentation',
    coverage: 'Regulatory ready',
    turnaround: '3-5 days',
    documentation: 'Full compliance pack',
    terms: 'Audit support',
    description: 'Structured documentation for origin, KYC, export compliance and sustainability reporting.',
    features: ['Origin verification', 'Custody records', 'KYC support', 'Export compliance'],
    image: '/GLgGd4NhWQy3r5s-1000x600.jpg',
  },
  {
    id: 'vaulting-storage',
    name: 'Vaulting & Secure Storage',
    coverage: 'Kampala hub',
    turnaround: 'Immediate',
    documentation: 'Access logs',
    terms: 'Short-term holds',
    description: 'Secure storage with documented access and custody tracking.',
    features: ['Controlled access', 'Secure vaults', 'Custody logs', 'Short-term holding'],
    image: 'gold-bar.jpg',
  },

  {
    id: 'mineral-law-policy',
    name: 'Mineral Law & Policy Advisory',
    coverage: 'Uganda & regional',
    turnaround: 'Project‑based/ongoing',
    documentation: 'Legal opinions & regulatory guidance',
    terms: 'Client‑confidential engagement',
    description: 'Specialised legal services for mining and minerals projects, covering licensing, compliance, transactions and policy under Uganda’s 2022 Mining & Minerals Act and related laws.',
    features: [
      'Licensing & regulatory compliance',
      'Transaction advisory & JV agreements',
      'Due diligence & title verification',
      'Local content & community relations',
      'Environmental, health & safety compliance',
      'Taxation, royalties & fiscal planning',
      'Dispute resolution & litigation support',
    ],
    image: '/law.png',
  },

];
