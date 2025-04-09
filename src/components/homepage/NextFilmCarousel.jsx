import React from "react";
import { dummyNextFilms } from "../../data/dummyNextFilm";
import { LandscapeCarousel } from "../carousel/LanescapeCarousel";

export const NextFilmCarousel = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <LandscapeCarousel
        title="Melanjutkan Tonton Film"
        films={dummyNextFilms}
      />
    </section>
  );
};
