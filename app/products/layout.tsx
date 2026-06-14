import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Trading Services & Certified Gold Bars | Diamond Capital Africa',
  description: 'End-to-end services: ethically sourced 99.5%+ and 99.99% gold bars, assay testing, secure logistics, compliance documentation, and vaulting from Uganda & Congo. Institutional gold supply.',
  keywords: ['gold trading services', 'certified gold bars Uganda', 'assay coordination', 'gold export Africa', 'ethical gold supplier', '99.99% refined gold', 'secure logistics gold', 'compliance documentation'],
  openGraph: {
    title: 'Gold Trading Services & Certified Gold Bars | Diamond Capital Africa',
    description: 'Sourcing, refining, assay, export logistics and full compliance for institutional buyers. 99.5%+ bars with complete paper trail.',
    url: 'https://diamondcapitalafrica.com/products',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Diamond Capital Africa gold products and services' }],
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Gold trading and export services',
            name: 'Diamond Capital Africa Gold Trading Services',
            provider: {
              '@type': 'Organization',
              name: 'Diamond Capital Africa',
              url: 'https://diamondcapitalafrica.com',
            },
            areaServed: ['Uganda', 'Congo', 'Global'],
            url: 'https://diamondcapitalafrica.com/products',
            description:
              'End-to-end gold trading services including sourcing, assay coordination, export logistics and compliance documentation.',
          }),
        }}
      />
      {children}
    </>
  );
}
