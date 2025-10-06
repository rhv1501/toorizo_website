import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}

const TestimonialCarousel = ({
  testimonials,
  autoplay = true,
  interval = 5000,
}: TestimonialCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const next = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  // Handle autoplay
  useEffect(() => {
    let intervalId: number | undefined;
    
    if (isPlaying) {
      intervalId = window.setInterval(next, interval);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, interval]);

  return (
    <div className="relative py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Testimonial content */}
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 flex flex-col items-center text-center px-4"
              >
                <div className="text-6xl text-[#71203F] mb-4 leading-none">&ldquo;</div>
                <p className="text-lg md:text-2xl mb-6 italic text-gray-700 max-w-2xl mx-auto">
                  {testimonial.quote}
                </p>
                <div className="text-4xl text-[#71203F] mt-2 mb-6 leading-none">&rdquo;</div>
                <div className="flex flex-col items-center">
                  <span className="font-medium text-lg text-toorizo-dark">
                    {testimonial.author}
                  </span>
                  <span className="text-gray-500">{testimonial.location}</span>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicators */}
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-toorizo-gold w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
