'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  variant?: 'default' | 'minimal';
  cta?: { label: string; href: string };
}

export default function PremiumNavbar({
  variant = 'default',
  cta = { label: 'Request Quote', href: '/contact' },
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // 🔥 Flexible nav (changes based on page type)
  const nav =
    variant === 'minimal'
      ? [
          { label: 'Services', href: '/products' },
          { label: 'Process', href: '/process' },
          { label: 'Compliance', href: '/compliance' },
        ]
      : [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/products' },
          { label: 'Process', href: '/process' },
          { label: 'Compliance', href: '/compliance' },
          { label: 'FAQ', href: '/faq' },
        ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              width={90}
              height={40}
              alt="Diamond Capital Africa"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition ${
                  pathname === item.href
                    ? 'text-black'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-black"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={cta.href}
              className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
            >
              {cta.label}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[2px] bg-black" />
            <span className="w-5 h-[2px] bg-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-neutral-700"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-amber-600 text-white text-center py-2 text-sm font-semibold"
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}      exit={{ opacity: 0, y: -6 }}
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