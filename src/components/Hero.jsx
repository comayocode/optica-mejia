import '../stylesheets/Hero.css';
import { heroImg, heroTextLine } from '../assets';
import { hero } from '../constants';

const Hero = () => (
  <section id='home'>
    <div className='red-space'>
      <img src={heroImg} alt='Hero image' className='hero-img' />
    </div>
    <div className='hero-info'>
      <h1 className='hero-info__title'>{hero.tittle}</h1>
      <img src={heroTextLine} alt='Line decoration' className='hero-info__line-decoration'/>
      <p className='hero-info__description'>{hero.description}</p>
      <button className='hero-info__btn' href='https://www.youtube.com/'>
        Contacta con nosotros
      </button>
    </div>
  </section>
);

export default Hero;
