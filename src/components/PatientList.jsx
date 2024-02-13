import '../stylesheets/PatientList.css';
import { DataTable, ButtonTable, Modal, AddPatientForm } from '.';
import patientsList from '../data/patients.json';
import { createColumnHelper } from '@tanstack/react-table';
import { see } from '../assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper();

const listPatients = [];

/* Recorrer data del JSON */
patientsList.map((data) => {
  listPatients.push(data); /* Enviar datos al arreglo vacio */
});

/* Columnas o headers para pasarle a la tabla */
const columns = [
  {
    header: 'Cédula',
    accessorKey: 'cc',
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Edad',
    accessorKey: 'age',
  },
  {
    header: 'Dirección',
    accessorKey: 'address',
  },
  {
    header: 'Celular',
    accessorKey: 'phone',
  },
  {
    header: 'Ocupación',
    accessorKey: 'job',
  },
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link
          to='../patient-detail'
          className='action-table-btn see-btn'
        >
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const PatientList = () => {

  const [modalState, setModalState] = useState(false); /* Estado del modal "abierto" o "cerrado" */

  return (
    <div className='PatientList'>
      <div className='title-container'>
        <h2 className='title-patients-list'>Lista de Pacientes</h2>
      </div>
      {/* Renderizar tabla pasándole la data, headers y demás propiedades de la misma */}
      <DataTable data={patientsList} columns={columns} boton={<ButtonTable  texto="Nuevo paciente"/>} widthVariant='table__spacing--patients' state={modalState} setState={setModalState}/>

      {/* Modal o ventana flotante para registrar un nuevo paciente */}
      <Modal state={modalState} setState={setModalState} title='Registrar nuevo paciente'>
        <AddPatientForm />
      </Modal>
    </div>
  );
};

export default PatientList;
