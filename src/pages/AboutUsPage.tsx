import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { Award, Clock, Heart, Users } from "lucide-react";
import ChatButton from "../components/ChatButton";

const AboutUsPage = () => {
  // Why choose us values
  const values = [
    {
      icon: <Award className="h-12 w-12 text-toorizo-gold mb-4" />,
      title: "Expertise",
      description:
        "Our team consists of seasoned travel professionals with extensive knowledge of South Indian destinations and a passion for creating exceptional travel experiences.",
    },
    {
      icon: <Heart className="h-12 w-12 text-toorizo-gold mb-4" />,
      title: "Personalized Service",
      description:
        "We take the time to understand your preferences, interests, and travel style to craft a journey that's uniquely yours. Every detail is tailored to enhance your experience.",
    },
    {
      icon: <Clock className="h-12 w-12 text-toorizo-gold mb-4" />,
      title: "24/7 Support",
      description:
        "Travel with confidence knowing our team is available around the clock to assist with any requests or unexpected situations that may arise during your journey.",
    },
    {
      icon: <Users className="h-12 w-12 text-toorizo-gold mb-4" />,
      title: "Local Connections",
      description:
        "Our established relationships with local providers ensure authentic experiences, exclusive access, and the highest level of service throughout your trip.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroVideo
        title="About Toorizo"
        subtitle="Crafting unforgettable travel experiences since 2020"
        videoSrc="/about.mp4"
        fullHeight={false}
      />

      {/* About Company Section */}
      <section className="section-padding toorizo-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll delay-100">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Discover <span className="text-toorizo-gold">Toorizo</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Toorizo is a premier travel company specializing in crafting bespoke journeys throughout South India. Founded in 2020, we've quickly established ourselves as leaders in luxury travel experiences that showcase the rich cultural heritage, stunning landscapes, and authentic experiences that make South India a truly special destination.
            </p>
            <p className="text-gray-600 mb-4">
              Our philosophy centers on creating deeply personalized travel experiences that go beyond the ordinary. We believe that travel should be transformative, connecting you with the heart and soul of a destination while providing the comfort and exclusivity that discerning travelers expect.
            </p>
            <p className="text-gray-600">
              Whether you're seeking a serene retreat in the misty hills of Ooty, an immersive cultural experience in historic Mysore, or an adventure through the lush landscapes of Coorg, our team will craft a journey that exceeds your expectations.
            </p>
          </div>
          <div className="animate-on-scroll delay-200">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59"
              alt="Toorizo travel experience"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-toorizo-cream">
        <div className="toorizo-container">
          <SectionTitle>Why Choose Us</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center animate-on-scroll"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-playfair mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding toorizo-container">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Our Commitment to You</SectionTitle>
          <p className="text-lg text-gray-600 mb-8">
            At Toorizo, we're committed to exceeding your expectations at every step of your journey. We promise:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="animate-on-scroll delay-100">
              <div className="h-20 w-20 bg-toorizo-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-playfair text-toorizo-gold">01</span>
              </div>
              <h3 className="text-xl font-playfair mb-2">Excellence</h3>
              <p className="text-gray-600">
                Uncompromising quality in every aspect of your travel experience
              </p>
            </div>
            <div className="animate-on-scroll delay-200">
              <div className="h-20 w-20 bg-toorizo-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-playfair text-toorizo-gold">02</span>
              </div>
              <h3 className="text-xl font-playfair mb-2">Integrity</h3>
              <p className="text-gray-600">
                Transparent communication and honest recommendations
              </p>
            </div>
            <div className="animate-on-scroll delay-300">
              <div className="h-20 w-20 bg-toorizo-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-playfair text-toorizo-gold">03</span>
              </div>
              <h3 className="text-xl font-playfair mb-2">Care</h3>
              <p className="text-gray-600">
                Attentive service that anticipates your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-white">
        <div className="toorizo-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>Ready to Plan Your Next Adventure?</SectionTitle>
            <p className="text-lg mb-8 text-black">
              Our travel consultants are ready to help you create the perfect
              itinerary for your dream destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plan-journey" className="btn-primary">
                Plan Your Journey
              </Link>
              <Link to="/contact-us" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
