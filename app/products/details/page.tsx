'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter';
import BulkPricingCalculator from '@/app/components/BulkPricingCalculator';
import { CONTACT } from '@/lib/constants';

const PRODUCT_DETAILS = [
  {
    id: 'gold-bars-99-5',
    name: '99.5% Gold Bars',
    purity: '99.5%+',
    form: 'Cast bars',
    weight: '100g – 1kg',
    shortDescription: 'Export-ready purity certified by independent labs.',
    fullDescription: 'Our 99.5% gold bars are the industry standard for institutional buyers and investors. Each bar is cast from refined gold, weighed to precision, and certified by independent ISO-accredited laboratories. Perfect for investment portfolios, industrial use, or direct resale in global markets.',
    image: '/Gold-bars.webp',
    specs: {
      purity: '99.5%–99.9% (certified)',
      weight: '100g, 250g, 500g, 1kg (custom)',
      form: 'Cast bars with serial markings',
      assay: '24–72 hour turnaround',
      packaging: 'Tamper-evident, insured logistics',
    },
    features: [
      { title: 'ISO-Certified Labs', body: 'Third-party assay verification with stamped certificates.' },
      { title: 'Precision Casting', body: 'Serial markings, weight verification, tamper-evident packaging.' },
      { title: 'Global Standard', body: 'Meets LBMA good delivery standards for institutional trading.' },
      { title: 'Insured Shipping', body: 'Full-value coverage from dispatch to confirmed delivery.' },
    ],
    faqs: [
      { q: 'How quickly can I receive bars?', a: 'Assay testing takes 24–72 hours. Shipping depends on destination but typically 48–96 hours from dispatch.' },
      { q: 'Can I get custom weights?', a: 'Yes. We offer 100g through 1kg bars. Bespoke weights available on request.' },
      { q: 'What documentation is included?', a: 'Origin certificate, ISO assay report, custody records, and full export documentation.' },
      { q: 'Is insurance included?', a: 'Yes. Full-value shipment insurance is standard. Real-time tracking included.' },
    ],
    whatsappText: `Hello, I'm interested in 99.5% Gold Bars. Can you send me a quote for ${encodeURIComponent('1 kg (or custom weight)?')}`,
  },
  {
    id: 'refined-gold-99-99',
    name: '99.99% Refined Gold',
    purity: '99.99%',
    form: 'High-purity ingots',
    weight: '50g – 500g',
    shortDescription: 'Ultra-pure refined gold for jewelry, electronics, and collectors.',
    fullDescription: 'Our 99.99% refined gold is the highest purity standard for premium applications. Refined using eco-friendly processes and custom alloy services, this product serves jewelry manufacturers, electronics makers, and collectors seeking maximum purity with full traceability.',
    image: '/goldsmelting.webp',
    specs: {
      purity: '99.99% (five-nines)',
      weight: '50g, 100g, 250g, 500g (custom)',
      form: 'Ingots with assay seals',
      refining: 'Eco-friendly smelting, OECD-aligned',
      customization: 'Alloy blending available',
    },
    features: [
      { title: 'Five-Nines Purity', body: '99.99% gold meets highest jewelry and electronics standards.' },
      { title: 'Eco-Friendly Refining', body: 'Sustainable smelting processes with minimal environmental impact.' },
      { title: 'Custom Alloys', body: 'Mix with silver, copper, palladium for specific applications.' },
      { title: 'Lab Certified', body: 'Each batch tested and certified by independent assay facilities.' },
    ],
    faqs: [
      { q: 'What alloys are available?', a: 'We can blend with silver, copper, palladium, platinum. Custom compositions on request.' },
      { q: 'How long does custom refining take?', a: 'Custom alloys typically 5–10 business days depending on volume and complexity.' },
      { q: 'Is this suitable for jewelry?', a: 'Absolutely. 99.99% is preferred by premium jewelry manufacturers worldwide.' },
      { q: 'Do you offer batch pricing?', a: 'Yes. Volume discounts available from 500g+. Contact us for bulk quotes.' },
    ],
    whatsappText: `Hello, I'm interested in 99.99% Refined Gold. Can you send me a quote for ${encodeURIComponent('custom specifications and pricing?')}`,
  },
  {
    id: 'artisanal-gold-raw',
    name: 'Artisanal Raw Gold',
    purity: '85–99%+',
    form: 'Dust, flakes, nuggets',
    weight: 'Custom amounts',
    shortDescription: 'Ethically sourced from verified artisanal miners in Uganda & Congo.',
    fullDescription: 'We partner directly with licensed artisanal miners in Uganda and Congo to source raw gold at competitive prices. Every lot is origin-certified, OECD-compliant, and ready for refining or direct resale. No intermediaries—direct from source to you.',
    image: '/ugandagold.jpg',
    specs: {
      purity: '85–99% (varies by lot)',
      form: 'Raw dust, flakes, nuggets, small bars',
      sourcing: 'Direct from verified artisanal miners',
      compliance: 'OECD Guidance 5th Edition aligned',
      documentation: 'Origin certificates, KYC ready',
    },
    features: [
      { title: 'Direct Sourcing', body: 'No middlemen. We work directly with licensed artisanal mining operations.' },
      { title: 'OECD Compliant', body: 'Full adherence to responsible mineral supply chain standards.' },
      { title: 'Competitive Pricing', body: 'Direct relationships mean lower costs passed to you.' },
      { title: 'Origin Certified', body: 'Certificates of origin from verified mining partners included.' },
    ],
    faqs: [
      { q: 'Why is purity variable?', a: 'Raw artisanal gold varies by mining technique and location. Each lot is assayed before sale.' },
      { q: 'Is this OECD-compliant?', a: 'Yes. All our artisanal partners are licensed, vetted, and audited against OECD standards.' },
      { q: 'Can I refine this myself?', a: 'Yes. Raw gold can be refined in-house or we can arrange certified refining services.' },
      { q: 'What quantities are available?', a: 'Flexible. From 100g samples to multi-kilogram lots. Custom amounts on request.' },
    ],
    whatsappText: `Hello, I'm interested in Artisanal Raw Gold. Can you send me information about ${encodeURIComponent('available lots and pricing?')}`,
  },
  {
    id: 'investment-gold-bars',
    name: 'Investment Gold Bars',
    purity: '99.5%+',
    form: 'Standard ingots',
    weight: '250g – 1kg',
    shortDescription: 'Globally tradeable bars with full documentation and insured delivery.',
    fullDescription: 'Investment-grade gold bars designed for institutional and individual investors. Each bar comes with complete custody records, origin certificates, assay reports, and export documentation. Tradeable on global markets with real-time tracking and insured logistics.',
    image: '/Gold-bars.webp',
    specs: {
      purity: '99.5%–99.9%',
      weight: '250g, 500g, 1kg (standard)',
      tradability: 'LBMA-aligned good delivery',
      documentation: 'Full paper trail included',
      insurance: 'Full-value coverage standard',
    },
    features: [
      { title: 'Investment Grade', body: 'Meets LBMA standards for institutional and retail investment.' },
      { title: 'Complete Documentation', body: 'Origin certificate, assay report, custody records, export docs.' },
      { title: 'Global Tradability', body: 'Recognized on international bullion markets.' },
      { title: 'Insured Logistics', body: 'Full-value shipment insurance with real-time tracking.' },
    ],
    faqs: [
      { q: 'Can I resell these bars?', a: 'Yes. Investment bars are tradeable on global bullion markets at spot or premium pricing.' },
      { q: 'What is the storage cost?', a: 'We offer short-term secure vaulting. Rates depend on volume and duration.' },
      { q: 'Do you offer financing?', a: 'We can discuss payment terms for large institutional orders. Contact us.' },
      { q: 'How is pricing calculated?', a: 'Spot gold price + refining premium + documentation costs. Transparent breakdown provided.' },
    ],
    whatsappText: `Hello, I'm interested in Investment Gold Bars. Can you send me current pricing and ${encodeURIComponent('availability?')}`,
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(180,140,40,0.15)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: '0.95rem',
          color: '#1c160a',
          fontWeight: 400,
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          border: '1px solid rgba(180,140,40,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#B58A0A',
          fontSize: '1rem',
          lineHeight: 1,
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      {open && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.88rem',
          color: '#5a4e34',
          lineHeight: 1.75,
          paddingBottom: '1.1rem',
          fontWeight: 300,
        }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function ProductDetails() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && PRODUCT_DETAILS.find(p => p.id === hash)) {
      setActiveProduct(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: '#faf7f0', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Fonts served via next/font in root layout. Removed external @import for performance and CLS. */}

      <Header />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #f5f0e4 0%, #faf7f0 100%)',
        borderBottom: '1px solid rgba(180,140,40,0.15)',
        padding: 'clamp(3rem, 5vw, 5rem) 1rem',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Ornamental line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '32px', background: 'linear-gradient(90deg, transparent, #B58A0A)' }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 'clamp(0.55rem, 2vw, 0.58rem)', letterSpacing: '0.3em', color: '#B58A0A', textTransform: 'uppercase' }}>
              Our Products
            </span>
            <div style={{ height: '1px', width: '32px', background: 'linear-gradient(90deg, #B58A0A, transparent)' }} />
          </div>

          <h1 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#1c160a',
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}>
            Featured Gold Products
          </h1>
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            color: '#6b5d3e',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            Lab-verified, export-ready gold from ethical sources. Choose your purity, weight, and specification.
          </p>
        </div>
      </section>

      {/* Product Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,247,240,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(180,140,40,0.15)',
        overflowX: 'auto',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1rem', display: 'flex', gap: '0' }}>
          {PRODUCT_DETAILS.map((product, i) => (
            <a
              key={product.id}
              href={`#${product.id}`}
              onClick={() => setActiveProduct(product.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.75rem, 2.5vw, 1.25rem)',
                textDecoration: 'none',
                fontFamily: "'DM Mono', monospace",
                fontSize: 'clamp(0.58rem, 2vw, 0.62rem)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: activeProduct === product.id ? '#B58A0A' : '#8a7550',
                borderBottom: activeProduct === product.id ? '2px solid #B58A0A' : '2px solid transparent',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                fontWeight: activeProduct === product.id ? 500 : 400,
              }}
            >
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.55rem',
                color: activeProduct === product.id ? '#B58A0A' : 'rgba(138,117,80,0.4)',
              }}>0{i + 1}</span>
              {product.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Product Details */}
      <section style={{ padding: 'clamp(2rem, 5vw, 5rem) 1rem', maxWidth: '960px', margin: '0 auto' }}>
        {PRODUCT_DETAILS.map((product, productIdx) => (
          <div
            key={product.id}
            id={product.id}
            style={{
              marginBottom: productIdx < PRODUCT_DETAILS.length - 1 ? 'clamp(3rem, 7vw, 7rem)' : '0',
              scrollMarginTop: '80px',
            }}
          >
            {/* Product Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 'clamp(2rem, 5vw, 3.5rem)', alignItems: 'start' }}
              className="product-grid sm:grid-cols-2"
            >
              {/* Left: Text */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 'clamp(0.5rem, 1.5vw, 0.6rem)',
                    letterSpacing: '0.25em',
                    color: '#B58A0A',
                    textTransform: 'uppercase',
                    background: 'rgba(181,138,10,0.08)',
                    border: '1px solid rgba(181,138,10,0.2)',
                    padding: '4px 10px',
                  }}>
                    Purity: {product.purity}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
                  fontWeight: 400,
                  color: '#1c160a',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em',
                }}>
                  {product.name}
                </h2>

                <p style={{
                  fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                  color: '#5a4e34',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}>
                  {product.fullDescription}
                </p>

                {/* Quick stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(180,140,40,0.12)' }}>
                  {[
                    { label: 'Form', value: product.form },
                    { label: 'Weight Range', value: product.weight },
                  ].map(({ label, value }) => (
                    <div key={label} style={{
                      background: '#faf7f0',
                      padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.75rem, 2vw, 1.25rem)',
                    }}>
                      <p style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 'clamp(0.48rem, 1.5vw, 0.55rem)',
                        letterSpacing: '0.2em',
                        color: '#B58A0A',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                      }}>{label}</p>
                      <p style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        color: '#1c160a',
                        fontWeight: 400,
                      }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div style={{ position: 'relative', display: 'none' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: 'clamp(250px, 50vw, 320px)',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'sepia(8%) contrast(1.05)',
                  }}
                />
                {/* Gold border accent */}
                <div style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '100%',
                  height: '100%',
                  border: '1px solid rgba(181,138,10,0.25)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }} />
              </div>
            </div>

            {/* Specifications */}
            <div style={{
              marginBottom: 'clamp(1.5rem, 5vw, 3rem)',
              border: '1px solid rgba(180,140,40,0.15)',
              background: '#fff',
            }}>
              <div style={{
                padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 2vw, 1.75rem)',
                borderBottom: '1px solid rgba(180,140,40,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{ width: '2px', height: '16px', background: '#B58A0A' }} />
                <h3 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                  fontWeight: 700,
                  color: '#1c160a',
                }}>Specifications</h3>
              </div>
              <div style={{ padding: '0 clamp(1rem, 2vw, 1.75rem)' }}>
                {Object.entries(product.specs).map(([key, value], i, arr) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: 'clamp(0.6rem, 1.5vw, 0.9rem) 0',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(180,140,40,0.08)' : 'none',
                      gap: '1rem',
                    }}
                  >
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8a7550',
                    }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.88rem)',
                      color: '#1c160a',
                      textAlign: 'right',
                      fontWeight: 400,
                    }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={{ marginBottom: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
                <div style={{ width: '2px', height: '16px', background: '#B58A0A' }} />
                <h3 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                  fontWeight: 700,
                  color: '#1c160a',
                }}>Key Features</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'rgba(180,140,40,0.12)' }}>
                {product.features.map((feature, i) => (
                  <div key={i} style={{
                    background: '#faf7f0',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '1px',
                      background: '#B58A0A',
                      marginBottom: '0.85rem',
                    }} />
                    <h4 style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                      fontWeight: 700,
                      color: '#1c160a',
                      marginBottom: '0.5rem',
                    }}>{feature.title}</h4>
                    <p style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.82rem)',
                      color: '#5a4e34',
                      lineHeight: 1.65,
                      fontWeight: 300,
                    }}>{feature.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div style={{ marginBottom: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
                <div style={{ width: '2px', height: '16px', background: '#B58A0A' }} />
                <h3 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                  fontWeight: 700,
                  color: '#1c160a',
                }}>Frequently Asked Questions</h3>
              </div>
              <div style={{
                border: '1px solid rgba(180,140,40,0.15)',
                background: '#fff',
                padding: '0 clamp(1rem, 2vw, 1.75rem)',
              }}>
                {product.faqs.map((faq, i) => (
                  <AccordionItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1px',
              background: 'rgba(180,140,40,0.15)',
              border: '1px solid rgba(180,140,40,0.2)',
            }}
              className="cta-grid sm:grid-cols-2"
            >
              <div style={{
                background: '#B58A0A',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}>
                <div>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 'clamp(0.48rem, 1.5vw, 0.58rem)',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                  }}>Fast response</p>
                  <h4 style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1.3,
                  }}>Get a Quote on WhatsApp</h4>
                  <p style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.82rem)',
                    color: 'rgba(255,255,255,0.7)',
                    marginTop: '0.5rem',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    Direct line to our trading desk. Typical response under 2 hours.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${product.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#fff',
                    color: '#B58A0A',
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 'clamp(0.52rem, 1.5vw, 0.62rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 500,
                    alignSelf: 'flex-start',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Open WhatsApp →
                </a>
              </div>

              <div style={{
                background: '#faf7f0',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}>
                <div>
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 'clamp(0.48rem, 1.5vw, 0.58rem)',
                    letterSpacing: '0.25em',
                    color: '#B58A0A',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                  }}>Formal enquiry</p>
                  <h4 style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 400,
                    color: '#1c160a',
                    lineHeight: 1.3,
                  }}>Send a Detailed Request</h4>
                  <p style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.82rem)',
                    color: '#5a4e34',
                    marginTop: '0.5rem',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    For large orders, custom specs, or institutional enquiries.
                  </p>
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '1px solid rgba(180,140,40,0.3)',
                    color: '#1c160a',
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 'clamp(0.52rem, 1.5vw, 0.62rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 500,
                    alignSelf: 'flex-start',
                    transition: 'background 0.2s',
                    background: 'transparent',
                  }}
                >
                  Contact Us →
                </Link>
              </div>
            </div>

            {/* Divider */}
            {productIdx < PRODUCT_DETAILS.length - 1 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: 'clamp(3rem, 7vw, 7rem)',
                opacity: 0.35,
              }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #B58A0A)' }} />
                <div style={{ width: '5px', height: '5px', background: '#B58A0A', transform: 'rotate(45deg)' }} />
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #B58A0A, transparent)' }} />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ── BULK PRICING CALCULATOR ── */}
      <BulkPricingCalculator />

      {/* Bottom CTA */}
      <section style={{
        borderTop: '1px solid rgba(180,140,40,0.15)',
        background: 'linear-gradient(180deg, #f0ead8 0%, #faf7f0 100%)',
        padding: '5rem 1rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
            color: '#B58A0A',
            textTransform: 'uppercase',
          }}>Bespoke Orders</span>
          <h2 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 400,
            color: '#1c160a',
            marginTop: '1rem',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Custom Specifications?
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: '#5a4e34',
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: '2.5rem',
          }}>
            We provide bespoke refining, alloys, and quantities. Contact our team for special requirements.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to discuss custom gold specifications.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#B58A0A',
                color: '#fff',
                padding: '0.85rem 2rem',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              style={{
                border: '1px solid rgba(180,140,40,0.35)',
                color: '#1c160a',
                padding: '0.85rem 2rem',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 400,
                background: 'transparent',
              }}
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        @media (max-width: 640px) {
          .product-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}