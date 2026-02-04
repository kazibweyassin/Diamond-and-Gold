import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Victoria Gold',
  description: 'Get in touch with Victoria Gold. Call, email, or submit an inquiry for gold pricing, orders, and partnership opportunities.',
  keywords: 'contact Victoria Gold, gold inquiry, pricing request, gold order, partnership',
  openGraph: {
    title: 'Contact Victoria Gold',
    description: 'Contact our team for gold quotes, orders, and business inquiries.',
    url: 'https://victoriagold.ac.ug/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://victoriagold.ac.ug/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
