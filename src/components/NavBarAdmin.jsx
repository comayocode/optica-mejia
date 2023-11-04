import '../stylesheets/NavBarAdmin.css';
import { adminNavLinks, user } from '../constants';
import { Logo } from './index';
import { Link } from 'react-router-dom';
import {
  LuLogOut,
  LuUser,
  LuFileSpreadsheet,
  LuDollarSign,
} from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

const NavBarAdmin = () => {
  return (
    <aside className='menu-card'>
      <nav className='admin-nav'>
        <div className='top-menu'>
          <div className='admin-nav__logo'>
            <Logo />
            {/* <img src={close}  /> */}
            <span className='close-menu'>
              <IoMdClose />
            </span>
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
  );
};

export default NavBarAdmin;
