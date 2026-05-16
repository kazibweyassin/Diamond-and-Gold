'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import SharedFooter from '@/app/components/SharedFooter';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    target_volume: '',
    delivery_destination: '',
    kyc_status: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Send to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'b2b-quote',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Trigger Google Ads conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL_FORM',
            'event_category': 'Lead Generation',
            'event_label': 'B2B Quote Request Form'
          });
        }
        setFormData({
          company_name: '',
          contact_name: '',
          email: '',
          phone: '',
          target_volume: '',
          delivery_destination: '',
          kyc_status: '',
        });
      } else {
        const responseData = await response.json().catch(() => null);
        setErrorMessage(
          responseData?.error || responseData?.message || 'We could not submit your quote request. Please try again.'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#F7F6F2' }}>
      <Header />

      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
            color: '#B58A0A',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Institutional Buyers
          </p>
          <h1 style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: '#1c160a',
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}>
            Request a Formal Quote
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6b5d3e',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            Submit your specifications and we'll provide a compliance-reviewed quote within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div style={{
            maxWidth: '580px',
            margin: '3rem auto',
            padding: '2.5rem',
            background: '#faf7f0',
            border: '1px solid rgba(181,138,10,0.2)',
            borderRadius: '4px',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>✓</div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#1c160a',
              marginBottom: '0.75rem',
            }}>
              Thank You
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#6b5d3e',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}>
              We've received your quote request. Our compliance team will review your submission and contact you within 24 hours with a formal quotation and next steps.
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#B58A0A',
              color: '#fff',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}>
              Return to Homepage
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} id="b2b-quote-form" style={{
            maxWidth: '580px',
            margin: '0 auto',
            background: '#fff',
            padding: '2.5rem',
            border: '1px solid rgba(181,138,10,0.15)',
            borderRadius: '4px',
          }}>
            {errorMessage && (
              <div style={{
                marginBottom: '1.5rem',
                padding: '1rem 1.25rem',
                background: 'rgba(185, 28, 28, 0.08)',
                border: '1px solid rgba(185, 28, 28, 0.2)',
                borderRadius: '4px',
                color: '#991b1b',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}>
                {errorMessage}
              </div>
            )}

            {/* Company Information */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#1c160a',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(181,138,10,0.15)',
              }}>
                Company Information
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Company Legal Name *
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="e.g., Global Bullion Trading LLC"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Authorized Representative *
                </label>
                <input
                  type="text"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Direct Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Transaction Intent */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#1c160a',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(181,138,10,0.15)',
              }}>
                Transaction Intent
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Target Volume (Per Transaction) *
                </label>
                <select
                  name="target_volume"
                  value={formData.target_volume}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    background: '#fff',
                  }}
                >
                  <option value="">Select volume scale</option>
                  <option value="1-5kg">Trial Allocation (1kg — 5kg)</option>
                  <option value="5-20kg">Commercial Scale (5kg — 20kg)</option>
                  <option value="20kg+">Institutional Scale (20kg+)</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Preferred Delivery Destination *
                </label>
                <select
                  name="delivery_destination"
                  value={formData.delivery_destination}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    background: '#fff',
                  }}
                >
                  <option value="">Select destination</option>
                  <option value="FOB-Kampala">FOB Kampala (Local Vault Pick-up)</option>
                  <option value="CIF-Dubai">CIF Dubai (UAE Hub)</option>
                  <option value="CIF-Europe">CIF Europe / International Hub</option>
                </select>
              </div>
            </div>

            {/* Compliance Pre-Screening */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#1c160a',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(181,138,10,0.15)',
              }}>
                Compliance & KYC
              </h3>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: '#6b5d3e',
                  marginBottom: '0.5rem',
                }}>
                  Compliance & KYC Status *
                </label>
                <select
                  name="kyc_status"
                  value={formData.kyc_status}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(181,138,10,0.2)',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    background: '#fff',
                  }}
                >
                  <option value="">Select your current status</option>
                  <option value="ready">We have corporate KYC/AML documents ready for review</option>
                  <option value="needs-advisory">We require legal/compliance transaction onboarding</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '1rem',
                background: '#B58A0A',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                transition: 'all 0.2s',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.background = '#9a7820')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#B58A0A')}
            >
              {loading ? 'Submitting...' : 'Submit Intent for Compliance Review'}
            </button>

            <p style={{
              fontSize: '0.8rem',
              color: 'rgba(107, 93, 62, 0.6)',
              textAlign: 'center',
              marginTop: '1.5rem',
              lineHeight: 1.6,
            }}>
              By submitting this form, you confirm you represent an authorized decision-maker at your organization and agree to our <a href="/privacy-policy" style={{ color: '#B58A0A', textDecoration: 'none' }}>privacy policy</a>.
            </p>
          </form>
        )}
      </section>

      <SharedFooter />
    </main>
  );
}
