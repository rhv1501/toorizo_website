import { useState } from "react";
import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";
import SectionTitle from "../components/SectionTitle";
import CabBookingModal from "../components/CabBookingModal";
import CabBookingForm from "../components/CabBookingForm";
import { Tab } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";
import {
  Car,
  MapPin,
  Clock,
  Plane,
  Landmark,
  CalendarRange,
  PlaneTakeoff,
} from "lucide-react";

interface BookingData {
  tripType: "one-way" | "round-trip";
  from: string;
  to: string;
  date: string;
  time: string;
  days?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CabServicesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentBookingData, setCurrentBookingData] =
    useState<BookingData | null>(null);
  const navigate = useNavigate();

  const handleVehicleSelection = (bookingData: BookingData) => {
    setCurrentBookingData(bookingData);
    setIsBookingModalOpen(true);
  };

  const heroTitle = "Premium Transportation Services";
  const heroSubtitle =
    "Travel in comfort and style with our luxury cab services";
  const cabVideo = "/Cab.mp4";

  const categories = [
    {
      name: "Airport Transfers",
      icon: <Plane className="h-5 w-5" />,
      description:
        "Hassle-free pickup and drop services to and from airports across South India.",
      image:
        "https://images.pexels.com/photos/730778/pexels-photo-730778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Meet and greet service at airport arrivals",
        "Assistance with luggage handling",
        "Flight tracking to accommodate delayed flights",
        "Fixed pricing with no hidden charges",
        "24/7 availability",
        "Clean, comfortable vehicles",
      ],
    },
    {
      name: "Sightseeing Tours",
      icon: <Landmark className="h-5 w-5" />,
      description:
        "Guided tours to explore the beautiful sights and destinations across South India.",
      image:
        "https://images.pexels.com/photos/31719930/pexels-photo-31719930/free-photo-of-scenic-lake-view-with-cherry-blossoms-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Customizable itineraries based on your interests",
        "Professional drivers with local knowledge",
        "Comfortable, air-conditioned vehicles",
        "Optional professional guides available",
        "Flexible scheduling",
        "Special packages for popular tourist routes",
      ],
    },
    {
      name: "Outstation Trips",
      icon: <MapPin className="h-5 w-5" />,
      description:
        "Multi-day cab services for exploring destinations beyond city limits.",
      image: "https://images.unsplash.com/photo-1594495894542-a46cc73e081a",
      features: [
        "One-way and round trip options",
        "Multi-city tour packages",
        "Experienced drivers familiar with intercity routes",
        "Accommodation assistance for drivers on multi-day trips",
        "Unlimited kilometers on select packages",
        "Flexible itinerary changes during the journey",
      ],
    },
    {
      name: "Package Tours",
      icon: <CalendarRange className="h-5 w-5" />,
      description:
        "All-inclusive tour packages with transportation, accommodation, and activities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      features: [
        "Comprehensive tour packages to popular destinations",
        "Hotel bookings included",
        "Pre-planned sightseeing itineraries",
        "Entrance fees to attractions included",
        "Optional meal packages",
        "Experienced guides for enhanced experiences",
      ],
    },
    {
      name: "Corporate Travel",
      icon: <PlaneTakeoff className="h-5 w-5" />,
      description:
        "Reliable transportation solutions for business travelers and corporate events.",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6",
      features: [
        "Corporate account management",
        "Executive class vehicles",
        "Punctual pickup and drop services",
        "Airport transfers for executives",
        "Event transportation planning",
        "Billing and reporting for corporate accounts",
      ],
    },
  ];

  const goToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigate("/contact-us");
  };

  return (
    <Layout>
      <HeroVideo
        title={heroTitle}
        subtitle={heroSubtitle}
        videoSrc={cabVideo}
        fullHeight={false}
      />

      {/* Compact Cab Booking Section - Right after hero */}
      <section className="py-8 bg-gradient-to-r from-toorizo-gold/5 to-toorizo-cream/50">
        <div className="toorizo-container">
          <div className="text-center mb-6">
            <h3 className="text-xl font-playfair text-toorizo-dark mb-2">
              Quick Cab Booking
            </h3>
            <p className="text-sm text-gray-600">
              Book your cab in just a few steps
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <CabBookingForm onVehicleSelect={handleVehicleSelection} />
          </div>
        </div>
      </section>

      <section className="section-padding toorizo-container">
        <SectionTitle>Our Cab Services</SectionTitle>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Experience the comfort and convenience of our premium transportation
          services. We offer a range of options to suit your travel needs,
          whether it's airport transfers, sightseeing tours, or multi-day
          excursions.
        </p>

        <div className="max-w-5xl mx-auto">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
              {categories.map((category, catIdx) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "ring-white ring-opacity-60 ring-offset-2 focus:outline-none",
                      selected
                        ? "bg-toorizo-gold text-white shadow"
                        : "text-gray-700 hover:bg-white/[0.12] hover:text-toorizo-gold"
                    )
                  }
                >
                  <div className="flex flex-col items-center justify-center">
                    <div>{category.icon}</div>
                    <div className="mt-1 text-xs sm:text-sm">
                      {category.name}
                    </div>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 focus:outline-none"
                  )}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div
                        className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={goToContact}
                        tabIndex={0}
                        role="button"
                        aria-label={"Go to contact page"}
                        style={{ outline: "none" }}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair text-toorizo-dark mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      <h4 className="font-medium text-toorizo-dark mb-3">
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600"
                          >
                            <Car className="h-5 w-5 text-toorizo-gold mr-2 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <button
                          className="bg-toorizo-gold text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center w-full sm:w-auto"
                          onClick={goToContact}
                          type="button"
                        >
                          Book This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      <section className="section-padding bg-toorizo-cream">
        <div className="toorizo-container">
          <SectionTitle>Our Fleet</SectionTitle>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We maintain a diverse fleet of well-maintained vehicles to suit your
            specific needs, from economical options to premium luxury cars.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // economy, suv, luxury
              {
                src: "https://images.pexels.com/photos/117538/pexels-photo-117538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Economy Car",
                title: "Sedans",
                desc: "Affordable, fuel-efficient vehicles perfect for city travel and small groups. Ideal for airport transfers and short trips.",
              },
              {
                src: "https://images.pexels.com/photos/104401/pexels-photo-104401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "SUVs",
                title: "SUVs",
                desc: "Spacious and comfortable vehicles suitable for families and longer journeys. Perfect for outstation trips and hill stations.",
              },
              {
                src: "https://images.pexels.com/photos/11782304/pexels-photo-11782304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                alt: "Luxury Cars",
                title: "Travelers",
                desc: "Premium vehicles offering exceptional comfort and style. Ideal for corporate travel, special occasions, and VIP transfers.",
              },
            ].map((car, idx) => (
              <div
                key={car.title}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={goToContact}
                tabIndex={0}
                role="button"
                aria-label={`Go to contact page for ${car.title}`}
                style={{ outline: "none" }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={car.src}
                    alt={car.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair text-toorizo-dark mb-2">
                    {car.title}
                  </h3>
                  <p className="text-gray-600">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Cab Booking Modal */}
      <CabBookingModal
        open={isBookingModalOpen}
        onOpenChange={setIsBookingModalOpen}
        bookingData={currentBookingData}
      />
    </Layout>
  );
};

export default CabServicesPage;
