import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminLayout from '../../../components/admin/AdminLayout'
import ProductDetailsEdit from '../../../components/admin/ProductDetailsEdit'
import { selectProduct } from '../../../redux/productSlice'

function create() {
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)

  console.log('product:-', product)
  const { name, details, price, inventory, tax, isdiscount, vendor } = product
  return (
    <AdminLayout>
      <div className="w-full">
        <h1 className="mb-4 text-xl">Product</h1>
        <div className="flex m-4">
          <div className="w-full">
            <ProductDetailsEdit
              name={name}
              details={details}
              price={price}
              inventory={inventory}
              tax={tax}
              isdiscount={isdiscount}
              vendor={vendor}
            />
          </div>
          <div className="">Varnt</div>
          <div className="">right</div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default create
