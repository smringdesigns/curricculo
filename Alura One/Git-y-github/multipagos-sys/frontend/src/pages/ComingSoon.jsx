import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import comingSoonImg from "../assets/images/index/comingSoon_bg.webp";

const ComingSoon = () => {
  return (
    <section className="Error ComingSoon">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <figure data-aos="zoom-in-up">
              <img className="w-100" src={comingSoonImg} alt="comingSoon_Img" />
            </figure>
          </div>
          <div className="col-md-6">
            <div
              className="d-flex justify-content-center flex-column h-100 text-md-start text-center align-items-md-start align-items-center"
              data-aos="fade-up"
            >
              <h2>Nosotros somos</h2>
              <h1 className="py-lg-2">Muy pronto</h1>
              <p>
              Inversiones JOR & STI, siempre a tu lado 🌟
              </p>
              <p>
              Te ofreceremos servicios integrales como corresponsalía bancaria con todas las entidades y pago de facturas, asesorías ICETEX para trámites educativos, venta de tecnología de alta calidad, punto DROOP Coordinadora para envíos y paquetes, diseño y desarrollo de páginas web, venta de SOAT rápido y fácil, y avisos en neón Flex personalizados.
              </p>
              <p>
              ✨ Tu solución financiera, tecnológica y logística en un solo lugar. ¡Inversiones JOR&STI, innovando para ti!
              </p>
            </div>
          </div>
        </div>
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
          <p className="w-100 text-center">
            Copyright &copy; 2024 Grupo MultiPagos S&S. Reservados todos los derechos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
