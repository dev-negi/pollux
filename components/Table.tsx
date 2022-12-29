import { useMemo } from 'react'
import Link from 'next/link'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'

function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['slug'],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  console.log('state:-', state)
  return (
    <div className="m-2 px-4">
      <table {...getTableProps()} className="min-w-full leading-normal">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      {cell.column.Header === 'Name' ? (
                        <Link
                          href={`/admin/product/?slug=${cell.row.original.slug}`}
                        >
                          {cell.render('Cell')}
                        </Link>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* <div className="flex justify-between items-center">
        <div className="flex justify-evenly">
          <div
            className="pr-2"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </div>
          <div
            className="pr-2 pl-2"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </div>
          <div
            className="pr-2 pl-2"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </div>
          <div
            className="pr-2 pl-2"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </div>
        </div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  )
}

export default Table
