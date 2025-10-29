import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, ArrowLeft } from "lucide-react";

interface City {
  name: string;
  state: string;
  country: string;
}

type TripType = "one-way" | "round-trip";

interface BookingData {
  tripType: TripType;
  from: string;
  to: string;
  date: string;
  time: string;
  days?: string;
}

interface CabBookingFormProps {
  onVehicleSelect: (bookingData: BookingData) => void;
}

const CabBookingForm = ({ onVehicleSelect }: CabBookingFormProps) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    tripType: "one-way",
    from: "",
    to: "",
    date: new Date().toISOString().split("T")[0], // Prefill current date
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }), // Prefill current time
    days: "",
  });

  const [fromSuggestions, setFromSuggestions] = useState<City[]>([]);
  const [toSuggestions, setToSuggestions] = useState<City[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // Cache for API results to avoid repeated calls
  const [cityCache, setCityCache] = useState<Map<string, City[]>>(new Map());

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromSuggestions(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTripTypeSelect = (type: TripType) => {
    setBookingData({ ...bookingData, tripType: type, days: "" });
  };

  const searchCities = async (query: string): Promise<City[]> => {
    if (!query || query.length < 2) return [];

    const cacheKey = query.toLowerCase();

    // Check cache first
    if (cityCache.has(cacheKey)) {
      return cityCache.get(cacheKey) || [];
    }

    try {
      // Using GeoNames API for comprehensive city search
      const response = await fetch(
        `https://api.geonames.org/searchJSON?q=${encodeURIComponent(
          query
        )}&country=IN&featureClass=P&maxRows=8&username=demo`
      );

      if (response.ok) {
        const data = await response.json();
        const geoData =
          data.geonames?.map(
            (city: {
              name: string;
              adminName1?: string;
              adminName2?: string;
              population?: number;
            }) => ({
              name: city.name,
              state: city.adminName1 || city.adminName2 || "",
              country: "India",
              population: city.population || 0,
            })
          ) || [];

        // Sort by population (larger cities first) and limit to 6 results
        const sortedCities = geoData
          .sort((a, b) => b.population - a.population)
          .slice(0, 6)
          .map(({ name, state, country }) => ({ name, state, country }));

        // Cache the results
        setCityCache((prev) => new Map(prev).set(cacheKey, sortedCities));

        return sortedCities;
      }

      // Fallback to Indian Cities API if GeoNames fails
      const fallbackResponse = await fetch(
        `https://countriesnow.space/api/v0.1/countries/cities/q?country=india&q=${encodeURIComponent(
          query
        )}`
      );

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        const cities =
          fallbackData.data?.slice(0, 6).map((cityName: string) => ({
            name: cityName,
            state: "",
            country: "India",
          })) || [];

        setCityCache((prev) => new Map(prev).set(cacheKey, cities));
        return cities;
      }
    } catch (error) {
      console.warn("City search failed:", error);
    }

    // Final fallback - try to match against common patterns
    const commonCities = [
      "Bangalore",
      "Mumbai",
      "Delhi",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Kolkata",
      "Kochi",
      "Mysore",
      "Coimbatore",
      "Madurai",
      "Ooty",
      "Munnar",
      "Kodaikanal",
      "Chikmagalur",
      "Coorg",
      "Wayanad",
      "Mangalore",
      "Udupi",
      "Hampi",
    ];

    const matches = commonCities
      .filter((city) => city.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
      .map((city) => ({ name: city, state: "", country: "India" }));

    return matches;
  };

  const handleFromChange = async (value: string) => {
    setBookingData({ ...bookingData, from: value });
    if (value.length >= 2) {
      const suggestions = await searchCities(value);
      setFromSuggestions(suggestions);
      setShowFromSuggestions(true);
    } else {
      setShowFromSuggestions(false);
    }
  };

  const handleToChange = async (value: string) => {
    setBookingData({ ...bookingData, to: value });
    if (value.length >= 2) {
      const suggestions = await searchCities(value);
      setToSuggestions(suggestions);
      setShowToSuggestions(true);
    } else {
      setShowToSuggestions(false);
    }
  };

  const selectFromCity = (city: City) => {
    setBookingData({ ...bookingData, from: city.name });
    setShowFromSuggestions(false);
  };

  const selectToCity = (city: City) => {
    setBookingData({ ...bookingData, to: city.name });
    setShowToSuggestions(false);
  };

  const handleProceedToVehicleSelection = () => {
    if (!isFormValid()) return;
    onVehicleSelect(bookingData);
  };

  const isFormValid = () => {
    const basic =
      bookingData.from &&
      bookingData.to &&
      bookingData.date &&
      bookingData.time;
    if (bookingData.tripType === "round-trip") {
      return basic && bookingData.days;
    }
    return basic;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {/* Compact Trip Type Toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => handleTripTypeSelect("one-way")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              bookingData.tripType === "one-way"
                ? "bg-toorizo-gold text-white shadow-sm"
                : "text-gray-600 hover:text-toorizo-dark"
            }`}
          >
            <ArrowRight className="w-4 h-4 inline mr-1" />
            One Way
          </button>
          <button
            onClick={() => handleTripTypeSelect("round-trip")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              bookingData.tripType === "round-trip"
                ? "bg-toorizo-gold text-white shadow-sm"
                : "text-gray-600 hover:text-toorizo-dark"
            }`}
          >
            <div className="flex items-center">
              <ArrowRight className="w-3 h-3 mr-0.5" />
              <ArrowLeft className="w-3 h-3 mr-1" />
              Round Trip
            </div>
          </button>
        </div>
      </div>

      {/* Compact Form */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="space-y-1 relative" ref={fromRef}>
          <Label htmlFor="from" className="text-xs text-gray-600 font-medium">
            <MapPin className="w-3 h-3 inline mr-1" />
            From
          </Label>
          <Input
            id="from"
            placeholder="Pickup location"
            value={bookingData.from}
            onChange={(e) => handleFromChange(e.target.value)}
            onFocus={() => {
              if (bookingData.from.length >= 2) {
                setShowFromSuggestions(true);
              }
            }}
            className="h-9 text-sm border-gray-300 focus:border-toorizo-gold focus:ring-toorizo-gold"
            autoComplete="off"
          />
          {showFromSuggestions && fromSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
              {fromSuggestions.map((city, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectFromCity(city)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-toorizo-gold/10 focus:bg-toorizo-gold/10 focus:outline-none"
                >
                  <div className="font-medium">{city.name}</div>
                  {city.state && (
                    <div className="text-xs text-gray-500">
                      {city.state}, {city.country}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-1 relative" ref={toRef}>
          <Label htmlFor="to" className="text-xs text-gray-600 font-medium">
            <MapPin className="w-3 h-3 inline mr-1" />
            To
          </Label>
          <Input
            id="to"
            placeholder="Destination"
            value={bookingData.to}
            onChange={(e) => handleToChange(e.target.value)}
            onFocus={() => {
              if (bookingData.to.length >= 2) {
                setShowToSuggestions(true);
              }
            }}
            className="h-9 text-sm border-gray-300 focus:border-toorizo-gold focus:ring-toorizo-gold"
            autoComplete="off"
          />
          {showToSuggestions && toSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
              {toSuggestions.map((city, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectToCity(city)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-toorizo-gold/10 focus:bg-toorizo-gold/10 focus:outline-none"
                >
                  <div className="font-medium">{city.name}</div>
                  {city.state && (
                    <div className="text-xs text-gray-500">
                      {city.state}, {city.country}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="date" className="text-xs text-gray-600 font-medium">
            <Calendar className="w-3 h-3 inline mr-1" />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={bookingData.date}
            onChange={(e) =>
              setBookingData({ ...bookingData, date: e.target.value })
            }
            className="h-9 text-sm border-gray-300 focus:border-toorizo-gold focus:ring-toorizo-gold"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="time" className="text-xs text-gray-600 font-medium">
            <Clock className="w-3 h-3 inline mr-1" />
            Time
          </Label>
          <Input
            id="time"
            type="time"
            value={bookingData.time}
            onChange={(e) =>
              setBookingData({ ...bookingData, time: e.target.value })
            }
            className="h-9 text-sm border-gray-300 focus:border-toorizo-gold focus:ring-toorizo-gold"
          />
        </div>
      </div>

      {/* Days field for round trip */}
      {bookingData.tripType === "round-trip" && (
        <div className="mb-6">
          <Label
            htmlFor="days"
            className="text-xs text-gray-600 font-medium mb-1 block"
          >
            <Calendar className="w-3 h-3 inline mr-1" />
            Number of Days
          </Label>
          <Input
            id="days"
            type="number"
            min="1"
            placeholder="Days"
            value={bookingData.days}
            onChange={(e) =>
              setBookingData({ ...bookingData, days: e.target.value })
            }
            className="h-9 text-sm border-gray-300 focus:border-toorizo-gold focus:ring-toorizo-gold max-w-32"
          />
        </div>
      )}

      <div className="text-center">
        <Button
          onClick={handleProceedToVehicleSelection}
          disabled={!isFormValid()}
          className="btn-primary px-6 py-2 text-sm"
        >
          Choose Vehicle
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default CabBookingForm;
