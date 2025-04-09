import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CoverFilmPotrait } from "../../components/filmCover/CoverFilmPotrait";
import { FilmPopup } from "../filmCover/FilmPopUp";

export const PotraitCarousel = ({ title, films }) => {
  const carouselRef = useRef(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

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

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  const handleClosePopup = () => {
    setSelectedFilm(null);
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
          {films.map((film, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[230px] cursor-pointer flex flex-col items-center"
              onClick={() => handleFilmClick(film)}
            >
              <CoverFilmPotrait src={film.cover} alt={`Film ${index + 1}`} />
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

        {/* Popup */}
        {selectedFilm && (
          <FilmPopup film={selectedFilm} onClose={handleClosePopup} />
        )}
      </div>
    </section>
  );
};
