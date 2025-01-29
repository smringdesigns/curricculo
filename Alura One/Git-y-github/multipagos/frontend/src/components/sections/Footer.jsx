import React from "react";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "@remixicon/react";
import Slider from "react-slick";
import logo from "../../assets/images/logos/logo.png";
import { sliderImages, sliderSettings } from "../../mockData/footerSliderData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center text-center flex-column">
          <Link to={"/multipagos/home"}>
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </Link>
          <ul className="d-flex">
            <li>
              <Link to={"#"}>Característica</Link>
            </li>
            <li>
              <Link to={"#"}>Precios</Link>
            </li>
            <li>
              <Link to={"#"}>Sobre nosotros</Link>
            </li>
            <li>
              <Link to={"#"}>Preguntas frecuentes</Link>
            </li>
          </ul>
          <div className="row justify-content-between align-items-center w-100">
            <div className="col-lg-3 col-md-2">
              <div className="d-flex gap-lg-4 gap-md-2 gap-3 justify-content-lg-start justify-content-center">
                <Link className="rounded-circle d-flex justify-content-center align-items-center">
                  <RiTwitterXFill />
                </Link>
                <Link className="rounded-circle circle d-flex justify-content-center align-items-center">
                  <RiFacebookFill />
                </Link>
                <Link className="rounded-circle circle d-flex justify-content-center align-items-center">
                  <RiInstagramFill />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="d-flex gap-md-4 gap-3 text-center justify-content-lg-around justify-content-md-end justify-content-center">
                <Link>
                  <p>Términos y Condiciones</p>
                </Link>
                <Link>
                  <p>Política de Privacidad</p>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <Slider {...sliderSettings}>
                  {sliderImages.map((image, index) => (
                    <Link key={index}>
                      <img src={image.src} alt={image.alt} />
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="w-100 text-center py-lg-3 py-2">
            <p>
              Copyright &copy; <span>{currentYear}</span> Grupo MultiPagos by Inversiones JorSti. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
