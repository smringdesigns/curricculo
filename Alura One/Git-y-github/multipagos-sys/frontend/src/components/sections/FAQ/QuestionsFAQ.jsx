import React from "react";
import Accordian from "../utils/Accordian";
import { faqData } from "../../../mockData/FaqData";

const QuestionsFAQ = () => {
  return (
    <section className="FAQ QuestionFAQ pt-0">
      <div className="container">
        <div className="row gy-lg-5 gy-4 justify-content-center">
          <div className="col-md-10">
            <div className="text-center text-md-start">
              <h4>¿Cómo se usa?</h4>
              <p>
              Es fácil de usar te regístras, configura tu perfil y comienzas a realizar pagos, recaudos y transferencias de manera rápida y segura desde una sola plataforma, accesible en cualquier momento y lugar.
              </p>
            </div>
            <Accordian data={faqData} />
          </div>
          <div className="col-md-10">
            <div className="text-center text-md-start">
              <h4>Tarifas y características</h4>
              <p>
              Ofrecemos planes personales y empresariales con tarifas competitivas, transacciones rápidas y seguras, herramientas avanzadas de gestión financiera, y sin costos ocultos. Ambos incluyen soporte 24/7 y acceso desde cualquier dispositivo para simplificar tus operaciones financieras.
              </p>
            </div>
            <Accordian data={faqData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsFAQ;
