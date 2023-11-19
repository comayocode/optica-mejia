import '../stylesheets/Billing.css';
import { see } from '../assets';
import { createColumnHelper } from '@tanstack/react-table';
import patientBilling from '../data/patient_billing.json';
import { Link } from 'react-router-dom';
import { DataTable } from '.';

const columnHelper = createColumnHelper();

const patientBillingArr = [];

patientBilling.map((data) => {
  patientBillingArr.push(data);
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
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link to='../patient-billing' className='action-table-btn see-btn'>
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const Billing = () => {
  return (
    <div className='Billing'>
      <div className='title-container'>
        <h2 className='title-billing'>
          Facturas de Todos los Pacientes
        </h2>
      </div>
      <DataTable
        data={patientBillingArr}
        columns={columns}
        widthVariant='table__spacing--patients--billing'
      />
    </div>
  );
};

export default Billing;
