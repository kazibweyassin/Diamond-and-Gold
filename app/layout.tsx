import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Playfair_Display,
  Sora,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-dca-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-dca-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diamondcapitalafrica.com"),
  title: "Diamond Capital Africa - Certified Gold Supply from Uganda & Congo",
  description: "Ethically sourced, lab-verified gold from Uganda and Congo. Certified 99.5%+ purity bars, competitive pricing, secure logistics. Trusted gold supplier for buyers worldwide.",
  keywords: "gold supplier, certified gold, gold bars, Uganda gold, Congo gold, precious metals, ethical sourcing, gold trading, investment gold, compliance documentation",
  authors: [{ name: "Diamond Capital Africa" }],
  creator: "Diamond Capital Africa",
  publisher: "Diamond Capital Africa",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Diamond Capital Africa",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180' },
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    url: "https://diamondcapitalafrica.com",
    title: "Diamond Capital Africa - Certified Gold Supply",
    description: "Ethically sourced, lab-verified gold from Uganda and Congo with full documentation.",
    siteName: "Diamond Capital Africa",
    locale: "en_US",
    images: [
      {
        url: "https://diamondcapitalafrica.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Diamond Capital Africa — Certified gold supply from Uganda & Congo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Capital Africa - Premium Gold from Uganda & Congo",
    description: "Certified gold supply with verified sourcing and secure logistics.",
  },
  alternates: {
    canonical: "https://diamondcapitalafrica.com",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  verification: {
    google: "eh-8hxTROd5PJUjdN6IlYi36qSOpbD3n2J6QIiNPkT0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fdfbf7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/icon" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Diamond Capital Africa",
              description: "Certified gold supplier from Uganda and Congo with full compliance support",
              url: "https://diamondcapitalafrica.com",
              telephone: "+256704833021",
              email: "info@diamondcapitalafrica.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot X, Kampala",
                addressLocality: "Kampala",
                addressRegion: "Central",
                postalCode: "100001",
                addressCountry: "UG",
              },
              areaServed: ["UG", "CD", "Global"],
              priceRange: "$$$$",
              image: "https://diamondcapitalafrica.com/opengraph-image",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable} ${sora.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        
        {/* Google Analytics */}
        {SITE.GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE.GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Google Ads Conversion Tag */}
        {SITE.GOOGLE_TAG_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.GOOGLE_TAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE.GOOGLE_TAG_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
