import { about } from '../constants';
import '../stylesheets/About.css';

const About = () => (
  <section id='about' className='about'>
    <h2 className='section-title'>Sobre Nosotros</h2>
    {about.map((value) => ( /* Recorrer la constante para la sección about */
      <div key={value.id} className='about-content'>
        <div className='img-container'>
          <img
            src={value.img} /* Establecer la imagen */
            alt='Sobre optica mejia'
            className='about__img'
          />
        </div>
        <div className='about-description-container'>
          <p className='about__description'>{value.text1}</p> {/* Establecer el primer párrafo */}
          <br />
          <p className='about__description'>{value.text2}</p> {/* Establecer el segundo párrafo */}
        </div>
      </div>
    ))}
  </section>
);

export default About;
