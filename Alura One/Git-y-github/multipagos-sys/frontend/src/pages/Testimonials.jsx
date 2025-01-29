import React from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import TestimonialsSection from "../components/sections/Testimonial/Testimonials";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";

const Testimonials = () => {
  const { title, description } = subPageHeroData.testimonials;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <TestimonialsSection />
      </div>
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
