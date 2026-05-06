import Header from '@/app/components/Header';
import dynamic from 'next/dynamic';
const SharedFooter = dynamic(() => import('@/app/components/SharedFooter'));

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-slate-900">
      <Header cta={{ label: 'Contact us', href: '/contact' }} />
      
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          {/* Last Updated */}
          <p className="text-sm text-slate-500 italic">
            Last updated: May 5, 2026
          </p>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Diamond Capital Africa ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  A. Personal Information You Provide
                </h3>
                <p>
                  We collect information you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Contact us via email, phone, or contact form</li>
                  <li>Request information about our products or services</li>
                  <li>Subscribe to our communications</li>
                  <li>Download resources or documentation</li>
                  <li>Access our investor portal</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  B. Information Collected Automatically
                </h3>
                <p>
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Device information (browser type, IP address)</li>
                  <li>Usage data (pages visited, time spent, referral source)</li>
                  <li>Location information (general geographic location)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process transactions and send related information</li>
              <li>To comply with legal obligations</li>
              <li>To improve our website and services</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To monitor and prevent fraudulent activity</li>
              <li>To analyze website performance and user behavior</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              5. Sharing Your Information
            </h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
              <li>Professional advisors (legal, accounting, etc.)</li>
            </ul>
          </section>

          {/* Compliance */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              6. Compliance Standards
            </h2>
            <p>
              Diamond Capital Africa is committed to responsible sourcing and compliance with international standards including OECD guidelines for conflict minerals and applicable data protection regulations. Our gold is lab-verified for purity and comes with comprehensive custody documentation.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance user experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect website functionality.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              8. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the information provided in the Contact section below.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              9. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              10. International Data Transfers
            </h2>
            <p>
              As Diamond Capital Africa operates globally with delivery to multiple regions, your information may be transferred to, stored in, and processed in countries other than your country of residence. By providing your information, you consent to such transfers.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              11. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              12. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="mb-2">
                <strong>Diamond Capital Africa</strong>
              </p>
              <p className="mb-1">
                📍 Kampala, Uganda
              </p>
              <p className="mb-1">
                <a href="mailto:info@diamondcapitalafrica.com" className="text-amber-600 hover:text-amber-700 transition">
                  info@diamondcapitalafrica.com
                </a>
              </p>
              <p>
                <a href="tel:+256704833021" className="text-amber-600 hover:text-amber-700 transition">
                  +256 (0) 704 833 021
                </a>
              </p>
            </div>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Acknowledgment */}
          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              By using Diamond Capital Africa's website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
        </div>
      </div>

      <SharedFooter sections={undefined} brandDescription={undefined} copyright={undefined} bottomNote={undefined} />
    </main>
  );
}
