import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Products & Catalog - Victoria Gold',
  description: 'Browse our certified gold products: 24K gold bars, coins, dust, and custom forms. 99.5%+ purity, competitive pricing, instant quotes available.',
  keywords: 'gold products, gold bars, gold coins, gold dust, certified gold, bulk gold, gold catalog, gold pricing',
  openGraph: {
    title: 'Gold Products & Catalog - Victoria Gold',
    description: 'Certified gold products available: bars, coins, dust, and custom forms.',
    url: 'https://victoriagold.ac.ug/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
