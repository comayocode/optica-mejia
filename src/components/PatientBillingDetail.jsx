import '../stylesheets/PatientBillingDetail.css'

const PatientBillingDetail = () => {
  return (
    <div className='PatientBillingDetail'>
      <div className='title-container'>
        <h2 className='title-patient-billing-history'>
          Detalles de la Factura
        </h2>
      </div>
      {/* Campos donde se rellena la data de la factura individual */}
      <div className='billing-detail-container'>
      <div className='billing-detail__first-group'>
            <div className="billing-detail__div">
              <input className='billing-detail__input' type="text" required />
              <label className='billing-detail__label' htmlFor='cedula'>Id Factura</label>
            </div>

            <div className="billing-detail__div">
              <input className='billing-detail__input' id='edad' type="text" required />
              <label className='billing-detail__label' htmlFor='nombres'>Fecha</label>
            </div>
          </div>

          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='edad'>Cédula</label>
          </div>

          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='edad'>Paciente</label>
          </div>

          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='direccion'>Producto</label>
          </div>

          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='celular_personal'>Total</label>
          </div>

          <div className="billing-detail__first-group">
          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='celular_familiar'>Abono</label>
          </div>

          <div className="billing-detail__div">
            <input className='billing-detail__input' id='edad' type="text" required />
            <label className='billing-detail__label' htmlFor='ocupacion'>Saldo</label>
          </div>
          </div>
      </div>
    </div>
  )
}

export default PatientBillingDetail