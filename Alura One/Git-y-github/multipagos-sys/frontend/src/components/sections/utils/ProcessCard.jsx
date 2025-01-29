import React from "react";

const ProcessCard = ({ img, imgAlt, title, description }) => {
  return (
    <>
      <div className="Process_Card d-flex justify-content-center align-items-center flex-md-row flex-column">
        <figure className="rounded-circle d-flex justify-content-center align-items-center">
          <img src={img} alt={imgAlt} />
        </figure>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProcessCard;
