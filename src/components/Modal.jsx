import '../stylesheets/Modal.css';
import { closeModal } from '../assets';

const Modal = ({ children, state, setState, title, modal }) => {
  return (
    <>
      {state && (
        <div className='overlay'>
          <div className={`${modal} modal-container`}>
            <div className='modal-header'>
              <h3 className='modal-header__title'>{title}</h3>
            </div>
            <a href='#' className='modal-container__close-btn' onClick={() => setState(false)}>
              <img
                className='modal-container__close-img'
                src={closeModal}
                alt='Close modal'
              />
            </a>
            {children} {/* Renderiza lo que se agregue en el componente <Modal> JUSTO ACÁ </Modal> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
