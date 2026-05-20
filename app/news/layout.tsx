import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates - Diamond Capital Africa',
  description: 'Latest news and updates on gold markets, compliance standards, and Diamond Capital Africa operations.',
  keywords: 'gold news, market updates, gold prices, compliance updates, Diamond Capital Africa news',
  openGraph: {
    title: 'News & Updates',
    description: 'Stay informed with latest gold market news and company updates.',
    url: 'https://diamondcapitalafrica.com/news',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/news',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
