import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoGoogle from "../../assets/images/logo-google.png";
import { LabelInput } from "./labelInput";

export const LoginForm = () => {
  const navigate = useNavigate();
  const buttonBaseClasses =
    "h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition";

  return (
    <section className="bg-[#181a1c9b] p-8 rounded-2xl text-center w-[90%] max-w-[500px] backdrop-blur-md text-[#e7e3fc] sm:w-[360px] md:w-[500px]">
      <img src={logo} alt="Logo Chill" className="mb-8 mx-auto" />
      <h3 className="text-2xl">Masuk</h3>
      <p className="text-[#e7e3fc6b]">Selamat Datang Kembali</p>

      <form>
        {/* Username Field */}
        <LabelInput label="Username" placeholder="Masukan username" />

        {/* Password Field */}
        <LabelInput
          label="Kata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
        />

        {/* Register link */}
        <div className="flex justify-between mt-2 text-sm">
          <p className="text-[#e7e3fc6b]">
            Belum punya akun?
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-[#e7e3fc] ml-1 underline"
            >
              Daftar
            </button>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className={`${buttonBaseClasses} bg-[#e7e3fc48]`}
          >
            Masuk
          </button>

          <p className="text-[#e7e3fc6b]">Atau</p>

          <button
            type="button"
            className={`${buttonBaseClasses} bg-transparent`}
          >
            <img src={logoGoogle} alt="Google Logo" className="h-5 w-5" />
            <span>Masuk dengan Google</span>
          </button>
        </div>
      </form>
    </section>
  );
};
