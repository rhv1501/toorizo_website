// Augment Window with analytics types
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Utility for Google Tag Manager event tracking
export const gtmEvent = (event: string, data: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  
  // Safely handle case where GTM is blocked by ad blockers
  if (!window.dataLayer) {
    return;
  }
  
  try {
    window.dataLayer.push({ event, ...data });
    // Console logs removed for production
  } catch (err) {
    // Silently continue - don't break user experience
  }
};

// Generic Google Ads Conversion Tracking (gtag)
export const trackGoogleAdsConversion = (
  sendTo: string,
  options?: { value?: number; currency?: string; callback?: () => void }
) => {
  if (typeof window === "undefined") {
    return;
  }

  // Safely access gtag function (might be blocked by ad blockers)
  const g = window.gtag;
  if (!g) {
    // Still call the callback if provided, to ensure app flow continues
    if (options?.callback) {
      setTimeout(options.callback, 0);
    }
    return;
  }

  const payload: Record<string, unknown> = {
    send_to: sendTo,
    value: options?.value ?? 1.0,
    currency: options?.currency ?? "INR",
  };

  if (options?.callback) (payload as { event_callback?: () => void }).event_callback = options.callback;

  try {
    // Only log that tracking occurred, no sensitive details
    console.log("Google Ads conversion tracking event fired");
    g("event", "conversion", payload);
  } catch (err) {
    // No details in error logs for production
    // Still call the callback if provided
    if (options?.callback) {
      setTimeout(options.callback, 0);
    }
  }
};

// Specific conversion for Contact Form submit button (click-based)
export const trackContactSubmitClickConversion = () =>
  trackGoogleAdsConversion("AW-17000947786/Y4M-CPnElbEbEMrA16o_");

// Meta Pixel Event Tracking
export const trackMetaEvent = (event: string, params: Record<string, unknown> = {}) => {
  // Safe access to fbq (Meta Pixel) - might be blocked by ad-blockers
  const fbq = typeof window !== "undefined" ? window.fbq : undefined;
  
  if (!fbq) {
    return;
  }
  
  try {
    fbq("track", event, params);
    // Console logs removed for production
  } catch (err) {
    // Silently continue - don't break user experience if tracking fails
  }
};
