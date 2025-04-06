import React from "react";
import logo from "../../assets/images/Logo.png";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-start gap-10 px-4 py-10 bg-[#181a1c] text-[#e7e3fc] sm:px-6 md:px-10">
      {/* Logo dan Copyright */}
      <div className="flex flex-col gap-2 items-start justify-center">
        <img src={logo} alt="Logo" className="w-[100px]" />
        <p className="text-sm opacity-70">@2023 Chill All Rights Reserved.</p>
      </div>

      {/* Genre */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Genre</p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 opacity-60">
            <p>Aksi</p>
            <p>Anak-anak</p>
            <p>Anime</p>
            <p>Britania</p>
          </div>
          <div className="flex flex-col gap-2 opacity-60">
            <p>Drama</p>
            <p>Fantasi</p>
            <p>Kejahatan</p>
            <p>KDraman</p>
          </div>
          <div className="flex flex-col gap-2 opacity-60">
            <p>Komedi</p>
            <p>Petualangan</p>
            <p>Perang</p>
            <p>Romantis</p>
          </div>
          <div className="flex flex-col gap-2 opacity-60">
            <p>Sains</p>
            <p>Thriller</p>
          </div>
        </div>
      </div>

      {/* Bantuan */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Bantuan</p>
        <div className="flex flex-col gap-2 opacity-60">
          <p>FAQ</p>
          <p>Kontak Kami</p>
          <p>Privasi</p>
          <p>Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  );
};
