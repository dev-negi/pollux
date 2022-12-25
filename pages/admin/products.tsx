import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminProductTable from '../../components/admin/AdminProductTable'
import { fetchProducts } from '../../utils'

export async function getServerSideProps(context) {
  const products = await fetchProducts()
  return {
    props: { products },
  }
}

function AdminProducts({ products }) {
  return (
    <AdminLayout>
      <div className="">Products</div>
      <AdminProductTable products={products} />
    </AdminLayout>
  )
}

export default AdminProducts
