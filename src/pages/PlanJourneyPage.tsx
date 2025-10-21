import { useState } from "react";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import SectionTitle from "../components/SectionTitle";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ChevronDown, CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitJourneyForm } from "@/services/formService";
import { trackConversion, trackMetaEvent } from "@/utils/gtm";

interface Holiday {
  date: Date;
  name: string;
  description: string;
}

interface JourneyFormData {
  destination: string;
  travelDate: Date;
  adults: string;
  children: string;
  mustSees: string;
  isSpecialOccasion: string;
  requiresFlights: string;
  additionalInfo: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const PlanJourneyPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
  const [isHolidayDetailsOpen, setIsHolidayDetailsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<JourneyFormData>({
    destination: "not-sure",
    travelDate: new Date(),
    adults: "2",
    children: "0",
    mustSees: "",
    isSpecialOccasion: "no",
    requiresFlights: "no",
    additionalInfo: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
      title: "Plan Your Journey",
      subtitle: "Let us help you create the perfect travel experience",
    },
  ];

  const holidays: Holiday[] = [
    {
      date: new Date(2025, 0, 1),
      name: "New Year's Day",
      description:
        "Start the year with a refreshing trip to any of our destinations.",
    },
    {
      date: new Date(2025, 0, 26),
      name: "Republic Day",
      description: "Long weekend from Jan 25-27. Perfect for a quick getaway.",
    },
    {
      date: new Date(2025, 2, 14),
      name: "Good Friday",
      description: "Extended weekend getaway opportunity with Easter holidays.",
    },
    {
      date: new Date(2025, 3, 14),
      name: "Dr. Ambedkar Jayanti",
      description: "Plan a short trip to any of our beautiful destinations.",
    },
    {
      date: new Date(2025, 4, 1),
      name: "Labor Day",
      description: "Long weekend opportunity. Book your trips in advance!",
    },
    {
      date: new Date(2025, 7, 15),
      name: "Independence Day",
      description: "Three-day weekend. Perfect time for hill stations.",
    },
    {
      date: new Date(2025, 9, 2),
      name: "Gandhi Jayanti",
      description: "Make the most of this national holiday with a quick trip.",
    },
    {
      date: new Date(2025, 9, 24),
      name: "Dussehra",
      description:
        "Festival season begins. Enjoy cultural experiences in any destination.",
    },
    {
      date: new Date(2025, 10, 12),
      name: "Diwali",
      description:
        "Festival of lights! Many destinations have special celebrations.",
    },
    {
      date: new Date(2025, 11, 25),
      name: "Christmas",
      description:
        "End of year holidays. Perfect for a memorable family vacation.",
    },
  ];

  const isHoliday = (date: Date) => {
    return holidays.some(
      (holiday) =>
        holiday.date.getDate() === date.getDate() &&
        holiday.date.getMonth() === date.getMonth() &&
        holiday.date.getFullYear() === date.getFullYear()
    );
  };

  const getHolidayByDate = (date: Date): Holiday | undefined => {
    return holidays.find(
      (holiday) =>
        holiday.date.getDate() === date.getDate() &&
        holiday.date.getMonth() === date.getMonth() &&
        holiday.date.getFullYear() === date.getFullYear()
    );
  };

  const selectHolidayDate = (holiday: Holiday) => {
    setDate(holiday.date);
    setSelectedHoliday(holiday);
    setIsHolidayDetailsOpen(true);
  };

  const handleSelectDate = (newDate: Date | undefined) => {
    setDate(newDate);

    if (newDate) {
      const holiday = getHolidayByDate(newDate);
      if (holiday) {
        setSelectedHoliday(holiday);
        setIsHolidayDetailsOpen(true);
      }
    }

    if (newDate) {
      setFormData((prev) => ({ ...prev, travelDate: newDate }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show a loading toast
    toast({
      title: "Submitting your journey plan...",
      description: "Please wait while we process your information.",
    });

    try {
      await submitJourneyForm({
        destination: formData.destination,
        startDate: format(formData.travelDate, "yyyy-MM-dd"),
        endDate: format(formData.travelDate, "yyyy-MM-dd"),
        travelers: parseInt(formData.adults) + parseInt(formData.children),
        budget: formData.additionalInfo,
        preferences: formData.mustSees,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      // GTM event for journey form submission
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "journey_form_submit",
          name: formData.name,
          email: formData.email,
          page_path: window.location.pathname,
        });
      }

      // Meta Pixel event
      trackMetaEvent("Lead", { form: "journey" });

      // Clear the loading toast and show success toast
      toast({
        title: "Journey plan submitted successfully! ✅",
        description: "We'll contact you soon to discuss your travel plans.",
        variant: "default",
        duration: 5000, // Show for 5 seconds
      });

      // Reset form data
      setFormData({
        destination: "not-sure",
        travelDate: new Date(),
        adults: "2",
        children: "0",
        mustSees: "",
        isSpecialOccasion: "no",
        requiresFlights: "no",
        additionalInfo: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting journey form:", error);
      toast({
        title: "Submission Failed ❌",
        description:
          "We couldn't process your journey plan. Please try again or contact us directly.",
        variant: "destructive",
        duration: 7000, // Show for 7 seconds
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <HeroCarousel slides={heroSlides} />

      <section className="section-padding toorizo-container">
        <SectionTitle>Plan Your Perfect Journey</SectionTitle>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Tell us about your dream trip, and we'll create a personalized
          itinerary just for you. Our travel experts will design an experience
          that matches your preferences and budget.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair mb-6">
              Tell Us About Your Trip
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="+91 99999 99999"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  placeholder="Your message or questions..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Do you know where you want to go?
                </label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={
                      formData.destination === "sure" ? "default" : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, destination: "sure" }))
                    }
                    className="flex-1"
                  >
                    Yes, I'm Sure
                  </Button>
                  <Button
                    type="button"
                    variant={
                      formData.destination === "not-sure"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        destination: "not-sure",
                      }))
                    }
                    className="flex-1"
                  >
                    Not Sure Yet
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  When would you like to go?
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {formData.travelDate
                        ? format(formData.travelDate, "MMMM d, yyyy")
                        : "Select date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.travelDate}
                      onSelect={(date) => {
                        if (date)
                          setFormData((prev) => ({
                            ...prev,
                            travelDate: date,
                          }));
                      }}
                      className="p-3 pointer-events-auto"
                      modifiers={{
                        holiday: (date) => isHoliday(date),
                      }}
                      modifiersStyles={{
                        holiday: {
                          backgroundColor: "#f59e0b",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Adults</label>
                  <Select
                    value={formData.adults}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, adults: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of adults" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 11 }).map((_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i} {i === 1 ? "Adult" : "Adults"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Children</label>
                  <Select
                    value={formData.children}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, children: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of children" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 11 }).map((_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i} {i === 1 ? "Child" : "Children"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Must Sees & Must Dos
                </label>
                <Textarea
                  value={formData.mustSees}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      mustSees: e.target.value,
                    }))
                  }
                  placeholder="Tell us about the experiences you're looking for..."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Is this trip for a special occasion?
                </label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={
                      formData.isSpecialOccasion === "yes"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        isSpecialOccasion: "yes",
                      }))
                    }
                    className="flex-1"
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={
                      formData.isSpecialOccasion === "no"
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        isSpecialOccasion: "no",
                      }))
                    }
                    className="flex-1"
                  >
                    No
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Do you require flights?
                </label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={
                      formData.requiresFlights === "yes" ? "default" : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        requiresFlights: "yes",
                      }))
                    }
                    className="flex-1"
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={
                      formData.requiresFlights === "no" ? "default" : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        requiresFlights: "no",
                      }))
                    }
                    className="flex-1"
                  >
                    No
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Anything else we should know about your trip?
                </label>
                <Textarea
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      additionalInfo: e.target.value,
                    }))
                  }
                  placeholder="Any other preferences, requirements, or questions..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#71203F] hover:bg-[#571232]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Your Journey Plan"
                  )}
                </Button>
              </div>

              <div className="text-center mt-4">
                <Link
                  to="/contact-us"
                  className="text-[#71203F] hover:underline"
                >
                  Or contact us directly
                </Link>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-playfair mb-4">
                2025 Holiday Calendar
              </h3>
              <p className="text-gray-600">
                Plan your travel around these holidays and long weekends to make
                the most of your vacation days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair mb-4 text-center">
                  2025 Holidays & Long Weekends
                </h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                  {holidays.map((holiday, index) => (
                    <button
                      key={index}
                      onClick={() => selectHolidayDate(holiday)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-amber-50 rounded-md transition-colors border-l-4 border-amber-500"
                    >
                      <p className="font-medium">{holiday.name}</p>
                      <p className="text-sm text-gray-500">
                        {format(holiday.date, "MMMM d, yyyy")}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-playfair">
                    Long Weekends & Holidays for 2025
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {date ? format(date, "MMMM yyyy") : "Select a date"}
                  </p>
                </div>

                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleSelectDate}
                  className="p-3 pointer-events-auto mx-auto"
                  modifiers={{
                    holiday: (date) => isHoliday(date),
                  }}
                  modifiersStyles={{
                    holiday: {
                      backgroundColor: "#f59e0b",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                />

                <div className="mt-6">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-amber-500 rounded-full mr-2"></div>
                      <span>Holidays/Long Weekends</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                      <span>Regular Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={isHolidayDetailsOpen}
        onOpenChange={setIsHolidayDetailsOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          {selectedHoliday && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-playfair">
                  {selectedHoliday.name}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-500 mb-2">
                  {format(selectedHoliday.date, "MMMM d, yyyy")}
                </p>
                <p className="text-gray-700">{selectedHoliday.description}</p>

                <div className="mt-6 border-t pt-4">
                  <h4 className="font-medium mb-2">Planning a trip?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    This {selectedHoliday.name} is perfect for visiting these
                    top destinations:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/contact-us"
                      className="bg-amber-50 text-amber-800 text-sm p-2 rounded text-center hover:bg-amber-100 transition-colors"
                    >
                      Ooty
                    </Link>
                    <Link
                      to="/contact-us"
                      className="bg-amber-50 text-amber-800 text-sm p-2 rounded text-center hover:bg-amber-100 transition-colors"
                    >
                      Coorg
                    </Link>
                    <Link
                      to="/contact-us"
                      className="bg-amber-50 text-amber-800 text-sm p-2 rounded text-center hover:bg-amber-100 transition-colors"
                    >
                      Kodaikanal
                    </Link>
                    <Link
                      to="/contact-us"
                      className="bg-amber-50 text-amber-800 text-sm p-2 rounded text-center hover:bg-amber-100 transition-colors"
                    >
                      Wayanad
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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

export default PlanJourneyPage;
