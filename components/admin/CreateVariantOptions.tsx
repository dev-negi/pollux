import React, { useState } from 'react'

import Button from '../UI/Button'
import InputField from '../UI/InputField'
import { groupBy } from '../../utils'
import { updateProductVariantOption } from '../../redux'
import { useSelector } from 'react-redux'
import { selectVariantData } from '../../redux'

// function variantDataHelper(data) {
//   const groupBydata = groupBy(data, 'variantKey')

//   const variantCombo = comboGen(groupBydata, 'variantValue')
//   const allVarinatData = []
//   variantCombo.forEach((item, index) => {
//     allVarinatData.push({ ...item, id: index })
//   })

//   return allVarinatData
// }

function renderVarintFields(data, handleChange, deleteVariant) {
  console.log('renderVarintFields:-', data)
  return data.map((item, index) => {
    const { title, price, costPerItem, comparePrice, quntity, sku, barcode } =
      item
    return (
      <div className="grid grid-flow-row auto-rows-max grid-cols-8">
        <div className="flex justify-start items-center">{title}</div>
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
          value={costPerItem}
          placeholder="799"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="costperitem"
          value={comparePrice}
          placeholder="1200"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="quntity"
          value={quntity}
          placeholder="10"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="sku"
          value={sku}
          placeholder="vku-i8"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="barcode"
          value={barcode}
          placeholder="88938872709"
          onChange={handleChange}
        />
        <Button onClick={deleteVariant}>Delete</Button>
      </div>
    )
  })
}
function CreateVariantOptions({ variantOption }) {
  // const allVariantComData = variantDataHelper(variantOption)
  const [varinatData, setVariantData] = useState(variantOption)
  const allVariantOptions = useSelector(selectVariantData)

  // console.log('varinatData:-', allVariantComData)

  const handleChange = (e, index) => {
    const { name, value } = e.target
    console.log('name:-', name, 'vlaue:-', value)
    // updateProductVariantOption
  }
  const deleteVariant = () => {}
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max grid-cols-8">
        <div className="font-bold text-gray-600 w-full">Title</div>
        <div className="font-bold text-gray-600 w-full">Price</div>
        <div className="font-bold text-gray-600 w-full">Cost per Item</div>
        <div className="font-bold text-gray-600 w-full">Compare Price</div>
        <div className="font-bold text-gray-600 w-full">Quntity</div>
        <div className="block font-bold text-gray-600 w-full">SKU</div>
        <div className="font-bold text-gray-600 w-full">Barcode</div>
      </div>
      {renderVarintFields(allVariantOptions, handleChange, deleteVariant)}
    </>
  )
}

export default CreateVariantOptions
