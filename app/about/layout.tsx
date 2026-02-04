import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Victoria Gold - Company & Values',
  description: 'Learn about Victoria Gold: our mission for responsible gold trading, operational standards, compliance certifications, and field operations in Uganda and Congo.',
  keywords: 'about Victoria Gold, gold company, responsible sourcing, compliance, mining operations, company mission',
  openGraph: {
    title: 'About Victoria Gold - Company & Values',
    description: 'Mission-driven gold supplier with verified operations and compliance standards.',
    url: 'https://victoriagold.ac.ug/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
