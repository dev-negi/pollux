import React, { useState } from 'react'

import AdminLayout from '../../../components/admin/AdminLayout'
import ProductDetailsEdit from '../../../components/admin/ProductDetailsEdit'
import VariantField from '../../../components/admin/VariantField'
import CreateVariantOptions from '../../../components/admin/CreateVariantOptions'
import { fetchVendors, fetchVariantType, createProduct } from '../../../utils'
import { useSelector } from 'react-redux'
import { selectAppSettingsFn, selectProduct } from '../../../redux'

export async function getServerSideProps() {
  const vendors = await fetchVendors()
  const variantTypes = await fetchVariantType()
  return {
    props: { vendors, variantTypes },
  }
}

function New({ vendors, variantTypes }) {
  const [showVariantField, setShowVariantField] = useState(false)
  const productTypes = useSelector(selectAppSettingsFn('productStatusType'))
  const currentBarcode = useSelector(selectAppSettingsFn('barcode'))
  const product = useSelector(selectProduct)

  const addVariant = () => {
    setShowVariantField(true)
  }
  const saveProdcut = () => {
    createProduct(product, currentBarcode)
  }
  return (
    <AdminLayout>
      <div>
        <div className="absolute bottom-0 bg-gray-100">
          <button
            className="pl-5 pr-5 pb-3 pt-3 bg-black text-white text-xs font-bold uppercase trasition duration-500 ease-in hover:bg-black hover:text-white"
            onClick={saveProdcut}
          >
            Save
          </button>
        </div>
        <h1 className="mb-4 text-xl">Product</h1>

        <div className="bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-1/2">
          <ProductDetailsEdit
            vendors={vendors}
            productTypes={productTypes}
            product={product}
          />
          <button onClick={addVariant}>Add Variant</button>
          {showVariantField ? (
            <VariantField variantOption={product.variantOption} />
          ) : null}
        </div>
        <div className="flex m-4">
          <div className="bg-gray-100 p-10 rounded-lg shadow w-4/5">
            <CreateVariantOptions variantOption={product.variantData} />
          </div>
          <div className="ml-4 bg-gray-100 p-10 rounded-lg shadow w-1/5"></div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default New
