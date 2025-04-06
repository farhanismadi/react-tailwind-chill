import React from "react";
import { LoginForm } from "../components/form/LoginForm";
import bg from "../assets/images/bg-login.jpeg";

export const Login = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Centered LoginForm */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <LoginForm />
      </div>
    </div>
  );
};
