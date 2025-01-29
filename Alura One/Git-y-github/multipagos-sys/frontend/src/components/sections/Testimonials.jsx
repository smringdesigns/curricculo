import React from "react";
import TestimonialSlider from "./utils/TestimonialSlider";
import Slider from "react-slick";
import { sectionData } from "../../mockData/sectionData";
import { testimonials, settings } from "../../mockData/testimonialsData";

const Testimonials = () => {
  const { title, description } = sectionData.testimonials;

  return (
    <section className="Testimonial">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center text-center flex-column mx-auto" data-aos="fade-up">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlider
              key={index}
              img={testimonial.img}
              Comma={testimonial.Comma}
              description={testimonial.description}
              name={testimonial.name}
              title={testimonial.title}
              stars={testimonial.stars}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
