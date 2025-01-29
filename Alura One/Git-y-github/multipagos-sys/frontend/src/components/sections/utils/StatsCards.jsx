import React from "react";

const StatsCards = ({ value, description }) => {
  return (
    <div
      className="StatsCard d-flex justify-content-center align-items-center text-center flex-column"
      data-aos="flip-left"
    >
      <h3>{value}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatsCards;
