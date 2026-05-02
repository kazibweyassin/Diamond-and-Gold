'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Services',   href: '/products' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Process',    href: '/process' },
  { label: 'News',       href: '/news' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

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
          --mono:    'IBM Plex Mono', monospace;
        }
        .dca-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 60px; display: flex; align-items: center;
          background: rgba(247,246,242,0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          font-family: 'Sora', system-ui, sans-serif;
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
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(10,22,40,0.45);
        }
        .nav-links-desktop a {
          text-decoration: none; color: inherit; transition: color 0.2s;
        }
        .nav-links-desktop a:hover { color: var(--navy); }

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
          font-family: 'Sora', system-ui, sans-serif;
        }
        .mobile-link {
          display: block; text-decoration: none;
          font-size: 22px; font-weight: 300; letter-spacing: -0.01em;
          color: var(--navy); padding: 1rem 0;
          border-bottom: 1px solid var(--rule-md);
          transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--gold); }
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
                <Link href={href}>{label}</Link>
              </li>
            ))}
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
                    className="mobile-link"
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