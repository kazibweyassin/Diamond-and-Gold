import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Documentation - Diamond Capital Africa',
  description: 'Diamond Capital Africa compliance documentation: assay reports, origin verification, custody chains, KYC support, and export compliance for gold traders.',
  keywords: 'gold compliance, assay reports, origin verification, custody documentation, KYC, export compliance, regulated gold trading',
  openGraph: {
    title: 'Compliance & Documentation - Diamond Capital Africa',
    description: 'Full documentation support and compliance for responsible gold trading.',
    url: 'https://diamondcapitalafrica.com/compliance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/compliance',
  },
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
