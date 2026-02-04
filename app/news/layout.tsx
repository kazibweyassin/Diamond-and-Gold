import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Industry News & Updates - Victoria Gold',
  description: 'Latest news on Uganda gold mining, market trends, mining developments, and precious metals industry updates.',
  keywords: 'gold news, Uganda mining, precious metals, gold market, industry updates',
  openGraph: {
    title: 'Gold Industry News & Updates',
    description: 'Stay informed on Uganda gold market trends and industry news.',
    url: 'https://victoriagold.ac.ug/news',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/news',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
