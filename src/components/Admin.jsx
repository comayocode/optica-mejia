import '../stylesheets/Admin.css';
import { Route, Routes } from 'react-router-dom';
import { ListaPacientes, MedicalHistory, Billing } from '.';
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

const HeaderAdmin = (props) => {
  return (
    <header className='HeaderAdmin'>
      <img
        src={props.toggleP ? close : menu}
        alt='menu'
        className='header-menu'
        onClick={() => props.setToggleP((state) => !state)}
      />
    </header>
  );
};

const Admin = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className='Admin'>
      <aside className={`${toggle ? 'active' : 'flex'} menu-card`}>
        <nav className='admin-nav'>
          <div className='top-menu'>
            <div className='admin-nav__logo'>
              <Logo />
            </div>
            <ul className='admin-nav__component-links'>
              {adminNavLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`admin-nav__li ${
                    index === adminNavLinks.length - 1
                      ? 'admin-nav__li--margin-bottom-0'
                      : 'admin-nav__li--margin-bottom-10'
                  }`}
                >
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
        <HeaderAdmin toggleP={toggle} setToggleP={setToggle} />

        <Routes>
          <Route path='/patients' element={<ListaPacientes />} />
          <Route path='/medical-history' element={<MedicalHistory />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
