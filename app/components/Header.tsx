'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/services';

interface NavProps {
  variant?: 'default' | 'minimal' | 'marketing';
  cta?: { label: string; href: string };
}

export default function Header({
  variant = 'default',
  cta = { label: 'Request Quote', href: '/request-quote' },
}: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isMarketing = variant === 'marketing';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // Unified links
  const baseLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/products' },
    { label: 'Process', href: '/process' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'FAQ', href: '/faq' },
  ];

  const marketingLinks = [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'News', href: '/news' },
    { label: 'Process', href: '/process' },
    { label: 'Compliance', href: '/compliance' },
  ];

  const links = isMarketing ? marketingLinks : baseLinks;

  const headerClasses = isMarketing
    ? `fixed top-0 w-full z-[200] h-[60px] flex items-center transition-all ${
        scrolled ? 'bg-[#F7F6F2]/95 backdrop-blur-xl border-b border-[rgba(10,22,40,0.12)]' : 'bg-transparent'
      }`
    : `fixed top-0 w-full z-50 transition-all duration-300 h-16 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-sm' : 'bg-transparent'
      }`;

  const linkClass = (href: string) =>
    isMarketing
      ? `text-[12px] uppercase tracking-[0.08em] transition-colors ${pathname === href ? 'text-[#0A1628] font-medium' : 'text-[rgba(10,22,40,0.6)] hover:text-[#0A1628]'}`
      : `relative text-sm transition ${pathname === href ? 'text-black font-medium' : 'text-neutral-500 hover:text-black'}`;

  return (
    <header className={headerClasses}>
      <div className={isMarketing ? "nav-inner max-w-[1280px] mx-auto w-full px-8 flex items-center justify-between" : "max-w-7xl mx-auto px-4"}>
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Diamond Capital Africa">
          <Image src="/Logo.png" width={isMarketing ? 110 : 92} height={isMarketing ? 36 : 32} alt="Diamond Capital Africa" className="object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
              {!isMarketing && pathname === item.href && (
                <motion.span layoutId="underline" className="absolute left-0 -bottom-1 h-[2px] w-full bg-black" />
              )}
            </Link>
          ))}

          {/* Services Dropdown (available on all) */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`${isMarketing ? 'text-[12px] uppercase tracking-[0.08em] text-[rgba(10,22,40,0.6)] hover:text-[#0A1628]' : 'text-sm text-neutral-500 hover:text-black'} flex items-center gap-1`}
              aria-expanded={servicesOpen}
            >
              Services <span className="text-[9px]">▼</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 bg-white border border-[rgba(10,22,40,0.12)] rounded-md shadow-xl py-1 z-[300]">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.id}
                    href={`/products#${s.id}`}
                    className="block px-4 py-2.5 text-sm text-[#0A1628] hover:bg-[#F7F6F2] hover:text-[#B8922A]"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="border-t my-1" />
                <Link href="/products" className="block px-4 py-2 text-xs tracking-widest text-[#B8922A] font-medium" onClick={() => setServicesOpen(false)}>
                  VIEW ALL SERVICES →
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTAs - unified + use new global button styles where possible */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={`https://wa.me/256704833021?text=${encodeURIComponent("Hello, I'd like to discuss gold supply.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa !text-xs !py-2 !px-4"
          >
            WhatsApp
          </a>
          <Link href={cta.href} className="btn-primary !text-xs !py-[9px] !px-5">
            {cta.label}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="w-5 h-[1.5px] bg-[#0A1628]" />
          <span className="w-5 h-[1.5px] bg-[#0A1628]" />
          <span className="w-5 h-[1.5px] bg-[#0A1628]" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-[190] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 w-[78%] bg-[#F7F6F2] z-[195] md:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <Image src="/Logo.png" width={100} height={32} alt="DCA" />
                <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
              </div>

              <div className="flex flex-col gap-y-4 text-lg">
                {[...links, { label: 'Contact', href: '/contact' }].map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-[#0A1628]">{l.label}</Link>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a href="https://wa.me/256704833021" target="_blank" rel="noopener" className="btn-wa text-center justify-center">Chat on WhatsApp</a>
                <Link href={cta.href} onClick={() => setOpen(false)} className="btn-primary text-center justify-center">{cta.label}</Link>
              </div>

              <p className="mt-8 text-[10px] text-[#0A1628]/40 tracking-widest">KAMPALA, UGANDA • GLOBAL DELIVERY</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
