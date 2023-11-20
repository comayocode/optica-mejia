// import { Link, Route, Routes } from 'react-router-dom'
import '../stylesheets/PrimaryButton.css';
import { Link } from 'react-router-dom';

/* Componente de botón primario que recibe varias props para personalizarlo según el caso */
const PrimaryButton = ({ text, link, icon, componentStyle, isTargetBlank }) => (
  <Link
    target={`${isTargetBlank ? '_BLANK' : ''}`.trim()} /* Si tiene isTargetBlank es true se abre el enlace en una pestaña nueva del navegador */
    rel='noreferrer'
    to={link}
    className={`primary-btn ${
      componentStyle ? `${componentStyle}` : ''
    }`.trimEnd()} /* Clase personalizada pasada por el prop */
  >
    <img src={icon} className='primary-btn__img' />
    {text}
  </Link>
);
export default PrimaryButton;
