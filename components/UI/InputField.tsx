import React from 'react'

function InputField({
  value,
  label,
  name,
  placeholder,
  min,
  type,
  onChange,
  error,
}) {
  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={name} className="block mb-2 font-bold text-gray-600">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        min={min}
        className="border border-gray-300 shadow p-3 w-full rounded mb-"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p class="text-sm text-red-400 mt-2">error.message</p>}
    </div>
  )
}

export default InputField
