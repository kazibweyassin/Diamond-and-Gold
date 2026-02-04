'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  cta?: {
    label: string;
    href: string;
  };
}

export default function Header({ cta = { label: 'Request Quote', href: '/contact' } }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 text-amber-300">
            VG
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">Victoria Gold</p>
            <p className="text-xs text-slate-400">Uganda • Congo</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-amber-300 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href={cta.href}
            className="hidden rounded-full border border-amber-400/60 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10 md:inline-block"
          >
            {cta.label}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-amber-300 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-amber-300 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-amber-300 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <ul className="flex flex-col space-y-0 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-slate-200 hover:text-amber-300 transition border-b border-white/5 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={cta.href}
                className="block w-full rounded-full border border-amber-400/60 px-4 py-2 text-center text-sm font-semibold text-amber-200 hover:bg-amber-400/10 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cta.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
