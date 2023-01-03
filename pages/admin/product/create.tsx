import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AdminLayout from '../../../components/admin/AdminLayout'
import ProductDetailsEdit from '../../../components/admin/ProductDetailsEdit'
import { selectProduct, selectAppSettingsFn, addProduct } from '../../../redux'
import { fetchVendors, fetchVariantType, createProduct } from '../../../utils'

export async function getServerSideProps() {
  const vendors = await fetchVendors()
  const variantTypes = await fetchVariantType()
  return {
    props: { vendors, variantTypes },
  }
}

function create(props) {
  const dispatch = useDispatch()
  const product = useSelector(selectProduct)
  const productTypes = useSelector(selectAppSettingsFn('productStatusType'))
  const { vendors, variantTypes } = props

  const saveProdcut = () => {
    createProduct(product)
  }
  return (
    <AdminLayout>
      <div className="w-full">
        <h1 className="mb-4 text-xl">Product</h1>
        <div className="w-full">
          <button
            className="pl-5 pr-5 pb-3 pt-3 bg-black text-white text-xs font-bold uppercase trasition duration-500 ease-in hover:bg-black hover:text-white"
            onClick={saveProdcut}
          >
            Save
          </button>
        </div>
        <div className="flex m-4">
          <div className="w-full">
            <ProductDetailsEdit vendors={vendors} productTypes={productTypes} />
            
          </div>
          <div className="">Varnt</div>
          <div className="">right</div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default create
