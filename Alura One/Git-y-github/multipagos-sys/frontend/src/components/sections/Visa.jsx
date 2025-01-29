import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { sectionData } from "../../mockData/sectionData";
import { visaSliderImgs, settings } from "../../mockData/visaData";

const Visa = () => {
  const { title, description, images, integrations } = sectionData.visa;

  return (
    <section className="Visa">
      <div className="container">
        <figure>
          <img
            className="w-100"
            src={images.banner}
            alt="visaBanner"
            data-aos="zoom-in-up"
          />
        </figure>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="text-md-start text-center">
              <h3>{title}</h3>
              {description.map((desc, index) => (
                <p key={index} className={index === 1 ? "pt-3" : ""}>
                  {desc}
                </p>
              ))}
              <div>
                <Link className="hover1 w-100" to={"/multipagos/pricing"}>
                  Intenta Multipagos Ahora
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="text-md-start text-center">
              <Slider {...settings}>
                {visaSliderImgs.map((logo, index) => (
                  <Link key={index}>
                    <figure className="d-flex justify-content-center">
                      <img src={logo.src} alt={logo.alt} />
                    </figure>
                  </Link>
                ))}
              </Slider>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-md-4 gap-3">
                <h2>{integrations.count}</h2>
                <h5>{integrations.text}</h5>
              </div>
              <p className="m-0">{integrations.description}</p>
              <div className="position-relative">
                <figure className="position-absolute" data-aos="flip-left">
                  <img className="w-100" src={images.card} alt="visaCard" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visa;
