import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { Heart, Users, Car, Calendar, MapPin, Phone, Star } from "lucide-react";

const DestinationPackagesPage = () => {
  const { destination } = useParams<{ destination: string }>();

  const destinationData = {
    ooty: {
      name: "Ooty",
      fullName: "Ooty, Tamil Nadu",
      image:
        "https://images.pexels.com/photos/30088193/pexels-photo-30088193/free-photo-of-lush-green-terraced-fields-in-ooty-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Known as the 'Queen of Hill Stations', Ooty offers breathtaking landscapes, colonial architecture, and pleasant weather year-round.",
      highlights: [
        "Toy Train Ride",
        "Tea Gardens",
        "Botanical Gardens",
        "Ooty Lake",
        "Rose Garden",
      ],
    },
    coorg: {
      name: "Coorg",
      fullName: "Coorg, Karnataka",
      image:
        "https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "The 'Scotland of India', Coorg is famous for its coffee plantations, misty hills, and rich cultural heritage.",
      highlights: [
        "Coffee Plantations",
        "Abbey Falls",
        "Raja's Seat",
        "Dubare Elephant Camp",
        "Madikeri Fort",
      ],
    },
    kodaikanal: {
      name: "Kodaikanal",
      fullName: "Kodaikanal, Tamil Nadu",
      image:
        "https://images.pexels.com/photos/12791178/pexels-photo-12791178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "The 'Princess of Hill Stations', Kodaikanal enchants visitors with its serene lakes, misty valleys, and pine forests.",
      highlights: [
        "Kodai Lake",
        "Coaker's Walk",
        "Bryant Park",
        "Pillar Rocks",
        "Green Valley View",
      ],
    },
    chikmagalur: {
      name: "Chikmagalur",
      fullName: "Chikmagalur, Karnataka",
      image:
        "https://images.pexels.com/photos/12880439/pexels-photo-12880439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "The birthplace of Indian coffee, Chikmagalur offers stunning mountain views, lush forests, and aromatic coffee estates.",
      highlights: [
        "Mullayanagiri Peak",
        "Coffee Estates",
        "Hebbe Falls",
        "Baba Budangiri",
        "Kemmanagundi",
      ],
    },
    wayanad: {
      name: "Wayanad",
      fullName: "Wayanad, Kerala",
      image:
        "https://images.pexels.com/photos/27745632/pexels-photo-27745632/free-photo-of-a-monkey-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A green paradise blessed with spice plantations, wildlife sanctuaries, and pristine waterfalls.",
      highlights: [
        "Banasura Sagar Dam",
        "Edakkal Caves",
        "Soochipara Falls",
        "Wildlife Sanctuary",
        "Spice Plantations",
      ],
    },
    mysore: {
      name: "Mysore",
      fullName: "Mysore, Karnataka",
      image:
        "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "The cultural capital of Karnataka, known for its royal heritage, magnificent palaces, and vibrant festivals.",
      highlights: [
        "Mysore Palace",
        "Chamundi Hills",
        "Brindavan Gardens",
        "St. Philomena's Church",
        "Devaraja Market",
      ],
    },
  };

  const currentDestination =
    destinationData[destination as keyof typeof destinationData];

  if (!currentDestination) {
    return (
      <Layout>
        <div className="section-padding toorizo-container text-center pt-24">
          <h1 className="text-3xl font-playfair mb-4">Destination Not Found</h1>
          <Link to="/packages" className="btn-primary">
            Back to Packages
          </Link>
        </div>
      </Layout>
    );
  }

  const packages = [
    {
      id: "honeymoon",
      title: "Honeymoon Package",
      icon: <Heart className="h-6 w-6" />,
      duration: "3-5 Days",
      description: `Romantic ${currentDestination.name} getaway designed for couples`,
      features: [
        "Romantic candlelight dinner",
        "Couples spa treatment",
        "Private sightseeing tours",
        "Flower bed decoration",
        "Complimentary cake & wine",
        "Professional couple photoshoot",
      ],
      inclusions: [
        "Luxury accommodation with valley/mountain view",
        "Daily breakfast & one romantic dinner",
        "Private cab for sightseeing",
        "All applicable taxes",
      ],
      color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    },
    {
      id: "family",
      title: "Family Package",
      icon: <Users className="h-6 w-6" />,
      duration: "4-6 Days",
      description: `Perfect family vacation to explore ${currentDestination.name} together`,
      features: [
        "Family-friendly accommodations",
        "Kid-friendly activity planning",
        "Flexible meal timings",
        "Safety measures & first aid",
        "Educational tour guides",
        "Family game activities",
      ],
      inclusions: [
        "Comfortable family rooms/suites",
        "Daily breakfast & lunch",
        "Shared cab for group sightseeing",
        "Entry fees to major attractions",
      ],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    },
    {
      id: "group",
      title: "Group Package (10+ People)",
      icon: <Car className="h-6 w-6" />,
      duration: "3-7 Days",
      description: `Special group rates for ${currentDestination.name} with customized itineraries`,
      features: [
        "Group discount up to 20%",
        "Dedicated tour coordinator",
        "Customizable itinerary",
        "Group photography sessions",
        "Team building activities",
        "Welcome & farewell party",
      ],
      inclusions: [
        "Budget to premium accommodation options",
        "Group meal arrangements",
        "Private bus/tempo traveler",
        "Professional tour guide",
      ],
      color: "bg-green-50 border-green-200 hover:bg-green-100",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentDestination.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-playfair mb-4">
            {currentDestination.fullName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Choose Your Perfect Package
          </p>
        </div>
      </section>

      {/* Destination Overview */}
      <section className="section-padding bg-white">
        <div className="toorizo-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <SectionTitle>About {currentDestination.name}</SectionTitle>
            <p className="text-lg text-gray-600 mb-8">
              {currentDestination.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {currentDestination.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-toorizo-gold/10 text-toorizo-gold px-4 py-2 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-toorizo-cream">
        <div className="toorizo-container">
          <SectionTitle>Available Packages</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 rounded-xl border-2 transition-all duration-300 ${pkg.color} h-full flex flex-col`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full shadow-lg mr-4">
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair">{pkg.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3">Package Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <Star className="h-3 w-3 text-toorizo-gold mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-3">Inclusions:</h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-toorizo-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/contact-us?destination=${encodeURIComponent(
                    currentDestination.fullName
                  )}&package=${encodeURIComponent(
                    pkg.title
                  )}&duration=${encodeURIComponent(pkg.duration)}`}
                  className="w-full bg-toorizo-gold text-white py-3 px-6 rounded-lg font-medium text-center hover:bg-toorizo-gold/90 transition-colors duration-300 block"
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="toorizo-container">
          <div className="max-w-4xl mx-auto text-center bg-toorizo-cream/50 p-12 rounded-2xl">
            <h2 className="text-3xl font-playfair mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our travel experts can customize any package according to your
              preferences, budget, and special requirements. Get in touch for a
              personalized quote!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/contact-us?destination=${encodeURIComponent(
                  currentDestination.fullName
                )}&package=Custom Package&inquiry=custom`}
                className="btn-primary"
              >
                <Phone className="h-4 w-4 mr-2" />
                Request Custom Quote
              </Link>
              <Link to="/plan-journey" className="btn-secondary">
                Plan Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationPackagesPage;
