import hero_Img from "../assets/images/index/hero_Img.webp";
import getStarted from "../assets/images/icons/getStarted.svg";
import aboutImg1 from "../assets/images/index/aboutImg_1.webp";
import aboutImg2 from "../assets/images/index/aboutImg_2.webp";
import processImg from "../assets/images/index/processImg.webp";
import servicesImg from "../assets/images/index/servicesImg.webp";
import visa_Banner from "../assets/images/index/visa_Banner.webp";
import visaCard from "../assets/images/index/visaCard.webp";
import pricingImg from "../assets/images/index/pricing_Img.webp";
import StatsImg from "../assets/images/index/Stats_Img.webp";
import FeaturesHeroImg from "../assets/images/index/featuresHero_Img.webp";
import coreFeaturesImg from "../assets/images/index/coreFeatures.webp";

export const sectionData = {
  hero: {
    title: "Digitalice sus finanzas.",
    description:
      "Digitalice sus finanzas con nuestra plataforma innovadora, diseñada para simplificar y agilizar todas tus gestiones financieras.",
    images: {
      hero_Img,
      getStarted,
    },
  },
  about: {
    title: "Acerca de",
    description:
      "En Grupo MultiPagos conectamos a nuestros usuarios con las principales entidades financieras, permitiéndoles realizar pagos, transferencias, recaudos y más desde un solo lugar, de forma rápida, segura y accesible.",
    images: {
      aboutImg1,
      aboutImg2,
    },
    videoLink: {
      url: "https://www.youtube.com/embed/u31qwQUeGuM?si=o1Nt3XrgyYRKwJ13",
    },
    stats: [
      {
        value: "38M+",
        description:
          "¡Las empresas ya se han sumado a nosotros! ¡Las empresas ya se han sumado a nosotros!",
      },
      {
        value: "0%",
        description:
          "Cero por ciento de comisión por cualquier transacción. Cero por ciento de comisión por cualquier transacción.",
      },
    ],
    rating: {
      stars: 5,
      text: "A mucha gente le gusta este servicio.",
    },
  },
  goal: {
    title: "Los objetivos financieros son nuestra prioridad",
    description:
      "En Grupo MultiPagos, entendemos que tus objetivos financieros son lo más importante, y por eso trabajamos para convertirnos en tu mejor aliado.",
  },
  process: {
    title: "Proceso Simple de una Pasarela de Pagos",
    description:
      "Nuestra pasarela de pagos está diseñada para garantizar transacciones rápidas, seguras y sin complicaciones. A continuación, te mostramos cómo funciona:",
    image: processImg,
  },
  services: {
    title: "Servicios y Soluciones Excepcionales",
    description: [
      "Ofrecemos herramientas rápidas, seguras y accesibles para pagos, transferencias y gestión financiera, conectándote con las principales entidades bancarias. Nuestro compromiso es simplificar tu vida financiera con innovación y confianza en cada transacción. ",
      "MultiPagos S&S, donde la facilidad y la confianza se encuentran.",
    ],
    image: servicesImg,
  },
  visa: {
    title: "Reemplazar la complejidad por la simplicidad",
    description: [
      "Transformamos las gestiones financieras en una experiencia sencilla y eficiente. Nuestro objetivo es eliminar barreras y facilitar tus transacciones con soluciones rápidas, seguras y accesibles, todo desde un solo lugar. ",
      "MultiPagos S&S: Simplificamos tu mundo financiero.",
    ],
    images: {
      banner: visa_Banner,
      card: visaCard,
    },
    integrations: {
      count: "280+",
      text: "Integraciones",
      description:
        "Adaptamos nuestras soluciones a tus necesidades para optimizar tu tiempo y experiencia.",
    },
  },
  pricing: {
    title: "Opciones de Precios Económicos",
    description:
      "Creemos que la accesibilidad financiera debe ser para todos. Por eso, ofrecemos opciones de precios que se adaptan a tus necesidades, sin sacrificar calidad ni seguridad. Obtén todas nuestras soluciones financieras a tarifas competitivas y aprovecha la flexibilidad de nuestros planes.",
    image: pricingImg,
  },
  testimonials: {
    title: "Con la confianza de los profesionales",
    description:
      "Contamos con el respaldo de expertos en el sector financiero para brindarte soluciones seguras y confiables. Nuestra plataforma está diseñada para ofrecerte la misma calidad y confianza que los profesionales exigen, asegurando que cada transacción sea rápida, eficiente y protegida.",
  },
  faq: {
    title: "Preguntas Frecuentes",
    description:
      "Tu solución confiable y accesible para gestionar tus finanzas.",
  },
  blog: {
    title: "Nuestras últimas noticias y eventos",
    description:
      "Mantente al día con todo lo que sucede en Multipagos S&S. Aquí compartimos nuestras últimas actualizaciones, lanzamientos y eventos para que siempre estés informado sobre cómo evolucionamos para servirte mejor.",
  },
  aboutServices: {
    title: "A mucha gente le gusta este servicio",
    description: [
      "Nos enorgullece contar con la confianza y satisfacción de nuestros usuarios. Nuestro compromiso con la calidad, seguridad y simplicidad ha convertido nuestro servicio en una opción favorita para quienes buscan gestionar sus finanzas de manera eficiente.",
      "MultiPagos S&S: Aprobado por quienes confían en la excelencia.",
    ],
    image: servicesImg,
  },
  simplicity: {
    title: "Reemplazar la Complejidad por la Simplicidad" ,
    description:
      "Nuestra misión es simplificar tu vida financiera. Eliminamos los procesos complicados para ofrecerte una experiencia fácil, rápida y eficiente en cada transacción. Desde pagos y recaudos hasta transferencias, hemos diseñado una plataforma intuitiva que te conecta con las principales entidades financieras, todo en un solo lugar.",
  },
  stats: {
    title: "Nosotros Estamos Alrededor del Mundo",
    description:
      "Llevamos nuestras soluciones financieras más allá de las fronteras. Con innovación, seguridad y simplicidad, conectamos personas y negocios en todo el mundo, facilitando tus transacciones desde cualquier lugar. Uniendo el mundo, una transacción a la vez.",
    image: StatsImg,
  },
  team: {
    title: "¿Quién Está Detrás?",
    description:
      "Somos un equipo comprometido con la innovación financiera y la excelencia en el servicio. Personas reales trabajando para tu tranquilidad financiera.",
  },
  featuresHero: {
    image: FeaturesHeroImg,
    videoUrl: "https://www.youtube.com/embed/u31qwQUeGuM?si=o1Nt3XrgyYRKwJ13",
  },
  coreFeatures: {
    title: "Características Principales",
    description:
      "Hemos diseñado nuestra plataforma para ofrecerte la mejor experiencia financiera.",
    image: coreFeaturesImg,
  },
};

