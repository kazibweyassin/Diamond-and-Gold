'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/app/components/Navbar';
import { Lucid, Shovel, Globe, Microscope, BrickWallShield, Truck, Scale, FileCheck, Shield } from '@/app/components/Icons';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: EASE },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: EASE },
});

// Key metrics as of latest reporting
const METRICS = [
  { unit: 'Annual Trade Volume', value: '$2.8B+', label: 'Global precious metals handled' },
  { unit: 'Countries Served', value: '45+', label: 'Across Africa, Asia & Europe' },
  { unit: 'Years Established', value: '12+', label: 'Trusted partner since 2012' },
  { unit: 'KYC Compliance', value: '100%', label: 'All transactions fully verified' },
];

// Core business pillars
const BUSINESS_PILLARS = [
  { 
    code: '01', 
    title: 'Source & Verification', 
    body: 'We identify and verify precious metal sources directly from artisanal and small-scale miners. Full chain-of-custody documentation and due diligence at every step.' 
  },
  { 
    code: '02', 
    title: 'Assay & Testing', 
    body: 'Independent ISO-certified laboratory testing confirms purity and weight. Every batch documented with third-party certificates shipped with delivery.' 
  },
  { 
    code: '03', 
    title: 'Logistics & Delivery', 
    body: 'Fully insured, tracked shipments to anywhere in the world. Real-time monitoring and confirmed delivery with full transparency from dispatch to door.' 
  },
  { 
    code: '04', 
    title: 'Compliance & Standards', 
    body: 'Full OECD Guidance compliance, Swiss LBMA standards, and international KYC protocols. Buyer verification and anti-money laundering protocols on every transaction.' 
  },
];

// What we do - core services
const WHAT_WE_DO = [
  {
    icon: <Shovel size={20} strokeWidth={1.8} style={{ color: 'var(--gold)' }} />,
    title: 'Source & Acquire',
    body: 'Identify and acquire certified precious metals directly from verified suppliers in East Africa, West Africa, and emerging markets.'
  },
  {
    icon: <Microscope size={20} strokeWidth={1.8} style={{ color: 'var(--gold)' }} />,
    title: 'Test & Certify',
    body: 'Independent assay testing via accredited laboratories. Every lot certified for purity, weight, and origin compliance.'
  },
  {
    icon: <BrickWallShield size={20} strokeWidth={1.8} style={{ color: 'var(--gold)' }} />,
    title: 'Store & Secure',
    body: 'Secure vaulting with full insurance coverage. Metals held in your name with real-time inventory access and audit trails.'
  },
  {
    icon: <Truck size={20} strokeWidth={1.8} />,
    title: 'Deliver Worldwide',
    body: 'Insured logistics to any destination. Full tracking, documentation, and confirmation of delivery with international protocols.'
  },
];

// Operations centers
const OPERATIONS = [
  { 
    label: 'Kampala Operations Hub', 
    body: 'Central processing and coordination center. Direct contact, paperwork handling, shipment organization, and buyer verification.' 
  },
  { 
    label: 'Field Verification Team', 
    body: 'On-site inspections at supplier locations. Personal verification of sources, quality checks, and relationship management with producers.' 
  },
  { 
    label: 'International Logistics', 
    body: 'Global shipment coordination with partner couriers. Insured transport, real-time tracking, and customs documentation for all destinations.' 
  },
  { 
    label: 'Compliance Department', 
    body: 'KYC/AML protocols, OECD due diligence, buyer verification, and continuous regulatory monitoring. Full audit trail for every transaction.' 
  },
];

