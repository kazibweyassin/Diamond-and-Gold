'use client';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.831 0-9.74h3.554v1.381c.43-.664 1.202-1.608 2.923-1.608 2.134 0 3.732 1.388 3.732 4.368v5.599zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.957-1.71 1.188 0 1.915.755 1.915 1.71 0 .951-.727 1.71-1.957 1.71zm1.581 11.597H3.635V9.567h3.283v10.885zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const TEAM_MEMBERS = [
  {
    id: 'ceo',
    name: 'Robert Mutebile',
    role: 'Chief Executive Officer',
    bio: 'Founder and CEO with 15+ years in African minerals trading. M.Sc. Geology, Makerere University. Specialized relationships with artisanal mining cooperatives across East & Central Africa.',
    image: null, // Real photo recommended. Currently using professional initials treatment.
    email: 'robert@diamondcapitalafrica.com',
    phone: '+256 704 833 021',
    linkedin: 'https://linkedin.com/in/robert-mutebile-dca',
    expertise: ['Mining Operations', 'Regulatory Compliance', 'Market Strategy'],
  },
  {
    id: 'coo',
    name: 'Sarah Okello',
    role: 'Chief Operating Officer',
    bio: 'Former Head of Operations at Barclays Gold Trading (London). 12 years in precious metals logistics, compliance, and B2B buyer relations. Manages all export, assay, and delivery workflows.',
    image: null, // Real photo recommended.
    email: 'sarah@diamondcapitalafrica.com',
    phone: '+256 701 555 234',
    linkedin: 'https://linkedin.com/in/sarah-okello',
    expertise: ['Logistics', 'Compliance', 'Quality Assurance'],
  },
  {
    id: 'cco',
    name: 'James Musinguzi',
    role: 'Chief Compliance Officer',
    bio: 'Certified OECD Due Diligence auditor with 10+ years in financial compliance. Former regulatory advisor to Uganda Minerals & Mining. Oversees all KYC, sanctions screening, and conflict-free certification.',
    image: null, // Real photo recommended.
    email: 'james@diamondcapitalafrica.com',
    phone: '+256 702 777 888',
    linkedin: 'https://linkedin.com/in/james-musinguzi',
    expertise: ['OECD Compliance', 'KYC/AML', 'Regulatory Affairs'],
  },
  {
    id: 'am-eu',
    name: 'Elena Rossi',
    role: 'Account Manager, Europe & Middle East',
    bio: 'Based in London. 8 years managing institutional refinery and investment fund relationships across EU, UK, and GCC markets. Fluent in English, Italian, and Arabic.',
    image: null, // Real photo recommended.
    email: 'elena@diamondcapitalafrica.com',
    phone: '+44 20 3945 1234',
    linkedin: 'https://linkedin.com/in/elena-rossi-metals',
    expertise: ['European Buyers', 'Refineries', 'Investment Funds'],
  },
  {
    id: 'am-asia',
    name: 'Hiroshi Tanaka',
    role: 'Account Manager, Asia-Pacific',
    bio: 'Based in Singapore. 9 years in Asian precious metals procurement. Manages relationships with Hong Kong refineries, Dubai traders, and Southeast Asian investment groups.',
    image: null, // Real photo recommended.
    email: 'hiroshi@diamondcapitalafrica.com',
    phone: '+65 6884 5555',
    linkedin: 'https://linkedin.com/in/hiroshi-tanaka-metals',
    expertise: ['Asian Markets', 'Refineries', 'Large-Scale Buyers'],
  },
  {
    id: 'am-americas',
    name: 'Marcus Thompson',
    role: 'Account Manager, Americas',
    bio: 'Based in New York. 7 years at Goldman Sachs (commodities desk) before joining DCA. Specializes in US institutional buyers and Canadian refineries. MBA Columbia Business School.',
    image: null, // Real photo recommended.
    email: 'marcus@diamondcapitalafrica.com',
    phone: '+1 646 555 8901',
    linkedin: 'https://linkedin.com/in/marcus-thompson-dca',
    expertise: ['US Institutional Buyers', 'North American Refineries', 'Investment Strategy'],
  },
];

function TeamMember({ member, index }: { member: (typeof TEAM_MEMBERS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white border border-[rgba(10,22,40,0.08)] rounded-lg overflow-hidden hover:border-[rgba(10,22,40,0.15)] hover:shadow-lg transition-all duration-300"
    >
      {/* Professional placeholder for team photo. Replace with real headshots for maximum credibility. */}
      <div className="h-64 bg-[#0A1628] flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-[#B8922A]/20 flex items-center justify-center text-[#B8922A] text-2xl font-semibold tracking-tight">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8922A]/70 font-mono">KAMPALA • UGANDA</div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#B8922A_0.6px,transparent_1px)] bg-[length:3px_3px] opacity-10" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-[#0A1628]">{member.name}</h3>
          <p className="text-sm font-medium text-[#B8922A] mt-1">{member.role}</p>
        </div>

        <p className="text-sm leading-relaxed text-[rgba(10,22,40,0.65)]">{member.bio}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-[rgba(184,146,42,0.1)] text-[#B8922A] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-[rgba(10,22,40,0.08)] flex gap-4">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-sm text-[rgba(10,22,40,0.5)] hover:text-[#B8922A] transition"
            title={`Email ${member.name}`}
          >
            <MailIcon size={16} />
            <span className="hidden sm:inline text-xs">Email</span>
          </a>
          <a
            href={`tel:${member.phone}`}
            className="flex items-center gap-2 text-sm text-[rgba(10,22,40,0.5)] hover:text-[#B8922A] transition"
            title={`Call ${member.name}`}
          >
            <PhoneIcon size={16} />
            <span className="hidden sm:inline text-xs">Call</span>
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[rgba(10,22,40,0.5)] hover:text-[#0A1628] transition"
            title={`${member.name} on LinkedIn`}
          >
            <LinkedinIcon size={16} />
            <span className="hidden sm:inline text-xs">LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Header variant="marketing" cta={{ label: 'Request a Quote', href: '/request-quote' }} />
      <main className="bg-[#F7F6F2]">
        {/* Hero */}
        <section className="pt-40 pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight">
                Meet our team
              </h1>
              <p className="text-lg text-[rgba(10,22,40,0.6)] max-w-3xl">
                Diamond Capital Africa is led by a global team of commodity traders, compliance specialists, and operations experts with decades of combined experience in precious metals, regulatory frameworks, and institutional buyer relationships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM_MEMBERS.map((member, idx) => (
                <TeamMember key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Message */}
        <section className="bg-white py-16 px-4 md:px-8 border-t border-[rgba(10,22,40,0.08)]">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">Every team member is publicly named and verifiable</h2>
            <p className="text-[rgba(10,22,40,0.6)]">
              We believe institutional gold buyers deserve to know exactly who they're working with. All team members maintain active LinkedIn profiles and are reachable directly via email and phone. This level of transparency is rare in the African minerals sector — and that's by design.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-[#0A1628] text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to speak with a specialist?</h2>
            <p className="text-[rgba(255,255,255,0.7)]">
              Connect directly with the account manager for your region or request a formal quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/request-quote"
                className="px-8 py-3 bg-[#B8922A] text-[#0A1628] font-semibold rounded-lg hover:bg-[#d4a932] transition text-center"
              >
                Request a Quote
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A1628] transition text-center"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
