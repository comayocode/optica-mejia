import { testimonials } from '../constants';
import '../stylesheets/Testimonials.css';

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <h2 className='section-title'>Testimonios</h2>
      <div className='testimonials-container'>
        {testimonials.map((testimonial) => (
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
      <button className='testimonials__btn' href='#'>
        Contacta con nosotros
      </button>
    </section>
  );
};

export default Testimonials;
