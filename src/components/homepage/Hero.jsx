import React from "react";
import { MdInfo, MdVolumeOff } from "react-icons/md";
import bg from "../../assets/images/hero.png";

export const Hero = () => {
  return (
    <section
      className="h-[600px] bg-no-repeat bg-cover bg-center flex flex-col justify-center px-8 md:px-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Duty After School
        </h1>
        <p className="text-white text-sm md:text-base">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full mt-8 gap-2 sm:gap-4">
        {/* Left Buttons */}
        <div className="flex gap-2 sm:gap-4">
          <button className="bg-blue-900 text-white rounded-full py-2 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm font-semibold hover:bg-blue-800 transition">
            Mulai
          </button>
          <button className="flex items-center gap-1 sm:gap-2 bg-gray-800 text-white rounded-full py-2 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm font-semibold hover:bg-gray-700 transition">
            <MdInfo className="text-base sm:text-lg" />
            <span>Selengkapnya</span>
          </button>
          <button className="border border-gray-300 text-white rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm hover:bg-white hover:text-gray-800 transition">
            18+
          </button>
        </div>

        {/* Right Button */}
        <button className="border border-gray-300 text-white rounded-full p-2 hover:bg-white hover:text-gray-800 transition">
          <MdVolumeOff className="text-lg sm:text-xl" />
        </button>
      </div>
    </section>
  );
};
