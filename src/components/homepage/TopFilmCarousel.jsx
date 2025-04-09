import React from "react";
import { dummyTopFilms } from "../../data/dummyTopFilm";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const TopFilmCarousel = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel
        title="Top Rating Film dan Series Hari Ini"
        films={dummyTopFilms}
      />
    </section>
  );
};
