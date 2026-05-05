'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { SITE } from '@/lib/constants';

const CONSENT_KEY = 'dca-cookie-consent';

type ConsentChoice = 'accepted' | 'custom' | 'rejected' | null;

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

export default function ConsentAndTracking() {
  const [consentChoice, setConsentChoice] = useState<ConsentChoice>(null);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: true,
    marketing: true,
  });
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);

    if (!storedConsent) {
      return;
    }

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

  const bannerVisible = consentChoice === null;
  const analyticsEnabled = consentChoice === 'accepted' || (consentChoice === 'custom' && preferences.analytics);
  const marketingEnabled = consentChoice === 'accepted' || (consentChoice === 'custom' && preferences.marketing);

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
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white/98 p-4 shadow-2xl backdrop-blur-md md:bottom-6 md:p-5">
          <div className="flex flex-col gap-4">
            <p className="max-w-4xl text-sm font-semibold leading-6 text-slate-900 md:text-[15px]">
              We use cookies, tracking technologies, and third-party analytics tools to better understand who is using the website and improve your experience. By using our website you are agreeing to this. Read our privacy policy to find out what cookies are used for and how to change your settings.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-md bg-[#0057d8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0048b3]"
              >
                Accept
              </button>

              <button
                type="button"
                onClick={() => setShowOptions((current) => !current)}
                className="inline-flex items-center justify-center rounded-md bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                aria-expanded={showOptions}
                aria-controls="cookie-options-panel"
              >
                Other options
              </button>
            </div>

            {showOptions && (
              <div id="cookie-options-panel" className="grid gap-0 overflow-hidden rounded-sm border border-slate-300 bg-white md:grid-cols-3">
                <div className="border-b border-slate-300 p-4 md:border-b-0 md:border-r">
                  <label className="flex items-start gap-3 text-sm font-semibold text-slate-900">
                    <input type="checkbox" checked disabled className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0057d8]" />
                    <span>
                      Necessary Cookies
                      <span className="mt-2 block font-normal leading-6 text-slate-800">
                        Some cookies are necessary for the functioning of Diamond Capital Africa&apos;s website.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="border-b border-slate-300 p-4 md:border-b-0 md:border-r">
                  <label className="flex items-start gap-3 text-sm font-semibold text-slate-900">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0057d8]"
                    />
                    <span>
                      Analytics Cookies
                      <span className="mt-2 block font-normal leading-6 text-slate-800">
                        These cookies allow us to understand how people are using the site and improve their experience.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="p-4">
                  <label className="flex items-start gap-3 text-sm font-semibold text-slate-900">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(event) => setPreferences((current) => ({ ...current, marketing: event.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0057d8]"
                    />
                    <span>
                      Marketing Cookies
                      <span className="mt-2 block font-normal leading-6 text-slate-800">
                        We use marketing cookies to better understand our audience and increase effectiveness of outreach.
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {showOptions && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={savePreferences}
                  className="inline-flex items-center justify-center rounded-none bg-[#0057d8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0048b3]"
                >
                  Save preferences
                </button>

                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Reject all
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}