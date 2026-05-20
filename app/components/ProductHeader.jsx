'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ProductHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-amber-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Diamond Capital Africa"
              width={90}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Focused Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={`relative transition ${
              isActive('/') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Home
              {isActive('/') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-600"
                />
              )}
            </Link>
            <Link href="/products" className={`relative transition ${
              isActive('/products') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Services
              {isActive('/products') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-600"
                />
              )}
            </Link>
            <Link href="/process" className={`relative transition ${
              isActive('/process') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Process
              {isActive('/process') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-600"
                />
              )}
            </Link>
            <Link href="/compliance" className={`relative transition ${
              isActive('/compliance') ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
            }`}>
              Compliance
              {isActive('/compliance') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-amber-600"
                />
              )}
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
