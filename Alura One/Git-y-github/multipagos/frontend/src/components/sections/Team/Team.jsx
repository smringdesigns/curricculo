import React from "react";
import TeamCard from "../../sections/utils/TeamCard";
import teamSectionData from "../../../mockData/teamData";

const Team = () => {
  return (
    <section className="Team border-0 bg-transparent pt-0">
      <div className="container">
        <div className="row gy-4">
          {teamSectionData.map((member, index) => (
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
