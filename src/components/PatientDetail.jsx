import '../stylesheets/PatientDetail.css';
import { editBtn, addHistoryFrom, addBillForm, see } from '../assets';

/* --- Historial clínico --- */
import { DataTable, Modal, AddHistoryForm, AddBillForm, AddPatientForm } from '.';
import patientMedicalHistory from '../data/patient_medical_history.json';
import patientBilling from '../data/patient_billing.json';
import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';

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
      <HistoryActionColum />
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
      <BillsActionColumn />
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
          <HeaderPatientDetail title='Historial Clínico' icon={addHistoryFrom} />
          <DataTable
            data={patientMedicalHistory}
            columns={historyColumns}
            widthVariant='table__spacing--patient-history'
          />
        </div>

        <div className='patient__bills'>
          <HeaderPatientDetail title='Facturas' icon={addBillForm} />
          <DataTable
            data={patientBillingArr}
            columns={BillingColumns}
            widthVariant='table__spacing--patient-bills'
          />
        </div>
      </div>
    </div>
  );
};

// --- Header de "tarjetas" ---
const HeaderPatientDetail = ({ title, icon }) => {

  const [modalEditState, setModalEditState] = useState(false); // Hook para modal de actualizar paciente
  const [modalAddHistoryState, setModalAddHistoryState] = useState(false); // Hook para modal agregar historia clínica
  const [modalAddBillState, setModalAddBillState] = useState(false); // Hook para modal agregar factura

  return (
    <div className='HeaderPatientDetail'>
      <h3>{title}</h3>

      {/* Validar si el ícono corresponde para actualizar datos del paciente; agregar historia clínica o agregar factura. Dependiendo del ícono se abre un modal u otro */}
      {icon == '/src/assets/Edit.svg' ? <img src={icon} onClick={() => setModalEditState(!modalEditState)}/> : icon == '/src/assets/AddHistoryFrom.svg' ? <img src={icon} onClick={() => setModalAddHistoryState(!modalAddHistoryState)}/> : <img src={icon} onClick={() => setModalAddBillState(!modalAddBillState)}/>}

      {/* --- Modal para actualizar datos del paciente --- */}
      <Modal state={modalEditState} setState={setModalEditState} title='Actualizar Paciente'>
        <AddPatientForm button={<EditPatientButton text='Actualizar' />} />
      </Modal>

      {/* --- Modal para agregar una historia clínica --- */}
      <Modal
        state={modalAddHistoryState}
        setState={setModalAddHistoryState}
        title='Registrar nueva historia'
        modal='modal-container--patient-history'
      >
        <AddHistoryForm button={< AddHistoryButton text='Registrar'/>}/>
      </Modal>

      {/* --- Modal para agregar una factura --- */}
      <Modal
        state={modalAddBillState}
        setState={setModalAddBillState}
        title='Registrar nueva Factura'
        modal='modal-container--patient-billing-history'
      >
        <AddBillForm button={<AddBillButton text='Registrar' />}/>
      </Modal>
    </div>
  );
};

// --- Botones para los modales (Detalles, Historia clínica y Facturas) ---
const EditPatientButton = ({ text }) => {
  return (
    <a href='#' className='patient-form__btn'>
      {text}
    </a>
  );
};
const AddHistoryButton = ({ text }) => {
  return (
    <a href='#' className='patient-history-form__btn'>
        {text}
    </a>
  );
};
const AddBillButton = ({ text }) => {
  return (
    <a href='#' className='billing-form__btn'>
        {text}
      </a>
  );
};

// --- Columna de acciones para la tabla de Facturas ---
const BillsActionColumn = () => {

  const [ editBillState, setEditBillState] = useState (false); // Estado para editar factura
  const [ seeBillState, setSeeBillState] = useState(false); // Estado para ver detalle de factura

  return (
    <div className='actions-column'>
      <a
        onClick={() => setEditBillState(!editBillState)}
        className='action-table-btn edit-btn'>
        <img src={editBtn} />
      </a>
      <a
        onClick={() => setSeeBillState(!seeBillState)}
        className='action-table-btn see-btn'
      >
        <img src={see} />
      </a>

      {/* --- Modal para ver detalles de la factura */}
      <Modal
        state={seeBillState}
        setState={setSeeBillState}
        title='Detalle de Factura'
        modal='modal-container--patient-billing-history'
      >
        <AddBillForm />
      </Modal>

      {/* --- Modal para editar una factura --- */}
      <Modal
        state={editBillState}
        setState={setEditBillState}
        title='Actualizar Factura'
        modal='modal-container--patient-billing-history'
      >
        <AddBillForm  button={<AddBillButton text='Actualizar'/>} />
      </Modal>


    </div>
  );
};
// --- Columna de acciones para la tabla de Historia Clínica ---
const HistoryActionColum = () => {

  const [seeHistoryState, setSeeHistoryState] = useState(false); // Estado para ver Historia clínica
  const [editHistoryState, setEditHistoryState] = useState(false); // Estado para actualizar Historia clínica

  return (
    <div className='actions-column'>
      <a
        onClick={() => setEditHistoryState(!editHistoryState)}
        className='action-table-btn edit-btn'>
        <img src={editBtn} />
      </a>
      <a
        onClick={() => setSeeHistoryState(!seeHistoryState)}
        className='action-table-btn see-btn'>
        <img src={see} />
      </a>

      {/* --- Modal para ver Historia Clínica --- */}
      <Modal
        state={seeHistoryState}
        setState={setSeeHistoryState}
        title='Detalle de la Historia Clínica'
        modal='modal-container--patient-history'
      >
        <AddHistoryForm />
      </Modal>

      {/* --- Modal para editar/actualizar Historia Clínica --- */}
      <Modal
        state={editHistoryState}
        setState={setEditHistoryState}
        title='Actualizar Historia Clínica'
        modal='modal-container--patient-history'
      >
        <AddHistoryForm button={<AddHistoryButton text='Actualizar' />}/>
      </Modal>
    </div>
  );
};

export default PatientDetail;