// Credentials & certifications
const CREDENTIALS = [
  { 
    code: 'UG-MIN', 
    icon: <Scale size={20} strokeWidth={2} />, 
    title: 'Licensed Trader', 
    body: 'Uganda Ministry of Minerals & Mining licensed operator. Full regulatory compliance with national precious metals trading standards.' 
  },
  { 
    code: 'ISO', 
    icon: <FileCheck size={20} strokeWidth={2} />, 
    title: 'ISO-Certified Assay', 
    body: 'Third-party purity testing via internationally accredited independent laboratories. Certificates shipped with every order.' 
  },
  { 
    code: 'OECD', 
    icon: <Globe size={20} strokeWidth={2} />, 
    title: 'OECD Compliance', 
    body: 'Full adherence to OECD Guidance for Responsible Mineral Supply Chains, 5th Edition. Due diligence on all sources.' 
  },
  { 
    code: 'LBMA', 
    icon: <Shield size={20} strokeWidth={2} />, 
    title: 'LBMA Standards', 
    body: 'London Bullion Market Association standards for precious metals trading. Professional dealer protocols and market practices.' 
  },
  { 
    code: 'INS', 
    icon: <Truck size={20} strokeWidth={2} />, 
    title: 'Full Insurance', 
    body: 'Complete shipment insurance covering full value. Real-time tracking from dispatch to final confirmed delivery.' 
  },
  { 
    code: 'KYC', 
    icon: <FileCheck size={20} strokeWidth={2} />, 
    title: 'KYC Verified', 
    body: 'Buyer verification on all transactions. Anti-money laundering compliance and beneficial ownership checks.' 
  },
];

// Company values
const VALUES = [
  { 
    title: 'Integrity', 
    body: 'We tell you exactly what is possible, what is not, and why. Transparent process, no hidden steps, no inflated promises.' 
  },
  { 
    title: 'Compliance First', 
    body: "We don't compromise on documentation. Every transaction meets international standards because your buyers and banks will verify." 
  },
  { 
    title: 'Ethical Sourcing', 
    body: "We only work with verified sources. If we can't personally verify origin and production standards, we don't proceed." 
  },
  { 
    title: 'Professional Service', 
    body: 'Real people, real accountability. Your dedicated contact in Kampala knows your order, answers your calls, and tracks your shipment personally.' 
  },
];

