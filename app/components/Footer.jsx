'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const sections = [
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
        { name: 'Responsible sourcing', href: '#' },
        { name: 'Custody documentation', href: '#' },
        { name: 'Lab-verified purity', href: '#' },
        { name: 'OECD compliance', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#080E18] border-t border-white/5 px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/Logo.png"
              alt="Diamond Capital Africa"
              width={140}
              height={40}
              className="opacity-70"
            />

            <p className="mt-5 text-sm text-white/40 max-w-xs leading-relaxed">
              Gold from Uganda — properly sourced, fully documented, and delivered worldwide.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
                {section.label}
              </p>

              <div className="flex flex-col gap-3 text-sm">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/50 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/5 pt-6 text-[11px] text-white/30">
          <span>© 2026 Diamond Capital Africa. All rights reserved.</span>
          <span>Serving East & Central Africa · Global delivery available</span>
        </div>
      </div>
    </footer>
  );
}