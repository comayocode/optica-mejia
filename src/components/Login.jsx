import '../stylesheets/Login.css';
import { Logo, PrimaryButton } from './index';

function Login() {
  return (
    <div className='Login'>
      <header className='login-header'>
        <Logo />
      </header>
      <div className='content-section--login'>
        <form action='#' className='login-form'>
          <div className='inputs-container'>
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
          <PrimaryButton
              text='Ingresar'
              link='dashboard'
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
