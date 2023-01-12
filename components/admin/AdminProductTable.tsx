import React, { useState } from 'react'
import {
  getProductTableColumn,
  getProdcutTableData,
  fetchProducts,
} from '../../utils'
import Table from '../Table'

function AdminProductTable({ products }) {
  const [productList, setProductList] = useState(products)
  const [currentPage, setCurrentPage] = useState(0)
  const columns = getProductTableColumn(productList)
  const tableData = getProdcutTableData(productList)

  const fetchProductData = async (pageNumber) => {
    setCurrentPage(pageNumber)
    const productData = await fetchProducts(pageNumber)
    setProductList(productData)
  }
  return (
    <div className="flex flex-col">
      <Table
        columns={columns}
        data={tableData}
        fetchProductData={fetchProductData}
        currentPage={currentPage}
      />
    </div>
  )
}

export default AdminProductTable
