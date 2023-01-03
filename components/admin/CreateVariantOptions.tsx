import React from 'react'

import Button from '../UI/Button'
import InputField from '../UI/InputField'
function CreateVariantOptions({ variantOption }) {
  const { title, price, costPerItem, comparePrice, quntity, sku, barcode } =
    variantOption
  const handleChange = () => {}
  const deleteVariant = () => {}
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="mb-5 pl-5 block font-bold text-gray-600 w-full">
          Title
        </div>
        <div className="mb-5 block font-bold text-gray-600 w-full">Price</div>
        <div className="mb-5 block font-bold text-gray-600 w-full">
          Cost per Item
        </div>
        <div className="mb-5 block font-bold text-gray-600 w-full">
          Compare Price
        </div>
        <div className="mb-5 block font-bold text-gray-600 w-full">Quntity</div>
        <div className="mb-5 block font-bold text-gray-600 w-full">SKU</div>
        <div className="mb-5 block font-bold text-gray-600 w-full">Barcode</div>
      </div>
      <div className="flex">
        <InputField
          type="text"
          name="title"
          value={title}
          placeholder="Blue frock"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="price"
          value={price}
          placeholder="999"
          onChange={handleChange}
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
      <div className="flex">
        <InputField
          type="text"
          name="title"
          value={title}
          placeholder="Blue frock"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="price"
          value={price}
          placeholder="999"
          onChange={handleChange}
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
      <div className="flex">
        <InputField
          type="text"
          name="title"
          value={title}
          placeholder="Blue frock"
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="price"
          value={price}
          placeholder="999"
          onChange={handleChange}
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
    </div>
  )
}

export default CreateVariantOptions
