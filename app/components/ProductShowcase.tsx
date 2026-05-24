'use client';

import Link from 'next/link';
import { useState } from 'react';

const FEATURED_PRODUCTS = [
  {
    id: 'gold-bars-99.5',
    name: '99.5% Gold Bars',
    purity: '99.5%+',
    form: 'Cast bars',
    weight: '100g – 1kg',
    description: 'Export-ready purity certified by independent labs. Perfect for investment and industrial use.',
    image: '/Gold-bars.webp',
    specs: ['ISO-certified', '24–72h assay', 'Insured shipping'],
    cta: 'Request Quote',
    href: '/products/details#gold-bars-99-5',
  },
  {
    id: 'refined-gold-99.99',
    name: '99.99% Refined Gold',
    purity: '99.99%',
    form: 'High-purity ingots',
    weight: '50g – 500g',
    description: 'Ultra-pure refined gold for jewelry, electronics, and premium collectors. Custom refining available.',
    image: '/goldsmelting.webp',
    specs: ['Custom alloys', 'Eco-friendly', 'Lab certified'],
    cta: 'Explore Details',
    href: '/products/details#refined-gold-99-99',
  },
  {
    id: 'artisanal-gold-raw',
    name: 'Artisanal Raw Gold',
    purity: '85–99%+',
    form: 'Dust, flakes, nuggets',
    weight: 'Custom amounts',
    description: 'Ethically sourced from verified artisanal miners in Uganda & Congo. Ready for refining or direct purchase.',
    image: '/ugandagold.jpg',
    specs: ['Origin certified', 'OECD compliant', 'Competitive pricing'],
    cta: 'Get Started',
    href: '/products/details#artisanal-gold-raw',
  },
  {
    id: 'gold-investment-bars',
    name: 'Investment Gold Bars',
    purity: '99.5%+',
    form: 'Standard ingots',
    weight: '250g – 1kg',
    description: 'Globally tradeable bars with full documentation, custody records, and insured delivery worldwide.',
    image: '/Gold-bars.webp',
    specs: ['Tradeable', 'Insured logistics', 'Full documentation'],
    cta: 'View Pricing',
    href: '/products/details#investment-gold-bars',
  },
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="6.5" r="6" stroke="#B58A0A" strokeOpacity="0.3" />
    <path d="M4 6.5L6 8.5L9 5" stroke="#B58A0A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProductShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      style={{
        background: 'linear-gradient(175deg, #f5f0e4 0%, #faf7f0 60%, #f2edd8 100%)',
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        position: 'relative',
        overflow: 'hidden',
      }}
      className="px-4 py-24 sm:py-36"
    >
      {/* Subtle warm shimmer lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '18%', left: '-5%', width: '110%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(181,138,10,0.18) 40%, rgba(181,138,10,0.18) 60%, transparent)',
        }} />
        <div style={{
          position: 'absolute', bottom: '22%', left: '-5%', width: '110%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(181,138,10,0.1) 40%, rgba(181,138,10,0.1) 60%, transparent)',
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="mb-20 text-center">
          <p style={{
            fontFamily: "'DM Mono', 'Courier New', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.3em',
            color: '#B58A0A',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            Verified · Certified · Export-Ready
          </p>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 300,
            color: '#1c160a',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '1.25rem',
          }}>
            Featured Gold Products
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ height: '1px', width: '56px', background: 'linear-gradient(90deg, transparent, rgba(181,138,10,0.5))' }} />
            <div style={{ width: '4px', height: '4px', background: '#B58A0A', transform: 'rotate(45deg)' }} />
            <div style={{ height: '1px', width: '56px', background: 'linear-gradient(90deg, rgba(181,138,10,0.5), transparent)' }} />
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#6b5d3e',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            Lab-verified, ethically sourced gold from Uganda &amp; Congo — refined to international standards.
          </p>
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5px',
          background: 'rgba(181,138,10,0.12)',
          border: '1px solid rgba(181,138,10,0.15)',
        }}>
          {FEATURED_PRODUCTS.map((product, i) => {
            const isHovered = hoveredId === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: isHovered ? '#fffef9' : '#faf7f0',
                  transition: 'background 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.6s ease',
                      filter: 'sepia(12%) contrast(1.05) brightness(0.97)',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 45%, rgba(250,247,240,0.55) 100%)',
                  }} />

                  {/* Index */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.56rem',
                    letterSpacing: '0.15em',
                    color: '#8a7040',
                    background: 'rgba(250,247,240,0.85)',
                    backdropFilter: 'blur(4px)',
                    padding: '2px 7px',
                  }}>
                    0{i + 1}
                  </div>

                  {/* Purity badge */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(250,247,240,0.92)',
                    border: '1px solid rgba(181,138,10,0.3)',
                    padding: '3px 9px',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.56rem',
                    letterSpacing: '0.15em',
                    color: '#B58A0A',
                    backdropFilter: 'blur(6px)',
                  }}>
                    {product.purity}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>

                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#1c160a',
                      lineHeight: 1.2,
                      marginBottom: '0.25rem',
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.56rem',
                      letterSpacing: '0.2em',
                      color: '#B58A0A',
                      textTransform: 'uppercase',
                    }}>
                      {product.form}
                    </p>
                  </div>

                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.82rem',
                    color: '#6b5d3e',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    flex: 1,
                  }}>
                    {product.description}
                  </p>

                  {/* Weight row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(181,138,10,0.12)',
                    borderBottom: '1px solid rgba(181,138,10,0.12)',
                    padding: '0.65rem 0',
                  }}>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.54rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(107,93,62,0.5)',
                      textTransform: 'uppercase',
                    }}>Weight</span>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.66rem',
                      color: '#B58A0A',
                      letterSpacing: '0.05em',
                    }}>{product.weight}</span>
                  </div>

                  {/* Specs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {product.specs.map((spec) => (
                      <div key={spec} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.78rem',
                        color: '#5a4e34',
                        fontWeight: 300,
                      }}>
                        <CheckIcon />
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.25rem',
                      padding: '0.7rem 1rem',
                      background: isHovered ? '#B58A0A' : 'transparent',
                      border: '1px solid',
                      borderColor: isHovered ? '#B58A0A' : 'rgba(181,138,10,0.25)',
                      color: isHovered ? '#fff' : '#8a7040',
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <span>{product.cta}</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '5rem',
          padding: '3.5rem',
          border: '1px solid rgba(181,138,10,0.2)',
          background: '#fff',
          position: 'relative',
          textAlign: 'center',
        }}>
          {/* Corner brackets */}
          {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h]) => (
            <div key={`${v}-${h}`} style={{
              position: 'absolute',
              [v as string]: -1, [h as string]: -1,
              width: '18px', height: '18px',
              borderTop: v === 'top' ? '1px solid rgba(181,138,10,0.6)' : 'none',
              borderBottom: v === 'bottom' ? '1px solid rgba(181,138,10,0.6)' : 'none',
              borderLeft: h === 'left' ? '1px solid rgba(181,138,10,0.6)' : 'none',
              borderRight: h === 'right' ? '1px solid rgba(181,138,10,0.6)' : 'none',
            }} />
          ))}

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
            color: '#B58A0A',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Bespoke Orders</p>

          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 300,
            color: '#1c160a',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}>
            Need Custom Specifications?
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#6b5d3e',
            maxWidth: '400px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            We provide custom refining, alloys, and quantities for any scale of requirement.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                padding: '0.8rem 2.25rem',
                background: '#B58A0A',
                color: '#fff',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Request Custom Quote
            </Link>
            <Link
              href="/products"
              style={{
                padding: '0.8rem 2.25rem',
                border: '1px solid rgba(181,138,10,0.3)',
                color: '#5a4e34',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                background: 'transparent',
              }}
            >
              View All Services
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:wght@300;400&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}