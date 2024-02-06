import '../stylesheets/Login.css';
import { Logo, PrimaryButton } from './index';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Login'>
      <header className='login-header'>
        <Link to='/' className='login-header__link'>
          <Logo isOpen={true}/>
        </Link>
      </header>
      <div className='content-section--login'>
        {/* Formulario de LOGIN */}
        <form action='#' className='login-form'>
          <div className='inputs-login-container'>
            <div className='input-box'>
              <span className='input-box__text--login'>Correo:</span>
              <input className='input-box__input--login' type='text' />
            </div>
            <div className='input-box--login'>
              <span className='input-box__text--login'>Contraseña:</span>
              <input className='input-box__input--login' type='text' />
            </div>
          </div>
          <div className='btn-wrap'>
            {/* Componente de botón primario */}
            <PrimaryButton
              text='Ingresar'
              link='/admin/patients' /* Link de la ruta a la que apunta al dar clic */
              componentStyle='primary-btn--login'
              isTargetBlank={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
