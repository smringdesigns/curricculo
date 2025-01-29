import React from "react";
import calander from "../../../assets/images/icons/calander.svg";
import viewers from "../../../assets/images/icons/views.svg";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, description, date, views, link }) => {
  return (
    <div className="BlogCard d-flex flex-column" data-aos="flip-left">
      <figure>
        <img className="w-100" src={img} alt="Blog_Img" />
      </figure>
      <Link to={link}>
        <h5>{title}</h5>
      </Link>
      <p>{description}</p>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-md-4 mb-3">
        <div className="d-flex">
          <figure>
            <img src={calander} alt="calander" />
          </figure>
          <p>{date}</p>
        </div>
        <div className="d-flex">
          <figure>
            <img src={viewers} alt="views" />
          </figure>
          <p>{views}</p>
        </div>
      </div>
      <Link to={link} className="hover1 w-100">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
