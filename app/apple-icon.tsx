import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: 'linear-gradient(135deg, #0b1116 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fbbf24',
          fontWeight: 700,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '160px',
            height: '160px',
            border: '4px solid #fbbf24',
            borderRadius: '50%',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '140px',
            height: '140px',
            border: '6px solid #fbbf24',
            borderRadius: '50%',
          }}
        />
        <div style={{ position: 'relative', letterSpacing: '4px' }}>VG</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
