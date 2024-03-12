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

var patientToDetail = {}; // paciente seleccionado a pasarlo a patient detail por medio del state de <Link />

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
        <Link
          className='action-table-btn see-btn'
          to={{
            pathname: '../patient-detail',
          }}
          state={{ patientToDetail }} // enviar data de la columna seleccionada
        >
          <img src={see} />
        </Link>
      </div>
    ),
  }),
];

const PatientList = () => {
  const [modalState, setModalState] =
    useState(false); /* Estado del modal "abierto" o "cerrado" */

  const [patientSelected, setPatientSelected] = useState({}); // paciente seleccionado de la tabla

  // traer paciente de fila seleccionada de DataTable
  const onRowClick = (row) => {
    setPatientSelected(row);
  };

  patientToDetail = patientSelected; // enviar a variable que guarda fue del componente

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
        setPatientSelected={onRowClick} // pasar como prop función que recibe fila seleccionada
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
