export const CONSENT_STORAGE_KEY = "bonsai-cookie-consent";
export const CONSENT_EVENT = "bonsai-consent-change";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  other: boolean;
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (
      typeof parsed?.necessary === "boolean" &&
      typeof parsed?.analytics === "boolean" &&
      typeof parsed?.other === "boolean"
    ) {
      return { necessary: true, analytics: parsed.analytics, other: parsed.other };
    }
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
