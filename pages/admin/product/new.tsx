import Link from 'next/link'
import { useState } from 'react'

import AdminLayout from '../../../components/admin/AdminLayout'
import FromFields, { VariantFields } from './FormInput'
import useForm from '../../../hooks/useForm'
import { loginValidation, fetchVendors, createProduct } from '../../../utils'

export async function getServerSideProps() {
  const vendors = await fetchVendors()
  return {
    props: { vendors },
  }
}

function NewProduct(props) {
  const { vendors } = props
  const [variantId, setVariantId] = useState(1)
  const [prodcutFormData, setProductFormData] = useState([
    {
      id: 1,
      name: 'title',
      type: 'text',
      lable: 'Title',
    },
    {
      id: 2,
      name: 'details',
      type: 'text',
      lable: 'Details',
    },
    {
      id: 3,
      name: 'price',
      type: 'number',
      lable: 'Price',
    },
    {
      id: 4,
      name: 'vendorId',
      type: 'select',
      lable: 'Vendor',
      defaultOption: 'select a vendor',
      options: vendors,
    },
    {
      id: 5,
      name: 'slug',
      type: 'text',
      lable: 'slug',
      disabled: true,
      message: 'Slug will be auto genrated based on product title',
    },
  ])
  const { values, errors, handleChange, handleSubmit } = useForm(
    createNewProduct,
    productFormValidation
  )

  function productFormValidation(values) {
    const errors = {}
    return errors
  }

  async function createNewProduct() {
    try {
      console.log('value:-', values)
      //   createProduct(values)
    } catch (error) {
      // TODO: handle errors
      console.log(error)
    }
  }

  const [loggedIn, setLoggedIn] = useState(false)
  const addVariant = () => {
    const id = prodcutFormData.length + 1

    const variantFormData = {
      id,
      type: 'variant',
      lable: 'Variant',
    }
    setProductFormData((prevFormData) => [...prevFormData, variantFormData])
  }

  return (
    <AdminLayout title="Register">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="mb-4 text-xl">Product</h1>
        {prodcutFormData.map((el) => {
          console.log('el type:-', el.type)
          return el.type === 'variant' ? (
            <VariantFields
              onChange={handleChange}
              errors={errors}
              values={values}
              {...el}
            />
          ) : (
            <FromFields
              key={el.id}
              name={el.name}
              type={el.type}
              label={el.lable}
              value={values[el.name]}
              onChange={handleChange}
              message={el.message}
              disabled={el.disabled}
              errors={errors}
              options={el.options}
              defaultOption={el.defaultOption}
            />
          )
        })}

        {/* <div className="p-4 bg-gray-100">
          <VariantFields />
        </div> */}
        <div>
          <button onClick={addVariant}>Add</button>
        </div>
        <div className="mb-4">
          <button type="submit">Save</button>
        </div>
      </form>
    </AdminLayout>
  )
}

export default NewProduct
