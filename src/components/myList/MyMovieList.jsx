import React, { useEffect, useState, useRef } from "react";
import { CoverFilmPotrait } from "../filmCover/CoverFilmPotrait";
import { FilmPopup } from "../filmCover/FilmPopUp";

export const MyMovieList = () => {
  const [myList, setMyList] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedList);
  }, []);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  const handleClosePopup = () => {
    setSelectedFilm(null);
  };

  return (
    <div className="px-10 pt-24">
      <h3 className="text-2xl font-medium mb-4">Daftar Saya</h3>

      {myList.length === 0 ? (
        <p className="text-gray-400">Belum ada film yang disimpan.</p>
      ) : (
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {myList.map((film) => (
            <div
              key={film.id}
              className="flex-shrink-0 w-[150px] cursor-pointer"
              onClick={() => handleFilmClick(film)}
            >
              <CoverFilmPotrait src={film.cover} alt={film.title} />
            </div>
          ))}
        </div>
      )}

      {/* Popup */}
      {selectedFilm && (
        <FilmPopup film={selectedFilm} onClose={handleClosePopup} />
      )}
    </div>
  );
};
