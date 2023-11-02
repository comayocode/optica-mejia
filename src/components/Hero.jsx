import '../stylesheets/Hero.css';
import { heroImg, heroTextLine, contactButton } from '../assets';
import { hero } from '../constants';
import PrimaryButton from './PrimaryButton';

const Hero = () => (
  <section id='home'>
    <div className='red-space'>
      <img src={heroImg} alt='Hero image' className='hero-img' />
    </div>
    <div className='hero-info'>
      <h1 className='hero-info__title'>{hero.tittle}</h1>
      <img src={heroTextLine} alt='Line decoration' className='hero-info__line-decoration'/>
      <p className='hero-info__description'>{hero.description}</p>
      <PrimaryButton
        text='Contacta con nosotros'
        link='https://www.whatsapp.com/'
        icon={contactButton}
      />
    </div>
  </section>
);

export default Hero;
