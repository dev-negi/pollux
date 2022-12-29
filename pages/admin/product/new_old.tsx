import React, { useState } from 'react'
import AdminLayout from '../../../components/admin/AdminLayout'
// import useForm from '../../../hooks/useForm'
import { useForm } from 'react-hook-form'
import { createProduct, productFormValidation } from '../../../utils'
import FormInput from '../../../components/FormComponents/FormInput'
const initalFormData = [
  {
    id: 1,
    name: 'title',
    type: 'text',
    placeholder: 'Product Title',
    errorMessage:
      "Product Title should be 20-100 characters long and shouldn't include any special character!",
    label: 'Title',
    pattern: '^[A-Za-z0-9]{20,100}$',
    required: true,
  },
  {
    id: 2,
    name: 'description',
    type: 'text',
    placeholder: 'description',
    errorMessage:
      "description should be 10-300 characters long and shouldn't include any special character!",
    label: 'Description',
    pattern: '^[A-Za-z0-9]{10,300}$',
  },
  {
    id: 3,
    name: 'price',
    type: 'number',
    placeholder: '0.0',
    errorMessage:
      "description should be 10-300 characters long and shouldn't include any special character!",
    label: 'Price',
    pattern: '^[A-Za-z0-9]{10,300}$',
  },
  {
    id: 1,
    name: 'vendor',
    type: 'text',
    placeholder: 'Vendor Name',
    errorMessage:
      "Vendor name should be 20-100 characters long and shouldn't include any special character!",
    label: 'Vendor',
    pattern: '^[A-Za-z0-9]{20,100}$',
    required: true,
  },
  {
    id: 4,
    name: 'slug',
    type: 'text',
    placeholder: 'bright-blue-top',
    errorMessage: 'Slug should be 10-100 characters long and',
    label: 'Slug',
    pattern: '^[A-Za-z0-9]{10,100}$',
    required: true,
  },
]

function NewProduct() {
  const initalData = {
    titel: '',
    description: '',
    price: '',
    password: '',
    confirmPassword: '',
  }
  const [formValues, setFormValues] = useState(initalFormData)
  const [values, setValues] = useState(initalData)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <AdminLayout>
      <form onSubmit={handleSubmit}>
        {formValues.map((formValue) => {
          return (
            <FormInput
              key={formValue.id}
              {...formValue}
              value={values[formValue.name]}
              onChange={onChange}
            />
          )
        })}
        <div className="mb-4">
          <button type="submit">Save</button>
        </div>
      </form>
    </AdminLayout>
  )
}

export default NewProduct
// function NewProduct() {
//   const { values, errors, handleChange, handleSubmit } = useForm(
//     createNewProduct,
//     productFormValidation
//   )

//   async function createNewProduct() {
//     console.log('registerUser:-', values)
//     values.title = values.name
//     createProduct(values)
//   }

//   return (
//     <AdminLayout>
//       <div className="flex w-3/4 m-2 px-4">
//         <form onSubmit={handleSubmit} noValidate className="max-w-screen-md">
//           <div className="mb-2">
//             <label htmlFor="name">Title</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full"
//               onChange={handleChange}
//             ></input>
//             {errors.name && <p className="red">{errors.name}</p>}
//           </div>
//           <div className="">
//             <label htmlFor="description">Description</label>
//             <textarea
//               className="w-full"
//               name="description"
//               onChange={handleChange}
//               rows="6"
//             ></textarea>
//           </div>
//           <div className="mb-2">
//             <label htmlFor="price">Price</label>
//             <input
//               type="number"
//               name="price"
//               className="w-full"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className="mb-2">
//             <label htmlFor="slug">Slug</label>
//             <input
//               type="text"
//               name="slug"
//               className="w-full"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className="mb-2">
//             <label htmlFor="vendor">Vendor</label>
//             <input
//               type="text"
//               name="vendor"
//               className="w-full"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className="mb-2">
//             <label htmlFor="inventory">Inventory</label>
//             <input
//               type="number"
//               name="inventory"
//               className="w-full"
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className="mb-4">
//             <button type="submit">Save</button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   )
// }

// export default NewProduct
