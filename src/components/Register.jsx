import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Logo, FormButton } from '.';
import '../stylesheets/Auth.css';
import { useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';
import { setAuthHeader } from '../services/BackendService';
import { API_URL } from '../Auth/Constants';
import axios from 'axios';

const Signup = () => {
  // datos de formulario
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // mensaje de errores con la conexión
  const [message, setMessage] = useState('');
  const goTo = useNavigate(); // navegar entre rutas

  // Componente para mostrar los errores de conexión
  const ResponseMessage = () => {
    return <div className={`response-message`}>{message}</div>;
  };

  /* --- Conexión simular a login --- */
  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post(`${API_URL}/auth/register`, {
        firstname,
        lastname,
        username,
        password,
      })
      .then((response) => {
        if (response.status == 200) {
          setMessage('');
          goTo('/login');
          return response.data;
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          setAuthHeader(data['token']);
        } else {
          setAuthHeader(null);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error('Código de estado', error.response.status);
          if (error.response.status === 403) {
            setMessage('Este correo ya existe');
          }
        } else if (error.request) {
          setMessage('No se recibió la respuesta del servidor');
        } else {
          setMessage('Error al configurar la petición', error.message);
        }
      });
  };

  // --- Redirigir a ADMIN si el usuario está autenticado (evitar que entre a login o register) ---
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return <Navigate to='/admin' />;
  }

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
          {message && <ResponseMessage />}
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='item-form__wrapper'>
              <input
                className='item-form__input'
                type='text'
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label className='item-form__label' htmlFor='nombres'>
                Nombres
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input
                className='item-form__input'
                type='text'
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className='item-form__label' htmlFor='apellidos'>
                Apellidos
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input
                className='item-form__input item-form__input--email'
                type='email'
                placeholder=''
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className='item-form__label' htmlFor='correo'>
                Correo
              </label>
            </div>
            <div className='item-form__wrapper'>
              <input
                className='item-form__input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
