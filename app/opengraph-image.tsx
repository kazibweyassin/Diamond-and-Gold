import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Victoria Gold'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b1116 0%, #1e293b 50%, #0b1116 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Logo circle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Outer circle */}
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              border: '6px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '50%',
            }}
          />
          
          {/* Inner circle */}
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              border: '8px solid #fbbf24',
              borderRadius: '50%',
            }}
          />
          
          {/* VG Logo */}
          <div
            style={{
              fontSize: 200,
              fontWeight: 700,
              color: '#fbbf24',
              letterSpacing: '12px',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            VG
          </div>
          
          {/* Company name */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#fbbf24',
              letterSpacing: '8px',
              textTransform: 'uppercase',
              marginTop: '180px',
            }}
          >
            Victoria Gold
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              marginTop: '16px',
              letterSpacing: '2px',
            }}
          >
            Premium Certified Gold • Uganda & Congo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
