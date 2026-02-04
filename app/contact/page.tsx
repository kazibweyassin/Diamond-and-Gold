
'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:info@victoriagold.ac.ug?subject=${encodeURIComponent(formData.subject || 'Inquiry from Website')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold">Let’s discuss your gold supply needs.</h1>
            <p className="mt-4 text-slate-300">
              Share your requirements and our team will respond with pricing, documentation details, and logistics
              timelines.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Location', value: 'Kampala, Uganda' },
                { label: 'Email', value: 'info@victoriagold.ac.ug' },
                { label: 'Phone', value: '+256 (0) 704 833 021' },
                { label: 'Hours', value: 'Mon–Fri, 8:00–18:00 EAT' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-sm text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold text-amber-200">Send an inquiry</h2>
            <p className="mt-2 text-sm text-slate-400">We’ll respond within one business day.</p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                <p className="font-semibold">Thank you!</p>
                <p className="mt-1">Your message has been received. We will follow up shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none"
                      placeholder="+256 000 000 000"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none"
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
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none"
                    placeholder="Share order quantities, timelines, or any requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition"
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

      <footer className="border-t border-white/10 bg-slate-950 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 text-amber-300">
                VG
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300/80">Victoria Gold</p>
                <p className="text-xs text-slate-500">Uganda • Congo</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Premium gold supply with verified sourcing, compliance documentation, and secure logistics.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-amber-300 transition">About us</a></li>
              <li><a href="/products" className="hover:text-amber-300 transition">Products</a></li>
              <li><a href="/compliance" className="hover:text-amber-300 transition">Compliance</a></li>
              <li><a href="/process" className="hover:text-amber-300 transition">Process</a></li>
              <li><a href="/faq" className="hover:text-amber-300 transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Kampala, Uganda</li>
              <li><a href="mailto:info@victoriagold.ac.ug" className="hover:text-amber-300 transition">info@victoriagold.ac.ug</a></li>
              <li><a href="tel:+256704833021" className="hover:text-amber-300 transition">+256 (0) 704 833 021</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Responsible sourcing</li>
              <li>Custody documentation</li>
              <li>Lab-verified purity</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2024 Victoria Gold. All rights reserved.</p>
          <p>Serving East & Central Africa • Global delivery available</p>
        </div>
      </footer>
    </main>
  );
}
