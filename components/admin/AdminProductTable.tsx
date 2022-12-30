import React from 'react'
import { getProductTableColumn, getProdcutTableData } from '../../utils'
import Table from '../Table'

function AdminProductTable({ products }) {
  const columns = getProductTableColumn(products)
  const tableData = getProdcutTableData(products)

  return (
    <div className="flex flex-col">
      <Table columns={columns} data={tableData} />
    </div>
  )
}

export default AdminProductTable
