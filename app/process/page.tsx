'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Process() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const PROCESS_STEPS = [
    {
      id: '01',
      title: 'Requirements & Formal Quote',
      timeline: '24 hours',
      icon: '📋',
      desc: 'You provide quantity, purity, form, and delivery destination. We respond with itemized quote.',
      details: [
        'Submit specifications via contact form or WhatsApp',
        'Receive formal pricing breakdown within 24 hours',
        'Review terms: MOQ, payment schedule, delivery timelines',
        'No obligation to proceed',
      ],
      docs: ['Quote letter (PDF)', 'Payment terms sheet', 'Delivery schedule'],
    },
    {
      id: '02',
      title: 'Compliance & KYC Review',
      timeline: '3-5 business days',
      icon: '✓',
      desc: 'Regulatory alignment and buyer approval before production begins.',
      details: [
        'Submit KYC documentation (corporate identification, ownership, AML)',
        'Our compliance team reviews for OECD Guidance adherence',
        'Buyer approval issued in writing',
        'Wire instructions provided upon approval',
      ],
      docs: ['KYC approval letter', 'Wire transfer instructions', 'AML clearance'],
    },
    {
      id: '03',
      title: 'Assay & Gold Verification',
      timeline: '48-72 hours',
      icon: '⚗️',
      desc: 'Independent lab testing confirms purity, weight, and serial markings.',
      details: [
        'Gold cast or refined per specifications',
        'Third-party ISO-accredited lab assays entire lot',
        'Purity certificate issued with serial numbers',
        'Physical inspection & weight verification on record',
      ],
      docs: ['ISO assay certificate', 'Lab report (signed)', 'Serial number registry'],
    },
    {
      id: '04',
      title: 'Insured Dispatch & Delivery',
      timeline: '2-7 days (destination-dependent)',
      icon: '🚚',
      desc: 'Export documentation, full-value insurance, and real-time tracking to confirmed delivery.',
      details: [
        'Full customs & export documentation prepared',
        'Full-value shipment insurance activated',
        'Real-time GPS tracking provided',
        'Signature-required delivery confirmation',
      ],
      docs: ['Export certificate', 'Insurance policy', 'Tracking number', 'Custody handoff form'],
    },
  ];

  const GUARANTEES = [
    {
      title: 'Purity Guarantee',
      detail: 'If assay differs from specification, we adjust pricing or remake.',
    },
    {
      title: 'Delivery Guarantee',
      detail: 'Insured for 100% of declared value. Any loss is fully covered.',
    },
    {
      title: 'Compliance Guarantee',
      detail: 'All documentation auditable under OECD standards. Full provenance records.',
    },
    {
      title: 'Timeline SLA',
      detail: 'Average transaction 8–12 business days. Expedited options available.',
    },
  ];

  const FAQS = [
    {
      q: 'What documents do I need to submit?',
      a: 'Corporate KYC (articles of incorporation, beneficial ownership, AML declaration), authorized signatory credentials, and import licenses if required by destination country. We provide a checklist with your quote.',
    },
    {
      q: 'Can you ship to a PO Box or generic address?',
      a: 'No. We require a registered, insurable address with staff present during delivery. This reduces fraud risk and ensures proper chain of custody.',
    },
    {
      q: 'What if the assay results differ from my specification?',
      a: 'Any variance is handled per contract terms: purity shortfall = price adjustment downward, or we remix at no charge. You approve remediation before shipment.',
    },
    {
      q: 'Do you hold escrow or does payment go directly to you?',
      a: 'Wire payment received before we begin assay. We then insure shipment at your designated address. Payment is non-refundable but backed by our delivery guarantee.',
    },
    {
      q: 'Can I request expedited assay or shipping?',
      a: 'Yes. Rush assay (24-hour turnaround) and express air cargo available at premium. Contact us for expedited quote.',
    },
    {
      q: 'What happens if customs holds my shipment?',
      a: 'We provide all export documentation and liaison with customs authorities. Insurance covers delays beyond 30 days. You retain all ownership during transit.',
    },
  ];

  return (
    <main style={{ background: '#F7F6F2', color: '#1c160a' }}>
      <Header cta={{ label: 'Request Formal Quote', href: '/request-quote' }} />
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-6xl px-4 pt-24">
        <Breadcrumbs />
      </div>
      {/* HERO */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
            color: '#B58A0A',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Our Process
          </p>
          <h1 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            From inquiry to delivery in 4 transparent steps
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            color: '#6b5d3e',
            maxWidth: '580px',
            lineHeight: 1.75,
          }}>
            A structured, compliance-first workflow that reduces risk and ensures total transparency at every stage. Average transaction time: 8–12 business days.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/request-quote" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#B58A0A',
            color: '#fff',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7820')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#B58A0A')}
          >
            Request a Quote →
          </a>
          <a href="/compliance" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: '#B58A0A',
            border: '1px solid #B58A0A',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#B58A0A';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#B58A0A';
          }}
          >
            Download Compliance Docs
          </a>
        </div>

        <div style={{
          marginTop: '3rem',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(181,138,10,0.15)',
        }}>
          <img
            src="/man-pouring-melted-metal-workshop-large.jpg"
            alt="Gold processing operations"
            style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section style={{
        background: 'linear-gradient(180deg, #faf7f0 0%, #f5f0e4 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        borderTop: '1px solid rgba(181,138,10,0.15)',
        borderBottom: '1px solid rgba(181,138,10,0.15)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.3em',
              color: '#B58A0A',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              How it works
            </p>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}>
              Secure, compliant transactions in four steps
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#fff',
                  padding: '2rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(181,138,10,0.15)',
                  cursor: 'pointer',
                }}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                {/* Header */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '1.5rem',
                      color: '#B58A0A',
                      fontWeight: 600,
                    }}>
                      {step.id}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: '0.1em',
                      background: 'rgba(181,138,10,0.08)',
                      color: '#B58A0A',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}>
                      {step.timeline}
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#1c160a',
                  }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b5d3e',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}>
                  {step.desc}
                </p>

                {/* Expandable Details */}
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      borderTop: '1px solid rgba(181,138,10,0.1)',
                      paddingTop: '1rem',
                      marginTop: '1rem',
                    }}
                  >
                    <p style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#B58A0A',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.75rem',
                    }}>
                      Details
                    </p>
                    <ul style={{ marginBottom: '1rem' }}>
                      {step.details.map((detail, i) => (
                        <li key={i} style={{
                          fontSize: '0.85rem',
                          color: '#5a4e34',
                          marginBottom: '0.5rem',
                          paddingLeft: '1.25rem',
                          position: 'relative',
                        }}>
                          <span style={{ position: 'absolute', left: 0 }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <p style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#B58A0A',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.75rem',
                    }}>
                      You Receive
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}>
                      {step.docs.map((doc, i) => (
                        <div key={i} style={{
                          fontSize: '0.85rem',
                          color: '#5a4e34',
                          padding: '0.5rem 0.75rem',
                          background: 'rgba(181,138,10,0.04)',
                          borderRadius: '3px',
                        }}>
                          ✓ {doc}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  color: '#B58A0A',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}>
                  {expandedFaq === idx ? 'Show less ↑' : 'Show details ↓'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.3em',
              color: '#B58A0A',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Risk Management
            </p>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}>
              Your transaction is backed by guarantees
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}>
            {GUARANTEES.map((guarantee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: '2rem',
                  background: '#faf7f0',
                  border: '1px solid rgba(181,138,10,0.15)',
                  borderRadius: '4px',
                }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                }}>
                  {idx === 0 && '⚗️'}
                  {idx === 1 && '🛡️'}
                  {idx === 2 && '📋'}
                  {idx === 3 && '⏱️'}
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1c160a',
                  marginBottom: '0.5rem',
                }}>
                  {guarantee.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b5d3e',
                  lineHeight: 1.6,
                }}>
                  {guarantee.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS OPTIONS */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        background: 'linear-gradient(180deg, #f5f0e4 0%, #faf7f0 100%)',
        borderTop: '1px solid rgba(181,138,10,0.15)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            marginBottom: '2rem',
          }}>
            Delivery & Logistics Options
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { title: 'FOB Kampala', detail: 'You arrange pickup from our Kampala vault. Lowest cost option.' },
              { title: 'CIF Dubai', detail: 'We handle export, insurance & air cargo to Dubai distribution hub.' },
              { title: 'CIF International', detail: 'Full delivery to your specified address anywhere globally.' },
              { title: 'Escorted Delivery', detail: 'Armed security escort for high-value or sensitive shipments.' },
              { title: 'Express Air Cargo', detail: '24–48 hour assay & expedited shipping available (premium).' },
              { title: 'Storage & Hold', detail: 'Hold gold in insured vault pending buyer instruction.' },
            ].map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                style={{
                  padding: '1.75rem',
                  background: '#fff',
                  border: '1px solid rgba(181,138,10,0.15)',
                  borderRadius: '4px',
                }}
              >
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1c160a',
                  marginBottom: '0.5rem',
                }}>
                  {opt.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b5d3e',
                  lineHeight: 1.6,
                }}>
                  {opt.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.3em',
              color: '#B58A0A',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Common Questions
            </p>
            <h2 style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}>
              Frequently asked about our process
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setExpandedFaq(expandedFaq === 100 + idx ? null : 100 + idx)}
                style={{
                  border: '1px solid rgba(181,138,10,0.15)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  padding: '1.5rem',
                  background: expandedFaq === 100 + idx ? '#faf7f0' : '#fff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1c160a',
                  }}>
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      color: '#B58A0A',
                      flexShrink: 0,
                      transform: expandedFaq === 100 + idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      fontSize: '1.5rem',
                      display: 'inline-block',
                    }}
                  >
                    ↓
                  </span>
                </div>

                {expandedFaq === 100 + idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      borderTop: '1px solid rgba(181,138,10,0.1)',
                    }}
                  >
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#5a4e34',
                      lineHeight: 1.7,
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        background: '#1c160a',
        color: '#fff',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Ready to begin?
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
            marginBottom: '2rem',
            maxWidth: '540px',
            margin: '0 auto 2rem',
          }}>
            Submit your requirements and we'll provide a compliance-reviewed quote within 24 hours. No obligation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/request-quote" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#B58A0A',
              color: '#fff',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7820')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#B58A0A')}
            >
              Request a Formal Quote
            </a>
            <a href="/compliance" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              View Compliance Pack
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
