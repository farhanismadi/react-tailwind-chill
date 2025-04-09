import React from "react";
import { dummyNewFilms } from "../../data/dummyNewFilm";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const NewFilmCarousel = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel title="Rilis Baru" films={dummyNewFilms} />
    </section>
  );
};
