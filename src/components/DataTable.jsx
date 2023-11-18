import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import '../stylesheets/DataTable.css';
import { useState } from 'react';
import { search, firstPage, prevPage, nextPage, lastPage } from '../assets';
import { Modal } from './';

const DataTable = ({ data, columns, boton, widthVariant }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setfiltering] = useState('');
  const [modalState, setModalState] = useState(false);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setfiltering,
  });

  return (
    <>
      <div className='DataTable'>
        <div className='actions'>
          <div
            className='btn-table-container'
            onClick={() => setModalState(!modalState)}
          >
            {boton}
          </div>

          <div className='search-container'>
            <input
              className='search-input'
              type='text'
              value={filtering}
              onChange={(e) => setfiltering(e.target.value)}
              placeholder='Buscar pacientes'
            />
            <img className='search-img' src={search} alt='search button' />
          </div>
        </div>

        <div className='table-container'>
          <div className={widthVariant}/* 'table-spacing' */>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {
                              { asc: '⬆️', desc: '⬇️' }[
                                header.column.getIsSorted() ?? null
                              ]
                            }
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='pagination-container'>
          <div className='pagination__buttons'>
            <button
              className='pagination__first-page'
              onClick={() => table.setPageIndex(0)}
            >
              <img src={firstPage} />
              First
            </button>
            <button
              className='pagination__prev-page'
              onClick={() => table.previousPage()}
            >
              {' '}
              <img src={prevPage} /> Prev
            </button>
            <button
              className='pagination__next-page'
              onClick={() => table.nextPage()}
            >
              Next <img src={nextPage} />
            </button>
            <button
              className='pagination__last-page'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              Last <img src={lastPage} />
            </button>
          </div>
        </div>
      </div>

      <Modal state={modalState} setState={setModalState}>
        <form className='patient-form'>
          <div className="patient-form__div">
            <input className='patient-form__input' type="text" required />
            <label className='patient-form__label' htmlFor='cedula'>Cédula</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='nombres'>Nombres</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='edad'>Edad</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='direccion'>Dirección</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='celular_personal'>Celular Personal</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='celular_familiar'>Celular Familiar</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='ocupacion'>Ocupación</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='eps'>EPS</label>
          </div>

          <div className="patient-form__div">
            <input className='patient-form__input' id='edad' type="text" required />
            <label className='patient-form__label' htmlFor='patologias'>Patologías</label>
          </div>
          
          <a href="#" className='patient-form__btn'>Registrar</a>
        </form>
      </Modal>
    </>
  );
};

export default DataTable;
