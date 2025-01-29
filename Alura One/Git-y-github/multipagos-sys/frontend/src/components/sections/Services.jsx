import React from "react";
import { Link } from "react-router-dom";
import {
  RiArrowRightSLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";
import ServicesCard from "./utils/ServicesCard";
import { sectionData } from "../../mockData/sectionData";
import {
  servicesCardsData,
  socialMediaTransactions,
} from "../../mockData/servicesData";

const Services = () => {
  const { title, description, image } = sectionData.services;

  const iconComponents = {
    RiYoutubeFill: <RiYoutubeFill />,
    RiFacebookFill: <RiFacebookFill />,
    RiTwitterFill: <RiTwitterFill />,
    RiInstagramFill: <RiInstagramFill />,
  };

  return (
    <section className="Services">
      <div className="container">
        <div className="row gy-md-0 gy-5">
          <div className="col-lg-6 col-md-6">
            <div className="d-flex justify-content-center flex-column h-100 mt-lg-5">
              <div className="text-md-start text-center" data-aos="fade-up">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="d-flex gap-lg-4 gap-3">
                {servicesCardsData.map((card, index) => (
                  <ServicesCard
                    key={index}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
              <div className="d-flex align-items-center pt-md-5 pt-4 justify-content-md-start justify-content-center">
                <div>
                  <Link to={"multipagos/features"} className="hover1">
                    Mas Informacion
                  </Link>
                </div>
                <div>
                  <Link to={"multipagos/features"} className="hover2">
                    Registrarse <RiArrowRightSLine />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="position-relative">
              <figure className="d-flex justify-content-center position-relative">
                <img src={image} alt="ServicesImg" data-aos="zoom-in-up" />
              </figure>
              <div className="position-absolute" data-aos="flip-left">
                <div className="d-flex flex-column gap-3">
                  {socialMediaTransactions.map((transaction, index) => (
                    <div
                      className="d-flex justify-content-between align-items-center gap-lg-5 gap-4"
                      key={index}
                    >
                      <div className="d-flex gap-2">
                        <figure className="d-flex justify-content-center align-items-center rounded-circle">
                          {iconComponents[transaction.icon]}
                        </figure>
                        <div>
                          <h6>{transaction.title}</h6>
                          <p>{transaction.date}</p>
                        </div>
                      </div>
                      <p
                        className="p-0"
                        style={{
                          color: transaction.amount.startsWith("+")
                            ? "#07C86B"
                            : "#FF5E84",
                        }}
                      >
                        {transaction.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
