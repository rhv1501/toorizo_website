import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { submitContactForm } from "@/services/formService";
import { toast } from "sonner";
import { trackConversion, trackMetaEvent } from "@/utils/gtm";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    subject: "booking-inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });
  const navigate = useNavigate();

  // Effect to prefill form from URL parameters
  useEffect(() => {
    const destination = searchParams.get("destination");
    const packageType = searchParams.get("package");
    const inquiry = searchParams.get("inquiry");

    if (destination || packageType) {
      let message = "";

      if (inquiry === "custom") {
        message = `I am interested in a custom package for ${destination}. Please provide me with a personalized quote and itinerary based on my preferences.`;
      } else if (packageType && destination) {
        message = `I am interested in the ${packageType} for ${destination}.`;
        message +=
          " Please provide more details and help me with the booking process.";
      } else if (destination) {
        message = `I am interested in travel packages for ${destination}. Please provide more information about available options.`;
      }

      let subjectValue = "booking-inquiry";
      if (inquiry === "custom") {
        subjectValue = "custom-package";
      } else if (packageType) {
        subjectValue = "package-booking";
      } else if (destination) {
        subjectValue = "travel-inquiry";
      }

      setFormData((prev) => ({
        ...prev,
        message: message,
        subject: subjectValue,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate email and phone as user types
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) && value !== "",
      }));
    }

    if (name === "phone") {
      const phoneRegex = /^\d{10,11}$/;
      setErrors((prev) => ({
        ...prev,
        phone: !phoneRegex.test(value) && value !== "",
      }));
    }
  };

  // Check if the form is valid and complete
  const isFormValid = useMemo(() => {
    const { name, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^\d{10,11}$/;

    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      emailRegex.test(email) &&
      phone.trim() !== "" &&
      phoneRegex.test(phone) &&
      message.trim() !== ""
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if form is valid before proceeding
    if (!isFormValid) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        people: Number(formData.people),
        message: `${formData.subject}: ${formData.message}`,
      });

      // GTM event for contact form submission
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "contact_form_submit",
          name: formData.name,
          email: formData.email,
          page_path: window.location.pathname,
        });
      }

      // Track Google Ads conversion
      trackConversion();

      // Meta Pixel event
      trackMetaEvent("Lead", { form: "contact" });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        people: "",
        subject: "booking-inquiry",
        message: "",
      });

      toast.success("Message sent successfully!");
      navigate("/thank-you");

      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg py-8">
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="text-toorizo-gold mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-playfair mb-4">Thank you!</h3>
          <p className="text-gray-600">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10,11}"
                maxLength={11}
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Enter a Valid phone number"
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid 10-11 digit phone number
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="people"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                No of People
              </label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                step="1"
                value={formData.people}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Inquiry Type
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent"
            >
              <option value="booking-inquiry">General Booking Inquiry</option>
              <option value="package-booking">Package Booking</option>
              <option value="travel-inquiry">Travel Information</option>
              <option value="custom-package">Custom Package Request</option>
              <option value="cab-services">Cab Services</option>
              <option value="feedback">Feedback/Suggestions</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your travel requirements, preferred dates, budget, or any special requests..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toorizo-gold focus:border-transparent"
            ></textarea>
          </div>

          <div className="flex flex-col items-center relative">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`w-full md:w-auto py-3 px-6 rounded-md font-medium transition-all duration-300 uppercase tracking-wider text-sm 
                ${
                  isSubmitting || !isFormValid
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "btn-primary hover:bg-toorizo-gold/90"
                }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {!isFormValid && !isSubmitting && (
              <p className="text-amber-500 text-xs mt-2">
                Please fill all required fields correctly to submit
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
