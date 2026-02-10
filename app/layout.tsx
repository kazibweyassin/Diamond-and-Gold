import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://diamondcapitalafrica.com"),
  title: "Diamond Capital Africa - Certified Gold Supply from Uganda & Congo",
  description: "Ethically sourced, lab-verified gold from Uganda and Congo. Certified 99.5%+ purity bars, competitive pricing, secure logistics. Trusted gold supplier for institutional buyers worldwide.",
  keywords: "gold supplier, certified gold, gold bars, Uganda gold, Congo gold, precious metals, ethical sourcing, gold trading, investment gold, compliance documentation",
  authors: [{ name: "Diamond Capital Africa" }],
  creator: "Diamond Capital Africa",
  publisher: "Diamond Capital Africa",
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
        url: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg",
        width: 1200,
        height: 630,
        alt: "Certified gold supply - Diamond Capital Africa",
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
    google: "google-site-verification-code",
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
        <meta name="theme-color" content="#0b1116" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/icon" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="manifest" href="/manifest.json" />
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
                streetAddress: "Kampala",
                addressLocality: "Kampala",
                addressRegion: "Uganda",
                postalCode: "",
                addressCountry: "UG",
              },
              areaServed: ["UG", "CD", "Global"],
              priceRange: "$$",
              sameAs: [],
              image: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
