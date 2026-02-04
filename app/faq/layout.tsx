import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions - Victoria Gold',
  description: 'Victoria Gold FAQ: answers about minimum order quantity, purity verification, payment terms, delivery timelines, and compliance checks.',
  keywords: 'gold FAQ, gold questions, MOQ, purity verification, gold payment, gold delivery, gold trading FAQ',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about gold orders, pricing, and delivery.',
    url: 'https://victoriagold.ac.ug/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
