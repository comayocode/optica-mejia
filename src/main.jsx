import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
//import { Route, Routes } from 'react-router-dom';
import {
  Login,
  Admin,
  Signup,
  ProtectedRoute,
  PatientDetail,
  AddBill,
  AddHistory,
  AddUser,
} from './components';
import AuthProvider from './Auth/AuthProvider.jsx';
import PatientList from './components/PatientList.jsx';
//import { ListaPacientes, MedicalHistory, Billing, PatientHistory, PatientBilling, PatientBillingDetail, AddUser, PatientDetail, AddHistory, AddBill } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: '/admin/patients',
            element: <PatientList />,
          },
          {
            path: '/admin/patient-detail',
            element: <PatientDetail />,
          },
          {
            path: '/admin/add-history',
            element: <AddHistory />,
          },
          {
            path: '/admin/add-bill',
            element: <AddBill />,
          },
          {
            path: '/admin/users',
            element: <AddUser />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  /* Rutas de la aplicación */
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  /* <BrowserRouter>
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
        <Route path='add-history' element={<AddHistory />} />
        <Route path='add-bill' element={<AddBill />} />
      </Route>
    </Routes>
  </BrowserRouter> */
);
