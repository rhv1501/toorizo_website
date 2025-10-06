import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import FloatingChatButton from "./components/FloatingChatButton";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const DestinationsPage = lazy(() => import("./pages/DestinationsPage"));
const PackagesPage = lazy(() => import("./pages/PackagesPage"));
const DestinationPackagesPage = lazy(
  () => import("./pages/DestinationPackagesPage")
);
const CabServicesPage = lazy(() => import("./pages/CabServicesPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const PlanJourneyPage = lazy(() => import("./pages/PlanJourneyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once for elements that are already visible
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // GTM event for page view
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "page_view",
        page_path: window.location.pathname,
      });
    }
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <FloatingChatButton />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-toorizo-gold mx-auto mb-4"></div>
                <p className="text-toorizo-dark font-medium">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route
              path="/packages/:destination"
              element={<DestinationPackagesPage />}
            />
            <Route path="/cab-services" element={<CabServicesPage />} />
            <Route path="/plan-journey" element={<PlanJourneyPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
