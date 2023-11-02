import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);
