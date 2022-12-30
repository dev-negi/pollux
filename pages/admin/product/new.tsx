import Link from 'next/link'
import { useState } from 'react'

import AdminLayout from '../../../components/admin/AdminLayout'
import FromFields, { VariantFields } from './FormInput'
import useForm from '../../../hooks/useForm'
import {
  loginValidation,
  fetchVendors,
  createProduct,
  fetchVariantType,
  fetchVariantsByType,
} from '../../../utils'

export async function getServerSideProps() {
  const vendors = await fetchVendors()
  const variantTypes = await fetchVariantType()
  return {
    props: { vendors, variantTypes },
  }
}

function NewProduct(props) {
  const { vendors, variantTypes } = props
  const [variantList, setVariantList] = useState([])
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
      type: 'variant',
      lable: 'Variant',
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
      // if (values.name) {
      //   createProduct(values)
      // }
    } catch (error) {
      // TODO: handle errors
      console.log(error)
    }
  }

  const [loggedIn, setLoggedIn] = useState(false)
  const addVariant = () => {
    const id = variantId

    const variantData = {
      id,
      type: 'variant',
    }
    setVariantList((preVariantList) => [...preVariantList, variantData])
    setVariantId((prevId) => prevId + 1)
  }

  const handleChangeVariantChange = (event, index) => {
    handleChange(event, 'variant', index)
  }
  const onChangeVarinat = async (event, id) => {
    const variantTypeValues = await fetchVariantsByType(event.target.value)
    const index = id - 1
    const curentVariantList = [...variantList]
    curentVariantList[index]['variantTypeValues'] = variantTypeValues
    setVariantList(curentVariantList)
  }

  const renderVariants = () => {
    console.log('variantList:-', variantList)
    return variantList.map((variant, index) => (
      <VariantFields
        id={variant.id}
        onChange={(event) => handleChangeVariantChange(event, index)}
        errors={errors}
        values={values}
        variantTypeValues={variant.variantTypeValues}
        variantTypes={variantTypes}
        onChangeVarinat={onChangeVarinat}
      />
    ))
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
          return el.type === 'variant' && variantList.length > 0 ? (
            renderVariants()
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
