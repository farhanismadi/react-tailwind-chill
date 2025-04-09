import React from "react";
import { dummyTrendingFilms } from "../../data/dummyTrendingFilm";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const TrendingFilmCarousel = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel title="Film Trending" films={dummyTrendingFilms} />
    </section>
  );
};
