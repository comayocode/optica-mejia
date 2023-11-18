import '../stylesheets/MedicalHistory.css';
import { DataTable } from '.';
import patientsMedicalHistory from '../data/patients_medical_history.json';
import { createColumnHelper } from '@tanstack/react-table';
import { see } from '../assets';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper();

const medicalHistory = [];

patientsMedicalHistory.map((data) => {
  medicalHistory.push(data);
});

const columns = [
  {
    header: 'Cédula',
    accessorKey: 'cc',
  },
  {
    header: 'Nombre',
    accessorKey: 'patient',
  },
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link to='../patient-history' className='action-table-btn see-btn'>
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const MedicalHistory = () => {
  return (
    <div className='MedicalHistory'>
      <div className='title-container'>
        <h2 className='title-medical-history'>
          Historial Clínico de Pacientes
        </h2>
      </div>
      <DataTable
        data={patientsMedicalHistory}
        columns={columns}
        widthVariant='table__spacing--history'
      />
    </div>
  );
};

export default MedicalHistory;
