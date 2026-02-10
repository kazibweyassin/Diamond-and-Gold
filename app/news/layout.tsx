import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Industry News & Updates - Diamond Capital Africa',
  description: 'Latest news on Uganda gold mining, market trends, mining developments, and precious metals industry updates.',
  keywords: 'gold news, Uganda mining, precious metals, gold market, industry updates',
  openGraph: {
    title: 'Gold Industry News & Updates',
    description: 'Stay informed on Uganda gold market trends and industry news.',
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
