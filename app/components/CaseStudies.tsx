import { motion } from 'framer-motion';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'European Refinery — Quarterly Procurement',
    description: 'A major EU-based precious metals refinery established recurring quarterly orders for gold bullion.',
    details: [
      'Order volume: 50 kg per quarter',
      'Purity: 99.95%',
      'Duration: 3+ years (since 2021)',
      'Delivery: Direct to refinery, insured',
    ],
    outcome: 'Consistent supply relationship. Zero delivery issues. Full compliance documentation each quarter.',
  },
  {
    id: 2,
    title: 'Asian Investment Fund — Bulk Purchase',
    description: 'A Singapore-based commodity investment fund purchased a one-time strategic allocation.',
    details: [
      'Order volume: 250 kg',
      'Purity: 99.9%',
      'Delivery: Hong Kong refinery custody',
      'Timeline: Quote to delivery in 6 weeks',
    ],
    outcome: 'Successful settlement. Fund renewed interest for additional bulk orders.',
  },
  {
    id: 3,
    title: 'North American Jewelry Supplier — Ongoing Supply',
    description: 'A US-based jewelry manufacturer sources raw gold for manufacturing operations.',
    details: [
      'Monthly order volume: 20–40 kg',
      'Purity: 99.5% to 99.95%',
      'Duration: 18+ months',
      'Logistics: Direct to US facility',
    ],
    outcome: 'Reliable supplier with predictable pricing. Reduced procurement lead time by 40%.',
  },
];

export function CaseStudies() {
  return (
    <section style={{ padding: '6rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8922A' }}>
            <div style={{ width: 18, height: 1, background: '#B8922A' }} />
            Client case studies
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, letterSpacing: '-0.025em', color: '#0A1628', lineHeight: 1.18 }}>
            Verified client relationships <strong style={{ fontWeight: 600 }}>and transaction scales</strong>
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.7)', marginTop: '0.75rem', fontWeight: 300 }}>
            Anonymized for confidentiality. References and detailed case studies available to institutional buyers on request.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#F7F6F2',
                border: '1px solid rgba(10,22,40,0.08)',
                borderRadius: 4,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#0A1628', marginBottom: 6 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.6)', lineHeight: 1.6 }}>
                  {study.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(10,22,40,0.08)', paddingTop: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {study.details.map((detail, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: 12,
                        color: 'rgba(10,22,40,0.7)',
                        marginBottom: idx < study.details.length - 1 ? 8 : 0,
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ color: '#B8922A', fontWeight: 600, flexShrink: 0 }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(184,146,42,0.08)',
                  border: '1px solid rgba(184,146,42,0.15)',
                  borderRadius: 4,
                  padding: '1rem',
                }}
              >
                <p style={{ fontSize: 12, color: 'rgba(10,22,40,0.65)', lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: '#B8922A' }}>Outcome:</strong> {study.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: '2rem',
            background: 'rgba(184,146,42,0.05)',
            border: '1px solid rgba(184,146,42,0.18)',
            borderRadius: 4,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(10,22,40,0.65)', lineHeight: 1.7, margin: 0 }}>
            These case studies are anonymized for client confidentiality. Detailed references and transaction documentation are available to qualified institutional buyers. Contact your account manager to request verifiable references.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
