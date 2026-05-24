'use client';
import { motion } from 'framer-motion';

export function InvestorPortalSection() {
  return (
    <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #0A1628 0%, #1a2d42 100%)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 1280, margin: '0 auto' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left: Description */}
          <div style={{ color: '#fff' }}>
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
                gap: 10,
              }}
            >
              <span style={{ display: 'block', width: 18, height: 1, background: '#B8922A' }} />
              Investor opportunity
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 300,
                color: '#fff',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Access our institutional{' '}
              <strong style={{ fontWeight: 600 }}>investment platform</strong>
            </h2>

            <p
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
                fontWeight: 300,
              }}
            >
              Diamond Capital Africa's investment portal provides qualified institutional investors with direct exposure to African gold assets and supply chain participation. Access real-time market data, portfolio management tools, and secure transaction infrastructure.
            </p>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: '📊', title: 'Market Data Dashboard', desc: 'Real-time gold pricing, supply metrics, and market analysis' },
                { icon: '🔒', title: 'Secure Trading Platform', desc: 'Institutional-grade infrastructure with full compliance documentation' },
                { icon: '💼', title: 'Portfolio Management', desc: 'Track positions, manage allocations, and execute settlements' },
                { icon: '📈', title: 'Performance Analytics', desc: 'Detailed reporting on returns, valuations, and risk metrics' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{feature.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                      {feature.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://invest.diamondcapitalafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 28px',
                  background: '#B8922A',
                  color: '#0A1628',
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 4,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d4a932';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#B8922A';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Access Portal →
              </a>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 28px',
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Request Access
              </a>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'grid',
              gap: '1.5rem',
            }}
          >
            {[
              {
                title: 'Real-Time Pricing',
                desc: 'Access live spot rates and historical data for informed decision-making',
                highlight: true,
              },
              {
                title: 'Compliance Ready',
                desc: 'All transactions include full KYC/AML screening and OECD documentation',
              },
              {
                title: 'Direct Settlement',
                desc: 'Settle directly to your account or preferred logistics partner',
              },
              {
                title: 'Dedicated Support',
                desc: 'Account managers available for your region during business hours',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: card.highlight ? 'linear-gradient(135deg, rgba(184,146,42,0.2) 0%, rgba(184,146,42,0.05) 100%)' : 'rgba(255,255,255,0.05)',
                  border: card.highlight ? '1px solid rgba(184,146,42,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: '1.5rem',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '4rem',
            background: 'rgba(184,146,42,0.1)',
            border: '1px solid rgba(184,146,42,0.3)',
            borderRadius: 8,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
            The investment portal is available to qualified institutional investors only.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
            Contact our investor relations team at{' '}
            <a
              href="mailto:investors@diamondcapitalafrica.com"
              style={{ color: '#B8922A', textDecoration: 'none' }}
            >
              investors@diamondcapitalafrica.com
            </a>{' '}
            for access and qualification information.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default InvestorPortalSection;
