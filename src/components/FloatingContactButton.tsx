// WhatsApp icon image is served from public folder
import { trackMetaEvent } from "@/utils/gtm";

const WHATSAPP_LINK =
  "https://wa.me/919940415750?text=Hi%2C%20I%20am%20interested%20in%20your%20tour%20package";

const FloatingContactButton = () => {
  const handleWhatsAppClick = () => {
    trackMetaEvent("Contact", { button: "whatsapp" });
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Direct WhatsApp Button with Tooltip */}
      <div className="relative group">
        {/* Tooltip - Always Visible */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
          Need help? Chat with us
          {/* Tooltip Arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>

        <button
          id="floating-whatsapp-button"
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 mb-1 transition-all duration-300 hover:scale-110"
          aria-label="Chat with us on WhatsApp"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButton;
