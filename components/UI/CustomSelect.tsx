import React, { useState } from 'react'

function CustomSelect(props) {
  const { label, name, statusOption, defaultOption, onChange, value } = props
  //   const [selectedData, updateSelectedData] = useState('')

  //   function handleChange(event) {
  //     updateSelectedData(event.target.value)
  //     if (handleChange) props.onSelectChange(selectedData)
  //   }

  let options = statusOption.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ))

  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="block mb-2 font-bold text-gray-600">
          {label}
        </label>
      )}
      <select
        name={name}
        className="custom-search-select"
        onChange={onChange}
        value={value}
      >
        <option>{defaultOption}</option>
        {options}
      </select>
    </div>
  )
}

export default CustomSelect
