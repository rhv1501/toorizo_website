import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

type TripType = "one-way" | "round-trip";
type VehicleType = "hatchback" | "sedan" | "suv" | "muv" | "custom";

interface BookingData {
  tripType: TripType;
  from: string;
  to: string;
  date: string;
  time: string;
  days?: string;
}

interface CabBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingData: BookingData | null;
}

const vehicleOptions: Array<{
  type: VehicleType;
  name: string;
  image: string;
  capacity: string;
  description: string;
}> = [
  {
    type: "sedan",
    name: "Sedan",
    image: "/swift-dzire.webp",
    capacity: "4 passengers",
    description: "Comfortable and spacious",
  },
  {
    type: "suv",
    name: "SUV",
    image: "/suv.webp",
    capacity: "6-7 passengers",
    description: "Premium and powerful",
  },
  {
    type: "muv",
    name: "MUV",
    image: "/muv.webp",
    capacity: "7-8 passengers",
    description: "Multi-utility vehicle",
  },
  {
    type: "custom",
    name: "Custom",
    image: "/tempo.webp",
    capacity: "Large groups",
    description: "For larger groups",
  },
];

const CabBookingModal = ({
  open,
  onOpenChange,
  bookingData,
}: CabBookingModalProps) => {
  const navigate = useNavigate();

  const handleClose = () => onOpenChange(false);

  const handleVehicleSelect = (vehicle: VehicleType) => {
    if (!bookingData) return;

    const finalData = { ...bookingData, vehicle } as BookingData & {
      vehicle: VehicleType;
    };

    let message = `I would like to book a ${finalData.tripType} cab service.\n\n`;
    message += `Details:\n`;
    message += `• Trip Type: ${
      finalData.tripType === "one-way" ? "One Way" : "Round Trip"
    }\n`;
    message += `• From: ${finalData.from}\n`;
    message += `• To: ${finalData.to}\n`;
    message += `• Date: ${finalData.date}\n`;
    message += `• Time: ${finalData.time}\n`;
    if (finalData.tripType === "round-trip" && finalData.days) {
      message += `• Duration: ${finalData.days} days\n`;
    }
    message += `• Vehicle Type: ${
      vehicleOptions.find((v) => v.type === finalData.vehicle)?.name
    }\n\n`;
    message += `Please provide me with availability and pricing details.`;

    const params = new URLSearchParams({ inquiry: "cab-booking", message });
    handleClose();
    navigate(`/contact-us?${params.toString()}`);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-toorizo-dark">
            Choose Your Vehicle
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {bookingData && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-toorizo-dark mb-2">
                Trip Summary
              </h4>
              <div className="text-sm text-gray-600">
                <p>
                  <strong>Trip Type:</strong>{" "}
                  {bookingData.tripType === "one-way"
                    ? "One Way"
                    : "Round Trip"}
                </p>
                <p>
                  <strong>From:</strong> {bookingData.from} <strong>To:</strong>{" "}
                  {bookingData.to}
                </p>
                <p>
                  <strong>Date:</strong> {bookingData.date}{" "}
                  <strong>Time:</strong> {bookingData.time}
                </p>
                {bookingData.tripType === "round-trip" && bookingData.days && (
                  <p>
                    <strong>Duration:</strong> {bookingData.days} days
                  </p>
                )}
              </div>
            </div>
          )}

          <div>
            <p className="text-gray-600 text-center mb-6">
              Select the vehicle type that suits your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicleOptions.map((vehicle) => (
                <Card
                  key={vehicle.type}
                  className="cursor-pointer border-2 hover:border-toorizo-gold transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleVehicleSelect(vehicle.type)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-36 md:w-44 lg:w-56 h-28 md:h-32 lg:h-36 bg-toorizo-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/placeholder.svg";
                        }}
                      />
                    </div>
                    <h4 className="font-semibold text-toorizo-dark mb-1">
                      {vehicle.name}
                    </h4>
                    <p className="text-sm text-toorizo-gold font-medium mb-1">
                      {vehicle.capacity}
                    </p>
                    <p className="text-xs text-gray-600">
                      {vehicle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg mt-6">
              <p>
                Click on any vehicle type to proceed to contact form with your
                booking details
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CabBookingModal;
