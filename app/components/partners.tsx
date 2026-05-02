'use client';

import { useRef, useState, CSSProperties } from 'react';

interface Partner {
  id: number;
  name: string;
  abbr: string;
  color: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Uganda Minerals & Mining',
    abbr: 'UMM',
    color: '#b8860b',
  },
  {
    id: 2,
    name: 'OECD Responsible Minerals',
    abbr: 'OECD',
    color: '#2c5f8a',
  },
  {
    id: 3,
    name: 'ISO Certified Labs',
    abbr: 'ISO',
    color: '#1a6b3c',
  },
  {
    id: 4,
    name: 'Kampala Chamber of Commerce',
    abbr: 'KCC',
    color: '#7a3b8c',
  },
  {
    id: 5,
    name: 'East Africa Trade Alliance',
    abbr: 'EATA',
    color: '#b84c1a',
  },
  {
    id: 6,
    name: 'Conflict-Free Sourcing Initiative',
    abbr: 'CFSI',
    color: '#1a5c6b',
  },
  {
    id: 7,
    name: 'DHL Global Forwarding',
    abbr: 'DHL',
    color: '#d40511',
  },
  {
    id: 8,
    name: 'Bureau Veritas',
    abbr: 'BV',
    color: '#003087',
  },
];

// Duplicate for seamless loop
const track: Partner[] = [...partners, ...partners, ...partners];

interface PartnerLogoProps {
  partner: Partner;
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  const [hovered, setHovered] = useState(false);

  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px 40px',
    borderRight: '1px solid #f0ebe0',
    cursor: 'default',
    userSelect: 'none',
    opacity: hovered ? 1 : 0.55,
    transition: 'opacity 0.25s ease',
    flexShrink: 0,
  };

  const logoStyle: CSSProperties = {
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    background: hovered ? partner.color : '#f5f0e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.25s ease',
    flexShrink: 0,
  };

  const abbrevStyle: CSSProperties = {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: hovered ? '#ffffff' : partner.color,
    transition: 'color 0.25s ease',
  };

  const nameStyle: CSSProperties = {
    fontSize: '13px',
    color: hovered ? '#1a1612' : '#6a6050',
    whiteSpace: 'nowrap',
    transition: 'color 0.25s ease',
    letterSpacing: '0.01em',
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={containerStyle}
    >
      {/* Logo mark */}
      <div style={logoStyle}>
        <span style={abbrevStyle}>{partner.abbr}</span>
      </div>

      {/* Name */}
      <span style={nameStyle}>{partner.name}</span>
    </div>
  );
}

export default function PartnersRibbon() {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const sectionStyle: CSSProperties = {
    background: '#ffffff',
    borderTop: '1px solid #ede8d8',
    borderBottom: '1px solid #ede8d8',
    padding: '0',
    overflow: 'hidden',
    position: 'relative',
  };

  const labelStyle: CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1.75rem',
    paddingRight: '2.5rem',
    background: '#ffffff',
    borderRight: '1px solid #ede8d8',
  };

  const labelTextStyle: CSSProperties = {
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#b8a070',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  };

  const fadeLeftStyle: CSSProperties = {
    position: 'absolute',
    left: '172px',
    top: 0,
    bottom: 0,
    width: '80px',
    background: 'linear-gradient(to right, #ffffff, transparent)',
    zIndex: 5,
    pointerEvents: 'none',
  };

  const fadeRightStyle: CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '80px',
    background: 'linear-gradient(to left, #ffffff, transparent)',
    zIndex: 5,
    pointerEvents: 'none',
  };

  const scrollContainerStyle: CSSProperties = {
    paddingLeft: '220px',
    overflow: 'hidden',
  };

  const trackStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    animation: `scroll-ribbon 32s linear infinite`,
    animationPlayState: paused ? 'paused' : 'running',
    width: 'max-content',
  };

  return (
    <section style={sectionStyle}>
      {/* Label */}
      <div style={labelStyle}>
        <span style={labelTextStyle}>Trusted Partners</span>
      </div>

      {/* Left fade */}
      <div style={fadeLeftStyle} />

      {/* Right fade */}
      <div style={fadeRightStyle} />

      {/* Scrolling track */}
      <div
        style={scrollContainerStyle}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={ribbonRef} style={trackStyle}>
          {track.map((partner, i) => (
            <PartnerLogo key={`${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-ribbon {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
