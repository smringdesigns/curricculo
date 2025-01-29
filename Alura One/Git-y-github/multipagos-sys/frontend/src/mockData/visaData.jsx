import visaSlider_1 from "../assets/images/index/visaSlider_1.svg";
import visaSlider_2 from "../assets/images/index/visaSlider_2.svg";
import visaSlider_3 from "../assets/images/index/visaSlider_3.svg";
import visaSlider_4 from "../assets/images/index/visaSlider_4.svg";
import visaSlider_5 from "../assets/images/index/visaSlider_5.svg";

export const visaSliderImgs = [
  { src: visaSlider_1, alt: "visaSlider_1" },
  { src: visaSlider_2, alt: "visaSlider_2" },
  { src: visaSlider_3, alt: "visaSlider_3" },
  { src: visaSlider_4, alt: "visaSlider_4" },
  { src: visaSlider_5, alt: "visaSlider_5" },
];

export const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  rtl: false,
  pauseOnHover: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
