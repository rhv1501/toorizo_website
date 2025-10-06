import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

import cultural from "../images/Temple1.jpeg";
import nature from "../images/Backwaters2.jpg";
import wildlife from "../images/MudumalaiTigerReserve1.avif";
import boathouse from "../images/BoatHouse1.jpeg";
import mountain from "../images/Lakesandwaterfalls1.jpeg";
import lakes from "../images/Lakesandwaterfalls2.jpeg";
import plantation from "../images/Plantation2.jpg";

const experiences = [
  {
    id: 1,
    image: cultural,
    title: "Cultural Tours",
  },
  {
    id: 2,
    image: nature,
    title: "Nature Expeditions",
  },
  {
    id: 3,
    image: wildlife,
    title: "Wildlife Safari",
  },
  {
    id: 4,
    image: boathouse,
    title: "Boathouse Experience",
  },
  {
    id: 5,
    image: mountain,
    title: "Mountain Adventures",
  },
  {
    id: 6,
    image: lakes,
    title: "Lake Getaways",
  },
  {
    id: 7,
    image: plantation,
    title: "Plantation Experiences",
  },
];

const HorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  // Enable touch scrolling on mobile
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const onMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const onMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", onMouseDown);
    scrollContainer.addEventListener("mouseup", onMouseUp);
    scrollContainer.addEventListener("mouseleave", onMouseLeave);
    scrollContainer.addEventListener("mousemove", onMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", onMouseDown);
      scrollContainer.removeEventListener("mouseup", onMouseUp);
      scrollContainer.removeEventListener("mouseleave", onMouseLeave);
      scrollContainer.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-playfair text-[#71203F] mb-6">
            Our Destinations
          </h2>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            Immerse yourself in authentic experiences designed to connect you
            with the heart and soul of a destination. Our carefully curated
            experiences offer unique perspectives and unforgettable moments.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons and scroll area only on md+ */}
          <div className="hidden md:block">
            {!isMobile && (
              <>
                <button
                  onClick={scrollLeft}
                  className="absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-[#71203F]" />
                </button>

                <button
                  onClick={scrollRight}
                  className="absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-[#71203F]" />
                </button>
              </>
            )}

            <div
              ref={scrollContainerRef}
              className="flex gap-1 pb-6 px-6 lg:px-8 overflow-x-auto scrollbar-hide touch-pan-x"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {experiences.map((experience) => (
                <div key={experience.id} className="min-w-[80vw] md:min-w-[450px] flex-none">
                  <Link to="/destinations" className="block relative group">
                    <div className="relative h-[300px] md:h-[800px] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-playfair">
                          {experience.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
