import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import InputField from '../UI/InputField'
import Button from '../UI/Button'
import { addProductVariantOption } from '../../redux'

function VariantField() {
  const initialVariantData = {
    variantKey: '',
    varianValue: '',
  }
  const dispatch = useDispatch()
  const [allProductVariant, setAllProductVariant] = useState([])

  const [variantData, setVariantData] = useState(initialVariantData)

  const { variantKey, varianValue } = variantData

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('name:-', name, 'value:-', value)
    setVariantData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const addVariant = () => {
    setAllProductVariant((prev) => [...prev, variantData])
    setVariantData(initialVariantData)
  }

  const validateVariantTypeInput = () => true

  useEffect(() => {
    if (validateVariantTypeInput()) {
      dispatch(addProductVariantOption(allProductVariant))
    }
  }, [allProductVariant])

  return (
    <div className="">
      <div className="flex mt-4 justify-center  border border-gray-300 p-5">
        <InputField
          type="text"
          name="variantKey"
          value={variantKey}
          placeholder="Size"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="varianValue"
          value={varianValue}
          placeholder="1-2 Year"
          onChange={handleChange}
        />
        <div className="flex">
          <Button onClick={addVariant}>Add</Button>
        </div>
        <div className="flex">
          <Button>Delete</Button>
        </div>
      </div>
      <div className="m-4">
        {allProductVariant.map((productVariant) => {
          const { variantKey, varianValue } = productVariant
          return (
            <span
              className="bg-gray-400 p-2 text-white border border-1 rounded-full"
              key={`${variantKey}-${varianValue}`}
            >
              {varianValue}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default VariantField
