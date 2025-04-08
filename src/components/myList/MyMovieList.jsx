import React from "react";
import { CoverFilmPotrait } from "../filmCover/CoverFilmPotrait";
import img1 from "../../assets/images/Number=1.png";
import img2 from "../../assets/images/Number=2.png";
import img3 from "../../assets/images/Number=3.png";
import img4 from "../../assets/images/Number=4.png";
import img5 from "../../assets/images/Number=5.png";
import img6 from "../../assets/images/Number=6.png";
import img7 from "../../assets/images/Number=7.png";

export const MyMovieList = () => {
  return (
    <div className="px-10 pt-24">
      <h3 className="text-2xl font-medium mb-4">Daftar Saya</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <CoverFilmPotrait src={img1} alt="Movie 1" />
        <CoverFilmPotrait src={img2} alt="Movie 2" />
        <CoverFilmPotrait src={img3} alt="Movie 3" />
        <CoverFilmPotrait src={img4} alt="Movie 4" />
        <CoverFilmPotrait src={img5} alt="Movie 5" />
        <CoverFilmPotrait src={img6} alt="Movie 6" />
        <CoverFilmPotrait src={img7} alt="Movie 7" />
      </div>
    </div>
  );
};
