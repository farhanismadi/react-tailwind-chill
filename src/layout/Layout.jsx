import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Layout = () => {
  return (
    <div className=" ">
      <Navbar />
      <Outlet />
    </div>
  );
};
