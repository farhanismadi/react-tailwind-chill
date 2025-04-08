import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { LabelInput } from "./labelInput";
import logoGoogle from "../../assets/images/logo-google.png";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log("Cek data register: ", { username, password });

      if (!username || !password) {
        console.error("Validasi gagal: Username atau password kosong");
        setError("Username dan password wajib diisi!");
        return;
      }

      // Simpan ke localStorage
      localStorage.setItem("userData", JSON.stringify({ username, password }));

      setError("");
      console.log("Register sukses, data disimpan di localStorage!");

      navigate("/login");
    } catch (err) {
      console.error("Error saat submit:", err);
      setError("Terjadi kesalahan. Coba lagi nanti.");
    }
  };

  return (
    <section className="bg-[#181a1c9b] p-8 rounded-2xl text-center w-[90%] max-w-[500px] backdrop-blur-md text-[#e7e3fc] sm:w-[360px] md:w-[500px]">
      <img src={logo} alt="Logo Chill" className="mb-8 mx-auto" />
      <h3 className="text-2xl">Daftar</h3>
      <p className="text-[#e7e3fc6b]">Buat akun baru kamu</p>

      <form onSubmit={handleSubmit}>
        <LabelInput
          label="Username"
          placeholder="Masukan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabelInput
          label="Kata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-between mt-2 text-sm">
          <p className="text-[#e7e3fc6b]">
            Sudah punya akun?
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#e7e3fc] ml-1 underline"
            >
              Masuk
            </button>
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <button
            type="submit"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition bg-[#e7e3fc48]"
          >
            Daftar
          </button>
          <p className="text-[#e7e3fc6b]">Atau</p>

          <button
            type="button"
            className="h-10 flex justify-center items-center gap-2 border border-[#e7e3fc] rounded-full text-[#e7e3fc] text-sm hover:opacity-80 transition"
          >
            <img src={logoGoogle} alt="Google Logo" className="h-5 w-5" />
            <span>Daftar dengan Google</span>
          </button>
        </div>
      </form>
    </section>
  );
};
