import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Victoria Gold - Premium Certified Gold from Uganda & Congo",
  description: "Ethically sourced, lab-verified gold from Uganda and Congo. Certified 99.5%+ purity bars, competitive pricing, secure logistics. Trusted gold supplier for businesses worldwide.",
  keywords: "gold supplier, certified gold, gold bars, Uganda gold, Congo gold, precious metals, ethical sourcing, gold trading, investment gold",
  authors: [{ name: "Victoria Gold" }],
  creator: "Victoria Gold",
  publisher: "Victoria Gold",
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
    url: "https://victoriagold.ac.ug",
    title: "Victoria Gold - Premium Certified Gold Supply",
    description: "Ethically sourced, lab-verified gold from Uganda and Congo with full documentation.",
    siteName: "Victoria Gold",
    locale: "en_US",
    images: [
      {
        url: "https://images.pexels.com/photos/19038661/pexels-photo-19038661.jpeg",
        width: 1200,
        height: 630,
        alt: "Gold refining - Victoria Gold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Gold - Premium Gold from Uganda & Congo",
    description: "Certified gold supply with verified sourcing and secure logistics.",
  },
  alternates: {
    canonical: "https://victoriagold.ac.ug",
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
              name: "Victoria Gold",
              description: "Premium certified gold supplier from Uganda and Congo",
              url: "https://victoriagold.ac.ug",
              telephone: "+256704833021",
              email: "info@victoriagold.ac.ug",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
