import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Process - How Gold Delivery Works - Victoria Gold',
  description: 'Victoria Gold order process: from quotation to delivery. Learn our 4-step fulfillment process, payment options, and logistics timeline.',
  keywords: 'gold order process, gold delivery, order fulfillment, gold quotation, gold payment, logistics, gold shipping',
  openGraph: {
    title: 'Order Process - How Gold Delivery Works',
    description: 'Follow our transparent 4-step order and delivery process.',
    url: 'https://victoriagold.ac.ug/process',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/process',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
