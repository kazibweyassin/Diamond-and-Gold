'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  // Desktop dropdown uses state (not hover-only) for keyboard accessibility
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close desktop dropdown on Escape
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setDesktopServicesOpen(false);
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/products' },
    { label: 'Partners', href: '/partners' },
    { label: 'Account Holders', href: '/account-holders' },
    { label: 'News', href: '/news' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold-200 bg-cream backdrop-blur-sm">
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
            alt="Diamond Capital Africa logo"
            width={48}
            height={48}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-text-primary md:flex">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                // FIX: keyboard-accessible dropdown via state + button trigger
                <li
                  key={link.href}
                  className="relative"
                  ref={desktopDropdownRef}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <button
                    onClick={() => setDesktopServicesOpen((prev) => !prev)}
                    onFocus={() => setDesktopServicesOpen(true)}
                    aria-haspopup="true"
                    aria-expanded={desktopServicesOpen}
                    className="flex items-center gap-1 hover:text-gold-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: desktopServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[10px] leading-none"
                    >
                      ▼
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        role="menu"
                        className="absolute left-0 mt-2 w-48 rounded bg-white shadow-lg border border-gold-100 overflow-hidden z-50"
                      >
                        {services.map((s) => (
                          <li key={s.id} role="none">
                            <Link
                              href={`/products#${s.id}`}
                              role="menuitem"
                              onClick={() => setDesktopServicesOpen(false)}
                              className="block px-4 py-2 text-sm text-text-primary hover:bg-gold-50 focus:bg-gold-50 focus:outline-none transition"
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
              // FIX: consistent motion on ALL nav items including Services
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

        {/* CTA Buttons & Mobile Hamburger */}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {/* FIX: removed redundant `hidden` class (parent is already hidden on mobile) */}
              <Link
                href={cta.href}
                className="rounded-full border border-gold-600/70 px-4 py-2 text-sm font-semibold text-gold-800 transition hover:bg-gold-50 inline-block"
              >
                {cta.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger — FIX: framer-motion spans for correct animation */}
          <button
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              if (mobileMenuOpen) setMobileServicesOpen(false);
            }}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gold-50 transition gap-0"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 bg-gold-600 origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 bg-gold-600 my-1.5 origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 bg-gold-600 origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // FIX: replaced magic 120px with CSS custom property driven by actual layout
            className="md:hidden overflow-auto"
            style={{
              maxHeight: 'calc(100dvh - var(--header-height, 112px))',
              paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)',
              paddingLeft: 'env(safe-area-inset-left)',
              paddingRight: 'env(safe-area-inset-right)',
            }}
          >
            <ul className="flex flex-col divide-y divide-gold-100 border-t border-gold-200">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <li key={link.href}>
                      {/* FIX: added aria-expanded to mobile Services accordion */}
                      <button
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-menu"
                        className="w-full text-left px-4 py-4 sm:py-3 text-base sm:text-sm font-medium text-text-primary hover:bg-gold-50 flex justify-between items-center transition"
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px]"
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            id="mobile-services-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gold-50 border-t border-gold-100"
                          >
                            {services.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/products#${s.id}`}
                                  onClick={closeMobileMenu}
                                  className="block px-8 py-3 text-sm text-text-primary hover:bg-gold-100 transition"
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
                      onClick={closeMobileMenu}
                      className="block px-4 py-4 sm:py-3 text-base sm:text-sm font-medium text-text-primary hover:bg-gold-50 transition"
                    >
                      {link.href === link.href && link.label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTAs — FIX: removed broken mx-4 on inner element; use px-4 on li instead */}
              <li className="px-4 pt-3 pb-1">
                <Link
                  href={cta.href}
                  onClick={closeMobileMenu}
                  className="block w-full rounded-full border border-gold-600/70 px-4 py-3 sm:py-2 text-center text-sm font-semibold text-gold-800 hover:bg-gold-50 transition"
                >
                  {cta.label}
                </Link>
              </li>
              <li className="px-4 pb-3 pt-1">
                <a
                  href="https://invest.diamondcapitalafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full rounded-full bg-gold-600 px-4 py-3 sm:py-2 text-center text-sm font-semibold text-white hover:bg-gold-700 transition"
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