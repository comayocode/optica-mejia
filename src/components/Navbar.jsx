import { useState } from 'react';

import '../stylesheets/Navbar.css';
import { close, menu, login } from '../assets';
import { navLinks, socialMedia } from '../constants';
import { PrimaryButton } from './index';
import { Logo } from './index';

const Navbar = () => {
  /* useState para abrir o cerrar el menú mobile */
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='main-menu'>
      <a href='#home' className='nav-logo'>
        <Logo />
      </a>
      <ul className='main-menu__list hidden'>
        {/* Recorrer la constante navLinks para crear el menú de navegación */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`main-menu__item ${
              index === navLinks.length - 1
                ? 'main-menu__item--margin-bottom-0'
                : 'main-menu__item--margin-bottom-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* Componente para ingresar al Login */}
        <PrimaryButton
          text='Ingresar'
          link='login'
          icon={login}
          componentStyle='primary-btn--login-desktop'
          isTargetBlank={false}
        />
      </ul>

      {/* Íconos de redes sociales */}
      <div className='social-media'>
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

      {/* Estructura del menú mobile */}
      <div className='mobile-menu'>
        <img
          src={toggle ? close : menu} /* si está abiero el menú se usa el icono close */
          alt='menu'
          className='mobile-menu__img'
          onClick={() => setToggle((state) => !state)} /* cambiar el estado del menú abierto o cerrado */
        />
        <div className={`${toggle ? 'flex' : 'hidden'} mobile-menu__card`}> {/* Mostrar o ocultar la card del menú */}
          <ul className='main-menu__list main-menu__list--mobile'>
            {navLinks.map((nav, index) => ( /* Recorrer la contaste de los links de navegación */
              <li
                key={nav.id}
                className={`main-menu__item main-menu__item--mobile ${
                  index === navLinks.length - 1
                    ? 'main-menu__item--margin-right-0'
                    : 'main-menu__item--margin-right-10'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* Componente para ingresar al Login desde la vista mobile */}
            <PrimaryButton
              text='Ingresar'
              link='login'
              icon={login}
              componentStyle='primary-btn--navbar-mobile'
              isTargetBlank={false}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
