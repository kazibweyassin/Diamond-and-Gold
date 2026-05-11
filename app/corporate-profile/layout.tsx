import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Profile',
  description: 'Learn about Diamond Capital Africa – our business model, operations, certifications, and commitment to ethical precious metals trading with full compliance and transparency.',
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/corporate-profile',
  },
  openGraph: {
    title: 'Corporate Profile',
    description: 'Learn about Diamond Capital Africa – our business model, operations, certifications, and commitment to ethical precious metals trading.',
    url: 'https://diamondcapitalafrica.com/corporate-profile',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Profile',
    description: 'Our business pillars, operations, and global standards for precious metals trading.',
  },
};

export default function CorporateProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
