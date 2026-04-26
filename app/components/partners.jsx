import { useRef, useState } from "react";

const partners = [
  {
    id: 1,
    name: "Uganda Minerals & Mining",
    abbr: "UMM",
    color: "#b8860b",
  },
  {
    id: 2,
    name: "OECD Responsible Minerals",
    abbr: "OECD",
    color: "#2c5f8a",
  },
  {
    id: 3,
    name: "ISO Certified Labs",
    abbr: "ISO",
    color: "#1a6b3c",
  },
  {
    id: 4,
    name: "Kampala Chamber of Commerce",
    abbr: "KCC",
    color: "#7a3b8c",
  },
  {
    id: 5,
    name: "East Africa Trade Alliance",
    abbr: "EATA",
    color: "#b84c1a",
  },
  {
    id: 6,
    name: "Conflict-Free Sourcing Initiative",
    abbr: "CFSI",
    color: "#1a5c6b",
  },
  {
    id: 7,
    name: "DHL Global Forwarding",
    abbr: "DHL",
    color: "#d40511",
  },
  {
    id: 8,
    name: "Bureau Veritas",
    abbr: "BV",
    color: "#003087",
  },
];

// Duplicate for seamless loop
const track = [...partners, ...partners, ...partners];

export default function PartnersRibbon() {
  const ribbonRef = useRef(null);
  const [paused, setPaused] = useState(false);

  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid #ede8d8",
        borderBottom: "1px solid #ede8d8",
        padding: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Label */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          paddingLeft: "1.75rem",
          paddingRight: "2.5rem",
          background: "#ffffff",
          borderRight: "1px solid #ede8d8",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b8a070",
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          Trusted Partners
        </span>
      </div>

      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: "172px",
          top: 0,
          bottom: 0,
          width: "80px",
          background:
            "linear-gradient(to right, #ffffff, transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background:
            "linear-gradient(to left, #ffffff, transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          paddingLeft: "220px",
          overflow: "hidden",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={ribbonRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
            animation: `scroll-ribbon 32s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
            width: "max-content",
          }}
        >
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

function PartnerLogo({ partner }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "18px 40px",
        borderRight: "1px solid #f0ebe0",
        cursor: "default",
        userSelect: "none",
        opacity: hovered ? 1 : 0.55,
        transition: "opacity 0.25s ease",
        flexShrink: 0,
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "6px",
          background: hovered
            ? partner.color
            : "#f5f0e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.25s ease",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            fontFamily: "'Trebuchet MS', sans-serif",
            letterSpacing: "0.04em",
            color: hovered ? "#ffffff" : partner.color,
            transition: "color 0.25s ease",
          }}
        >
          {partner.abbr}
        </span>
      </div>

      {/* Name */}
      <span
        style={{
          fontSize: "13px",
          fontFamily: "'Georgia', serif",
          color: hovered ? "#1a1612" : "#6a6050",
          whiteSpace: "nowrap",
          transition: "color 0.25s ease",
          letterSpacing: "0.01em",
        }}
      >
        {partner.name}
      </span>
    </div>
  );
}