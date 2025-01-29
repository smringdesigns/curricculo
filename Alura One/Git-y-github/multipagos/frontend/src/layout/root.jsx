import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ui/scrollToTop";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
