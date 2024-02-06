import '../stylesheets/Admin.css';
import { Outlet } from 'react-router-dom';
import { close, menu, addPatient } from '../assets';
import { useState } from 'react';

import { adminNavLinks, user } from '../constants';
import { Logo, PrimaryButton } from './index';
import { NavLink } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';

let screenWidth = screen.width;

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Admin'>
      {/* Menú lateral de navegación */}
      {/* Mostrar un menú u otro, dependiendo del ancho de la pantalla */}
      {screenWidth > 768 ? (
        <DesktopAside toggle={toggle} isOpen={isOpen} />
      ) : (
        <MobileAside toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <div className={`admin__content` }>
        <HeaderAdmin toggleP={isOpen} setToggleP={setIsOpen} />
        <Outlet /> {/* Renderizar componente de ruta anidada */}
      </div>
    </div>
  );
};

/* Header del panel de administración con el menú hamburguesa */
const HeaderAdmin = ({ toggleP, setToggleP }) => {
  return (
    <header className='HeaderAdmin'>
      {/* Ocultar o mostrar menú hamburguesa */}
      {screenWidth < 768 ? (
        <img
          src={toggleP ? close : menu} //Cambiar ícono del menu hamburguesa si está abierto o no el menú lateral
          alt='menu'
          className='header-menu'
          onClick={() => setToggleP((state) => !state)} //Cambiar el estado toggle al dar clic
        />
      ) : (
        <></>
      )}

      {/* Ocultar o mostrar tipo de usuario */}
      {screenWidth > 768 ? (
        user.map((info) => (
          <div key={info.id} className='profile__user'>
            <img
              src={info.img}
              style={{ height: '30px', borderRadius: '7px' }}
            />
            <div className='user-profile-text-wrap'>
              <span className='profile__rol'>{info.rolTopMenu}</span>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}

      <div className='perfil'>
        <img src='' alt='' />
      </div>
    </header>
  );
};

// Menú latera en computadores
const DesktopAside = ({ toggle, isOpen }) => {
  return (
    <aside
      className={`menu-card`}
      style={{
        width: isOpen ? '260px' : '87px',
      }}
    >
      <nav className='admin-nav'>
        <div className='top-menu'>
          <div className='admin-nav__logo'>
            <Logo click={toggle} isOpen={isOpen} />
          </div>

          {/* Botón para agregar paciente si está abierto o cerrad el menú */}
          {isOpen ? (
            <PrimaryButton
              text='Agregar Paciente'
              icon={addPatient}
              componentStyle='primary-btn--navbar-open'
            />
          ) : (
            <PrimaryButton
              icon={addPatient}
              componentStyle='primary-btn--navbar-close'
            />
          )}
        </div>
        <div className='mid-menu'>
          <ul className='admin-nav__component-links'>
            {adminNavLinks.map(
              (
                link,
                index /* Recorrer datos de la constante para los links de navegación del panel admin */
              ) => (
                <li
                  key={link.id}
                  className={`admin-nav__li ${
                    index === adminNavLinks.length - 1
                      ? 'admin-nav__li--margin-bottom-0'
                      : 'admin-nav__li--margin-bottom-10'
                  }`}
                >
                  <NavLink
                    to={link.id}
                    className={`admin-nav__link`}
                    style={{ width: !isOpen ? '48px' : '' }}
                  >
                    <span className='admin-nav__icon'>
                      {link.id === link.id ? <img src={link.icon}></img> : ''}
                    </span>
                    <span
                      className='admin-nav__text'
                      style={{ display: !isOpen ? 'none' : 'block' }}
                    >
                      {link.title}
                    </span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        {/* "footer del menú donde se ubica el usuario que ingresa al panel" */}
        <div
          className='admin-nav__extra-actions'
          style={{ width: isOpen ? '200px' : '48px' }}
        >
          <div className='profile-container'>
            {user.map((info) => (
              <div key={info.id} className='profile__user'>
                <img src={info.img} className='user-profile__pic' />
                <div
                  className='user-profile-text-wrap'
                  style={{ display: isOpen ? 'flex' : 'none' }}
                >
                  <span className='user-profile__rol'>{info.rolAside}</span>
                  <span className='user-profile__name'>{info.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='logout' style={{ display: isOpen ? 'flex' : 'none' }}>
            <NavLink to='/login'>
              <span className='logout-icon'>
                <LuLogOut />
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

// Menú latera en móviles
const MobileAside = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`${isOpen ? 'active' : 'flex'} menu-card`}>
      <nav className='admin-nav'>
        <div className='top-menu'>
          <div className='admin-nav__logo'>
            <Logo isOpen={true} />
          </div>

          <PrimaryButton
            text='Agregar Paciente'
            icon={addPatient}
            componentStyle='primary-btn--navbar-open'
          />
        </div>
        <div className='mid-menu'>
          <ul className='admin-nav__component-links'>
            {adminNavLinks.map(
              (
                link,
                index /* Recorrer datos de la constante para los links de navegación del panel admin */
              ) => (
                <li
                  key={link.id}
                  className={`admin-nav__li ${
                    index === adminNavLinks.length - 1
                      ? 'admin-nav__li--margin-bottom-0'
                      : 'admin-nav__li--margin-bottom-10'
                  }`}
                >
                  <NavLink
                    to={link.id}
                    className={`admin-nav__link`}
                    onClick={() => setIsOpen((state) => !state)} //Ocultar menú al dar clic a una opción
                  >
                    <span className='admin-nav__icon'>
                      {link.id === link.id ? <img src={link.icon}></img> : ''}
                    </span>
                    <span className='admin-nav__text'>{link.title}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        {/* "footer del menú donde se ubica el usuario que ingresa al panel" */}
        <div className='admin-nav__extra-actions'>
          <div className='profile-container'>
            {user.map((info) => (
              <div key={info.id} className='profile__user'>
                <img src={info.img} className='user-profile__pic' />
                <div className='user-profile-text-wrap'>
                  <span className='user-profile__rol'>{info.rolAside}</span>
                  <span className='user-profile__name'>{info.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='logout'>
            <NavLink to='/login'>
              <span className='logout-icon'>
                <LuLogOut />
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Admin;
