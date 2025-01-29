import React from "react";

const GoalCard = ({ img, title, description }) => {
  return (
    <div className="Goal_Card d-flex justify-content-center align-items-center flex-column text-center" data-aos="flip-left">
      <figure className="d-flex justify-content-center align-items-center">
        <img src={img} alt="goal_Img" />
      </figure>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default GoalCard;
