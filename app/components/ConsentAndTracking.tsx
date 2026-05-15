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
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Cookie Settings
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We use cookies to improve your experience. You can customize your preferences or accept all.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={() => setShowOptions((current) => !current)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 active:scale-95"
                aria-expanded={showOptions}
                aria-controls="cookie-options-panel"
              >
                {showOptions ? 'Hide Options' : 'Customize'}
              </button>

              <button
                type="button"
                onClick={rejectAll}
                className="w-full rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 active:scale-95"
              >
                Reject All
              </button>
            </div>

            {/* Options Panel */}
            {showOptions && (
              <div id="cookie-options-panel" className="space-y-2 border-t border-gray-200 pt-4">
                <div className="rounded-lg bg-gray-50 p-3">
                  <label className="flex items-center gap-3 text-sm">
                    <input 
                      type="checkbox" 
                      checked 
                      disabled 
                      className="h-4 w-4 rounded border-gray-300 bg-white text-gray-900 accent-gray-900"
                    />
                    <span>
                      <span className="font-semibold text-gray-900">Necessary</span>
                      <span className="block text-xs text-gray-600">Always enabled</span>
                    </span>
                  </label>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                      className="h-4 w-4 rounded border-gray-300 bg-white text-gray-900 accent-gray-900"
                    />
                    <span>
                      <span className="font-semibold text-gray-900">Analytics</span>
                      <span className="block text-xs text-gray-600">Usage statistics</span>
                    </span>
                  </label>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(event) => setPreferences((current) => ({ ...current, marketing: event.target.checked }))}
                      className="h-4 w-4 rounded border-gray-300 bg-white text-gray-900 accent-gray-900"
                    />
                    <span>
                      <span className="font-semibold text-gray-900">Marketing</span>
                      <span className="block text-xs text-gray-600">Personalized ads</span>
                    </span>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={savePreferences}
                  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
                >
                  Save Preferences
                </button>
              </div>
            )}

            {/* Footer Link */}
            <p className="text-xs text-gray-500">
              <a href="/privacy-policy" className="text-gray-700 underline hover:text-gray-900">Privacy Policy</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}