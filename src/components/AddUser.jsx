import DataTable from './DataTable';
import '../stylesheets/AddUser.css';
import users from '../data/users.json';
import { createColumnHelper } from '@tanstack/react-table';
import { editBtn, see } from '../assets';

const columnHelper = createColumnHelper();

/* --- Data y Columnas para tabla --- */
const registeredUsers = [];

users.map((data) => {
  registeredUsers.push(data);
});

const usersColumns = [
  {
    header: 'Nombre',
    accessorKey: 'nombre',
  },
  {
    header: 'Rol',
    accessorKey: 'rol',
  },
  {
    header: 'Correo',
    accessorKey: 'correo',
  },

  /* Header para la acción */
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      // <BillsActionColumn />
      <>
        <a className='action-table-btn see-btn'>
          <img src={see} />
        </a>
        <a className='action-table-btn see-btn'>
          <img src={editBtn} />
        </a>
      </>
    ),
  }),
];

function AddUser() {
  return (
    <div className='AddUser'>
      <div className='AddUser-container'>
        <div className='title-container'>
          <h2 className='title-user'>Registrar Usuarios</h2>
          <hr />
        </div>
        <div className='add-user'>
          <HeaderAddUser title='Agregar Usuarios' />

          <form className='add-user-form'>
            <div className='add-user-form__div'>
              <input className='add-user-form__input' type='text' required />
              <label className='add-user-form__label' htmlFor='nombre'>
                Nombre
              </label>
            </div>
            <div className='add-user-form__div'>
              <input className='add-user-form__input' type='text' required />
              <label className='add-user-form__label' htmlFor='rol'>
                Rol
              </label>
            </div>
            <div className='add-user-form__div'>
              <input className='add-user-form__input' type='text' required />
              <label className='add-user-form__label' htmlFor='correo'>
                Correo
              </label>
            </div>
            <div className='add-user-form__div'>
              <input className='add-user-form__input' type='text' required />
              <label className='add-user-form__label' htmlFor='contrasena'>
                Contraseña
              </label>
            </div>

            <a href='#' className='AddUser_btn'>
              Registrar
            </a>
          </form>
        </div>

        <div className='registered-users'>
          <HeaderAddUser title='Usuarios Registrados' />

          <DataTable
            data={registeredUsers}
            columns={usersColumns}
            widthVariant='table__spacing--add-user'
          />
        </div>
      </div>

      {/* <form className='add-user-form'>
        <div className='add-user-form__div'>
          <input className='add-user-form__input' type='text' required />
          <label className='add-user-form__label' htmlFor='nombres'>
            Nombres
          </label>
        </div>
        <div className='add-user-form__div'>
          <input className='add-user-form__input' type='text' required />
          <label className='add-user-form__label' htmlFor='nombres'>
            Correo
          </label>
        </div>
        <div className='add-user-form__div'>
          <input className='add-user-form__input' type='text' required />
          <label className='add-user-form__label' htmlFor='nombres'>
            Contraseña
          </label>
        </div>
        <a href='#' className='add-user-form__btn'>
          Registrar
        </a>
      </form>
 */}
      {/* <DataTable
        data={patientMedicalHistory}
        columns={columns}
        widthVariant='table__spacing--history-details'
        boton={<ButtonTable texto='Nueva Historia' />}
        state={modalState}
        setState={setModalState}
      /> */}
    </div>
  );
}

const HeaderAddUser = ({ title }) => {
  return (
    <div className='HeaderAddUser'>
      <h3>{title}</h3>
    </div>
  );
};

export default AddUser;
