import { contact } from '../constants';
import { socialMedia } from '../constants';
import { mapImg } from '../assets';
import '../stylesheets/Contact.css';

const Contact = () => (
  <section id='contact' className='contact'>
    <h2 className='section-title'>Contacto</h2>
    <div className='content-section'>
      <form action='#' className='contact-form'>
        <div className='inputs-container'>
          {contact.map((element, index) => (
            <div key={element.id} className={`input-box `}>
              <span className='input-box__text'>{element.text}</span>
              <input
                type='text'
                /* placeholder={element.placeholder} */
                className={`input-box__input ${'input-box__input' + '-' + (index + 1)}`}
              />
            </div>
          ))}
        </div>
        <button className='form-btn'>Enviar</button>
      </form>
      <div className='map-container'>
        <div className='map-info'>
          <p className='map__address'>
            BOGOTA D.C. 111711 <br /> Cra. 8a entre calles 12 y 13
          </p>
          <div className='map__img'>
            <img src={mapImg} alt='' />
          </div>
        </div>
      </div>
      <div className='contact-social-media'>
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            rel='noreferrer'
            target='_blank'
            className='social-media__link'
          >
            <img
              src={social.icon}
              alt={social.id}
              className={`social-media__img ${
                index === socialMedia.length - 1
                  ? 'main-menu__item--margin-right-0'
                  : 'main-menu__item--margin-right-10'
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
