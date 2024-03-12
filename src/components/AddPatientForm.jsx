import { useState } from 'react';
import { addPatientForm } from '../constants';
import axios from 'axios';
import { API_URL } from '../Auth/Constants';
import { getAuthToken } from '../services/BackendService';

const AddPatientForm = ({ setState, button }) => {
  const [form, setForm] = useState({});
  let token = getAuthToken();

  // obtener valores de formulario y guardarlos
  const handleChange = (id, event) => {
    const newForm = { ...form, [id]: event.target.value };
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(`
          ${API_URL}/patient`,
          form,
          { headers: { Authorization: `Bearer ${token}` },})
        .then((response) => {
        if (response.status == 200) {
          setState(false) // cerrar formulario modal
          return response.data;
        } else {
          return null;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='patient-form' onSubmit={handleSubmit} action='#'>
      {addPatientForm.map((info) => (
        <div key={info.id} className='patient-form__div'>
          <input
            className='patient-form__input'
            id={info.id}
            type='text'
            value={form[info.id] || ''}
            onChange={(e) => handleChange(info.id, e)}
            required
          />
          <label className='patient-form__label' htmlFor={info.htmlFor}>
            {info.text}
          </label>
        </div>
      ))}

      {button}
    </form>
  );
};

export default AddPatientForm;
