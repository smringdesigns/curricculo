import footerSlider1 from "../assets/images/index/footerSlider_1.svg";
import footerSlider2 from "../assets/images/index/footerSlider_2.svg";
import footerSlider3 from "../assets/images/index/footerSlider_3.svg";

export const sliderImages = [
  { src: footerSlider1, alt: "footerSlider1" },
  { src: footerSlider2, alt: "footerSlider2" },
  { src: footerSlider3, alt: "footerSlider3" },
  { src: footerSlider2, alt: "footerSlider2" },
];

export const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl: false,
  pauseOnHover: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};