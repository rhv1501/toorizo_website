import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ChatDialog } from "./ChatDialog";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingChatButton = () => {
  const [showChat, setShowChat] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-open chat dialog after 2 seconds from page load (except on contact page)
  useEffect(() => {
    if (location.pathname === "/contact-us") return;
    const timer = setTimeout(() => setShowChat(true), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Track scroll position to show button only after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show button when user scrolls past 80% of viewport height (hero section)
      if (scrollPosition > viewportHeight * 0.8) {
        setHasScrolledPastHero(true);
      } else {
        setHasScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Only show button if both conditions are met: button timer expired AND user scrolled past hero */}
      {showButton &&
        hasScrolledPastHero &&
        location.pathname !== "/contact-us" && (
          <button
            onClick={() => navigate("/contact-us")}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999] bg-[#71203F] text-white px-3 py-4 rounded-r-md flex items-center shadow-lg hover:bg-[#944461] transition-all animate-fade-in"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "0.15em",
              fontWeight: 500,
            }}
            aria-label="Chat with us"
          >
            <span
              className="text-white text-sm tracking-wider mb-2"
              style={{ transform: "rotate(180deg)" }}
            >
              CHAT WITH US
            </span>
            <MessageCircle
              size={18}
              className="transform rotate-180 opacity-80"
            />
          </button>
        )}

      {/* Dialog can open independently of button visibility */}
      <ChatDialog open={showChat} onClose={() => setShowChat(false)} />
    </>
  );
};

export default FloatingChatButton;
