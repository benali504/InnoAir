import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../zonePublic/components/Footer";
import Navbar from "../zonePublic/components/Navbar";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
