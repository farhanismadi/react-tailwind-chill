import React from "react";
import img1 from "../../assets/images/Number=8.png";
import img2 from "../../assets/images/Number=9.png";
import img3 from "../../assets/images/Number=10.png";
import img4 from "../../assets/images/Number=11.png";
import img5 from "../../assets/images/Number=12.png";
import img6 from "../../assets/images/Number=13.png";
import img7 from "../../assets/images/Number=14.png";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const TrendingFilmCarousel = () => {
  const covers = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel title="Film Trending" covers={covers} />
    </section>
  );
};
