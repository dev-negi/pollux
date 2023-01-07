import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { TrashIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import InputField from '../UI/InputField'
import Button from '../UI/Button'
import VariantOption from './VariantOption'
import { updateProductVariantOption } from '../../redux'
import {
  addProductVariantOption,
  removeProductVariantOption,
} from '../../redux'
import { groupBy } from '../../utils'

function VariantField({ variantOption }) {
  const initialVariantData = {
    variantKey: '',
    variantValue: '',
  }
  const dispatch = useDispatch()

  const [variantData, setVariantData] = useState(initialVariantData)

  const { variantKey, variantValue } = variantData

  const handleChange = (e) => {
    const { name, value } = e.target
    setVariantData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addVariant = () => {
    if (variantKey === '' || variantValue === '') {
      return
    }
    dispatch(updateProductVariantOption(variantData))
    setVariantData({ variantKey, variantValue: '' })
  }

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
          name="variantValue"
          value={variantValue}
          placeholder="1-2 Year"
          onChange={handleChange}
        />
        <div className="flex">
          <button onClick={addVariant}>
            <PlusCircleIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex">
          <button onClick={addVariant}>
            <TrashIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="m-4">
        <VariantOption variantList={variantOption} />
      </div>
    </div>
  )
}

export default VariantField
