import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
