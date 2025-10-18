import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";
import MagicalMemories from "../components/MagicalMemories";
import HorizontalScroll from "../components/HorizontalScroll";
import SectionTitle from "../components/SectionTitle";
import TestimonialCarousel from "../components/TestimonialCarousel";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import ooty from "../images/ScenicLandscapes2.jpeg";
import coorg from "../images/Plantation2.jpg";
import kodaikanal from "../images/ForestExploration.jpeg";
import chikmagalur from "../images/Temple1.jpeg";
import wayanad from "../images/Lakesandwaterfalls1.jpeg";
import mysore from "../images/MudumalaiTigerReserve3.jpg";
import mudumalai from "../images/MudumalaiTigerReserve1.avif";
import elephant from "../images/ElephantCamp2.jpeg";

const HomePage = () => {
  const navigate = useNavigate();
  const [showSouthModal, setShowSouthModal] = useState(false);
  const [showNorthModal, setShowNorthModal] = useState(false);

  const handleBookNow = () => {
    navigate("/contact-us");
  };

  // Hero carousel slides with video
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
      title: "Discover the World with Toorizo",
      subtitle: "Luxury travel experiences tailored to your desires",
      ctaText: "Explore Destinations",
      ctaLink: "/destinations",
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-traveling-on-the-road-with-mountain-views-32809-large.mp4",
      title: "Unforgettable Journeys",
      subtitle: "Create memories that last a lifetime",
      ctaText: "See Our Services",
      ctaLink: "/cab-services",
    },
    {
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4",
      title: "Experience Excellence",
      subtitle: "Premium travel services with attention to every detail",
      ctaText: "Learn About Us",
      ctaLink: "/about-us",
    },
  ];

  const destinations = [
    {
      title: "Ooty",
      image: ooty,
      link: "/packages/ooty",
      span: "col-span-2",
    },
    {
      title: "Coorg",
      image: coorg,
      link: "/packages/coorg",
      span: "col-span-2",
    },
    {
      title: "Kodaikanal",
      image: kodaikanal,
      link: "/packages/kodaikanal",
      span: "col-span-1",
    },
    {
      title: "Chikmagalur",
      image: chikmagalur,
      link: "/packages/chikmagalur",
      span: "col-span-1",
    },
    {
      title: "Wayanad",
      image: wayanad,
      link: "/packages/wayanad",
      span: "col-span-1",
    },
    {
      title: "Mysore",
      image: mysore,
      link: "/packages/mysore",
      span: "col-span-1",
    },
    {
      title: "Shillong",
      image:
        "https://images.pexels.com/photos/7626303/pexels-photo-7626303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/shillong",
      span: "col-span-2",
    },
    {
      title: "Mudumalai Tiger Reserve",
      image: mudumalai,
      link: "/contact-us",
      span: "col-span-2",
    },
    {
      title: "Elephant Camp",
      image: elephant,
      link: "/contact-us",
      span: "col-span-2",
    },
  ];

  // Mobile grouping data for regions
  const southLocations = [
    "Ooty",
    "Coorg",
    "Kodaikanal",
    "Chikmagalur",
    "Wayanad",
    "Mysore",
  ];
  const northLocations = ["Shillong"];

  // Testimonials with Indian names
  const testimonials = [
    {
      id: 1,
      quote:
        "Our trip to Coorg arranged by Toorizo was absolutely magical. Every detail was taken care of, from the luxury accommodation to the private tours. I couldn't have asked for a better experience.",
      author: "Priya Sharma",
      location: "Chennai, India",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The Kodaikanal experience was beyond our expectations. Our guide was knowledgeable and personable, and the accommodations were top-notch. Toorizo made our dream vacation come true!",
      author: "Amit & Meera Patel",
      location: "Bangalore, India",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Toorizo made our family trip to Wayanad unforgettable. The local experiences and food recommendations were spot on. We felt so well taken care of!",
      author: "Lakshmi Narayanan",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "I booked a honeymoon package to Mysore and Ooty through Toorizo. Everything was seamless, from the cab service to the beautiful stays. Highly recommended!",
      author: "Sathish Kumar",
      location: "Salem, Tamil Nadu",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "Our group of friends had a blast exploring Chikmagalur. The coffee estate tour was a highlight. Thank you Toorizo for the wonderful arrangements!",
      author: "Divya Ramesh",
      location: "Bangalore, Karnataka",
      rating: 4,
    },
    {
      id: 7,
      quote:
        "I was impressed by the professionalism and warmth of the Toorizo team. Our Madurai temple tour was well organized and stress-free.",
      author: "Arun Prakash",
      location: "Madurai, Tamil Nadu",
      rating: 5,
    },
    {
      id: 8,
      quote:
        "Traveling with elderly parents can be challenging, but Toorizo made it easy for us in Kodaikanal. The driver was courteous and the hotel was very comfortable.",
      author: "Revathi Srinivasan",
      location: "Tiruchirapalli, Tamil Nadu",
      rating: 5,
    },
  ];

  return (
    <Layout>
      <div className="block md:hidden" style={{ marginBottom: "1rem" }}>
        <div className="grid grid-cols-1 gap-4 px-4 pt-20">
          {/* South India grouped card */}
          <div className="relative overflow-hidden rounded-lg h-56">
            <img
              src="/Backwaters1.jpeg"
              alt="South India"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
              <h2 className="text-white text-2xl font-playfair">South India</h2>
              <p className="text-white/90 text-xs mt-2">
                {southLocations.join(" • ")}
              </p>
              <button
                onClick={() => setShowSouthModal(true)}
                className="mt-3 inline-block bg-toorizo-gold text-white font-bold py-2 px-4 rounded-lg text-sm"
              >
                Know More
              </button>
            </div>
          </div>

          {/* North India grouped card */}
          <div className="relative overflow-hidden rounded-lg h-56">
            <img
              src="/BoatHouse1.jpeg"
              alt="North India"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
              <h2 className="text-white text-2xl font-playfair">North India</h2>
              <p className="text-white/90 text-xs mt-2">
                {northLocations.join(" • ")}
              </p>
              <button
                onClick={() => setShowNorthModal(true)}
                className="mt-3 inline-block bg-toorizo-gold text-white font-bold py-2 px-4 rounded-lg text-sm"
              >
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* South India Modal */}
        <Dialog open={showSouthModal} onOpenChange={setShowSouthModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-playfair text-xl">
                South India
              </DialogTitle>
              <DialogDescription>
                Explore our South India destinations. Tap a location to view
                packages.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2 space-y-2">
              {southLocations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center justify-between gap-3 border rounded-md p-3"
                >
                  <span className="text-sm font-medium">{loc}</span>
                  <button
                    onClick={() => {
                      setShowSouthModal(false);
                      navigate(`/packages/${loc.toLowerCase()}`);
                    }}
                    className="bg-toorizo-gold text-white font-semibold py-1.5 px-3 rounded-md text-xs"
                  >
                    View Packages
                  </button>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* North India Modal */}
        <Dialog open={showNorthModal} onOpenChange={setShowNorthModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-playfair text-xl">
                North India
              </DialogTitle>
              <DialogDescription>
                Explore our North India destination.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2 space-y-2">
              {northLocations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center justify-between gap-3 border rounded-md p-3"
                >
                  <span className="text-sm font-medium">{loc}</span>
                  <button
                    onClick={() => {
                      setShowNorthModal(false);
                      navigate(`/packages/${loc.toLowerCase()}`);
                    }}
                    className="bg-toorizo-gold text-white font-semibold py-1.5 px-3 rounded-md text-xs"
                  >
                    View Packages
                  </button>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop hero video */}
      <div className="hidden md:block">
        <HeroVideo
          title="Discover the World with Toorizo"
          subtitle="Luxury travel experiences tailored to your desires"
          videoSrc="/home.mp4"
          fullHeight={true}
          showBookNowButton={true}
          onBookNow={handleBookNow}
        />
      </div>

      <MagicalMemories />

      <div className="md:block">
        <HorizontalScroll />
      </div>

      {/* Chat Dialog 
      <ChatDialog open={showChatDialog} onClose={() => setShowChatDialog(false)} /> */}

      <section
        className="section-padding"
        style={{ background: "linear-gradient(to bottom, #F9FAFB, #F8F1F1)" }}
      >
        <div className="toorizo-container">
          <div className="hidden md:block">
            <SectionTitle>Activities</SectionTitle>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {destinations.map((destination, index) => (
              <a
                key={destination.title}
                href={destination.link}
                className={`relative overflow-hidden group 
                ${
                  index < 2
                    ? "sm:col-span-1 md:col-span-2"
                    : index >= 2 && index < 6
                    ? "sm:col-span-1"
                    : "sm:col-span-1 md:col-span-2"
                } 
                ${
                  index < 2
                    ? "h-[250px] sm:h-[300px] md:h-[400px]"
                    : index >= 2 && index < 6
                    ? "h-[200px] sm:h-[250px] md:h-[300px]"
                    : "h-[200px] sm:h-[230px] md:h-[250px]"
                }`}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                  <h3 className="absolute bottom-6 left-6 text-white text-xl sm:text-2xl font-playfair">
                    {destination.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages CTA Section */}
      <section className="section-padding bg-toorizo-gold text-white">
        <div className="toorizo-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Discover Our Curated Travel Packages
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you're planning a romantic honeymoon, family vacation, or
              group adventure, we have specially designed packages to make your
              journey unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/packages"
                className="bg-white text-toorizo-gold px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact-us"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-toorizo-gold transition-colors duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section-padding bg-gray-50 bg-cover bg-top bg-no-repeat relative"
        style={{ backgroundImage: "url('/mountainBg.png')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="toorizo-container relative z-10">
          <SectionTitle>What Our Clients Say</SectionTitle>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
