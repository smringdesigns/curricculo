import React from "react";
import { RiCloseLine, RiPlayFill } from "@remixicon/react";
import { sectionData } from "../../../mockData/sectionData";

const FeaturesHero = () => {
  const { image, videoUrl } = sectionData.featuresHero;

  return (
    <section className="FeaturesHero">
      <div className="container">
        <div className="position-relative">
          <figure>
            <img
              className="w-100"
              src={image}
              alt="featuresImg"
              data-aos="zoom-in-up"
            />
          </figure>
          <div className="position-absolute d-flex justify-content-center align-items-center">
            <a>
              <RiPlayFill
                className="d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropVideo"
              />
            </a>
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
                  src={videoUrl}
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
      </div>
    </section>
  );
};

export default FeaturesHero;
