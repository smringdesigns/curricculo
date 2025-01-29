import React from "react";
import { RiStarFill } from "@remixicon/react";

const TestimonialSlider = ({
  img,
  Comma,
  description,
  name,
  title,
  stars,
  currentslide,
}) => {
  return (
    <div className="TestimonialSlider position-relative" data-aos="flip-left">
      <figure>
        <img className="rounded-circle" src={img} alt="SliderImg1" />
      </figure>
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <p>{description}</p>
        <div className="d-flex gap-md-2 gap-1">
          {[...Array(stars)].map((_, index) => (
            <RiStarFill key={index} />
          ))}
        </div>
        <h5>{name}</h5>
        <p className="pt-1 w-100">{title}</p>
      </div>
      <div>
        <img className="position-absolute" src={Comma} alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlider;