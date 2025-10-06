import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { Heart, Users, Car } from "lucide-react";

const PackagesPage = () => {
  const destinations = [
    {
      name: "Ooty",
      state: "Tamil Nadu",
      image:
        "https://images.pexels.com/photos/30088193/pexels-photo-30088193/free-photo-of-lush-green-terraced-fields-in-ooty-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Queen of Hill Stations with tea gardens and scenic views",
    },
    {
      name: "Coorg",
      state: "Karnataka",
      image:
        "https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Scotland of India with coffee plantations and waterfalls",
    },
    {
      name: "Kodaikanal",
      state: "Tamil Nadu",
      image:
        "https://images.pexels.com/photos/12791178/pexels-photo-12791178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Princess of Hill Stations with misty valleys and lakes",
    },
    {
      name: "Chikmagalur",
      state: "Karnataka",
      image:
        "https://images.pexels.com/photos/12880439/pexels-photo-12880439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Coffee land of Karnataka with scenic mountains",
    },
    {
      name: "Wayanad",
      state: "Kerala",
      image:
        "https://images.pexels.com/photos/27745632/pexels-photo-27745632/free-photo-of-a-monkey-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Green paradise with wildlife and spice plantations",
    },
    {
      name: "Mysore",
      state: "Karnataka",
      image:
        "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Cultural capital with royal palaces and heritage",
    },
  ];

  const packageTypes = [
    {
      id: "honeymoon",
      title: "Honeymoon Package",
      icon: <Heart className="h-8 w-8" />,
      description:
        "Romantic getaways designed for couples seeking intimate moments and luxurious experiences",
      features: [
        "Private candlelight dinners",
        "Couples spa treatments",
        "Romantic room decorations",
        "Sunset/sunrise tours",
        "Photography sessions",
      ],
      color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    },
    {
      id: "family",
      title: "Family Package",
      icon: <Users className="h-8 w-8" />,
      description:
        "Perfect family adventures with activities suitable for all ages and comfortable accommodations",
      features: [
        "Family-friendly accommodations",
        "Kid-friendly activities",
        "Flexible itineraries",
        "Safety measures",
        "Group meal arrangements",
      ],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    },
    {
      id: "group",
      title: "Group Package",
      icon: <Car className="h-8 w-8" />,
      description:
        "Customized packages for groups of 10+ people with special rates and personalized services",
      features: [
        "Group discounts available",
        "Dedicated tour coordinator",
        "Customizable itineraries",
        "Private transportation",
        "Group activities & entertainment",
      ],
      color: "bg-green-50 border-green-200 hover:bg-green-100",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroVideo
        videoSrc="/destinations.mp4"
        title="Travel Packages"
        subtitle="Discover our curated travel experiences designed for every type of traveler"
      />

      {/* Packages Overview */}
      <section className="section-padding bg-white">
        <div className="toorizo-container">
          <SectionTitle>Choose Your Perfect Package</SectionTitle>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you're planning a romantic honeymoon, family vacation, or
            group adventure, we have specially crafted packages to make your
            journey unforgettable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packageTypes.map((packageType) => (
              <div
                key={packageType.id}
                className={`p-8 rounded-xl border-2 transition-all duration-300 ${packageType.color}`}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-white rounded-full shadow-lg">
                    {packageType.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-playfair text-center mb-4">
                  {packageType.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {packageType.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {packageType.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-toorizo-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-toorizo-cream">
        <div className="toorizo-container">
          <SectionTitle>Select Your Destination</SectionTitle>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Choose from our handpicked destinations across South India. Each
            destination offers all three package types with customized
            experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                to={`/packages/${destination.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-playfair mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-2">
                      {destination.state}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-toorizo-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                      3 Packages Available
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="toorizo-container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle>Ready to Start Your Journey?</SectionTitle>
            <p className="text-lg text-gray-600 mb-8">
              Our travel experts are standing by to help you choose the perfect
              package and customize it to your needs. Get in touch today!
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

export default PackagesPage;
