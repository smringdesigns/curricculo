import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Blog from "../pages/Blog";
import ComingSoon from "../pages/ComingSoon";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";
import Register from "../pages/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login.jsx";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/multipagos",
    element: <RootLayout />,
    children: [
      {
        path: "/multipagos",
        element: <PrivateRoute element={Dashboard} />,
      },
      {
        path: "/multipagos/home",
        element: <Home />,
      },
      {
        path: "/multipagos/about",
        element: <AboutUs />,
      },
      {
        path: "/multipagos/features",
        element: <Features />,
      },
      {
        path: "/multipagos/pricing",
        element: <Pricing />,
      },
      {
        path: "/multipagos/contact",
        element: <Contact />,
      },
      {
        path: "/multipagos/team",
        element: <Team />,
      },
      {
        path: "/multipagos/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/multipagos/blog",
        element: <Blog />,
      },
      {
        path: "/multipagos/faq",
        element: <FAQ />,
      },
      {
        path: "/multipagos/error",
        element: <Error />,
      },
      {
        path: "/multipagos/comingSoon",
        element: <ComingSoon />,
      },
      {
        path: "/multipagos/register",
        element: <Register />,
      },
      {
        path: "/multipagos/login",
        element: <Login />,
      },
    ],
  },
]);
