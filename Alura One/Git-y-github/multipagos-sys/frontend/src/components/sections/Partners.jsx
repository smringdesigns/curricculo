import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { partnersLogos, settings } from "../../mockData/partnersData";

const Partners = () => {
  return (
    <section className="Partners" data-aos="fade-up">
      <div className="container">
        <Slider {...settings}>
          {partnersLogos.map((logo, index) => (
            <Link key={index}>
              <figure className="d-flex justify-content-center">
                <img src={logo.src} alt={logo.alt} />
              </figure>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
