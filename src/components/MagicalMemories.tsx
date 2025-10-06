import { Link } from "react-router-dom";
import drive from "../images/ForestExploration.jpeg";

const MagicalMemories = () => {
  return (
    <section className="toorizo-container py-16">
      {/* Mobile: Stack only two images vertically, one below the other */}
      <div className="block md:hidden w-full flex flex-col gap-4 mb-8">
        <img
          src="/vertical.jpeg"
          alt="Magical Memories Vertical"
          className="w-full h-auto object-cover"
        />
        <img
          src="/horizontal.jpeg"
          alt="Magical Memories Horizontal"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="grid md:grid-cols-12 gap-0">
        <div className="md:col-span-5 relative mb-16 md:mb-0 flex items-center">
          {/* Desktop/Tablet: Overlapping images with overflow */}
          <div className="hidden md:block relative" style={{ width: '500px', height: '650px' }}>
            {/* Vertical image, anchored top-left */}
            <img
              src="/vertical.jpeg"
              alt="Magical Memories Vertical"
              className="absolute top-0 left-0 w-[470px] h-[650px] object-cover z-10"
            />
            {/* Horizontal image, anchored bottom-right, overlaps 1/3 of its height, allowed to overflow */}
            <div
              className="absolute border-8 border-white overflow-hidden bg-white z-20"
              style={{
                width: '500px',
                height: '260px',
                bottom: '-86px', // 1/3 of 260px is ~86px
                right: '-120px', // allow more overflow to the right
              }}
            >
              <img
                src="/horizontal.jpeg"
                alt="Magical Memories Horizontal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7 space-y-8 px-4 md:px-8 md:pl-12 w-full">
          <h2 className="text-4xl md:text-6xl font-playfair text-[#71203F] leading-tight w-full">
            Magical memories, Bespoke experiences
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            Once you have travelled the voyage never ends. Toorizo will open a
            world of wonders and create magical memories that will stay with you
            far beyond your travels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagicalMemories;
