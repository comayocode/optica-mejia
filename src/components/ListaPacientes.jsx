import '../stylesheets/ListaPacientes.css';
import { DataTable, ButtonTable } from '.';
import patientsList from '../data/patients.json';
import { createColumnHelper } from '@tanstack/react-table';
import { deleteBtn, editBtn } from '../assets';

const columnHelper = createColumnHelper();

const listPatients = [];

patientsList.map((data) => {
  listPatients.push(data);
});

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
  return (
    <div className='ListaPacientes'>
      <div className='title-container'>
        <h2 className='title-patients-list'>Lista de Pacientes</h2>
      </div>
      <DataTable data={patientsList} columns={columns} boton={<ButtonTable  texto="Nuevo paciente"/>} />
    </div>
  );
};

export default ListaPacientes;
