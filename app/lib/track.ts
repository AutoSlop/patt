// Simple analytics layer — logs to console + pushes to window.dataLayer
// for future GTM / GA4 integration.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    trackEvent: typeof track;
  }
}

export function track(event: string, data?: Record<string, unknown>) {
  const payload = { event, ...data, timestamp: new Date().toISOString() };

  // Console log for debugging
  console.log("[PATT Track]", payload);

  // Push to dataLayer for GTM / GA4
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}
