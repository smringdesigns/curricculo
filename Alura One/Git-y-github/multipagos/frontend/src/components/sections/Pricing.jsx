import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "./utils/PricingCard";
import { sectionData } from "../../mockData/sectionData";
import { pricingOptions } from "../../mockData/pricingData";

const Pricing = () => {
  const { title, description, image } = sectionData.pricing;

  return (
    <section className="Pricing">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <figure
              className="position-relative d-flex justify-content-center align-items-center"
              data-aos="zoom-in-up"
            >
              <img src={image} alt="pricing_Img" />
            </figure>
          </div>
          <div className="col-md-6">
            <div>
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex flex-column gap-md-4 gap-3">
                {pricingOptions.map((option, index) => (
                  <PricingCard
                    key={index}
                    title={option.title}
                    description={option.description}
                    value={option.value}
                    duration={option.duration}
                  />
                ))}
              </div>
              <div>
                <Link className="hover1" to={"/pricing"}>
                Empezar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
