import partners_Logo1 from "../assets/images/index/partners_Logo1.svg";
import partners_Logo2 from "../assets/images/index/partners_Logo2.svg";
import partners_Logo3 from "../assets/images/index/partners_Logo3.svg";
import partners_Logo4 from "../assets/images/index/partners_Logo4.svg";

export const partnersLogos = [
  { src: partners_Logo1, alt: "partnersLogo1" },
  { src: partners_Logo2, alt: "partnersLogo2" },
  { src: partners_Logo3, alt: "partnersLogo3" },
  { src: partners_Logo4, alt: "partnersLogo4" },
  { src: partners_Logo3, alt: "partnersLogo5" },
];

export const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: false,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 767,
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
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };