import {
  bloodPressureMonitor,
  bloodPressureSvg,
  doctorVisit,
  educationIcon,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  monitor,
  whatsappIcon,
} from "./assets";
import doctorSvg from "./assets/doctor.svg?url";

const idPages = {
  services: "services",
  about: "about",
  misionVision: "mision-vision",
  contact: "contact",
};

const navLinks = [
  {
    id: idPages.services,
    title: "Servicios",
    url: `/#${idPages.services}`,
  },
  {
    id: idPages.about,
    title: "¿Quiénes Somos?",
    url: `/quienes-somos`,
  },
  {
    id: idPages.misionVision,
    title: "Misión y Visión",
    url: "/mision-vision",
  },
  {
    id: idPages.contact,
    title: "Contacto",
    url: `/#${idPages.contact}`,
  },
];

const services = [
  {
    title: "Monitorización ambulatoria de la presión arterial (MAPA).",
    description: "",
    image: bloodPressureMonitor,
  },
  {
    title: "Toma de la presión arterial por personal capacitado.",
    description: "",
    image: doctorSvg,
  },
  {
    title: "Electrocardiograma.",
    description: "",
    image: monitor,
  },
  {
    title: "Visita médica domiciliaria.",
    description: "",
    image: doctorVisit,
  },
  {
    title:
      "Educación sobre la prevención y cuidados de la hipertensión arterial.",
    description: "",
    image: educationIcon,
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
  phones: ["324 876 1872", "316 248 4028"],
  email: [],
};

export { idPages, navLinks, services, education, socials, contactInfo };
