import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'; /* Importar hooks de la librería para las tablas */
import '../stylesheets/DataTable.css';
import { useState } from 'react';
import { search, firstPage, prevPage, nextPage, lastPage } from '../assets';

const DataTable = ({ data, columns, boton, widthVariant, state, setState }) => {
  const [sorting, setSorting] = useState([]); /* Hook para ordenar los datos */
  const [filtering, setfiltering] = useState(''); /* Hook para filtrar los datos */

  const table = useReactTable({
    data: data, 
    columns: columns,
    getCoreRowModel: getCoreRowModel(), /* Obtener las filas de los datos */
    getPaginationRowModel: getPaginationRowModel(), /* Obtener la paginación */
    getSortedRowModel: getSortedRowModel(), /* Obtener el ordenamiento de datos */
    getFilteredRowModel: getFilteredRowModel(), /* Obtener el filtrado de datos */
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
          {/* Botón superior izquiedo de la tabla */}
          <div
            className='btn-table-container'
            onClick={() => setState(!state)}
          >
            {boton}
          </div>

          {/* Barra de filtrado o búsqueda de datos */}
          <div className='search-container'>
            <input
              className='search-input'
              type='text'
              value={filtering} /* Datos filtrados */
              onChange={(e) => setfiltering(e.target.value)} /* Obtener el valor que se quiere buscar */
              placeholder='Buscar pacientes'
            />
            <img className='search-img' src={search} alt='search button' />
          </div>
        </div>

        <div className='table-container'>
          <div className={widthVariant}/* 'table-spacing' */>
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => ( /* Recorrer arreglo de los encabezados */
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => ( /* Obtener ecabezado individualmente */
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()} /* Al hacer clic en un encabezado ordenar los datos */
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header, /* Definir la columna del encabezado */
                              header.getContext()
                            )}
                            {
                              { asc: '⬆️', desc: '⬇️' }[ /* Agregar el ícono por odenamiento descendente o ascendente */
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
                {/* Se repite el proceso de la misma manera que los encabezado */}
                {table.getRowModel().rows.map((row) => ( /* Se recorre cada fila de datos */
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => ( /* Se recorre la fila obteniendo cada dato (celda) */
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
        {/* Paginación de la tabla */}
        <div className='pagination-container'>
          <div className='pagination__buttons'>
            <button
              className='pagination__first-page'
              onClick={() => table.setPageIndex(0)} /* Ir a la primera página */
            >
              <img src={firstPage} />
              First
            </button>
            <button
              className='pagination__prev-page'
              onClick={() => table.previousPage()} /* Ir a la anterior página */
            >
              {' '}
              <img src={prevPage} /> Prev
            </button>
            <button
              className='pagination__next-page'
              onClick={() => table.nextPage()} /* Ir a la siguiente página */
            >
              Next <img src={nextPage} />
            </button>
            <button
              className='pagination__last-page'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)} /* Ir a la última página */
            >
              Last <img src={lastPage} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
