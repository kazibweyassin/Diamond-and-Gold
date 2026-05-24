'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/services';

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Team',       href: '/team' },
  { label: 'News',       href: '/news' },
  { label: 'FAQ',        href: '/faq' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Process',    href: '/process' },
  { label: 'Contact',    href: '/contact' },
];

function isNavActive(pathname, href) {
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname() ?? '';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        :root {
          --navy:    #0A1628;
          --gold:    #B8922A;
          --cream:   #F7F6F2;
          --rule-md: rgba(10,22,40,0.15);
          --mono:    var(--font-dca-mono), ui-monospace, monospace;
        }
        .dca-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 60px; display: flex; align-items: center;
          background: rgba(247,246,242,0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          font-family: var(--font-dca-sora), ui-sans-serif, system-ui, sans-serif;
          transition: border-color 0.25s, box-shadow 0.25s;
          border-bottom: 1px solid transparent;
        }
        .dca-nav.scrolled {
          border-bottom-color: var(--rule-md);
          box-shadow: 0 1px 0 rgba(10,22,40,0.04);
        }
        .nav-inner {
          max-width: 1280px; margin: 0 auto; width: 100%;
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo img { height: 32px; width: auto; display: block; }

        .nav-links-desktop {
          display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(10,22,40,0.6);
        }
        .nav-links-desktop a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links-desktop a::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #F1C40F, #E74C3C);
          border-radius: 0;
          transition: all 0.5s ease-in-out;
        }
        .nav-links-desktop a:hover::before {
          width: 100%;
          border-radius: 50%;
        }
        .nav-links-desktop a:hover { color: var(--navy); }
        .nav-links-desktop a.nav-link-active {
          color: var(--navy);
          font-weight: 600;
        }
        
        .nav-dropdown-trigger {
          position: relative;
          cursor: pointer;
          display: inline-block;
        }
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 0.5rem;
          background: #fff;
          border: 1px solid var(--rule-md);
          border-radius: 6px;
          box-shadow: 0 10px 40px rgba(10,22,40,0.1);
          min-width: 260px;
          z-index: 300;
          list-style: none;
          margin: 0;
          padding: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
          pointer-events: none;
        }
        .nav-dropdown-trigger:hover .nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .nav-dropdown-item {
          display: block;
          text-decoration: none;
          color: var(--navy);
          font-size: 12px;
          font-weight: 400;
          padding: 12px 16px;
          transition: background 0.15s, color 0.15s;
          border-bottom: 1px solid rgba(10,22,40,0.05);
        }
        .nav-dropdown-item:last-child {
          border-bottom: none;
        }
        .nav-dropdown-item:hover {
          background: rgba(184,146,42,0.06);
          color: var(--gold);
        }

        .nav-ctas { display: flex; gap: 8px; align-items: center; }

        .btn-nav-wa {
          background: var(--navy); color: #fff;
          font-size: 12px; font-weight: 400;
          padding: 9px 18px; border-radius: 4px;
          text-decoration: none; transition: background 0.2s; white-space: nowrap;
        }
        .btn-nav-wa:hover { background: #1a2e4a; }

        .btn-nav-primary {
          background: var(--gold); color: #fff;
          font-size: 12px; font-weight: 500;
          padding: 9px 20px; border-radius: 4px;
          letter-spacing: 0.03em; text-decoration: none;
          transition: background 0.2s; white-space: nowrap;
        }
        .btn-nav-primary:hover { background: #9a7820; }

        /* Hamburger */
        .nav-hamburger {
          display: none; flex-direction: column;
          justify-content: center; align-items: center;
          gap: 5px; width: 40px; height: 40px;
          background: none; border: none; cursor: pointer; padding: 0;
        }
        .nav-hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: var(--navy); border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile drawer */
        .nav-mobile-overlay {
          position: fixed; inset: 0; z-index: 190;
          background: rgba(10,22,40,0.35);
          backdrop-filter: blur(2px);
        }
        .nav-mobile-drawer {
          position: fixed; top: 60px; left: 0; right: 0; bottom: 0;
          z-index: 195; background: var(--cream);
          overflow-y: auto;
          display: flex; flex-direction: column;
          padding: 1.5rem 2rem 3rem;
          font-family: var(--font-dca-sora), ui-sans-serif, system-ui, sans-serif;
        }
        .mobile-link {
          display: block; text-decoration: none;
          font-size: 22px; font-weight: 300; letter-spacing: -0.01em;
          color: var(--navy); padding: 1rem 0;
          border-bottom: 1px solid var(--rule-md);
          transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--gold); }
        .mobile-link.mobile-link-active {
          color: var(--navy);
          font-weight: 500;
        }
        .mobile-ctas {
          margin-top: 2rem;
          display: flex; flex-direction: column; gap: 12px;
        }
        .mobile-cta-gold {
          display: block; text-align: center; text-decoration: none;
          background: var(--gold); color: #fff;
          font-size: 14px; font-weight: 500;
          padding: 14px 24px; border-radius: 4px;
          transition: background 0.2s;
        }
        .mobile-cta-gold:hover { background: #9a7820; }
        .mobile-cta-navy {
          display: block; text-align: center; text-decoration: none;
          background: var(--navy); color: #fff;
          font-size: 14px; font-weight: 400;
          padding: 14px 24px; border-radius: 4px;
          transition: background 0.2s;
        }
        .mobile-cta-navy:hover { background: #1a2e4a; }
        .mobile-meta {
          margin-top: auto; padding-top: 2.5rem;
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(10,22,40,0.3);
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-ctas           { display: none; }
          .nav-hamburger      { display: flex; }
        }
      `}</style>

      {/* ── Bar ──────────────────────────────────────────────────────── */}
      <nav className={`dca-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          <Link href="/" className="nav-logo" aria-label="Diamond Capital Africa">
            <img src="/Logo.png" alt="Diamond Capital Africa" />
          </Link>

          <ul className="nav-links-desktop">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={isNavActive(pathname, href) ? 'nav-link-active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-dropdown-trigger">
              <span style={{ cursor: 'pointer', position: 'relative' }}>
                Services
                <span style={{ marginLeft: '4px', fontSize: '8px', verticalAlign: 'middle' }}>▼</span>
              </span>
              <ul className="nav-dropdown-menu">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/products#${service.id}`}
                      className="nav-dropdown-item"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="nav-ctas">
            <a href="https://wa.me/256704833021" className="btn-nav-wa">
              WhatsApp
            </a>
            <Link href="/products" className="btn-nav-primary">
              Explore Services →
            </Link>
          </div>

          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="nav-mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav"
              className="nav-mobile-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
            >
              <nav>
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`mobile-link${isNavActive(pathname, href) ? ' mobile-link-active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mobile-ctas">
                <Link
                  href="/products"
                  className="mobile-cta-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore Services →
                </Link>
                <a
                  href="https://wa.me/256704833021"
                  className="mobile-cta-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  WhatsApp us
                </a>
              </div>

              <p className="mobile-meta">
                Diamond Capital Africa · Kampala, Uganda
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}