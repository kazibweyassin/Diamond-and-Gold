'use client';

import Image from 'next/image';
import Link from 'next/link';

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  label: string;
  links: FooterLink[];
};

type SharedFooterProps = {
  sections?: FooterSection[];
  brandDescription?: string;
  copyright?: string;
  bottomNote?: string;
  showBrandImage?: boolean;
  variant?: 'default' | 'compact';
};

const defaultSections: FooterSection[] = [
  {
    label: 'Company',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Services', href: '/products' },
      { name: 'Partners', href: '/partners' },
      { name: 'Account holders', href: '/account-holders' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Process', href: '/process' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Investor portal ↗', href: 'https://invest.diamondcapitalafrica.com', external: true },
    ],
  },
  {
    label: 'Contact',
    links: [
      { name: 'Kampala, Uganda', href: '#' },
      { name: 'info@diamondcapitalafrica.com', href: 'mailto:info@diamondcapitalafrica.com' },
      { name: '+256 (0) 704 833 021', href: 'tel:+256704833021' },
    ],
  },
  {
    label: 'Standards',
    links: [
      { name: 'Responsible sourcing', href: '/compliance' },
      { name: 'Custody documentation', href: '/compliance' },
      { name: 'Lab-verified purity', href: '/compliance' },
      { name: 'OECD compliance', href: '/compliance' },
    ],
  },
];

const compactDefaultSections: FooterSection[] = [
  {
    label: 'Company',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Corporate profile', href: '/corporate-profile' },
      { name: 'Our process', href: '/process' },
      { name: 'Compliance', href: '/compliance' },
    ],
  },
  {
    label: 'Services',
    links: [
      { name: 'Gold sourcing', href: '/products#transaction-handling' },
      { name: 'Logistics', href: '/products#secure-logistics' },
      { name: 'Assay services', href: '/products#assay-testing' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { name: 'Documentation', href: '/compliance' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { name: 'Email', href: 'mailto:info@diamondcapitalafrica.com' },
      { name: 'Investor portal', href: 'https://invest.diamondcapitalafrica.com', external: true },
    ],
  },
];

export default function SharedFooter({
  sections,
  brandDescription,
  copyright,
  bottomNote,
  showBrandImage = true,
  variant = 'default',
}: SharedFooterProps) {
  const resolvedSections = sections || (variant === 'compact' ? compactDefaultSections : defaultSections);
  const resolvedBrandDescription =
    brandDescription || 'Gold from Uganda — properly sourced, fully documented, and delivered worldwide.';
  const resolvedCopyright = copyright || '© 2026 Diamond Capital Africa. All rights reserved.';
  const resolvedBottomNote = bottomNote || 'Serving East & Central Africa · Global delivery available';

  return (
    <footer className="bg-[var(--color-green-deep)] border-t border-[var(--color-green-dark)]/40 px-6 py-16 text-[var(--color-white)]">
      <div className="mx-auto max-w-7xl">
        <div className={variant === 'compact' ? 'mb-12 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]' : 'mb-12 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]'}>
          <div>
            {showBrandImage ? (
              <Image src="/Logo.png" alt="Diamond Capital Africa" width={140} height={40} className="opacity-70" />
            ) : null}

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{resolvedBrandDescription}</p>
          </div>

          {resolvedSections.map((section) => (
            <div key={section.label}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/85">{section.label}</p>

              <div className="flex flex-col gap-3 text-sm">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex w-fit max-w-full break-words text-[var(--color-green-tint)] transition hover:text-[var(--color-green-bright)]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--color-green-dark)]/40 pt-6 text-[11px] text-white/80 md:flex-row md:items-center md:justify-between">
          <span>{resolvedCopyright}</span>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Link href="/privacy-policy" className="inline-flex w-fit text-[var(--color-green-tint)] transition hover:text-[var(--color-green-bright)]">
              Privacy Policy
            </Link>
            <span className="leading-relaxed">{resolvedBottomNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}