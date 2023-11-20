import { PrimaryButton } from './index';
import { testimonials } from '../constants';
import '../stylesheets/Testimonials.css';

const Testimonials = () => {
  return (
    /* Maquetar el contenido de los testimonios a travéz del contenido de la información de la constante  "testimonials"*/
    <section id='testimonials' className='testimonials'>
      <h2 className='section-title'>Testimonios</h2>
      <div className='testimonials-container'>
        {testimonials.map((testimonial) => ( /* Recorrer cada testimonio y maquetarlo */
          <div key={testimonial.id} className='testimonial'>
            <img
              src={testimonial.img}
              alt='Cliente optica mejia'
              className='testimonial__img'
            />
            <p className='testimonal__text'>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      {/* Componente del botón principal para contactar */}
      <PrimaryButton
        componentStyle='primary-btn--testimonials'
        text='Contacta con nosotros'
        link='https://www.whatsapp.com/'
      />
    </section>
  );
};

export default Testimonials;
