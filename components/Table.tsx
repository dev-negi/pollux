import { useMemo } from 'react'
import Link from 'next/link'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'

function Table({ data, columns, fetchProductData, currentPage }) {
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'Delete',
        Header: 'Delete',
        Cell: ({ row }) => (
          <button onClick={() => console.log(row.values)}>Delete</button>
        ),
      },
    ])
  }
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
    tableHooks,
    useSortBy,
    usePagination
  )
  const customPreviousPage = () => {
    fetchProductData(currentPage - 1)
  }

  const customNextPage = () => {
    fetchProductData(currentPage + 1)
  }

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
                          href={`/admin/product/edit/?slug=${cell.row.original.slug}`}
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
      <div className="flex justify-between items-center">
        <button onClick={() => customPreviousPage()}>Previous</button>
        <button onClick={() => customNextPage()}>Next</button>
      </div>
    </div>
  )
}

export default Table
