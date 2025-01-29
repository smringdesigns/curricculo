import React from "react";
import { Link } from "react-router-dom";
import { sectionData } from "../../../mockData/sectionData";

const AboutServices = () => {
  const { title, description, image, link } = sectionData.aboutServices;

  return (
    <section className="Services AboutServices">
      <div className="container">
        <div className="row gy-md-0 gy-5">
          <div className="col-lg-6 col-md-6">
            <div
              className="d-flex justify-content-center flex-column h-100 mt-lg-5"
              data-aos="fade-up"
            >
              <div className="text-md-start text-center">
                <h2>{title}</h2>
                {description.map((desc, index) => (
                  <p key={index} className={index === 0 ? "pb-0" : ""}>
                    {desc}
                  </p>
                ))}
              </div>
              <div className="d-flex align-items-center pt-4 mt-lg-2 justify-content-md-start justify-content-center">
                <div>
                  <Link className="hover1" to={"/features"}>
                  Obtenga la tarjeta
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
