'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/app/components/Navbar';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});
const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const PRINCIPLES = [
  { code: '01', title: 'Integrity',        body: 'We tell you what is possible, what is not, and why. No hidden steps in our process, no inflated promises.' },
  { code: '02', title: 'Compliance first', body: "We don't cut corners on documentation. Every transaction follows international standards — because your buyers and banks will check." },
  { code: '03', title: 'Ethical sourcing', body: "We only work with miners we've visited personally. If we can't verify where the gold came from, we don't buy it." },
  { code: '04', title: 'Professional service', body: "You'll have a real contact at our Kampala office who knows your order and picks up the phone." },
];

const OPERATIONS = [
  { label: 'Kampala hub',      body: 'Where we take your calls, process your paperwork, and organise your shipment from start to finish.' },
  { label: 'Field verification', body: 'We physically visit our partner mines. What we see is what we document — no desk-based assumptions.' },
  { label: 'Global delivery',  body: 'We arrange logistics around your schedule and destination — insured, tracked, confirmed.' },
];

const CREDENTIALS = [
  { code: 'UG-MIN', title: 'Licensed Trader',         body: 'Uganda Minerals & Mining licensed operator. Licence available to verified buyers on request.' },
  { code: 'ISO',    title: 'ISO-Certified Assay',     body: 'Third-party purity testing via accredited independent laboratories. Certificate ships with every order.' },
  { code: 'OECD',  title: 'Due Diligence Compliant', body: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition.' },
  { code: 'INS',   title: 'Insured Logistics',        body: 'Full-value shipment insurance with real-time tracking from dispatch to confirmed delivery.' },
];

const GALLERY = [
  { src: '/assaying.jpg', label: 'Assay coordination', caption: 'Independent purity verification with ISO-certified labs.', wide: true },
  { src: '/man-pouring-melted-metal-workshop-large.jpg', label: 'Field operations', caption: 'On-site inspections at verified partner mines.', wide: false },
  { src: '/Gold-bars.webp', label: 'Mineral sourcing', caption: 'Verified mineral lots with documented chain of custody.', wide: false },
  { src: '/goldsmelting.webp', label: 'Gold verification', caption: 'Every batch checked and documented before dispatch.', wide: false },
  { src: '/secure-logistics-1.jpg.webp', label: 'Secure logistics', caption: 'Insured transport with real-time tracking worldwide.', wide: true },
];

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <main className="font-dca-marketing" style={{ minHeight: '100vh', background: '#F7F6F2', color: '#0D0D0D', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        :root {
          --navy: #0A1628; --gold: #B8922A; --gold-lt: #E8C96A;
          --cream: #F7F6F2; --rule-md: rgba(10,22,40,0.15);
          --mono: var(--font-dca-mono), ui-monospace, monospace;
        }
        .eyebrow { font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
        .eyebrow::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }
        .section-title { font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; letter-spacing: -0.025em; color: var(--navy); line-height: 1.15; }
        .section-title strong { font-weight: 600; }

        .hero-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.18); padding: 5px 14px; border-radius: 2px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 2rem; }
        .hero-stat { background: rgba(255,255,255,0.05); backdrop-filter: blur(8px); padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.1); }
        .hero-stat:last-child { border-right: none; }
        .stat-unit { font-family: var(--mono); font-size: 9px; letter-spacing: 0.15em; color: var(--gold-lt); margin-bottom: 4px; }
        .stat-val  { font-size: 1.4rem; font-weight: 600; color: #fff; letter-spacing: -0.02em; line-height: 1; margin-bottom: 3px; }
        .stat-lbl  { font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 300; }

        .principle-row { display: grid; grid-template-columns: 72px 200px 1fr; gap: 0; padding: 2.2rem 0; border-bottom: 1px solid var(--rule-md); align-items: start; }
        .principle-row:first-child { border-top: 1px solid var(--rule-md); }
        .p-code  { font-family: var(--mono); font-size: 11px; color: var(--gold); padding-top: 2px; }
        .p-title { font-size: 15px; font-weight: 600; color: var(--navy); }
        .p-body  { font-size: 13px; line-height: 1.75; color: rgba(10,22,40,0.5); font-weight: 300; }

        .gallery-mosaic { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--rule-md); }
        .gallery-item { position: relative; overflow: hidden; }
        .gallery-item.wide { grid-column: span 2; }
        .gallery-img { width: 100%; height: 100%; min-height: 300px; object-fit: cover; filter: saturate(0.75); transition: filter 0.5s, transform 0.6s; display: block; }
        .gallery-item:hover .gallery-img { filter: saturate(1.1); transform: scale(1.04); }
        .gallery-caption { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,22,40,0.72) 0%, transparent 55%); display: flex; flex-direction: column; justify-content: flex-end; padding: 1.25rem 1.5rem; opacity: 0; transition: opacity 0.35s; }
        .gallery-item:hover .gallery-caption { opacity: 1; }
        .gallery-label { font-family: var(--mono); font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-lt); margin-bottom: 4px; }
        .gallery-text  { font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 300; }

        .cred-card { border: 1px solid var(--rule-md); border-radius: 4px; padding: 2rem; background: #fff; transition: border-color 0.25s, box-shadow 0.25s; }
        .cred-card:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(10,22,40,0.06); }
        .cred-code  { font-family: var(--mono); font-size: 10px; letter-spacing: 0.12em; color: var(--gold); background: rgba(184,146,42,0.08); padding: 4px 10px; border-radius: 2px; display: inline-block; margin-bottom: 1.2rem; }
        .cred-title { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 0.5rem; }
        .cred-body  { font-size: 12px; color: rgba(10,22,40,0.45); line-height: 1.6; font-weight: 300; }

        .cta-band { background: var(--navy); position: relative; overflow: hidden; }
        .cta-band::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 52px 52px; }
        .btn-gold { background: var(--gold); color: #fff; font-size: 13px; font-weight: 500; padding: 13px 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-gold:hover { background: #9a7820; }
        .btn-outline-w { border: 1px solid rgba(255,255,255,0.22); color: rgba(255,255,255,0.72); font-size: 13px; padding: 13px 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-outline-w:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
        .footer-links a { font-size: 13px; color: rgba(255,255,255,0.38); transition: color 0.2s; font-weight: 300; }
        .footer-links a:hover { color: var(--gold); }

        @media (max-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr !important; }
          .intro-text  { padding: 3rem 2rem !important; border-right: none !important; border-bottom: 1px solid var(--rule-md); }
          .principle-row { grid-template-columns: 56px 1fr; }
          .p-body { grid-column: 2; margin-top: 4px; }
          .gallery-mosaic { grid-template-columns: 1fr 1fr; }
          .gallery-item.wide { grid-column: span 2; }
          .cta-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .gallery-mosaic { grid-template-columns: 1fr; }
          .gallery-item.wide { grid-column: span 1; }
          .ops-split { grid-template-columns: 1fr !important; }
          .cred-grid  { grid-template-columns: 1fr 1fr !important; }
          .comp-split { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats-wrap { grid-template-columns: repeat(3,1fr) !important; width: 100% !important; }
        }
        @media (max-width: 480px) {
          .cred-grid { grid-template-columns: 1fr !important; }
          .hero-stats-wrap { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: 60 }}>
        <motion.div style={{ position: 'absolute', inset: 0, y: heroImgY }}>
          <img src="https://images.pexels.com/photos/4441607/pexels-photo-4441607.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Diamond Capital Africa field operations" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(108deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.55) 55%, rgba(10,22,40,0.18) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.65) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '5rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="hero-badge"><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />Established in Kampala, Uganda</div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }}
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', maxWidth: 800, marginBottom: '1.5rem' }}>
            We trade gold the way it should be done —{' '}
            <strong style={{ fontWeight: 600, color: 'var(--gold-lt)' }}>openly, with paperwork you can actually verify.</strong>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.6 }}
            style={{ fontSize: 15, lineHeight: 1.75, fontWeight: 300, color: 'rgba(255,255,255,0.52)', maxWidth: 520, marginBottom: '2.5rem' }}>
            Based in Kampala, working directly with licensed miners across Uganda. If you need to buy gold responsibly, this is how we can help.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56, duration: 0.5 }}>
            <div className="hero-stats-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 0, width: 'fit-content', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, overflow: 'hidden' }}>
              {[{ unit: 'XAU', val: '99.5%+', lbl: 'Minimum purity' }, { unit: 'HRS', val: '48–72h', lbl: 'Dispatch window' }, { unit: 'STD', val: 'OECD', lbl: 'Due diligence' }].map(({ unit, val, lbl }) => (
                <div key={lbl} className="hero-stat">
                  <div className="stat-unit">{unit}</div>
                  <div className="stat-val">{val}</div>
                  <div className="stat-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div className="intro-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          <motion.div className="intro-text" {...fadeLeft()} style={{ padding: '5rem 4rem 5rem 2rem', borderRight: '1px solid var(--rule-md)' }}>
            <div className="eyebrow">About us</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Integrity-led gold trading<br /><strong>for global buyers.</strong></h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(10,22,40,0.55)', fontWeight: 300, marginBottom: '1.25rem' }}>
              We are based in Kampala with verified partners across Uganda and Congo. Every order comes with proper documentation, independent quality checks, and logistics we handle start to finish.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(10,22,40,0.55)', fontWeight: 300, marginBottom: '2.5rem' }}>
              Our mission is simple: supply good gold at fair terms — without cutting corners on where it came from or how it gets to you.
            </p>
            <div style={{ borderTop: '1px solid var(--rule-md)' }}>
              {[{ k: 'Traceability', v: 'End-to-end' }, { k: 'Compliance', v: 'Documented' }, { k: 'Quality control', v: 'Lab verified' }, { k: 'Delivery', v: 'Insured & tracked' }].map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--rule-md)' }}>
                  <span style={{ fontSize: 13, color: 'rgba(10,22,40,0.5)', fontWeight: 300 }}>{k}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.06em' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeRight()} style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }}>
            <img src="https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Assay coordination" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'saturate(0.8)', display: 'block', transition: 'filter 0.5s, transform 0.6s' }}
              onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = 'saturate(1.1)'; (e.target as HTMLImageElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = 'saturate(0.8)'; (e.target as HTMLImageElement).style.transform = 'scale(1)'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.45) 100%)' }} />
            <span style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Assay coordination — Kampala
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }}>
          <motion.div {...fadeLeft()}>
            <div className="eyebrow">Our principles</div>
            <h2 className="section-title">What we believe in,<br /><strong>and how it shows up at work.</strong></h2>
            <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.45)', lineHeight: 1.75, marginTop: '1.25rem', fontWeight: 300 }}>
              These are the reasons we turn down business we are not comfortable with, and the reason clients come back.
            </p>
          </motion.div>
          <div>
            {PRINCIPLES.map((p, i) => (
              <motion.div key={p.code} className="principle-row" {...fadeUp(i * 0.08)}>
                <div className="p-code">{p.code}</div>
                <div className="p-title">{p.title}</div>
                <div className="p-body">{p.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ borderBottom: '1px solid var(--rule-md)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">Field gallery</div>
              <h2 className="section-title"><strong>What it looks like</strong> on the ground</h2>
            </div>
            <a href="/contact" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)' }}>Request site visit info →</a>
          </motion.div>
        </div>
        <motion.div className="gallery-mosaic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {GALLERY.map((item, i) => (
            <motion.div key={item.label} className={`gallery-item${item.wide ? ' wide' : ''}`} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}>
              <img src={item.src} alt={item.label} className="gallery-img" loading="lazy" />
              <div className="gallery-caption">
                <div className="gallery-label">{item.label}</div>
                <div className="gallery-text">{item.caption}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── HOW WE RUN THINGS ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '3.5rem' }}>
            <div className="eyebrow">Operations</div>
            <h2 className="section-title">How we run things —<br /><strong>no shortcuts.</strong></h2>
          </motion.div>
          <div className="ops-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule-md)' }}>
            <motion.div {...fadeLeft()} style={{ background: '#fff', padding: '3rem' }}>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(10,22,40,0.55)', fontWeight: 300, marginBottom: '2rem' }}>
                We follow Uganda's mining regulations, OECD due diligence guidelines, and the expectations of the international buyers we work with.
              </p>
              {['Origin verification and custody tracking', 'Independent purity testing at certified labs', 'Export readiness and logistics compliance', 'Community engagement and environmental awareness'].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '1rem 0', borderBottom: i < 3 ? '1px solid var(--rule-md)' : 'none' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 13, color: 'rgba(10,22,40,0.65)', lineHeight: 1.6, fontWeight: 300 }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div {...fadeRight()} style={{ background: 'var(--navy)', padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {OPERATIONS.map((op, i) => (
                <motion.div key={op.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ paddingBottom: i < OPERATIONS.length - 1 ? '2rem' : 0, borderBottom: i < OPERATIONS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-lt)', marginBottom: 8 }}>{op.label}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>{op.body}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE SPLIT ── */}
      <section style={{ borderBottom: '1px solid var(--rule-md)', overflow: 'hidden' }}>
        <div className="comp-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 420 }}>
          <motion.div {...fadeLeft()} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1624365168056-daf44387e2ae?q=80&w=900&auto=format&fit=crop" alt="Gold verification" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'saturate(0.8)', display: 'block', minHeight: 380 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.5) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Gold verification — laboratory</div>
          </motion.div>
          <motion.div {...fadeRight()} style={{ padding: '4rem 3rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="eyebrow">Regulatory alignment</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Everything buyers need,<br /><strong>prepared in advance.</strong></h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(10,22,40,0.5)', fontWeight: 300, marginBottom: '2rem' }}>
              Before anything ships, we prepare the full documentation pack — origin verification, assay reports, custody records. Your compliance team won't have to ask twice.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Assay certified', 'Origin verified', 'Custody documented', 'KYC-ready', 'Export compliant', 'Insured logistics'].map(t => (
                <span key={t} style={{ border: '1px solid var(--rule-md)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 2, color: 'rgba(10,22,40,0.52)' }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff', borderBottom: '1px solid var(--rule-md)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div {...fadeUp()} style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow">Compliance &amp; standards</div>
            <h2 className="section-title">What we can show you <strong>in writing</strong></h2>
          </motion.div>
          <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {CREDENTIALS.map((c, i) => (
              <motion.div key={c.code} className="cred-card" {...fadeUp(i * 0.08)}>
                <div className="cred-code">{c.code}</div>
                <div className="cred-title">{c.title}</div>
                <div className="cred-body">{c.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-inner" style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div {...fadeLeft()}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: 18, height: 1, background: 'var(--gold)' }} />Ready to work together
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.12, marginBottom: '1.25rem' }}>
              Source certified Ugandan gold —{' '}
              <strong style={{ fontWeight: 600, color: 'var(--gold-lt)' }}>with people who answer your calls.</strong>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, fontWeight: 300, maxWidth: 480, marginBottom: '2.5rem' }}>
              Tell us what you need — volume, purity, timeline. We will come back with a straight quote and answer your questions directly.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="/contact" className="btn-gold">Get in touch →</a>
              <a href="/products" className="btn-outline-w">View services</a>
            </div>
          </motion.div>
          <motion.div {...fadeRight()} style={{ display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
            {[{ label: 'Direct line', val: '+256 (0) 704 833 021' }, { label: 'Email', val: 'info@diamondcapitalafrica.com' }, { label: 'Location', val: 'Kampala, Uganda' }, { label: 'Response time', val: 'Within 24 hours' }].map(({ label, val }, i) => (
              <div key={label} style={{ padding: '1.25rem 1.5rem', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: 'rgba(255,255,255,0.025)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{val}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--navy)', color: '#fff', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="footer-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <img src="/Logo.png" alt="Diamond Capital Africa" style={{ height: 32, width: 'auto', marginBottom: '1rem' }} />
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, fontWeight: 300 }}>Gold from Uganda — properly sourced, fully documented, and delivered.</p>
          </div>
          {[
            { heading: 'Company',   links: [['About us', '/about'], ['Services', '/products'], ['Our process', '/process'], ['Compliance', '/compliance']] },
            { heading: 'Resources', links: [['News', '/news'], ['FAQ', '/faq'], ['Contact', '/contact']] },
            { heading: 'Connect',   links: [['WhatsApp', 'https://wa.me/256704833021'], ['Email', 'mailto:info@diamondcapitalafrica.com'], ['Investor portal', 'https://invest.diamondcapitalafrica.com']] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <div style={{ fontWeight: 600, marginBottom: '1rem', fontSize: 13 }}>{heading}</div>
              <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}