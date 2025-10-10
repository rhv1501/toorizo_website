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
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-toorizo-cream/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll delay-100 space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="inline-block bg-toorizo-gold/10 text-toorizo-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-4">
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair mb-4 md:mb-8 text-toorizo-dark leading-tight">
                Discover{" "}
                <span className="text-toorizo-gold relative">
                  Toorizo
                  <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-toorizo-gold to-transparent opacity-30 rounded-full"></div>
                </span>
              </h2>
              <div className="space-y-3 md:space-y-4 lg:space-y-5 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base md:text-lg">
                  Toorizo is a premier travel company specializing in crafting
                  bespoke journeys throughout South India. Founded in 2020,
                  we've quickly established ourselves as leaders in luxury
                  travel experiences that showcase the rich cultural heritage,
                  stunning landscapes, and authentic experiences that make South
                  India a truly special destination.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Our philosophy centers on creating deeply personalized travel
                  experiences that go beyond the ordinary. We believe that
                  travel should be transformative, connecting you with the heart
                  and soul of a destination while providing the comfort and
                  exclusivity that discerning travelers expect.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Whether you're seeking a serene retreat in the misty hills of
                  Ooty, an immersive cultural experience in historic Mysore, or
                  an adventure through the lush landscapes of Coorg, our team
                  will craft a journey that exceeds your expectations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-4 md:pt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-toorizo-gold rounded-full"></div>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                    Est. 2020
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-toorizo-accent rounded-full"></div>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">
                    South India Specialists
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll delay-200 relative order-1 lg:order-2">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-toorizo-gold/20 to-toorizo-accent/20 rounded-2xl md:rounded-3xl transform rotate-1 md:rotate-3 opacity-50"></div>
              <div className="relative bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
                <img
                  src="/about_us_main.webp"
                  alt="Toorizo travel experience"
                  className="rounded-lg md:rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-toorizo-gold text-toorizo-dark p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <div className="text-lg md:text-xl lg:text-2xl font-bold">
                  500+
                </div>
                <div className="text-xs md:text-sm font-medium whitespace-nowrap">
                  Happy Travelers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-toorizo-cream to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-toorizo-gold/5 rounded-full blur-2xl md:blur-3xl -translate-x-16 md:-translate-x-32 -translate-y-16 md:-translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-toorizo-accent/5 rounded-full blur-2xl md:blur-3xl translate-x-16 md:translate-x-32 translate-y-16 md:translate-y-32"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-block bg-toorizo-gold/10 text-toorizo-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-toorizo-dark mb-3 md:mb-4">
              Why Choose <span className="text-toorizo-gold">Us</span>
            </h2>
            <div className="w-16 md:w-20 lg:w-24 h-0.5 md:h-1 bg-gradient-to-r from-toorizo-gold to-toorizo-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl md:hover:shadow-2xl text-center animate-on-scroll transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border border-white/50"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-toorizo-gold/20 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative bg-toorizo-cream/50 p-3 md:p-4 rounded-full w-fit mx-auto group-hover:bg-toorizo-gold/10 transition-colors duration-300">
                    <div className="[&>svg]:h-8 [&>svg]:w-8 md:[&>svg]:h-10 md:[&>svg]:w-10 lg:[&>svg]:h-12 lg:[&>svg]:w-12">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-playfair mb-3 md:mb-4 text-toorizo-dark group-hover:text-toorizo-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-block bg-toorizo-gold/10 text-toorizo-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Our Commitment
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-toorizo-dark mb-4 md:mb-6">
              Our Commitment to <span className="text-toorizo-gold">You</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              At Toorizo, we're committed to exceeding your expectations at
              every step of your journey. We promise:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-on-scroll delay-100 group">
              <div className="bg-gradient-to-br from-white to-toorizo-cream/30 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 text-center border border-toorizo-gold/10 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                <div className="relative mb-4 md:mb-6">
                  <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-toorizo-gold/20 to-toorizo-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-playfair text-toorizo-gold font-bold">
                      01
                    </span>
                  </div>
                  <div className="absolute top-0 right-4 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-toorizo-gold rounded-full opacity-60"></div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-playfair mb-3 md:mb-4 text-toorizo-dark">
                  Excellence
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Uncompromising quality in every aspect of your travel
                  experience
                </p>
              </div>
            </div>
            <div className="animate-on-scroll delay-200 group">
              <div className="bg-gradient-to-br from-white to-toorizo-cream/30 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 text-center border border-toorizo-gold/10 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                <div className="relative mb-4 md:mb-6">
                  <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-toorizo-gold/20 to-toorizo-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-playfair text-toorizo-gold font-bold">
                      02
                    </span>
                  </div>
                  <div className="absolute top-0 right-4 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-toorizo-accent rounded-full opacity-60"></div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-playfair mb-3 md:mb-4 text-toorizo-dark">
                  Integrity
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Transparent communication and honest recommendations
                </p>
              </div>
            </div>
            <div className="animate-on-scroll delay-300 group">
              <div className="bg-gradient-to-br from-white to-toorizo-cream/30 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 text-center border border-toorizo-gold/10 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                <div className="relative mb-4 md:mb-6">
                  <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-toorizo-gold/20 to-toorizo-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-playfair text-toorizo-gold font-bold">
                      03
                    </span>
                  </div>
                  <div className="absolute top-0 right-4 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-toorizo-dark/20 rounded-full opacity-60"></div>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-playfair mb-3 md:mb-4 text-toorizo-dark">
                  Care
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Attentive service that anticipates your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-toorizo-dark via-toorizo-accent to-toorizo-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 md:top-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-toorizo-gold/10 rounded-full blur-lg md:blur-xl"></div>
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-toorizo-gold/5 rounded-full blur-xl md:blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-toorizo-gold/5 rounded-full blur-2xl md:blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-toorizo-gold/20 text-toorizo-gold px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 backdrop-blur-sm">
              Let's Start Your Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair mb-4 md:mb-6 leading-tight px-4">
              Ready to Plan Your Next{" "}
              <span className="text-toorizo-gold">Adventure?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
              Our travel consultants are ready to help you create the perfect
              itinerary for your dream destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link
                to="/plan-journey"
                className="w-full sm:w-auto group bg-toorizo-gold hover:bg-white text-toorizo-dark hover:text-toorizo-dark px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Plan Your Journey
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/contact-us"
                className="w-full sm:w-auto group border-2 border-white/30 hover:border-toorizo-gold text-white hover:text-toorizo-gold px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 text-white/60 px-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-toorizo-gold">
                  500+
                </div>
                <div className="text-xs md:text-sm">Happy Travelers</div>
              </div>
              <div className="hidden sm:block w-px h-6 md:h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-toorizo-gold">
                  4.9★
                </div>
                <div className="text-xs md:text-sm">Average Rating</div>
              </div>
              <div className="hidden sm:block w-px h-6 md:h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-toorizo-gold">
                  24/7
                </div>
                <div className="text-xs md:text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
