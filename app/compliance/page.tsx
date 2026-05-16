'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

const COMPLIANCE_STANDARDS = [
  {
    id: 'oecd',
    title: 'OECD Due Diligence Guidance',
    timeline: 'Mandatory Review',
    description: 'Alignment with OECD responsible sourcing guidelines for minerals from conflict-affected regions.',
    details: [
      'Supply chain mapping and risk assessment',
      'Conflict mineral screening and sourcing verification',
      'Regulatory compliance documentation package',
      'Annual audit trail and transaction records',
    ],
    documents: ['OECD Checklist', 'Conflict Mineral Form', 'Supply Chain Map', 'Audit Trail'],
  },
  {
    id: 'kyc',
    title: 'Know-Your-Customer (KYC) Framework',
    timeline: 'Before Transaction',
    description: 'Comprehensive buyer verification to comply with AML/KYC requirements.',
    details: [
      'Company registration verification and beneficial ownership',
      'Compliance officer contact and bank details',
      'Business purpose and gold use declaration',
      'Ongoing relationship monitoring',
    ],
    documents: ['Company Registration', 'Beneficial Ownership', 'Compliance Officer Details', 'Banking Info'],
  },
  {
    id: 'assay',
    title: 'Independent Lab Assay Certification',
    timeline: '48-72 Hours',
    description: 'Third-party lab verification of gold purity and weight for each shipment.',
    details: [
      'XRF (X-ray fluorescence) or fire assay testing',
      'ISO-certified lab reports with serial numbers',
      'Purity guarantee with adjustment clause if variance exceeds tolerance',
      'Digital certificate provided to buyer',
    ],
    documents: ['Lab Assay Certificate', 'Test Method Report', 'Purity Guarantee', 'Serial Numbers'],
  },
  {
    id: 'custody',
    title: 'Custody Chain & Logistics',
    timeline: 'Full Transaction',
    description: 'Documented handling and secure transport from collection through delivery.',
    details: [
      'Documented handoff at each custody transfer point',
      'GPS tracking for international shipments',
      'Full-value insurance coverage throughout transport',
      'Signature-required delivery with photos/video proof',
    ],
    documents: ['Chain of Custody', 'Tracking Number', 'Insurance Policy', 'Delivery Proof'],
  },
  {
    id: 'export',
    title: 'Export & Customs Compliance',
    timeline: 'Pre-Shipment',
    description: 'All necessary documentation for legal export and destination customs clearance.',
    details: [
      'Export license and mineral classification codes',
      'Harmonized tariff codes and commodity description',
      'Commercial invoice and packing list',
      'Destination country import permit (if required)',
    ],
    documents: ['Export License', 'Commercial Invoice', 'Packing List', 'Import Permit'],
  },
  {
    id: 'escrow',
    title: 'Escrow & Payment Security',
    timeline: 'Payment Settlement',
    description: 'Secure payment and gold custody pending final inspection and acceptance.',
    details: [
      'Third-party escrow agent for gold custody',
      'Buyer inspection and assay verification rights',
      'Payment release upon final approval',
      'Dispute resolution framework if variance detected',
    ],
    documents: ['Escrow Agreement', 'Inspection Terms', 'Payment Instructions', 'Release Conditions'],
  },
];

const GUARANTEES = [
  {
    icon: '📋',
    title: 'Complete Documentation',
    description: 'Every shipment includes full compliance pack with origin, assay, and custody records.',
  },
  {
    icon: '✓',
    title: 'Third-Party Verification',
    description: 'Independent labs and escrow agents confirm gold authenticity and weight.',
  },
  {
    icon: '🛡️',
    title: 'Compliance Alignment',
    description: 'All documentation meets OECD, AML, and KYC regulatory standards.',
  },
  {
    icon: '📊',
    title: 'Audit Trail',
    description: 'Complete transaction history available for regulatory review and internal compliance.',
  },
];

const FAQS = [
  {
    question: 'What documents are included in the compliance pack?',
    answer:
      'Each shipment includes: assay certificate, origin declaration, custody chain, export license, commercial invoice, packing list, insurance policy, tracking number, and lab report. Additional KYC documents (company registration, beneficial ownership, AML screening) are provided upfront.',
  },
  {
    question: 'How does KYC work and what are the timelines?',
    answer:
      'We collect your company registration, beneficial ownership information, compliance officer contact, and banking details. Standard KYC review takes 3-5 business days. Expedited review available for returning customers. Once approved, KYC remains valid for 12 months.',
  },
  {
    question: 'Can I request additional verification or third-party audits?',
    answer:
      'Yes. We support independent audits and third-party inspections. Costs vary based on audit scope. Typical audits (500-1500kg shipments) cost $1,500-$5,000. We coordinate with your auditor and bear standard inspection costs.',
  },
  {
    question: 'What happens if assay results differ from specification?',
    answer:
      'If variance exceeds 0.1%, we either adjust pricing proportionally or remake the shipment at no charge per our purity guarantee. Escrow agent holds gold during dispute resolution (typically 5-7 business days).',
  },
  {
    question: 'How do you verify conflict-free sourcing?',
    answer:
      'We map the supply chain from collection points, verify each miner/middleman against sanctions lists, document sourcing locations, and maintain audit trails. All sourcing complies with OECD due diligence guidelines. We do not source from active conflict zones.',
  },
  {
    question: 'What about customs and import permits?',
    answer:
      'We prepare all export documentation (export licenses, commercial invoices, harmonized codes). Destination customs clearance is buyer responsibility, but we provide all documents needed to obtain import permits. For major routes (Dubai, Europe), we have expedited customs contacts.',
  },
];

