'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';

interface HeaderProps {
  cta?: {
    label: string;
    href: string;
  };
}

export default function Header({ cta = { label: 'Request Quote', href: '/contact' } }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // Services handled specially to show dropdown
    { label: 'Services', href: '/products' },
    { label: 'Partners', href: '/partners' },
    { label: 'Account Holders', href: '/account-holders' },
    { label: 'News', href: '/news' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold-200 bg-cream/90 backdrop-blur">
      {/* Announcement bar */}
      <div className="bg-gold-600 px-4 py-2 text-center text-xs font-semibold text-white">
        Want to invest in Uganda&apos;s gold sector?{' '}
        <a
          href="https://invest.diamondcapitalafrica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gold-100 transition"
        >
          Invest in Uganda →
        </a>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image 
            src="/Logo.png" 
            alt="Diamond Capital Africa - Premium Gold Trading"
            width={40}
            height={40}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-text-primary md:flex">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <li key={link.href} className="relative group">
                  <Link href={link.href} className="hover:text-gold-600 transition">
                    {link.label}
                  </Link>
                  {/* dropdown on hover */}
                  <ul className="absolute left-0 mt-2 hidden w-48 rounded bg-white shadow-lg group-hover:block">
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/products#${s.id}`}
                          className="block px-4 py-2 text-sm text-text-primary hover:bg-gold-50"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <motion.li 
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} className="hover:text-gold-600 transition">
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://invest.diamondcapitalafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold-700"
            >
              Invest in Uganda
            </a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={cta.href}
                className="hidden rounded-full border border-gold-600/70 px-4 py-2 text-sm font-semibold text-gold-800 transition hover:bg-gold-50 md:inline-block"
              >
                {cta.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setMobileServicesOpen(false);
            }}
            className="md:hidden flex flex-col gap-1.5 p-2 sm:p-3 rounded-lg hover:bg-gold-50 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block h-0.5 w-5 bg-gold-600 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gold-600 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-gold-600 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-auto max-h-[calc(100vh-120px)]"
            style={{
              paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)',
              paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
              paddingRight: 'max(env(safe-area-inset-right), 1rem)',
            }}
          >
            <ul className="flex flex-col divide-y divide-gold-100 border-t border-gold-200">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full text-left px-4 py-4 sm:py-3 text-base sm:text-sm font-medium text-text-primary hover:bg-gold-50 flex justify-between items-center transition"
                      >
                        {link.label}
                        <span className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gold-50 border-t border-gold-100"
                          >
                            {services.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/products#${s.id}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-3 pl-8 text-sm text-text-primary hover:bg-gold-100 transition"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-4 sm:py-3 text-base sm:text-sm font-medium text-text-primary hover:bg-gold-50 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href={cta.href}
                  className="block w-full rounded-full border border-gold-600/70 px-4 py-3 sm:py-2 text-center text-sm font-semibold text-gold-800 hover:bg-gold-50 transition mx-4 mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cta.label}
                </Link>
              </li>
              <li className="pb-2">
                <a
                  href="https://invest.diamondcapitalafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-gold-600 px-4 py-3 sm:py-2 text-center text-sm font-semibold text-white hover:bg-gold-700 transition mx-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Invest in Uganda →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