export const subPageHeroData = {
  about: {
    title: "Sobre nosotros",
    description:
      "Somos una plataforma que simplifica tus finanzas, ofreciendo soluciones rápidas, seguras y fáciles de usar para pagos, transferencias y más. Conectamos a las personas con entidades financieras de manera eficiente y accesible.",
  },
  blog: {
    title: "Nuestras Últimas Noticias y Eventos",
    description:
      "Descubre nuestras novedades, eventos y mejoras en Multipagos S&S. Mantente al día con actualizaciones, nuevos lanzamientos y consejos útiles para optimizar tu experiencia financiera. Innovación constante para ti.",
  },
  features: {
    title: "Características",
    description:
      "Te ofrecemos una plataforma que conecta diversas entidades financieras en un solo lugar, garantizando la seguridad total de tus transacciones. Con una interfaz fácil de usar, rápida y eficiente, podrás gestionar tus pagos y transferencias sin complicaciones.",
  },
  pricing: {
    title: "Precios",
    description:
      "Ofrecemos precios adaptados a las necesidades de nuestros usuarios. Nuestro objetivo es brindarte soluciones financieras de calidad, con tarifas accesibles y transparentes, para que puedas gestionar tus pagos y transferencias de forma fácil y económica.",
  },
  contact: {
    title: "Contacto",
    description:
      "Estamos aquí para ayudarte. Si tienes alguna pregunta, duda o necesitas asistencia, no dudes en ponerte en contacto con nosotros.",
  },
  team: {
    title: "Conoce a Nuestro Equipo",
    description:
      "Somos un grupo apasionado de expertos en tecnología, finanzas y atención al cliente, trabajando para simplificar y mejorar tu experiencia financiera. Cada miembro de nuestro equipo está comprometido en ofrecerte soluciones innovadoras y seguras para que tus transacciones sean rápidas y fáciles.",
  },
  testimonials: {
    title: "Testimonios",
    description:
      "Nuestros usuarios son el reflejo de nuestro compromiso. Aquí te compartimos algunas experiencias de quienes ya disfrutan de las soluciones rápidas y seguras de MultiPagos S&S.",
  },
  faq: {
    title: "Preguntas",
    description:
      "Aquí respondemos las dudas más comunes sobre MultiPagos S&S para ayudarte a entender mejor nuestros servicios.",
  },
};
