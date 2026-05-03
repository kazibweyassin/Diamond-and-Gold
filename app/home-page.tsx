'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Navbar from '@/app/components/Navbar';
import { getArticleById, homeNewsTeaserIds } from '@/lib/news-articles';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginBottom: '2rem' }} className="footer-grid">
        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/about">About us</Link>
            <Link href="/process">Our process</Link>
            <Link href="/compliance">Compliance</Link>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Services</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/products#transaction-handling">Gold sourcing</Link>
            <Link href="/products#secure-logistics">Logistics</Link>
            <Link href="/products#assay-testing">Assay services</Link>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Resources</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/news">News</Link>
            <Link href="/compliance">Documentation</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '1rem' }}>Connect</div>
          <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="https://wa.me/256704833021" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:info@diamondcapitalafrica.com">Email</a>
            <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer">Investor portal</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
        <p>&copy; {currentYear} Diamond Capital Africa. All rights reserved.</p>
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

const CREDENTIALS = [
  { code: 'UG-MIN', title: 'Licensed Trader',          detail: 'Uganda Minerals & Mining licensed operator. Documentation available to verified buyers.' },
  { code: 'ISO',    title: 'Certified Assay Labs',     detail: 'Third-party purity testing via accredited independent facilities. Certificates ship with every order.' },
  { code: 'OECD',  title: 'Due Diligence Compliant',  detail: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition.' },
  { code: 'INS',   title: 'Insured Logistics',         detail: 'Full-value shipment insurance with real-time tracking from dispatch to confirmed delivery.' },
];

function GoldTicker() {
  const [price, setPrice] = useState(3327.45);
  const [prev, setPrev] = useState(3327.45);
  const prevRef = useRef(price);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = +(price + (Math.random() - 0.49) * 3).toFixed(2);
      prevRef.current = price;
      setPrev(prevRef.current);
      setPrice(newPrice);
    }, 3500);
    return () => clearInterval(interval);
  }, [price]);

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
    <main className="font-dca-marketing" style={{ minHeight: '100vh', background: '#F7F6F2', color: '#0D0D0D', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          margin: 0;
          padding: 0;
          background: #0A1628;
        }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy:    #0A1628;
          --gold:    #B8922A;
          --gold-lt: #E8C96A;
          --green:   #1B6B3A;
          --cream:   #F7F6F2;
          --rule:    rgba(10,22,40,0.09);
          --rule-md: rgba(10,22,40,0.15);
          --mono:    var(--font-dca-mono), ui-monospace, monospace;
        }
        @keyframes gentleZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
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

        /* HERO — with zoom animation */
        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 60px;
          overflow: hidden;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .hero-slide.active {
          animation: gentleZoom 20s ease-in-out infinite;
        }
        .hero-overlay--mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 120% 80% at 15% 20%, rgba(232, 201, 106, 0.07) 0%, transparent 45%),
            linear-gradient(115deg, rgba(10, 22, 40, 0.92) 0%, rgba(10, 22, 40, 0.72) 42%, rgba(10, 22, 40, 0.35) 72%, rgba(10, 22, 40, 0.55) 100%);
          pointer-events: none;
        }
        .hero-overlay--vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 95% 75% at 50% 100%, rgba(0, 0, 0, 0.42) 0%, transparent 58%);
          pointer-events: none;
        }
        .hero-overlay--grid {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .hero-overlay--accent {
          position: absolute;
          top: -20%;
          right: -15%;
          width: min(55vw, 520px);
          height: min(55vw, 520px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 201, 106, 0.12) 0%, transparent 68%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          padding: clamp(3rem, 6vw, 5rem) 2rem clamp(3rem, 7vw, 5.5rem);
          display: flex;
          align-items: flex-end;
          gap: clamp(2rem, 5vw, 4rem);
        }
        .hero-copy { flex: 1; min-width: 0; max-width: 720px; }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          margin-bottom: clamp(1.25rem, 3vw, 1.75rem);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
          flex-shrink: 0;
        }
        .hero-h1 {
          font-size: clamp(2.35rem, 5.2vw, 4rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: clamp(1rem, 2vw, 1.35rem);
          text-wrap: balance;
        }
        .hero-h1 strong {
          font-weight: 600;
          color: var(--gold-lt);
          display: inline;
        }
        .hero-sub {
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.65;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.58);
          max-width: 34rem;
          margin-bottom: clamp(1.75rem, 3vw, 2.25rem);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: clamp(1.75rem, 3vw, 2.25rem);
        }
        .btn-primary {
          background: linear-gradient(165deg, #c9a54a 0%, var(--gold) 45%, #9a7820 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          box-shadow: 0 8px 28px rgba(184, 146, 42, 0.35);
          border: none;
        }
        .btn-primary:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
          box-shadow: 0 12px 36px rgba(184, 146, 42, 0.42);
        }
        .btn-ghost {
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: rgba(255, 255, 255, 0.82);
          font-size: 13px;
          padding: 14px 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
        }
        .btn-ghost:hover {
          border-color: rgba(255, 255, 255, 0.55);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .btn-wa {
          background: #25D366;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 14px 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, filter 0.2s;
          box-shadow: 0 6px 22px rgba(37, 211, 102, 0.28);
          border: none;
        }
        .btn-wa:hover {
          background: #20bd5a;
          transform: translateY(-1px);
        }
        .hero-slide-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px 20px;
          margin-bottom: clamp(1.75rem, 3vw, 2.25rem);
        }
        .hero-slide-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .hero-dot-wrap {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
        }
        .hero-dot-inner {
          width: 10px;
          height: 10px;
          border: 2px solid rgba(255, 255, 255, 0.38);
          border-radius: 999px;
          background: transparent;
          transition: width 0.35s ease, border-color 0.25s, background 0.25s;
          display: block;
        }
        .hero-dot-inner.active {
          width: 34px;
          border-color: var(--gold-lt);
          background: var(--gold-lt);
        }
        .hero-slide-caption {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.42);
          margin: 0;
          min-height: 1.25em;
        }
        .hero-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .hero-stat {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 16px 14px;
          transition: border-color 0.25s, background 0.25s;
        }
        .hero-stat:hover {
          border-color: rgba(232, 201, 106, 0.35);
          background: rgba(255, 255, 255, 0.08);
        }
        .stat-unit {
          font-family: var(--mono);
          font-size: 8px;
          letter-spacing: 0.16em;
          color: rgba(232, 201, 106, 0.85);
          margin-bottom: 8px;
        }
        .stat-val {
          font-size: clamp(1.15rem, 2.4vw, 1.45rem);
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-lbl {
          font-size: 10px;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.42);
          font-weight: 400;
        }
        .hero-aside {
          width: min(100%, 320px);
          flex-shrink: 0;
        }
        .hero-ticker-panel {
          padding: 4px;
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04));
          box-shadow: 0 24px 48px rgba(10, 22, 40, 0.35);
        }
        .hero-ticker-panel > div {
          border-radius: 11px !important;
        }

        /* HOW IT WORKS */
        .step-item { display: grid; grid-template-columns: 56px 1fr; padding: 2rem 0; border-bottom: 1px solid var(--rule-md); }
        .step-item:first-child { border-top: 1px solid var(--rule-md); }
        .step-num   { font-family: var(--mono); font-size: 11px; color: var(--gold); padding-top: 3px; }
        .step-title { font-size: 15px; font-weight: 500; color: var(--navy); margin-bottom: 6px; }
        .step-body  { font-size: 13px; line-height: 1.7; color: rgba(10,22,40,0.48); font-weight: 300; }

        /* WHY GRID */
        .why-card { background: #fff; padding: 2.5rem; transition: background 0.2s; }
        .why-card:hover { background: #FAFAF8; }
        .why-idx   { font-family: var(--mono); font-size: 10px; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 1.2rem; }
        .why-title { font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 0.6rem; }
        .why-body  { font-size: 13px; line-height: 1.7; color: rgba(10,22,40,0.48); font-weight: 300; }

        /* OPS */
        .ops-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; filter: saturate(0.75); transition: filter 0.4s; }
        .ops-card:hover .ops-img { filter: saturate(1.05); }
        .ops-label { font-family: var(--mono); font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
        .ops-desc  { font-size: 12px; color: rgba(10,22,40,0.5); line-height: 1.5; }

        /* CREDENTIALS */
        .cred-card { border: 1px solid var(--rule-md); border-radius: 4px; padding: 2rem; background: #fff; transition: border-color 0.25s, box-shadow 0.25s; }
        .cred-card:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(10,22,40,0.06); }
        .cred-code  { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; color: var(--gold); background: rgba(184,146,42,0.08); padding: 4px 10px; border-radius: 2px; display: inline-block; margin-bottom: 1.2rem; }
        .cred-title { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 0.6rem; }
        .cred-body  { font-size: 12px; color: rgba(10,22,40,0.45); line-height: 1.6; font-weight: 300; }

        /* NEWS */
        .news-card { background: #fff; border: 1px solid var(--rule-md); border-radius: 4px; padding: 2rem; display: block; transition: border-color 0.25s, box-shadow 0.25s; }
        .news-card:hover { border-color: rgba(10,22,40,0.28); box-shadow: 0 4px 20px rgba(10,22,40,0.06); }
        .news-cat    { font-family: var(--mono); font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); background: rgba(184,146,42,0.08); padding: 4px 10px; border-radius: 2px; }
        .news-date   { font-family: var(--mono); font-size: 10px; color: rgba(10,22,40,0.33); }
        .news-title  { font-size: 16px; font-weight: 500; color: var(--navy); line-height: 1.4; margin-bottom: 0.75rem; }
        .news-excerpt { font-size: 13px; color: rgba(10,22,40,0.5); line-height: 1.65; font-weight: 300; margin-bottom: 1.25rem; }
        .news-link   { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; color: var(--gold); }

        /* CTA FINAL */
        .cta-section { background: var(--navy); position: relative; overflow: hidden; }
        .cta-section::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 52px 52px; }
        .cta-label  { font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
        .cta-label::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }
        .cta-h2  { font-size: clamp(2rem, 4vw, 3.1rem); font-weight: 300; letter-spacing: -0.025em; color: #fff; line-height: 1.12; margin-bottom: 1.5rem; }
        .cta-h2 strong { font-weight: 600; color: var(--gold-lt); }
        .cta-sub { font-size: 15px; color: rgba(255,255,255,0.48); line-height: 1.7; max-width: 500px; margin-bottom: 3rem; font-weight: 300; }
        .cta-cell { background: rgba(255,255,255,0.03); padding: 1.5rem 1.75rem; }
        .cta-cl   { font-family: var(--mono); font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.28); margin-bottom: 8px; }
        .cta-cv   { font-size: 14px; color: rgba(255,255,255,0.72); font-weight: 400; }

        /* FOOTER */
        .footer-links a { font-size: 13px; color: rgba(255,255,255,0.55); transition: color 0.2s; font-weight: 300; }
        .footer-links a:hover { color: var(--gold); }

        /* DOWNLOADS */
        .dl-card { display: flex; align-items: center; gap: 1rem; border: 1px solid var(--rule-md); border-radius: 4px; background: #fff; padding: 1.25rem 1.5rem; transition: border-color 0.2s; }
        .dl-card:hover { border-color: var(--navy); }

        /* COMPLIANCE fulfillment */
        .fulfill-item { display: flex; align-items: flex-start; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.58); line-height: 1.65; font-weight: 300; }
        .fulfill-dot { width: 16px; height: 16px; flex-shrink: 0; border: 1px solid rgba(184,146,42,0.45); border-radius: 50%; margin-top: 2px; background: radial-gradient(circle, rgba(184,146,42,0.25) 0%, transparent 70%); }

        @media (max-width: 1024px) {
          .lg-grid-2  { grid-template-columns: 1fr !important; }
          .cred-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-inner   { flex-direction: column; align-items: stretch; }
          .hero-aside   { width: 100% !important; max-width: none; }
          .hero-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .why-cols    { grid-template-columns: 1fr !important; }
          .ops-cols    { grid-template-columns: 1fr !important; }
          .buyers-cols { grid-template-columns: 1fr !important; }
          .dl-cols     { grid-template-columns: 1fr !important; }
          .news-cols   { grid-template-columns: 1fr !important; }
          .cta-cells   { grid-template-columns: 1fr !important; }
          .comp-cols   { grid-template-columns: 1fr !important; }
          .cred-grid   { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-slide-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="hero-section">
        <div style={{ position: 'absolute', inset: 0 }}>
          {SLIDES.map((s, i) => (
            <motion.div
              key={i}
              className={`hero-slide ${i === slideIdx ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${s.image})`,
                opacity: i === slideIdx ? 1 : 0,
                transform: i === slideIdx
                  ? `translateY(${imgY.get()}) scale(1)`
                  : 'translateY(0%) scale(1)',
              }}
              aria-label={s.label}
              role="img"
            />
          ))}
        </div>
        <div className="hero-overlay--mesh" aria-hidden />
        <div className="hero-overlay--vignette" aria-hidden />
        <div className="hero-overlay--grid" aria-hidden />
        <div className="hero-overlay--accent" aria-hidden />

        <div className="hero-inner">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden />
                Uganda licensed operator
              </div>
            </motion.div>

            <motion.div key={slideIdx} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <h1 className="hero-h1">
                Certified gold supply<br />from Uganda —{' '}
                <strong>verified, documented, export-ready.</strong>
              </h1>
              <p className="hero-sub">
                Share volume, purity, and timeline. We coordinate sourcing, independent assay, compliance paperwork, and insured logistics so your shipment arrives traceable and on schedule.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="hero-actions">
                <a href="/products" className="btn-primary">Explore services →</a>
                <a href="https://wa.me/256704833021" className="btn-wa">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.861L.057 23.5l5.79-1.452A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.214-3.716.931.99-3.63-.236-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp us
                </a>
                <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Investor portal →</a>
              </div>

              <div className="hero-slide-row">
                <div className="hero-slide-nav" role="tablist" aria-label="Hero imagery">
                  {SLIDES.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === slideIdx}
                      aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${s.label}`}
                      className="hero-dot-wrap"
                      onClick={() => setSlideIdx(i)}
                    >
                      <span className={`hero-dot-inner${i === slideIdx ? ' active' : ''}`} aria-hidden />
                    </button>
                  ))}
                </div>
                <p className="hero-slide-caption" aria-live="polite">
                  {SLIDES[slideIdx].label}
                </p>
              </div>

              <div className="hero-metrics">
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

          <aside className="hero-aside">
            <div className="hero-ticker-panel">
              <GoldTicker />
            </div>
          </aside>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '5rem', alignItems: 'start' }} className="lg-grid-2">
          <div>
            <div className="eyebrow">Process</div>
            <h2 className="section-title">From inquiry to delivery —<br /><strong>four clear steps.</strong></h2>
            <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.48)', lineHeight: 1.7, marginTop: '1.25rem', fontWeight: 300, maxWidth: 300 }}>
              Every order follows a documented workflow so nothing falls through the cracks and your compliance team can verify every stage.
            </p>
            <a href="/process" style={{ display: 'inline-block', marginTop: '1.5rem', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)' }}>
              See full process →
            </a>
          </div>
          <div>
            {STEPS.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="step-item">
                <div className="step-num">{s.n}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-body">{s.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* rest of the sections (unchanged) */}
      {/* WHY CHOOSE US */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">Why choose us</div>
              <h2 className="section-title">We know the mines, hold the<br /><strong>licences, and have done this before.</strong></h2>
            </div>
            <a href="/contact" style={{ background: 'var(--navy)', color: '#fff', fontSize: 12, fontWeight: 500, padding: '12px 24px', borderRadius: 4, whiteSpace: 'nowrap' }}>Contact us →</a>
          </div>
          <div className="why-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'var(--rule-md)', border: '1px solid var(--rule-md)', borderRadius: 6, overflow: 'hidden' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="why-card">
                <div className="why-idx">0{i + 1}</div>
                <div className="why-title">{f.title}</div>
                <div className="why-body">{f.body}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', padding: '1.25rem 1.5rem', background: 'rgba(27,107,58,0.05)', border: '1px solid rgba(27,107,58,0.18)', borderRadius: 4 }}>
            <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.55)', fontWeight: 300 }}>
              Want to invest in Uganda&apos;s gold sector, not just buy from it?{' '}
              <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 500 }}>Investor portal →</a>
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">Operations in focus</div>
              <h2 className="section-title"><strong>On-the-ground</strong> visuals</h2>
            </div>
            <a href="/contact" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)' }}>Request sourcing details →</a>
          </div>
          <div className="ops-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Assay coordination', src: '/assaying.jpg', desc: 'Independent purity verification arranged with certified labs.' },
              { label: 'Field operations',   src: '/man-pouring-melted-metal-workshop-large.jpg', desc: 'On-site inspections, partner coordination, and custody tracking.' },
              { label: 'Mineral sourcing',   src: '/Gold-bars.webp', desc: 'Verified mineral lots with documented origin and logistics.' },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="ops-card" style={{ borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ overflow: 'hidden' }}>
                  <img src={item.src} alt={item.label} className="ops-img" loading="lazy" />
                </div>
                <div style={{ padding: '1rem 1.25rem', background: '#fff', border: '1px solid var(--rule-md)', borderTop: 'none' }}>
                  <div className="ops-label">{item.label}</div>
                  <div className="ops-desc">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4rem', alignItems: 'start' }} className="comp-cols">
          <div>
            <div className="eyebrow">Compliance &amp; assurance</div>
            <h2 className="section-title"><strong>Built for</strong><br />institutional buyers</h2>
            <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.48)', lineHeight: 1.7, marginTop: '1.25rem', fontWeight: 300 }}>
              Our processes emphasise traceability, independent verification, and export-ready documentation. Every shipment is prepared with custody records, assay reports, and logistics coordination.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1.5rem' }}>
              {['Assay certificates', 'Origin verification', 'KYC-ready files', 'Secure logistics'].map(t => (
                <span key={t} style={{ border: '1px solid var(--rule-md)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 2, color: 'rgba(10,22,40,0.52)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--navy)', borderRadius: 6, padding: '2.5rem' }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: '1.5rem' }}>How orders are fulfilled</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Confirm specifications and volume requirements.',
                'Complete compliance review and documentation pack.',
                'Arrange inspection, assay, and packing at certified facilities.',
                'Dispatch with insured logistics, custody records, and live tracking.',
              ].map((t, i) => (
                <div key={i} className="fulfill-item">
                  <div className="fulfill-dot" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Compliance &amp; standards</div>
            <h2 className="section-title">What we can show you <strong>in writing</strong></h2>
          </div>
          <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {CREDENTIALS.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="cred-card">
                <div className="cred-code">{c.code}</div>
                <div className="cred-title">{c.title}</div>
                <div className="cred-body">{c.detail}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', background: 'rgba(184,146,42,0.05)', border: '1px solid rgba(184,146,42,0.18)', borderRadius: 4, padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(10,22,40,0.58)', maxWidth: 600 }}>
              Every order ships with the full paper trail: origin certificate, lab assay report, custody records, and export documentation. Nothing missing, nothing you&apos;ll need to chase us for.
            </p>
            <a href="/compliance" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--gold)', whiteSpace: 'nowrap' }}>View compliance docs →</a>
          </div>
        </div>
      </section>

      {/* WHY BUYERS */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Why buyers choose us</div>
            <h2 className="section-title">What you actually get <strong>when you order</strong></h2>
            <p style={{ fontSize: 14, color: 'rgba(10,22,40,0.48)', marginTop: '0.75rem', fontWeight: 300 }}>Not vague promises — specific things you can check and verify yourself.</p>
          </div>
          <div className="buyers-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Every document, included',    body: 'Origin certificate, assay report, custody records, KYC package — all included with every shipment.',
                icon: <svg style={{ width: 36, height: 36, color: 'var(--navy)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M10 12h4M10 16h4"/></svg> },
              { title: 'Lab-verified purity',          body: 'Independent ISO-certified laboratories verify every shipment. Stamped assay certificate ships with your order.',
                icon: <svg style={{ width: 36, height: 36, color: 'var(--navy)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg> },
              { title: 'Insured &amp; tracked delivery', body: 'Full-value shipment insurance. Real-time tracking. A named team member who answers your calls.',
                icon: <svg style={{ width: 36, height: 36, color: 'var(--navy)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h13l4 4v7H3z"/><circle cx="5.5" cy="19.5" r="1.5"/><circle cx="18.5" cy="19.5" r="1.5"/></svg> },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid var(--rule-md)', borderRadius: 4, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {item.icon}
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>{item.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(10,22,40,0.48)', fontWeight: 300 }}>{item.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <hr className="rule" />
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="eyebrow">Resources</div>
            <h2 className="section-title"><strong>Download</strong> service documents</h2>
            <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.48)', marginTop: '0.5rem', fontWeight: 300 }}>Review specifications, compliance requirements, and pricing guidance.</p>
          </div>
          <div className="dl-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {[
              { name: 'Product Spec Sheet', file: 'Diamond_Capital_Africa_Spec_Sheet.pdf' },
              { name: 'Current Price List',  file: 'Diamond_Capital_Africa_Pricing.pdf' },
              { name: 'Compliance Guide',    file: 'Diamond_Capital_Africa_Compliance.pdf' },
            ].map(doc => (
              <a key={doc.file} href={`/api/download?file=${doc.file}`} className="dl-card">
                <div style={{ width: 36, height: 36, background: 'rgba(10,22,40,0.05)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(10,22,40,0.5)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 2 }}>{doc.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', color: 'rgba(10,22,40,0.33)' }}>PDF DOCUMENT</div>
                </div>
                <div style={{ marginLeft: 'auto', color: 'rgba(10,22,40,0.28)', fontSize: 16 }}>↘</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <hr className="rule" />
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">Industry insights</div>
              <h2 className="section-title">Latest gold market <strong>news</strong></h2>
            </div>
            <a href="/news" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)' }}>All articles →</a>
          </div>
          <div className="news-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
            {homeNewsTeaserIds.map((articleId, i) => {
              const article = getArticleById(articleId);
              if (!article) return null;
              const teaser = article.homeTeaser ?? article.excerpt;
              return (
                <motion.div
                  key={articleId}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ height: '100%' }}
                >
                  <Link href={`/news/${articleId}`} className="news-card" style={{ height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                      <span className="news-cat">{article.category}</span>
                      <span className="news-date">{article.dateShort}</span>
                    </div>
                    <div className="news-title">{article.title}</div>
                    <div className="news-excerpt">{teaser}</div>
                    <div className="news-link">Read article →</div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a href="/news" style={{ display: 'inline-block', border: '1px solid var(--rule-md)', borderRadius: 4, padding: '12px 28px', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--navy)' }}>
              Read all articles →
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '6rem 2rem' }}>
          <div className="cta-label">Available for immediate orders</div>
          <h2 className="cta-h2">Source certified Ugandan gold —<br /><strong>verified, documented, delivered.</strong></h2>
          <p className="cta-sub">Tell us what you need — volume, purity, timeline. We&apos;ll come back with a straight quote and answer your questions directly.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '4rem' }}>
            <a href="/account-holders" className="btn-primary" style={{ fontSize: 14, padding: '14px 32px' }}>Get started today</a>
            <a href="/products" className="btn-ghost" style={{ fontSize: 14, padding: '14px 32px' }}>Explore services →</a>
            <a href="https://wa.me/256704833021" className="btn-wa" style={{ fontSize: 14, padding: '14px 32px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.861L.057 23.5l5.79-1.452A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.214-3.716.931.99-3.63-.236-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              WhatsApp us
            </a>
          </div>
          <div className="cta-cells" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
            {[
              { label: 'Direct contact', val: '+256 (0) 704 833 021' },
              { label: 'Email',          val: 'info@diamondcapitalafrica.com' },
              { label: 'Response time',  val: 'Within 24 hours' },
            ].map(({ label, val }) => (
              <div key={label} className="cta-cell">
                <div className="cta-cl">{label}</div>
                <div className="cta-cv">{val}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
            Want to invest in Uganda&apos;s gold sector?{' '}
            <a href="https://invest.diamondcapitalafrica.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4ADE80', fontWeight: 400 }}>Investor portal →</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

