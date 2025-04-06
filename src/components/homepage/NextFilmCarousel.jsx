import React from "react";
import img1 from "../../assets/images/Type=1.png";
import img2 from "../../assets/images/Type=15.png";
import img3 from "../../assets/images/Type=17.png";
import img4 from "../../assets/images/Type=18.png";
import img5 from "../../assets/images/Type=11.png";
import { LandscapeCarousel } from "../carousel/LanescapeCarousel";

export const NextFilmCarousel = () => {
  const covers = [img1, img2, img3, img4, img5];

  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <LandscapeCarousel title="Melanjutkan Tonton Film" covers={covers} />
    </section>
  );
};
