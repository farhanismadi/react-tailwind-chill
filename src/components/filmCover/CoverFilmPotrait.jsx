import React from "react";

export const CoverFilmPotrait = ({ src, alt }) => {
  return <img src={src} alt={alt} className="object-cover rounded-lg" />;
};
