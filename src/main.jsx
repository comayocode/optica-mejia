import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login, Admin, PatientHistoryDetail } from './components';
import { ListaPacientes, MedicalHistory, Billing, PatientHistory, PatientBilling, PatientBillingDetail, AddUser, PatientDetail } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  /* Rutas de la aplicación */
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin/*' element={<Admin />}>
        <Route path='patients' element={<ListaPacientes />} />
        <Route path='medical-history' element={<MedicalHistory />} />
        <Route path='patient-history' element={<PatientHistory />} />
        <Route path='patient-history-detail' element={<PatientHistoryDetail />} />
        <Route path='billing' element={<Billing />} />
        <Route path='patient-billing' element={<PatientBilling />} />
        <Route path='patient-billing-detail' element={<PatientBillingDetail />} />
        <Route path='users' element={<AddUser />} />
        <Route path='patient-detail' element={<PatientDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
