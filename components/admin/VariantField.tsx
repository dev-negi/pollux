import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { XMarkIcon } from '@heroicons/react/24/outline'
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
          <Button onClick={addVariant}>Add</Button>
        </div>
        <div className="flex">
          <Button>Delete</Button>
        </div>
      </div>
      <div className="m-4">
        <VariantOption variantList={variantOption} />
      </div>
    </div>
  )
}

export default VariantField
// function VariantField({ variantOption }) {
//   const initialVariantData = {
//     variantKey: '',
//     variantValue: '',
//   }
//   const dispatch = useDispatch()

//   const [variantData, setVariantData] = useState(initialVariantData)

//   const { variantKey, variantValue } = variantData

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setVariantData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }
//   const addVariant = () => {
//     dispatch(addProductVariantOption({ ...variantData, ...variantDetails }))
//     setVariantData(initialVariantData)
//   }

//   const validateVariantTypeInput = () => true
//   return (
//     <div className="">
//       <div className="flex mt-4 justify-center  border border-gray-300 p-5">
//         <InputField
//           type="text"
//           name="variantKey"
//           value={variantKey}
//           placeholder="Size"
//           onChange={handleChange}
//         />
//         <InputField
//           type="text"
//           name="variantValue"
//           value={variantValue}
//           placeholder="1-2 Year"
//           onChange={handleChange}
//         />
//         <div className="flex">
//           <Button onClick={addVariant}>Add</Button>
//         </div>
//         <div className="flex">
//           <Button>Delete</Button>
//         </div>
//       </div>
//       <div className="m-4">
//         {/* {Object.keys(groupBy(allProductVariant, 'variantKey')).map((key))} */}
//         {/* {variantOption.length > 0 ? (
//           <VariantOption variantList={variantOption} />
//         ) : null} */}
//       </div>
//     </div>
//   )
// }

// export default VariantField

// {groupBy(allProductVariant, 'variantKey').map((key) => {
//   const { variantKey, variantValue } = productVariant
//   return (
//     <span
//       className="bg-gray-400 p-2 text-white border border-1 rounded-full"
//       key={`${variantKey}-${variantValue}`}
//     >
//       {variantValue}
//     </span>
//   )
// })}
