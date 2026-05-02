'use client';

import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/app/components/Navbar';

// ── Shared motion helpers ─────────────────────────────────────────────────────
// Explicitly typed to satisfy Next.js/TypeScript build requirements
const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { 
    duration: 0.65, 
    delay, 
    ease: "easeOut" as const // 'as const' ensures TypeScript recognizes this as a specific easing type
  },
});

const fadeIn = (delay = 0): HTMLMotionProps<"div"> => ({
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
  { code: 'UG-MIN', label: 'Licensed Trader',         body: 'Uganda Minerals & Mining licensed operator. Documentation available on request.' },
  { code: 'ISO',   label: 'Certified Assay',          body: 'ISO 17025-accredited independent labs verify every shipment. Certificate ships with every order.' },
  { code: 'OECD',  label: 'Due Diligence',            body: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition.' },
  { code: 'INS',   label: 'Insured Logistics',         body: 'Full-value shipment insurance with real-time tracking from dispatch to delivery.' },
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
    src: 'https://images.pexels.com/photos/33357665/pexels-photo-33357665.jpeg?auto=compress&cs=tinysrgb&w=1200',
    body: 'Verified mineral lots with documented origin — licensed, visited, and authenticated before purchase.',
  },
];

const STATS = [
  { value: '5+',    label: 'Years operating' },
  { value: '99.5%', label: 'Minimum purity' },
  { value: 'OECD',  label: 'Due diligence' },
  { value: '100%',  label: 'KYC-compliant' },
];

const HOW = [
  { label: 'Kampala hub',         body: 'Where we take your calls, process paperwork, and organise your shipment.' },
  { label: 'Field verification', body: 'We physically visit our partner mines. What we see is what we document.' },
  { label: 'Global delivery',     body: 'We arrange logistics around your schedule — insured, tracked, confirmed.' },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY    = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpac = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main style={{
      minHeight: '100vh',
      background: '#F7F6F2',
      color: '#0D0D0D',
      fontFamily: "'Sora', system-ui, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy:    #0A1628;
          --gold:    #B8922A;
          --gold-lt: #E8C96A;
          --cream:   #F7F6F2;
          --rule:    rgba(10,22,40,0.09);
          --rule-md: rgba(10,22,40,0.15);
          --mono:    'IBM Plex Mono', monospace;
        }

        .eyebrow {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .eyebrow::before {
          content: ''; display: block; width: 20px; height: 1px; background: var(--gold);
        }

        .section-title {
          font-size: clamp(1.9rem, 3.2vw, 2.8rem);
          font-weight: 300; letter-spacing: -0.03em;
          color: var(--navy); line-height: 1.14;
        }
        .section-title strong { font-weight: 700; }

        .about-hero {
          position: relative; height: 100svh; min-height: 600px;
          display: flex; align-items: flex-end; overflow: hidden;
        }
        .hero-img {
          position: absolute; inset: 0;
          background-image: url('https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=1800');
          background-size: cover; background-position: center 30%;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 50%, transparent 100%);
        }
        .hero-content {
          position: relative; z-index: 10;
          max-width: 1280px; margin: 0 auto; width: 100%;
          padding: 0 2rem 5rem;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(255,255,255,0.2); padding: 5px 14px;
          border-radius: 2px; font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 1.5rem;
        }
        .hero-h1 {
          font-size: clamp(2.6rem, 5.5vw, 4.8rem);
          font-weight: 300; line-height: 1.06;
          letter-spacing: -0.03em; color: #fff; max-width: 820px;
          margin-bottom: 1.5rem;
        }
        .hero-h1 strong { font-weight: 700; color: var(--gold-lt); }
        .hero-sub {
          font-size: 15px; line-height: 1.75; font-weight: 300;
          color: rgba(255,255,255,0.55); max-width: 500px; margin-bottom: 2.5rem;
        }
        .hero-scroll {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
        }
        .hero-scroll-line {
          width: 32px; height: 1px; background: rgba(255,255,255,0.2);
        }

        .intro-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; max-width: 1280px; margin: 0 auto;
        }
        .intro-left {
          padding: 6rem 4rem 6rem 2rem;
          border-right: 1px solid var(--rule-md);
        }
        .intro-right { padding: 6rem 2rem 6rem 4rem; }
        .intro-stat-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: var(--rule-md);
          border: 1px solid var(--rule-md); border-radius: 4px;
          overflow: hidden; margin-top: 3rem;
        }
        .intro-stat {
          background: #fff; padding: 1.5rem 1.75rem;
        }
        .intro-stat-val {
          font-size: 26px; font-weight: 700; color: var(--navy);
          letter-spacing: -0.02em; line-height: 1; margin-bottom: 6px;
        }
        .intro-stat-lbl {
          font-family: var(--mono); font-size: 9px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(10,22,40,0.4);
        }

        .mission-card {
          background: var(--navy); border-radius: 6px;
          padding: 2.5rem; height: 100%;
        }
        .mission-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07);
          font-size: 13px;
        }
        .mission-row:last-child { border-bottom: none; }
        .mission-key { color: rgba(255,255,255,0.4); font-weight: 300; }
        .mission-val { color: var(--gold-lt); font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; }

        .principle-item {
          display: grid; grid-template-columns: 56px 1fr;
          padding: 2.25rem 0; border-bottom: 1px solid var(--rule-md);
        }
        .principle-item:first-child { border-top: 1px solid var(--rule-md); }
        .principle-n {
          font-family: var(--mono); font-size: 11px;
          color: var(--gold); padding-top: 3px;
        }
        .principle-title {
          font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 7px;
        }
        .principle-body {
          font-size: 13px; line-height: 1.75;
          color: rgba(10,22,40,0.48); font-weight: 300;
        }

        .mosaic {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          grid-template-rows: auto auto;
          gap: 4px;
        }
        .mosaic-tall {
          grid-row: span 2;
          aspect-ratio: 3/4;
        }
        .mosaic-small { aspect-ratio: 4/3; }
        .mosaic img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: saturate(0.8);
          transition: filter 0.5s, transform 0.6s;
        }
        .mosaic-item { overflow: hidden; }
        .mosaic-item:hover img { filter: saturate(1.1); transform: scale(1.03); }

        .ops-row {
          display: grid; grid-template-columns: 260px 1fr;
          gap: 0; border-bottom: 1px solid var(--rule-md);
          align-items: stretch;
        }
        .ops-row:first-child { border-top: 1px solid var(--rule-md); }
        .ops-img-wrap { overflow: hidden; aspect-ratio: 4/3; }
        .ops-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: saturate(0.7); transition: filter 0.5s, transform 0.6s;
        }
        .ops-row:hover .ops-img-wrap img { filter: saturate(1); transform: scale(1.04); }
        .ops-text { padding: 2rem 2.5rem; display: flex; flex-direction: column; justify-content: center; }
        .ops-label {
          font-family: var(--mono); font-size: 9px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
        }
        .ops-title { font-size: 18px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
        .ops-body  { font-size: 13px; line-height: 1.7; color: rgba(10,22,40,0.48); font-weight: 300; }

        .cred-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 1px; background: var(--rule-md);
          border: 1px solid var(--rule-md); border-radius: 4px; overflow: hidden;
        }
        .cred-card {
          background: #fff; padding: 2rem 1.75rem;
          transition: background 0.2s;
        }
        .cred-card:hover { background: #FAFAF8; }
        .cred-code {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em;
          color: var(--gold); background: rgba(184,146,42,0.08);
          padding: 4px 10px; border-radius: 2px;
          display: inline-block; margin-bottom: 1.2rem;
        }
        .cred-title { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
        .cred-body  { font-size: 12px; color: rgba(10,22,40,0.45); line-height: 1.65; font-weight: 300; }

        .how-item {
          display: grid; grid-template-columns: 56px 1fr;
          padding: 2rem 0; border-bottom: 1px solid var(--rule-md);
        }
        .how-item:first-child { border-top: 1px solid var(--rule-md); }
        .how-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); margin-top: 5px;
        }
        .how-lbl {
          font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 6px;
        }
        .how-body { font-size: 13px; color: rgba(10,22,40,0.48); line-height: 1.7; font-weight: 300; }

        .cta-banner {
          background: var(--navy); position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        @media (max-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr; }
          .intro-left { padding: 4rem 2rem 2rem; border-right: none; border-bottom: 1px solid var(--rule-md); }
          .intro-right { padding: 2rem 2rem 4rem; }
          .cred-grid { grid-template-columns: repeat(2,1fr); }
          .mosaic { grid-template-columns: 1fr 1fr; }
          .mosaic-tall { grid-row: span 1; aspect-ratio: 4/3; }
        }
        @media (max-width: 768px) {
          .hero-h1 { font-size: clamp(2rem, 8vw, 3rem); }
          .ops-row  { grid-template-columns: 1fr; }
          .ops-img-wrap { aspect-ratio: 16/9; }
          .cred-grid { grid-template-columns: 1fr; }
          .mosaic { grid-template-columns: 1fr; }
          .mosaic-tall { aspect-ratio: 4/3; }
        }
      `}</style>

      <Navbar />

      <section ref={heroRef} className="about-hero">
        <motion.div className="hero-img" style={{ y: heroY }} />
        <div className="hero-overlay" />
        <motion.div className="hero-content" style={{ opacity: heroOpac }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div className="hero-badge">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
              Established in Kampala, Uganda
            </div>
          </motion.div>
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          >
            We trade gold the way<br />it should be done —<br />
            <strong>openly, with paperwork<br />you can verify.</strong>
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }}>
            Based in Kampala. Working directly with licensed miners across Uganda. If you need to buy gold responsibly, this is how we can help.
          </motion.p>
          <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
            <div className="hero-scroll-line" />
            Scroll to learn more
          </motion.div>
        </motion.div>
      </section>

      <section style={{ background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div className="intro-grid">
          <motion.div className="intro-left" {...fadeUp(0)}>
            <div className="eyebrow">About us</div>
            <h2 className="section-title">
              Integrity-led gold trading<br />
              <strong>for global buyers.</strong>
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(10,22,40,0.55)', marginTop: '1.5rem', fontWeight: 300, maxWidth: 440 }}>
              We're based in Kampala, with verified partners across Uganda. Every order comes with proper documentation, independent quality checks, and logistics we handle start to finish.
            </p>
            <div className="intro-stat-grid">
              {STATS.map(({ value, label }, i) => (
                <motion.div key={label} className="intro-stat" {...fadeUp(0.1 + i * 0.07)}>
                  <div className="intro-stat-val">{value}</div>
                  <div className="intro-stat-lbl">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="intro-right" {...fadeUp(0.15)}>
            <div className="eyebrow">Mission</div>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem' }}>Supply good gold at fair terms.</h3>
            <div className="mission-card">
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem' }}>Operating standards</div>
              {[
                { k: 'Traceability',    v: 'End-to-end' },
                { k: 'Compliance',      v: 'Documented' },
                { k: 'Quality control', v: 'Lab verified' },
                { k: 'Logistics',       v: 'Fully insured' },
                { k: 'Due diligence',   v: 'OECD aligned' },
              ].map(({ k, v }) => (
                <div key={k} className="mission-row">
                  <span className="mission-key">{k}</span>
                  <span className="mission-val">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
          <motion.div {...fadeUp()}>
            <div className="eyebrow">Field gallery</div>
            <h2 className="section-title">What it looks like <strong>on the ground</strong></h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <a href="/contact" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)' }}>Request a site visit briefing →</a>
          </motion.div>
        </div>
        <motion.div className="mosaic" {...fadeIn(0.1)}>
          <div className="mosaic-item mosaic-tall">
            <img src="https://images.unsplash.com/photo-1624365168056-daf44387e2ae?q=80&w=870&auto=format&fit=crop" alt="Gold bars" loading="lazy" />
          </div>
          <div className="mosaic-item mosaic-small">
            <img src="https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Gold smelting" loading="lazy" />
          </div>
          <div className="mosaic-item mosaic-small">
            <img src="https://images.pexels.com/photos/34522438/pexels-photo-34522438.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Minerals" loading="lazy" />
          </div>
        </motion.div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid var(--rule-md)', borderBottom: '1px solid var(--rule-md)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }}>
          <motion.div {...fadeUp()}>
            <div className="eyebrow">Our principles</div>
            <h2 className="section-title">What we believe in, and how it <strong>shows up at work.</strong></h2>
          </motion.div>
          <div>
            {PRINCIPLES.map((p, i) => (
              <motion.div key={p.n} {...fadeUp(i * 0.08)} className="principle-item">
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

      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '6rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div {...fadeUp()}>
            <div className="eyebrow">Work with us</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#fff', lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Ready to source gold<br />
              <strong style={{ fontWeight: 700, color: 'var(--gold-lt)' }}>with a partner you can trust?</strong>
            </h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ background: 'var(--gold)', color: '#fff', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4 }}>Speak to us →</a>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
              {[
                { label: 'Direct line',   val: '+256 (0) 704 833 021' },
                { label: 'Email',         val: 'info@diamondcapitalafrica.com' },
                { label: 'Office',        val: 'Kampala, Uganda' },
              ].map(({ label, val }) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem 1.75rem' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 7 }}>{label}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>{val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer style={{ background: 'var(--navy)', color: '#fff', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Diamond Capital Africa. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}