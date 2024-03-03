import { Link, NavLink } from 'react-router-dom';
import { Logo, FormButton } from '.';
import '../stylesheets/Register.css';

const Signup = () => {
  return (
    <div className='Signup'>
      <header className='login-header'>
        <Link to='/' className='login-header__link'>
          <Logo isOpen={true} />
        </Link>
      </header>
      <div className='register-form-container'>
        <div className='register-form-card'>
          <div className='register-form__title'>
            <h2>Registro</h2>
            <hr />
          </div>
          <form className='signup-form'>
            <div className='signup-form__div'>
              <input className='signup-form__input' type='text' required />
              <label className='signup-form__label' htmlFor='nombres'>
                Nombres
              </label>
            </div>
            <div className='signup-form__div'>
              <input className='signup-form__input' type='text' required />
              <label className='signup-form__label' htmlFor='apellidos'>
                Apellidos
              </label>
            </div>
            <div className='signup-form__div'>
              <input
                className='signup-form__input signup-form__input--email'
                type='email'
                placeholder=''
                required
              />
              <label className='signup-form__label' htmlFor='correo'>
                Correo
              </label>
            </div>
            <div className='signup-form__div'>
              <input className='signup-form__input' type='password' required />
              <label className='signup-form__label' htmlFor='contrasena'>
                Contraseña
              </label>
            </div>
            <FormButton
              type='submit'
              componentStyle='primary-btn--register'
              text='Registrar'
            />
          </form>
          <div className='goto-login'>
            ¿Ya tienes una cuenta?
            <NavLink className='goto-login__link' to='/login'>
              Igresa aquí
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
