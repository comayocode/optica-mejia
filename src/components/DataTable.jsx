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

const DataTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setfiltering] = useState('');

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
    <div className='DataTable'>
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

      <div className='table-container'>
        <div className='table-spacing'>
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
  );
};

export default DataTable;
