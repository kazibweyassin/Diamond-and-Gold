import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Diamond Capital Africa',
  description: 'Get in touch with Diamond Capital Africa. Call, email, or submit an inquiry for gold pricing, orders, and partnership opportunities.',
  keywords: 'contact Diamond Capital Africa, gold inquiry, pricing request, gold order, partnership',
  openGraph: {
    title: 'Contact Diamond Capital Africa',
    description: 'Contact our team for gold quotes, orders, and business inquiries.',
    url: 'https://diamondcapitalafrica.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
