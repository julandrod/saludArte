import {
  bloodPressureSvg,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  whatsappIcon,
} from "./assets";
import doctorSvg from "./assets/doctor.svg?url";

const idPages = {
  services: "services",
  about: "about",
  contact: "contact",
};

const navLinks = [
  {
    id: idPages.services,
    title: "Servicios",
    url: `#${idPages.services}`,
  },
  {
    id: idPages.about,
    title: "Quienes Somos",
    url: `#${idPages.about}`,
  },
  {
    id: idPages.contact,
    title: "Contacto",
    url: `#${idPages.contact}`,
  },
];

const services = [
  {
    title: "MAPA (Monitoreo Ambulatorio de la Presión Arterial)",
    description:
      "Es un método técnico no invasivo que pretende obtener una medición de la presión arterial durante un período de 24 horas, de tal forma que los datos de tensión arterial recogidos puedan ser posteriormente analizados por un médico.",
    image: bloodPressureSvg,
  },
  {
    title: "Consultas de medicina general a domicilio",
    description:
      "Servicios médicos a domicilio. Tu salud, nuestra prioridad. Consultas, chequeos y cuidados en la comodidad de tu hogar. Atención profesional y dedicada.",
    image: doctorSvg,
  },
];

const education = [
  {
    title: "Sintomas de la hipertensión arterial",
    description: "Conoce los sintomas de la hipertension arterial.",
    bgColor: "#4fc7a4",
  },
  {
    title: "Sistema cardiovascular",
    description: "Información util acerca del sistema cardiovascular.",
    bgColor: "#33B0A9",
  },
  {
    title: "Cuidados y prevención",
    description: "Como evitar y cuidarnos de la hipertensión.",
    bgColor: "#2EA6A3",
  },
  {
    title: "Cómo mejorar la hipertensión",
    description: "Consejos utiles para mejorar la hipertensión.",
    bgColor: "#2097A0",
  },
];

const socials = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61551764199203",
    icon: facebookIcon,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/saludarte_mapa",
    icon: instagramIcon,
  },
  {
    title: "Whatsapp",
    url: "https://wa.me/573162484028",
    icon: whatsappIcon,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/saludarte-empresa/",
    icon: linkedinIcon,
  },
];

const contactInfo = {
  phones: ["316 248 4028"],
  email: [],
};

export { idPages, navLinks, services, education, socials, contactInfo };
