import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Holders - Diamond Capital Africa',
  description: 'Begin onboarding as a verified account holder for recurring gold supply, KYC review, and priority ordering.',
  keywords: 'account holder onboarding, gold buyer account, KYC, verified buyer, Diamond Capital Africa',
  openGraph: {
    title: 'Account Holders - Diamond Capital Africa',
    description: 'Begin onboarding as a verified account holder for recurring gold supply, KYC review, and priority ordering.',
    url: 'https://diamondcapitalafrica.com/account-holders',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/account-holders',
  },
};

export default function AccountHoldersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
