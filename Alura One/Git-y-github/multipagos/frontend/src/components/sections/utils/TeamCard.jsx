import {
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappLine,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({
  img,
  name,
  description,
  facebook,
  whatsapp,
  instagram,
}) => {
  return (
    <div className="TeamCard d-flex" data-aos="flip-left">
      <figure>
        <img className="w-100" src={img} alt="" />
      </figure>
      <div className="d-flex flex-column justify-content-center">
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="d-flex gap-lg-3 gap-2">
          <Link
            to={facebook}
            className="d-flex justify-content-center align-items-center"
          >
            <RiFacebookFill />
          </Link>
          <Link
            to={whatsapp}
            className="d-flex justify-content-center align-items-center"
          >
            <RiWhatsappLine />
          </Link>
          <Link
            to={instagram}
            className="d-flex justify-content-center align-items-center"
          >
            <RiInstagramLine />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
