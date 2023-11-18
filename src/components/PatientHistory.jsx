import '../stylesheets/PatientHistory.css';
import patientMedicalHistory from '../data/patient_medical_history.json';
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable, ButtonTable } from '.';
import { see } from '../assets';

const columnHelper = createColumnHelper();

const patientHistory = [];

patientMedicalHistory.map((data) => {
  patientHistory.push(data);
});

const columns = [
  {
    header: 'No. Historia',
    accessorKey: 'history_num',
  },
  {
    header: 'Fecha',
    accessorKey: 'date',
  },
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <a className='action-table-btn see-btn'>
          <img src={see} />
        </a>
      </div>
    ),
  }),
];

const PatientHistory = () => {
  return (
    <div className='PatientHistory'>
      <div className='title-container'>
        <h2 className='title-medical-patient-history'>Historial Clínico de un Único Paciente</h2>
      </div>
      <DataTable
        data={patientMedicalHistory}
        columns={columns}
        widthVariant='table__spacing--history-details'
        boton={<ButtonTable  texto="Nueva Historia"/>}
      />
    </div>
  );
};

export default PatientHistory;
