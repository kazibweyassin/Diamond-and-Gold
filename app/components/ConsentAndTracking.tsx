'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { SITE } from '@/lib/constants';

const CONSENT_KEY = 'dca-cookie-consent';

import { getConsentFromCookie, setConsentCookie, eraseCookie } from '@/lib/cookies';

type ConsentChoice = 'accepted' | 'custom' | 'rejected' | null;

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

export default function ConsentAndTracking() {
  const [consentChoice, setConsentChoice] = useState<ConsentChoice>(null);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    marketing: false,
  });
  const [showOptions, setShowOptions] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client after hydration
    setMounted(true);
    
    // Prefer cookie storage (set by server/client), fallback to localStorage
    const cookie = getConsentFromCookie();
    if (cookie.choice) {
      setConsentChoice(cookie.choice as ConsentChoice);
      if (cookie.preferences) setPreferences(cookie.preferences);
      return;
    }

    const storedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (!storedConsent) return;

    if (storedConsent === 'accepted' || storedConsent === 'rejected' || storedConsent === 'custom') {
      setConsentChoice(storedConsent);
      if (storedConsent === 'accepted') {
        setPreferences({ analytics: true, marketing: true });
      }
      if (storedConsent === 'rejected') {
        setPreferences({ analytics: false, marketing: false });
      }
      if (storedConsent === 'custom') {
        try {
          const storedPreferences = window.localStorage.getItem(`${CONSENT_KEY}:preferences`);
          if (storedPreferences) {
            setPreferences(JSON.parse(storedPreferences) as ConsentPreferences);
          }
        } catch {
          setPreferences({ analytics: false, marketing: false });
        }
      }
    }
  }, []);

  const persistConsent = (choice: Exclude<ConsentChoice, null>, nextPreferences: ConsentPreferences) => {
    window.localStorage.setItem(CONSENT_KEY, choice);
    window.localStorage.setItem(`${CONSENT_KEY}:preferences`, JSON.stringify(nextPreferences));
    // also persist to cookie for server-side and other clients
    try {
      setConsentCookie(choice, nextPreferences);
    } catch {}
    setConsentChoice(choice);
    setPreferences(nextPreferences);
    setShowOptions(false);
  };

  const acceptAll = () => {
    persistConsent('accepted', { analytics: true, marketing: true });
  };

  const savePreferences = () => {
    persistConsent('custom', preferences);
  };

  const rejectAll = () => {
    persistConsent('rejected', { analytics: false, marketing: false });
  };

  const bannerVisible = mounted && consentChoice === null;
  const analyticsEnabled = consentChoice === 'accepted' || (consentChoice === 'custom' && preferences.analytics);
  const marketingEnabled = consentChoice === 'accepted' || (consentChoice === 'custom' && preferences.marketing);

  // remove analytics cookies and disable gtag when analytics is turned off
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const gaId = (window as any).__NEXT_DATA__?.props?.pageProps?.GA_ID ?? (window as any).GA_ID ?? undefined;
    const SITE_GA = gaId || undefined; // fallback

    if (!analyticsEnabled) {
      // disable gtag if measurement id known
      if ((window as any).gtag) {
        try {
          eraseCookie('_ga');
          eraseCookie('_gid');
          eraseCookie('_gat');
        } catch {}
      }

      // set disable flag for known GA id from SITE.GA_ID
      if ((window as any).SITE && (window as any).SITE.GA_ID) {
        (window as any)[`ga-disable-${(window as any).SITE.GA_ID}`] = true;
      }
    } else {
      // remove disable flag when enabled
      if ((window as any).SITE && (window as any).SITE.GA_ID) {
        try {
          delete (window as any)[`ga-disable-${(window as any).SITE.GA_ID}`];
        } catch {}
      }
    }
  }, [analyticsEnabled]);

  // allow external UI to open cookie settings (e.g., footer button)
  useEffect(() => {
    function onOpen() {
      setShowOptions(true);
      setConsentChoice((c) => (c === null ? 'custom' : c));
    }

    window.addEventListener('dca:open-cookie-settings', onOpen as EventListener);
    return () => window.removeEventListener('dca:open-cookie-settings', onOpen as EventListener);
  }, []);

  return (
    <>
      {analyticsEnabled && SITE.GA_ID && (
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

      {marketingEnabled && SITE.GOOGLE_TAG_ID && (
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

      {bannerVisible && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-xl border border-green-900/20 bg-gradient-to-br from-green-50 to-white p-5 shadow-lg backdrop-blur-md md:bottom-6 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="text-2xl">🍪</div>
              <div>
                <h3 className="text-sm font-bold text-green-900 md:text-base">
                  We value your privacy
                </h3>
                <p className="mt-1 text-xs leading-5 text-green-800 md:text-sm">
                  We use cookies to understand your needs and improve your experience. You can choose which cookies to accept.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-95 md:px-6 md:py-3"
              >
                Accept all
              </button>

              <button
                type="button"
                onClick={() => setShowOptions((current) => !current)}
                className="inline-flex items-center justify-center rounded-lg border border-green-300 bg-white px-5 py-2.5 text-sm font-semibold text-green-900 transition hover:bg-green-50 active:scale-95 md:px-6 md:py-3"
                aria-expanded={showOptions}
                aria-controls="cookie-options-panel"
              >
                {showOptions ? 'Hide options' : 'Customize'}
              </button>

              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-lg bg-transparent px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-100/50 active:scale-95 md:px-6 md:py-3"
              >
                Reject all
              </button>
            </div>

            {showOptions && (
              <div id="cookie-options-panel" className="space-y-3 border-t border-green-200 pt-4">
                <div className="rounded-lg border border-green-100 bg-green-50/50 p-3">
                  <label className="flex items-start gap-3 text-sm">
                    <input 
                      type="checkbox" 
                      checked 
                      disabled 
                      className="mt-0.5 h-4 w-4 rounded border-green-300 bg-white text-green-700 accent-green-700"
                    />
                    <span>
                      <span className="font-semibold text-green-900">Necessary</span>
                      <span className="mt-1 block text-xs leading-4 text-green-700">
                        Essential for site functionality. Always enabled.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="rounded-lg border border-green-100 bg-white p-3">
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-green-300 bg-white text-green-700 accent-green-700"
                    />
                    <span>
                      <span className="font-semibold text-green-900">Analytics</span>
                      <span className="mt-1 block text-xs leading-4 text-green-700">
                        Help us understand how you use the site.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="rounded-lg border border-green-100 bg-white p-3">
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(event) => setPreferences((current) => ({ ...current, marketing: event.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-green-300 bg-white text-green-700 accent-green-700"
                    />
                    <span>
                      <span className="font-semibold text-green-900">Marketing</span>
                      <span className="mt-1 block text-xs leading-4 text-green-700">
                        Personalized content and ads.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center pt-2">
                  <button
                    type="button"
                    onClick={savePreferences}
                    className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-95"
                  >
                    Save preferences
                  </button>
                </div>
              </div>
            )}

            <p className="text-xs text-green-700">
              <a href="/privacy-policy" className="underline hover:text-green-800">Privacy Policy</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}