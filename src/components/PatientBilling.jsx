import '../stylesheets/PatientBilling.css';
import { see } from '../assets';
import { createColumnHelper } from '@tanstack/react-table';
import patientBilling from '../data/patient_billing.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DataTable, ButtonTable, Modal } from '.';

const columnHelper = createColumnHelper();

const patientBillingArr = [];

patientBilling.map((data) => {
  patientBillingArr.push(data);
});

const columns = [
  {
    header: 'ID Factura',
    accessorKey: 'id_billing',
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

const PatientBilling = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className='PatientBilling'>
      <div className='title-container'>
        <h2 className='title-patient-billing-history'>
          Historial de Facturas de un Paciente
        </h2>
      </div>
      <DataTable
        data={patientBillingArr}
        columns={columns}
        widthVariant='table__spacing--billing-details'
        boton={<ButtonTable texto='Nueva Factura' />}
        state={modalState}
        setState={setModalState}
      />

      <Modal
        state={modalState}
        setState={setModalState}
        title='Registrar nueva Factura'
        modal='modal-container--patient-billing-history'
      >
        <form className='billing-form'>
          <div className='billing-form__first-group'>
            <div className="billing-form__div">
              <input className='billing-form__input' type="text" required />
              <label className='billing-form__label' htmlFor='cedula'>Id Factura</label>
            </div>

            <div className="billing-form__div">
              <input className='billing-form__input' id='edad' type="text" required />
              <label className='billing-form__label' htmlFor='nombres'>Fecha</label>
            </div>
          </div>

          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='edad'>Cédula</label>
          </div>

          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='edad'>Paciente</label>
          </div>

          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='direccion'>Producto</label>
          </div>

          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='celular_personal'>Total</label>
          </div>

          <div className="billing-form__first-group">
          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='celular_familiar'>Abono</label>
          </div>

          <div className="billing-form__div">
            <input className='billing-form__input' id='edad' type="text" required />
            <label className='billing-form__label' htmlFor='ocupacion'>Saldo</label>
          </div>
          </div>

          <a href="#" className='billing-form__btn'>Registrar</a>
        </form>
      </Modal>
    </div>
  );
};

export default PatientBilling;
