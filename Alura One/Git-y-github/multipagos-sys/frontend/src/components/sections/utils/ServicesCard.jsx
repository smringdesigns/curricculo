import React from "react";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="ServicesCard" data-aos="flip-left">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
