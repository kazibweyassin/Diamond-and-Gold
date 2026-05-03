import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Profile | Diamond Capital Africa',
  description: 'Learn about Diamond Capital Africa – our business model, operations, certifications, and commitment to ethical precious metals trading with full compliance and transparency.',
  openGraph: {
    title: 'Corporate Profile | Diamond Capital Africa',
    description: 'Learn about Diamond Capital Africa – our business model, operations, certifications, and commitment to ethical precious metals trading.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Profile | Diamond Capital Africa',
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
