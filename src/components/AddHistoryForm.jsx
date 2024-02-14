const AddHistoryForm = ({ button }) => {
  return (
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
          <textarea
            className='patient-history-form__input patient-history-form__input--diagnosis'
            required
          />
          <label
            className=' patient-history-form__label patient-history-form__label--diagnosis'
            htmlFor='cedula'
          >
            Diagnóstico
          </label>
        </div>
      </div>

      <div className='patient-history-form__third-group'>
        <h4>Fórmula</h4>
        <div className='patient-history-form__formula'>
          <h5 className='patient-history-form__eye-title'>Vista Izquierda</h5>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Esfera
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Cilindro
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Eje
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Adición
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              D. pupilar
            </label>
          </div>
          <h5 className='patient-history-form__eye-title'>Vista Derecha</h5>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Esfera
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Cilindro
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Eje
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              Adición
            </label>
          </div>
          <div className='patient-history-form__div'>
            <input
              className='patient-history-form__input'
              type='text'
              required
            />
            <label
              className='patient-history-form__label patient-history-form__label--eye'
              htmlFor='cedula'
            >
              D. pupilar
            </label>
          </div>
        </div>
      </div>

      <div className='patient-history-form__fourth-group'>
        <div className='patient-history-form__div patient-history-form__div--diagnosis'>
          <textarea
            className='patient-history-form__input patient-history-form__input--diagnosis'
            required
          />
          <label
            className=' patient-history-form__label patient-history-form__label--diagnosis'
            htmlFor='cedula'
          >
            Recetario
          </label>
        </div>
      </div>
      {button}
    </form>
  );
};

export default AddHistoryForm;
