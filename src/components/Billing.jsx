import '../stylesheets/Billing.css';
import { see } from '../assets';
import { createColumnHelper } from '@tanstack/react-table';
import patientBilling from '../data/patient_billing.json';
import { Link } from 'react-router-dom';
import { DataTable } from '.';

const columnHelper = createColumnHelper();

const patientBillingArr = [];

/* Recorrer la información de los datos */
patientBilling.map((data) => {
  patientBillingArr.push(data); /* Agregar los datos al arreglo */
});

/* Columnas o headers establecidas para los datos */
const columns = [
  {
    header: 'Cédula',
    accessorKey: 'cc',
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  columnHelper.accessor('action', { /* Columna para la acción con los datos de la fila */
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link to='../patient-billing' className='action-table-btn see-btn'> {/* Ruta a la que apunda la acción */}
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
      {/* Componente pasándole la información de las facturas de los pacientes */}
      <DataTable
        data={patientBillingArr}
        columns={columns}
        widthVariant='table__spacing--patients--billing'
      />
    </div>
  );
};

export default Billing;
