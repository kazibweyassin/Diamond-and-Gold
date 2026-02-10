import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Diamond Capital Africa - Company & Values',
  description: 'Learn about Diamond Capital Africa: our mission for responsible gold trading, operational standards, compliance certifications, and field operations in Uganda and Congo.',
  keywords: 'about Diamond Capital Africa, gold company, responsible sourcing, compliance, mining operations, company mission',
  openGraph: {
    title: 'About Diamond Capital Africa - Company & Values',
    description: 'Mission-driven gold supplier with verified operations and compliance standards.',
    url: 'https://diamondcapitalafrica.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
