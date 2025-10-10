import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { trackMetaEvent } from "@/utils/gtm";
import LoginModal from "./LoginModal";
import FloatingContactButton from "./FloatingContactButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Cab Services", path: "/cab-services" },
    { name: "Plan Journey", path: "/plan-journey" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-300 z-[50] ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent backdrop-blur-sm py-5"
        }`}
      >
        <div className="toorizo-container flex items-center justify-between px-4 md:px-8">
          {/* Logo left-aligned */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/82a85a38-60e0-4645-8968-bcd2165c59dc.png"
                alt="Toorizo Logo"
                className="h-10 md:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center mx-8">
            <div className="flex space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    trackMetaEvent("NavClick", { path: link.path })
                  }
                  className={`nav-link ${
                    location.pathname === link.path
                      ? "text-toorizo-gold"
                      : isScrolled
                      ? "nav-link-dark"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex-shrink-0 ml-auto md:hidden">
            <button
              className={`p-2 rounded-md hover:text-toorizo-gold hover:bg-white/10 transition-all duration-300 ${
                isScrolled
                  ? "text-toorizo-gold bg-toorizo-cream/30"
                  : "text-white bg-black/20 backdrop-blur-sm"
              }`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`
          fixed inset-0 z-[10000] md:hidden 
          transition-opacity duration-300 ease-out
          ${
            isOpen
              ? "bg-black/30 backdrop-blur-sm opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        onClick={closeMenu}
        aria-hidden="true"
        style={{ transitionProperty: "opacity, visibility" }}
      />

      {/* Mobile Slide-in Navbar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-[10001] md:hidden shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col pt-7 border-r border-gray-100
        `}
        style={{
          transitionProperty: "transform",
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-4 text-toorizo-dark hover:text-toorizo-gold"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
        <div className="px-6 mb-2">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/lovable-uploads/82a85a38-60e0-4645-8968-bcd2165c59dc.png"
              alt="Toorizo Logo"
              className="h-10"
            />
          </Link>
        </div>
        <nav className="flex flex-col mt-4 space-y-6 px-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                trackMetaEvent("NavClick", { path: link.path });
                closeMenu();
              }}
              className={`nav-link-mobile text-lg ${
                location.pathname === link.path ? "text-toorizo-gold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-toorizo-gold p-3 rounded-full text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* Floating Contact Button */}
      <FloatingContactButton />

      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default Header;
