import React, { useState } from 'react'

import Button from '../UI/Button'
import InputField from '../UI/InputField'
import { groupBy } from '../../utils'
import { updateProductVariantOption } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'
import { selectVariantData, updateVariantData } from '../../redux'

function renderVarintFields(data, handleChange) {
  return data.map((item, index) => {
    const { title, price, costperitem, compareprice, quantity, sku, barcode } =
      item
    return (
      <div className="grid grid-flow-row auto-rows-max grid-cols-6">
        <div className="flex justify-start items-center pb-4">{title}</div>
        <InputField
          type="number"
          name="price"
          value={price}
          placeholder="999"
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          type="number"
          name="costperitem"
          value={costperitem}
          placeholder="799"
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          type="number"
          name="compareprice"
          value={compareprice}
          placeholder="1200"
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          type="number"
          name="quantity"
          value={quantity}
          placeholder="10"
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          type="text"
          name="sku"
          value={sku}
          placeholder="vku-i8"
          onChange={(e) => handleChange(e, index)}
        />
      </div>
    )
  })
}
function CreateVariantOptions({ variantOption }) {
  const dispatch = useDispatch()
  const [varinatData, setVariantData] = useState(variantOption)

  const handleChange = (e, index) => {
    let { name, value } = e.target
    if (
      name === 'price' ||
      name === 'compareprice' ||
      name === 'costperitem' ||
      name === 'quantity'
    ) {
      value = parseInt(value)
    }
    dispatch(updateVariantData({ name, value, index }))
  }
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max grid-cols-6">
        <div className="font-bold text-gray-600 w-full">Title</div>
        <div className="font-bold text-gray-600 w-full">Price</div>
        <div className="font-bold text-gray-600 w-full">Cost per Item</div>
        <div className="font-bold text-gray-600 w-full">Compare Price</div>
        <div className="font-bold text-gray-600 w-full">Quntity</div>
        <div className="block font-bold text-gray-600 w-full">SKU</div>
      </div>
      {renderVarintFields(variantOption, handleChange)}
    </>
  )
}

export default CreateVariantOptions
