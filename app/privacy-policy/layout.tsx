import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Diamond Capital Africa - Learn how we protect your data",
  alternates: {
    canonical: 'https://diamondcapitalafrica.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Diamond Capital Africa - Learn how we protect your data',
    url: 'https://diamondcapitalafrica.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
