import React from 'react'
import { getProductTableColumn } from '../../utils'
import Table from '../Table'

function AdminProductTable({ products }) {
  const columns = getProductTableColumn(products)

  return (
    <div className="flex flex-col">
      <Table columns={columns} data={products} />
    </div>
  )
}

export default AdminProductTable
