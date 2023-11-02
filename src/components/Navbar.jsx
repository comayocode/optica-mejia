import { useState } from 'react';

import '../stylesheets/Navbar.css';
import { close, menu, login } from '../assets';
import { navLinks, socialMedia } from '../constants';
import { PrimaryButton } from './index';
import { Logo } from './index'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='main-menu'>
      <Logo />
      <ul className='main-menu__list hidden'>
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
        <PrimaryButton
            text='Ingresar'
            link='login'
            icon={login}
            componentStyle='primary-btn--login-desktop'
            isTargetBlank={false}
          />
      </ul>

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

      <div className='mobile-menu'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='mobile-menu__img'
          onClick={() => setToggle((state) => !state)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} mobile-menu__card`}>
          <ul className='main-menu__list main-menu__list--mobile'>
            {navLinks.map((nav, index) => (
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
