import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AdminLayout from '../../../components/admin/AdminLayout'
import ProductEditForm from '../../../components/admin/ProductEditForm'
import VariantField from '../../../components/admin/VariantField'
import CreateVariantOptions from '../../../components/admin/CreateVariantOptions'
import {
  selectAppSettingsFn,
  selectVariantData,
  selectVariantOption,
} from '../../../redux'
import {
  fetchVariantType,
  fetchProductDetails,
  fetchVendors,
  editProduct,
} from '../../../utils'

export async function getServerSideProps(context) {
  const product = await fetchProductDetails(context.query.slug)
  const vendors = await fetchVendors()
  const variantTypes = await fetchVariantType()
  return {
    props: { product, vendors, variantTypes },
  }
}

function Edit({ product, vendors, variantTypes }) {
  // console.log('product:-', product)
  const [showVariantField, setShowVariantField] = useState(false)
  const productTypes = useSelector(selectAppSettingsFn('productStatusType'))
  const variantData = useSelector(selectVariantData)
  const variantOption = useSelector(selectVariantOption)
  const addVariant = () => {
    setShowVariantField(true)
  }

  const saveProduct = (values) => {
    // console.log('values:-', values)
    // console.log('variantData:-', variantData)
    editProduct(values)
  }
  return (
    <AdminLayout>
      <div className="bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-1/2">
        <ProductEditForm
          vendors={vendors}
          productTypes={productTypes}
          product={product}
          saveProduct={saveProduct}
        />
        <button onClick={addVariant}>Add Variant</button>
        {showVariantField ? (
          <VariantField variantOption={variantOption} />
        ) : null}
      </div>
      <div className="flex m-4">
        <div className="bg-gray-100 p-10 rounded-lg shadow w-4/5">
          <CreateVariantOptions variantOption={variantData} />
        </div>
        <div className="ml-4 bg-gray-100 p-10 rounded-lg shadow w-1/5"></div>
      </div>
    </AdminLayout>
  )
}

export default Edit
