import React from "react";
import { Link } from "react-router-dom";
import { sectionData } from "../../../mockData/sectionData";

const Simplicity = () => {
  const { title, description, link } = sectionData.simplicity;

  return (
    <section className="Simplicity" data-aos="fade-up">
      <div className="container">
        <div className="d-flex justify-content-end flex-column align-items-end">
          <div className="text-md-start text-center">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <Link className="hover1" to={"/testimonials"}>
              Obtenga la tarjeta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;
