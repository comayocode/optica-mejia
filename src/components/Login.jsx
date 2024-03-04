import { useState } from 'react';
import '../stylesheets/Auth.css';
import { FormButton, Logo } from './index';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { setAuthHeader } from '../services/BackendService';
import axios from 'axios';
import { useAuth } from '../Auth/AuthProvider';
import { API_URL } from '../Auth/Constants';

function Login() {
  /* TODO:
   ** - Mostrar X vistas con X roles
   */
  /* !isAuthenticated
    ? console.log('No autenticado, ve a login')
    : isAuthenticated && role === 'USUARIO'
    ? console.log(role, 'Autenticado, continua')
    : isAuthenticated && role === 'ADMINISTRADOR'
    ? console.log(role, 'Autenticado, continua')
    : ''; */

  // --- Guardar y setear valores del formulario ---
  const [username, setUsername] = useState(''); // correo del formulario
  const [password, setPassword] = useState(''); // contraseña del formulario
  const [message, setMessage] = useState(''); // mensajes en caso de error con la conexión
  const goTo = useNavigate(); // navegar entre rutas

  /* --- Redirigir a ADMIN si el usuario está autenticado (evitar que entre a login o register) --- */
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to='/admin' />;
  }

  /* --- Componente para renderizar mensaje de la petición */
  const ResponseMessage = () => {
    return <div className={`response-message`}>{message}</div>;
  };

  /* --- Conexión --- */
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${API_URL}/auth/login`, {
          username,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            setMessage('');
            if (response.data.token !== null) {
              auth.saveUser(response.data); // enviar data de respuesta a AuthProvider
              goTo('/admin/users'); // si token es válido ir a admin
            }
            return response.data;
          } else {
            return null;
          }
        })
        .then((data) => {
          if (data !== null) {
            setAuthHeader(data['token']); // almacenar token
          } else {
            setAuthHeader(null);
          }
        })
        .catch((error) => {
          if (error.response) {
            console.error('Código de estado', error.response.status);
            if (error.response.status === 403) {
              setMessage('Credenciales inválidas');
            }
          } else if (error.request) {
            setMessage('No se recibió la respuesta del servidor');
          } else {
            setMessage('Error al configurar la petición', error.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='Login'>
      <header className='login-header'>
        <Link to='/' className='login-header__link'>
          <Logo isOpen={true} />
        </Link>
      </header>
      <div className='login-form-container'>
        <div className='login-form-card'>
          <div className='login-form__title'>
            <h2>Login</h2>
            <hr />
          </div>
          {message && <ResponseMessage />}
          <form
            className='login-form'
            onSubmit={handleSubmit}
            action='#'
            id='login-form'
          >
            <div className='item-form__wrapper'>
              <input
                className='item-form__input item-form__input--email'
                type='email'
                placeholder=''
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className='item-form__label'>Correo</label>
            </div>
            <div className='item-form__wrapper item-form__wrapper--login-password'>
              <input
                className='item-form__input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className='item-form__label'>Contraseña</label>
            </div>
            <NavLink
              className='login-form__forgot-password'
              to='/forgot-password'
            >
              <p>¿Olvidó su contraseña?</p>
            </NavLink>
            <FormButton
              type='submit'
              componentStyle='login-form__btn'
              text='Login'
            />
          </form>
          <div className='goto-signup'>
            ¿No tienes una cuenta?
            <NavLink className='goto-signup__link' to='/signup'>
              Regístrate
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
