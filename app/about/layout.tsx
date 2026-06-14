import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Diamond Capital Africa | Ethical Gold Supplier Uganda & Congo',
  description: 'Diamond Capital Africa: Integrity-led gold trading from Uganda and Congo. Verified operations, full OECD compliance, assay-certified supply chains, and transparent custody for institutional buyers worldwide.',
  keywords: ['about Diamond Capital Africa', 'ethical gold supplier Uganda', 'Congo gold exporter', 'responsible sourcing gold', 'OECD compliant gold', 'assay certified gold bars', 'Kampala gold trading'],
  openGraph: {
    title: 'About Diamond Capital Africa | Ethical Gold Supplier from Uganda & Congo',
    description: 'Mission-driven, fully documented gold supply with on-the-ground verification and institutional-grade compliance.',
    url: 'https://diamondcapitalafrica.com/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Diamond Capital Africa operations' }],
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
