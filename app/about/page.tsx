'use client';

import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/app/components/Navbar';

// ── Shared motion helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    duration: 0.65,
    delay,
    ease: cubicBezier(0.22, 1, 0.36, 1),
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

// ── Data ──────────────────────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    n: '01',
    title: 'Integrity',
    body: 'We tell you what is possible, what is not, and why. No hidden steps, no inflated margins, no surprises at the end.',
  },
  {
    n: '02',
    title: 'Compliance first',
    body: "We don't cut corners on documentation. Every transaction follows international standards — because your buyers and banks will check.",
  },
  {
    n: '03',
    title: 'Ethical sourcing',
    body: "We only work with miners we've visited. If we can't verify where the gold came from, we don't buy it.",
  },
  {
    n: '04',
    title: 'Professional service',
    body: "You'll have a real contact at our Kampala office who knows your order and picks up the phone.",
  },
];

const CREDENTIALS = [
  { code: 'UG-MIN', label: 'Licensed Trader', body: 'Uganda Minerals & Mining licensed operator. Documentation available on request.' },
  { code: 'ISO', label: 'Certified Assay', body: 'ISO 17025-accredited independent labs verify every shipment. Certificate ships with every order.' },
  { code: 'OECD', label: 'Due Diligence', body: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition.' },
  { code: 'INS', label: 'Insured Logistics', body: 'Full-value shipment insurance with real-time tracking from dispatch to delivery.' },
];

const OPERATIONS = [
  {
    label: 'Assay coordination',
    src: 'https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: 'Third-party ISO-certified labs verify purity and weight before every shipment is packed.',
  },
  {
    label: 'Field operations',
    src: 'https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: 'We physically visit partner mines. On-site inspections, partner coordination, and custody tracking.',
  },
  {
    label: 'Mineral sourcing',
    src: 'https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?auto=compress&cs=tinysrgb&w=800',
    body: 'Verified mineral lots with documented origin — licensed, visited, and authenticated before purchase.',
  },
];

const STATS = [
  { value: '5+', label: 'Years operating' },
  { value: '99.5%', label: 'Minimum purity' },
  { value: 'OECD', label: 'Due diligence' },
  { value: '100%', label: 'KYC-compliant' },
];

const HOW = [
  { label: 'Kampala hub', body: 'Where we take your calls, process paperwork, and organise your shipment.' },
  { label: 'Field verification', body: 'We physically visit our partner mines. What we see is what we document.' },
  { label: 'Global delivery', body: 'We arrange logistics around your schedule — insured, tracked, confirmed.' },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpac = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main style={{
      minHeight: '100vh',
      background: '#F7F6F2',
      color: '#0D0D0D',
      fontFamily: "'Sora', system-ui, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="about-hero">
        <motion.div className="hero-img" style={{ y: heroY }} />
        <div className="hero-overlay" />

        <motion.div className="hero-content" style={{ opacity: heroOpac }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="hero-badge">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
              Established in Kampala, Uganda
            </div>
          </motion.div>

          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            We trade gold the way<br />
            it should be done —<br />
            <strong>openly, with paperwork<br />you can verify.</strong>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Based in Kampala. Working directly with licensed miners across Uganda.
          </motion.p>
        </motion.div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div className="intro-grid">

          <motion.div className="intro-left" {...fadeUp(0)}>
            <div className="eyebrow">About us</div>
            <h2 className="section-title">
              Integrity-led gold trading<br />
              <strong>for global buyers.</strong>
            </h2>

            <div className="intro-stat-grid">
              {STATS.map((s, i) => (
                <motion.div key={s.label} className="intro-stat" {...fadeUp(i * 0.08)}>
                  <div className="intro-stat-val">{s.value}</div>
                  <div className="intro-stat-lbl">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="intro-right" {...fadeUp(0.1)}>
            <div className="mission-card">
              <div className="eyebrow">Mission</div>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                Supply gold with full transparency, compliance, and verified sourcing.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div key={p.n} {...fadeUp(i * 0.1)} className="principle-item">
              <div className="principle-n">{p.n}</div>
              <div>
                <div className="principle-title">{p.title}</div>
                <div className="principle-body">{p.body}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}