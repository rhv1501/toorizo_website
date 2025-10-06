import Layout from "../components/Layout";
import HeroVideo from "../components/HeroVideo";
import SectionTitle from "../components/SectionTitle";
import BentoGrid from "../components/BentoGrid";
import BlogCard from "../components/BlogCard";
import { Link, useNavigate } from "react-router-dom";

const DestinationsPage = () => {
  // South Indian destinations for the bento grid
  const southIndianDestinations = [
    {
      title: "Ooty, Tamil Nadu",
      image:
        "https://images.pexels.com/photos/30088193/pexels-photo-30088193/free-photo-of-lush-green-terraced-fields-in-ooty-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/ooty",
      size: "small" as const,
    },
    {
      title: "Coorg, Karnataka",
      image:
        "https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/coorg",
      size: "small" as const,
    },
    {
      title: "Kodaikanal, Tamil Nadu",
      image:
        "https://images.pexels.com/photos/12791178/pexels-photo-12791178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/kodaikanal",
      size: "small" as const,
    },
    {
      title: "Chikmagalur, Karnataka",
      image:
        "https://images.pexels.com/photos/12880439/pexels-photo-12880439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/chikmagalur",
      size: "small" as const,
    },
    {
      title: "Wayanad, Kerala",
      image:
        "https://images.pexels.com/photos/27745632/pexels-photo-27745632/free-photo-of-a-monkey-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/wayanad",
      size: "small" as const,
    },
    {
      title: "Mysore, Karnataka",
      image:
        "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/packages/mysore",
      size: "small" as const,
    },
  ];

  // Blog posts moved from HomePage
  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Hidden Gems in South India",
      excerpt:
        "Discover the lesser-known but equally breathtaking destinations across South India that should be on every traveler's bucket list.",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3",
      date: "April 10, 2025",
      author: "Emily Chen",
    },
    {
      id: "2",
      title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
      excerpt:
        "Learn practical tips and strategies for making your travels more environmentally friendly without sacrificing the quality of your experience.",
      image: "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e",
      date: "April 5, 2025",
      author: "Marcus Green",
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <HeroVideo
        title="Discover Magnificent Destinations"
        subtitle="Explore South India's most breathtaking locations with Toorizo"
        videoSrc="/destinations.mp4"
        fullHeight={false}
      />

      {/* South Indian Destinations Section */}
      <section className="section-padding toorizo-container">
        <SectionTitle>Explore South India</SectionTitle>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {southIndianDestinations.map((destination, index) => (
              <Link
                to={destination.link}
                key={index}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-playfair text-center px-4 z-10">
                      {destination.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Moved from HomePage */}
      <section className="section-padding bg-toorizo-cream">
        <div className="toorizo-container">
          <SectionTitle>Latest Travel Stories</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate("/")}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="#" className="btn-secondary">
              View All Articles
            </Link>
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

export default DestinationsPage;
