import {
  gallery01, gallery02, gallery03, gallery04, gallery05, aboutImg,
  heroTextLine, heroImg, facebook, youtube, whatsapp, instagram
} from '../assets';

export const hero = {
  img: heroImg,
  tittle: "Profesionales de confianza para el cuidado de tus ojos",
  decoration: heroTextLine,
  description: "Optica Mejía es una clínica de atención médica profesional que se especializa en el examen, diagnóstico, tratamiento de problemas de visión y enfermedades oculares."
}

export const about = {
  img: aboutImg,
  text1: "Somos una empresa con más de 20 años de experiencia en el mercado de la oftalmología dando lo mejor de nosotros para ofrecerte la mejor y la mejor calidad, tanto de atención al cliente como en nuestro catálogo de productos.",
  text2: "Queremos generar satisfacción a nuestros clientes, que nos recomienden no sólo porque encuentran la solución a sus problemas en nosotros, sino porque entragamos experiencias superiores, ofreciendo lo mejor de nosotros como empresa."
}

export const products = [
  {
    id: "producto-01",
    img: gallery01
  },
  {
    id: "producto-02",
    img: gallery02
  },
  {
    id: "producto-03",
    img: gallery03
  },
  {
    id: "producto-04",
    img: gallery04
  },
  {
    id: "producto-05",
    img: gallery05
  },
]

export const navLinks = [
  {
    id: "inicio",
    title: "Inicio"
  },
  {
    id: "nosotros",
    title: "Sobre nosotros"
  },
  {
    id: "productos",
    title: "Productos"
  },
  {
    id: "testimonios",
    title: "Testimonios"
  },
  {
    id: "contacto",
    title: "Contacto"
  },
]

export const socialMedia = [
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/"
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/"
  },
  {
    id: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/"
  },
  {
    id: "whatsapp",
    icon: whatsapp,
    link: "https://www.whatsapp.com/"
  }
]