import React from "react";
import { Link } from "react-router-dom";
import ProcessCard from "./utils/ProcessCard";
import { sectionData } from "../../mockData/sectionData";
import { processCardsData } from "../../mockData/processData";

const Process = () => {
  const { title, description, image } = sectionData.process;

  return (
    <section className="Process">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-5">
          <div className="col-md-6">
            <figure
              className="position-relative d-flex justify-content-center align-items-center"
              data-aos="zoom-in-up"
            >
              <img
                className="position-relative z-1"
                src={image}
                alt="ProcessImg"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div data-aos="fade-up">
              <div className="text-md-start text-center">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex gap-4 flex-column mb-md-4">
                {processCardsData.map((card, index) => (
                  <ProcessCard
                    key={index}
                    img={card.img}
                    imgAlt={card.imgAlt}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="d-md-block d-flex justify-content-center">
                <Link className="hover1 mt-md-3" to="/features">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
