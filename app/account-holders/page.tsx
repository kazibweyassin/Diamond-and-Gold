
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function AccountHolders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\+\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    // Simulate a brief delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Create mailto link
    const mailtoLink = `mailto:info@diamondcapitalafrica.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Website')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'View catalog', href: '/products' }} />

      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 via-white to-white" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.35em] text-amber-700/80"
            >
              Account Holders
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-semibold text-slate-900"
            >
              Structured onboarding for recurring buyers and verified accounts.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-800"
            >
              Submit requirements, upload KYC documents, complete verification, and activate your buyer account with DCA.
            </motion.p>

            <div className="mt-10 grid gap-4 xl:grid-cols-4">
              {[
                { step: '01', title: 'Submit requirements', copy: 'Tell us your order, timeline, and compliance needs.' },
                { step: '02', title: 'KYC documents', copy: 'Upload company registration, beneficial ownership, and AML paperwork.' },
                { step: '03', title: 'Verification', copy: 'Our compliance team reviews and confirms your eligibility.' },
                { step: '04', title: 'Account activation', copy: 'Receive account details and priority ordering status.' },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-amber-200/70 bg-[#faf8f2] p-5">
                  <div className="text-2xl font-bold text-amber-700">{item.step}</div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-800 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Location', value: 'Kampala, Uganda' },
                { label: 'Email', value: 'info@diamondcapitalafrica.com' },
                { label: 'Phone', value: '+256 (0) 704 833 021' },
                { label: 'Hours', value: 'Mon–Fri, 8:00–18:00 EAT' },
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-amber-200/70 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">{item.label}</p>
                  <p className="mt-3 text-sm text-slate-900">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">Begin your account holder onboarding</h2>
            <p className="mt-2 text-sm text-slate-800">Submit your details and KYC documents to start verification.</p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-700"
              >
                <p className="font-semibold">Thank you!</p>
                <p className="mt-1">Your message has been received. We will follow up shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${errors.name ? 'border-red-400' : 'border-red-200/70'} bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${errors.email ? 'border-red-400' : 'border-red-200/70'} bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition`}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${errors.phone ? 'border-red-400' : 'border-red-200/70'} bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition`}
                      placeholder="+256 000 000 000"
                    />
                    {errors.phone && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${errors.subject ? 'border-red-400' : 'border-red-200/70'} bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Account Holder Application">Account Holder Application</option>
                      <option value="KYC Submission">KYC Submission</option>
                      <option value="Verification Query">Verification Query</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`mt-2 w-full rounded-lg border ${errors.message ? 'border-red-400' : 'border-red-200/70'} bg-white px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition`}
                    placeholder="Share order quantities, timelines, or any requirements..."
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-full bg-red-700 px-4 py-3 text-sm font-semibold text-white transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-800'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send inquiry'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
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
              <li><a href="/partners" className="hover:text-emerald-700 transition">Partners</a></li>
              <li><a href="/compliance" className="hover:text-emerald-700 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-emerald-700 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-emerald-700 transition">FAQ</a></li>
              <li><a href="/site-map" className="hover:text-emerald-700 transition">Site map</a></li>
              <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
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
          <p>&copy; 2026 Diamond Capital Africa. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
