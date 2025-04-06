import React from "react";
import img1 from "../../assets/images/Number=1.png";
import img2 from "../../assets/images/Number=2.png";
import img3 from "../../assets/images/Number=3.png";
import img4 from "../../assets/images/Number=4.png";
import img5 from "../../assets/images/Number=5.png";
import img6 from "../../assets/images/Number=6.png";
import img7 from "../../assets/images/Number=7.png";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const TopFilmCarousel = () => {
  const covers = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel
        title="Top Rating Film dan Series Hari Ini"
        covers={covers}
      />
    </section>
  );
};
