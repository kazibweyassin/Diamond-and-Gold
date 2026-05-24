'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    Trustpilot?: {
      loadDynamicScripts: () => void;
    };
  }
}

export function TrustpilotWidget() {
  useEffect(() => {
    // Load Trustpilot widget
    if (window.Trustpilot) {
      window.Trustpilot.loadDynamicScripts();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://cdn.trustpilot.net/api/js/v1/reviews';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section style={{ padding: '6rem 2rem', background: '#fff', borderTop: '1px solid rgba(10,22,40,0.08)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 1280, margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8922A',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <span style={{ display: 'block', width: 18, height: 1, background: '#B8922A' }} />
            Independent reviews
            <span style={{ display: 'block', width: 18, height: 1, background: '#B8922A' }} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 300,
              color: '#0A1628',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            What our clients <strong style={{ fontWeight: 600 }}>say about us</strong>
          </h2>

          <p
            style={{
              fontSize: 15,
              color: 'rgba(10,22,40,0.6)',
              lineHeight: 1.75,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            Trustpilot verified reviews from institutional buyers and trading partners who've worked with Diamond Capital Africa.
          </p>
        </div>

        {/* Trustpilot Widget Container */}
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-templateId="56278e9abfbbba0ab44d1d5f"
          data-businessunitId="678f6d8d9e4c8c0012a4c5d6"
          data-schemaType="Organization"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <a
            href="https://www.trustpilot.com/review/diamondcapitalafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: '#B8922A',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            View our Trustpilot profile →
          </a>
        </div>

        {/* Reviews Highlight */}
        <div
          style={{
            background: 'rgba(184,146,42,0.05)',
            border: '1px solid rgba(184,146,42,0.15)',
            borderRadius: 8,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: 'rgba(10,22,40,0.65)',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            <strong>Trustpilot provides independently verified reviews</strong> from our buyers and partners. Every review is authenticated, ensuring complete transparency about our service quality, reliability, and customer satisfaction. This independent verification builds trust with sophisticated institutional buyers who require proof of track record.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default TrustpilotWidget;
