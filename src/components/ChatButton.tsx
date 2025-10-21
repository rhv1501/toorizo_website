import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { submitChatMessage } from "@/services/formService";
import { toast } from "sonner";
import { trackMetaEvent } from "@/utils/gtm";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  const [showButton, setShowButton] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Chat form submitted!", form);
    if (!form.message.trim() || !form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      await submitChatMessage(form);
      // GTM event for chat form submission
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "chat_form_submit",
          name: form.name,
          email: form.email,
          page_path: window.location.pathname,
        });
      }

      // Meta Pixel event
      trackMetaEvent("Lead", { form: "chat_button" });
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setIsOpen(false); // Close modal after submit
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  console.log("ChatButton mounted!");

  if (!showButton) return null;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999]">
      <button
        onClick={toggleChat}
        className="bg-[#71203F] text-white p-4 rounded-r-lg flex items-center gap-2 shadow-lg hover:bg-opacity-90 transition-all duration-300 transform origin-left"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        aria-label="Chat with us"
      >
        <MessageCircle size={20} className="transform rotate-180" />
        <span className="font-medium text-sm uppercase tracking-wider whitespace-nowrap">
          Chat with us
        </span>
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 w-80 h-screen bg-white shadow-2xl z-50 transition-all duration-300 border-r border-gray-200">
          <div className="p-4 bg-[#71203F] text-white flex justify-between items-center">
            <h3 className="font-playfair">Chat with Toorizo</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <form className="p-4" onSubmit={handleSubmit}>
            <p className="text-gray-600 mb-4">
              Hi there! How can we help you plan your next adventure?
            </p>
            <div className="border rounded p-2 flex flex-col gap-2">
              <input
                className="w-full border rounded px-2 py-1"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-2 py-1"
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="w-full border rounded px-2 py-1"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                className="w-full resize-none border-0 focus:outline-none"
                rows={3}
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#71203F] text-white text-xs py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
