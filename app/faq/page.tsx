'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/app/components/Header';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Diamond Capital Africa different from other gold suppliers?",
      answer: "Diamond Capital Africa operates with full licensing and regulatory compliance in Uganda. We provide end-to-end documentation, verified origin certificates, independent lab testing, and secure logistics coordination. Our direct partnerships with licensed miners ensure competitive pricing and reliable supply chains.",
    },
    {
      question: "How does Diamond Capital Africa ensure secure gold transactions?",
      answer: "We implement multi-layered security protocols including KYC verification, custody documentation, insured logistics, and escrow options. Every shipment includes full tracking, insurance coverage, and export documentation aligned with international standards.",
    },
    {
      question: "Who can trade gold with Diamond Capital Africa?",
      answer: "We work with institutional buyers, refineries, trading companies, and verified international buyers who meet our KYC requirements. All partners must provide company registration, beneficial ownership documentation, and comply with anti-money laundering regulations.",
    },
    {
      question: "What documentation is required for exporting gold from Uganda?",
      answer: "Export documentation includes: origin certificates, assay reports, mining licenses, custody chain records, export permits, buyer KYC documents, and customs declarations. We coordinate all paperwork to ensure regulatory compliance.",
    },
    {
      question: "Does Diamond Capital Africa work directly with local miners?",
      answer: "Yes, we maintain direct partnerships with licensed artisanal and small-scale miners across Uganda and Congo. All mining partners are verified for legal operations, environmental responsibility, and ethical labor practices.",
    },
    {
      question: "What measures does Diamond Capital Africa take to prevent gold fraud?",
      answer: "We conduct thorough origin verification, require independent third-party assay testing, maintain complete custody documentation, implement buyer due diligence checks, and only work with licensed mining partners. Every transaction includes full traceability from mine to export.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Ask us directly', href: '/contact' }} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          {/* Left Side - Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-slate-600 mb-6">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-8">
              Frequently Ask Questions.
            </h1>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </motion.a>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-red-700 shadow-lg' 
                    : 'bg-[#f5f0e8] shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <h3 className={`text-base font-semibold flex-1 ${
                    openIndex === index ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-slate-700'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-red-50 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <li><a href="/contact" className="hover:text-emerald-700 transition">Contact</a></li>
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
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-amber-200/60 px-4 pt-6 text-xs text-slate-700 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2024 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
