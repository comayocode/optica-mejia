import { NavBarAdmin } from '.';
import '../stylesheets/Admin.css';
import { Route, Routes } from 'react-router-dom';
import { ListaPacientes, MedicalHistory, Billing } from '.';

const Admin = () => {
  return (
    <div className='Admin'>
      <NavBarAdmin />

      {/* <ListaPacientes /> */}

      <Routes>
        <Route path='/patients' element={<ListaPacientes />} />
        <Route path='/medical-history' element={<MedicalHistory />} />
        <Route path='/billing' element={<Billing />} />
      </Routes>
    </div>
  );
};

export default Admin;
