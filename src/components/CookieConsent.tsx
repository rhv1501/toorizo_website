
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleClose = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="p-4 md:p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <h3 className="text-lg font-medium mb-2">We use cookies</h3>
          <p className="text-gray-600 text-sm">
            We use cookies to improve your experience on our website, analyze
            site traffic, and provide personalized content. By clicking "Accept",
            you consent to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-[#71203F] hover:bg-[#571232] text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close cookie consent"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
