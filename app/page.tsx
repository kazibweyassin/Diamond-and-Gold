'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/app/components/Navbar';

function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginBottom: '2rem' }} className="footer-grid">
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
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
        <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
      </div>
    </footer>
  );
}

const SLIDES = [
  { image: '/ugandagold.jpg',                              label: 'Verified supply' },
  { image: '/Gold-bars.webp',                              label: 'Export-ready stock' },
  { image: '/goldsmelting.webp',                           label: 'Assay process' },
  { image: '/secure-logistics-1.jpg.webp',                 label: 'Secure logistics' },
  { image: '/man-pouring-melted-metal-workshop-large.jpg', label: 'Field operations' },
];

const STATS = [
  { value: '99.5%+', label: 'Minimum purity',          unit: 'XAU' },
  { value: '48–72h', label: 'Dispatch window',          unit: 'HRS' },
  { value: '100%',   label: 'KYC-compliant orders',     unit: 'DOCS' },
  { value: 'OECD',   label: 'Due diligence standard',   unit: 'STD' },
];

const STEPS = [
  { n: '01', title: 'Submit requirements',  body: 'Share quantity, form factor, purity, and delivery needs. Receive a formal quote within 24 hours.' },
  { n: '02', title: 'Compliance review',    body: 'We align on KYC documentation, buyer approvals, and regulatory checks before proceeding.' },
  { n: '03', title: 'Assay & verification', body: 'Independent ISO-certified lab testing confirms purity and weight before packing begins.' },
  { n: '04', title: 'Insured dispatch',     body: 'Coordinated export documentation, insured logistics, and real-time tracking to confirmed delivery.' },
];

const FEATURES = [
  { title: 'Transparent pricing',   body: 'Working directly with local artisanal miners eliminates intermediaries — enabling prices no broker can match.' },
  { title: 'Licensed & legitimate', body: "Fully licensed to buy and export gold in Uganda. Ask for our documentation — we'll send it immediately." },
  { title: 'Complete paper trail',  body: 'Origin certificate, assay report, custody records, KYC package — all included. Nothing you need to chase us for.' },
  { title: 'Insured delivery',      body: 'Full-value shipment insurance with real-time tracking from dispatch to confirmed delivery anywhere in the world.' },
];

