import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Trading Services - Diamond Capital Africa',
  description: 'End-to-end gold trading services: sourcing, sales & export, assay coordination, logistics, compliance documentation, and secure vaulting. Professional gold trading solutions.',
  keywords: 'gold trading services, gold sourcing, gold export, assay coordination, gold logistics, compliance documentation, gold vaulting',
  openGraph: {
    title: 'Gold Trading Services - Diamond Capital Africa',
    description: 'Comprehensive gold trading services: sourcing, export, assay, logistics, compliance, and vaulting.',
    url: 'https://diamondcapitalafrica.com/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
