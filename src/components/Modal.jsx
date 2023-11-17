import '../stylesheets/Modal.css';
import { closeModal } from '../assets';

const Modal = ({ children, state, setState }) => {
  return (
    <>
      {state && (
        <div className='overlay'>
          <div className='modal-container'>
            <div className='modal-header'>
              <h3 className='modal-header__title'>Registrar nuevo paciente</h3>
            </div>
            <a href='#' className='modal-container__close-btn' onClick={() => setState(false)}>
              <img
                className='modal-container__close-img'
                src={closeModal}
                alt='Close modal'
              />
            </a>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
