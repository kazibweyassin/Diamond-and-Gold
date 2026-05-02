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
  { code: 'ISO', label: 'Certified Assay', body: 'ISO 17025-accredited independent labs verify every shipment.' },
  { code: 'OECD', label: 'Due Diligence', body: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains.' },
  { code: 'INS', label: 'Insured Logistics', body: 'Full-value shipment insurance with real-time tracking.' },
];

const OPERATIONS = [
  {
    label: 'Assay coordination',
    src: 'https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: 'Third-party ISO-certified labs verify purity and weight before every shipment.',
  },
  {
    label: 'Field operations',
    src: 'https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: 'On-site inspections, partner coordination, and custody tracking at source.',
  },
  {
    label: 'Mineral sourcing',
    src: 'https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?auto=compress&cs=tinysrgb&w=800',
    body: 'Verified mineral lots with documented origin — visited and authenticated.',
  },
];

const STATS = [
  { value: '5+', label: 'Years operating' },
  { value: '99.5%', label: 'Minimum purity' },
  { value: 'OECD', label: 'Due diligence' },
  { value: '100%', label: 'KYC-compliant' },
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
    <main style={{ minHeight: '100vh', background: '#0A1628', color: '#0D0D0D', fontFamily: "'Sora', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
        :root {
          --navy: #0A1628;
          --gold: #B8922A;
          --gold-lt: #E8C96A;
          --rule-md: rgba(10,22,40,0.15);
          --mono: 'IBM Plex Mono', monospace;
        }

        .eyebrow {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .eyebrow::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }

        .about-hero { position: relative; height: 80svh; display: flex; align-items: flex-end; overflow: hidden; background: var(--navy); }
        .hero-img { position: absolute; inset: 0; background: url('https://images.pexels.com/photos/2885918/pexels-photo-2885918.jpeg?auto=compress&cs=tinysrgb&w=1200') center/cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, var(--navy) 0%, rgba(10,22,40,0.4) 100%); }
        .hero-content { position: relative; z-index: 2; width: 100%; maxWidth: 1280px; margin: 0 auto; padding: 0 2rem 6rem; }
        .hero-h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); color: #fff; font-weight: 300; line-height: 1.1; margin-bottom: 2rem; }
        .hero-h1 strong { color: var(--gold-lt); font-weight: 600; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 2px; color: #fff; font-family: var(--mono); font-size: 10px; text-transform: uppercase; margin-bottom: 2rem; }

        .intro-grid { maxWidth: 1280px; margin: 0 auto; padding: 6rem 2rem; display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 300; color: var(--navy); margin-bottom: 2rem; }
        .intro-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 3rem; }
        .intro-stat-val { font-size: 2rem; font-weight: 600; color: var(--navy); }
        .intro-stat-lbl { font-family: var(--mono); font-size: 10px; color: var(--gold); text-transform: uppercase; }
        .mission-card { background: var(--navy); padding: 3rem; border-radius: 4px; color: #fff; }

        .principle-item { display: grid; grid-template-columns: 80px 1fr; padding: 3rem 0; border-bottom: 1px solid var(--rule-md); }
        .principle-n { font-family: var(--mono); color: var(--gold); font-size: 14px; }
        .principle-title { font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 0.5rem; }
        .principle-body { font-size: 15px; color: rgba(10,22,40,0.6); line-height: 1.6; max-width: 600px; }

        .ops-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
        .ops-card img { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 4px; margin-bottom: 1.5rem; }

        @media (max-width: 768px) {
          .intro-grid, .ops-grid { grid-template-columns: 1fr; }
          .principle-item { grid-template-columns: 1fr; gap: 1rem; }
        }
      `}</style>

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

          <motion.h1 className="hero-h1" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            We trade gold the way<br />it should be done —<br />
            <strong>openly, with paperwork<br />you can verify.</strong>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }}>
        <div className="intro-grid">
          <motion.div {...fadeUp(0)}>
            <div className="eyebrow">About us</div>
            <h2 className="section-title">Integrity-led gold trading<br /><strong>for global buyers.</strong></h2>
            <div className="intro-stat-grid">
              {STATS.map((s, i) => (
                <motion.div key={s.label} className="intro-stat" {...fadeUp(i * 0.08)}>
                  <div className="intro-stat-val">{s.value}</div>
                  <div className="intro-stat-lbl">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <div className="mission-card">
              <div className="eyebrow" style={{ color: 'var(--gold-lt)' }}>Mission</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: '1.6' }}>
                To set the benchmark for gold export in East Africa by providing institutional and private buyers a direct, compliant, and transparent path to verified physical gold.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────────────────── */}
      <section style={{ background: '#F7F6F2', padding: '8rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="eyebrow">Our Principles</div>
          <h2 className="section-title">The Diamond Capital <strong>Standard</strong></h2>
          <div style={{ marginTop: '4rem' }}>
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
        </div>
      </section>

      {/* ── OPERATIONS ────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '8rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="eyebrow">On the ground</div>
          <h2 className="section-title">Our <strong>Operations</strong></h2>
          <div className="ops-grid">
            {OPERATIONS.map((op, i) => (
              <motion.div key={op.label} {...fadeUp(i * 0.1)} className="ops-card">
                <img src={op.src} alt={op.label} />
                <div className="intro-stat-lbl" style={{ marginBottom: '0.5rem' }}>{op.label}</div>
                <div className="principle-body" style={{ fontSize: '14px' }}>{op.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Get in touch</div>
          <h2 className="hero-h1" style={{ fontSize: '2.5rem' }}>Ready to discuss <strong>your requirements?</strong></h2>
          <a href="/contact" style={{ display: 'inline-block', background: 'var(--gold)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 600, marginTop: '2rem' }}>
            Contact our Kampala Office
          </a>
          <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            © 2026 Diamond Capital Africa. Licensed Gold Exporter.
          </div>
        </div>
      </footer>
    </main>
  );
}