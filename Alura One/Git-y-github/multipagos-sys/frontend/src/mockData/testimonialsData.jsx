import SliderImg1 from "../assets/images/slider/testimionalSlider_1.webp";
import SliderImg2 from "../assets/images/slider/testimionalSlider_2.webp";
import SliderImg3 from "../assets/images/slider/testimionalSlider_3.webp";
import Comma from "../assets/images/icons/Comma.svg";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

export const testimonials = [
  {
    img: SliderImg1,
    Comma: Comma,
    description:
      "Desde que empecé a utilizar los servicios de Multipagos, mis transacciones financieras han sido mucho más rápidas y fáciles. Puedo hacer pagos y consultar mis saldos desde cualquier lugar, sin la necesidad de desplazarme. La interfaz es simple y segura. ¡Recomiendo completamente!",
    name: "Tom Hiddellston",
    title: "Emprendedor",
    stars: 5,
  },
  {
    img: SliderImg2,
    Comma: Comma,
    description:
      "Multipagos ha transformado la forma en que gestionamos los pagos de nuestros clientes. La plataforma es eficiente y muy segura, lo que nos permite ofrecer un servicio sin interrupciones. La integración con nuestra infraestructura bancaria fue rápida y sencilla.",
    name: "Johnny Stone",
    title: "Desarrollador",
    stars: 4,
  },
  {
    img: SliderImg3,
    Comma: Comma,
    description:
      "Al principio tenía dudas sobre si esta plataforma sería realmente fácil de usar, pero después de un par de transacciones me di cuenta de lo conveniente que es. Ahora realizo todas mis gestiones financieras desde un solo lugar, ¡y sin complicaciones!",
    name: "Stephen Stewart",
    title: "Control de calidad",
    stars: 3,
  },
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RiArrowLeftLine size={40} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RiArrowRightLine size={40} />
    </div>
  );
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 4000,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};
