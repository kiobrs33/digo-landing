export const plans = [
  {
    id: 1,
    name: "Plan Básico",
    speed: "300",
    price: 59,
    priceRegular: 59,
    features: [
      "Router WiFi incluido",
      "Instalación gratuita",
      "Soporte técnico",
      "Cambio de domicilio gratuito",
      "IP standart",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Plan Estándar",
    speed: "500",
    price: 79,
    priceRegular: 79,
    features: [
      "Router WiFi 5 incluido",
      "Instalación gratuita",
      "Soporte técnico",
      "Cambio de domicilio gratuito",
      "Tv Digital Premiun",
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Plan Premium",
    speed: "1000",
    price: 99,
    priceRegular: 99,
    features: [
      "Router WiFi 6 incluido",
      "Instalación gratuita",
      "Soporte técnico",
      "Cambio de domicilio gratuito",
      "Tv Digital Premiun Plus",
    ],
    isPopular: false,
  },
  {
    id: 4,
    name: "Plan Máx",
    speed: "2500",
    price: 250,
    priceRegular: 250,
    features: [
      "Router WiFi 6 incluido",
      "Instalación especializada",
      "Soporte técnico",
      "Cambio de domicilio gratuito",
      "Tv Digital Premiun Plus",
    ],
    isPopular: false,
  },
];

export const digoInformation = {
  name: "Digo Telecom",
  adress: "Calle Ambrosio Vucetich 130, Parque Industrial, Arequipa, Perú",
  phone: "+51 1 7012341",
  email: "team@digo.net.pe",
  horario: "Lun-Vie: 9:00-20:00",
  description:
    "La mejor experiencia de internet con fibra óptica para tu hogar o negocio. Velocidad, estabilidad y servicio técnico excepcional.",
  socialMedia: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/digotelecom",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/digotelecom/",
    },
  ],
};

import asistenciaImg from "@/assets/images/digo-asistencia.jpg";
import toritoImg from "@/assets/images/digo_torito.png";
import jugueteImg from "@/assets/images/digo-juguete.jpg";
import pascuaImg from "@/assets/images/digo-pascua.jpg";

export const carouselImages = [asistenciaImg, toritoImg, jugueteImg, pascuaImg];
