import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Process - How Gold Delivery Works - Diamond Capital Africa',
  description: 'Diamond Capital Africa order process: from quotation to delivery. Learn our 4-step fulfillment process, payment options, and logistics timeline.',
  keywords: 'gold order process, gold delivery, order fulfillment, gold quotation, gold payment, logistics, gold shipping',
  openGraph: {
    title: 'Order Process - How Gold Delivery Works',
    description: 'Follow our transparent 4-step order and delivery process.',
    url: 'https://diamondcapitalafrica.com/process',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/process',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
