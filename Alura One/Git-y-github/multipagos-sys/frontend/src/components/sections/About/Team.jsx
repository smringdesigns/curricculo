import React from "react";
import TeamCard from "../utils/TeamCard";
import { sectionData } from "../../../mockData/sectionData";
import teamData from "../../../mockData/teamData";

const Team = () => {
  const { title, description } = sectionData.team;

  return (
    <section className="Team">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center text-center flex-column mx-auto" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row gy-md-0 gy-4">
          {teamData.slice(0, 2).map((member, index) => (
            <div className="col-md-6" key={index}>
              <TeamCard
                img={member.img}
                name={member.name}
                description={member.description}
                facebook={member.facebook}
                whatsapp={member.whatsapp}
                instagram={member.instagram}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
