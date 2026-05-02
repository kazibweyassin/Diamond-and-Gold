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
}