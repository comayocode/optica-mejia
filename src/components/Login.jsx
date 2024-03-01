import { useEffect, useState } from 'react';
import '../stylesheets/Login.css';
import { Logo, PrimaryButton } from './index';
import { Link } from 'react-router-dom';
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
      <div className='content-section--login'>
        {/* Formulario de LOGIN */}
        <form
          onSubmit={onSubmit}
          action='#'
          id='login-form'
          className='login-form'
        >
          <div className='inputs-login-container'>
            <div className='input-box'>
              <span className='input-box__text--login'>Correo:</span>
              <input
                className='input-box__input--login'
                type='text'
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className='input-box--login'>
              <span className='input-box__text--login'>Contraseña:</span>
              <input
                className='input-box__input--login'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='btn-wrap'>
            {/* Componente de botón primario */}
            {/* <PrimaryButton
              type="document.getElementById('login-form').submit()"
              text='Ingresar'
              link='/admin/patients'
              componentStyle='primary-btn--login'
              isTargetBlank={false}
  /> */}
            {/* Botones temporales (borrar) */}
            <button type='submit'>Login</button>
            <button onClick={logout}>Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
