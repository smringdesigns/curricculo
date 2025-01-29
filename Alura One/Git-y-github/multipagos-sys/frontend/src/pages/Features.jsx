import React from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import FeaturesHero from "../components/sections/Features/FeaturesHero";
import Services from "../components/sections/Services";
import Visa from "../components/sections/Visa";
import CoreFeatures from "../components/sections/Features/CoreFeatures";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";

const Features = () => {
  const { title, description } = subPageHeroData.features;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <FeaturesHero />
      </div>
      <Services />
      <Visa />
      <CoreFeatures />
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Features;
