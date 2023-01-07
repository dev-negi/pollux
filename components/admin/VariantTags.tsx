import React from 'react'
import { useDispatch } from 'react-redux'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { removeProductVariantOption } from '../../redux'

function VariantTags({ data }) {
  const dispatch = useDispatch()
  const removeVarientType = (variantKey, variantValue) => {
    dispatch(removeProductVariantOption({ variantKey, variantValue }))
  }
  return data.map((item) => {
    const { variantKey, variantValue } = item
    return (
      <span
        key={`${variantKey}-${variantValue}`}
        className="inline-flex items-center px-4 py-2 mr-1 bg-gray-200  text-gray-800 text-sm font-medium rounded-md"
      >
        {variantValue}
        <div
          className="ml-1 hover:bg-gray-300"
          onClick={() => removeVarientType(variantKey, variantValue)}
        >
          <XMarkIcon className="w-4 h-4" />
        </div>
      </span>
    )
  })
}

export default VariantTags
