import '../stylesheets/Modal.css';
import { closeModal } from '../assets';

/* Modal o ventana emergente para el registro de información en formulario */
const Modal = ({ children, state, setState, title, modal }) => {
  return (
    <>
    {/* Mostrar maquetación si el estado es true "abierto" */}
      {state && (
        <div className='overlay'>
          <div className={`${modal} modal-container`}>
            <div className='modal-header'>
              <h3 className='modal-header__title'>{title}</h3>
            </div>
            <a className='modal-container__close-btn' onClick={() => setState(false)}> {/* Cerrar el modal y cambiar su estado */}
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
