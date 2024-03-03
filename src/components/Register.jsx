import { Link, NavLink } from 'react-router-dom';
import { Logo, FormButton } from '.';
import '../stylesheets/Auth.css';

const Signup = () => {
  return (
    <div className='Signup'>
      <header className='signup-header'>
        <Link to='/' className='signup-header__link'>
          <Logo isOpen={true} />
        </Link>
      </header>
      <div className='signup-form-container'>
        <div className='signup-form-card'>
          <div className='register-form__title'>
            <h2>Registro</h2>
            <hr />
          </div>
          <form className='signup-form'>
            <div className='item-form__wrapper'>
              <input className='item-form__input' type='text' required />
              <label className='item-form__label' htmlFor='nombres'>
                Nombres
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input className='item-form__input' type='text' required />
              <label className='item-form__label' htmlFor='apellidos'>
                Apellidos
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input
                className='item-form__input item-form__input--email'
                type='email'
                placeholder=''
                required
              />
              <label className='item-form__label' htmlFor='correo'>
                Correo
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input className='item-form__input' type='password' required />
              <label className='item-form__label' htmlFor='contrasena'>
                Contraseña
              </label>
            </div>
            <FormButton
              type='submit'
              componentStyle='signup-form__btn'
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
