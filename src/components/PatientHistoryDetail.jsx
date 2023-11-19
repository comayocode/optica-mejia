import '../stylesheets/PatientHistoryDetail.css';

export const PatientHistoryDetail = () => {
  return (
    <div className='PatientHistoryDetail'>
      <div className='title-container'>
        <h2 className='title-medical-patient-history'>
          Detalles de la Historia Clínica
        </h2>
      </div>
      <div className='history-detail-container'>
        <div className='history-detail__first-group'>
          <div className='history-detail-form__div'>
            <input
              className='history-detail-form__input'
              type='text'
              required
            />
            <label className='history-detail-form__label' htmlFor='cedula'>
              Cédula
            </label>
          </div>
          <div className='history-detail-form__div'>
            <input
              className='history-detail-form__input'
              type='text'
              required
            />
            <label className='history-detail-form__label' htmlFor='nombre'>
              Nombre
            </label>
          </div>
          <div className='history-detail-form__div'>
            <input
              className='history-detail-form__input'
              type='text'
              required
            />
            <label className='history-detail-form__label' htmlFor='celular'>
              Celular
            </label>
          </div>
          <div className='history-detail-form__div'>
            <input
              className='history-detail-form__input'
              type='text'
              required
            />
            <label className='history-detail-form__label' htmlFor='fecha'>
              Fecha
            </label>
          </div>
        </div>

        <div className='history-detail__second-group'>
          <div className='history-detail-form__div history-detail-form__div--diagnosis'>
            <textarea
              className='history-detail-form__input history-detail-form__input--diagnosis'
              required
            />
            <label className='history-detail-form__label' htmlFor='diagnostico'>
              Diagnóstico
            </label>
          </div>
        </div>

        <div className='history-detail__third-group'>
          <div className='history-detail-form__formula'>
            <h5 className='history-detail-form__eye-title'>Vista Izquierda:</h5>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Esfera
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Cilindro
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Eje
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Adición
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                D. pupilar
              </label>
            </div>
            <h5 className='history-detail-form__eye-title'>Vista Derecha:</h5>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Esfera
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Cilindro
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Eje
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                Adición
              </label>
            </div>
            <div className='history-detail-form__div'>
              <input
                className='history-detail-form__input'
                type='text'
                required
              />
              <label
                className='history-detail-form__label history-detail-form__label--eye'
                htmlFor='cedula'
              >
                D. pupilar
              </label>
            </div>
          </div>
        </div>

        <div className='history-detail__fourth-group'>
          <div className='history-detail-form__div'>
            <textarea
              className='history-detail-form__input history-detail-form__input--diagnosis'
              required
            />
            <label className='history-detail-form__label' htmlFor='recetario'>
              Recetario
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistoryDetail;
