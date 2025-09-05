import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../zonePublic/components/Footer";
import Navbar from "../zonePublic/components/Navbar";

const ClientLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
