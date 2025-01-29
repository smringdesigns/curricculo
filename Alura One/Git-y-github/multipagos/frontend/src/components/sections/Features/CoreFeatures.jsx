import React from "react";
import ServicesCard from "../utils/ServicesCard";
import { sectionData } from "../../../mockData/sectionData";
import { featuresData } from "../../../mockData/featuresData";

const CoreFeatures = () => {
  const { title, description, image } = sectionData.coreFeatures;

  return (
    <section className="CoreFeatures">
      <div className="container position-relative">
        <div className="d-flex justify-content-center align-items-center text-center mx-auto flex-column" data-aos="fade-up">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="row justify-content-center gy-md-0 gy-4">
          <div className="col-xl-3 col-md-4">
            <div className="d-flex flex-column gap-lg-4 gap-3 mt-lg-4">
              {featuresData.slice(0, 3).map((featuresData, index) => (
                <ServicesCard
                  key={index}
                  title={featuresData.title}
                  description={featuresData.description}
                />
              ))}
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <figure className="d-flex justify-content-center">
              <img src={image} alt="coreImg" data-aos="zoom-in-up"/>
            </figure>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="d-flex flex-column gap-lg-4 gap-3 mt-lg-4 m-0">
              {featuresData.slice(3).map((featuresData, index) => (
                <ServicesCard
                  key={index}
                  title={featuresData.title}
                  description={featuresData.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
