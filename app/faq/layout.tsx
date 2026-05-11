import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What makes Diamond Capital Africa different from other gold suppliers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Diamond Capital Africa operates with full licensing and regulatory compliance in Uganda and provides end-to-end documentation, verified origin certificates, independent lab testing, and secure logistics coordination.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Diamond Capital Africa ensure secure gold transactions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use KYC verification, custody documentation, insured logistics, and escrow options. Every shipment includes tracking, insurance coverage, and export documentation aligned with international standards.',
                },
              },
              {
                '@type': 'Question',
                name: 'What documentation is required for exporting gold from Uganda?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Export documentation includes origin certificates, assay reports, mining licenses, custody chain records, export permits, buyer KYC documents, and customs declarations.',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
