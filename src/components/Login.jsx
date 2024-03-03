import { useEffect, useState } from 'react';
import '../stylesheets/Auth.css';
import { FormButton, Logo } from './index';
import { Link, NavLink } from 'react-router-dom';
import { getAuthToken, setAuthHeader } from '../services/BackendService';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function Login() {
  // Conectar con la API y obtener la respuesta (data)
  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = 'http://localhost:8080/auth/';

  const onSubmit = (e) => {
    e.preventDefault();
    return (
      axios
        .post(API_URL + 'login', {
          username,
          password,
        })
        /* .then((response) => {
        if (response.data.token) {
          let token = response.data.token;
          console.log(`token: ${token}`);
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      }); */
        .then((response) => {
          if (response.status == 200) {
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
    );
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('USUARIO');

  useEffect(() => {
    let token = getAuthToken();
    if (token !== null) {
      setIsAuthenticated(true);
      const decoded = jwtDecode(token); // decodificar token
      const role = decoded.role; // obtener roles
      role.forEach((role) => {
        var userRole = role.authority; // obtener user authority
        console.log(userRole);
        setRole(userRole); // Pasar rol extraido
      });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Validar Rol o authenticación
  !isAuthenticated
    ? console.log('No autenticado, ve a login')
    : isAuthenticated && role === 'USUARIO'
    ? console.log(role, 'Autenticado, continua')
    : isAuthenticated && role === 'ADMINISTRADOR'
    ? console.log(role, 'Autenticado, continua')
    : '';

  const logout = () => {
    localStorage.removeItem('token');
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
          <form
            className='login-form'
            onSubmit={onSubmit}
            action='#'
            id='login-form'
          >
            <div className='item-form__wrapper'>
              <input
                className='item-form__input item-form__input--email'
                type='email'
                placeholder=''
                required
                onChange={(e) => setLogin(e.target.value)}
              />
              <label className='item-form__label'>Correo</label>
            </div>
            <div className='item-form__wrapper item-form__wrapper--login-password'>
              <input
                className='item-form__input'
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
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
