import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const Layout = () => {
  return (
    <div className=" ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
