import '../stylesheets/Admin.css';
import { Outlet } from 'react-router-dom';
import { close, menu } from '../assets';
import { useState } from 'react';

import { adminNavLinks, user } from '../constants';
import { Logo } from './index';
import { Link } from 'react-router-dom';
import {
  LuLogOut,
  LuUser,
  LuFileSpreadsheet,
  LuDollarSign,
} from 'react-icons/lu';

/* Header del panel de administración con el menú hamburguesa */
const HeaderAdmin = (props) => {
  return (
    <header className='HeaderAdmin'>
      <img
        src={props.toggleP ? close : menu} /* Cambiar ícono del menu hamburguesa si está abierto o no el menú lateral */
        alt='menu'
        className='header-menu'
        onClick={() => props.setToggleP((state) => !state)} /* Cambiar el estado toggle al dar clic */
      />
    </header>
  );
};

const Admin = () => {
  const [toggle, setToggle] = useState(false); /* Hook useState para saber si está abierto o cerrado el menú */


  return (
    <div className='Admin'>
      {/* Menú lateral de navegación */}
      <aside className={`${toggle ? 'active' : 'flex'} menu-card`}>
        <nav className='admin-nav'>
          <div className='top-menu'>
            <div className='admin-nav__logo'>
              <Logo />
            </div>
            <ul className='admin-nav__component-links'>
              {adminNavLinks.map((link, index) => ( /* Recorrer datos de la constante para los links de navegación del panel admin */
                <li
                  key={link.id}
                  className={`admin-nav__li ${
                    index === adminNavLinks.length - 1
                      ? 'admin-nav__li--margin-bottom-0'
                      : 'admin-nav__li--margin-bottom-10'
                  }`}
                >
                  {/* Establecer ícono para cada link y su ruta a la que apunta */}
                  <span className='admin-nav__icon'>
                    {link.id === 'patients' ? (
                      <LuUser />
                    ) : link.id === 'medical-history' ? (
                      <LuFileSpreadsheet />
                    ) : link.id === 'billing' ? (
                      <LuDollarSign />
                    ) : (
                      ''
                    )}
                  </span>
                  <Link to={link.id} className='admin-nav__link'>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* "footer del menú donde se ubica el usuario que ingresa al panel" */}
          <div className='admin-nav__extra-actions'>
            <div className='profile-container'>
              {user.map((info) => (
                <div key={info.id} className='profile__user'>
                  <img src={info.img} className='user-profile__pic' />
                  <div className='user-profile-text-wrap'>
                    <span className='user-profile__rol'>{info.rol}</span>
                    <span className='user-profile__name'>{info.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className='logout'>
              <Link to='/login'>
                <span className='logout-icon'>
                  <LuLogOut />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      <div className='header-menu'>
        <HeaderAdmin toggleP={toggle} setToggleP={setToggle} /> {/* Pasar información al componente sobre el estado del menú */}
        <Outlet /> {/* Renderizar componente de ruta anidada */}
      </div>
    </div>
  );
};

export default Admin;
