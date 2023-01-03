import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CreateVariantOptions from '../../../components/admin/CreateVariantOptions'
import AdminLayout from '../../../components/admin/AdminLayout'
import ProductDetailsEdit from '../../../components/admin/ProductDetailsEdit'
import { selectProduct, selectAppSettingsFn, addProduct } from '../../../redux'
import { fetchVendors, fetchVariantType, createProduct } from '../../../utils'
import VariantField from '../../../components/admin/VariantField'

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
  const [showVariantField, setShowVariantField] = useState(false)

  const saveProdcut = () => {
    createProduct(product)
  }
  const addVariant = () => {
    setShowVariantField(true)
  }
  return (
    <AdminLayout>
      <div className="">
        <h1 className="mb-4 text-xl">Product</h1>
        <div className="">
          <button
            className="pl-5 pr-5 pb-3 pt-3 bg-black text-white text-xs font-bold uppercase trasition duration-500 ease-in hover:bg-black hover:text-white"
            onClick={saveProdcut}
          >
            Save
          </button>
        </div>
        <div className="flex m-4">
          <div className="bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-1/2">
            <ProductDetailsEdit vendors={vendors} productTypes={productTypes} />
            <div className="">
              <button onClick={addVariant}>Add Variant</button>
              {showVariantField ? <VariantField /> : null}
            </div>
          </div>
          <div className="flex lg:w-1/2">
            <div className="ml-4 bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-3/5">
              discount field
            </div>
            <div className="ml-4 bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-2/5">
              right
            </div>
          </div>
        </div>
        <div className="flex m-4">
          <div className="bg-gray-100 p-10 rounded-lg shadow w-4/5">
            <CreateVariantOptions variantOption={product.variantOption} />
          </div>
          <div className="ml-4 bg-gray-100 p-10 rounded-lg shadow w-1/5"></div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default create
