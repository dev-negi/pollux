import React from 'react'

function FromFields(props) {
  const { type } = props
  if (type === 'text' || type === 'number') {
    return <FormInput {...props} />
  }
  if (type === 'select') {
    return <FormSelectList {...props} />
  }
}

function FormSelectList(props) {
  const {
    onChange,
    errors,
    key,
    name,
    label,
    type,
    disabled,
    message,
    options,
    defaultOption,
  } = props
  return (
    <>
      <label for={name} class="block mb-2 text-sm font-medium">
        Select an option
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
        onChange={onChange}
        name={name}
      >
        <option selected>{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          )
        })}
      </select>
    </>
  )
}
function FormInput(props) {
  const { onChange, errors, key, name, label, type, disabled, message } = props
  return (
    <div className="mb-4">
      <label htmlFor="email">{label}</label>
      <input
        autoComplete="off"
        type={type}
        name={name}
        className="w-full"
        id={key}
        onChange={onChange}
        disabled={disabled}
        required
        autoFocus
      ></input>
      {message}
      {errors.name && <p className="red">{errors.name}</p>}
    </div>
  )
}

{
  /* <FromFields
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
            /> */
}
export const VariantFields = (props) => {
  const { id, type, onChange, errors, values } = props
  const vTitel = `vTitle${id}`
  const vPrice = `vPrice${id}`
  return (
    <div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name={vTitel}
          id={vTitel}
          onChange={onChange}
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name={vPrice}
          id={vPrice}
          onChange={onChange}
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Price
        </label>
      </div>
    </div>
  )
}

export default FromFields