export default function CorporateProfile() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

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
        
        /* Base styles */
        .eyebrow { 
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; 
          color: var(--gold); display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; 
        }
        .eyebrow::before { content: ''; display: block; width: 18px; height: 1px; background: var(--gold); }
        
        .section-title { 
          font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; letter-spacing: -0.025em; 
          color: var(--navy); line-height: 1.15; 
        }
        .section-title strong { font-weight: 600; }

        /* Hero section */
        .hero-container {
          position: relative; height: 500px; overflow: hidden; 
          background: linear-gradient(135deg, var(--navy) 0%, #1a2d42 100%);
        }
        .hero-image {
          position: absolute; inset: 0; 
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="%230A1628"/><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
          opacity: 0.4;
        }
        .hero-overlay {
          position: absolute; inset: 0; 
          background: radial-gradient(circle at 30% 20%, rgba(184,146,42,0.15) 0%, transparent 50%);
        }
        .hero-content {
          position: relative; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; 
          padding: 0 2rem 3rem; max-width: 1280px; margin: 0 auto; width: 100%;
        }
        .hero-badge { 
          display: inline-flex; align-items: center; gap: 8px; 
          border: 1px solid rgba(255,255,255,0.18); padding: 5px 14px; border-radius: 2px; 
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; 
          color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; width: fit-content;
        }
        .hero-title {
          font-size: clamp(2.4rem, 4vw, 3.6rem); font-weight: 300; color: #fff; 
          letter-spacing: -0.02em; margin-bottom: 1.5rem; line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1rem; color: rgba(255,255,255,0.7); font-weight: 300; 
          max-width: 600px; line-height: 1.6;
        }

        /* Hero stats grid */
        .hero-stats {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: 0; background: rgba(255,255,255,0.03); backdrop-filter: blur(8px); 
          border-top: 1px solid rgba(255,255,255,0.1); margin-top: 3rem;
        }
        .hero-stat { 
          background: rgba(255,255,255,0.02); padding: 1.5rem; border-right: 1px solid rgba(255,255,255,0.08);
        }
        .hero-stat:last-child { border-right: none; }
        .stat-unit { 
          font-family: var(--mono); font-size: 8px; letter-spacing: 0.15em; 
          color: var(--gold-lt); margin-bottom: 6px; text-transform: uppercase;
        }
        .stat-val { 
          font-size: 1.8rem; font-weight: 600; color: #fff; letter-spacing: -0.02em; 
          line-height: 1; margin-bottom: 4px;
        }
        .stat-lbl { 
          font-size: 9px; color: rgba(255,255,255,0.5); font-weight: 300; line-height: 1.4;
        }

        /* Sections */
        .section { padding: 4rem 2rem; max-width: 1280px; margin: 0 auto; }
        .section-light { background: #F7F6F2; }
        .section-dark { background: var(--navy); color: #fff; }
        .section-dark .section-title { color: #fff; }
        .section-dark .eyebrow { color: var(--gold-lt); }

        /* Grid layouts */
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2.5rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }

        /* Pillar cards */
        .pillar-row { 
          display: grid; grid-template-columns: 60px 200px 1fr; gap: 0; 
          padding: 2rem 0; border-bottom: 1px solid var(--rule-md); align-items: start;
        }
        .pillar-row:first-child { border-top: 1px solid var(--rule-md); }
        .p-code { font-family: var(--mono); font-size: 11px; color: var(--gold); padding-top: 2px; }
        .p-title { font-size: 15px; font-weight: 600; color: var(--navy); }
        .p-body { font-size: 13px; line-height: 1.8; color: rgba(10,22,40,0.6); font-weight: 300; }

        /* What we do cards */
        .service-card {
          background: #fff; border: 1px solid var(--rule-md); border-radius: 4px; 
          padding: 2rem; transition: all 0.3s ease;
        }
        .service-card:hover { border-color: var(--gold); box-shadow: 0 6px 24px rgba(184,146,42,0.08); transform: translateY(-2px); }
        .service-icon { font-size: 2.4rem; margin-bottom: 1rem; }
        .service-title { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 0.75rem; }
        .service-body { font-size: 13px; line-height: 1.7; color: rgba(10,22,40,0.6); font-weight: 300; }

        /* Dark section service cards */
        .section-dark .service-card {
          background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.08);
        }
        .section-dark .service-card:hover { border-color: var(--gold-lt); box-shadow: 0 6px 24px rgba(184,146,42,0.15); }
        .section-dark .service-title { color: #fff; }
        .section-dark .service-body { color: rgba(255,255,255,0.6); }

        /* Credentials grid */
        .cred-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
        .cred-card { 
          border: 1px solid var(--rule-md); border-radius: 4px; padding: 1.8rem; 
          background: #fff; transition: all 0.25s ease;
        }
        .cred-card:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(184,146,42,0.08); }
        .cred-code { 
          font-family: var(--mono); font-size: 9px; letter-spacing: 0.15em; 
          color: var(--gold); margin-bottom: 0.5rem; text-transform: uppercase;
        }
        .cred-title { font-size: 13px; font-weight: 600; color: var(--navy); margin-bottom: 0.75rem; }
        .cred-body { font-size: 12px; line-height: 1.6; color: rgba(10,22,40,0.55); font-weight: 300; }

        /* Value cards */
        .value-card {
          padding: 2rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); 
          border-radius: 4px; transition: all 0.3s ease;
        }
        .value-card:hover { background: rgba(255,255,255,0.08); border-color: var(--gold-lt); }
        .value-title { font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 0.75rem; }
        .value-body { font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.65); font-weight: 300; }

        /* Operations list */
        .ops-item {
          padding: 1.5rem 0; border-bottom: 1px solid var(--rule-md); display: grid; 
          grid-template-columns: 200px 1fr; gap: 2rem; align-items: start;
        }
        .ops-item:last-child { border-bottom: none; }
        .ops-label { font-weight: 600; color: var(--navy); font-size: 13px; }
        .ops-body { font-size: 13px; line-height: 1.7; color: rgba(10,22,40,0.6); font-weight: 300; }

        /* CTA section */
        .cta-section { text-align: center; padding: 2rem; }
        .cta-button { 
          display: inline-block; padding: 1rem 2.5rem; background: var(--gold); 
          color: var(--navy); font-weight: 600; font-size: 14px; letter-spacing: 0.05em;
          border-radius: 4px; transition: all 0.3s ease; text-decoration: none;
          border: none; cursor: pointer;
        }
        .cta-button:hover { background: var(--gold-lt); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(184,146,42,0.2); }

        .cta-button.dark {
          background: var(--navy); color: #fff; border: 1px solid var(--navy);
        }
        .cta-button.dark:hover { background: transparent; color: var(--navy); border-color: var(--navy); }

        /* Responsive */
        @media (max-width: 768px) {
          .pillar-row, .ops-item { grid-template-columns: 1fr; gap: 0.5rem; }
          .p-code, .ops-label { padding-top: 0; margin-bottom: 0.5rem; }
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
          .hero-container { height: 400px; }
          .hero-content { padding: 0 1.5rem 2rem; }
        }
        @media (max-width: 560px) {
          .hero-container { height: 360px; }
          .hero-content { padding: 0 1rem 1.5rem; }
          .hero-badge { font-size: 8px; letter-spacing: 0.12em; padding: 5px 11px; margin-bottom: 1rem; }
          .hero-title { font-size: 2rem; line-height: 1.06; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 0.9rem; line-height: 1.55; }
          .hero-stats { margin-top: 1.5rem; }
          .hero-stat { padding: 1rem; }
          .stat-unit { font-size: 7px; }
          .stat-val { font-size: 1.15rem; }
          .stat-lbl { font-size: 8px; }
          .section { padding: 3rem 1rem; }
          .section-title { font-size: 1.25rem; line-height: 1.15; }
          .service-title, .p-title, .cred-title, .value-title, .ops-label { font-size: 13px; }
          .service-body, .p-body, .cred-body, .value-body, .ops-body { font-size: 11px; line-height: 1.6; }
          .cta-button { width: 100%; }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-container">
        <motion.div className="hero-image" style={{ y: heroImgY }} />
        <div className="hero-overlay" />
        <motion.div className="hero-content" {...fadeUp(0)}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <Lucid size={18} style={{ color: 'var(--gold)' }} />
            <span>Global Precious Metals Trader</span>
          </div>
          <h1 className="hero-title">Diamond Capital Africa</h1>
          <p className="hero-subtitle">
            Trusted precious metals sourcing, verification, and delivery. Serving investors, refineries, and institutions with full compliance and transparency.
          </p>
          <div className="hero-stats">
            {METRICS.map((metric, i) => (
              <motion.div key={i} className="hero-stat" {...fadeUp(0.1 * i)}>
                <div className="stat-unit">{metric.unit}</div>
                <div className="stat-val">{metric.value}</div>
                <div className="stat-lbl">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="section section-light">
        <motion.div {...fadeUp(0)}>
          <div className="eyebrow">Services</div>
          <h2 className="section-title">What We <strong>Do</strong></h2>
        </motion.div>
        <div className="grid-4" style={{ marginTop: '2.5rem' }}>
          {WHAT_WE_DO.map((service, i) => (
            <motion.div key={i} className="service-card" {...fadeUp(0.08 * i)}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-body">{service.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Pillars */}
      <section className="section section-light">
        <motion.div {...fadeUp(0)}>
          <div className="eyebrow">Operations</div>
          <h2 className="section-title">Our <strong>Core Pillars</strong></h2>
        </motion.div>
        <motion.div style={{ marginTop: '2.5rem' }} {...fadeUp(0.1)}>
          {BUSINESS_PILLARS.map((pillar, i) => (
            <motion.div key={i} className="pillar-row" {...fadeUp(0.05 * i)}>
              <div className="p-code">{pillar.code}</div>
              <div className="p-title">{pillar.title}</div>
              <div className="p-body">{pillar.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Operations Centers */}
      <section className="section section-light">
        <motion.div {...fadeUp(0)}>
          <div className="eyebrow">Infrastructure</div>
          <h2 className="section-title">How We <strong>Operate</strong></h2>
        </motion.div>
        <motion.div style={{ marginTop: '2.5rem' }} {...fadeUp(0.1)}>
          {OPERATIONS.map((op, i) => (
            <motion.div key={i} className="ops-item" {...fadeUp(0.05 * i)}>
              <div className="ops-label">{op.label}</div>
              <div className="ops-body">{op.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Credentials Section */}
      <section className="section section-light">
        <motion.div {...fadeUp(0)}>
          <div className="eyebrow">Verification</div>
          <h2 className="section-title">Certifications & <strong>Credentials</strong></h2>
        </motion.div>
        <div className="cred-grid" style={{ marginTop: '2.5rem' }}>
          {CREDENTIALS.map((cred, i) => (
            <motion.div key={i} className="cred-card" {...fadeUp(0.06 * i)}>
              <div style={{ marginBottom: 10, color: 'var(--gold)' }}>{cred.icon}</div>
              <div className="cred-code">{cred.code}</div>
              <div className="cred-title">{cred.title}</div>
              <div className="cred-body">{cred.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-dark">
        <motion.div {...fadeUp(0)}>
          <div className="eyebrow">Principles</div>
          <h2 className="section-title">Our <strong>Values</strong></h2>
        </motion.div>
        <div className="grid-2" style={{ marginTop: '2.5rem' }}>
          {VALUES.map((value, i) => (
            <motion.div key={i} className="value-card" {...fadeUp(0.08 * i)}>
              <div className="value-title">{value.title}</div>
              <div className="value-body">{value.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-light cta-section">
        <motion.div {...fadeUp(0)}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to Work With Us?</h2>
          <p style={{ fontSize: '15px', color: 'rgba(10,22,40,0.6)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Contact our team to discuss your precious metals requirements, verify our credentials, or arrange an inspection.
          </p>
          <a href="/contact" className="cta-button">Get Started</a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--navy)', color: '#fff', padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '1rem', color: 'var(--gold-lt)' }}>COMPANY</h3>
              <ul style={{ listStyle: 'none', fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
                <li><a href="/corporate-profile" style={{ color: 'inherit', textDecoration: 'none' }}>Corporate Profile</a></li>
                <li><a href="/compliance" style={{ color: 'inherit', textDecoration: 'none' }}>Compliance</a></li>
                <li><a href="/news" style={{ color: 'inherit', textDecoration: 'none' }}>News</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '1rem', color: 'var(--gold-lt)' }}>SERVICES</h3>
              <ul style={{ listStyle: 'none', fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</a></li>
                <li><a href="/process" style={{ color: 'inherit', textDecoration: 'none' }}>Process</a></li>
                <li><a href="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
                <li><a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '1rem', color: 'var(--gold-lt)' }}>CONTACT</h3>
              <ul style={{ listStyle: 'none', fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)' }}>
                <li>Kampala, Uganda</li>
                <li><a href="mailto:hello@diamondcapitalafrika.com" style={{ color: 'var(--gold-lt)', textDecoration: 'none' }}>hello@diamondcapitalafrika.com</a></li>
                <li style={{ marginTop: '1rem' }}>
                  <a href="/contact" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>Get in Touch →</a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
            <p>© 2024 Diamond Capital Africa. All rights reserved. | <a href="/compliance" style={{ color: 'inherit' }}>Compliance</a> | <a href="/" style={{ color: 'inherit' }}>Privacy</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
