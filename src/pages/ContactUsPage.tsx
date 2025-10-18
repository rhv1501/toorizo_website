import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import TrustIndicators from "../components/TrustIndicators";

const ContactUsPage = () => {
  // Hero carousel slides
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Get in Touch",
      subtitle: "We're here to help you plan your perfect journey",
    },
  ];

  return (
    <Layout>
      {/* Hero Section 
      <HeroCarousel slides={heroSlides} /> */}

      {/* Contact Section */}
      <section className="section-padding toorizo-container pt-24">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Have questions about our services or ready to start planning your next
          adventure? Our travel experts are here to help. Fill out the form
          below, and we'll get back to you shortly.
        </p>

        {/* Trust Indicators */}
        <TrustIndicators />

        <div className="-mt-2">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding toorizo-container">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll delay-100">
            <h3 className="text-xl font-playfair mb-4">
              How far in advance should I book my trip?
            </h3>
            <p className="text-gray-600 mb-8">
              For optimal availability and planning, we recommend booking at
              least 3-6 months in advance, especially for peak travel seasons or
              popular destinations. However, we can also accommodate last-minute
              bookings with our expedited planning services.
            </p>

            <h3 className="text-xl font-playfair mb-4">
              What is included in your travel packages?
            </h3>
            <p className="text-gray-600 mb-8">
              Our travel packages are customized based on your preferences, but
              typically include accommodations, transportation, guided tours,
              and selected meals. We can also arrange for special experiences,
              restaurant reservations, and other services upon request.
            </p>

            <h3 className="text-xl font-playfair mb-4">
              Do you offer travel insurance?
            </h3>
            <p className="text-gray-600">
              Yes, we highly recommend travel insurance for all our clients. We
              can arrange comprehensive coverage that includes trip
              cancellation, medical emergencies, lost luggage, and other
              unexpected events.
            </p>
          </div>

          <div className="animate-on-scroll delay-200">
            <h3 className="text-xl font-playfair mb-4">
              How do your cab services work?
            </h3>
            <p className="text-gray-600 mb-8">
              Our premium transportation services can be booked as part of your
              travel package or separately. We offer airport transfers, daily
              hire, sightseeing tours, and more with professional chauffeurs and
              luxury vehicles in destinations worldwide.
            </p>

            <h3 className="text-xl font-playfair mb-4">
              Can you accommodate special dietary requirements?
            </h3>
            <p className="text-gray-600 mb-8">
              Absolutely! We ensure that all dietary restrictions and
              preferences are communicated to hotels, restaurants, and tour
              operators in advance to provide a seamless dining experience
              throughout your journey.
            </p>

            <h3 className="text-xl font-playfair mb-4">
              What if I need to cancel or change my travel plans?
            </h3>
            <p className="text-gray-600">
              We understand that plans can change. Our flexible booking policies
              allow for modifications to your itinerary, although cancellation
              terms vary based on timing and specific service providers. Our
              team will work with you to minimize any potential penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section - Moved below FAQ */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4611760448186!2d80.19947897519958!3d13.007812117506815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674a0fbcccc1%3A0xfd3b530aeeb19037!2sEkkattuthangal%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710994547887!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Toorizo Location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default ContactUsPage;