export default function Compliance() {
  const [expandedStandard, setExpandedStandard] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Request Quote', href: '/request-quote' }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80 mb-4">Compliance & Documentation</p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }} className="font-bold text-white leading-tight">
              Documentation buyers can rely on
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }} className="mt-6 text-amber-50/90 max-w-3xl leading-relaxed">
              Complete compliance packs for every transaction. We provide OECD-aligned sourcing verification, independent lab assays, KYC support, and full custody documentation to meet regulatory requirements and reduce buyer risk.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/request-quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded transition text-center sm:text-left"
            >
              Request a Quote
            </motion.a>
            <a href="/faq" className="border border-amber-300 text-amber-50 hover:bg-amber-900/20 font-semibold px-8 py-3 rounded transition text-center">
              Read FAQs
            </a>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfbf7]" />
      </section>

      {/* Compliance Standards Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80 mb-4">Compliance Standards</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }} className="font-bold text-slate-900 leading-tight">
            Six-pillar compliance framework
          </h2>
          <p className="mt-4 text-amber-900/70 max-w-3xl">
            From OECD sourcing verification to independent assays to custody documentation—every transaction includes complete regulatory alignment.
          </p>
        </div>

        {/* Standards Cards */}
        <div className="grid gap-6">
          {COMPLIANCE_STANDARDS.map((standard, idx) => (
            <motion.div
              key={standard.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-amber-200/60 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Card Header - Clickable */}
              <button
                onClick={() => setExpandedStandard(expandedStandard === standard.id ? null : standard.id)}
                className="w-full bg-white hover:bg-amber-50 transition p-6 text-left flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{standard.title}</h3>
                  <p className="text-sm text-amber-700 font-semibold mt-1">{standard.timeline}</p>
                </div>
                <div
                  style={{
                    transform: expandedStandard === standard.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                  className="text-xl text-amber-600 flex-shrink-0 ml-4"
                >
                  ↓
                </div>
              </button>

              {/* Expandable Content */}
              {expandedStandard === standard.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-amber-200/60 bg-gradient-to-br from-amber-50 to-white p-6"
                >
                  <p className="text-sm text-slate-700 mb-6">{standard.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Details Column */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-700 mb-4">Details</p>
                      <ul className="space-y-3">
                        {standard.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-800">
                            <span className="text-amber-600 font-bold flex-shrink-0">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents Column */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-700 mb-4">Documents</p>
                      <ul className="space-y-2">
                        {standard.documents.map((doc, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                            <span className="text-amber-500">📄</span> {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="border-y border-amber-200/60 bg-gradient-to-br from-slate-50 to-amber-50/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80 mb-4">Risk Management</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }} className="font-bold text-slate-900 leading-tight">
              Your compliance guarantees
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {GUARANTEES.map((guarantee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-amber-200/40 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{guarantee.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80 mb-4">Questions</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }} className="font-bold text-slate-900 leading-tight">
            Compliance FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-amber-200/60 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Question Header */}
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full bg-white hover:bg-amber-50 transition p-6 text-left flex items-center justify-between"
              >
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <div
                  style={{
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                  className="text-xl text-amber-600 flex-shrink-0 ml-4"
                >
                  ↓
                </div>
              </button>

              {/* Answer */}
              {expandedFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-amber-200/60 bg-gradient-to-br from-amber-50 to-white p-6"
                >
                  <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-amber-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }} className="font-bold text-white leading-tight">
            Ready to request a compliance pack?
          </h2>
          <p className="mt-4 text-amber-50/80 max-w-2xl mx-auto">
            Start with a formal quote. We'll handle all documentation, KYC review, and regulatory alignment so you can focus on the transaction.
          </p>

          <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/request-quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded transition"
            >
              Request a Quote
            </motion.a>
            <a href="/process" className="border border-amber-300 text-amber-50 hover:bg-amber-900/20 font-semibold px-8 py-4 rounded transition">
              View Our Process
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.png" 
                alt="Diamond Capital Africa" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-slate-800">
              Premium gold supply with verified sourcing, compliance documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li><a href="/about" className="hover:text-emerald-700 transition">About us</a></li>
              <li><a href="/products" className="hover:text-emerald-700 transition">Services</a></li>
              <li><a href="/compliance" className="hover:text-emerald-700 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-emerald-700 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-emerald-700 transition">FAQ</a></li>
              <li><a href="/request-quote" className="hover:text-emerald-700 transition">Request Quote</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@diamondcapitalafrica.com" className="hover:text-emerald-700 transition">info@diamondcapitalafrica.com</a></li>
              <li><a href="tel:+256704833021" className="hover:text-emerald-700 transition">+256 (0) 704 833 021</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>OECD Alignment</li>
              <li>KYC Support</li>
              <li>Lab-Verified Assays</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-700 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <a href="/privacy-policy" className="hover:text-amber-700 transition">Privacy Policy</a>
            <p>Serving East & Central Africa • Global delivery available</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
