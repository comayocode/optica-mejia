import '../stylesheets/PatientHistory.css';
import patientMedicalHistory from '../data/patient_medical_history.json';
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable, ButtonTable, Modal } from '.';
import { see } from '../assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to='../patient-history-detail' className='action-table-btn see-btn'>
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const PatientHistory = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className='PatientHistory'>
      <div className='title-container'>
        <h2 className='title-medical-patient-history'>
          Historial Clínico de un Único Paciente
        </h2>
      </div>
      <DataTable
        data={patientMedicalHistory}
        columns={columns}
        widthVariant='table__spacing--history-details'
        boton={<ButtonTable texto='Nueva Historia' />}
        state={modalState}
        setState={setModalState}
      />

      <Modal
        state={modalState}
        setState={setModalState}
        title='Registrar nueva historia'
        modal='modal-container--patient-history'
      >
        <form className='patient-history-form'>
          <div className='patient-history-form__first-group'>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label' htmlFor='cedula'>
                Fecha
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label' htmlFor='cedula'>
                No. Historia
              </label>
            </div>
          </div>

          <div className='patient-history-form__second-group'>
          <div className='patient-history-form__div patient-history-form__div--diagnosis'>
              <textarea className='patient-history-form__input patient-history-form__input--diagnosis' required />
              <label className=' patient-history-form__label patient-history-form__label--diagnosis' htmlFor='cedula'>
                Diagnóstico
              </label>
            </div>
          </div>

          <div className='patient-history-form__third-group'>
            <h4>Fórmula</h4>
            <div className="patient-history-form__formula">
              <h5 className='patient-history-form__eye-title'>Vista Izquierda</h5>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Esfera
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Cilindro
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Eje
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Adición
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                D. pupilar
              </label>
            </div>
            <h5 className='patient-history-form__eye-title'>Vista Derecha</h5>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Esfera
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Cilindro
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Eje
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                Adición
              </label>
            </div>
            <div className='patient-history-form__div'>
              <input className='patient-history-form__input' type='text' required />
              <label className='patient-history-form__label patient-history-form__label--eye' htmlFor='cedula'>
                D. pupilar
              </label>
            </div>
            </div>
          </div>

          <div className="patient-history-form__fourth-group">
          <div className='patient-history-form__div patient-history-form__div--diagnosis'>
              <textarea className='patient-history-form__input patient-history-form__input--diagnosis' required />
              <label className=' patient-history-form__label patient-history-form__label--diagnosis' htmlFor='cedula'>
                Recetario
              </label>
            </div>
          </div>
          <a href='#' className='patient-history-form__btn'>
            Registrar
          </a>
        </form>
      </Modal>
    </div>
  );
};

export default PatientHistory;
