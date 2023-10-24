import { about } from '../constants';
import '../stylesheets/About.css';

const About = () => (
  <section id='about' className='about'>
    <h2 className='section-title'>Sobre Nosotros</h2>
    {about.map((value) => (
      <div key={value.id} className='about-content'>
        <div className='img-container'>
          <img
            src={value.img}
            alt='Sobre optica mejia'
            className='about__img'
          />
        </div>
        <div className='about-description-container'>
          <p className='about__description'>{value.text1}</p>
          <br />
          <p className='about__description'>{value.text2}</p>
        </div>
      </div>
    ))}
  </section>
);

export default About;
