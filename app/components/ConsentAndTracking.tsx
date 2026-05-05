'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { SITE } from '@/lib/constants';

const CONSENT_KEY = 'dca-cookie-consent';

type ConsentState = 'accepted' | 'rejected' | null;

export default function ConsentAndTracking() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY) as ConsentState;

    if (storedConsent === 'accepted' || storedConsent === 'rejected') {
      setConsent(storedConsent);
    }
  }, []);

  const updateConsent = (value: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === 'accepted' && SITE.GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.GA_ID}`} strategy="afterInteractive" />
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

      {consent === 'accepted' && SITE.GOOGLE_TAG_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.GOOGLE_TAG_ID}`} strategy="afterInteractive" />
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

      {consent === null && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold text-slate-900">Cookie notice</p>
          <p className="mt-2 text-sm text-slate-700">
            We use cookies and similar tools to improve the site and measure performance. You can accept or decline non-essential tracking.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => updateConsent('accepted')}
              className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => updateConsent('rejected')}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Not now
            </button>
          </div>
        </div>
      )}
    </>
  );
}