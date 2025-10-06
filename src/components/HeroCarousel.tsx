
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface Slide {
  image: string;
  video?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoplay?: boolean;
  interval?: number;
}

const HeroCarousel = ({
  slides,
  autoplay = true,
  interval = 6000,
}: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let slideInterval: number | undefined;

    if (isPlaying) {
      slideInterval = window.setInterval(nextSlide, interval);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPlaying, interval]);

  return (
    <div className={`relative w-full overflow-hidden ${isHomePage ? 'h-screen' : 'h-[75vh]'}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.video && isHomePage ? (
            <video
              className="video-bg"
              autoPlay
              muted
              loop
              playsInline
              poster={slide.image}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={slide.image}
              alt={slide.title}
              className="video-bg object-cover"
            />
          )}
          <div className="hero-overlay"></div>

          <div className="carousel-content">
            <h1 className="carousel-title">{slide.title}</h1>
            <p className="carousel-subtitle">{slide.subtitle}</p>
            {slide.ctaText && slide.ctaLink && (
              <Link to={slide.ctaLink} className="btn-primary mt-4">
                {slide.ctaText}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
