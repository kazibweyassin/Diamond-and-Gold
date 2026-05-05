import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamond Capital Africa",
  description: "Privacy Policy for Diamond Capital Africa - Learn how we protect your data",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
