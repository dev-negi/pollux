import React from 'react'
import Link from 'next/link'
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
      <div className="flex justify-between m-2 px-4">
        <div className="text-xl">Products</div>
        <div className="">
          <div className="">
            <Link href="/admin/product/new">Add Product</Link>
          </div>
        </div>
      </div>
      <AdminProductTable products={products} />
    </AdminLayout>
  )
}

export default AdminProducts
