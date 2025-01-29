import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./route/router";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
