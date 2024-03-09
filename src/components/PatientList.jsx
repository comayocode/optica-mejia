import '../stylesheets/PatientList.css';
import { DataTable, ButtonTable, Modal, AddPatientForm } from '.';
import patientsList from '../data/patients.json';
import { createColumnHelper } from '@tanstack/react-table';
import { see } from '../assets';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Auth/Constants';
import { getAuthToken } from '../services/BackendService';

const columnHelper = createColumnHelper();

const listPatients = [];

/* Recorrer data del JSON */
patientsList.map((data) => {
  listPatients.push(data); /* Enviar datos al arreglo vacio */
});

/* Columnas o headers para pasarle a la tabla */
const columns = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Cédula',
    accessorKey: 'cc',
  },
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Edad',
    accessorKey: 'age',
  },
  {
    header: 'Dirección',
    accessorKey: 'address',
  },
  {
    header: 'Celular personal',
    accessorKey: 'personal_cellphone',
  },
  columnHelper.accessor('action', {
    id: 'Accion',
    header: 'Acción',
    cell: () => (
      <div className='actions-column'>
        <Link to='../patient-detail' className='action-table-btn see-btn'>
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const PatientList = () => {
  const [modalState, setModalState] =
    useState(false); /* Estado del modal "abierto" o "cerrado" */

  const [patientsData, setPatientsData] = useState([]);
  const [patientsDataToDetail, setPatientsDataToDetail] = useState([]);
  const [id, setId] = useState([]);
  const [address, setAddress] = useState([]);
  const [age, setage] = useState([]);
  const [cc, setCc] = useState([]);
  const [eps, setEps] = useState([]);
  const [familyCellphone, setFamilyCellphone] = useState([]);
  const [name, setName] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [pathologies, setPathologies] = useState([]);
  const [personalCellphone, setPersonalCellphone] = useState([]);
  let token = getAuthToken();

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = () => {
    try {
      axios
        .get(`${API_URL}/patient`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setPatientsData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='PatientList'>
      <div className='title-container'>
        <h2 className='title-patients-list'>Lista de Pacientes</h2>
      </div>
      {/* Renderizar tabla pasándole la data, headers y demás propiedades de la misma */}
      <DataTable
        data={patientsData}
        columns={columns}
        boton={<ButtonTable texto='Nuevo paciente' />}
        widthVariant='table__spacing--patients'
        state={modalState}
        setState={setModalState}
      />

      {/* Modal o ventana flotante para registrar un nuevo paciente */}
      <Modal
        state={modalState}
        setState={setModalState}
        title='Registrar nuevo paciente'
      >
        <AddPatientForm />
      </Modal>
    </div>
  );
};

export default PatientList;
