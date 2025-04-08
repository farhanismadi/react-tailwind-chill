import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import profilePic from "../../assets/images/profile-pic.png";
import logo from "../../assets/images/Logo.png";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#181a1c] flex justify-between items-center px-6 h-[50px] z-50 sm:px-6 sm:h-[60px] md:px-10">
      {/* Menu Kiri */}
      <div className="flex items-center gap-5 sm:gap-10 md:gap-[70px]">
        <img
          src={logo}
          alt="Logo Chill"
          className="w-[60px] sm:w-[80px] md:w-[100px]"
          onClick={() => navigate("/")}
        />
        <a
          href="#"
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base"
        >
          Series
        </a>
        <a
          href="#"
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base"
        >
          Film
        </a>
        <a
          onClick={() => navigate("/my-list")}
          className="text-[#e7e3fc] no-underline hover:opacity-80 text-sm sm:text-base"
        >
          Daftar Saya
        </a>
      </div>

      {/* Profile Kanan */}
      <div className="flex items-center gap-1 sm:gap-2">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover"
        />
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-[#e7e3fc] flex items-center"
        >
          <MdKeyboardArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </nav>
  );
};
