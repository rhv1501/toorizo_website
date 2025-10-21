import Layout from "../components/Layout";
import { useEffect } from "react";
import { trackMetaEvent } from "../utils/gtm";

const ThankYouPage = () => {
  // Thank you page view tracking (no Google Ads conversion here; click-based conversion fired on submit button)
  useEffect(() => {
    // Track page view in GTM and Meta Pixel
    // Note: This fires a separate Lead event with different parameters than the form submission
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "thank_you_page_view",
        page_path: window.location.pathname,
      });
    }

    // This is intentional for Meta Pixel funnel tracking - it needs both events
    trackMetaEvent("Lead", { page: "thank_you" });
  }, []);

  return (
    <Layout>
      <section className="section-padding toorizo-container text-center">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg py-12">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4 text-toorizo-gold">
            Thank You!
          </h1>
          <p className="text-gray-600 text-lg">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYouPage;
