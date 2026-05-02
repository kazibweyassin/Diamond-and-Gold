'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/app/components/Navbar';

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        color: '#fff',
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '2rem',
          marginBottom: '2rem'
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/about">About us</a>
            <a href="/process">Our process</a>
            <a href="/compliance">Compliance</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Services</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/products">Gold sourcing</a>
            <a href="/products">Logistics</a>
            <a href="/products">Assay services</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Resources</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/news">News</a>
            <a href="/compliance">Documentation</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Connect</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="https://wa.me/256704833021">WhatsApp</a>
            <a href="mailto:info@diamondcapitalafrica.com">Email</a>
            <a href="https://invest.diamondcapitalafrica.com">Investor portal</a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: 12,
          color: 'rgba(255,255,255,0.35)'
        }}
      >
        © 2026 Diamond Capital Africa. All rights reserved.
      </div>
    </footer>
  );
}

/* ───────────────────────── DATA ───────────────────────── */

const STATS = [
  { value: '99.5%+', label: 'Minimum purity', unit: 'XAU' },
  { value: '48–72h', label: 'Dispatch window', unit: 'HRS' },
  { value: '100%', label: 'KYC-compliant orders', unit: 'DOCS' },
  { value: 'OECD', label: 'Due diligence standard', unit: 'STD' }
];

const SLIDES = [
  { image: '/ugandagold.jpg', label: 'Verified supply' },
  { image: '/Gold-bars.webp', label: 'Export-ready stock' },
  { image: '/goldsmelting.webp', label: 'Assay process' }
];

/* ───────────────────────── GOLD TICKER ───────────────────────── */

function GoldTicker() {
  const [price, setPrice] = useState(3327.45);
  const [prev, setPrev] = useState(3327.45);

  useEffect(() => {
    const t = setInterval(() => {
      setPrice(p => {
        const n = +(p + (Math.random() - 0.49) * 3).toFixed(2);
        setPrev(p);
        return n;
      });
    }, 3500);

    return () => clearInterval(t);
  }, []);

  const up = price >= prev;

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 10,
        padding: '1.5rem',
        color: '#fff'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>
          XAU / USD
        </span>

        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            padding: '2px 8px',
            borderRadius: 3,
            background: up ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
            color: up ? '#4ade80' : '#f87171'
          }}
        >
          {up ? '▲' : '▼'} {Math.abs(price - prev).toFixed(2)}
        </span>
      </div>

      <div style={{ fontSize: '2rem', fontWeight: 600 }}>${price.toFixed(2)}</div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '1rem 0' }} />

      {[
        { k: '24K / oz', v: `$${price.toFixed(2)}` },
        { k: '22K / oz', v: `$${(price * 0.9167).toFixed(2)}` },
        { k: '18K / oz', v: `$${(price * 0.75).toFixed(2)}` }
      ].map(i => (
        <div key={i.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{i.k}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{i.v}</span>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── HOME ───────────────────────── */

export default function Home() {
  const heroRef = useRef(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIdx(i => (i + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: '#F7F6F2', minHeight: '100vh' }}>
      <Navbar />

      {/* ───────────────── HERO ───────────────── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* background slides */}
        {SLIDES.map((s, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === slideIdx ? 1 : 0,
              y: i === slideIdx ? imgY : 0
            }}
          />
        ))}

        {/* overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(108deg, rgba(10,22,40,0.88), rgba(10,22,40,0.55), rgba(10,22,40,0.2))'
          }}
        />

        {/* content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            padding: '4rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '5rem'
          }}
        >
          {/* LEFT */}
          <div style={{ flex: 1 }}>
            <div style={{ color: '#B8922A', fontSize: 10, letterSpacing: 2, marginBottom: 16 }}>
              VERIFIED UGANDAN GOLD SUPPLY
            </div>

            <h1 style={{ fontSize: '3rem', color: '#fff', fontWeight: 300, lineHeight: 1.1 }}>
              Verified gold sourcing<br />
              <strong style={{ color: '#E8C96A' }}>from Uganda</strong>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 20, maxWidth: 500 }}>
              End-to-end sourcing, assay, compliance and insured delivery for institutional buyers.
            </p>

            {/* stats (FIXED — no box container) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '1px',
                marginTop: 30
              }}
            >
              {STATS.map(s => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(6px)',
                    padding: 14
                  }}
                >
                  <div style={{ fontSize: 9, color: '#B8922A', marginBottom: 6 }}>
                    {s.unit}
                  </div>
                  <div style={{ color: '#fff', fontSize: 18, fontWeight: 600 }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ width: 320 }}>
            <GoldTicker />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}