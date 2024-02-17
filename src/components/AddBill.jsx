import '../stylesheets/AddBill.css';

const AddBill = () => {
  return (
    <div className='AddBill'>
      <div className='AddBill-container'>
        <div className='title-container'>
          <h2 className='title-bill'>Registrar Factura</h2>
          <hr />
        </div>
        <div className='add-bill-form-container'>
          <HeaderAddBill title='Factura' />
          <form className='billing-form'>
            {/* <div className='billing-form__first-group'> */}
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
            <div className='billing-form__div'>
              <input className='billing-form__input' type='text' required />
              <label className='billing-form__label' htmlFor='cedula'>
                Nombres
              </label>
            </div>
            <div className='billing-form__div'>
              <input className='billing-form__input' type='text' required />
              <label className='billing-form__label' htmlFor='cedula'>
                Cédula
              </label>
            </div>
            {/* </div> */}

            <div className='billing-form__div'>
              <input
                className='billing-form__input'
                id='edad'
                type='text'
                required
              />
              <label className='billing-form__label' htmlFor='direccion'>
                Producto
              </label>
            </div>

            <div className='billing-form__div'>
              <input
                className='billing-form__input'
                id='edad'
                type='text'
                required
              />
              <label className='billing-form__label' htmlFor='celular_personal'>
                Total
              </label>
            </div>

            {/* <div className='billing-form__first-group'> */}
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
            {/* </div> */}

            <div className='billing-form__div'>
              <textarea
                className='billing-form__input billing-form__input--note'
                id='edad'
                type='text'
                required
              />
              <label className='billing-form__label' htmlFor='ocupacion'>
                Nota
              </label>
            </div>

            <a href='#' className='billing-form__btn'>
              Registrar
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const HeaderAddBill = ({ title }) => {
  return (
    <div className='HeaderAddBill'>
      <h3>{title}</h3>
    </div>
  );
};

export default AddBill;
