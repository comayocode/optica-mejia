import '../stylesheets/PatientDetail.css';
import { editBtn, addDetail, see } from '../assets';

/* --- Historial clínico --- */
import { DataTable } from '.';
import patientMedicalHistory from '../data/patient_medical_history.json';
import patientBilling from '../data/patient_billing.json';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper();

/* --- HISTORIA CLÍNICA --- */
/* ------------------------ */
const medicalHistory = [];

/* Recorrer archivo JSON */
patientMedicalHistory.map((data) => {
  medicalHistory.push(data); /* Insertar datos al arreglo vacío */
});

/* Columnas o headers para la tabla de Historia Clínica */
const historyColumns = [
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
        <Link className='action-table-btn edit-btn'>
          <img src={editBtn} />
        </Link>
        <Link to='../patient-history' className='action-table-btn see-btn'>
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

/* --- FACTURAS --- */
/* ---------------- */
const patientBillingArr = [];

/* Recorrer data del JSON */
patientBilling.map((data) => {
  patientBillingArr.push(data); /* Insertar data en el arreglo vacío */
});

/* Columnas o headers necesarios para la tabla */
const BillingColumns = [
  {
    header: 'ID Factura',
    accessorKey: 'id_billing',
  },
  {
    header: 'Fecha',
    accessorKey: 'date',
  },

  /* Header para la acción */
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link className='action-table-btn edit-btn'>
          <img src={editBtn} />
        </Link>
        <Link
          to='../patient-billing-detail'
          className='action-table-btn see-btn'
        >
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

/* --- Detalles del paciente (información temporal) --- */
const patient = [
  {
    id: 'edad',
    texto: 'EDAD',
    detail: 25,
  },
  {
    id: 'direccion',
    texto: 'DIRECCIÓN',
    detail: 'Carrera XX#X-XX',
  },
  {
    id: 'celularPersonal',
    texto: 'CELULAR PERSONAL',
    detail: '322 310 1010',
  },
  {
    id: 'celularFamiliar',
    texto: 'CELULAR FAMILIAR',
    detail: '322 310 2020',
  },
  {
    id: 'ocupacion',
    texto: 'OCUPACIÓN',
    detail: 'Celadora',
  },
  {
    id: 'eps',
    texto: 'EPS',
    detail: 'SaludCoop',
  },
  {
    id: 'patologias',
    texto: 'PATOLOGÍAS',
    detail: 'N/A',
  },
];

const PatientDetail = () => {
  return (
    <div className='PatientDetail'>
      <div className='title-container'>
        <h2 className='title-patient-detail'>Registro del Paciente</h2>
      </div>

      <div className='patient'>
        <div className='patient__name'>
          <span className='patient__name-title'>Nombre:</span>
          <span className='patient__name-patient'>
            Angela María Castañeda Cifuentes
          </span>
        </div>
        <div className='patient__cc'>
          <span className='patient__cc-title'>Cédula:</span>
          <span className='patient__cc-patient'>45857123</span>
        </div>

        <div className='patient__detail'>
          <HeaderPatientDetail title='Detalles' icon={editBtn} />
          <div className='patient__detail-content'>
            {patient.map((info) => (
              <div key={info.id} className='patient-detail'>
                <span className='patient-detail__texto'>{info.texto}</span>
                <span className='patient-detail__detail'>{info.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='patient__history'>
          <HeaderPatientDetail title='Historial Clínico' icon={addDetail} />
          <DataTable
            data={patientMedicalHistory}
            columns={historyColumns}
            widthVariant='table__spacing--patient-history'
          />
        </div>

        <div className='patient__bills'>
          <HeaderPatientDetail title='Facturas' icon={addDetail} />
          <DataTable
            data={patientBillingArr}
            columns={BillingColumns}
            widthVariant='table__spacing--patient-bills'
            // boton={<ButtonTable texto='Nueva Factura' />}
            // state={modalState} /* Pasar el estado del modal */
            // setState={setModalState} /* regresar el estado del modal */
          />
        </div>
      </div>
    </div>
  );
};

const HeaderPatientDetail = ({ title, icon }) => {
  return (
    <div className='HeaderPatientDetail'>
      <h3>{title}</h3>
      <img src={icon} />
    </div>
  );
};

export default PatientDetail;
