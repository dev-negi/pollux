import React, { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import InputField from '../UI/InputField'
import ToggleSwitch from '../UI/ToggleSwitch'
import CustomSelect from '../UI/CustomSelect'

import { addProduct } from '../../redux'
import { uploadImages, client } from '../../utils'

function ProductDetailsEdit(props) {
  const { vendors, productTypes } = props
  const dispatch = useDispatch()
  const optionList = productTypes
    .split('-')
    .map((type) => ({ name: type, id: type }))

  const [productTypeList, setProductTypeList] = useState(optionList)
  const [productOnDiscount, setProductOnDiscount] = useState(false)
  const [productValues, setProductValues] = useState({
    name: '',
    details: '',
    price: 0,
    inventory: 0,
    tax: 0,
    isdiscount: false,
    vendor: '',
    status: 'draft',
  })

  const validateProductInput = () => true

  useEffect(() => {
    if (validateProductInput()) {
      dispatch(addProduct(productValues))
    }
  }, [productValues])

  const { name, details, price, inventory, tax, isdiscount, vendor } =
    productValues

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const onDiscountChange = () => {
    setProductOnDiscount((prev) => !prev)
  }
  return (
    <div className="">
      <InputField
        type="text"
        name="name"
        value={name}
        label="Product Title"
        placeholder="Product Title"
        onChange={handleChange}
      />
      <InputField
        type="text"
        name="details"
        value={details}
        label="Details"
        placeholder="Product Details"
        onChange={handleChange}
      />
      <div className="grid grid-cols-3 gap-x-10 items-stretch mt-10 m-auto">
        <InputField
          type="number"
          name="price"
          value={price}
          label="Price"
          min="0"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="tax"
          value={tax}
          label="Tax"
          min="0"
          onChange={handleChange}
        />
        <div className="">
          <div className="block mb-2 font-bold text-gray-600">
            <CustomSelect
              statusOption={productTypeList}
              defaultOption="Select Status"
              name="status"
              label="Product Status"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10 items-stretch mt-10 m-auto">
        <InputField
          type="number"
          name="inventory"
          value={inventory}
          label="Inventory"
          min="0"
          onChange={handleChange}
        />
        <div className="">
          <div className="block mb-2 font-bold text-gray-600">
            <CustomSelect
              statusOption={vendors}
              defaultOption="Select Vendor"
              name="vendor"
              label="Vendor"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="">
          <ToggleSwitch
            name="isDiscount"
            label="Discount"
            handleToggle={onDiscountChange}
            isDiscount={productOnDiscount}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsEdit
