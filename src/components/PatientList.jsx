import '../stylesheets/ListaPacientes.css';
import { DataTable, ButtonTable, Modal, AddPatientForm } from '.';
import patientsList from '../data/patients.json';
import { createColumnHelper } from '@tanstack/react-table';
import { deleteBtn, editBtn } from '../assets';
import { useState } from 'react';

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
        <a className='action-table-btn edit-btn'>
          <img src={editBtn} />
        </a>{' '}
        <a className='action-table-btn delete-btn'>
          <img src={deleteBtn} />
        </a>
      </div>
    ),
  }),
];

const ListaPacientes = () => {

  const [modalState, setModalState] = useState(false); /* Estado del modal "abierto" o "cerrado" */

  return (
    <div className='ListaPacientes'>
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

export default ListaPacientes;
