
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

export default function Contact() {
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
        {/* Map Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7434408369827!2d32.58260752346896!3d0.3475965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb3a7275c1b1%3A0x1234567890abcdef!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Let’s discuss your gold supply needs.</h1>
            <p className="mt-4 text-slate-800">
              Share your requirements and our team will respond with pricing, documentation details, and logistics
              timelines.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Location', value: 'Kampala, Uganda' },
                { label: 'Email', value: 'info@diamondcapitalafrica.com' },
                { label: 'Phone', value: '+256 (0) 704 833 021' },
                { label: 'Hours', value: 'Mon–Fri, 8:00–18:00 EAT' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-amber-200/70 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">{item.label}</p>
                  <p className="mt-3 text-sm text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/70 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Send an inquiry</h2>
            <p className="mt-2 text-sm text-slate-800">We’ll respond within one business day.</p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-700">
                <p className="font-semibold">Thank you!</p>
                <p className="mt-1">Your message has been received. We will follow up shortly.</p>
              </div>
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
                      required
                      className="mt-2 w-full rounded-lg border border-amber-200/70 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-amber-200/70 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                      placeholder="you@email.com"
                    />
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
                      className="mt-2 w-full rounded-lg border border-amber-200/70 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                      placeholder="+256 000 000 000"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-amber-200/70 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Certification">Certification Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-amber-200/70 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
                    placeholder="Share order quantities, timelines, or any requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition"
                >
                  Send inquiry
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-amber-200/60 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/60 text-amber-700">
                DCA
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-900">Diamond Capital Africa</p>
                <p className="text-xs text-slate-800">Uganda • Congo</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-800">
              Premium gold supply with verified sourcing, compliance documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li><a href="/about" className="hover:text-amber-700 transition">About us</a></li>
              <li><a href="/products" className="hover:text-amber-700 transition">Services</a></li>
              <li><a href="/compliance" className="hover:text-amber-700 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-amber-700 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-amber-700 transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-700">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@diamondcapitalafrica.com" className="hover:text-amber-700 transition">info@diamondcapitalafrica.com</a></li>
              <li><a href="tel:+256704833021" className="hover:text-amber-700 transition">+256 (0) 704 833 021</a></li>
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
