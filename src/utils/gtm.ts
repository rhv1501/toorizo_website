// Utility for Google Tag Manager event tracking
export const gtmEvent = (event: string, data: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event, ...data });
  }
};

// Google Ads Conversion Tracking
export const trackConversion = (conversionValue?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17000947786/-eHWCP32nrAbEMrA16o_',
      value: conversionValue || 1.0,
      currency: 'INR',
    });
  }
};

// Meta Pixel Event Tracking
export const trackMetaEvent = (event: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event, params);
  }
};
