import '../stylesheets/AddHistory.css';

const AddHistory = () => {
  return (
    <div className='AddHistory'>
      <div className='AddHistory-container'>
        <div className='title-container'>
          <h2 className='title-history'>Agregar Historia Clínica</h2>
          <hr />
        </div>
        <div className='basic-data'>
          <HeaderAddHistory title='Datos Básicos & Diagnóstico' />
          <form className='basic-data-form'>
            <div className='basic-data-form__div'>
              <input className='basic-data-form__input' type='text' required />
              <label className='basic-data-form__label' htmlFor='fecha'>
                Fecha
              </label>
            </div>
            <div className='basic-data-form__div'>
              <input className='basic-data-form__input' type='text' required />
              <label className='basic-data-form__label' htmlFor='historia'>
                No. Historia
              </label>
            </div>
            <div className='basic-data-form__div'>
              <input className='basic-data-form__input' type='text' required />
              <label className='basic-data-form__label' htmlFor='nombres'>
                Nombres
              </label>
            </div>
            <div className='basic-data-form__div'>
              <input className='basic-data-form__input' type='text' required />
              <label className='basic-data-form__label' htmlFor='cedula'>
                Cédula
              </label>
            </div>
            <div className='basic-data-form__div basic-data-form__div--diagnosis'>
              <textarea
                className='basic-data-form__input basic-data-form__input--diagnosis'
                type='text'
                required
              />
              <label className='basic-data-form__label' htmlFor='diagnostico'>
                Diagnóstico
              </label>
            </div>
          </form>
        </div>
        <div className='formula'>
          <HeaderAddHistory title='Fórmula' />
          <form className='formula-form'>
            <h5 className='formula-form__eye-title'>Vista Izquierda</h5>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='esfera'
              >
                Esfera
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='cilindro'
              >
                Cilindro
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='eje'
              >
                Eje
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='adicion'
              >
                Adición
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='distancia-pupilar'
              >
                D. pupilar
              </label>
            </div>
            <h5 className='formula-form__eye-title'>Vista Derecha</h5>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='esfera'
              >
                Esfera
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='cilindro'
              >
                Cilindro
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='eje'
              >
                Eje
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='adicion'
              >
                Adición
              </label>
            </div>
            <div className='formula-form__div'>
              <input className='formula-form__input' type='text' required />
              <label
                className='formula-form__label formula-form__label--eye'
                htmlFor='distancia-pupilar'
              >
                D. pupilar
              </label>
            </div>
          </form>
        </div>
        <div className='prescription'>
          <HeaderAddHistory title='Recetario' />
          <form className='prescription-form'>
            <div className='prescription-form__div'>
              <textarea
                className='prescription-form__input'
                type='text'
                required
              />
              <label
                className='prescription-form__label'
                htmlFor='prescripción'
              >
                Prescripción
              </label>
            </div>
          </form>
        </div>

        <a href='#' className='AddHistory__btn'>
          Registrar Historia
        </a>
      </div>
    </div>
  );
};

const HeaderAddHistory = ({ title }) => {
  return (
    <div className='HeaderAddHistory'>
      <h3>{title}</h3>
    </div>
  );
};

export default AddHistory;
