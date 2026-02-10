import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions - Diamond Capital Africa',
  description: 'Diamond Capital Africa FAQ: answers about minimum order quantity, purity verification, payment terms, delivery timelines, and compliance checks.',
  keywords: 'gold FAQ, gold questions, MOQ, purity verification, gold payment, gold delivery, gold trading FAQ',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about gold orders, pricing, and delivery.',
    url: 'https://diamondcapitalafrica.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
