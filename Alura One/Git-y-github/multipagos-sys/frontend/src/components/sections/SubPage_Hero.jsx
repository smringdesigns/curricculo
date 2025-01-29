import React from "react";

const SubPage_Hero = ({ title, description }) => {
  return (
    <section className="SubPage_Hero" data-aos="fade-up">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center text-center flex-column">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SubPage_Hero;
