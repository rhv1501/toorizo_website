import { FastForward, CreditCard, Users, Shield, Star } from "lucide-react";

interface TrustIndicatorsProps {
  background?: string;
}

const TrustIndicators = ({
  background = "bg-toorizo-cream/30",
}: TrustIndicatorsProps) => {
  return (
    <div className="grid grid-cols-5 gap-1.5 md:gap-4 max-w-5xl mx-auto mb-4 md:mb-8 px-1 md:px-4">
      <div
        className={`flex flex-col items-center text-center py-1.5 md:py-3 px-1 md:px-3 ${background} rounded-lg`}
      >
        <div className="bg-blue-100 p-1.5 md:p-2.5 rounded-full mb-1 md:mb-2.5">
          <FastForward className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h4 className="text-[10px] md:text-sm font-medium leading-tight">
          Fast Customer Support
        </h4>
        <p className="text-[8px] text-gray-500 hidden md:block md:mt-1">
          Quick response
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-1.5 md:py-3 px-1 md:px-3 ${background} rounded-lg`}
      >
        <div className="bg-green-100 p-1.5 md:p-2.5 rounded-full mb-1 md:mb-2.5">
          <CreditCard className="text-green-600 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h4 className="text-[10px] md:text-sm font-medium leading-tight">
          Secured Payments
        </h4>
        <p className="text-[8px] text-gray-500 hidden md:block md:mt-1">
          Payment Gateways
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-1.5 md:py-3 px-1 md:px-3 ${background} rounded-lg`}
      >
        <div className="bg-purple-100 p-1.5 md:p-2.5 rounded-full mb-1 md:mb-2.5">
          <Users className="text-purple-600 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h4 className="text-[10px] md:text-sm font-medium leading-tight">
          Served 500+ Clients
        </h4>
        <p className="text-[8px] text-gray-500 hidden md:block md:mt-1">
          Happy travelers
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-1.5 md:py-3 px-1 md:px-3 ${background} rounded-lg`}
      >
        <div className="bg-red-100 p-1.5 md:p-2.5 rounded-full mb-1 md:mb-2.5">
          <Shield className="text-red-600 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h4 className="text-[10px] md:text-sm font-medium leading-tight">
          Authentic & Reliable
        </h4>
        <p className="text-[8px] text-gray-500 hidden md:block md:mt-1">
          Quality service
        </p>
      </div>

      <div
        className={`flex flex-col items-center text-center py-1.5 md:py-3 px-1 md:px-3 ${background} rounded-lg`}
      >
        <div className="bg-yellow-100 p-1.5 md:p-2.5 rounded-full mb-1 md:mb-2.5">
          <Star className="text-yellow-600 w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h4 className="text-[10px] md:text-sm font-medium leading-tight">
          4.5+ Stars on Google
        </h4>
        <p className="text-[8px] text-gray-500 hidden md:block md:mt-1">
          Top-rated service
        </p>
      </div>
    </div>
  );
};

export default TrustIndicators;
