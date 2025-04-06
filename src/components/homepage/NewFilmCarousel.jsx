import React from "react";
import img1 from "../../assets/images/Number=15.png";
import img2 from "../../assets/images/Number=16.png";
import img3 from "../../assets/images/Number=17.png";
import img4 from "../../assets/images/Number=18.png";
import img5 from "../../assets/images/Number=19.png";
import img6 from "../../assets/images/Number=20.png";
import img7 from "../../assets/images/Number=21.png";
import { PotraitCarousel } from "../carousel/PotraitCarousel";

export const NewFilmCarousel = () => {
  const covers = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <PotraitCarousel title="Rilis Baru" covers={covers} />
    </section>
  );
};
