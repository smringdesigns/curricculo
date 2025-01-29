import React from "react";
import StatsCards from "../utils/StatsCards";
import { statsData } from "../../../mockData/statsData";
import { sectionData } from "../../../mockData/sectionData";

const Stats = () => {
  const { title, description, image } = sectionData.stats;

  return (
    <section className="Stats">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-md-6">
            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex flex-wrap justify-content-between gap-lg-4 gap-3">
                {statsData.map((stat, index) => (
                  <StatsCards
                    key={index}
                    value={stat.value}
                    description={stat.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <figure data-aos="zoom-in-up">
              <img className="w-100" src={image} alt="Stats" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
