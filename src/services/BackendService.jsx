// Obtener token del localStorage
export const getAuthToken = () => {
  return window.localStorage.getItem('token');
};

/* Guardar token en localStorage */
export const setAuthHeader = (token) => {
  if (token !== null) {
    window.localStorage.setItem("token", token);
  } else {
    window.localStorage.removeItem("token");
  }
};