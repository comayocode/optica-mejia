const AddBillForm = ({ button }) => {
  return (
    <form className='billing-form'>
      <div className='billing-form__first-group'>
        <div className='billing-form__div'>
          <input className='billing-form__input' type='text' required />
          <label className='billing-form__label' htmlFor='cedula'>
            Id Factura
          </label>
        </div>

        <div className='billing-form__div'>
          <input
            className='billing-form__input'
            id='edad'
            type='text'
            required
          />
          <label className='billing-form__label' htmlFor='nombres'>
            Fecha
          </label>
        </div>
      </div>

      <div className='billing-form__div'>
        <input className='billing-form__input' id='edad' type='text' required />
        <label className='billing-form__label' htmlFor='edad'>
          Cédula
        </label>
      </div>

      <div className='billing-form__div'>
        <input className='billing-form__input' id='edad' type='text' required />
        <label className='billing-form__label' htmlFor='edad'>
          Paciente
        </label>
      </div>

      <div className='billing-form__div'>
        <input className='billing-form__input' id='edad' type='text' required />
        <label className='billing-form__label' htmlFor='direccion'>
          Producto
        </label>
      </div>

      <div className='billing-form__div'>
        <input className='billing-form__input' id='edad' type='text' required />
        <label className='billing-form__label' htmlFor='celular_personal'>
          Total
        </label>
      </div>

      <div className='billing-form__first-group'>
        <div className='billing-form__div'>
          <input
            className='billing-form__input'
            id='edad'
            type='text'
            required
          />
          <label className='billing-form__label' htmlFor='celular_familiar'>
            Abono
          </label>
        </div>

        <div className='billing-form__div'>
          <input
            className='billing-form__input'
            id='edad'
            type='text'
            required
          />
          <label className='billing-form__label' htmlFor='ocupacion'>
            Saldo
          </label>
        </div>
      </div>

      {button}
    </form>
  );
};

export default AddBillForm;