function GoldTicker() {
  const [price, setPrice] = useState(3327.45);
  const [prev,  setPrev]  = useState(3327.45);
  useEffect(() => {
    const t = setInterval(() => {
      setPrice(p => { const n = +(p + (Math.random() - 0.49) * 3).toFixed(2); setPrev(p); return n; });
    }, 3500);
    return () => clearInterval(t);
  }, []);
  const up = price >= prev;

  return (
    <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.14)', borderRadius: 6, padding: '1.5rem', boxShadow: '0 8px 32px rgba(10,22,40,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(10,22,40,0.4)' }}>XAU / USD</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 2, background: up ? '#ECFDF5' : '#FEF2F2', color: up ? '#059669' : '#DC2626' }}>
          {up ? '▲' : '▼'} {Math.abs(price - prev).toFixed(2)}
        </span>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.03em', color: 'var(--navy)', marginBottom: 4 }}>${price.toFixed(2)}</div>
      <div style={{ borderTop: '1px solid rgba(10,22,40,0.08)', margin: '1rem 0' }}>
        {[
          { k: '24K / troy oz',  v: `$${price.toFixed(2)}` },
          { k: '22K / troy oz',  v: `$${(price * 0.9167).toFixed(2)}` },
          { k: '18K / troy oz',  v: `$${(price * 0.75).toFixed(2)}` },
          { k: '1 kg bar (24K)', v: `$${(price * 32.1507).toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        ].map(({ k, v }) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(10,22,40,0.06)' }}>
            <span style={{ fontSize: 11, color: 'rgba(10,22,40,0.45)' }}>{k}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500, color: 'var(--navy)' }}>{v}</span>
          </div>
        ))}
      </div>
      <a href="/products" style={{ display: 'block', textAlign: 'center', background: 'var(--navy)', color: '#fff', fontSize: 12, fontWeight: 500, padding: 11, borderRadius: 4, letterSpacing: '0.02em' }}>
        Explore services →
      </a>
    </div>
  );
}

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx(i => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: '#0A1628', color: '#0D0D0D', fontFamily: "'Sora', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy:    #0A1628;
          --gold:    #B8922A;
          --gold-lt: #E8C96A;
          --green:   #1B6B3A;
          --cream:   #F7F6F2;
          --rule:    rgba(10,22,40,0.09);
          --rule-md: rgba(10,22,40,0.15);
          --mono:    'IBM Plex Mono', monospace;
        }
        .eyebrow {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .eyebrow::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }
        .section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 300; letter-spacing: -0.025em; color: var(--navy); line-height: 1.18; }
        .section-title strong { font-weight: 600; }
        .rule { border: none; border-top: 1px solid var(--rule-md); margin: 0 2rem; }

        /* HERO */
        .hero-slide { position: absolute; inset: 0; background-size: cover; background-position: center; transition: opacity 1.2s ease; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.2); padding: 5px 14px; border-radius: 2px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 2rem; }
        .hero-h1 { font-size: clamp(2.4rem, 5vw, 3.9rem); font-weight: 300; line-height: 1.07; letter-spacing: -0.025em; color: #fff; margin-bottom: 1.25rem; }
        .hero-h1 strong { font-weight: 600; color: var(--gold-lt); }
        .hero-sub { font-size: 15px; line-height: 1.7; font-weight: 300; color: rgba(255,255,255,0.52); max-width: 460px; margin-bottom: 2.5rem; }
        .btn-primary { background: var(--gold); color: #fff; font-size: 13px; font-weight: 500; padding: 13px 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-primary:hover { background: #9a7820; }
        .btn-ghost { border: 1px solid rgba(255,255,255,0.22); color: rgba(255,255,255,0.72); font-size: 13px; padding: 13px 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .btn-wa { background: #25D366; color: #fff; font-size: 13px; font-weight: 500; padding: 13px 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-wa:hover { background: #1dba58; }
        .slide-ind { display: flex; align-items: center; gap: 8px; cursor: pointer; background: none; border: none; padding: 0; }
        .ind-line { height: 1px; background: rgba(255,255,255,0.22); transition: all 0.35s; width: 18px; }
        .slide-ind.active .ind-line { width: 36px; background: var(--gold-lt); }
        .ind-text { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: rgba(255,255,255,0.32); transition: color 0.3s; }
        .slide-ind.active .ind-text { color: rgba(255,255,255,0.65); }
        .hero-stat { background: rgba(255,255,255,0.06); backdrop-filter: blur(8px); padding: 16px 18px; }
        .stat-unit { font-family: var(--mono); font-size: 9px; letter-spacing: 0.15em; color: var(--gold-lt); margin-bottom: 6px; }
        .stat-val  { font-size: 22px; font-weight: 600; color: #fff; letter-spacing: -0.02em; line-height: 1; margin-bottom: 4px; }
        .stat-lbl  { font-size: 10px; color: rgba(255,255,255,0.38); }
      `}</style>

      <Navbar />

      <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {SLIDES.map((s, i) => (
            <motion.div
              key={i}
              className="hero-slide"
              style={{ backgroundImage: `url(${s.image})`, opacity: i === slideIdx ? 1 : 0, y: i === slideIdx ? imgY : '0%' } as any}
            />
          ))}
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(108deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.52) 55%, rgba(10,22,40,0.14) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 2rem 5rem', display: 'flex', alignItems: 'flex-end', gap: '3rem' }} className="hero-flex">
          <div style={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="hero-badge">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
                Uganda licensed operator
              </div>
            </motion.div>

            <motion.div key={slideIdx} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
              <h1 className="hero-h1">
                We source gold<br />from Uganda.<br />
                <strong>Every shipment verified,<br />documented, export-ready.</strong>
              </h1>
              <p className="hero-sub">
                Tell us what you need — volume, purity, timeline. We handle sourcing, lab testing, compliance and delivery so your order arrives clean and on time.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '2.5rem' }}>
                <a href="/products" className="btn-primary">Explore services →</a>
                <a href="https://wa.me/256704833021" className="btn-wa">Request consultation</a>
                <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Investor portal ↗</a>
              </div>

              <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                {STATS.map(({ value, label, unit }) => (
                  <div key={label} className="hero-stat">
                    <div className="stat-unit">{unit}</div>
                    <div className="stat-val">{value}</div>
                    <div className="stat-lbl">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hero-right" style={{ width: 300, flexShrink: 0 }}>
            <GoldTicker />
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div className="eyebrow">Process</div>
            <h2 className="section-title">From inquiry to delivery —<br /><strong>four clear steps.</strong></h2>
          </div>
          <div>
            {STEPS.map((s, i) => (
              <div key={s.n} className="step-item">
                <div className="step-num">{s.n}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}