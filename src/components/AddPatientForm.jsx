import { addPatientForm } from "../constants";

function AddPatientForm() {
  return (
    <form className='patient-form'>
      {addPatientForm.map((info) => (
        <div key={info.id} className='patient-form__div'>
          <input
            className='patient-form__input'
            id={info.id}
            type='text'
            required
          />
          <label className='patient-form__label' htmlFor={info.htmlFor}>
            {info.text}
          </label>
        </div>
      ))}

      <a href='#' className='patient-form__btn'>
        Registrar
      </a>
    </form>
  );
}

export default AddPatientForm;
