import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiPlayLine, RiStarFill } from "@remixicon/react";
import { sectionData } from "../../mockData/sectionData";

const About = () => {
  const { title, description, images, videoLink, stats, rating } =
    sectionData.about;

  return (
    <section className="About">
      <div className="container">
        <div className="row gy-md-0 gy-4" data-aos="fade-up">
          <div className="col-md-6">
            <div className="d-flex flex-column h-100 text-md-start text-center">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="d-flex gap-md-3 gap-2 align-items-center justify-content-md-start justify-content-center flex-sm-row">
                <div>
                  <Link className="hover1" to="/multipagos/about">
                  Más información
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex gap-lg-2 gap-1 align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropVideo"
                  >
                    <RiPlayLine size={20} /> Ver video
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-1 h-100 text-md-start text-center">
              <div className="d-flex w-100">
                {stats.reduce((acc, stat, index) => {
                  acc.push(
                    <div key={index} className="w-50">
                      <h3>{stat.value}</h3>
                      <p>{stat.description}</p>
                    </div>
                  );
                  if (index < stats.length - 1) {
                    acc.push(<hr key={`hr-${index}`} />);
                  }
                  return acc;
                }, [])}
              </div>
              <div className="d-flex gap-2 justify-content-md-start justify-content-center">
                <figure className="d-flex">
                  <img
                    className="rounded-circle position-relative z-2"
                    src={images.aboutImg1}
                    alt="aboutImg1"
                  />
                  <img
                    className="rounded-circle position-relative z-1"
                    src={images.aboutImg2}
                    alt="aboutImg2"
                  />
                </figure>
                <div>
                  <div className="d-flex gap-1">
                    {Array.from({ length: rating.stars }).map((_, index) => (
                      <RiStarFill key={index} />
                    ))}
                  </div>
                  <p>{rating.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdropVideo"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered h-100 my-0 mx-auto">
          <div className="modal-content d-flex align-items-center justify-content-center border-0">
            <div className="modal-body">
              <RiCloseLine
                size={35}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <iframe
                src={videoLink.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
