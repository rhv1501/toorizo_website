import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-toorizo-dark text-white pt-16 pb-8">
      <div className="toorizo-container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/toorWhiteImg.png"
                alt="Toorizo Logo"
                className="h-10 md:h-32"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Creating unforgettable travel experiences and journeys tailored to
              your unique desires, from exotic destinations to luxury
              accommodations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/toorizotravel?igsh=b2pzZ2JmaTZ1ODlp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-toorizo-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-toorizo-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="text-xl font-playfair mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/cab-services"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Cab Services
                </Link>
              </li>
              <li>
                <Link
                  to="/plan-journey"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Plan Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Popular Destinations */}
          <div>
            <h5 className="text-xl font-playfair mb-6">Popular Destinations</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/packages/ooty"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Ooty
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/coorg"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Coorg
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/kodaikanal"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Kodaikanal
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/chikmagalur"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Chikmagalur
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/wayanad"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Wayanad
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/mysore"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  Mysore
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h5 className="text-xl font-playfair mb-6">Contact Information</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-toorizo-gold mt-1" size={18} />
                <span className="text-gray-300">
                  42, North phase, 5th cross street, Kalaimagal nagar,
                  Ekkatuthangal, Chennai- 600032
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-toorizo-gold" size={18} />
                <a
                  href="https://wa.me/919940415750?text=Hi%2C%20I%20am%20interested%20in%20your%20tour%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  +91 9940415750
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-toorizo-gold" size={18} />
                <a
                  href="mailto:toorizotravel@gmail.com"
                  className="text-gray-300 hover:text-toorizo-gold transition-colors"
                >
                  toorizotravel@gmail.com
                </a>
              </li>
              <li className="mt-4 text-gray-300">
                <p>
                  <strong>Working Hours:</strong>
                </p>
                <p>Mon-Sun: 9:00 AM to 11:30 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Toorizo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
