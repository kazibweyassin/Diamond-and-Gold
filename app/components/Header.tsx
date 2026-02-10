'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { label: 'Services', href: '/products' },
    { label: 'News', href: '/news' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/60 bg-[#fdfbf7]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/Logo.png" 
            alt="Diamond Capital Africa" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-900 md:flex">
          {navLinks.map((link) => (
            <motion.li 
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.href} className="hover:text-emerald-700 transition">
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={cta.href}
              className="hidden rounded-full border border-amber-500/70 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-200/40 md:inline-block"
            >
              {cta.label}
            </Link>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-emerald-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
            className="border-t border-amber-200/60 bg-[#fdfbf7] md:hidden overflow-hidden"
          >
            <ul className="flex flex-col space-y-0 px-4 py-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-sm font-medium text-slate-900 hover:text-amber-700 transition border-b border-amber-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li 
                className="pt-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href={cta.href}
                  className="block w-full rounded-full border border-amber-500/70 px-4 py-2 text-center text-sm font-semibold text-amber-800 hover:bg-amber-200/40 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cta.label}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
