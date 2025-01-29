import React from "react";
import { Link } from "react-router-dom";
import Accordian from "./utils/Accordian";
import { sectionData } from "../../mockData/sectionData";
import { faqData } from "../../mockData/FaqData";

const FAQ = () => {
  const { title, description, link } = sectionData.faq;

  return (
    <section className="FAQ">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-md-6">
            <div
              className="pt-md-3 text-md-start text-center"
              data-aos="fade-up"
            >
              <h2>{title}</h2>
              <p>{description}</p>
              <div>
                <Link className="hover1" to={"/multipagos/faq"}>
                Más preguntas frecuentes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Accordian data={faqData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
