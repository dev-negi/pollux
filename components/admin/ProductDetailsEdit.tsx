import React, { use, useState } from 'react'

import InputField from '../UI/InputField'
import ToggleSwitch from '../UI/ToggleSwitch'
function ProductDetailsEdit(props) {
  //   const { name, details, price, inventory, tax, isdiscount, vendor } = props

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
    <div className="bg-gray-100 p-10 rounded-lg shadow md:w-3/4 lg:w-1/2">
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
          <div className="block mb-2 font-bold text-gray-600">Status</div>
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
          <div className="block mb-2 font-bold text-gray-600">Vendor</div>
        </div>
        <div className="">
          <ToggleSwitch
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
