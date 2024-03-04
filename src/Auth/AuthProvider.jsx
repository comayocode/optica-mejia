import { useContext, createContext, useState, useEffect } from 'react';
import { getAuthToken } from '../services/BackendService';

const AuthContext = createContext({
  isAuthenticated: false,
  saveUser: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState({});

  // --- Evitar cerrar sesion al refrescar la página
  useEffect(() => {
    checkAuth();
  }, [])

  const checkAuth = () => {
    let token = getAuthToken();
    if (token !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  const saveUser = (userData) => {
    setAccessToken(userData.token);
    setIsAuthenticated(true);
  };

  // --- Cerrar sesión
  const signOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signOut, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
