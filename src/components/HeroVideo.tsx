import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/FknXntUZRdI?autoplay=1&mute=1&loop=1&playlist=FknXntUZRdI&controls=0&modestbranding=1&rel=0&iv_load_policy=3";

interface HeroVideoProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  videoSrc?: string;
  fullHeight?: boolean;
  showBookNowButton?: boolean;
  onBookNow?: () => void;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoSrc,
  fullHeight = true,
  showBookNowButton = false,
  onBookNow,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact-us"); // Replace '/target-page' with your desired route
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    };

    if (video) {
      video.addEventListener("canplaythrough", handleCanPlayThrough);
      video.addEventListener("loadeddata", handleCanPlayThrough);

      // Fallback in case video events don't fire
      const fallbackTimer = setTimeout(() => {
        setIsVideoLoaded(true);
        setShowContent(true);
      }, 3000);

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlayThrough);
        video.removeEventListener("loadeddata", handleCanPlayThrough);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <div
      className={`relative w-full ${
        fullHeight ? "h-screen" : "h-[80vh]"
      } overflow-hidden`}
    >
      {/* Loading Screen */}
      {!showContent && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-toorizo-gold"></div>
            <p className="text-white mt-4 text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Video background */}
      <div
        className={`absolute inset-0 w-full h-full z-0 overflow-hidden transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          controls={false}
          preload="metadata"
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: "scale(1.15)",
            transformOrigin: "center center",
            display: "block",
          }}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Autoplay failed, but that's okay for iOS
              });
            }
          }}
        >
          <source
            src={
              videoSrc ||
              "https://firebasestorage.googleapis.com/v0/b/toorizo-website.firebasestorage.app/o/ToorizovidConv.mp4?alt=media&token=97f9c5a6-2529-413f-92f9-80066345c401"
            }
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Overlay content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-4 transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="carousel-title">{title}</h1>
        <p className="carousel-subtitle">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          {ctaText && ctaLink && (
            <a href={ctaLink} className="btn-primary">
              {ctaText}
            </a>
          )}
          {showBookNowButton && onBookNow && (
            <button
              onClick={handleRedirect}
              className="btn-primary bg-toorizo-gold hover:bg-toorizo-accent text-white text-xl px-14 py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
