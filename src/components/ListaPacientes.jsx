import '../stylesheets/ListaPacientes.css';
import { DataTable } from '.';
import patientsList from '../data/patients.json';

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
];

const ListaPacientes = () => {
  return (
    <div className='ListaPacientes'>
      <div className='title-container'>
        <h2 className='title-patients-list'>Lista de Pacientes</h2>
      </div>
        <DataTable data={patientsList} columns={columns} />
    </div>
  );
};

export default ListaPacientes;
