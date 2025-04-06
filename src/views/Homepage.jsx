import React from "react";
import { Hero } from "../components/homepage/hero";
import { NewFilmCarousel } from "../components/homepage/NewFilmCarousel";
import { TopFilmCarousel } from "../components/homepage/topFilmCarousel";
import { TrendingFilmCarousel } from "../components/homepage/TrendingFilmCarousel";
import { NextFilmCarousel } from "../components/homepage/nextFilmCarousel";

export const Homepage = () => {
  return (
    <div className="bg-[#181a1c] text-[#e7e3fc]">
      <Hero />
      <NextFilmCarousel />
      <TopFilmCarousel />
      <TrendingFilmCarousel />
      <NewFilmCarousel />
    </div>
  );
};
