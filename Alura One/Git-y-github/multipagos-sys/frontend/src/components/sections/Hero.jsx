import React from "react";
import { sectionData } from "../../mockData/sectionData";
import { Link } from "react-router-dom";

const Hero = () => {
  const { title, description, images } = sectionData.hero;

  return (
    <section className="Hero">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          <div className="col-lg-6 col-md-6">
            <div
              className="d-flex justify-content-center flex-column h-100 py-lg-4 text-md-start text-center"
              data-aos="fade-right"
            >
              <h1>{title}</h1>
              <p>{description}</p>
              <div>
                <Link className="hover1" to="/about">
                Obtenga la tarjeta
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="position-relative mt-md-0 mt-sm-4 mt-3">
              <figure>
                <img
                  className="w-100 pe-lg-3 pt-lg-2"
                  src={images.hero_Img}
                  alt="Hero_img"
                  data-aos="zoom-in-up"
                />
              </figure>
              <div>
                <img
                  className="position-absolute"
                  src={images.getStarted}
                  alt="getStarted"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
