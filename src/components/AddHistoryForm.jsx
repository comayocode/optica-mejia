import { useEffect, useState } from 'react';
import { getAuthToken } from '../services/BackendService';
import axios from 'axios';
import { API_URL } from '../Auth/Constants';

const AddHistoryForm = ({ patientId, button }) => {
  // const [form, setForm] = useState({});
  let token = getAuthToken();
  console.log({token});
  /* const [code, setCode] = useState();
  const [observations, setObservations] = useState();
  const [prescription, setPrescription] = useState(); */
  /*  */
  /* useEffect(() => {
    setCode(2);
    setObservations('Prueba desde codigo de frontend');
    setPrescription('Prueba desde codigo de frontend');
  }, []); */

  // console.warn({ code, observations, prescription });

  // obtener valores de formulario y guardarlos
  /* const handleChange = (id, event) => {
    const newForm = { ...form, [id]: event.target.value };
    setForm(newForm);
  }; */

  const form = {
    "code": 2,
    "observations": "Prueba onbservaciones desde codigo frontend",
    "prescription": "Prueba prescripcion desde codigo frontend"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          `
          ${API_URL}/clinic-history/${patientId}`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          if (response.status == 200) {
            return response.data;
          } else {
            return console.log(`${API_URL}/patient/${patientId}`);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='patient-history-form' onSubmit={handleSubmit}>
      <div className='patient-history-form__first-group'>
        <div className='patient-history-form__div'>
          <input className='patient-history-form__input' type='text'  />
          <label className='patient-history-form__label' htmlFor='cedula'>
            Fecha
          </label>
        </div>
        <div className='patient-history-form__div'>
          <input
            className='patient-history-form__input'
            type='text'
            /* value={code}
            onChange={(e) => setCode(e.target.value)} */
            
          />
          <label className='patient-history-form__label' htmlFor='cedula'>
            No. Historia
          </label>
        </div>
      </div>

      <div className='patient-history-form__second-group'>
        <div className='patient-history-form__div patient-history-form__div--diagnosis'>
          <textarea
            className='patient-history-form__input patient-history-form__input--diagnosis'
            /* value={observations}
            onChange={(e) => setObservations(e.target.value)} */
            
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
            /* value={prescription}
            onChange={(e) => setPrescription(e.target.value)} */
            
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
