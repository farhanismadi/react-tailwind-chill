import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CoverFilmLandscape } from "../filmCover/CoverFilmLanescape";

export const LandscapeCarousel = ({ title, covers }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col gap-5 p-10 overflow-hidden">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <div className="relative">
        {/* Container gambar */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth"
        >
          {covers.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[300px]">
              <CoverFilmLandscape src={src} alt={`Film ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Button Prev */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#292b2f] p-3 rounded-full shadow-md"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Button Next */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#292b2f] p-3 rounded-full shadow-md"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};
