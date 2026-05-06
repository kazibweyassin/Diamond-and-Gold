export type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_OPTIONS = {
  path: '/',
  // 365 days
  days: 365,
};

export function setCookie(name: string, value: string, days = DEFAULT_OPTIONS.days, path = DEFAULT_OPTIONS.path) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const sameSite = secure ? 'None' : 'Lax';
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}; SameSite=${sameSite}${secure ? '; Secure' : ''}`;
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\\[\\]\\/+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export function eraseCookie(name: string, path = DEFAULT_OPTIONS.path) {
  document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=${path};`;
}

export const CONSENT_COOKIE = 'dca-cookie-consent';

export function setConsentCookie(choice: 'accepted' | 'rejected' | 'custom', preferences: ConsentPreferences) {
  try {
    setCookie(CONSENT_COOKIE, JSON.stringify({ choice, preferences }));
  } catch (e) {
    // ignore
  }
}

export function getConsentFromCookie(): { choice: string | null; preferences: ConsentPreferences | null } {
  try {
    const raw = getCookie(CONSENT_COOKIE);
    if (!raw) return { choice: null, preferences: null };
    const parsed = JSON.parse(raw);
    return { choice: parsed.choice ?? null, preferences: parsed.preferences ?? null };
  } catch {
    return { choice: null, preferences: null };
  }
}
