import React from "react";
import Header from "../components/sections/Header";
import LoggedHero from "../components/sections/LoggedHero";
import About from "../components/sections/About";
import Goal from "../components/sections/Goal";
import Partners from "../components/sections/Partners";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Visa from "../components/sections/Visa";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Blog from "../components/sections/Blog";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="three_section_bg">
        <Header />
        <LoggedHero />
        <About />
      </div>
      <Goal />
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
