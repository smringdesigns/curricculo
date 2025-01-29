import React from "react";
import { RiCheckLine } from "@remixicon/react";

const PricingCard = ({ title, description, value, duration }) => {
  return (
    <>
      <div className="PricingCard" data-aos="flip-left">
        <h5 className="d-inline">{title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <ul className="d-flex align-items-center">
            <RiCheckLine className="d-flex justify-content-center align-items-center" />
            <li>{description}</li>
          </ul>
          <div className="d-flex align-items-end">
            <h2>{value}</h2>
            <p className="pb-2">/{duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
