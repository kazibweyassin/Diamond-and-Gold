'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function QuoteFormSection() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    quantity: '',
    purity: '99.9',
    destination: '',
    timeline: '4-8 weeks',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'homepage-quote',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            company: '',
            name: '',
            email: '',
            phone: '',
            quantity: '',
            purity: '99.9',
            destination: '',
            timeline: '4-8 weeks',
          });
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section style={{ padding: '6rem 2rem', background: '#0A1628' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: 8,
              padding: '3rem 2rem',
              textAlign: 'center',
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0A1628', marginBottom: 8 }}>
              Quote request received
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(10,22,40,0.6)', lineHeight: 1.6 }}>
              Thank you. A specialist will contact you within 24 hours with a formal quote and next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '6rem 2rem', background: '#0A1628' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem', color: '#fff' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: '1rem',
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8922A',
            }}
          >
            <div style={{ width: 18, height: 1, background: '#B8922A' }} />
            Get started
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.025em',
              color: '#fff',
              lineHeight: 1.18,
              marginBottom: 8,
            }}
          >
            Request a <strong style={{ fontWeight: 600 }}>formal quote</strong> in seconds
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
            Share your requirements below. Our team will respond with a binding quote, timeline, and next steps within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: 900 }}>
          {/* Row 1 */}
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            type="text"
            name="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />

          {/* Row 2 */}
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />

          {/* Row 3 */}
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            type="text"
            name="quantity"
            placeholder="Desired quantity (kg)"
            value={formData.quantity}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />
          <motion.select
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            name="purity"
            value={formData.purity}
            onChange={handleChange}
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          >
            <option value="99.5" style={{ background: '#0A1628' }}>Purity: 99.5%</option>
            <option value="99.9" style={{ background: '#0A1628' }}>Purity: 99.9%</option>
            <option value="99.95" style={{ background: '#0A1628' }}>Purity: 99.95%</option>
            <option value="other" style={{ background: '#0A1628' }}>Other</option>
          </motion.select>

          {/* Row 4 */}
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            type="text"
            name="destination"
            placeholder="Delivery destination (city/country)"
            value={formData.destination}
            onChange={handleChange}
            required
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          />
          <motion.select
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              color: '#fff',
              fontSize: 13,
              fontFamily: 'inherit',
            }}
          >
            <option value="2-4 weeks" style={{ background: '#0A1628' }}>Timeline: 2–4 weeks</option>
            <option value="4-8 weeks" style={{ background: '#0A1628' }}>Timeline: 4–8 weeks</option>
            <option value="8+ weeks" style={{ background: '#0A1628' }}>Timeline: 8+ weeks</option>
            <option value="flexible" style={{ background: '#0A1628' }}>Timeline: Flexible</option>
          </motion.select>

          {/* Full-width submit */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            type="submit"
            disabled={loading}
            style={{
              gridColumn: '1 / -1',
              padding: '14px 28px',
              background: 'linear-gradient(165deg, #c9a54a 0%, #B8922A 45%, #9a7820 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!loading) (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
            }}
          >
            {loading ? 'Submitting...' : 'Get Quote →'}
          </motion.button>

          {error && (
            <div
              style={{
                gridColumn: '1 / -1',
                padding: '12px 16px',
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                borderRadius: 4,
                color: '#fca5a5',
                fontSize: 12,
              }}
            >
              {error}
            </div>
          )}
        </form>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: '1.5rem' }}>
          Prefer to discuss first?{' '}
          <a href="/contact" style={{ color: '#B8922A', textDecoration: 'none', fontWeight: 600 }}>
            Contact our team
          </a>{' '}
          or email info@diamondcapitalafrica.com
        </p>
      </div>
    </section>
  );
}

export default QuoteFormSection;
