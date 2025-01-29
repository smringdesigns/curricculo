import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="Error">
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center flex-column text-center"
          data-aos="fade-up"
        >
          <h1>ups...</h1>
          <h2>Página no encontrada</h2>
          <h3>Error 404</h3>
          <p>
          Lo sentimos, la página que buscas no está disponible.
          </p>
          <div>
            <Link to={"/multipagos/home"} className="hover3">
            Volver al inicio
            </Link>
          </div>
          <div className="mt-lg-5 pt-lg-5 mt-4 pt-4">
            <div className="d-flex ga-lg-4 gap-3 justify-content-center">
              <Link>
                <RiTwitterXFill />
              </Link>
              <Link>
                <RiFacebookFill />
              </Link>
              <Link>
                <RiInstagramLine />
              </Link>
            </div>
            <p className="w-100">
            Copyright &copy; 2024 Grupo MultiPagos S&S. Reservados todos los derechos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
