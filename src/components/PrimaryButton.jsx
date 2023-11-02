// import { Link, Route, Routes } from 'react-router-dom'
import '../stylesheets/PrimaryButton.css';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ text, link, icon, componentStyle, isTargetBlank }) => (
  <Link
    target={`${isTargetBlank ? '_BLANK' : ''}`.trim()}
    rel='noreferrer'
    to={link}
    className={`primary-btn ${
      componentStyle ? `${componentStyle}` : ''
    }`.trimEnd()}
  >
    <img src={icon} className='primary-btn__img' />
    {text}
  </Link>
);
export default PrimaryButton;
