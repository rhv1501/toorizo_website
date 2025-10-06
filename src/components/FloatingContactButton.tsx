// WhatsApp icon image is served from public folder
import { trackMetaEvent } from "@/utils/gtm";

const WHATSAPP_LINK = "https://wa.me/919940415750?text=Hi%2C%20I%20am%20interested%20in%20your%20tour%20package";

const FloatingContactButton = () => {
  const handleWhatsAppClick = () => {
    trackMetaEvent('Contact', {button: 'whatsapp'});
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Direct WhatsApp Button */}
      <button
        id="floating-whatsapp-button"
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-24 h-24 flex items-center justify-center text-xl focus:outline-none focus:ring-2 focus:ring-green-500 mb-1 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-14 h-14" />
      </button>
    </div>
  );
};

export default FloatingContactButton;
