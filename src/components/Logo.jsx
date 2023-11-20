import { logo } from "../assets";
import '../stylesheets/Logo.css'

const Logo = () => (
  /* Componente del logo de la aplicación */
  <div className='logo-container'>
    <img src={logo} alt='Logo optica mejía' className='main-menu__logo' />
    <p className='main-menu__logo-text'>Óptica Mejía</p>
  </div>
);

export default Logo;
