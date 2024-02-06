import { logo } from "../assets";
import '../stylesheets/Logo.css'

const Logo = ({click, isOpen}) => (
  /* Componente del logo de la aplicación */
  <div className='logo-container' onClick={click}>
    <img src={logo} alt='Logo optica mejía' className='main-menu__logo' />
    <p className='main-menu__logo-text' style={{display: isOpen ? "block" : "none"}}>OPTICA MEJIA</p>
  </div>
);

export default Logo;
