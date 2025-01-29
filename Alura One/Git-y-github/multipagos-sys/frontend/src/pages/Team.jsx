import React from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import TeamSection from "../components/sections/Team/Team";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";

const Team = () => {
  const { title, description } = subPageHeroData.team;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <TeamSection />
      </div>
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Team;
