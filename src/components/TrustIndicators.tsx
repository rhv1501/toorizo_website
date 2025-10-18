import {
  FastForward,
  CreditCard,
  Users,
  Shield,
  Star,
  Map,
} from "lucide-react";

interface TrustIndicatorsProps {
  background?: string;
}

const TrustIndicators = ({
  background = "bg-toorizo-cream/30",
}: TrustIndicatorsProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto mb-6 md:mb-10 px-2 md:px-6">
      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-blue-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <FastForward className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          Fast Customer Support
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Quick response
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-green-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <CreditCard className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          Secured Payments
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Payment Gateways
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-purple-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <Users className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          Served 500+ Clients
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Happy travelers
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-red-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <Shield className="text-red-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          Authentic & Reliable
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Quality service
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-yellow-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <Star className="text-yellow-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          4.5+ Stars on Google
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Top-rated service
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-3 md:py-4 px-2 md:px-4 ${background} rounded-lg`}
      >
        <div className="bg-teal-100 p-2 md:p-3 rounded-full mb-2 md:mb-3">
          <Map className="text-teal-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-[11px] md:text-base font-medium leading-tight">
          Luxury Travel
        </h4>
        <p className="text-[9px] md:text-sm text-gray-500 md:mt-1.5">
          Premium experiences
        </p>
      </div>
    </div>
  );
};

export default TrustIndicators;
