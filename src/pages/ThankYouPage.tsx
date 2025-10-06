import Layout from "../components/Layout";

import { useEffect } from "react";
import { gtmEvent, trackConversion } from "../utils/gtm";

const ThankYouPage = () => {
  // Trigger Google Ads conversion and GTM page view when the Thank You page loads
  useEffect(() => {
    trackConversion();
    gtmEvent("thank_you_page_view");
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
